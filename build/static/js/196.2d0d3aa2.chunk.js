(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[196],{1312:function(e,a,t){"use strict";a.a={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"}},1349:function(e,a,t){"use strict";var c=t(3),r=t(6),l=t(1),n=(t(0),t(5)),o=t(11),i=l.forwardRef((function(e,a){var t=e.classes,o=e.className,i=e.row,d=void 0!==i&&i,s=Object(r.a)(e,["classes","className","row"]);return l.createElement("div",Object(c.a)({className:Object(n.default)(t.root,o,d&&t.row),ref:a},s))}));a.a=Object(o.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(i)},1463:function(e,a,t){"use strict";var c=t(3),r=t(6),l=t(1),n=(t(0),t(5)),o=t(11),i=t(33),d=t(15),s=t(358),m=l.forwardRef((function(e,a){var t=e.classes,o=e.className,i=e.color,m=void 0===i?"secondary":i,h=e.edge,u=void 0!==h&&h,b=e.size,p=void 0===b?"medium":b,k=Object(r.a)(e,["classes","className","color","edge","size"]),g=l.createElement("span",{className:t.thumb});return l.createElement("span",{className:Object(n.default)(t.root,o,{start:t.edgeStart,end:t.edgeEnd}[u],"small"===p&&t["size".concat(Object(d.a)(p))])},l.createElement(s.a,Object(c.a)({type:"checkbox",icon:g,checkedIcon:g,classes:{root:Object(n.default)(t.switchBase,t["color".concat(Object(d.a)(m))]),input:t.input,checked:t.checked,disabled:t.disabled},ref:a},k)),l.createElement("span",{className:t.track}))}));a.a=Object(o.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(i.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(i.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(m)},2839:function(e,a,t){"use strict";t.r(a);var c=t(1),r=t.n(c),l=t(8),n=t(20),o=t(1463);function i(){var e=r.a.useState({checkedA:!0,checkedB:!0}),a=Object(n.a)(e,2),t=a[0],c=a[1],i=function(e){return function(a){c(Object(l.a)(Object(l.a)({},t),{},{[e]:a.target.checked}))}};return r.a.createElement("div",null,r.a.createElement(o.a,{checked:t.checkedA,onChange:i("checkedA"),value:"checkedA",inputProps:{"aria-label":"secondary checkbox"}}),r.a.createElement(o.a,{checked:t.checkedB,onChange:i("checkedB"),value:"checkedB",color:"primary",inputProps:{"aria-label":"primary checkbox"}}),r.a.createElement(o.a,{value:"checkedC",inputProps:{"aria-label":"primary checkbox"}}),r.a.createElement(o.a,{disabled:!0,value:"checkedD",inputProps:{"aria-label":"disabled checkbox"}}),r.a.createElement(o.a,{disabled:!0,checked:!0,value:"checkedE",inputProps:{"aria-label":"primary checkbox"}}),r.a.createElement(o.a,{defaultChecked:!0,value:"checkedF",color:"default",inputProps:{"aria-label":"checkbox with default color"}}))}var d=t(1349),s=t(1168);function m(){var e=r.a.useState({checkedA:!0,checkedB:!0}),a=Object(n.a)(e,2),t=a[0],c=a[1],i=function(e){return function(a){c(Object(l.a)(Object(l.a)({},t),{},{[e]:a.target.checked}))}};return r.a.createElement(d.a,{row:!0},r.a.createElement(s.a,{control:r.a.createElement(o.a,{checked:t.checkedA,onChange:i("checkedA"),value:"checkedA"}),label:"Secondary"}),r.a.createElement(s.a,{control:r.a.createElement(o.a,{checked:t.checkedB,onChange:i("checkedB"),value:"checkedB",color:"primary"}),label:"Primary"}),r.a.createElement(s.a,{control:r.a.createElement(o.a,{value:"checkedC"}),label:"Uncontrolled"}),r.a.createElement(s.a,{disabled:!0,control:r.a.createElement(o.a,{value:"checkedD"}),label:"Disabled"}),r.a.createElement(s.a,{disabled:!0,control:r.a.createElement(o.a,{checked:!0,value:"checkedE"}),label:"Disabled"}))}var h=t(1137),u=t(567),b=t(1138);function p(){var e=r.a.useState({gilad:!0,jason:!1,antoine:!0}),a=Object(n.a)(e,2),t=a[0],c=a[1],i=function(e){return function(a){c(Object(l.a)(Object(l.a)({},t),{},{[e]:a.target.checked}))}};return r.a.createElement(u.a,{component:"fieldset"},r.a.createElement(h.a,{component:"legend"},"Assign responsibility"),r.a.createElement(d.a,null,r.a.createElement(s.a,{control:r.a.createElement(o.a,{checked:t.gilad,onChange:i("gilad"),value:"gilad"}),label:"Gilad Gray"}),r.a.createElement(s.a,{control:r.a.createElement(o.a,{checked:t.jason,onChange:i("jason"),value:"jason"}),label:"Jason Killian"}),r.a.createElement(s.a,{control:r.a.createElement(o.a,{checked:t.antoine,onChange:i("antoine"),value:"antoine"}),label:"Antoine Llorca"})),r.a.createElement(b.a,null,"Be careful"))}var k=t(17),g=t(11),f=t(1312),E=t(1222),y=t(568),v=Object(g.a)({switchBase:{color:f.a[300],"&$checked":{color:f.a[500]},"&$checked + $track":{backgroundColor:f.a[500]}},checked:{},track:{}})(o.a),w=Object(g.a)((function(e){return{root:{width:42,height:26,padding:0,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#52d869",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},thumb:{width:24,height:24},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var a=e.classes,t=Object(k.a)(e,["classes"]);return r.a.createElement(o.a,Object.assign({focusVisibleClassName:a.focusVisible,disableRipple:!0,classes:{root:a.root,switchBase:a.switchBase,thumb:a.thumb,track:a.track,checked:a.checked}},t))})),C=Object(g.a)((function(e){return{root:{width:28,height:16,padding:0,display:"flex"},switchBase:{padding:2,color:e.palette.grey[500],"&$checked":{transform:"translateX(12px)",color:e.palette.common.white,"& + $track":{opacity:1,backgroundColor:e.palette.primary.main,borderColor:e.palette.primary.main}}},thumb:{width:12,height:12,boxShadow:"none"},track:{border:"1px solid ".concat(e.palette.grey[500]),borderRadius:8,opacity:1,backgroundColor:e.palette.common.white},checked:{}}}))(o.a);function j(){var e=r.a.useState({checkedA:!0,checkedB:!0,checkedC:!0}),a=Object(n.a)(e,2),t=a[0],c=a[1],o=function(e){return function(a){c(Object(l.a)(Object(l.a)({},t),{},{[e]:a.target.checked}))}};return r.a.createElement(d.a,null,r.a.createElement(s.a,{control:r.a.createElement(v,{checked:t.checkedA,onChange:o("checkedA"),value:"checkedA"}),label:"Custom color"}),r.a.createElement(s.a,{control:r.a.createElement(w,{checked:t.checkedB,onChange:o("checkedB"),value:"checkedB"}),label:"iOS style"}),r.a.createElement(y.a,{component:"div"},r.a.createElement(E.a,{component:"label",container:!0,alignItems:"center",spacing:1},r.a.createElement(E.a,{item:!0},"Off"),r.a.createElement(E.a,{item:!0},r.a.createElement(C,{checked:t.checkedC,onChange:o("checkedC"),value:"checkedC"})),r.a.createElement(E.a,{item:!0},"On"))))}var O=function(){var e=r.a.useState("female"),a=Object(n.a)(e,2),t=a[0],c=a[1];return r.a.createElement(u.a,{component:"fieldset"},r.a.createElement(h.a,{component:"legend"},"labelPlacement"),r.a.createElement(d.a,{"aria-label":"position",name:"position",value:t,onChange:function(e){c(e.target.value)},row:!0},r.a.createElement(s.a,{value:"top",control:r.a.createElement(o.a,{color:"primary"}),label:"Top",labelPlacement:"top"}),r.a.createElement(s.a,{value:"start",control:r.a.createElement(o.a,{color:"primary"}),label:"Start",labelPlacement:"start"}),r.a.createElement(s.a,{value:"bottom",control:r.a.createElement(o.a,{color:"primary"}),label:"Bottom",labelPlacement:"bottom"}),r.a.createElement(s.a,{value:"end",control:r.a.createElement(o.a,{color:"primary"}),label:"End",labelPlacement:"end"})))},x=t(91);a.default=function(){return r.a.createElement("div",{className:"m-sm-30"},r.a.createElement("div",{className:"mb-sm-30"},r.a.createElement(x.b,{routeSegments:[{name:"Material",path:"/material"},{name:"Switch"}]})),r.a.createElement(x.A,{title:"Simple Switch"},r.a.createElement(i,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(x.A,{title:"Switch with Label"},r.a.createElement(m,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(x.A,{title:"Switch with Form Group"},r.a.createElement(p,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(x.A,{title:"Customized Switch"},r.a.createElement(j,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(x.A,{title:"Switch with Different Label Placement"},r.a.createElement(O,null)))}}}]);