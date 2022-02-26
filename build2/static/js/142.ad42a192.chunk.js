(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[142],{1463:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(0);function n(e){var t=r.useState(e),a=t[0],n=t[1],o=e||a;return r.useEffect((function(){null==a&&n("mui-".concat(Math.round(1e5*Math.random())))}),[a]),o}},1488:function(e,t,a){"use strict";var r=a(6),n=a(3),o=a(0),l=(a(1),a(5)),c=a(11),i=a(1590),s=o.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,d=void 0===s?"table":s,u=e.padding,m=void 0===u?"default":u,p=e.size,f=void 0===p?"medium":p,h=e.stickyHeader,b=void 0!==h&&h,g=Object(r.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=o.useMemo((function(){return{padding:m,size:f,stickyHeader:b}}),[m,f,b]);return o.createElement(i.a.Provider,{value:v},o.createElement(d,Object(n.a)({role:"table"===d?null:"table",ref:t,className:Object(l.default)(a.root,c,b&&a.stickyHeader)},g)))}));t.a=Object(c.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(n.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},1489:function(e,t,a){"use strict";var r=a(3),n=a(6),o=a(0),l=(a(1),a(5)),c=a(11),i=a(1442),s=a(37),d=o.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,d=void 0===s?"tr":s,u=e.hover,m=void 0!==u&&u,p=e.selected,f=void 0!==p&&p,h=Object(n.a)(e,["classes","className","component","hover","selected"]),b=o.useContext(i.a);return o.createElement(d,Object(r.a)({ref:t,className:Object(l.default)(a.root,c,b&&{head:a.head,footer:a.footer}[b.variant],m&&a.hover,f&&a.selected),role:"tr"===d?null:"row"},h))}));t.a=Object(c.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1491:function(e,t,a){"use strict";var r=a(3),n=a(6),o=a(0),l=(a(1),a(5)),c=a(11),i=a(1442),s={variant:"body"},d=o.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.component,u=void 0===d?"tbody":d,m=Object(n.a)(e,["classes","className","component"]);return o.createElement(i.a.Provider,{value:s},o.createElement(u,Object(r.a)({className:Object(l.default)(a.root,c),ref:t,role:"tbody"===u?null:"rowgroup"},m)))}));t.a=Object(c.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},1493:function(e,t,a){"use strict";var r=a(3),n=a(6),o=a(0),l=(a(1),a(5)),c=a(11),i=a(1442),s={variant:"head"},d=o.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.component,u=void 0===d?"thead":d,m=Object(n.a)(e,["classes","className","component"]);return o.createElement(i.a.Provider,{value:s},o.createElement(u,Object(r.a)({className:Object(l.default)(a.root,c),ref:t,role:"thead"===u?null:"rowgroup"},m)))}));t.a=Object(c.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},1664:function(e,t,a){"use strict";var r=a(3),n=a(6),o=a(0),l=(a(1),a(5)),c=a(11),i=a(37),s=a(15),d=a(409),u=o.forwardRef((function(e,t){var a=e.classes,c=e.className,i=e.color,u=void 0===i?"secondary":i,m=e.edge,p=void 0!==m&&m,f=e.size,h=void 0===f?"medium":f,b=Object(n.a)(e,["classes","className","color","edge","size"]),g=o.createElement("span",{className:a.thumb});return o.createElement("span",{className:Object(l.default)(a.root,c,{start:a.edgeStart,end:a.edgeEnd}[p],"small"===h&&a["size".concat(Object(s.a)(h))])},o.createElement(d.a,Object(r.a)({type:"checkbox",icon:g,checkedIcon:g,classes:{root:Object(l.default)(a.switchBase,a["color".concat(Object(s.a)(u))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},b)),o.createElement("span",{className:a.track}))}));t.a=Object(c.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(i.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(i.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(u)},1882:function(e,t,a){"use strict";var r,n,o,l=a(2277),c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function i(){o=!1}function s(e){if(e){if(e!==r){if(e.length!==c.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,a){return t!==a.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. These characters were not unique: "+t.join(", "));r=e,i()}}else r!==c&&(r=c,i())}function d(){return o||(o=function(){r||s(c);for(var e,t=r.split(""),a=[],n=l.nextValue();t.length>0;)n=l.nextValue(),e=Math.floor(n*t.length),a.push(t.splice(e,1)[0]);return a.join("")}())}e.exports={get:function(){return r||c},characters:function(e){return s(e),r},seed:function(e){l.seed(e),n!==e&&(i(),n=e)},lookup:function(e){return d()[e]},shuffled:d}},1935:function(e,t,a){"use strict";var r=a(0),n=a(85);t.a=Object(n.a)(r.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},1936:function(e,t,a){"use strict";var r=a(0),n=a(85);t.a=Object(n.a)(r.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},2275:function(e,t,a){"use strict";e.exports=a(2276)},2276:function(e,t,a){"use strict";var r=a(1882),n=a(2278),o=a(2282),l=a(2283)||0;function c(){return n(l)}e.exports=c,e.exports.generate=c,e.exports.seed=function(t){return r.seed(t),e.exports},e.exports.worker=function(t){return l=t,e.exports},e.exports.characters=function(e){return void 0!==e&&r.characters(e),r.shuffled()},e.exports.isValid=o},2277:function(e,t,a){"use strict";var r=1;e.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(e){r=e}}},2278:function(e,t,a){"use strict";var r,n,o=a(2279);a(1882);e.exports=function(e){var t="",a=Math.floor(.001*(Date.now()-1567752802062));return a===n?r++:(r=0,n=a),t+=o(7),t+=o(e),r>0&&(t+=o(r)),t+=o(a)}},2279:function(e,t,a){"use strict";var r=a(1882),n=a(2280),o=a(2281);e.exports=function(e){for(var t,a=0,l="";!t;)l+=o(n,r.get(),1),t=e<Math.pow(16,a+1),a++;return l}},2280:function(e,t,a){"use strict";var r,n="object"===typeof window&&(window.crypto||window.msCrypto);r=n&&n.getRandomValues?function(e){return n.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],a=0;a<e;a++)t.push(Math.floor(256*Math.random()));return t},e.exports=r},2281:function(e,t){e.exports=function(e,t,a){for(var r=(2<<Math.log(t.length-1)/Math.LN2)-1,n=-~(1.6*r*a/t.length),o="";;)for(var l=e(n),c=n;c--;)if((o+=t[l[c]&r]||"").length===+a)return o}},2282:function(e,t,a){"use strict";var r=a(1882);e.exports=function(e){return!(!e||"string"!==typeof e||e.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},2283:function(e,t,a){"use strict";e.exports=0},3477:function(e,t,a){"use strict";a.r(t);var r=a(17),n=a(19),o=a(0),l=a.n(o),c=a(678),i=a(1340),s=a(1488),d=a(1493),u=a(1489),m=a(1588),p=a(1491),f=a(677),h=a(1400),b=a(1595),g=a(24),v=a.n(g),y=a(7),E=a(1423),x=a(399),w=a(1372),j=a(1664),O=a(52),k=a(128),N=function(e){var t=e.uid,a=e.open,n=e.handleClose,i=Object(o.useState)({name:"",email:"",phone:"",balance:"",age:"",company:"",address:"",isActive:!1}),s=Object(r.a)(i,2),d=s[0],u=s[1],m=function(e,t){e.persist(),u("switch"!==t?Object(y.a)(Object(y.a)({},d),{},{[e.target.name]:e.target.value}):Object(y.a)(Object(y.a)({},d),{},{isActive:e.target.checked}))};return Object(o.useEffect)((function(){var e;(e=t,v.a.get("/api/user",{data:e})).then((function(e){return u(Object(y.a)({},e.data))}))}),[t]),l.a.createElement(E.a,{onClose:n,open:a},l.a.createElement("div",{className:"p-6"},l.a.createElement("h4",{className:"mb-5"},"Update Member"),l.a.createElement(O.ValidatorForm,{onSubmit:function(){var e;d.id?(e=Object(y.a)({},d),v.a.post("/api/user/update",e)).then((function(){n()})):function(e){return v.a.post("/api/user/add",e)}(Object(y.a)({id:Object(k.c)()},d)).then((function(){n()}))}},l.a.createElement(x.a,{className:"mb-4",container:!0,spacing:4},l.a.createElement(x.a,{item:!0,sm:6,xs:12},l.a.createElement(O.TextValidator,{className:"w-full mb-4",label:"Name",onChange:m,type:"text",name:"name",value:null===d||void 0===d?void 0:d.name,validators:["required"],errorMessages:["this field is required"]}),l.a.createElement(O.TextValidator,{className:"w-full mb-4",label:"Email",onChange:m,type:"text",name:"email",value:null===d||void 0===d?void 0:d.email,validators:["required"],errorMessages:["this field is required"]}),l.a.createElement(O.TextValidator,{className:"w-full mb-4",label:"Phone",onChange:m,type:"text",name:"phone",value:null===d||void 0===d?void 0:d.phone,validators:["required"],errorMessages:["this field is required"]}),l.a.createElement(O.TextValidator,{className:"w-full mb-4",label:"Balance",onChange:m,type:"number",name:"balance",value:null===d||void 0===d?void 0:d.balance,validators:["required"],errorMessages:["this field is required"]})),l.a.createElement(x.a,{item:!0,sm:6,xs:12},l.a.createElement(O.TextValidator,{className:"w-full mb-4",label:"Age",onChange:m,type:"number",name:"age",value:null===d||void 0===d?void 0:d.age,validators:["required"],errorMessages:["this field is required"]}),l.a.createElement(O.TextValidator,{className:"w-full mb-4",label:"Company",onChange:m,type:"text",name:"company",value:null===d||void 0===d?void 0:d.company,validators:["required"],errorMessages:["this field is required"]}),l.a.createElement(O.TextValidator,{className:"w-full mb-4",label:"Address",onChange:m,type:"text",name:"address",value:null===d||void 0===d?void 0:d.address,validators:["required"],errorMessages:["this field is required"]}),l.a.createElement(w.a,{className:"my-5",control:l.a.createElement(j.a,{checked:null===d||void 0===d?void 0:d.isActive,onChange:function(e){return m(e,"switch")}}),label:"Active Customer"}))),l.a.createElement("div",{className:"flex justify-between items-center"},l.a.createElement(c.a,{variant:"contained",color:"primary",type:"submit"},"Save"),l.a.createElement(c.a,{variant:"outlined",color:"secondary",onClick:function(){return n()}},"Cancel")))))},C=a(98),M=a(2275),$=a.n(M),S=a(673),A=a(5),q=Object(S.a)((function(e){e.palette,Object(n.a)(e,["palette"]);return{productTable:{"& thead":{"& th:first-child":{paddingLeft:16}},"& td":{borderBottom:"none"},"& td:first-child":{paddingLeft:"16px !important"}}}}));t.default=function(){var e=Object(o.useState)(null),t=Object(r.a)(e,2),a=t[0],n=t[1],g=Object(o.useState)(10),y=Object(r.a)(g,2),E=y[0],x=y[1],w=Object(o.useState)(0),j=Object(r.a)(w,2),O=j[0],k=j[1],M=Object(o.useState)(null),S=Object(r.a)(M,2),P=S[0],z=S[1],R=Object(o.useState)([]),T=Object(r.a)(R,2),V=T[0],B=T[1],I=Object(o.useState)(!1),L=Object(r.a)(I,2),H=L[0],D=L[1],U=Object(o.useState)(!1),J=Object(r.a)(U,2),K=J[0],X=J[1],Y=q(),F=function(){D(!1),X(!1),G()},G=function(){v.a.get("/api/user/all").then((function(e){var t=e.data;B(t)}))};return Object(o.useEffect)((function(){G()}),[]),l.a.createElement("div",{className:"m-sm-30"},l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement(C.b,{routeSegments:[{name:"CRUD Table"}]})),l.a.createElement(c.a,{className:"mb-4",variant:"contained",color:"primary",onClick:function(){return D(!0)}},"Add New Member"),l.a.createElement(i.a,{className:"w-full overflow-auto",elevation:6},l.a.createElement(s.a,{className:Object(A.default)("whitespace-pre min-w-750",Y.productTable)},l.a.createElement(d.a,null,l.a.createElement(u.a,null,l.a.createElement(m.a,null,"Name"),l.a.createElement(m.a,null,"Age"),l.a.createElement(m.a,null,"Balance"),l.a.createElement(m.a,null,"Company"),l.a.createElement(m.a,null,"Status"),l.a.createElement(m.a,null,"Action"))),l.a.createElement(p.a,null,null===V||void 0===V?void 0:V.slice(O*E,O*E+E).map((function(e,t){return l.a.createElement(u.a,{hover:!0,key:$.a.generate()},l.a.createElement(m.a,{className:"px-0",align:"left"},e.name),l.a.createElement(m.a,{className:"px-0",align:"left"},e.age),l.a.createElement(m.a,{className:"px-0"},"$",e.balance),l.a.createElement(m.a,{className:"px-0",align:"left"},e.company),l.a.createElement(m.a,{className:"px-0"},e.isActive?l.a.createElement("small",{className:"rounded bg-primary elevation-z3 text-white px-2 py-2px"},"active"):l.a.createElement("small",{className:"rounded bg-light-gray elevation-z3 px-2 py-2px"},"inactive")),l.a.createElement(m.a,{className:"px-0 border-none"},l.a.createElement(f.a,{onClick:function(){n(e.id),D(!0)}},l.a.createElement(h.a,{color:"primary"},"edit")),l.a.createElement(f.a,{onClick:function(){return function(e){z(e),X(!0)}(e)}},l.a.createElement(h.a,{color:"error"},"delete"))))})))),l.a.createElement(b.a,{className:"px-4",rowsPerPageOptions:[5,10,25],component:"div",count:null===V||void 0===V?void 0:V.length,rowsPerPage:E,page:O,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:function(e,t){k(t)},onChangeRowsPerPage:function(e){var t=e.target.value;return x(t)}}),H&&l.a.createElement(N,{handleClose:F,open:H,uid:a}),K&&l.a.createElement(C.d,{open:K,onConfirmDialogClose:F,onYesClick:function(){var e;(e=P,v.a.post("/api/user/delete",e)).then((function(){F()}))},text:"Are you sure to delete?"})))}}}]);