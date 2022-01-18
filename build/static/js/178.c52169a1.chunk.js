(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[178],{1355:function(e,a,t){"use strict";var l=t(1),n=l.createContext();a.a=n},1382:function(e,a,t){"use strict";var l=t(6),n=t(3),c=t(1),r=(t(0),t(5)),i=t(11),s=t(15),o=t(33),d=t(1441),m=t(1355),p=c.forwardRef((function(e,a){var t,i,o=e.align,p=void 0===o?"inherit":o,u=e.classes,g=e.className,f=e.component,b=e.padding,x=e.scope,h=e.size,E=e.sortDirection,v=e.variant,y=Object(l.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),N=c.useContext(d.a),j=c.useContext(m.a),z=j&&"head"===j.variant;f?(i=f,t=z?"columnheader":"cell"):i=z?"th":"td";var O=x;!O&&z&&(O="col");var w=b||(N&&N.padding?N.padding:"default"),k=h||(N&&N.size?N.size:"medium"),C=v||j&&j.variant,R=null;return E&&(R="asc"===E?"ascending":"descending"),c.createElement(i,Object(n.a)({ref:a,className:Object(r.default)(u.root,u[C],g,"inherit"!==p&&u["align".concat(Object(s.a)(p))],"default"!==w&&u["padding".concat(Object(s.a)(w))],"medium"!==k&&u["size".concat(Object(s.a)(k))],"head"===C&&N&&N.stickyHeader&&u.stickyHeader),"aria-sort":R,role:t,scope:O},y))}));a.a=Object(i.a)((function(e){return{root:Object(n.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(o.i)(Object(o.d)(e.palette.divider,1),.88):Object(o.a)(Object(o.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(p)},1384:function(e,a,t){"use strict";var l=t(6),n=t(3),c=t(1),r=(t(0),t(5)),i=t(11),s=t(1441),o=c.forwardRef((function(e,a){var t=e.classes,i=e.className,o=e.component,d=void 0===o?"table":o,m=e.padding,p=void 0===m?"default":m,u=e.size,g=void 0===u?"medium":u,f=e.stickyHeader,b=void 0!==f&&f,x=Object(l.a)(e,["classes","className","component","padding","size","stickyHeader"]),h=c.useMemo((function(){return{padding:p,size:g,stickyHeader:b}}),[p,g,b]);return c.createElement(s.a.Provider,{value:h},c.createElement(d,Object(n.a)({role:"table"===d?null:"table",ref:a,className:Object(r.default)(t.root,i,b&&t.stickyHeader)},x)))}));a.a=Object(i.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(n.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(o)},1385:function(e,a,t){"use strict";var l=t(3),n=t(6),c=t(1),r=(t(0),t(5)),i=t(11),s=t(1355),o=t(33),d=c.forwardRef((function(e,a){var t=e.classes,i=e.className,o=e.component,d=void 0===o?"tr":o,m=e.hover,p=void 0!==m&&m,u=e.selected,g=void 0!==u&&u,f=Object(n.a)(e,["classes","className","component","hover","selected"]),b=c.useContext(s.a);return c.createElement(d,Object(l.a)({ref:a,className:Object(r.default)(t.root,i,b&&{head:t.head,footer:t.footer}[b.variant],p&&t.hover,g&&t.selected),role:"tr"===d?null:"row"},f))}));a.a=Object(i.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(o.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1386:function(e,a,t){"use strict";var l=t(3),n=t(6),c=t(1),r=(t(0),t(5)),i=t(11),s=t(1355),o={variant:"body"},d=c.forwardRef((function(e,a){var t=e.classes,i=e.className,d=e.component,m=void 0===d?"tbody":d,p=Object(n.a)(e,["classes","className","component"]);return c.createElement(s.a.Provider,{value:o},c.createElement(m,Object(l.a)({className:Object(r.default)(t.root,i),ref:a,role:"tbody"===m?null:"rowgroup"},p)))}));a.a=Object(i.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},1387:function(e,a,t){"use strict";var l=t(3),n=t(6),c=t(1),r=(t(0),t(5)),i=t(11),s=t(1355),o={variant:"head"},d=c.forwardRef((function(e,a){var t=e.classes,i=e.className,d=e.component,m=void 0===d?"thead":d,p=Object(n.a)(e,["classes","className","component"]);return c.createElement(s.a.Provider,{value:o},c.createElement(m,Object(l.a)({className:Object(r.default)(t.root,i),ref:a,role:"thead"===m?null:"rowgroup"},p)))}));a.a=Object(i.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},1441:function(e,a,t){"use strict";var l=t(1),n=l.createContext();a.a=n},2711:function(e,a,t){"use strict";t.r(a);var l=t(13),n=t(1),c=t.n(n),r=t(1384),i=t(1387),s=t(1385),o=t(1382),d=t(1386),m=t(91),p=t(1735),u=t.n(p);a.default=function(){return c.a.createElement("div",{className:"m-sm-30"},c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(m.b,{routeSegments:[{name:"Utilities",path:"/utilities"},{name:"Spacing"}]})),c.a.createElement(m.A,{title:"Spacing"},c.a.createElement("p",{className:"m-0"},"The classes are named using the format-",c.a.createElement("code",null,"(property)(sides)-(size)")),c.a.createElement("p",null,"Where ",c.a.createElement("em",null,"property")," is one of:"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("code",null,"m")," - for classes that set ",c.a.createElement("code",null,"margin")),c.a.createElement("li",null,c.a.createElement("code",null,"p")," - for classes that set ",c.a.createElement("code",null,"padding"))),c.a.createElement("p",null,"Where ",c.a.createElement("em",null,"sides")," is one of:"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("code",null,"t")," - for classes that set ",c.a.createElement("code",null,"margin-top")," or"," ",c.a.createElement("code",null,"padding-top")),c.a.createElement("li",null,c.a.createElement("code",null,"b")," - for classes that set ",c.a.createElement("code",null,"margin-bottom")," or"," ",c.a.createElement("code",null,"padding-bottom")),c.a.createElement("li",null,c.a.createElement("code",null,"l")," - for classes that set ",c.a.createElement("code",null,"margin-left")," or"," ",c.a.createElement("code",null,"padding-left")),c.a.createElement("li",null,c.a.createElement("code",null,"r")," - for classes that set ",c.a.createElement("code",null,"margin-right")," or"," ",c.a.createElement("code",null,"padding-right")),c.a.createElement("li",null,c.a.createElement("code",null,"x")," - for classes that set both ",c.a.createElement("code",null,"*-left")," and"," ",c.a.createElement("code",null,"*-right")),c.a.createElement("li",null,c.a.createElement("code",null,"y")," - for classes that set both ",c.a.createElement("code",null,"*-top")," and"," ",c.a.createElement("code",null,"*-bottom")),c.a.createElement("li",null,"blank - for classes that set a ",c.a.createElement("code",null,"margin")," or"," ",c.a.createElement("code",null,"padding")," on all 4 sides of the element")),c.a.createElement(r.a,{className:"whitespace-pre"},c.a.createElement(i.a,null,c.a.createElement(s.a,{className:"bg-default"},c.a.createElement(o.a,{className:"px-0"},"Name"),c.a.createElement(o.a,{className:"px-0"},"Size"),c.a.createElement(o.a,{className:"px-0"},"Pixels"),c.a.createElement(o.a,{className:"px-0"},"Space"))),c.a.createElement(d.a,null,Object(l.a)(Array(26).keys()).map((function(e,a){return c.a.createElement(s.a,{key:a},c.a.createElement(o.a,{className:"px-0 capitalize",align:"left"},e),c.a.createElement(o.a,{className:"px-0 capitalize",align:"left"},.25*e,"rem"),c.a.createElement(o.a,{className:"px-0 capitalize",align:"left"},.25*e*16,"px"),c.a.createElement(o.a,{className:"px-0 capitalize"},c.a.createElement("span",{className:"py-2 bg-light-gray pr-".concat(e)})))})),Object(l.a)(Array(17).keys()).slice(1).map((function(e,a){return c.a.createElement(s.a,{key:a},c.a.createElement(o.a,{className:"px-0 capitalize",align:"left"},e,"px"),c.a.createElement(o.a,{className:"px-0 capitalize",align:"left"},e/16,"rem"),c.a.createElement(o.a,{className:"px-0 capitalize",align:"left"},e,"px"),c.a.createElement(o.a,{className:"px-0 capitalize"},c.a.createElement("span",{className:"py-2 bg-light-gray pr-".concat(e,"px")})))})))),c.a.createElement("h6",{className:"mb-4 py-6"},"Example"),[{className:".m-0",description:"margin 0px"},{className:".mx-4",description:"margin right 1rem & margin left 1rem"},{className:".p-0",description:"padding 0px"},{className:".py-2",description:"padding top 0.5rem & padding bottom 0.5rem"},{className:".py-2px",description:"padding top 2px & padding bottom 2px"},{className:".m-auto",description:"margin: auto"},{className:".mx-auto",description:"margin-right: auto; margin-left: auto"},{className:".m-sm-30",description:"\n      screen size below 768px:: margin is 16px \n      screen size over 768px:: margin is 30px\n      "},{className:".mb-sm-30",description:"\n      screen size below 768px:: margin-bottom is 16px \n      screen size over 768px:: margin-bottom is 30px\n      "},{className:".px-sm-30",description:"\n      screen size below 768px:: padding right and left is 16px \n      screen size over 768px:: padding right and left is 30px\n      "},{className:".p-sm-30",description:"\n      screen size below 768px:: padding is 16px \n      screen size over 768px:: padding is 24px\n      "},{className:".px-sm-24",description:"\n      screen size below 768px:: padding right and left is 16px\n      screen size over 768px:: padding right and left is 24px\n       "},{className:".pt-sm-24",description:"\n      screen size below 768px:: padding top is 16px\n      screen size over 768px:: padding top is 24px\n       "},{className:".pl-sm-24",description:"\n      screen size below 768px:: padding left is 16px\n      screen size over 768px:: padding left is 24px\n       "}].map((function(e,a){return c.a.createElement("div",{key:a,className:"flex items-center justify-between px-4"},c.a.createElement("code",{className:"min-w-88"},e.className),c.a.createElement("div",{className:"highlight-js"},c.a.createElement(u.a,{className:"html"},'<div className="'.concat(e.className.replace(".",""),'">').concat(e.description,"</div>"))))}))))}}}]);