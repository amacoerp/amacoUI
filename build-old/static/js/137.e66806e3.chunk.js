(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[137],{115:function(e,t,n){"use strict";function a(e,t){return function(){return null}}n.d(t,"a",(function(){return a}))},1399:function(e,t,n){"use strict";function a(e){return function(){return null}}n.d(t,"a",(function(){return a}))},1462:function(e,t,n){var a=n(1655).default;function r(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var c=i?Object.getOwnPropertyDescriptor(e,l):null;c&&(c.get||c.set)?Object.defineProperty(o,l,c):o[l]=e[l]}return o.default=e,n&&n.set(e,o),o},e.exports.__esModule=!0,e.exports.default=e.exports},1466:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.createSvgIcon}});var a=n(1516)},1516:function(e,t,n){"use strict";n.r(t);var a=n(15);n.d(t,"capitalize",(function(){return a.a}));var r=n(117);n.d(t,"createChainedFunction",(function(){return r.a}));var o=n(90);n.d(t,"createSvgIcon",(function(){return o.a}));var i=n(225);n.d(t,"debounce",(function(){return i.a}));var l=n(115);n.d(t,"deprecatedPropType",(function(){return l.a}));var c=n(227);n.d(t,"isMuiElement",(function(){return c.a}));var u=n(55);n.d(t,"ownerDocument",(function(){return u.a}));var s=n(237);n.d(t,"ownerWindow",(function(){return s.a}));var d=n(1399);n.d(t,"requirePropFactory",(function(){return d.a}));var m=n(116);n.d(t,"setRef",(function(){return m.a}));var p=n(1669);n.d(t,"unsupportedProp",(function(){return p.a}));var f=n(226);n.d(t,"useControlled",(function(){return f.a}));var b=n(66);n.d(t,"useEventCallback",(function(){return b.a}));var v=n(36);n.d(t,"useForkRef",(function(){return v.a}));var y=n(2019);n.d(t,"unstable_useId",(function(){return y.a}));var g=n(417);n.d(t,"useIsFocusVisible",(function(){return g.a}))},1638:function(e,t,n){"use strict";var a=n(6),r=n(35),o=n(3),i=n(0),l=n(5),c=n(11),u=n(2090),s=i.forwardRef((function(e,t){var n,r=e.classes,c=e.className,s=e.component,d=void 0===s?"li":s,m=e.disableGutters,p=void 0!==m&&m,f=e.ListItemClasses,b=e.role,v=void 0===b?"menuitem":b,y=e.selected,g=e.tabIndex,h=Object(a.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==g?g:-1),i.createElement(u.a,Object(o.a)({button:!0,role:v,tabIndex:n,component:d,selected:y,disableGutters:p,classes:Object(o.a)({dense:r.dense},f),className:Object(l.default)(r.root,c,y&&r.selected,!p&&r.gutters),ref:t},h))}));t.a=Object(c.a)((function(e){return{root:Object(o.a)({},e.typography.body1,Object(r.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(o.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(s)},1655:function(e,t){function n(t){return e.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,n(t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},1669:function(e,t,n){"use strict";function a(e,t,n,a,r){return null}n.d(t,"a",(function(){return a}))},1671:function(e,t,n){"use strict";var a=n(3),r=n(6),o=n(0),i=n(5),l=n(11),c=n(675),u=n(413),s=o.forwardRef((function(e,t){var n=e.children,l=e.classes,s=e.className,d=e.disableTypography,m=void 0!==d&&d,p=e.inset,f=void 0!==p&&p,b=e.primary,v=e.primaryTypographyProps,y=e.secondary,g=e.secondaryTypographyProps,h=Object(r.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),E=o.useContext(u.a).dense,O=null!=b?b:n;null==O||O.type===c.a||m||(O=o.createElement(c.a,Object(a.a)({variant:E?"body2":"body1",className:l.primary,component:"span",display:"block"},v),O));var x=y;return null==x||x.type===c.a||m||(x=o.createElement(c.a,Object(a.a)({variant:"body2",className:l.secondary,color:"textSecondary",display:"block"},g),x)),o.createElement("div",Object(a.a)({className:Object(i.default)(l.root,s,E&&l.dense,f&&l.inset,O&&x&&l.multiline),ref:t},h),O,x)}));t.a=Object(l.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(s)},2019:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0);function r(e){var t=a.useState(e),n=t[0],r=t[1],o=e||n;return a.useEffect((function(){null==n&&r("mui-".concat(Math.round(1e5*Math.random())))}),[n]),o}},2072:function(e,t,n){"use strict";var a=n(3),r=n(6),o=n(0),i=n(5),l=n(11),c=n(413),u=o.forwardRef((function(e,t){var n=e.classes,l=e.className,u=Object(r.a)(e,["classes","className"]),s=o.useContext(c.a);return o.createElement("div",Object(a.a)({className:Object(i.default)(n.root,l,"flex-start"===s.alignItems&&n.alignItemsFlexStart),ref:t},u))}));t.a=Object(l.a)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(u)},2090:function(e,t,n){"use strict";var a=n(3),r=n(6),o=n(0),i=n(5),l=n(11),c=n(669),u=n(227),s=n(36),d=n(413),m=n(30),p="undefined"===typeof window?o.useEffect:o.useLayoutEffect,f=o.forwardRef((function(e,t){var n=e.alignItems,l=void 0===n?"center":n,f=e.autoFocus,b=void 0!==f&&f,v=e.button,y=void 0!==v&&v,g=e.children,h=e.classes,E=e.className,O=e.component,x=e.ContainerComponent,j=void 0===x?"li":x,C=e.ContainerProps,k=(C=void 0===C?{}:C).className,M=Object(r.a)(C,["className"]),I=e.dense,w=void 0!==I&&I,S=e.disabled,N=void 0!==S&&S,P=e.disableGutters,T=void 0!==P&&P,L=e.divider,_=void 0!==L&&L,z=e.focusVisibleClassName,H=e.selected,B=void 0!==H&&H,D=Object(r.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),F=o.useContext(d.a),V={dense:w||F.dense||!1,alignItems:l},R=o.useRef(null);p((function(){b&&R.current&&R.current.focus()}),[b]);var W=o.Children.toArray(g),A=W.length&&Object(u.a)(W[W.length-1],["ListItemSecondaryAction"]),G=o.useCallback((function(e){R.current=m.findDOMNode(e)}),[]),$=Object(s.a)(G,t),J=Object(a.a)({className:Object(i.default)(h.root,E,V.dense&&h.dense,!T&&h.gutters,_&&h.divider,N&&h.disabled,y&&h.button,"center"!==l&&h.alignItemsFlexStart,A&&h.secondaryAction,B&&h.selected),disabled:N},D),U=O||"li";return y&&(J.component=O||"div",J.focusVisibleClassName=Object(i.default)(h.focusVisible,z),U=c.a),A?(U=J.component||O?U:"div","li"===j&&("li"===U?U="div":"li"===J.component&&(J.component="div")),o.createElement(d.a.Provider,{value:V},o.createElement(j,Object(a.a)({className:Object(i.default)(h.container,k),ref:$},M),o.createElement(U,J,W),W.pop()))):o.createElement(d.a.Provider,{value:V},o.createElement(U,Object(a.a)({ref:$},J),W))}));t.a=Object(l.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(f)},2975:function(e,t,n){"use strict";var a=n(671),r=n(1462);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),i=(0,a(n(1466)).default)(o.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.default=i},2976:function(e,t,n){"use strict";var a=n(671),r=n(1462);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),i=(0,a(n(1466)).default)(o.createElement("path",{d:"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"}),"Drafts");t.default=i},2977:function(e,t,n){"use strict";var a=n(671),r=n(1462);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),i=(0,a(n(1466)).default)(o.createElement("path",{d:"M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"}),"MoveToInbox");t.default=i},3459:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),i=n(678),l=n(653),c=n(1638);var u=function(){var e=r.a.useState(null),t=Object(o.a)(e,2),n=t[0],a=t[1];function u(){a(null)}return r.a.createElement("div",null,r.a.createElement(i.a,{variant:"outlined","aria-owns":n?"simple-menu":void 0,"aria-haspopup":"true",onClick:function(e){a(e.currentTarget)}},"Open Menu"),r.a.createElement(l.a,{id:"simple-menu",anchorEl:n,open:Boolean(n),onClose:u},r.a.createElement(c.a,{onClick:u},"Profile"),r.a.createElement(c.a,{onClick:u},"My account"),r.a.createElement(c.a,{onClick:u},"Logout")))},s=n(687),d=n(1352),m=n(2090),p=n(1671),f=Object(s.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}})),b=["Show some love to Material-UI","Show all notification content","Hide sensitive notification content","Hide all notification content"];function v(){var e=f(),t=r.a.useState(null),n=Object(o.a)(t,2),a=n[0],i=n[1],u=r.a.useState(1),s=Object(o.a)(u,2),v=s[0],y=s[1];return r.a.createElement("div",{className:e.root},r.a.createElement(d.a,{component:"nav","aria-label":"Device settings"},r.a.createElement(m.a,{button:!0,"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"When device is locked",onClick:function(e){i(e.currentTarget)}},r.a.createElement(p.a,{primary:"When device is locked",secondary:b[v]}))),r.a.createElement(l.a,{id:"lock-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:function(){i(null)}},b.map((function(e,t){return r.a.createElement(c.a,{key:e,disabled:0===t,selected:t===v,onClick:function(e){return function(e,t){y(t),i(null)}(0,t)}},e)}))))}var y=n(11),g=n(2072),h=n(2977),E=n.n(h),O=n(2976),x=n.n(O),j=n(2975),C=n.n(j),k=Object(y.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return r.a.createElement(l.a,Object.assign({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),M=Object(y.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(c.a);var I=function(){var e=r.a.useState(null),t=Object(o.a)(e,2),n=t[0],a=t[1];return r.a.createElement("div",null,r.a.createElement(i.a,{"aria-owns":n?"simple-menu":void 0,"aria-haspopup":"true",variant:"contained",color:"primary",onClick:function(e){a(e.currentTarget)}},"Open Menu"),r.a.createElement(k,{id:"simple-menu",anchorEl:n,open:Boolean(n),onClose:function(){a(null)}},r.a.createElement(M,null,r.a.createElement(g.a,null,r.a.createElement(C.a,null)),r.a.createElement(p.a,{primary:"Sent mail"})),r.a.createElement(M,null,r.a.createElement(g.a,null,r.a.createElement(x.a,null)),r.a.createElement(p.a,{primary:"Drafts"})),r.a.createElement(M,null,r.a.createElement(g.a,null,r.a.createElement(E.a,null)),r.a.createElement(p.a,{primary:"Inbox"}))))},w=n(677),S=n(1417),N=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];var P=function(){var e=r.a.useState(null),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Boolean(n);function u(){a(null)}return r.a.createElement("div",null,r.a.createElement(w.a,{"aria-label":"More","aria-owns":i?"long-menu":void 0,"aria-haspopup":"true",onClick:function(e){a(e.currentTarget)}},r.a.createElement(S.a,null,"more_vert")),r.a.createElement(l.a,{id:"long-menu",anchorEl:n,open:i,onClose:u,PaperProps:{style:{maxHeight:216,width:200}}},N.map((function(e){return r.a.createElement(c.a,{key:e,selected:"Pyxis"===e,onClick:u},e)}))))},T=n(100);t.default=function(){return r.a.createElement("div",{className:"m-sm-30"},r.a.createElement("div",{className:"mb-sm-30"},r.a.createElement(T.b,{routeSegments:[{name:"Material",path:"/material"},{name:"Menu"}]})),r.a.createElement(T.z,{title:"simple menu"},r.a.createElement(u,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(T.z,{title:"selected menu"},r.a.createElement(v,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(T.z,{title:"customized menu"},r.a.createElement(I,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(T.z,{title:"max height menu"},r.a.createElement(P,null)))}}}]);