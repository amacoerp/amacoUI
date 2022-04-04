(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[172],{1661:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(420),o=n(422),r=n(237),i=n(421);function s(e){return Object(a.a)(e)||Object(o.a)(e)||Object(r.a)(e)||Object(i.a)()}},1676:function(e,t,n){"use strict";var a=n(0),o=a.createContext({});t.a=o},2040:function(e,t,n){"use strict";var a=n(3),o=n(89),r=n(6),i=n(0),s=n(5),c=n(425),d=n(11),l=n(81),u=n(114),m=n(62),p=n(35),f=i.forwardRef((function(e,t){var n=e.children,d=e.classes,f=e.className,b=e.collapsedHeight,h=e.collapsedSize,g=void 0===h?"0px":h,x=e.component,y=void 0===x?"div":x,v=e.disableStrictModeCompat,E=void 0!==v&&v,j=e.in,O=e.onEnter,w=e.onEntered,N=e.onEntering,R=e.onExit,C=e.onExited,k=e.onExiting,q=e.style,H=e.timeout,S=void 0===H?l.b.standard:H,T=e.TransitionComponent,I=void 0===T?c.a:T,M=Object(r.a)(e,["children","classes","className","collapsedHeight","collapsedSize","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),A=Object(m.a)(),B=i.useRef(),$=i.useRef(null),L=i.useRef(),P="number"===typeof(b||g)?"".concat(b||g,"px"):b||g;i.useEffect((function(){return function(){clearTimeout(B.current)}}),[]);var D=A.unstable_strictMode&&!E,V=i.useRef(null),z=Object(p.a)(t,D?V:void 0),F=function(e){return function(t,n){if(e){var a=D?[V.current,t]:[t,n],r=Object(o.a)(a,2),i=r[0],s=r[1];void 0===s?e(i):e(i,s)}}},W=F((function(e,t){e.style.height=P,O&&O(e,t)})),_=F((function(e,t){var n=$.current?$.current.clientHeight:0,a=Object(u.a)({style:q,timeout:S},{mode:"enter"}).duration;if("auto"===S){var o=A.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(o,"ms"),L.current=o}else e.style.transitionDuration="string"===typeof a?a:"".concat(a,"ms");e.style.height="".concat(n,"px"),N&&N(e,t)})),G=F((function(e,t){e.style.height="auto",w&&w(e,t)})),J=F((function(e){var t=$.current?$.current.clientHeight:0;e.style.height="".concat(t,"px"),R&&R(e)})),Q=F(C),U=F((function(e){var t=$.current?$.current.clientHeight:0,n=Object(u.a)({style:q,timeout:S},{mode:"exit"}).duration;if("auto"===S){var a=A.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(a,"ms"),L.current=a}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height=P,k&&k(e)}));return i.createElement(I,Object(a.a)({in:j,onEnter:W,onEntered:G,onEntering:_,onExit:J,onExited:Q,onExiting:U,addEndListener:function(e,t){var n=D?e:t;"auto"===S&&(B.current=setTimeout(n,L.current||0))},nodeRef:D?V:void 0,timeout:"auto"===S?null:S},M),(function(e,t){return i.createElement(y,Object(a.a)({className:Object(s.default)(d.root,d.container,f,{entered:d.entered,exited:!j&&"0px"===P&&d.hidden}[e]),style:Object(a.a)({minHeight:P},q),ref:z},t),i.createElement("div",{className:d.wrapper,ref:$},i.createElement("div",{className:d.wrapperInner},n)))}))}));f.muiSupportAuto=!0,t.a=Object(d.a)((function(e){return{root:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(f)},2064:function(e,t,n){"use strict";var a=n(3),o=n(1661),r=n(89),i=n(6),s=n(0),c=(n(148),n(5)),d=n(2040),l=n(227),u=n(11),m=n(1676),p=n(225),f=s.forwardRef((function(e,t){var n=e.children,u=e.classes,f=e.className,b=e.defaultExpanded,h=void 0!==b&&b,g=e.disabled,x=void 0!==g&&g,y=e.expanded,v=e.onChange,E=e.square,j=void 0!==E&&E,O=e.TransitionComponent,w=void 0===O?d.a:O,N=e.TransitionProps,R=Object(i.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),C=Object(p.a)({controlled:y,default:h,name:"Accordion",state:"expanded"}),k=Object(r.a)(C,2),q=k[0],H=k[1],S=s.useCallback((function(e){H(!q),v&&v(e,!q)}),[q,v,H]),T=s.Children.toArray(n),I=Object(o.a)(T),M=I[0],A=I.slice(1),B=s.useMemo((function(){return{expanded:q,disabled:x,toggle:S}}),[q,x,S]);return s.createElement(l.a,Object(a.a)({className:Object(c.default)(u.root,f,q&&u.expanded,x&&u.disabled,!j&&u.rounded),ref:t,square:j},R),s.createElement(m.a.Provider,{value:B},M),s.createElement(w,Object(a.a)({in:q,timeout:"auto"},N),s.createElement("div",{"aria-labelledby":M.props.id,id:M.props["aria-controls"],role:"region"},A)))}));t.a=Object(u.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiAccordion"})(f)},2065:function(e,t,n){"use strict";var a=n(3),o=n(6),r=n(0),i=n(5),s=n(11),c=r.forwardRef((function(e,t){var n=e.classes,s=e.className,c=Object(o.a)(e,["classes","className"]);return r.createElement("div",Object(a.a)({className:Object(i.default)(n.root,s),ref:t},c))}));t.a=Object(s.a)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiAccordionDetails"})(c)},2066:function(e,t,n){"use strict";var a=n(3),o=n(6),r=n(0),i=n(5),s=n(665),c=n(673),d=n(11),l=n(1676),u=r.forwardRef((function(e,t){var n=e.children,d=e.classes,u=e.className,m=e.expandIcon,p=e.focusVisibleClassName,f=e.IconButtonProps,b=void 0===f?{}:f,h=e.onClick,g=Object(o.a)(e,["children","classes","className","expandIcon","focusVisibleClassName","IconButtonProps","onClick"]),x=r.useContext(l.a),y=x.disabled,v=void 0!==y&&y,E=x.expanded,j=x.toggle;return r.createElement(s.a,Object(a.a)({focusRipple:!1,disableRipple:!0,disabled:v,component:"div","aria-expanded":E,className:Object(i.default)(d.root,u,v&&d.disabled,E&&d.expanded),focusVisibleClassName:Object(i.default)(d.focusVisible,d.focused,p),onClick:function(e){j&&j(e),h&&h(e)},ref:t},g),r.createElement("div",{className:Object(i.default)(d.content,E&&d.expanded)},n),m&&r.createElement(c.a,Object(a.a)({className:Object(i.default)(d.expandIcon,E&&d.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},b),m))}));t.a=Object(d.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused, &$focusVisible":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},focusVisible:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiAccordionSummary"})(u)},3351:function(e,t,n){"use strict";n.r(t);var a=n(16),o=n(18),r=n(19),i=n(0),s=n.n(i),c=n(100),d=n(594),l=n(1414),u=n(674),m=n(1354),p=n(2064),f=n(2066),b=n(2065),h=n(683),g=n(5),x=["palette"],y=Object(h.a)((function(e){e.palette,Object(r.a)(e,x);return{coloredBorder:{border:"1px solid rgba(var(--primary), 1)"}}})),v=[{icon:"home",title:"Getting Started",questionList:[{question:"How to install?",answer:"Open command line in root directory of your project and type npm install"},{question:"How to debug?",answer:"Delete node_modules from your project folder. Open command line in root directory of your project and type npm install"}]},{icon:"layers",title:"Plans & Pricing",questionList:[{question:"What's the price?",answer:"$2356"},{question:"How long will I get suppot?",answer:"Life time support"}]},{icon:"contact_support",title:"Sales Questions",questionList:[{question:"When are you availabe?",answer:"Monday to Friday from 10:00am to 6pm EST"},{question:"When are you availabe?",answer:"Monday to Friday from 10:00am to 6pm EST"}]},{icon:"360",title:"Usage Guide",questionList:[{question:"How to install in Mac?",answer:"Open command line in your project's root directory and type yarn and hit enter"},{question:"How to install in Mac?",answer:"Open command line in your project's root directory and type yarn and hit enter"}]}];t.default=function(){var e,t=Object(i.useState)(0),n=Object(o.a)(t,2),r=n[0],h=n[1],x=Object(i.useState)(-1),E=Object(o.a)(x,2),j=E[0],O=E[1],w=y();return s.a.createElement("div",{className:"m-sm-30"},s.a.createElement("div",{className:"mb-sm-30"},s.a.createElement(c.b,{routeSegments:[{name:"Pages",path:"/faq"},{name:"FAQ 1"}]})),s.a.createElement("div",{className:"flex-column justify-center items-center  py-16"},s.a.createElement("h1",{className:"mt-0 mb-8 text-40 text-center font-medium"},"Hi, How can we help you?"),s.a.createElement(d.a,{className:"max-w-400",variant:"outlined",placeholder:"Search knowledge base",size:"small",fullWidth:!0,InputProps:{startAdornment:s.a.createElement(l.a,{fontSize:"small",className:"mr-2"},"search"),endAdornment:s.a.createElement(u.a,{className:"bg-primary text-white px-7 rounded"},"Search"),style:{borderRadius:300,paddingRight:0}}})),s.a.createElement("p",{className:"text-center text-muted text-16 mb-16"},"Or Browse by category"),s.a.createElement("div",{className:"mb-8"},s.a.createElement("div",{className:"flex flex-wrap justify-center items-center m--2"},v.map((function(e,t){return s.a.createElement(m.a,{key:t,elevation:6,className:Object(g.default)(Object(a.a)({"flex-column justify-center items-center py-6 px-8 m-2 cursor-pointer":!0},w.coloredBorder,t===r)),onClick:function(){return h(t)}},s.a.createElement(l.a,{className:Object(g.default)({"text-40 mb-2":!0,"text-primary":t===r})},e.icon),s.a.createElement("h5",{className:"m-0"},e.title))})))),s.a.createElement(i.Fragment,null,null===(e=v[r].questionList)||void 0===e?void 0:e.map((function(e,t){return s.a.createElement(p.a,{key:t,elevation:0,expanded:j===t,onClick:function(){return function(e){O(e===j?-1:e)}(t)}},s.a.createElement(f.a,{expandIcon:s.a.createElement(l.a,null,"expand_more")},e.question),s.a.createElement(b.a,null,e.answer))}))))}}}]);