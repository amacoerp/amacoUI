(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[144],{115:function(e,t,n){"use strict";function r(e,t){return function(){return null}}n.d(t,"a",(function(){return r}))},1396:function(e,t,n){"use strict";function r(e){return function(){return null}}n.d(t,"a",(function(){return r}))},1462:function(e,t,n){var r=n(1646).default;function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var u=i?Object.getOwnPropertyDescriptor(e,c):null;u&&(u.get||u.set)?Object.defineProperty(a,c,u):a[c]=e[c]}return a.default=e,n&&n.set(e,a),a},e.exports.__esModule=!0,e.exports.default=e.exports},1463:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(1510)},1510:function(e,t,n){"use strict";n.r(t);var r=n(15);n.d(t,"capitalize",(function(){return r.a}));var o=n(117);n.d(t,"createChainedFunction",(function(){return o.a}));var a=n(90);n.d(t,"createSvgIcon",(function(){return a.a}));var i=n(224);n.d(t,"debounce",(function(){return i.a}));var c=n(115);n.d(t,"deprecatedPropType",(function(){return c.a}));var u=n(226);n.d(t,"isMuiElement",(function(){return u.a}));var l=n(54);n.d(t,"ownerDocument",(function(){return l.a}));var s=n(236);n.d(t,"ownerWindow",(function(){return s.a}));var d=n(1396);n.d(t,"requirePropFactory",(function(){return d.a}));var f=n(116);n.d(t,"setRef",(function(){return f.a}));var v=n(1665);n.d(t,"unsupportedProp",(function(){return v.a}));var p=n(225);n.d(t,"useControlled",(function(){return p.a}));var b=n(66);n.d(t,"useEventCallback",(function(){return b.a}));var m=n(35);n.d(t,"useForkRef",(function(){return m.a}));var g=n(2016);n.d(t,"unstable_useId",(function(){return g.a}));var O=n(416);n.d(t,"useIsFocusVisible",(function(){return O.a}))},1640:function(e,t,n){"use strict";var r=n(6),o=n(34),a=n(3),i=n(0),c=n(5),u=n(11),l=n(2077),s=i.forwardRef((function(e,t){var n,o=e.classes,u=e.className,s=e.component,d=void 0===s?"li":s,f=e.disableGutters,v=void 0!==f&&f,p=e.ListItemClasses,b=e.role,m=void 0===b?"menuitem":b,g=e.selected,O=e.tabIndex,j=Object(r.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==O?O:-1),i.createElement(l.a,Object(a.a)({button:!0,role:m,tabIndex:n,component:d,selected:g,disableGutters:v,classes:Object(a.a)({dense:o.dense},p),className:Object(c.default)(o.root,u,g&&o.selected,!v&&o.gutters),ref:t},j))}));t.a=Object(u.a)((function(e){return{root:Object(a.a)({},e.typography.body1,Object(o.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(a.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(s)},1646:function(e,t){function n(t){return e.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,n(t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},1665:function(e,t,n){"use strict";function r(e,t,n,r,o){return null}n.d(t,"a",(function(){return r}))},2016:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(e){var t=r.useState(e),n=t[0],o=t[1],a=e||n;return r.useEffect((function(){null==n&&o("mui-".concat(Math.round(1e5*Math.random())))}),[n]),a}},2077:function(e,t,n){"use strict";var r=n(3),o=n(6),a=n(0),i=n(5),c=n(11),u=n(665),l=n(226),s=n(35),d=n(411),f=n(30),v="undefined"===typeof window?a.useEffect:a.useLayoutEffect,p=a.forwardRef((function(e,t){var n=e.alignItems,c=void 0===n?"center":n,p=e.autoFocus,b=void 0!==p&&p,m=e.button,g=void 0!==m&&m,O=e.children,j=e.classes,y=e.className,h=e.component,E=e.ContainerComponent,x=void 0===E?"li":E,C=e.ContainerProps,M=(C=void 0===C?{}:C).className,w=Object(o.a)(C,["className"]),I=e.dense,k=void 0!==I&&I,P=e.disabled,N=void 0!==P&&P,S=e.disableGutters,R=void 0!==S&&S,_=e.divider,F=void 0!==_&&_,A=e.focusVisibleClassName,D=e.selected,L=void 0!==D&&D,V=Object(o.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),z=a.useContext(d.a),G={dense:k||z.dense||!1,alignItems:c},H=a.useRef(null);v((function(){b&&H.current&&H.current.focus()}),[b]);var B=a.Children.toArray(O),T=B.length&&Object(l.a)(B[B.length-1],["ListItemSecondaryAction"]),W=a.useCallback((function(e){H.current=f.findDOMNode(e)}),[]),$=Object(s.a)(W,t),J=Object(r.a)({className:Object(i.default)(j.root,y,G.dense&&j.dense,!R&&j.gutters,F&&j.divider,N&&j.disabled,g&&j.button,"center"!==c&&j.alignItemsFlexStart,T&&j.secondaryAction,L&&j.selected),disabled:N},V),q=h||"li";return g&&(J.component=h||"div",J.focusVisibleClassName=Object(i.default)(j.focusVisible,A),q=u.a),T?(q=J.component||h?q:"div","li"===x&&("li"===q?q="div":"li"===J.component&&(J.component="div")),a.createElement(d.a.Provider,{value:G},a.createElement(x,Object(r.a)({className:Object(i.default)(j.container,M),ref:$},w),a.createElement(q,J,B),B.pop()))):a.createElement(d.a.Provider,{value:G},a.createElement(q,Object(r.a)({ref:$},J),B))}));t.a=Object(c.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(p)},2091:function(e,t,n){"use strict";var r=n(299),o=n(18),a=n(19),i=n(0),c=n.n(i),u=n(683),l=n(649),s=n(1640),d=n(2092),f=n.n(d),v=n(5),p=["parentMenuOpen","component","label","rightIcon","children","className","tabIndex","MenuProps","ContainerProps"],b=["ref"],m=Object(u.a)((function(e){return{root:function(t){return{backgroundColor:t.open?e.palette.action.hover:"rgba(0,0,0,0)"}}}})),g=c.a.forwardRef((function(e,t){var n=e.parentMenuOpen,u=(e.component,e.label),d=e.rightIcon,g=void 0===d?c.a.createElement(f.a,null):d,O=e.children,j=e.className,y=e.tabIndex,h=(e.MenuProps,e.ContainerProps),E=void 0===h?{}:h,x=Object(a.a)(e,p),C=E.ref,M=Object(a.a)(E,b),w=Object(i.useRef)(null);Object(i.useImperativeHandle)(t,(function(){return w.current}));var I=Object(i.useRef)(null);Object(i.useImperativeHandle)(C,(function(){return I.current}));var k,P=Object(i.useRef)(null),N=Object(i.useState)(!1),S=Object(o.a)(N,2),R=S[0],_=S[1],F=function(){var e,t,n,o,a,i=null===(t=null===(e=I.current)||void 0===e?void 0:e.ownerDocument)||void 0===t?void 0:t.activeElement,c=Object(r.a)(null!==(o=null===(n=P.current)||void 0===n?void 0:n.children)&&void 0!==o?o:[]);try{for(c.s();!(a=c.n()).done;){if(a.value===i)return!0}}catch(u){c.e(u)}finally{c.f()}return!1},A=R&&n,D=m({open:A});return e.disabled||(k=void 0!==y?y:-1),c.a.createElement("div",Object.assign({},M,{ref:I,onFocus:function(e){var t;e.target===I.current&&_(!0),(null===(t=M)||void 0===t?void 0:t.onFocus)&&M.onFocus(e)},tabIndex:k,onMouseEnter:function(e){var t;_(!0),(null===(t=M)||void 0===t?void 0:t.onMouseEnter)&&M.onMouseEnter(e)},onMouseLeave:function(e){var t;_(!1),(null===(t=M)||void 0===t?void 0:t.onMouseLeave)&&M.onMouseLeave(e)},onKeyDown:function(e){var t,n,r,o,a;if("Escape"!==e.key){F()&&e.stopPropagation();var i=null===(n=null===(t=I.current)||void 0===t?void 0:t.ownerDocument)||void 0===n?void 0:n.activeElement;if("ArrowLeft"===e.key&&F()&&(null===(r=I.current)||void 0===r||r.focus()),"ArrowRight"===e.key&&e.target===I.current&&e.target===i)null===(a=null===(o=P.current)||void 0===o?void 0:o.children[0])||void 0===a||a.focus()}}}),c.a.createElement(s.a,Object.assign({},x,{className:Object(v.default)(D.root,j),ref:w}),u,g),c.a.createElement(l.a,{style:{pointerEvents:"none"},anchorEl:w.current,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},open:A,autoFocus:!1,disableAutoFocus:!0,disableEnforceFocus:!0,onClose:function(){_(!1)}},c.a.createElement("div",{ref:P,style:{pointerEvents:"auto"}},O)))}));t.a=g},2092:function(e,t,n){"use strict";var r=n(667),o=n(1462);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),i=(0,r(n(1463)).default)(a.createElement("path",{d:"M10 17l5-5-5-5v10z"}),"ArrowRight");t.default=i},3297:function(e,t,n){"use strict";n.r(t),n.d(t,"NestedMenu",(function(){return d}));var r=n(18),o=n(0),a=n.n(o),i=n(1414),c=n(671),u=n(649),l=n(4),s=n(2091),d=function(){var e=Object(o.useState)(null),t=Object(r.a)(e,2),n=t[0],d=t[1],f=Object(o.useState)([]),v=Object(r.a)(f,2),p=v[0],b=v[1],m=Object(o.useState)([]),g=Object(r.a)(m,2),O=(g[0],g[1],Object(o.useState)("")),j=Object(r.a)(O,2),y=j[0],h=(j[1],Object(o.useState)(!1)),E=Object(r.a)(h,2),x=(E[0],E[1]);Object(o.useEffect)((function(){l.g.get("account-categories").then((function(e){var t=e.data;t.map((function(e,n){b(t)})),x(!1)}))}),[]);var C=function e(t){var n=t.data;return a.a.createElement("li",null,n.map((function(t,n){return x(!0),a.a.createElement(s.a,{label:t.category.name,parentMenuOpen:M,value:t.category.id,onClick:function(e){return M(e.target.value)}},a.a.createElement(i.a,{align:"left",onClick:function(e){return M(t.category.id)}},"add")," Add New",t.sub_categories.length>0&&a.a.createElement(e,{data:t.sub_categories}))})))},M=function(e){alert(e)};return a.a.createElement("div",{onClick:function(e){n||(e.preventDefault(),d({top:e.pageY,left:e.pageX}))}},a.a.createElement(c.a,null,"Right click to open menu"),a.a.createElement(u.a,{open:!!n,onClose:function(){return d(null)},anchorReference:"anchorPosition",anchorPosition:n},a.a.createElement(i.a,{align:"left"},"add"),"new",a.a.createElement(C,{data:p,n:y})),a.a.createElement("div",{className:"px-4 flex justify-center"},a.a.createElement("div",{className:"flex "}),a.a.createElement("div",null)))};t.default=d}}]);