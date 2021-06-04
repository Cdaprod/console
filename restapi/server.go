// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

package restapi

import (
	"context"
	"crypto/tls"
	"crypto/x509"
	"errors"
	"fmt"
	"io/ioutil"
	"log"
	"net"
	"net/http"
	"os"
	"os/signal"
	"strconv"
	"sync"
	"sync/atomic"
	"syscall"
	"time"

	"github.com/go-openapi/runtime/flagext"
	flags "github.com/jessevdk/go-flags"

	"github.com/minio/cli"
	"github.com/minio/console/restapi/operations"
)

const (
	schemeHTTP  = "http"
	schemeHTTPS = "https"
)

var defaultSchemes = []string{
	schemeHTTP,
}

var infoLog = log.New(os.Stdout, "I: ", log.LstdFlags|log.Lshortfile)
var errorLog = log.New(os.Stdout, "E: ", log.LstdFlags|log.Lshortfile)

func logInfo(msg string, data ...interface{}) {
	infoLog.Printf(msg+"\n", data...)
}

func logError(msg string, data ...interface{}) {
	errorLog.Printf(msg+"\n", data...)
}

var (
	LogInfo  = logInfo
	LogError = logError
)

// NewServer creates a new api console server but does not configure it
func NewServer(api *operations.ConsoleAPI) *Server {
	s := new(Server)

	s.api = api
	s.shutdown = make(chan struct{})
	s.interrupt = make(chan os.Signal, 1)
	return s
}

func (s *Server) Configure(ctx Context) *Server {
	s.Host = ctx.Host
	s.Port = ctx.HTTPPort
	Port = strconv.Itoa(s.Port)
	Hostname = s.Host

	if len(GlobalPublicCerts) > 0 {
		// If TLS certificates are provided enforce the HTTPS schema, meaning console will redirect
		// plain HTTP connections to HTTPS server
		s.EnabledListeners = []string{"http", "https"}
		s.TLSPort = ctx.HTTPSPort
		// Need to store tls-port, tls-host un config variables so secure.middleware can read from there
		TLSPort = strconv.Itoa(s.TLSPort)
		Hostname = ctx.Host
		TLSRedirect = ctx.TLSRedirect
	}

	// configure the API handlers..
	if s.api != nil {
		s.handler = configureAPI(s.api)
	}

	return s
}

// ConfigureFlags configures the additional flags defined by the handlers. Needs to be called before the parser.Parse
func (s *Server) ConfigureFlags() {
	if s.api != nil {
		configureFlags(s.api)
	}
}

// Context captures all command line flags values
type Context struct {
	Host                string
	HTTPPort, HTTPSPort int
	TLSRedirect         string
	// Legacy options, TODO: remove in future
	TLSCertificate, TLSKey, TLSca string
}

func (c *Context) Load(ctx *cli.Context) error {
	*c = Context{
		Host:        ctx.String("host"),
		HTTPPort:    ctx.Int("port"),
		HTTPSPort:   ctx.Int("tls-port"),
		TLSRedirect: ctx.String("tls-redirect"),
		// Legacy options to be removed.
		TLSCertificate: ctx.String("tls-certificate"),
		TLSKey:         ctx.String("tls-key"),
		TLSca:          ctx.String("tls-ca"),
	}
	if c.HTTPPort > 65535 {
		return errors.New("invalid argument --port out of range - ports can range from 1-65535")
	}
	if c.HTTPSPort > 65535 {
		return errors.New("invalid argument --tls-port out of range - ports can range from 1-65535")
	}
	if c.TLSRedirect != "on" && c.TLSRedirect != "off" {
		return errors.New("invalid argument --tls-redirect only accepts either 'on' or 'off'")
	}
	return nil
}

// Server for the console API
type Server struct {
	EnabledListeners []string         `long:"scheme" description:"the listeners to enable, this can be repeated and defaults to the schemes in the swagger spec"`
	GracefulTimeout  time.Duration    `long:"graceful-timeout" description:"grace period for which to wait before shutting down the server" default:"15s"`
	MaxHeaderSize    flagext.ByteSize `long:"max-header-size" description:"controls the maximum number of bytes the server will read parsing the request header's keys and values, including the request line. It does not limit the size of the request body." default:"1MiB"`

	Host         string        `long:"host" description:"the IP to listen on"`
	Port         int           `long:"port" description:"the port to listen on for insecure connections, defaults to 9090"`
	ReadTimeout  time.Duration `long:"read-timeout" description:"maximum duration before timing out read of the request" default:"30s"`
	WriteTimeout time.Duration `long:"write-timeout" description:"maximum duration before timing out write of the response" default:"60s"`
	httpServerL  net.Listener

	TLSPort           int            `long:"tls-port" description:"the port to listen on for secure connections, defaults to 9443"`
	TLSCertificate    flags.Filename `long:"tls-certificate" description:"the certificate to use for secure connections"`
	TLSCertificateKey flags.Filename `long:"tls-key" description:"the private key to use for secure connections"`
	TLSCACertificate  flags.Filename `long:"tls-ca" description:"the certificate authority file to be used to trust MinIO server"`
	httpsServerL      net.Listener

	api          *operations.ConsoleAPI
	handler      http.Handler
	hasListeners bool
	shutdown     chan struct{}
	shuttingDown int32
	interrupted  bool
	interrupt    chan os.Signal
}

