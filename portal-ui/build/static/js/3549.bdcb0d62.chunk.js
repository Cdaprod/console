"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[3549],{65935:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var i=n(29439),s=n(1413),a=n(72791),r=n(57689),o=n(75952),c=n(11135),l=n(25787),d=n(23814),x=n(61889),u=n(64554),p=n(92217),h=n(32291),m=n(74794),y=n(21435),f=n(37516),j=n(80184),g=function(e){var t=e.icon,n=e.description;return(0,j.jsxs)(u.Z,{sx:{display:"flex","& .min-icon":{marginRight:"10px",height:"23px",width:"23px",marginBottom:"10px"}},children:[t," ",(0,j.jsx)("div",{style:{fontSize:"14px",fontStyle:"italic",color:"#5E5E5E"},children:n})]})},v=function(){return(0,j.jsxs)(u.Z,{sx:{flex:1,border:"1px solid #eaeaea",borderRadius:"2px",display:"flex",flexFlow:"column",padding:"20px",marginTop:{xs:"0px"}},children:[(0,j.jsxs)(u.Z,{sx:{fontSize:"16px",fontWeight:600,display:"flex",alignItems:"center",marginBottom:"16px",paddingBottom:"20px","& .min-icon":{height:"21px",width:"21px",marginRight:"15px"}},children:[(0,j.jsx)(o.M9A,{}),(0,j.jsx)("div",{children:"Learn more about Access Keys"})]}),(0,j.jsxs)(u.Z,{sx:{fontSize:"14px",marginBottom:"15px"},children:[(0,j.jsxs)(u.Z,{sx:{paddingBottom:"20px"},children:[(0,j.jsx)(g,{icon:(0,j.jsx)(o.nO6,{}),description:"Create Access Keys"}),(0,j.jsx)(u.Z,{sx:{paddingTop:"20px"},children:"Access Keys inherit the policies explicitly attached to the parent user, and the policies attached to each group in which the parent user has membership."})]}),(0,j.jsxs)(u.Z,{sx:{paddingBottom:"20px"},children:[(0,j.jsx)(g,{icon:(0,j.jsx)(o.tvm,{}),description:"Assign Custom Credentials"}),(0,j.jsx)(u.Z,{sx:{paddingTop:"10px"},children:"Randomized access credentials are recommended, and provided by default. You may use your own custom Access Key and Secret Key by replacing the default values. After creation of any Access Key, you will be given the opportunity to view and download the account credentials."}),(0,j.jsx)(u.Z,{sx:{paddingTop:"10px"},children:"Access Keys support programmatic access by applications. You cannot use a Access Key to log into the MinIO Console."})]}),(0,j.jsxs)(u.Z,{sx:{paddingBottom:"20px"},children:[(0,j.jsx)(g,{icon:(0,j.jsx)(o.v42,{}),description:"Assign Access Policies"}),(0,j.jsx)(u.Z,{sx:{paddingTop:"10px"},children:"You can specify an optional JSON-formatted IAM policy to further restrict Access Key access to a subset of the actions and resources explicitly allowed for the parent user. Additional access beyond that of the parent user cannot be implemented through these policies."}),(0,j.jsx)(u.Z,{sx:{paddingTop:"10px"},children:"You cannot modify the optional Access Key IAM policy after saving."})]})]}),(0,j.jsx)(u.Z,{sx:{display:"flex",flexFlow:"column"}})]})},Z=n(84669),b=n(3579),A=n(20165),K=n(56087),w=n(81207),C=n(37798),S=n(50896),P=n(84741),N=n(60680),k=n(87995),I=n(25469),T=(0,l.Z)((function(e){return(0,c.Z)((0,s.Z)((0,s.Z)({bottomContainer:{display:"flex",flexGrow:1,alignItems:"center",margin:"auto",justifyContent:"center","& div":{width:150,"@media (max-width: 900px)":{flexFlow:"column"}}}},d.DF),d.ID))}))((function(e){var t=e.classes,n=(0,I.TL)(),s=(0,r.s0)(),c=(0,a.useState)(!1),l=(0,i.Z)(c,2),d=l[0],g=l[1],T=(0,a.useState)((0,P.zO)(16)),B=(0,i.Z)(T,2),O=B[0],F=B[1],M=(0,a.useState)((0,P.zO)(32)),z=(0,i.Z)(M,2),E=z[0],R=z[1],Y=(0,a.useState)(!1),D=(0,i.Z)(Y,2),J=D[0],L=D[1],_=(0,a.useState)(null),H=(0,i.Z)(_,2),W=H[0],U=H[1],V=(0,a.useState)(!1),G=(0,i.Z)(V,2),q=G[0],Q=G[1],X=(0,a.useState)(""),$=(0,i.Z)(X,2),ee=$[0],te=$[1];(0,a.useEffect)((function(){d&&w.Z.invoke("POST","/api/v1/service-account-credentials",{policy:ee,accessKey:O,secretKey:E}).then((function(e){g(!1),U({accessKey:e.accessKey||"",secretKey:e.secretKey||"",url:e.url||""})})).catch((function(e){g(!1),n((0,k.Ih)(e))}))}),[d,g,n,ee,O,E]),(0,a.useEffect)((function(){J&&w.Z.invoke("GET","/api/v1/user/policy").then((function(e){te(JSON.stringify(JSON.parse(e),null,4))}))}),[J]);return(0,j.jsxs)(a.Fragment,{children:[null!==W&&(0,j.jsx)(C.default,{newServiceAccount:W,open:null!==W,closeModal:function(){U(null),s("".concat(K.gA.ACCOUNT))},entity:"Access Key"}),(0,j.jsxs)(x.ZP,{item:!0,xs:12,children:[(0,j.jsx)(h.Z,{label:(0,j.jsx)(Z.Z,{to:K.gA.ACCOUNT,label:"Access Keys"})}),(0,j.jsx)(m.Z,{children:(0,j.jsxs)(u.Z,{sx:{display:"grid",padding:"25px",gap:"25px",gridTemplateColumns:{md:"2fr 1.2fr",xs:"1fr"},border:"1px solid #eaeaea"},children:[(0,j.jsxs)(u.Z,{children:[(0,j.jsx)(S.Z,{icon:(0,j.jsx)(o.tVY,{}),children:"Create Access Key"}),(0,j.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){!function(e){e.preventDefault(),g(!0)}(e)},children:(0,j.jsxs)(x.ZP,{container:!0,item:!0,spacing:"20",sx:{marginTop:1},children:[(0,j.jsx)(x.ZP,{item:!0,xs:12,children:(0,j.jsx)(x.ZP,{container:!0,item:!0,spacing:"20",children:(0,j.jsx)(x.ZP,{item:!0,xs:12,children:(0,j.jsxs)(x.ZP,{container:!0,children:[(0,j.jsx)(x.ZP,{item:!0,xs:1,children:(0,j.jsx)(o.tvm,{})}),(0,j.jsx)(x.ZP,{item:!0,children:(0,j.jsxs)(x.ZP,{container:!0,item:!0,spacing:"20",children:[(0,j.jsxs)(x.ZP,{item:!0,xs:12,children:[" ",(0,j.jsx)("div",{className:t.stackedInputs,children:(0,j.jsx)(y.Z,{value:O,label:"Access Key",id:"accessKey",name:"accessKey",placeholder:"Enter Access Key",onChange:function(e){F(e.target.value)}})})]}),(0,j.jsx)(x.ZP,{item:!0,xs:12,children:(0,j.jsx)("div",{className:t.stackedInputs,children:(0,j.jsx)(y.Z,{value:E,label:"Secret Key",id:"secretKey",name:"secretKey",type:q?"text":"password",placeholder:"Enter Secret Key",onChange:function(e){R(e.target.value)},overlayIcon:q?(0,j.jsx)(A.Z,{}):(0,j.jsx)(b.Z,{}),overlayAction:function(){return Q(!q)}})})})]})})]})})})}),(0,j.jsxs)(x.ZP,{container:!0,item:!0,spacing:"20",children:[(0,j.jsx)(x.ZP,{item:!0,xs:12,children:(0,j.jsxs)(x.ZP,{container:!0,children:[(0,j.jsx)(x.ZP,{item:!0,xs:1,children:(0,j.jsx)(o.v42,{})}),(0,j.jsx)(x.ZP,{item:!0,xs:11,children:(0,j.jsx)(f.Z,{value:"serviceAccountPolicy",id:"serviceAccountPolicy",name:"serviceAccountPolicy",checked:J,onChange:function(e){L(e.target.checked)},label:"Restrict beyond user policy",tooltip:"You can specify an optional JSON-formatted IAM policy to further restrict Access Key access to a subset of the actions and resources explicitly allowed for the parent user. Additional access beyond that of the parent user cannot be implemented through these policies."})})]})}),J&&(0,j.jsxs)(x.ZP,{item:!0,xs:12,className:t.codeMirrorContainer,children:[(0,j.jsx)("div",{children:(0,j.jsx)(N.Z,{children:"Current User Policy - edit the JSON to remove permissions for this Access Key"})}),(0,j.jsx)(x.ZP,{item:!0,xs:12,className:t.formScrollable,children:(0,j.jsx)(p.Z,{value:ee,onBeforeChange:function(e,t,n){te(n)},editorHeight:"350px"})})]})]}),(0,j.jsxs)(x.ZP,{item:!0,xs:12,className:t.modalButtonBar,children:[(0,j.jsx)(o.zxk,{id:"clear",type:"button",variant:"regular",onClick:function(){te(""),U(null),F(""),R(""),Q(!1)},label:"Clear"}),(0,j.jsx)(o.zxk,{id:"create-sa",type:"submit",variant:"callAction",color:"primary",label:"Create"})]})]})})]}),(0,j.jsx)(v,{})]})})]})]})}))},37798:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var i=n(1413),s=n(72791),a=n(26181),r=n.n(a),o=n(75952),c=n(11135),l=n(25787),d=n(56028),x=n(61889),u=n(77196),p=n(63466),h=n(78029),m=n.n(h),y=n(23814),f=n(27454),j=n(80184),g=(0,l.Z)((function(e){return(0,c.Z)({container:{display:"flex",flexFlow:"column",padding:"20px 0 8px 0"},inputWithCopy:{"& .MuiInputBase-root ":{width:"100%",background:"#FBFAFA","& .MuiInputBase-input":{height:".8rem"},"& .MuiInputAdornment-positionEnd":{marginRight:".5rem","& .MuiButtonBase-root":{height:"2rem"}}},"& .MuiButtonBase-root .min-icon":{width:".8rem",height:".8rem"}},inputLabel:(0,i.Z)((0,i.Z)({},y.YI.inputLabel),{},{fontSize:".8rem"})})}))((function(e){var t=e.label,n=void 0===t?"":t,i=e.value,s=void 0===i?"":i,a=e.classes,r=void 0===a?{}:a;return(0,j.jsxs)("div",{className:r.container,children:[(0,j.jsxs)("div",{className:r.inputLabel,children:[n,":"]}),(0,j.jsx)("div",{className:r.inputWithCopy,children:(0,j.jsx)(u.Z,{value:s,readOnly:!0,endAdornment:(0,j.jsx)(p.Z,{position:"end",children:(0,j.jsx)(f.Z,{tooltip:"Copy",children:(0,j.jsx)(m(),{text:s,children:(0,j.jsx)(o.zxk,{id:"copy-clipboard","aria-label":"copy",onClick:function(){},onMouseDown:function(){},style:{width:"28px",height:"28px",padding:"0px"},icon:(0,j.jsx)(o.TIy,{})})})})})})})]})})),v=function(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+t),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)},Z=(0,l.Z)((function(e){return(0,c.Z)({warningBlock:{color:"red",fontSize:".85rem",margin:".5rem 0 .5rem 0",display:"flex",alignItems:"center","& svg ":{marginRight:".3rem",height:16,width:16}},credentialTitle:{padding:".8rem 0 0 0",fontWeight:600,fontSize:".9rem"},buttonContainer:{display:"flex",justifyContent:"flex-end",marginTop:"1rem"},credentialsPanel:{overflowY:"auto",maxHeight:350},promptTitle:{display:"flex",alignItems:"center"},buttonSpacer:{marginRight:".9rem"}})}))((function(e){var t=e.classes,n=e.newServiceAccount,a=e.open,c=e.closeModal,l=e.entity;if(!n)return null;var u=r()(n,"console",null),p=r()(n,"idp",!1);return(0,j.jsx)(d.Z,{modalOpen:a,onClose:function(){c()},title:(0,j.jsx)("div",{className:t.promptTitle,children:(0,j.jsxs)("div",{children:["New ",l," Created"]})}),titleIcon:(0,j.jsx)(o.tVY,{}),children:(0,j.jsxs)(x.ZP,{container:!0,children:[(0,j.jsxs)(x.ZP,{item:!0,xs:12,className:t.formScrollable,children:["A new ",l," has been created with the following details:",!p&&u&&(0,j.jsx)(s.Fragment,{children:(0,j.jsxs)(x.ZP,{item:!0,xs:12,className:t.credentialsPanel,children:[(0,j.jsx)("div",{className:t.credentialTitle,children:"Console Credentials"}),Array.isArray(u)&&u.map((function(e,t){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(g,{label:"Access Key",value:e.accessKey}),(0,j.jsx)(g,{label:"Secret Key",value:e.secretKey})]})})),!Array.isArray(u)&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(g,{label:"Access Key",value:u.accessKey}),(0,j.jsx)(g,{label:"Secret Key",value:u.secretKey})]})]})}),(null===u||void 0===u)&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(g,{label:"Access Key",value:n.accessKey||""}),(0,j.jsx)(g,{label:"Secret Key",value:n.secretKey||""})]}),p?(0,j.jsx)("div",{className:t.warningBlock,children:"Please Login via the configured external identity provider."}):(0,j.jsxs)("div",{className:t.warningBlock,children:[(0,j.jsx)(o.e6P,{}),(0,j.jsx)("span",{children:"Write these down, as this is the only time the secret will be displayed."})]})]}),(0,j.jsx)(x.ZP,{item:!0,xs:12,className:t.buttonContainer,children:!p&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(f.Z,{tooltip:"Download credentials in a JSON file formatted for import using mc alias import. This will only include the default login credentials.",children:(0,j.jsx)(o.zxk,{id:"download-button",label:"Download for import",className:t.buttonSpacer,onClick:function(){var e={};u?e=Array.isArray(u)?u.map((function(e){return{url:e.url,accessKey:e.accessKey,secretKey:e.secretKey,api:"s3v4",path:"auto"}}))[0]:{url:u.url,accessKey:u.accessKey,secretKey:u.secretKey,api:"s3v4",path:"auto"}:e={url:n.url,accessKey:n.accessKey,secretKey:n.secretKey,api:"s3v4",path:"auto"};v("credentials.json",JSON.stringify((0,i.Z)({},e)))},icon:(0,j.jsx)(o._8t,{}),variant:"callAction"})}),Array.isArray(u)&&u.length>1&&(0,j.jsx)(f.Z,{tooltip:"Download all access credentials to a JSON file. NOTE: This file is not formatted for import using mc alias import. If you plan to import this alias from the file, please use the Download for Import button. ",children:(0,j.jsx)(o.zxk,{id:"download-all-button",label:"Download all access credentials",className:t.buttonSpacer,onClick:function(){var e={};u&&Array.isArray(u)&&u.length>1&&(e=u.map((function(e){return{accessKey:e.accessKey,secretKey:e.secretKey}})));v("all_credentials.json",JSON.stringify((0,i.Z)({},e)))},icon:(0,j.jsx)(o._8t,{}),variant:"callAction",color:"primary"})})]})})]})})}))},92217:function(e,t,n){var i=n(1413),s=n(72791),a=n(61889),r=n(30829),o=n(20068),c=n(64554),l=n(11135),d=n(25787),x=n(75952),u=n(23814),p=n(78029),h=n.n(p),m=n(24784),y=n(27454),f=n(80184);t.Z=(0,d.Z)((function(e){return(0,l.Z)((0,i.Z)({},u.YI))}))((function(e){var t=e.value,n=e.label,i=void 0===n?"":n,l=e.tooltip,d=void 0===l?"":l,u=e.mode,p=void 0===u?"json":u,j=e.classes,g=e.onBeforeChange,v=(e.readOnly,e.editorHeight),Z=void 0===v?"250px":v;return(0,f.jsxs)(s.Fragment,{children:[(0,f.jsx)(a.ZP,{item:!0,xs:12,sx:{marginBottom:"10px"},children:(0,f.jsxs)(r.Z,{className:j.inputLabel,children:[(0,f.jsx)("span",{children:i}),""!==d&&(0,f.jsx)("div",{className:j.tooltipContainer,children:(0,f.jsx)(o.Z,{title:d,placement:"top-start",children:(0,f.jsx)("div",{className:j.tooltip,children:(0,f.jsx)(x.byK,{})})})})]})}),(0,f.jsx)(a.ZP,{item:!0,xs:12,style:{maxHeight:Z,overflow:"auto",border:"1px solid #eaeaea"},children:(0,f.jsx)(m.Z,{value:t,language:p,onChange:function(e){g(null,null,e.target.value)},id:"code_wrapper",padding:15,style:{fontSize:12,backgroundColor:"#fefefe",fontFamily:"ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",minHeight:Z||"initial",color:"#000000"}})}),(0,f.jsx)(a.ZP,{item:!0,xs:12,sx:{background:"#f7f7f7",border:"1px solid #eaeaea",borderTop:0},children:(0,f.jsx)(c.Z,{sx:{display:"flex",alignItems:"center",padding:"2px",paddingRight:"5px",justifyContent:"flex-end","& button":{height:"26px",width:"26px",padding:"2px"," .min-icon":{marginLeft:"0"}}},children:(0,f.jsx)(y.Z,{tooltip:"Copy to Clipboard",children:(0,f.jsx)(h(),{text:t,children:(0,f.jsx)(x.zxk,{type:"button",id:"copy-code-mirror",icon:(0,f.jsx)(x.TIy,{}),color:"primary",variant:"regular"})})})})})]})}))},60680:function(e,t,n){n(72791);var i=n(11135),s=n(25787),a=n(80184);t.Z=(0,s.Z)((function(e){return(0,i.Z)({root:{padding:0,margin:0,fontSize:".9rem"}})}))((function(e){var t=e.classes,n=e.children;return(0,a.jsx)("h1",{className:t.root,children:n})}))}}]);
//# sourceMappingURL=3549.bdcb0d62.chunk.js.map