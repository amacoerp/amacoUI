(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[163],{1561:function(e,a,t){"use strict";var n=t(0),r=n.createContext();a.a=r},1627:function(e,a,t){"use strict";var n=t(6),r=t(3),c=t(0),o=t(5),i=t(11),l=t(1684),s=c.forwardRef((function(e,a){var t=e.classes,i=e.className,s=e.component,d=void 0===s?"table":s,p=e.padding,u=void 0===p?"normal":p,m=e.size,b=void 0===m?"medium":m,f=e.stickyHeader,g=void 0!==f&&f,v=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),h=c.useMemo((function(){return{padding:u,size:b,stickyHeader:g}}),[u,b,g]);return c.createElement(l.a.Provider,{value:h},c.createElement(d,Object(r.a)({role:"table"===d?null:"table",ref:a,className:Object(o.default)(t.root,i,g&&t.stickyHeader)},v)))}));a.a=Object(i.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},1628:function(e,a,t){"use strict";var n=t(3),r=t(6),c=t(0),o=t(5),i=t(11),l=t(1561),s=t(41),d=c.forwardRef((function(e,a){var t=e.classes,i=e.className,s=e.component,d=void 0===s?"tr":s,p=e.hover,u=void 0!==p&&p,m=e.selected,b=void 0!==m&&m,f=Object(r.a)(e,["classes","className","component","hover","selected"]),g=c.useContext(l.a);return c.createElement(d,Object(n.a)({ref:a,className:Object(o.default)(t.root,i,g&&{head:t.head,footer:t.footer}[g.variant],u&&t.hover,b&&t.selected),role:"tr"===d?null:"row"},f))}));a.a=Object(i.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.a)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1630:function(e,a,t){"use strict";var n=t(3),r=t(6),c=t(0),o=t(5),i=t(11),l=t(1561),s={variant:"body"},d=c.forwardRef((function(e,a){var t=e.classes,i=e.className,d=e.component,p=void 0===d?"tbody":d,u=Object(r.a)(e,["classes","className","component"]);return c.createElement(l.a.Provider,{value:s},c.createElement(p,Object(n.a)({className:Object(o.default)(t.root,i),ref:a,role:"tbody"===p?null:"rowgroup"},u)))}));a.a=Object(i.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},1632:function(e,a,t){"use strict";var n=t(6),r=t(3),c=t(0),o=t(5),i=t(11),l=t(15),s=t(41),d=t(1684),p=t(1561),u=c.forwardRef((function(e,a){var t,i,s=e.align,u=void 0===s?"inherit":s,m=e.classes,b=e.className,f=e.component,g=e.padding,v=e.scope,h=e.size,y=e.sortDirection,O=e.variant,j=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),x=c.useContext(d.a),N=c.useContext(p.a),E=N&&"head"===N.variant;f?(i=f,t=E?"columnheader":"cell"):i=E?"th":"td";var w=v;!w&&E&&(w="col");var k=g||(x&&x.padding?x.padding:"normal"),z=h||(x&&x.size?x.size:"medium"),C=O||N&&N.variant,R=null;return y&&(R="asc"===y?"ascending":"descending"),c.createElement(i,Object(r.a)({ref:a,className:Object(o.default)(m.root,m[C],b,"inherit"!==u&&m["align".concat(Object(l.a)(u))],"normal"!==k&&m["padding".concat(Object(l.a)(k))],"medium"!==z&&m["size".concat(Object(l.a)(z))],"head"===C&&x&&x.stickyHeader&&m.stickyHeader),"aria-sort":R,role:t,scope:w},j))}));a.a=Object(i.a)((function(e){return{root:Object(r.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.j)(Object(s.a)(e.palette.divider,1),.88):Object(s.b)(Object(s.a)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(u)},1633:function(e,a,t){"use strict";var n=t(3),r=t(6),c=t(0),o=t(5),i=t(11),l=t(1561),s={variant:"head"},d=c.forwardRef((function(e,a){var t=e.classes,i=e.className,d=e.component,p=void 0===d?"thead":d,u=Object(r.a)(e,["classes","className","component"]);return c.createElement(l.a.Provider,{value:s},c.createElement(p,Object(n.a)({className:Object(o.default)(t.root,i),ref:a,role:"thead"===p?null:"rowgroup"},u)))}));a.a=Object(i.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},1684:function(e,a,t){"use strict";var n=t(0),r=n.createContext();a.a=r},2380:function(e,a,t){"use strict";t.d(a,"b",(function(){return c})),t.d(a,"c",(function(){return o})),t.d(a,"a",(function(){return i})),t.d(a,"d",(function(){return l}));var n=t(26),r=t.n(n),c=function(){return r.a.get("http://www.dataqueuesystems.com/amaco/amaco/public/api/products")},o=function(e){return r.a.get("/api/invoices",{data:e})},i=function(e){return r.a.post("/api/invoices/add",e)},l=function(e){return r.a.post("/api/invoices/update",e)}},3310:function(e,a,t){"use strict";t.r(a);var n=t(18),r=t(0),c=t.n(r),o=t(674),i=t(1354),l=t(1627),s=t(1633),d=t(1628),p=t(1632),u=t(1630),m=t(2380),b=t(31),f=t(47),g=t(100),v=t(5);a.default=function(){var e=Object(r.useState)([]),a=Object(n.a)(e,2),t=a[0],h=a[1],y=Object(r.useState)(null),O=Object(n.a)(y,2),j=(O[0],O[1],Object(r.useState)(!1)),x=Object(n.a)(j,2),N=x[0],E=(x[1],Object(r.useState)(!0)),w=Object(n.a)(E,2),k=w[0],z=w[1],C=Object(b.g)();Object(r.useEffect)((function(){return Object(m.b)().then((function(e){k&&h(e.data)})),function(){return z(!1)}}),[k]);return c.a.createElement("div",{className:"m-sm-30"},c.a.createElement(f.b,{to:"/invoice/add"},c.a.createElement(o.a,{className:"mb-4",variant:"contained",color:"primary"},"Add Invoice")),c.a.createElement(i.a,{elevation:6,className:"w-full overflow-auto"},c.a.createElement(l.a,{className:"min-w-750"},c.a.createElement(s.a,null,c.a.createElement(d.a,null,c.a.createElement(p.a,{className:"pl-sm-24"},"Order No."),c.a.createElement(p.a,{className:"px-0"},"Bill From"),c.a.createElement(p.a,{className:"px-0"},"Bill To"),c.a.createElement(p.a,{className:"px-0"},"Status"),c.a.createElement(p.a,{className:"px-0"},"Actions"))),c.a.createElement(u.a,null,t.map((function(e,a){return c.a.createElement(d.a,{key:e.id},c.a.createElement(p.a,{className:"pl-sm-24 capitalize",align:"left"},e.name),c.a.createElement(p.a,{className:"pl-0 capitalize",align:"left"},e.description),c.a.createElement(p.a,{className:"pl-0 capitalize",align:"left"},e.name),c.a.createElement(p.a,{className:"pl-0 capitalize"},c.a.createElement("small",{className:Object(v.default)({"border-radius-4  text-white px-2 py-2px":!0,"bg-primary":"delivered"===e.status,"bg-secondary":"processing"===e.status,"bg-error":"pending"===e.status})},e.status)),c.a.createElement(p.a,{className:"pl-0"},c.a.createElement(o.a,{color:"primary",className:"mr-2",onClick:function(){return a=e.id,void C.push("/demo/".concat(a));var a}},"Open"),c.a.createElement(o.a,{color:"secondary"},"Delete")))}))))),c.a.createElement(g.c,{open:N,text:"Are you sure to delete?"}))}}}]);