// Log logs message either via defined user logger or via system one if no user logger is defined.
func (s *Server) Log(f string, args ...interface{}) {
	logInfo(f, args...)
}

// Fatal logs message either via defined user logger or via system one if no user logger is defined.
// Exits with non-zero status after printing
func (s *Server) Fatal(f string, args ...interface{}) {
	logError(f, args)
	os.Exit(1)
}

func (s *Server) hasScheme(scheme string) bool {
	schemes := s.EnabledListeners
	if len(schemes) == 0 {
		schemes = defaultSchemes
	}

	for _, v := range schemes {
		if v == scheme {
			return true
		}
	}
	return false
}

// Serve the api
func (s *Server) Serve() (err error) {
	if !s.hasListeners {
		if err = s.Listen(); err != nil {
			return err
		}
	}

	// set default handler, if none is set
	if s.handler == nil {
		if s.api == nil {
			return errors.New("can't create the default handler, as no api is set")
		}

		s.SetHandler(s.api.Serve(nil))
	}

	wg := new(sync.WaitGroup)
	once := new(sync.Once)
	signalNotify(s.interrupt)
	go handleInterrupt(once, s)

	var servers []*http.Server

	if s.hasScheme(schemeHTTP) {
		httpServer := new(http.Server)
		httpServer.MaxHeaderBytes = int(s.MaxHeaderSize)
		httpServer.ReadTimeout = s.ReadTimeout
		httpServer.WriteTimeout = s.WriteTimeout
		httpServer.Handler = s.handler

		servers = append(servers, httpServer)
		wg.Add(1)
		s.Log("Serving console at http://%s", s.httpServerL.Addr())
		go func(l net.Listener) {
			defer wg.Done()
			httpServer.Serve(l)
			s.Log("Stopped serving console at http://%s", l.Addr())
		}(s.httpServerL)
	}

	if s.hasScheme(schemeHTTPS) {
		httpsServer := new(http.Server)
		httpsServer.MaxHeaderBytes = int(s.MaxHeaderSize)
		httpsServer.ReadTimeout = s.ReadTimeout
		httpsServer.WriteTimeout = s.WriteTimeout
		httpsServer.Handler = s.handler

		// Inspired by https://blog.bracebin.com/achieving-perfect-ssl-labs-score-with-go
		httpsServer.TLSConfig = &tls.Config{
			// Causes servers to use Go's default ciphersuite preferences,
			// which are tuned to avoid attacks. Does nothing on clients.
			PreferServerCipherSuites: true,
			// Only use curves which have assembly implementations
			// https://github.com/golang/go/tree/master/src/crypto/elliptic
			CurvePreferences: []tls.CurveID{tls.CurveP256},
			// Use modern tls mode https://wiki.mozilla.org/Security/Server_Side_TLS#Modern_compatibility
			NextProtos: []string{"h2", "http/1.1"},
			// https://www.owasp.org/index.php/Transport_Layer_Protection_Cheat_Sheet#Rule_-_Only_Support_Strong_Protocols
			MinVersion: tls.VersionTLS12,
			// These ciphersuites support Forward Secrecy: https://en.wikipedia.org/wiki/Forward_secrecy
			CipherSuites: []uint16{
				tls.TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,
				tls.TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,
				tls.TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,
				tls.TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,
				tls.TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,
				tls.TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,
			},
		}

		// build standard config from server options
		if s.TLSCertificate != "" && s.TLSCertificateKey != "" {
			httpsServer.TLSConfig.Certificates = make([]tls.Certificate, 1)
			httpsServer.TLSConfig.Certificates[0], err = tls.LoadX509KeyPair(string(s.TLSCertificate), string(s.TLSCertificateKey))
			if err != nil {
				return err
			}
		}

		if s.TLSCACertificate != "" {
			// include specified CA certificate
			caCert, caCertErr := ioutil.ReadFile(string(s.TLSCACertificate))
			if caCertErr != nil {
				return caCertErr
			}
			caCertPool := x509.NewCertPool()
			ok := caCertPool.AppendCertsFromPEM(caCert)
			if !ok {
				return fmt.Errorf("cannot parse CA certificate")
			}
			httpsServer.TLSConfig.ClientCAs = caCertPool
			httpsServer.TLSConfig.ClientAuth = tls.RequireAndVerifyClientCert
		}

		// call custom TLS configurator
		configureTLS(httpsServer.TLSConfig)

		if len(httpsServer.TLSConfig.Certificates) == 0 || httpsServer.TLSConfig.GetCertificate == nil {
			// after standard and custom config are passed, this ends up with no certificate
			if s.TLSCertificate == "" {
				if s.TLSCertificateKey == "" {
					s.Fatal("the required flags `--tls-certificate` and `--tls-key` were not specified")
				}
				s.Fatal("the required flag `--tls-certificate` was not specified")
			}
			if s.TLSCertificateKey == "" {
				s.Fatal("the required flag `--tls-key` was not specified")
			}
			// this happens with a wrong custom TLS configurator
			s.Fatal("no certificate was configured for TLS")
		}

		// must have at least one certificate or panics
		httpsServer.TLSConfig.BuildNameToCertificate()

		servers = append(servers, httpsServer)
		wg.Add(1)
		s.Log("Serving console at https://%s", s.httpsServerL.Addr())
		go func(l net.Listener) {
			defer wg.Done()
			httpsServer.Serve(l)
			s.Log("Stopped serving console at https://%s", l.Addr())
		}(tls.NewListener(s.httpsServerL, httpsServer.TLSConfig))
	}

	wg.Add(1)
	go s.handleShutdown(wg, servers)

	wg.Wait()
	return nil
}

