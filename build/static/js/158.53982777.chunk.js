(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[158],{1261:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(1);function r(e){var t=n.useState(e),a=t[0],r=t[1],l=e||a;return n.useEffect((function(){null==a&&r("mui-".concat(Math.round(1e5*Math.random())))}),[a]),l}},1354:function(e,t,a){"use strict";var n=a(1),r=n.createContext();t.a=r},1382:function(e,t,a){"use strict";var n=a(6),r=a(3),l=a(1),c=(a(0),a(5)),i=a(11),s=a(15),o=a(33),m=a(1440),d=a(1354),u=l.forwardRef((function(e,t){var a,i,o=e.align,u=void 0===o?"inherit":o,p=e.classes,f=e.className,g=e.component,h=e.padding,b=e.scope,v=e.size,E=e.sortDirection,x=e.variant,N=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),y=l.useContext(m.a),j=l.useContext(d.a),O=j&&"head"===j.variant;g?(i=g,a=O?"columnheader":"cell"):i=O?"th":"td";var w=b;!w&&O&&(w="col");var z=h||(y&&y.padding?y.padding:"default"),S=v||(y&&y.size?y.size:"medium"),R=x||j&&j.variant,k=null;return E&&(k="asc"===E?"ascending":"descending"),l.createElement(i,Object(r.a)({ref:t,className:Object(c.default)(p.root,p[R],f,"inherit"!==u&&p["align".concat(Object(s.a)(u))],"default"!==z&&p["padding".concat(Object(s.a)(z))],"medium"!==S&&p["size".concat(Object(s.a)(S))],"head"===R&&y&&y.stickyHeader&&p.stickyHeader),"aria-sort":k,role:a,scope:w},N))}));t.a=Object(i.a)((function(e){return{root:Object(r.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(o.i)(Object(o.d)(e.palette.divider,1),.88):Object(o.a)(Object(o.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(u)},1420:function(e,t,a){"use strict";var n=a(3),r=a(6),l=a(1),c=(a(0),a(5)),i=a(11),s=a(33),o=l.forwardRef((function(e,t){var a=e.absolute,i=void 0!==a&&a,s=e.classes,o=e.className,m=e.component,d=void 0===m?"hr":m,u=e.flexItem,p=void 0!==u&&u,f=e.light,g=void 0!==f&&f,h=e.orientation,b=void 0===h?"horizontal":h,v=e.role,E=void 0===v?"hr"!==d?"separator":void 0:v,x=e.variant,N=void 0===x?"fullWidth":x,y=Object(r.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return l.createElement(d,Object(n.a)({className:Object(c.default)(s.root,o,"fullWidth"!==N&&s[N],i&&s.absolute,p&&s.flexItem,g&&s.light,"vertical"===b&&s.vertical),role:E,ref:t},y))}));t.a=Object(i.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(s.d)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(o)},1440:function(e,t,a){"use strict";var n=a(1),r=n.createContext();t.a=r},1441:function(e,t,a){"use strict";var n=a(3),r=a(6),l=a(1),c=(a(0),a(5)),i=a(11),s=a(78),o=Object(s.a)(l.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var m=l.forwardRef((function(e,t){var a=e.alt,i=e.children,s=e.classes,m=e.className,d=e.component,u=void 0===d?"div":d,p=e.imgProps,f=e.sizes,g=e.src,h=e.srcSet,b=e.variant,v=void 0===b?"circle":b,E=Object(r.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),x=null,N=function(e){var t=e.src,a=e.srcSet,n=l.useState(!1),r=n[0],c=n[1];return l.useEffect((function(){if(t||a){c(!1);var e=!0,n=new Image;return n.src=t,n.srcSet=a,n.onload=function(){e&&c("loaded")},n.onerror=function(){e&&c("error")},function(){e=!1}}}),[t,a]),r}({src:g,srcSet:h}),y=g||h,j=y&&"error"!==N;return x=j?l.createElement("img",Object(n.a)({alt:a,src:g,srcSet:h,sizes:f,className:s.img},p)):null!=i?i:y&&a?a[0]:l.createElement(o,{className:s.fallback}),l.createElement(u,Object(n.a)({className:Object(c.default)(s.root,s.system,s[v],m,!j&&s.colorDefault),ref:t},E),x)}));t.a=Object(i.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(m)},1640:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(3),r=a(1),l=a.n(r),c=a(359);function i(e,t){var a=l.a.memo(l.a.forwardRef((function(t,a){return l.a.createElement(c.a,Object(n.a)({ref:a},t),e)})));return a.muiName=c.a.muiName,a}},1711:function(e,t,a){"use strict";var n=a(1),r=a(78);t.a=Object(r.a)(n.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},1712:function(e,t,a){"use strict";var n=a(1),r=a(78);t.a=Object(r.a)(n.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},2031:function(e,t,a){"use strict";var n=a(1),r=a.n(n),l=a(1640);t.a=Object(l.a)(r.a.createElement("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter")},2893:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a(1),l=a.n(r),c=a(1222),i=a(1223),s=a(1441),o=a(1420),m=a(1167),d=a(1196),u=a(1393),p=a(91),f=a(22),g=a.n(f),h=a(17),b=a(1383),v=a(51),E=a(2031),x=a(1166),N=a(5),y=Object(x.a)((function(e){e.palette,Object(h.a)(e,["palette"]);return{google:{color:"#ec412c"},twitter:{color:"#039ff5"}}})),j=function(e){var t=e.user,a=y();return l.a.createElement(i.a,{className:"p-5"},l.a.createElement("div",{className:"flex justify-between mb-4"},l.a.createElement(s.a,{className:"h-56 w-56",src:null===t||void 0===t?void 0:t.imgUrl}),l.a.createElement("div",null,l.a.createElement(p.o,{menuButton:l.a.createElement(d.a,{className:"cursor-pointer"},"more_horiz")},l.a.createElement(b.a,null,l.a.createElement(d.a,{fontSize:"small"}," account_circle "),l.a.createElement("span",{className:"pl-4"}," View Profile ")),l.a.createElement(b.a,null,l.a.createElement(d.a,{fontSize:"small"}," person_add "),l.a.createElement("span",{className:"pl-4"}," Add to Team ")),l.a.createElement(b.a,null,l.a.createElement(d.a,{fontSize:"small"}," edit "),l.a.createElement("span",{className:"pl-4"}," Edit Profile "))))),l.a.createElement("div",null,l.a.createElement("h5",{className:"m-0 capitalize"},null===t||void 0===t?void 0:t.name),l.a.createElement("p",{className:"text-muted"},"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),l.a.createElement("div",{className:"mb-4"},l.a.createElement(v.a,{className:"flex mb-1 items-center",to:"/"},l.a.createElement(p.i,{fontSize:"small",className:Object(N.default)("text-14",a.google)}),l.a.createElement("span",{className:"ml-2"},"ui-lib@gmail.com")),l.a.createElement(v.a,{className:"flex items-center",to:"/"},l.a.createElement(E.a,{fontSize:"small",className:Object(N.default)("text-14",a.twitter)}),l.a.createElement("span",{className:"ml-2"},"uilib"))),l.a.createElement("div",{className:"flex flex-wrap"},l.a.createElement(m.a,{size:"small",className:"bg-light-primary hover-bg-primary text-primary px-5 mr-1"},"CHAT"),l.a.createElement(m.a,{size:"small",className:"bg-light-primary hover-bg-primary text-primary px-5"},"PROFILE"))))};t.default=function(){var e=Object(r.useState)(!0),t=Object(n.a)(e,2),a=t[0],f=t[1],h=Object(r.useState)([]),b=Object(n.a)(h,2),v=b[0],E=b[1],x=Object(r.useState)(10),N=Object(n.a)(x,2),y=N[0],O=N[1],w=Object(r.useState)(0),z=Object(n.a)(w,2),S=z[0],R=z[1];return Object(r.useEffect)((function(){return g.a.get("/api/user/all").then((function(e){var t=e.data;a&&E(t)})),function(){return f(!1)}}),[a]),l.a.createElement("div",{className:"m-sm-30"},l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement(p.b,{routeSegments:[{name:"Pages",path:"/pages"},{name:"User List 3"}]})),l.a.createElement(c.a,{container:!0,spacing:2},l.a.createElement(c.a,{item:!0,md:3,sm:12,xs:12},l.a.createElement(i.a,{className:"pb-8"},l.a.createElement("div",{className:"p-8 flex-column items-center"},l.a.createElement(s.a,{className:"h-56 w-56 mb-6",src:"/assets/images/face-1.png"}),l.a.createElement("p",{className:"mt-0 mb-2 text-muted font-normal capitalize"},"Project manager"),l.a.createElement("h5",{className:"m-0"},"Asiya Wolff")),l.a.createElement(o.a,{className:"mb-8"}),l.a.createElement("div",{className:"mb-8"},l.a.createElement("p",{className:"text-muted mt-0 mb-3 ml-3"},"TEAMS"),l.a.createElement(m.a,{variant:"text",className:"w-full justify-start px-3"},l.a.createElement(d.a,{fontSize:"small"},"people"),l.a.createElement("span",{className:"ml-2"},"Alpha")),l.a.createElement(m.a,{variant:"text",className:"w-full justify-start px-3"},l.a.createElement(d.a,{fontSize:"small"},"people"),l.a.createElement("span",{className:"ml-2"},"Beta")),l.a.createElement(m.a,{variant:"text",className:"w-full justify-start px-3"},l.a.createElement(d.a,{fontSize:"small"},"people"),l.a.createElement("span",{className:"ml-2"},"Sales")),l.a.createElement(m.a,{variant:"text",className:"w-full justify-start px-3"},l.a.createElement(d.a,{fontSize:"small"},"people"),l.a.createElement("span",{className:"ml-2"},"Report"))),l.a.createElement("div",null,l.a.createElement("p",{className:"text-muted mt-0 mb-3 ml-3"},"MY TEAM"),l.a.createElement(m.a,{variant:"text",className:"w-full justify-start px-3"},l.a.createElement(d.a,{fontSize:"small"},"favorite"),l.a.createElement("span",{className:"ml-2"},"Favorite"))))),l.a.createElement(c.a,{item:!0,md:9,sm:12,xs:12},l.a.createElement(c.a,{container:!0,spacing:2},v.slice(S*y,S*y+y).map((function(e,t){return l.a.createElement(c.a,{key:e.id,item:!0,sm:6,xs:12},l.a.createElement(j,{user:e}))}))),l.a.createElement("div",{className:"mt-4"},l.a.createElement(u.a,{className:"px-4",rowsPerPageOptions:[10,25,50],component:"div",count:v.length,rowsPerPage:y,page:S,onChangePage:function(e,t){R(t)},onChangeRowsPerPage:function(e){O(+e.target.value),R(0)}})))))}}}]);