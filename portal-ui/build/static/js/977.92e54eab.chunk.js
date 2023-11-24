"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[977],{10977:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var i=n(29439),r=n(72791),s=n(17691),o=n(26181),a=n.n(o),l=n(57689),c=n(29945),u=n(45248),d=n(44690),x=n(78687),h=n(87995),m=n(84741),j=n(27454),f=n(64561),b=n(92717),g=n(80184),p=function(e){var t=e.hasErrors,n=(0,d.TL)(),i=(0,x.v9)((function(e){return e.addBucket.name}));return(0,g.jsx)(c.Wzg,{id:"bucket-name",name:"bucket-name",error:t?"Invalid bucket name":"",onFocus:function(){n((0,f.hU)(!0))},onChange:function(e){n((0,f.qC)(e.target.value))},label:"Bucket Name",value:i,required:!0})},v=n(56087),k=n(38442),T=function(e){var t=e.ruleText;return(0,g.jsx)(r.Fragment,{children:(0,g.jsxs)(c.rjZ,{container:!0,style:{display:"flex",justifyContent:"flex-start"},children:[(0,g.jsx)(c.rjZ,{item:!0,xs:1,children:(0,g.jsx)(c.EjK,{width:"16px",height:"16px",style:{color:"#18BF42"}})}),(0,g.jsx)(c.rjZ,{item:!0,xs:9,sx:{color:"#8f949c",display:"flex",justifyContent:"flex-start"},children:t})]})})},C=function(e){var t=e.ruleText;return(0,g.jsx)(r.Fragment,{children:(0,g.jsxs)(c.rjZ,{container:!0,sx:{color:"#C83B51",display:"flex",justifyContent:"flex-start"},children:[(0,g.jsx)(c.rjZ,{item:!0,xs:1,sx:{paddingRight:1},children:(0,g.jsx)(c.NvT,{width:"16px",height:"16px"})}),(0,g.jsx)(c.rjZ,{item:!0,xs:9,sx:{color:"#C83B51",display:"flex",justifyContent:"flex-start",paddingLeft:1},children:t})]})})},y=function(e){var t=e.ruleText;return(0,g.jsx)(r.Fragment,{children:(0,g.jsxs)(c.rjZ,{container:!0,sx:{display:"flex",justifyContent:"flex-start"},children:[(0,g.jsx)(c.rjZ,{item:!0,xs:1,children:(0,g.jsx)(c.J$M,{width:"12px",height:"12px",style:{color:"#8f949c"}})}),(0,g.jsx)(c.rjZ,{item:!0,xs:9,sx:{color:"#8f949c",display:"flex",justifyContent:"flex-start"},style:{},children:t})]})})},B=function(e){var t=e.errorList,n="Bucket names must be between 3 (min) and 63 (max) characters long.",s="Bucket names can consist only of lowercase letters, numbers, dots (.), and hyphens (-).",o="Bucket names must not contain two adjacent periods, or a period adjacent to a hyphen.",a="Bucket names must not be formatted as an IP address (for example, 192.168.5.4).",l="Bucket names must not start with the prefix xn--.",u="Bucket names must not end with the suffix -s3alias. This suffix is reserved for access point alias names.",d="Bucket names must be unique within a partition.",h=(0,x.v9)((function(e){return e.addBucket.name})),m=(0,r.useState)(!1),j=(0,i.Z)(m,2),f=j[0],b=j[1],p=(0,x.v9)((function(e){return e.addBucket.loading})),v=(0,i.Z)(t,7),k=v[0],B=v[1],F=v[2],_=v[3],E=v[4],S=v[5],w=v[6];return(0,g.jsxs)(r.Fragment,{children:[(0,g.jsx)(c.cvr,{id:"toggle-naming-rules",open:f,label:"".concat(f?"Hide":"View"," Bucket Naming Rules"),onClick:function(){b(!f)}}),f&&(0,g.jsxs)(c.rjZ,{container:!0,sx:{fontSize:14,paddingTop:12},children:[(0,g.jsxs)(c.rjZ,{item:!0,xs:6,children:[0===h.length?(0,g.jsx)(y,{ruleText:n}):k?(0,g.jsx)(T,{ruleText:n}):(0,g.jsx)(C,{ruleText:n}),0===h.length?(0,g.jsx)(y,{ruleText:s}):B?(0,g.jsx)(T,{ruleText:s}):(0,g.jsx)(C,{ruleText:s}),0===h.length?(0,g.jsx)(y,{ruleText:o}):F?(0,g.jsx)(T,{ruleText:o}):(0,g.jsx)(C,{ruleText:o}),0===h.length?(0,g.jsx)(y,{ruleText:a}):_?(0,g.jsx)(T,{ruleText:a}):(0,g.jsx)(C,{ruleText:a})]}),(0,g.jsxs)(c.rjZ,{item:!0,xs:6,children:[0===h.length?(0,g.jsx)(y,{ruleText:l}):E?(0,g.jsx)(T,{ruleText:l}):(0,g.jsx)(C,{ruleText:l}),0===h.length?(0,g.jsx)(y,{ruleText:u}):S?(0,g.jsx)(T,{ruleText:u}):(0,g.jsx)(C,{ruleText:u}),0===h.length?(0,g.jsx)(y,{ruleText:d}):w?(0,g.jsx)(T,{ruleText:d}):(0,g.jsx)(C,{ruleText:d})]})]}),p&&(0,g.jsx)(c.rjZ,{item:!0,xs:12,children:(0,g.jsx)(c.kod,{})})]})},F=n(47974),_=n(31776),E=n(82342),S=n(99670),w=n(59447),I=s.ZP.div((function(e){var t=e.theme;return{color:a()(t,"signalColors.danger","#C51B3F"),border:"1px solid ".concat(a()(t,"signalColors.danger","#C51B3F")),padding:8,borderRadius:3}})),O=function(){var e=(0,d.TL)(),t=(0,l.s0)(),n=new RegExp("^[a-z0-9][a-z0-9\\.\\-]{1,61}[a-z0-9]$"),s=new RegExp("^(\\d+\\.){3}\\d+$"),o=(0,x.v9)((function(e){return e.addBucket.name})),a=(0,x.v9)((function(e){return e.addBucket.isDirty})),T=(0,r.useState)([]),C=(0,i.Z)(T,2),y=C[0],O=C[1],Z=y.filter((function(e){return!e})).length>0,N=(0,r.useState)([]),P=(0,i.Z)(N,2),U=P[0],q=P[1],R=(0,x.v9)((function(e){return e.addBucket.versioningEnabled})),L=(0,x.v9)((function(e){return e.addBucket.excludeFolders})),z=(0,x.v9)((function(e){return e.addBucket.excludedPrefixes})),V=(0,x.v9)((function(e){return e.addBucket.lockingEnabled})),A=(0,x.v9)((function(e){return e.addBucket.quotaEnabled})),K=(0,x.v9)((function(e){return e.addBucket.quotaSize})),M=(0,x.v9)((function(e){return e.addBucket.quotaUnit})),D=(0,x.v9)((function(e){return e.addBucket.retentionEnabled})),G=(0,x.v9)((function(e){return e.addBucket.retentionMode})),W=(0,x.v9)((function(e){return e.addBucket.retentionUnit})),Y=(0,x.v9)((function(e){return e.addBucket.retentionValidity})),J=(0,x.v9)((function(e){return e.addBucket.loading})),Q=(0,x.v9)((function(e){return e.addBucket.invalidFields})),$=(0,x.v9)((function(e){return e.addBucket.lockingFieldDisabled})),X=(0,x.v9)(h.N5),H=(0,x.v9)(h.gw),ee=(0,x.v9)((function(e){return e.addBucket.navigateTo})),te=(0,k.F)("*",[v.Ft.S3_PUT_BUCKET_VERSIONING,v.Ft.S3_PUT_BUCKET_OBJECT_LOCK_CONFIGURATION,v.Ft.S3_PUT_ACTIONS],!0),ne=(0,k.F)("*",[v.Ft.S3_PUT_BUCKET_VERSIONING,v.Ft.S3_PUT_ACTIONS]);(0,r.useEffect)((function(){var e=[!(a&&(o.length<3||o.length>63)),n.test(o),!(o.includes(".-")||o.includes("-.")||o.includes("..")),!s.test(o),!o.startsWith("xn--"),!o.endsWith("-s3alias"),!U.includes(o)];O(e)}),[o,a]),(0,r.useEffect)((function(){e((0,f.qC)("")),e((0,f.hU)(!1));_.h.buckets.listBuckets().then((function(t){if(t.data){var n=[];null!=t.data.buckets&&t.data.buckets.length>0&&t.data.buckets.forEach((function(e){n.push(e.name)})),q(n)}else t.error&&e((0,h.Ih)((0,E.g)(t.error)))})).catch((function(t){e((0,h.Ih)((0,E.g)(t)))}))}),[e]);return(0,r.useEffect)((function(){if(""!==ee){var n="".concat(ee);e((0,f.Fx)()),t(n)}}),[ee,t,e]),(0,r.useEffect)((function(){e((0,h.Sc)("add_bucket"))}),[]),(0,g.jsxs)(r.Fragment,{children:[(0,g.jsx)(F.Z,{label:(0,g.jsx)(c.hbI,{label:"Buckets",onClick:function(){return t("/buckets")}}),actions:(0,g.jsx)(S.Z,{})}),(0,g.jsx)(c.Xgh,{children:(0,g.jsx)(c.ltY,{title:"Create Bucket",icon:(0,g.jsx)(c.wNb,{}),helpBox:(0,g.jsx)(c.KfX,{iconComponent:(0,g.jsx)(c.wNb,{}),title:"Buckets",help:(0,g.jsxs)(r.Fragment,{children:["MinIO uses buckets to organize objects. A bucket is similar to a folder or directory in a filesystem, where each bucket can hold an arbitrary number of objects.",(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),(0,g.jsx)("b",{children:"Versioning"})," allows to keep multiple versions of the same object under the same key.",(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),(0,g.jsx)("b",{children:"Object Locking"})," prevents objects from being deleted. Required to support retention and legal hold. Can only be enabled at bucket creation.",(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),(0,g.jsx)("b",{children:"Quota"})," limits the amount of data in the bucket.",te&&(0,g.jsxs)(r.Fragment,{children:[(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),(0,g.jsx)("b",{children:"Retention"})," imposes rules to prevent object deletion for a period of time. Versioning must be enabled in order to set bucket retention policies."]}),(0,g.jsx)("br",{}),(0,g.jsx)("br",{})]})}),children:(0,g.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(t){t.preventDefault(),e((0,b.I)())},children:[(0,g.jsxs)(c.xuv,{children:[(0,g.jsx)(p,{hasErrors:Z}),(0,g.jsx)(c.xuv,{sx:{margin:"10px 0"},children:(0,g.jsx)(B,{errorList:y})}),(0,g.jsx)(c.NZf,{separator:!0,children:"Features"}),(0,g.jsxs)(c.xuv,{sx:{marginTop:10},children:[!X&&(0,g.jsxs)(r.Fragment,{children:[(0,g.jsxs)(I,{children:["These features are unavailable in a single-disk setup.",(0,g.jsx)("br",{}),"Please deploy a server in"," ",(0,g.jsx)("a",{href:"https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html?ref=con",target:"_blank",rel:"noopener",children:"Distributed Mode"})," ","to use these features."]}),(0,g.jsx)("br",{}),(0,g.jsx)("br",{})]}),H.enabled&&(0,g.jsxs)(r.Fragment,{children:[(0,g.jsx)("br",{}),(0,g.jsxs)(c.xuv,{withBorders:!0,sx:{display:"flex",alignItems:"center",padding:"10px","& > .min-icon ":{width:20,height:20,marginRight:10}},children:[(0,g.jsx)(c.szr,{})," Versioning setting cannot be changed as cluster replication is enabled for this site."]}),(0,g.jsx)("br",{})]}),(0,g.jsx)(c.rsf,{value:"versioned",id:"versioned",name:"versioned",checked:R,onChange:function(t){e((0,f.E2)(t.target.checked))},label:"Versioning",disabled:!X||V||H.enabled||!ne,tooltip:ne?V&&R?"You must disable Locking before Versioning can be disabled":"":(0,v.MK)([v.Ft.S3_PUT_BUCKET_VERSIONING,v.Ft.S3_PUT_ACTIONS],"Versioning"),helpTip:(0,g.jsxs)(r.Fragment,{children:["MinIO supports keeping multiple"," ",(0,g.jsx)("a",{href:"https://min.io/docs/minio/kubernetes/upstream/administration/object-management/object-versioning.html#minio-bucket-versioning",target:"blank",children:"\u201cversions\u201d"})," ","of an object in a single bucket.",(0,g.jsx)("br",{}),"Versioning is required to enable"," ",(0,g.jsx)("a",{href:"https://min.io/docs/minio/macos/administration/object-management.html#object-retention",target:"blank",children:"Object Locking"})," ","and"," ",(0,g.jsx)("a",{href:"https://min.io/docs/minio/macos/administration/object-management/object-retention.html#object-retention-modes",target:"blank",children:"Retention"}),"."]}),helpTipPlacement:"right"}),R&&X&&!V&&(0,g.jsxs)(r.Fragment,{children:[(0,g.jsx)(c.rsf,{id:"excludeFolders",label:"Exclude Folders",checked:L,onChange:function(t){e((0,f.Rn)(t.target.checked))},indicatorLabels:["Enabled","Disabled"],helpTip:(0,g.jsxs)(r.Fragment,{children:["You can choose to"," ",(0,g.jsx)("a",{href:"https://min.io/docs/minio/windows/administration/object-management/object-versioning.html#exclude-folders-from-versioning",children:"exclude folders and prefixes"})," ","from versioning if Object Locking is not enabled.",(0,g.jsx)("br",{}),"MinIO requires versioning to support replication. Objects in excluded prefixes do not replicate to any peer site or remote site."]}),helpTipPlacement:"right"}),(0,g.jsx)(w.Z,{elements:z,label:"Excluded Prefixes",name:"excludedPrefixes",onChange:function(t){var n="";n=Array.isArray(t)?t.join(","):t,e((0,f.Nf)(n))},withBorder:!0})]}),(0,g.jsx)(c.rsf,{value:"locking",id:"locking",name:"locking",disabled:$||!X||!te,checked:V,onChange:function(t){e((0,f.j9)(t.target.checked)),t.target.checked&&!H.enabled&&e((0,f.E2)(!0))},label:"Object Locking",tooltip:te?"".concat(R?"Exclude Folders & Exclude Prefixes options will not be available if this option is enabled.":""):(0,v.MK)([v.Ft.S3_PUT_BUCKET_VERSIONING,v.Ft.S3_PUT_BUCKET_OBJECT_LOCK_CONFIGURATION,v.Ft.S3_PUT_ACTIONS],"Locking"),helpTip:(0,g.jsxs)(r.Fragment,{children:["You can only enable"," ",(0,g.jsx)("a",{href:"https://min.io/docs/minio/macos/administration/object-management.html#object-retention",target:"blank",children:"Object Locking"})," ","when first creating a bucket."]}),helpTipPlacement:"right"}),(0,g.jsx)(c.rsf,{value:"bucket_quota",id:"bucket_quota",name:"bucket_quota",checked:A,onChange:function(t){e((0,f.WC)(t.target.checked))},label:"Quota",disabled:!X,helpTip:(0,g.jsxs)(r.Fragment,{children:["Setting a"," ",(0,g.jsx)("a",{href:"https://min.io/docs/minio/linux/reference/minio-mc/mc-quota-set.html",target:"blank",children:"quota"})," ","assigns a hard limit to a bucket beyond which MinIO does not allow writes."]}),helpTipPlacement:"right"}),A&&X&&(0,g.jsx)(r.Fragment,{children:(0,g.jsx)(c.Wzg,{type:"string",id:"quota_size",name:"quota_size",onChange:function(t){e((0,f.Rj)(t.target.value))},label:"Capacity",value:K,required:!0,min:"1",overlayObject:(0,g.jsx)(m.Z,{id:"quota_unit",onUnitChange:function(t){e((0,f.ND)(t))},unitSelected:M,unitsList:(0,u.zQ)(["Ki"]),disabled:!1}),error:Q.includes("quotaSize")?"Please enter a valid quota":""})}),R&&X&&te&&(0,g.jsx)(c.rsf,{value:"bucket_retention",id:"bucket_retention",name:"bucket_retention",checked:D,onChange:function(t){e((0,f.bc)(t.target.checked))},label:"Retention",helpTip:(0,g.jsxs)(r.Fragment,{children:["MinIO supports setting both"," ",(0,g.jsx)("a",{href:"https://min.io/docs/minio/macos/administration/object-management/object-retention.html#configure-bucket-default-object-retention",target:"blank",children:"bucket-default"})," ","and per-object retention rules.",(0,g.jsx)("br",{}),(0,g.jsx)("br",{})," For per-object retention settings, defer to the documentation for the PUT operation used by your preferred SDK."]}),helpTipPlacement:"right"}),D&&X&&(0,g.jsxs)(r.Fragment,{children:[(0,g.jsx)(c.Eep,{currentValue:G,id:"retention_mode",name:"retention_mode",label:"Mode",onChange:function(t){e((0,f.VK)(t.target.value))},selectorOptions:[{value:"compliance",label:"Compliance"},{value:"governance",label:"Governance"}],helpTip:(0,g.jsxs)(r.Fragment,{children:[" ",(0,g.jsx)("a",{href:"https://min.io/docs/minio/macos/administration/object-management/object-retention.html#minio-object-locking-compliance",target:"blank",children:"Compliance"})," ","lock protects Objects from write operations by all users, including the MinIO root user.",(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),(0,g.jsx)("a",{href:"https://min.io/docs/minio/macos/administration/object-management/object-retention.html#minio-object-locking-governance",target:"blank",children:"Governance"})," ","lock protects Objects from write operations by non-privileged users."]}),helpTipPlacement:"right"}),(0,g.jsx)(c.Wzg,{type:"number",id:"retention_validity",name:"retention_validity",onChange:function(t){e((0,f.Mn)(t.target.valueAsNumber))},label:"Validity",value:String(Y),required:!0,overlayObject:(0,g.jsx)(m.Z,{id:"retention_unit",onUnitChange:function(t){e((0,f.hx)(t))},unitSelected:W,unitsList:[{value:"days",label:"Days"},{value:"years",label:"Years"}],disabled:!1})})]})]})]}),(0,g.jsxs)(c.rjZ,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:10,marginTop:15},children:[(0,g.jsx)(c.zxk,{id:"clear",type:"button",variant:"regular",className:"clearButton",onClick:function(){e((0,f.Fx)())},label:"Clear"}),(0,g.jsx)(j.Z,{tooltip:Q.length>0||!a||Z?"You must apply a valid name to the bucket":"",children:(0,g.jsx)(c.zxk,{id:"create-bucket",type:"submit",variant:"callAction",color:"primary",disabled:J||Q.length>0||!a||Z,label:"Create Bucket"})})]}),J&&(0,g.jsx)(c.rjZ,{item:!0,xs:12,children:(0,g.jsx)(c.kod,{})})]})})})]})}},59447:function(e,t,n){var i=n(93433),r=n(29439),s=n(72791),o=n(26181),a=n.n(o),l=n(29945),c=n(80184);t.Z=function(e){var t=e.elements,n=e.name,o=e.label,u=e.tooltip,d=void 0===u?"":u,x=e.commonPlaceholder,h=void 0===x?"":x,m=e.onChange,j=e.withBorder,f=void 0!==j&&j,b=(0,s.useState)([""]),g=(0,r.Z)(b,2),p=g[0],v=g[1],k=(0,s.createRef)();(0,s.useEffect)((function(){if(1===p.length&&""===p[0]&&t&&""!==t){var e=t.split(",");e.push(""),v(e)}}),[t,p]),(0,s.useEffect)((function(){if(p.length>1){var e=k.current;e&&e.scrollIntoView(!1)}}),[p,k]);var T=(0,s.useCallback)((function(e){m(e)}),[m]),C=(0,s.useRef)(!0);(0,s.useEffect)((function(){if(C.current)C.current=!1;else{var e=p.filter((function(e){return""!==e.trim()})).join(",");T(e)}}),[p]);var y=function(e){e.persist();var t=(0,i.Z)(p),n=a()(e.target,"dataset.index","0");t[parseInt(n)]=e.target.value,v(t)},B=p.map((function(e,t){return(0,c.jsx)(l.Wzg,{id:"".concat(n,"-").concat(t.toString()),label:"",name:"".concat(n,"-").concat(t.toString()),value:p[t],onChange:y,index:t,placeholder:h,overlayIcon:t===p.length-1?(0,c.jsx)(l.dtP,{}):null,overlayAction:function(){!function(e){if(""!==e[e.length-1].trim()){var t=(0,i.Z)(e);t.push(""),v(t)}}(p)}},"csv-multi-".concat(n,"-").concat(t.toString()))}));return(0,c.jsx)(s.Fragment,{children:(0,c.jsxs)(l.xuv,{sx:{display:"flex"},className:"inputItem",children:[(0,c.jsxs)(l.AZs,{sx:{alignItems:"flex-start"},children:[(0,c.jsx)("span",{children:o}),""!==d&&(0,c.jsx)(l.xuv,{sx:{marginLeft:5,display:"flex",alignItems:"center","& .min-icon":{width:13}},children:(0,c.jsx)(l.ua7,{tooltip:d,placement:"top",children:(0,c.jsx)(l.xuv,{className:d,children:(0,c.jsx)(l.byK,{})})})})]}),(0,c.jsxs)(l.xuv,{withBorders:f,sx:{width:"100%",overflowY:"auto",height:150,position:"relative"},children:[B,(0,c.jsx)("div",{ref:k})]})]})})}},84741:function(e,t,n){var i=n(29439),r=n(72791),s=n(29945),o=n(17691),a=n(26181),l=n.n(a),c=n(80184),u=o.ZP.button((function(e){var t=e.theme;return{border:"1px solid ".concat(l()(t,"borderColor","#E2E2E2")),borderRadius:3,color:l()(t,"secondaryText","#5B5C5C"),backgroundColor:l()(t,"boxBackground","#FBFAFA"),fontSize:12}}));t.Z=function(e){var t=e.id,n=e.unitSelected,o=e.unitsList,a=e.disabled,l=void 0!==a&&a,d=e.onUnitChange,x=r.useState(null),h=(0,i.Z)(x,2),m=h[0],j=h[1],f=Boolean(m),b=function(e){j(null),""!==e&&d&&d(e)};return(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)(u,{id:"".concat(t,"-button"),"aria-controls":"".concat(t,"-menu"),"aria-haspopup":"true","aria-expanded":f?"true":void 0,onClick:function(e){j(e.currentTarget)},disabled:l,type:"button",children:n}),(0,c.jsx)(s.udT,{id:"upload-main-menu",options:o,selectedOption:"",onSelect:function(e){return b(e)},hideTriggerAction:function(){b("")},open:f,anchorEl:m,anchorOrigin:"end"})]})}}}]);
//# sourceMappingURL=977.92e54eab.chunk.js.map