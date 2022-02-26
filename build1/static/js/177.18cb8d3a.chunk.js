(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[177],{1442:function(e,a,t){"use strict";var c=t(0),n=c.createContext();a.a=n},1488:function(e,a,t){"use strict";var c=t(6),n=t(3),l=t(0),i=(t(1),t(5)),r=t(11),s=t(1590),o=l.forwardRef((function(e,a){var t=e.classes,r=e.className,o=e.component,d=void 0===o?"table":o,p=e.padding,m=void 0===p?"default":p,u=e.size,g=void 0===u?"medium":u,f=e.stickyHeader,h=void 0!==f&&f,b=Object(c.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=l.useMemo((function(){return{padding:m,size:g,stickyHeader:h}}),[m,g,h]);return l.createElement(s.a.Provider,{value:v},l.createElement(d,Object(n.a)({role:"table"===d?null:"table",ref:a,className:Object(i.default)(t.root,r,h&&t.stickyHeader)},b)))}));a.a=Object(r.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(n.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(o)},1489:function(e,a,t){"use strict";var c=t(3),n=t(6),l=t(0),i=(t(1),t(5)),r=t(11),s=t(1442),o=t(37),d=l.forwardRef((function(e,a){var t=e.classes,r=e.className,o=e.component,d=void 0===o?"tr":o,p=e.hover,m=void 0!==p&&p,u=e.selected,g=void 0!==u&&u,f=Object(n.a)(e,["classes","className","component","hover","selected"]),h=l.useContext(s.a);return l.createElement(d,Object(c.a)({ref:a,className:Object(i.default)(t.root,r,h&&{head:t.head,footer:t.footer}[h.variant],m&&t.hover,g&&t.selected),role:"tr"===d?null:"row"},f))}));a.a=Object(r.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(o.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1491:function(e,a,t){"use strict";var c=t(3),n=t(6),l=t(0),i=(t(1),t(5)),r=t(11),s=t(1442),o={variant:"body"},d=l.forwardRef((function(e,a){var t=e.classes,r=e.className,d=e.component,p=void 0===d?"tbody":d,m=Object(n.a)(e,["classes","className","component"]);return l.createElement(s.a.Provider,{value:o},l.createElement(p,Object(c.a)({className:Object(i.default)(t.root,r),ref:a,role:"tbody"===p?null:"rowgroup"},m)))}));a.a=Object(r.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},1493:function(e,a,t){"use strict";var c=t(3),n=t(6),l=t(0),i=(t(1),t(5)),r=t(11),s=t(1442),o={variant:"head"},d=l.forwardRef((function(e,a){var t=e.classes,r=e.className,d=e.component,p=void 0===d?"thead":d,m=Object(n.a)(e,["classes","className","component"]);return l.createElement(s.a.Provider,{value:o},l.createElement(p,Object(c.a)({className:Object(i.default)(t.root,r),ref:a,role:"thead"===p?null:"rowgroup"},m)))}));a.a=Object(r.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},1588:function(e,a,t){"use strict";var c=t(6),n=t(3),l=t(0),i=(t(1),t(5)),r=t(11),s=t(15),o=t(37),d=t(1590),p=t(1442),m=l.forwardRef((function(e,a){var t,r,o=e.align,m=void 0===o?"inherit":o,u=e.classes,g=e.className,f=e.component,h=e.padding,b=e.scope,v=e.size,x=e.sortDirection,y=e.variant,N=Object(c.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),E=l.useContext(d.a),w=l.useContext(p.a),j=w&&"head"===w.variant;f?(r=f,t=j?"columnheader":"cell"):r=j?"th":"td";var O=b;!O&&j&&(O="col");var k=h||(E&&E.padding?E.padding:"default"),z=v||(E&&E.size?E.size:"medium"),C=y||w&&w.variant,R=null;return x&&(R="asc"===x?"ascending":"descending"),l.createElement(r,Object(n.a)({ref:a,className:Object(i.default)(u.root,u[C],g,"inherit"!==m&&u["align".concat(Object(s.a)(m))],"default"!==k&&u["padding".concat(Object(s.a)(k))],"medium"!==z&&u["size".concat(Object(s.a)(z))],"head"===C&&E&&E.stickyHeader&&u.stickyHeader),"aria-sort":R,role:t,scope:O},N))}));a.a=Object(r.a)((function(e){return{root:Object(n.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(o.i)(Object(o.d)(e.palette.divider,1),.88):Object(o.a)(Object(o.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(m)},1590:function(e,a,t){"use strict";var c=t(0),n=c.createContext();a.a=n},2355:function(e,a){},3311:function(e,a,t){"use strict";t.r(a);var c=t(13),n=t(0),l=t.n(n),i=t(2343),r=t.n(i),s=t(1488),o=t(1493),d=t(1489),p=t(1588),m=t(1491),u=t(98),g=t(1964),f=t.n(g);a.default=function(){return l.a.createElement("div",{className:"m-sm-30"},l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement(u.b,{routeSegments:[{name:"Utilities",path:"/utilities"},{name:"Typography"}]})),l.a.createElement(u.A,{title:"typography"},l.a.createElement(s.a,null,l.a.createElement(o.a,null,l.a.createElement(d.a,{className:"bg-default"},l.a.createElement(p.a,{className:"px-0"},"Class Name"),l.a.createElement(p.a,{className:"px-0"},"Size"),l.a.createElement(p.a,{className:"px-0"},"Example"))),l.a.createElement(m.a,null,Object(c.a)(Array(7).keys()).slice(1).reverse().map((function(e,a){return l.a.createElement(d.a,{key:a},l.a.createElement(p.a,{className:"px-0"},"h",e),l.a.createElement(p.a,{className:"px-0 capitalize"}),l.a.createElement(p.a,{className:"px-0 capitalize"},r()("<h".concat(e,">h").concat(e,"</h").concat(e,">"))))})),l.a.createElement(d.a,null,l.a.createElement(p.a,{className:"px-0"},"text-small"),l.a.createElement(p.a,{className:"px-0 capitalize"},"0.8125rem"),l.a.createElement(p.a,{className:"px-0 capitalize"},l.a.createElement("span",{className:"text-small"},"text-small"))),[13,14,16,18,20,22,24,30,32].map((function(e,a){return l.a.createElement(d.a,{key:a},l.a.createElement(p.a,{className:"px-0"},"text-",e),l.a.createElement(p.a,{className:"px-0 capitalize"},e,"px"),l.a.createElement(p.a,{className:"px-0 capitalize"},r()('<span class="text-'.concat(e,'">text-').concat(e,"</span>"))))})))),l.a.createElement("div",{className:"py-2"}),[{className:".font-light",description:"font-weight: 300"},{className:".font-normal",description:"font-weight: normal"},{className:".font-medium",description:"font-weight: 500"},{className:".font-semibold",description:"font-weight: 600"},{className:".font-bold",description:"font-weight: 700"},{className:".capitalize",description:"Capitalize String"},{className:".uppercase",description:"UPPERCASE STRING"},{className:".lowercase",description:"lowercase string"},{className:".whitespace-pre",description:"white-space: pre"},{className:".whitespace-pre-wrap",description:"white-space: pre-wrap"},{className:".whitespace-no-wrap",description:"white-space: nowrap"}].map((function(e,a){return l.a.createElement("div",{key:a,className:"flex items-center flex-wrap justify-between"},l.a.createElement("code",null,e.className),l.a.createElement("div",{className:"highlight-js"},l.a.createElement(f.a,{className:"html"},'<div className="'.concat(e.className.replace(".",""),'">').concat(e.description,"</div>"))))}))))}}}]);