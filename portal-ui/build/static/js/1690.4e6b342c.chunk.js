"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[1690],{81159:function(e,n,i){var t=i(4942),r=i(1413),o=i(72791),a=i(11135),l=i(25787),s=i(9955),c=i(30829),d=i(20068),u=i(20890),p=i(61889),x=i(23814),h=i(75952),f=i(28182),m=i(80184),g=(0,l.Z)((function(e){return{root:{width:50,height:24,padding:0,margin:0},switchBase:{padding:1,"&$checked":{transform:"translateX(24px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#4CCB92",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#4CCB92",border:"6px solid #fff"}},thumb:{width:22,height:22,backgroundColor:"#FAFAFA",border:"2px solid #FFFFFF",marginLeft:1},track:{borderRadius:12,backgroundColor:"#E2E2E2",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{},switchContainer:{display:"flex",alignItems:"center",justifyContent:"flex-end"}}}))(s.Z);n.Z=(0,l.Z)((function(e){return(0,a.Z)((0,r.Z)((0,r.Z)({indicatorLabelOn:{fontWeight:"bold",color:"#081C42 !important"},indicatorLabel:{fontSize:12,color:"#E2E2E2",margin:"0 8px 0 10px"},fieldDescription:{marginTop:4,color:"#999999"},tooltip:{fontSize:16}},x.OR),x.YI))}))((function(e){var n=e.label,i=void 0===n?"":n,a=e.onChange,l=e.value,s=e.id,x=e.name,v=e.checked,b=void 0!==v&&v,j=e.disabled,y=void 0!==j&&j,Z=e.switchOnly,C=void 0!==Z&&Z,k=e.tooltip,w=void 0===k?"":k,S=e.description,D=void 0===S?"":S,N=e.classes,P=e.indicatorLabels,I=e.extraInputProps,E=void 0===I?{}:I,F=(0,m.jsxs)(o.Fragment,{children:[!C&&(0,m.jsx)("span",{className:(0,f.Z)(N.indicatorLabel,(0,t.Z)({},N.indicatorLabelOn,!b)),children:P&&P.length>1?P[1]:"OFF"}),(0,m.jsx)(g,{checked:b,onChange:a,color:"primary",name:x,inputProps:(0,r.Z)({"aria-label":"primary checkbox"},E),disabled:y,disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,value:l,id:s}),!C&&(0,m.jsx)("span",{className:(0,f.Z)(N.indicatorLabel,(0,t.Z)({},N.indicatorLabelOn,b)),children:P?P[0]:"ON"})]});return C?F:(0,m.jsx)("div",{children:(0,m.jsxs)(p.ZP,{container:!0,alignItems:"center",children:[(0,m.jsx)(p.ZP,{item:!0,xs:12,sm:8,md:8,children:""!==i&&(0,m.jsxs)(c.Z,{htmlFor:s,className:N.inputLabel,children:[(0,m.jsx)("span",{children:i}),""!==w&&(0,m.jsx)("div",{className:N.tooltipContainer,children:(0,m.jsx)(d.Z,{title:w,placement:"top-start",children:(0,m.jsx)("div",{className:N.tooltip,children:(0,m.jsx)(h.byK,{})})})})]})}),(0,m.jsx)(p.ZP,{item:!0,xs:12,sm:""!==i?4:12,md:""!==i?4:12,textAlign:"right",justifyContent:"end",className:N.switchContainer,children:F}),""!==D&&(0,m.jsx)(p.ZP,{item:!0,xs:12,textAlign:"left",children:(0,m.jsx)(u.Z,{component:"p",className:N.fieldDescription,children:D})})]})})}))},14917:function(e,n,i){i(72791);var t=i(61889),r=i(72455),o=i(80184),a=(0,r.Z)((function(e){return{headerBarIcon:{marginRight:".7rem",color:e.palette.primary.main,"& .min-icon":{width:44,height:44},"@media (max-width: 600px)":{display:"none"}},headerBarSubheader:{color:"grey","@media (max-width: 900px)":{maxWidth:200}},stContainer:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:8,borderBottom:"1px solid #EAEAEA","@media (max-width: 600px)":{flexFlow:"column"}},titleColumn:{height:"auto",justifyContent:"center",display:"flex",flexFlow:"column",alignItems:"flex-start","& h1":{fontSize:19}},leftItems:{display:"flex",alignItems:"center","@media (max-width: 600px)":{flexFlow:"column",width:"100%"}},rightItems:{display:"flex",alignItems:"center","& button":{marginLeft:8},"@media (max-width: 600px)":{width:"100%"}}}}));n.Z=function(e){var n=e.icon,i=e.title,r=e.subTitle,l=e.actions,s=e.className,c=a();return(0,o.jsx)(t.ZP,{container:!0,children:(0,o.jsxs)(t.ZP,{item:!0,xs:12,className:"".concat(c.stContainer," ").concat(s||""),children:[(0,o.jsxs)("div",{className:c.leftItems,children:[n?(0,o.jsx)("div",{className:c.headerBarIcon,children:n}):null,(0,o.jsxs)("div",{className:c.titleColumn,children:[(0,o.jsx)("h1",{style:{margin:0},children:i}),(0,o.jsx)("span",{className:c.headerBarSubheader,children:r})]})]}),(0,o.jsx)("div",{className:c.rightItems,children:l})]})})}},38571:function(e,n,i){var t=i(1413),r=i(72791),o=i(72455),a=i(18073),l=i(43896),s=i(80184),c=(0,o.Z)({tabRoot:{height:"40px",borderBottom:"1px solid #eaeaea"},root:{width:"120px",backgroundColor:"transparent",paddingTop:0,paddingBottom:0,fontSize:"14px",fontWeight:600,color:"#07193E",height:"40px"},selected:{"&.MuiTab-selected":{backgroundColor:"#F6F7F7 !important"},"&.MuiTab-wrapper":{color:"#07193E",fontWeight:600}},indicator:{background:"transparent linear-gradient(90deg, #072B4E 0%, #081C42 100%) 0% 0% no-repeat padding-box;",height:2},scroller:{maxWidth:1185,position:"relative","&::after":{content:'" "',backgroundColor:"#EEF1F4",height:2,width:"100%",display:"block"}}});n.Z=function(e){var n=e.selectedTab,i=e.onChange,o=e.tabOptions,d=c();return(0,s.jsx)(r.Fragment,{children:(0,s.jsx)(a.Z,{indicatorColor:"primary",textColor:"primary","aria-label":"cluster-tabs",variant:"scrollable",scrollButtons:"auto",value:n,onChange:function(e,n){i(n)},classes:{root:d.tabRoot,indicator:d.indicator,scroller:d.scroller},children:o.map((function(e,n){var i={label:e.label};return e.value&&(i=(0,t.Z)((0,t.Z)({},i),{},{value:e.value})),e.disabled&&(i=(0,t.Z)((0,t.Z)({},i),{},{disabled:e.disabled})),(0,r.createElement)(l.Z,(0,t.Z)((0,t.Z)({},i),{},{classes:{root:d.root,selected:d.selected},id:"simple-tab-".concat(n),"aria-controls":"simple-tabpanel-".concat(n),key:"tab-".concat(n,"-").concat(e.label)}))}))})})}},45902:function(e,n,i){var t=i(1413),r=(i(72791),i(1582)),o=i(80184);n.Z=function(e){var n=e.label,i=void 0===n?null:n,a=e.value,l=void 0===a?"-":a,s=e.orientation,c=void 0===s?"column":s,d=e.stkProps,u=void 0===d?{}:d,p=e.lblProps,x=void 0===p?{}:p,h=e.valProps,f=void 0===h?{}:h;return(0,o.jsxs)(r.Z,(0,t.Z)((0,t.Z)({direction:{xs:"column",sm:c}},u),{},{children:[(0,o.jsx)("label",(0,t.Z)((0,t.Z)({style:{marginRight:5,fontWeight:600}},x),{},{children:i})),(0,o.jsx)("label",(0,t.Z)((0,t.Z)({style:{marginRight:5,fontWeight:500}},f),{},{children:l}))]}))}},90767:function(e,n,i){var t=i(29439),r=i(1413),o=i(72791),a=i(40986),l=i(51691),s=i(11135),c=i(25787),d=i(23814),u=i(81207),p=i(23508),x=i(75952),h=i(87995),f=i(81551),m=i(80184);n.Z=(0,c.Z)((function(e){return(0,s.Z)((0,r.Z)({wrapText:{maxWidth:"200px",whiteSpace:"normal",wordWrap:"break-word"}},d.Qw))}))((function(e){var n=e.classes,i=e.configurationName,r=e.closeResetModalAndRefresh,s=e.resetOpen,c=(0,f.TL)(),d=(0,o.useState)(!1),g=(0,t.Z)(d,2),v=g[0],b=g[1];(0,o.useEffect)((function(){v&&u.Z.invoke("POST","/api/v1/configs/".concat(i,"/reset")).then((function(e){b(!1),r(!0)})).catch((function(e){b(!1),c((0,h.Ih)(e))}))}),[r,i,v,c]);return(0,m.jsx)(p.Z,{title:"Restore Defaults",confirmText:"Yes, Reset Configuration",isOpen:s,titleIcon:(0,m.jsx)(x.NvT,{}),isLoading:v,onConfirm:function(){b(!0)},onClose:function(){r(!1)},confirmationContent:(0,m.jsxs)(o.Fragment,{children:[v&&(0,m.jsx)(a.Z,{}),(0,m.jsxs)(l.Z,{children:["Are you sure you want to restore these configurations to default values?",(0,m.jsx)("br",{}),(0,m.jsx)("b",{className:n.wrapText,children:"Please note that this may cause your system to not be accessible"})]})]})})}))},37099:function(e,n,i){var t=i(72791),r=i(64554),o=i(75952),a=i(80184),l=function(e){var n=e.icon,i=e.description;return(0,a.jsxs)(r.Z,{sx:{display:"flex","& .min-icon":{marginRight:"10px",height:"23px",width:"23px",marginBottom:"10px"}},children:[n," ",(0,a.jsx)("div",{style:{fontSize:"14px",fontStyle:"italic",color:"#5E5E5E"},children:i})]})};n.Z=function(e){var n=e.helpText,i=e.docLink,s=e.docText,c=e.contents;return(0,a.jsxs)(r.Z,{sx:{flex:1,border:"1px solid #eaeaea",borderRadius:"2px",display:"flex",flexFlow:"column",padding:"20px"},children:[(0,a.jsxs)(r.Z,{sx:{fontSize:"16px",fontWeight:600,display:"flex",alignItems:"center",marginBottom:"16px",paddingBottom:"20px","& .min-icon":{height:"21px",width:"21px",marginRight:"15px"}},children:[(0,a.jsx)(o.M9A,{}),(0,a.jsx)("div",{children:n})]}),(0,a.jsxs)(r.Z,{sx:{fontSize:"14px",marginBottom:"15px"},children:[c.map((function(e,n){return(0,a.jsxs)(t.Fragment,{children:[e.icon&&(0,a.jsx)(r.Z,{sx:{paddingBottom:"20px"},children:(0,a.jsx)(l,{icon:e.icon,description:e.iconDescription})}),(0,a.jsx)(r.Z,{sx:{paddingBottom:"20px"},children:e.text})]},"feature-item-".concat(n))})),(0,a.jsx)(r.Z,{sx:{paddingBottom:"20px"},children:(0,a.jsx)("a",{href:i,target:"_blank",rel:"noopener",children:s})})]})]})}},11690:function(e,n,i){i.r(n),i.d(n,{default:function(){return F}});var t=i(4942),r=i(1413),o=i(74165),a=i(15861),l=i(29439),s=i(72791),c=i(75952),d=i(81551),u=i(87995),p=i(81207),x=i(14917),h=i(81159),f=i(45902),m=i(47974),g=i(79979),v=i(37099),b=i(93433),j=i(58400),y=i(78687),Z=i(99779),C=i(80184),k=function(e){var n=e.name;return(0,C.jsxs)("h4",{children:[(0,C.jsx)(c.ZyT,{style:{transform:"rotateZ(90deg)"}}),n]})},w=function(e){var n=e.blockName,i=e.results;return(0,C.jsxs)(s.Fragment,{children:[(0,C.jsxs)("strong",{children:[n,":"]}),(0,C.jsx)("ul",{children:i.map((function(e,i){return(0,C.jsx)("li",{children:e},"policy-".concat(n,"-").concat(i))}))})]})},S=function(e){var n,i,t,r,o,a,l=e.entityName,d=e.results,u=0;switch(l){case"Group":u=(null===(n=d.groups)||void 0===n?void 0:n.length)||0;break;case"Policy":u=(null===(i=d.policies)||void 0===i?void 0:i.length)||0;break;case"User":u=(null===(t=d.users)||void 0===t?void 0:t.length)||0}return(0,C.jsxs)(c.xuv,{className:"resultElement",sx:{marginTop:50,"&:first-of-type":{marginTop:0}},children:[(0,C.jsxs)(c.NZf,{separator:!0,sx:{fontSize:12},icon:(0,C.jsx)(c.anK,{style:{width:17,height:17}}),actions:(0,C.jsxs)(c.xuv,{sx:{fontSize:14},children:[(0,C.jsx)("strong",{children:u})," Entit",1===u?"y":"ies"," Found"]}),children:[l," Mappings"]}),(0,C.jsxs)(c.xuv,{className:"resultsList",sx:{h4:{borderBottom:"#e2e2e2 1px solid",padding:"12px 0",margin:0,marginBottom:15,display:"flex",alignItems:"center","& svg":{marginRight:10,fill:"#3C77A7"}}},children:["Group"===l&&(null===(r=d.groups)||void 0===r?void 0:r.map((function(e,n){return(0,C.jsxs)(s.Fragment,{children:[(0,C.jsx)(k,{name:e.group}),e.policies&&(0,C.jsx)(w,{blockName:"Policies",results:e.policies})]},"policy-res-".concat(n))}))),"User"===l&&(null===(o=d.users)||void 0===o?void 0:o.map((function(e,n){return(0,C.jsxs)(s.Fragment,{children:[(0,C.jsx)(k,{name:e.user}),e.policies&&(0,C.jsx)(w,{blockName:"Policies",results:e.policies})]},"users-res-".concat(n))}))),"Policy"===l&&(null===(a=d.policies)||void 0===a?void 0:a.map((function(e,n){return(0,C.jsxs)(s.Fragment,{children:[(0,C.jsx)(k,{name:e.policy}),e.groups&&(0,C.jsx)(w,{blockName:"Groups",results:e.groups}),e.users&&(0,C.jsx)(w,{blockName:"Users",results:e.users})]},"policy-map-".concat(n))})))]})]})},D=function(){var e=(0,d.TL)(),n=(0,s.useState)(!1),i=(0,l.Z)(n,2),t=i[0],r=i[1],o=(0,s.useState)([""]),a=(0,l.Z)(o,2),x=a[0],h=a[1],f=(0,s.useState)([""]),m=(0,l.Z)(f,2),g=m[0],v=m[1],k=(0,s.useState)(null),w=(0,l.Z)(k,2),D=w[0],N=w[1],P=(0,y.v9)((function(e){return e.createUser.selectedPolicies}));return(0,C.jsxs)(c.xuv,{sx:{marginTop:15,paddingTop:0},children:[(0,C.jsxs)(c.rjZ,{container:!0,sx:{marginTop:5},children:[(0,C.jsxs)(c.rjZ,{item:!0,sm:12,md:6,lg:5,sx:{padding:10,paddingTop:0},children:[(0,C.jsx)(c.NZf,{children:"Query Filters"}),(0,C.jsxs)(c.xuv,{sx:{padding:"0 10px",display:"flex",flexDirection:"column",gap:40},children:[(0,C.jsxs)(c.xuv,{sx:{padding:"10px 26px"},withBorders:!0,children:[(0,C.jsx)(c.xuv,{sx:{display:"flex"},children:(0,C.jsx)("h4",{style:{margin:0,marginBottom:10,fontSize:14},children:"Users"})}),(0,C.jsx)(c.xuv,{sx:{overflowY:"auto",minHeight:50,maxHeight:250,"& > div > div":{width:"100%"}},children:x.map((function(e,n){return(0,C.jsx)(c.Wzg,{id:"search-user-".concat(n),value:e,onChange:function(e){var i=(0,b.Z)(x);i[n]=e.target.value,h(i)},overlayIcon:x.length===n+1?(0,C.jsx)(c.dtP,{}):(0,C.jsx)(c.HFL,{}),overlayAction:function(){!function(e,n){if(e){var i=[].concat((0,b.Z)(x),[""]);h(i)}else{var t=x.filter((function(e,i){return i!==n}));h(t)}}(x.length===n+1,n)}},"search-user-".concat(n))}))})]}),(0,C.jsxs)(c.xuv,{sx:{padding:"10px 26px"},withBorders:!0,children:[(0,C.jsx)("h4",{style:{margin:0,marginBottom:10,fontSize:14},children:"Groups"}),(0,C.jsx)(c.xuv,{sx:{overflowY:"auto",minHeight:50,maxHeight:"calc(100vh - 340px)","& > div > div":{width:"100%"}},children:g.map((function(e,n){return(0,C.jsx)(c.Wzg,{id:"search-group-".concat(n),value:e,onChange:function(e){var i=(0,b.Z)(g);i[n]=e.target.value,v(i)},overlayIcon:g.length===n+1?(0,C.jsx)(c.dtP,{}):(0,C.jsx)(c.HFL,{}),overlayAction:function(){!function(e,n){if(e){var i=[].concat((0,b.Z)(g),[""]);v(i)}else{var t=g.filter((function(e,i){return i!==n}));v(t)}}(g.length===n+1,n)}},"search-group-".concat(n))}))})]}),(0,C.jsxs)(c.xuv,{sx:{padding:"10px 26px"},withBorders:!0,children:[(0,C.jsx)("h4",{style:{margin:0,marginBottom:10,fontSize:14},children:"Policies"}),(0,C.jsx)(c.xuv,{sx:{minHeight:265,maxHeight:"calc(100vh - 740px)"},children:(0,C.jsx)(j.Z,{selectedPolicy:P,noTitle:!0})})]})]})]}),(0,C.jsx)(c.rjZ,{item:!0,sm:12,md:6,lg:7,sx:{padding:10,paddingTop:0,display:"flex",flexDirection:"column"},children:t?(0,C.jsx)(c.xuv,{sx:{textAlign:"center"},children:(0,C.jsx)(c.aNw,{})}):(0,C.jsxs)(s.Fragment,{children:[(0,C.jsx)(c.NZf,{actions:(0,C.jsx)(c.xuv,{sx:{display:"flex",flexDirection:"row",alignItems:"center",fontSize:14},children:null!==D&&void 0!==D&&D.timestamp?(0,C.jsxs)(s.Fragment,{children:[(0,C.jsx)(c.wZd,{style:{width:14,height:14,marginRight:5,fill:"#BEBFBF"}}),Z.ou.fromISO(D.timestamp).toFormat("D HH:mm:ss")]}):""}),children:"Query Results"}),D?(0,C.jsxs)(c.xuv,{sx:{backgroundColor:"#FBFAFA",padding:"8px 22px",flexGrow:1,overflowY:"auto"},children:[!D.groups&&!D.users&&!D.policies&&(0,C.jsx)(c.xuv,{sx:{textAlign:"center"},children:(0,C.jsx)("h4",{children:"No Results Available"})}),!!D.groups&&(0,C.jsx)(S,{results:D,entityName:"Group"}),!!D.users&&(0,C.jsx)(S,{results:D,entityName:"User"}),!!D.policies&&(0,C.jsx)(S,{results:D,entityName:"Policy"})]}):(0,C.jsx)(c.xuv,{sx:{textAlign:"center"},children:"No query results yet"})]})})]}),(0,C.jsx)(c.rjZ,{container:!0,children:(0,C.jsx)(c.rjZ,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-start",marginTop:45,padding:"0 20px"},children:(0,C.jsx)(c.zxk,{id:"search-entity",type:"button",variant:"callAction",onClick:function(){r(!0);var n={},i=P.filter((function(e){return""!==e})),t=x.filter((function(e){return""!==e})),o=g.filter((function(e){return""!==e}));i.length>0&&(n.policies=i),t.length>0&&(n.users=t),o.length>0&&(n.groups=o),p.Z.invoke("POST","/api/v1/ldap-entities",n).then((function(e){N(e),r(!1)})).catch((function(n){e((0,u.Ih)(n)),r(!1)}))},icon:(0,C.jsx)(c.W1M,{}),children:"Search"})})})]})},N=i(90767),P=i(19847),I=i(38571),E=["server_addr","lookup_bind_dn","lookup_bind_password","user_dn_search_base_dn","user_dn_search_filter"],F=function(){var e=(0,d.TL)(),n=g.iR,i=(0,s.useState)(!0),b=(0,l.Z)(i,2),j=b[0],y=b[1],Z=(0,s.useState)(!1),k=(0,l.Z)(Z,2),w=k[0],S=k[1],F=(0,s.useState)(!1),B=(0,l.Z)(F,2),_=B[0],A=B[1],L=(0,s.useState)({}),T=(0,l.Z)(L,2),R=T[0],q=T[1],O=(0,s.useState)(null),z=(0,l.Z)(O,2),U=z[0],M=z[1],W=(0,s.useState)(!1),H=(0,l.Z)(W,2),G=H[0],Y=H[1],K=(0,s.useState)(!1),V=(0,l.Z)(K,2),X=V[0],$=V[1],Q=(0,s.useState)(0),J=(0,l.Z)(Q,2),ee=J[0],ne=J[1],ie=function(){G&&U&&te(U),Y(!G)},te=function(e){var n={};if(e&&e.length>0){var i=e.find((function(e){return"enable"===e.key})),t=0;e.forEach((function(e){n[e.key]=e.value,E.includes(e.key)&&e.value&&""!==e.value&&"off"!==e.value&&t++}));var r=t===E.length;i&&"on"!==i.value||!r?S(!1):S(!0),A(r)}q(n)};(0,s.useEffect)((function(){j&&p.Z.invoke("GET","/api/v1/configs/identity_ldap").then((function(e){e.length>0&&(M(e[0].key_values),te(e[0].key_values)),y(!1)})).catch((function(n){y(!1),e((0,u.Ih)(n))}))}),[e,j]);var re=function(){var n=(0,a.Z)((0,o.Z)().mark((function n(i){return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:$(!1),i&&(e((0,u.cN)(i)),M(null),q({}),S(!1),A(!1),Y(!1));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,C.jsxs)(c.rjZ,{item:!0,xs:12,children:[X&&(0,C.jsx)(N.Z,{configurationName:"identity_ldap",closeResetModalAndRefresh:re,resetOpen:X}),(0,C.jsx)(m.Z,{label:"LDAP"}),(0,C.jsxs)(c.Xgh,{variant:"constrained",children:[(0,C.jsx)(I.Z,{selectedTab:ee,onChange:function(e){ne(e),Y(!1)},tabOptions:[{label:"Configuration"},{label:"Entities",disabled:!_||!w}]}),(0,C.jsxs)(P.x,{index:0,value:ee,children:[(0,C.jsx)(x.Z,{title:G?"Edit Configuration":"",actions:G?null:(0,C.jsxs)(s.Fragment,{children:[(0,C.jsx)(c.zxk,{id:"edit",type:"button",variant:"callAction",icon:(0,C.jsx)(c.dY8,{}),onClick:ie,label:"Edit Configuration",disabled:j}),_&&(0,C.jsx)(c.zxk,{id:"is-configuration-enabled",onClick:function(){return function(n){var i={key_values:[{key:"enable",value:n?"on":"off"}]};p.Z.invoke("PUT","/api/v1/configs/identity_ldap",i).then((function(n){S(!w),e((0,u.cN)(n.restart)),n.restart||e((0,u.y1)("Configuration saved successfully"))})).catch((function(n){e((0,u.Ih)(n))}))}(!w)},label:w?"Disable LDAP":"Enable LDAP",variant:w?"secondary":"regular"}),(0,C.jsx)(c.zxk,{id:"refresh-idp-config",onClick:function(){return y(!0)},label:"Refresh",icon:(0,C.jsx)(c.DuK,{})})]})}),(0,C.jsx)("br",{}),j?(0,C.jsx)(c.xuv,{sx:{display:"flex",justifyContent:"center",marginTop:10},children:(0,C.jsx)(c.aNw,{})}):(0,C.jsx)(s.Fragment,{children:G?(0,C.jsx)(s.Fragment,{children:(0,C.jsxs)(c.ltY,{helpBox:(0,C.jsx)(v.Z,{helpText:"Learn more about LDAP Configurations",contents:g.Si,docLink:"https://min.io/docs/minio/linux/operations/external-iam.html?ref=con#minio-external-iam-ad-ldap",docText:"Learn more about LDAP Configurations"}),children:[Object.entries(n).map((function(e){var n=(0,l.Z)(e,2);return function(e,n){return"toggle"===n.type?(0,C.jsx)(c.xuv,{className:"inputItem",children:(0,C.jsx)(h.Z,{indicatorLabels:["Enabled","Disabled"],checked:"on"===R[e],value:"is-field-enabled",id:"is-field-enabled",name:"is-field-enabled",label:n.label,tooltip:n.tooltip,onChange:function(n){return q((0,r.Z)((0,r.Z)({},R),{},(0,t.Z)({},e,n.target.checked?"on":"off")))},description:"",disabled:!G},e)}):(0,C.jsx)(c.Wzg,{id:e,required:n.required,name:e,label:n.label,tooltip:n.tooltip,error:n.hasError(R[e],G),value:R[e]?R[e]:"",onChange:function(n){return q((0,r.Z)((0,r.Z)({},R),{},(0,t.Z)({},e,n.target.value)))},placeholder:n.placeholder,disabled:!G,type:n.type},e)}(n[0],n[1])})),(0,C.jsxs)(c.xuv,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",marginTop:"20px",gap:"15px"},children:[G&&(0,C.jsx)(c.zxk,{id:"clear",type:"button",variant:"secondary",onClick:function(){return $(!0)},label:"Reset Configuration"}),G&&(0,C.jsx)(c.zxk,{id:"cancel",type:"button",variant:"regular",onClick:ie,label:"Cancel"}),G&&(0,C.jsx)(c.zxk,{id:"save-key",type:"submit",variant:"callAction",color:"primary",disabled:j||!function(){for(var e=0,i=Object.entries(n);e<i.length;e++){var t=(0,l.Z)(i[e],2),r=t[0];if(t[1].required&&(void 0===R[r]||null===R[r]||""===R[r]))return!1}return!0}(),label:"Save",onClick:function(){var i=Object.keys(n).map((function(e){return{key:e,value:R[e]}}));p.Z.invoke("PUT","/api/v1/configs/identity_ldap",{key_values:i}).then((function(n){Y(!1),M(i),te(i),e((0,u.cN)(n.restart)),n.restart||e((0,u.y1)("Configuration saved successfully"))})).catch((function(n){e((0,u.Ih)(n))}))}})]})]})}):(0,C.jsx)(s.Fragment,{children:(0,C.jsxs)(c.xuv,{sx:(0,t.Z)({display:"grid",gridTemplateColumns:"1fr",gridAutoFlow:"dense",gap:3,padding:"15px",border:"1px solid #eaeaea"},"@media (min-width: 576px)",{gridTemplateColumns:"2fr 1fr",gridAutoFlow:"row"}),children:[(0,C.jsx)(f.Z,{label:"LDAP Enabled",value:w?"Yes":"No"}),_&&(0,C.jsx)(s.Fragment,{children:Object.entries(n).map((function(e){var n=(0,l.Z)(e,2),i=n[0],t=n[1];return(0,C.jsx)(f.Z,{label:t.label,value:R[i]?R[i]:""},i)}))})]})})})]}),(0,C.jsx)(P.x,{index:1,value:ee,children:_&&(0,C.jsx)(c.xuv,{children:(0,C.jsx)(D,{})})})]})]})}},79979:function(e,n,i){i.d(n,{DY:function(){return s},Si:function(){return a},f4:function(){return l},iR:function(){return c}});var t=i(50521),r=i(75952),o=i(80184),a=[{text:"MinIO supports using an Active Directory or LDAP (AD/LDAP) service for external management of user identities. Configuring an external IDentity Provider (IDP) enables Single-Sign On (SSO) workflows, where applications authenticate against the external IDP before accessing MinIO.",icon:(0,o.jsx)(t.Z,{}),iconDescription:"Create Configurations"},{text:"MinIO queries the configured Active Directory / LDAP server to verify the credentials specified by the application and optionally return a list of groups in which the user has membership. MinIO supports two modes (Lookup-Bind Mode and Username-Bind Mode) for performing these queries",icon:null,iconDescription:""},{text:"MinIO recommends using Lookup-Bind mode as the preferred method for verifying AD/LDAP credentials. Username-Bind mode is a legacy method retained for backwards compatibility only.",icon:null,iconDescription:""}],l=[{text:"MinIO supports using an OpenID Connect (OIDC) compatible IDentity Provider (IDP) such as Okta, KeyCloak, Dex, Google, or Facebook for external management of user identities.",icon:(0,o.jsx)(r.mBM,{}),iconDescription:"Create Configurations"},{text:"Configuring an external IDP enables Single-Sign On workflows, where applications authenticate against the external IDP before accessing MinIO.",icon:null,iconDescription:""}],s={config_url:{required:!0,hasError:function(e,n){return!e&&n?"Config URL is required":""},label:"Config URL",tooltip:"Config URL for identity provider configuration",placeholder:"https://identity-provider-url/.well-known/openid-configuration",type:"text"},client_id:{required:!0,hasError:function(e,n){return!e&&n?"Client ID is required":""},label:"Client ID",tooltip:"Identity provider Client ID",placeholder:"Enter Client ID",type:"text"},client_secret:{required:!0,hasError:function(e,n){return!e&&n?"Client Secret is required":""},label:"Client Secret",tooltip:"Identity provider Client Secret",placeholder:"Enter Client Secret",type:"password"},claim_name:{required:!1,label:"Claim Name",tooltip:"Claim from which MinIO will read the policy or role to use",placeholder:"Enter Claim Name",type:"text",hasError:function(e,n){return""}},display_name:{required:!1,label:"Display Name",tooltip:"",placeholder:"Enter Display Name",type:"text",hasError:function(e,n){return""}},claim_prefix:{required:!1,label:"Claim Prefix",tooltip:"",placeholder:"Enter Claim Prefix",type:"text",hasError:function(e,n){return""}},scopes:{required:!1,label:"Scopes",tooltip:"",placeholder:"openid,profile,email",type:"text",hasError:function(e,n){return""}},redirect_uri:{required:!1,label:"Redirect URI",tooltip:"",placeholder:"https://console-endpoint-url/oauth_callback",type:"text",hasError:function(e,n){return""}},role_policy:{required:!1,label:"Role Policy",tooltip:"",placeholder:"readonly",type:"text",hasError:function(e,n){return""}},claim_userinfo:{required:!1,label:"Claim User Info",tooltip:"",placeholder:"Claim User Info",type:"toggle",hasError:function(e,n){return""}},redirect_uri_dynamic:{required:!1,label:"Redirect URI Dynamic",tooltip:"",placeholder:"Redirect URI Dynamic",type:"toggle",hasError:function(e,n){return""}}},c={server_insecure:{required:!0,hasError:function(e,n){return!e&&n?"Server Address is required":""},label:"Server Insecure",tooltip:"disable SSL certificate verification ",placeholder:"myldapserver.com:636",type:"toggle"},server_addr:{required:!0,hasError:function(e,n){return!e&&n?"Server Address is required":""},label:"Server Address",tooltip:'AD/LDAP server address e.g. "myldapserver.com:636"',placeholder:"myldapserver.com:636",type:"text"},lookup_bind_dn:{required:!0,hasError:function(e,n){return!e&&n?"Lookup Bind DN is required":""},label:"Lookup Bind DN",tooltip:"DN for LDAP read-only service account used to perform DN and group lookups",placeholder:"cn=admin,dc=min,dc=io",type:"text"},lookup_bind_password:{required:!0,hasError:function(e,n){return!e&&n?"Lookup Bind Password is required":""},label:"Lookup Bind Password",tooltip:"Password for LDAP read-only service account used to perform DN and group lookups",placeholder:"admin",type:"password"},user_dn_search_base_dn:{required:!0,hasError:function(e,n){return!e&&n?"User DN Search Base DN is required":""},label:"User DN Search Base",tooltip:"",placeholder:"DC=example,DC=net",type:"text"},user_dn_search_filter:{required:!0,hasError:function(e,n){return!e&&n?"User DN Search Filter is required":""},label:"User DN Search Filter",tooltip:"",placeholder:"(sAMAcountName=%s)",type:"text"},group_search_base_dn:{required:!1,hasError:function(e,n){return""},label:"Group Search Base DN",tooltip:"",placeholder:"ou=swengg,dc=min,dc=io",type:"text"},group_search_filter:{required:!1,hasError:function(e,n){return""},label:"Group Search Filter",tooltip:"",placeholder:"(&(objectclass=groupofnames)(member=%d))",type:"text"}}},58400:function(e,n,i){var t=i(93433),r=i(29439),o=i(1413),a=i(72791),l=i(11135),s=i(25787),c=i(40986),d=i(61889),u=i(21639),p=i(23814),x=i(92983),h=i(59114),f=i(87995),m=i(81551),g=i(74616),v=i(78687),b=i(25043),j=i(80184);n.Z=(0,s.Z)((function(e){return(0,l.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({noFound:{textAlign:"center",padding:"10px 0"},searchBox:{flex:1},fieldLabel:{fontWeight:400,width:160,marginRight:10},tableBlock:(0,o.Z)({},p.VX.tableBlock),filterBox:{display:"flex",marginBottom:15,alignItems:"center","& span":{fontSize:14}}},p.qg),p.VX),p.OR),p.jY))}))((function(e){var n=e.classes,i=e.noTitle,o=void 0!==i&&i,l=(0,m.TL)(),s=(0,a.useState)([]),p=(0,r.Z)(s,2),y=p[0],Z=p[1],C=(0,a.useState)(!1),k=(0,r.Z)(C,2),w=k[0],S=k[1],D=(0,a.useState)(""),N=(0,r.Z)(D,2),P=N[0],I=N[1],E=(0,v.v9)((function(e){return e.createUser.selectedPolicies})),F=(0,a.useCallback)((function(){S(!0),b.h.policies.listPolicies().then((function(e){var n,i=null!==(n=e.data.policies)&&void 0!==n?n:[];S(!1),Z(i.sort(u.g4))})).catch((function(e){S(!1),l((0,f.zb)(e))}))}),[l]);(0,a.useEffect)((function(){S(!0)}),[]),(0,a.useEffect)((function(){w&&F()}),[w,F]);var B=y.filter((function(e){return e.name.includes(P)}));return(0,j.jsx)(d.ZP,{container:!0,children:(0,j.jsxs)(d.ZP,{item:!0,xs:12,children:[w&&(0,j.jsx)(c.Z,{}),y.length>0?(0,j.jsxs)(a.Fragment,{children:[(0,j.jsxs)(d.ZP,{item:!0,xs:12,className:n.filterBox,children:[!o&&(0,j.jsx)("span",{className:n.fieldLabel,children:"Assign Policies"}),(0,j.jsx)("div",{className:n.searchBox,children:(0,j.jsx)(h.Z,{placeholder:"Start typing to search for a Policy",onChange:function(e){I(e)},value:P})})]}),(0,j.jsx)(d.ZP,{item:!0,xs:12,className:n.tableBlock,style:{paddingBottom:16},children:(0,j.jsx)(x.Z,{columns:[{label:"Policy",elementKey:"name"}],onSelect:function(e){var n=e.target,i=n.value,r=n.checked,o=(0,t.Z)(E);r?o.push(i):o=o.filter((function(e){return e!==i})),o=o.filter((function(e){return""!==e})),l((0,g.ue)(o))},selectedItems:E,isLoading:w,records:B,entityName:"Policies",idField:"name",customPaperHeight:n.multiSelectTable})})]}):(0,j.jsx)("div",{className:n.noFound,children:"No Policies Available"})]})})}))},19847:function(e,n,i){i.d(n,{x:function(){return s}});var t=i(1413),r=i(45987),o=i(72791),a=i(80184),l=["children","value","index"],s=function(e){var n=e.children,i=e.value,s=e.index,c=(0,r.Z)(e,l);return(0,a.jsx)("div",(0,t.Z)((0,t.Z)({role:"tabpanel",hidden:i!==s,id:"simple-tabpanel-".concat(s),"aria-labelledby":"simple-tab-".concat(s),style:{marginTop:"5px"}},c),{},{children:i===s&&(0,a.jsx)(o.Fragment,{children:n})}))}}}]);
//# sourceMappingURL=1690.4e6b342c.chunk.js.map