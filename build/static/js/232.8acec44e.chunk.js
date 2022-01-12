(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[232],{2830:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(91),s=t(20),i=t(1166),l=t(1167),o=t(1184),m=t(570),u=t(1391),d=t.n(u),g=Object(i.a)((function(e){return{close:{padding:e.spacing(.5)}}}));function E(){var e=g(),a=c.a.useState(!1),t=Object(s.a)(a,2),n=t[0],r=t[1];function i(e,a){"clickaway"!==a&&r(!1)}return c.a.createElement("div",null,c.a.createElement(l.a,{onClick:function(){r(!0)}},"Open simple snackbar"),c.a.createElement(o.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:n,autoHideDuration:6e3,onClose:i,ContentProps:{"aria-describedby":"message-id"},message:c.a.createElement("span",{id:"message-id"},"Note archived"),action:[c.a.createElement(l.a,{key:"undo",color:"secondary",size:"small",onClick:i},"UNDO"),c.a.createElement(m.a,{key:"close","aria-label":"Close",color:"inherit",className:e.close,onClick:i},c.a.createElement(d.a,null))]}))}var p=t(17),h=t(5),k=t(2406),v=t.n(k),b=t(2408),f=t.n(b),C=t(2409),y=t.n(C),O=t(205),j=t(1313),N=t(591),w=t(2407),S=t.n(w),I={success:v.a,warning:S.a,error:f.a,info:y.a},T=Object(i.a)((function(e){return{success:{backgroundColor:O.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main},warning:{backgroundColor:j.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}));function z(e){var a=T(),t=e.className,n=e.message,r=e.onClose,s=e.variant,i=Object(p.a)(e,["className","message","onClose","variant"]),l=I[s];return c.a.createElement(N.a,Object.assign({className:Object(h.default)(a[s],t),"aria-describedby":"client-snackbar",message:c.a.createElement("span",{id:"client-snackbar",className:a.message},c.a.createElement(l,{className:Object(h.default)(a.icon,a.iconVariant)}),n),action:[c.a.createElement(m.a,{key:"close","aria-label":"Close",color:"inherit",onClick:r},c.a.createElement(d.a,{className:a.icon}))]},i))}var A=Object(i.a)((function(e){return{margin:{margin:e.spacing(1)}}}));function x(){var e=A(),a=c.a.useState(!1),t=Object(s.a)(a,2),n=t[0],r=t[1];function i(e,a){"clickaway"!==a&&r(!1)}return c.a.createElement("div",null,c.a.createElement(l.a,{variant:"outlined",className:e.margin,onClick:function(){r(!0)}},"Open success snackbar"),c.a.createElement(o.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:n,autoHideDuration:6e3,onClose:i},c.a.createElement(z,{onClose:i,variant:"success",message:"This is a success message!"})),c.a.createElement(z,{variant:"error",className:e.margin,message:"This is an error message!"}),c.a.createElement(z,{variant:"warning",className:e.margin,message:"This is a warning message!"}),c.a.createElement(z,{variant:"info",className:e.margin,message:"This is an information message!"}),c.a.createElement(z,{variant:"success",className:e.margin,message:"This is a success message!"}))}var D=t(8);function P(){var e=c.a.useState({open:!1,vertical:"top",horizontal:"center"}),a=Object(s.a)(e,2),t=a[0],n=a[1],r=t.vertical,i=t.horizontal,m=t.open,u=function(e){return function(){n(Object(D.a)({open:!0},e))}};return c.a.createElement("div",null,c.a.createElement(l.a,{onClick:u({vertical:"top",horizontal:"center"})},"Top-Center"),c.a.createElement(l.a,{onClick:u({vertical:"top",horizontal:"right"})},"Top-Right"),c.a.createElement(l.a,{onClick:u({vertical:"bottom",horizontal:"right"})},"Bottom-Right"),c.a.createElement(l.a,{onClick:u({vertical:"bottom",horizontal:"center"})},"Bottom-Center"),c.a.createElement(l.a,{onClick:u({vertical:"bottom",horizontal:"left"})},"Bottom-Left"),c.a.createElement(l.a,{onClick:u({vertical:"top",horizontal:"left"})},"Top-Left"),c.a.createElement(o.a,{anchorOrigin:{vertical:r,horizontal:i},key:"".concat(r,",").concat(i),open:m,onClose:function(){n(Object(D.a)(Object(D.a)({},t),{},{open:!1}))},ContentProps:{"aria-describedby":"message-id"},message:c.a.createElement("span",{id:"message-id"},"I love snacks")}))}var q=c.a.createElement(l.a,{color:"secondary",size:"small"},"lorem ipsum dolorem"),B=Object(i.a)((function(e){return{root:{maxWidth:600},snackbar:{margin:e.spacing(1)}}}));function R(){var e=B();return c.a.createElement("div",{className:e.root},c.a.createElement(N.a,{className:e.snackbar,message:"I love snacks.",action:q}),c.a.createElement(N.a,{className:e.snackbar,message:"I love candy. I love cookies. I love cupcakes.           I love cheesecake. I love chocolate."}),c.a.createElement(N.a,{className:e.snackbar,message:"I love candy. I love cookies. I love cupcakes.",action:q}),c.a.createElement(N.a,{className:e.snackbar,message:"I love candy. I love cookies. I love cupcakes.           I love cheesecake. I love chocolate.",action:q}))}var H=t(1697),L=t(1698),M=t(1710),Q=t(1709),U=t(11),F=function(e){Object(M.a)(t,e);var a=Object(Q.a)(t);function t(){var e;Object(H.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).queue=[],e.state={open:!1},e.handleClick=function(a){return function(){e.queue.push({message:a,key:(new Date).getTime()}),e.state.open?e.setState({open:!1}):e.processQueue()}},e.processQueue=function(){e.queue.length>0&&e.setState({messageInfo:e.queue.shift(),open:!0})},e.handleClose=function(a,t){"clickaway"!==t&&e.setState({open:!1})},e.handleExited=function(){e.processQueue()},e}return Object(L.a)(t,[{key:"render",value:function(){var e=this.props.classes,a=this.state.messageInfo,t=void 0===a?{}:a;return c.a.createElement("div",null,c.a.createElement(l.a,{onClick:this.handleClick("Message A")},"Show message A"),c.a.createElement(l.a,{onClick:this.handleClick("Message B")},"Show message B"),c.a.createElement(o.a,{key:t.key,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:6e3,onClose:this.handleClose,onExited:this.handleExited,ContentProps:{"aria-describedby":"message-id"},message:c.a.createElement("span",{id:"message-id"},t.message),action:[c.a.createElement(l.a,{key:"undo",color:"secondary",size:"small",onClick:this.handleClose},"UNDO"),c.a.createElement(m.a,{key:"close","aria-label":"Close",color:"inherit",className:e.close,onClick:this.handleClose},c.a.createElement(d.a,null))]}))}}]),t}(c.a.Component),J=Object(U.a)((function(e){return{close:{padding:e.spacing(.5)}}}))(F),V=t(1457);function G(e){return c.a.createElement(V.a,Object.assign({},e,{direction:"left"}))}function W(e){return c.a.createElement(V.a,Object.assign({},e,{direction:"up"}))}function K(e){return c.a.createElement(V.a,Object.assign({},e,{direction:"right"}))}function X(e){return c.a.createElement(V.a,Object.assign({},e,{direction:"down"}))}var Y=function(e){Object(M.a)(t,e);var a=Object(Q.a)(t);function t(){var e;Object(H.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={open:!1},e.handleClick=function(a){return function(){e.setState({open:!0,Transition:a})}},e.handleClose=function(){e.setState({open:!1})},e}return Object(L.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(l.a,{onClick:this.handleClick(G)},"Right"),c.a.createElement(l.a,{onClick:this.handleClick(W)},"Up"),c.a.createElement(l.a,{onClick:this.handleClick(K)},"Left"),c.a.createElement(l.a,{onClick:this.handleClick(X)},"Down"),c.a.createElement(o.a,{open:this.state.open,onClose:this.handleClose,TransitionComponent:this.state.Transition,ContentProps:{"aria-describedby":"message-id"},message:c.a.createElement("span",{id:"message-id"},"I love snacks")}))}}]),t}(c.a.Component),Z=t(2410);function $(){var e,a=Object(Z.useSnackbar)().enqueueSnackbar;return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{onClick:function(){a("I love snacks.")}},"Show snackbar"),c.a.createElement(l.a,{onClick:(e="warning",function(){a("This is a warning message!",{variant:e})})},"Show warning snackbar"))}function _(){return c.a.createElement(Z.SnackbarProvider,{maxSnack:3},c.a.createElement($,null))}var ee=t(554),ae=t(361);function te(e){return c.a.createElement(V.a,Object.assign({},e,{direction:"up"}))}function ne(e){return c.a.createElement(ae.a,e)}function ce(){var e=c.a.useState({open:!1,Transition:ee.a}),a=Object(s.a)(e,2),t=a[0],n=a[1],r=function(e){return function(){n({open:!0,Transition:e})}};return c.a.createElement("div",null,c.a.createElement(l.a,{onClick:r(ne)},"Grow Transition"),c.a.createElement(l.a,{onClick:r(ee.a)},"Fade Transition"),c.a.createElement(l.a,{onClick:r(te)},"Slide Transition"),c.a.createElement(o.a,{open:t.open,onClose:function(){n(Object(D.a)(Object(D.a)({},t),{},{open:!1}))},TransitionComponent:t.Transition,ContentProps:{"aria-describedby":"message-id"},message:c.a.createElement("span",{id:"message-id"},"I love snacks")}))}a.default=function(){return c.a.createElement("div",{className:"m-sm-30"},c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(r.b,{routeSegments:[{name:"Material",path:"/material"},{name:"Snackbar"}]})),c.a.createElement(r.A,{title:"simple snackbar"},c.a.createElement(E,null)),c.a.createElement("div",{className:"py-3"}),c.a.createElement(r.A,{title:"customized snackbar"},c.a.createElement(x,null)),c.a.createElement("div",{className:"py-3"}),c.a.createElement(r.A,{title:"positioned snackbar"},c.a.createElement(P,null)),c.a.createElement("div",{className:"py-3"}),c.a.createElement(r.A,{title:"message length"},c.a.createElement(R,null)),c.a.createElement("div",{className:"py-3"}),c.a.createElement(r.A,{title:"transition"},c.a.createElement(ce,null)),c.a.createElement("div",{className:"py-3"}),c.a.createElement(r.A,{title:"consecutive snackbar"},c.a.createElement(J,null)),c.a.createElement("div",{className:"py-3"}),c.a.createElement(r.A,{title:"Control Slide direction"},c.a.createElement(Y,null)),c.a.createElement("div",{className:"py-3"}),c.a.createElement(r.A,{title:"complementary project"},c.a.createElement(_,null)))}}}]);