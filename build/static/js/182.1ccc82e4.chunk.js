(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[182],{1288:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(364),i=a(366),r=a(207),o=a(365);function c(e){return Object(n.a)(e)||Object(i.a)(e)||Object(r.a)(e)||Object(o.a)()}},1294:function(e,t,a){"use strict";var n=a(1),i=n.createContext({});t.a=i},1442:function(e,t,a){"use strict";var n=a(3),i=a(79),r=a(6),o=a(1),c=a(5),s=(a(0),a(368)),l=a(11),d=a(70),u=a(103),m=a(52),p=a(28),f=o.forwardRef((function(e,t){var a=e.children,l=e.classes,f=e.className,b=e.collapsedHeight,h=void 0===b?"0px":b,g=e.component,x=void 0===g?"div":g,v=e.disableStrictModeCompat,E=void 0!==v&&v,y=e.in,j=e.onEnter,O=e.onEntered,w=e.onEntering,k=e.onExit,C=e.onExited,R=e.onExiting,N=e.style,q=e.timeout,H=void 0===q?d.b.standard:q,A=e.TransitionComponent,I=void 0===A?s.a:A,B=Object(r.a)(e,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),S=Object(m.a)(),T=o.useRef(),$=o.useRef(null),L=o.useRef(),M="number"===typeof h?"".concat(h,"px"):h;o.useEffect((function(){return function(){clearTimeout(T.current)}}),[]);var D=S.unstable_strictMode&&!E,F=o.useRef(null),P=Object(p.a)(t,D?F:void 0),V=function(e){return function(t,a){if(e){var n=D?[F.current,t]:[t,a],r=Object(i.a)(n,2),o=r[0],c=r[1];void 0===c?e(o):e(o,c)}}},_=V((function(e,t){e.style.height=M,j&&j(e,t)})),z=V((function(e,t){var a=$.current?$.current.clientHeight:0,n=Object(u.a)({style:N,timeout:H},{mode:"enter"}).duration;if("auto"===H){var i=S.transitions.getAutoHeightDuration(a);e.style.transitionDuration="".concat(i,"ms"),L.current=i}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height="".concat(a,"px"),w&&w(e,t)})),W=V((function(e,t){e.style.height="auto",O&&O(e,t)})),G=V((function(e){var t=$.current?$.current.clientHeight:0;e.style.height="".concat(t,"px"),k&&k(e)})),J=V(C),K=V((function(e){var t=$.current?$.current.clientHeight:0,a=Object(u.a)({style:N,timeout:H},{mode:"exit"}).duration;if("auto"===H){var n=S.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(n,"ms"),L.current=n}else e.style.transitionDuration="string"===typeof a?a:"".concat(a,"ms");e.style.height=M,R&&R(e)}));return o.createElement(I,Object(n.a)({in:y,onEnter:_,onEntered:W,onEntering:z,onExit:G,onExited:J,onExiting:K,addEndListener:function(e,t){var a=D?e:t;"auto"===H&&(T.current=setTimeout(a,L.current||0))},nodeRef:D?F:void 0,timeout:"auto"===H?null:H},B),(function(e,t){return o.createElement(x,Object(n.a)({className:Object(c.default)(l.container,f,{entered:l.entered,exited:!y&&"0px"===M&&l.hidden}[e]),style:Object(n.a)({minHeight:M},N),ref:P},t),o.createElement("div",{className:l.wrapper,ref:$},o.createElement("div",{className:l.wrapperInner},a)))}))}));f.muiSupportAuto=!0,t.a=Object(l.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(f)},1465:function(e,t,a){"use strict";var n=a(3),i=a(1288),r=a(79),o=a(6),c=a(1),s=(a(101),a(0),a(5)),l=a(1442),d=a(206),u=a(11),m=a(1294),p=a(193),f=c.forwardRef((function(e,t){var a=e.children,u=e.classes,f=e.className,b=e.defaultExpanded,h=void 0!==b&&b,g=e.disabled,x=void 0!==g&&g,v=e.expanded,E=e.onChange,y=e.square,j=void 0!==y&&y,O=e.TransitionComponent,w=void 0===O?l.a:O,k=e.TransitionProps,C=Object(o.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),R=Object(p.a)({controlled:v,default:h,name:"Accordion",state:"expanded"}),N=Object(r.a)(R,2),q=N[0],H=N[1],A=c.useCallback((function(e){H(!q),E&&E(e,!q)}),[q,E,H]),I=c.Children.toArray(a),B=Object(i.a)(I),S=B[0],T=B.slice(1),$=c.useMemo((function(){return{expanded:q,disabled:x,toggle:A}}),[q,x,A]);return c.createElement(d.a,Object(n.a)({className:Object(s.default)(u.root,f,q&&u.expanded,x&&u.disabled,!j&&u.rounded),ref:t,square:j},C),c.createElement(m.a.Provider,{value:$},S),c.createElement(w,Object(n.a)({in:q,timeout:"auto"},k),c.createElement("div",{"aria-labelledby":S.props.id,id:S.props["aria-controls"],role:"region"},T)))}));t.a=Object(u.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiAccordion"})(f)},1466:function(e,t,a){"use strict";var n=a(3),i=a(6),r=a(1),o=(a(0),a(5)),c=a(11),s=r.forwardRef((function(e,t){var a=e.classes,c=e.className,s=Object(i.a)(e,["classes","className"]);return r.createElement("div",Object(n.a)({className:Object(o.default)(a.root,c),ref:t},s))}));t.a=Object(c.a)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiAccordionDetails"})(s)},1467:function(e,t,a){"use strict";var n=a(3),i=a(6),r=a(1),o=(a(0),a(5)),c=a(558),s=a(570),l=a(11),d=a(1294),u=r.forwardRef((function(e,t){var a=e.children,l=e.classes,u=e.className,m=e.expandIcon,p=e.IconButtonProps,f=e.onBlur,b=e.onClick,h=e.onFocusVisible,g=Object(i.a)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),x=r.useState(!1),v=x[0],E=x[1],y=r.useContext(d.a),j=y.disabled,O=void 0!==j&&j,w=y.expanded,k=y.toggle;return r.createElement(c.a,Object(n.a)({focusRipple:!1,disableRipple:!0,disabled:O,component:"div","aria-expanded":w,className:Object(o.default)(l.root,u,O&&l.disabled,w&&l.expanded,v&&l.focused),onFocusVisible:function(e){E(!0),h&&h(e)},onBlur:function(e){E(!1),f&&f(e)},onClick:function(e){k&&k(e),b&&b(e)},ref:t},g),r.createElement("div",{className:Object(o.default)(l.content,w&&l.expanded)},a),m&&r.createElement(s.a,Object(n.a)({className:Object(o.default)(l.expandIcon,w&&l.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},p),m))}));t.a=Object(l.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiAccordionSummary"})(u)},2789:function(e,t,a){"use strict";a.r(t);var n=a(20),i=a(17),r=a(1),o=a.n(r),c=a(538),s=a(1196),l=a(1167),d=a(1223),u=a(2860),m=a(2702),p=a(1222),f=a(1465),b=a(1467),h=a(1466),g=a(1166),x=a(5),v=Object(g.a)((function(e){e.palette;return{card:{marginRight:"2rem",marginLeft:"2rem",[Object(i.a)(e,["palette"]).breakpoints.down("sm")]:{marginLeft:"0.5rem",marginRight:"0.5rem"}}}})),E=[{title:"How to install?"},{title:"How can I change colors?"},{title:"How to add page?"}],y=[{title:"How would I get refund?"},{title:"How long will it take to reach product?"},{title:"What's the refund policy?"},{title:"What's the customer protection policy?"}];t.default=function(){var e=Object(r.useState)(0),t=Object(n.a)(e,2),a=t[0],i=t[1],g=Object(r.useState)(-1),j=Object(n.a)(g,2),O=j[0],w=j[1],k=v(),C=function(e){w(e===O?-1:e)};return o.a.createElement("div",null,o.a.createElement("div",{className:"flex-column justify-center items-center bg-primary pt-17 pb-25 px-4"},o.a.createElement(c.a,{className:"max-w-600",variant:"outlined",placeholder:"Search knowledge base",fullWidth:!0,InputProps:{startAdornment:o.a.createElement(s.a,{fontSize:"small",className:"mr-2"},"search"),endAdornment:o.a.createElement(l.a,{className:"bg-primary text-white px-7"},"Search"),style:{background:"white"}}})),o.a.createElement(d.a,{className:Object(x.default)("px-4 py-2 mt--12",k.card)},o.a.createElement(u.a,{value:a,onChange:function(e,t){i(t)},indicatorColor:"primary",textColor:"primary"},o.a.createElement(m.a,{className:"capitalize",value:0,label:"Getting Started"}),o.a.createElement(m.a,{className:"capitalize",value:1,label:"Pricing"})),0===a&&o.a.createElement(p.a,{container:!0,spacing:3},o.a.createElement(p.a,{item:!0,md:6,sm:12},E.map((function(e,t){return o.a.createElement(f.a,{key:t,elevation:0,expanded:O===t,onClick:function(){return C(t)}},o.a.createElement(b.a,{expandIcon:o.a.createElement(s.a,null,"expand_more")},e.title),o.a.createElement(h.a,null,'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven"t heard of them accusamus labore sustainable VHS.'))}))),o.a.createElement(p.a,{item:!0,md:6,sm:12},E.map((function(e,t){return o.a.createElement(f.a,{key:t,elevation:0,expanded:O===t+4,onClick:function(){return C(t+4)}},o.a.createElement(b.a,{expandIcon:o.a.createElement(s.a,null,"expand_more")},e.title),o.a.createElement(h.a,null,'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven"t heard of them accusamus labore sustainable VHS.'))})))),1===a&&o.a.createElement(p.a,{container:!0,spacing:3},o.a.createElement(p.a,{item:!0,md:6,sm:12},y.map((function(e,t){return o.a.createElement(f.a,{key:t,elevation:0,expanded:O===t,onClick:function(){return C(t)}},o.a.createElement(b.a,{expandIcon:o.a.createElement(s.a,null,"expand_more")},e.title),o.a.createElement(h.a,null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla"))}))),o.a.createElement(p.a,{item:!0,md:6,sm:12},y.map((function(e,t){return o.a.createElement(f.a,{key:t,elevation:0,expanded:O===t+4,onClick:function(){return C(t+4)}},o.a.createElement(b.a,{expandIcon:o.a.createElement(s.a,null,"expand_more")},e.title),o.a.createElement(h.a,null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla"))}))))))}}}]);