// Listen creates the listeners for the server
func (s *Server) Listen() error {
	if s.hasListeners { // already done this
		return nil
	}

	var err error
	if s.hasScheme(schemeHTTP) {
		s.httpServerL, err = net.Listen("tcp", net.JoinHostPort(s.Host, strconv.Itoa(s.Port)))
		if err != nil {
			return err
		}
	}

	if s.hasScheme(schemeHTTPS) {
		s.httpsServerL, err = net.Listen("tcp", net.JoinHostPort(s.Host, strconv.Itoa(s.TLSPort)))
		if err != nil {
			return err
		}
	}

	s.hasListeners = true
	return nil
}

// Shutdown server and clean up resources
func (s *Server) Shutdown() error {
	if atomic.CompareAndSwapInt32(&s.shuttingDown, 0, 1) {
		close(s.shutdown)
	}
	return nil
}

func (s *Server) handleShutdown(wg *sync.WaitGroup, servers []*http.Server) {
	// wg.Done must occur last, after s.api.ServerShutdown()
	// (to preserve old behaviour)
	defer wg.Done()

	<-s.shutdown

	ctx, cancel := context.WithTimeout(context.Background(), s.GracefulTimeout)
	defer cancel()

	// first execute the pre-shutdown hook
	s.api.PreServerShutdown()

	shutdownChan := make(chan bool)
	for i := range servers {
		server := servers[i]
		go func() {
			var success bool
			defer func() {
				shutdownChan <- success
			}()
			if err := server.Shutdown(ctx); err != nil {
				// Error from closing listeners, or context timeout:
				s.Log("HTTP server Shutdown: %v", err)
			} else {
				success = true
			}
		}()
	}

	// Wait until all listeners have successfully shut down before calling ServerShutdown
	success := true
	for range servers {
		success = success && <-shutdownChan
	}
	if success {
		s.api.ServerShutdown()
	}
}

// GetHandler returns a handler useful for testing
func (s *Server) GetHandler() http.Handler {
	return s.handler
}

// SetHandler allows for setting a http handler on this server
func (s *Server) SetHandler(handler http.Handler) {
	s.handler = handler
}

// HTTPListener returns the http listener
func (s *Server) HTTPListener() (net.Listener, error) {
	if !s.hasListeners {
		if err := s.Listen(); err != nil {
			return nil, err
		}
	}
	return s.httpServerL, nil
}

// TLSListener returns the https listener
func (s *Server) TLSListener() (net.Listener, error) {
	if !s.hasListeners {
		if err := s.Listen(); err != nil {
			return nil, err
		}
	}
	return s.httpsServerL, nil
}

func handleInterrupt(once *sync.Once, s *Server) {
	once.Do(func() {
		for range s.interrupt {
			if s.interrupted {
				s.Log("Server already shutting down")
				continue
			}
			s.interrupted = true
			s.Log("Shutting down... ")
			if err := s.Shutdown(); err != nil {
				s.Log("HTTP server Shutdown: %v", err)
			}
		}
	})
}

func signalNotify(interrupt chan<- os.Signal) {
	signal.Notify(interrupt, syscall.SIGINT, syscall.SIGTERM)
}
