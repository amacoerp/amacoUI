(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[216],{2153:function(e,t){},2855:function(e,t,a){"use strict";a.r(t);var n=a(17),l=a(1),o=a.n(l),r=a(1197),i=a(1643),c=a.n(i),s=a(2156),d=a(8),m=a(20),u=a(1127),f=a(570),p=a(1196),b=a(1167),g=a(1226),h=a(1441),v=a(1383),E=a(91),x=(a(1458),a(1314),a(1223),a(51)),w=(a(118),a(1166)),j=a(5),O=a(81),N=(a(38),a(59),a(22),Object(l.createContext)({notifications:[],deleteNotification:function(){},clearNotifications:function(){},getNotifications:function(){},createNotification:function(){}}),Object(w.a)((function(e){e.palette,Object(n.a)(e,["palette"]);return{notification:{width:"var(--sidenav-width)","& .notification__topbar":{height:"var(--topbar-height)"}},notificationCard:{"&:hover":{"& .delete-button":{cursor:"pointer",display:"unset",right:0,marginTop:6,top:0,zIndex:2},"& .card__topbar__time":{display:"none"}},"& .delete-button":{display:"none",position:"absolute",right:0,marginTop:9},"& .card__topbar__button":{borderRadius:15,opacity:.9}}}})),a(2058),a(52)),S=a(66),y=a(80),k=a(2153),C=a.n(k),I=a(4),_=Object(w.a)((function(e){var t=e.palette,a=Object(n.a)(e,["palette"]);return{topbar:{top:0,zIndex:96,transition:"all 0.3s ease",background:"linear-gradient(180deg, rgba(255, 255, 255, 0.95) 44%, rgba(247, 247, 247, 0.4) 50%, rgba(255, 255, 255, 0))","& .topbar-hold":{backgroundColor:t.primary.main,height:80,paddingLeft:18,paddingRight:20,[a.breakpoints.down("sm")]:{paddingLeft:16,paddingRight:16},[a.breakpoints.down("xs")]:{paddingLeft:14,paddingRight:16}},"& .fixed":{boxShadow:a.shadows[8],height:64}},userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}})),R=o.a.memo((function(){var e,t,a,n=Object(N.a)(),r=_(),i=Object(O.a)(),c=i.settings,s=i.updateSettings,w=Object(S.a)().user,k=Object(u.a)(n.breakpoints.down("md")),R=null===c||void 0===c||null===(e=c.layout1Settings)||void 0===e||null===(t=e.topbar)||void 0===t?void 0:t.fixed,L=(localStorage.getItem("user"),Object(l.useState)(!1)),z=Object(m.a)(L,2),W=z[0],A=z[1],D=Object(l.useState)(!1),J=Object(m.a)(D,2),M=J[0],P=(J[1],function(){A(!1)}),T=Object(l.useState)([]),q=Object(m.a)(T,2),B=q[0],F=q[1];return Object(l.useEffect)((function(){var e,t=null===w||void 0===w||null===(e=w.divs)||void 0===e?void 0:e.map((function(e){return e.id}));F(t)}),[]),o.a.createElement("div",{className:r.topbar},o.a.createElement("div",{className:Object(j.default)({"topbar-hold":!0,fixed:R})},o.a.createElement("div",{className:"flex justify-between items-center"},o.a.createElement("div",{className:"flex"},o.a.createElement(f.a,{onClick:function(){var e,t,a=c.layout1Settings;e=k?"close"===a.leftSidebar.mode?"mobile":"close":"full"===a.leftSidebar.mode?"close":"full",t={mode:e},s({layout1Settings:{leftSidebar:Object(d.a)({},t)}})},className:"hide-on-pc"},o.a.createElement(p.a,null,"menu")),o.a.createElement("div",{className:"hide-on-mobile"},null===w||void 0===w||null===(a=w.division)||void 0===a?void 0:a.map((function(e){return o.a.createElement(o.a.Fragment,null,(null===B||void 0===B?void 0:B.includes(e.id))&&o.a.createElement(b.a,{style:{width:150,height:64,position:"relative",left:-17},variant:e.id==localStorage.getItem("division")&&"contained",backgroundColor:"#c7c7c7",onClick:function(){var t;t=e.id,localStorage.setItem("division",t),window.location.reload()}},o.a.createElement("div",{style:{fontWeight:"bold"}},e.name)))})))),o.a.createElement("div",{className:"flex items-center"},o.a.createElement(E.q,null),o.a.createElement(E.o,{menuButton:o.a.createElement("div",{className:r.userMenu},o.a.createElement(g.a,{xsDown:!0},o.a.createElement("span",null,o.a.createElement("strong",null,null===w||void 0===w?void 0:w.name))),o.a.createElement(h.a,{className:"cursor-pointer"}))},o.a.createElement(v.a,null,o.a.createElement(x.a,{className:r.menuItem,to:I.x+"/profile"},o.a.createElement(p.a,null," person "),o.a.createElement("span",{className:"pl-4"}," Profile "))),o.a.createElement(v.a,{className:r.menuItem,onClick:function(e){return y.a.push(I.x+"/changepass")}},o.a.createElement(p.a,null," settings "),o.a.createElement("span",{className:"pl-4"},"Change Password"),W&&o.a.createElement(C.a,{handleClose:P,open:W}),M&&o.a.createElement(E.d,{open:M,onConfirmDialogClose:P,text:"Are you sure to delete?"})),o.a.createElement(v.a,{onClick:function(){localStorage.clear(),window.location.href="../dashboard/alternative"},className:r.menuItem},o.a.createElement(p.a,null," power_settings_new "),o.a.createElement("span",{className:"pl-4"}," Logout ")))))))})),L=a(2158),z=a(2154),W=a(2157),A=a(152),D=a(2155),J=Object(w.a)((function(e){e.palette,Object(n.a)(e,["palette"]);return{contentWrap:function(e){return{verticalAlign:"top",marginLeft:e.width,transition:"all 0.3s ease",marginRight:e.secondarySidebar.open?50:0}},topbar:{top:0,zIndex:96,background:"linear-gradient(180deg, rgba(255, 255, 255, 0.95) 44%, rgba(247, 247, 247, 0.4) 50%, rgba(255, 255, 255, 0))",transition:"all 0.3s ease"}}}));t.default=o.a.memo((function(){var e=Object(O.a)().settings,t=e.layout1Settings,a=e.secondarySidebar,n=t.leftSidebar,i=n.mode,d=n.show,m=Object(l.useContext)(A.a).routes,u=function(){switch(i){case"full":return"var(--sidenav-width)";case"compact":return"var(--sidenav-compact-width)";default:return"0px"}}(),f=J({width:u,secondarySidebar:a}),p=Object(N.a)(),b=e.themes[t.topbar.theme],g="theme-".concat(p.palette.type," flex");return o.a.createElement("div",{className:Object(j.default)("bg-default",g)},d&&"close"!==i&&o.a.createElement(D.a,null,o.a.createElement(L.a,null)),o.a.createElement("div",{className:Object(j.default)("flex-grow flex-column relative overflow-hidden h-full-screen",f.contentWrap)},t.topbar.show&&t.topbar.fixed&&o.a.createElement(r.a,{theme:b},o.a.createElement(R,{fixed:!0,className:"elevation-z8"})),e.perfectScrollbar&&o.a.createElement(c.a,{className:"flex-grow flex-column relative h-full"},t.topbar.show&&!t.topbar.fixed&&o.a.createElement(r.a,{theme:b},o.a.createElement(R,null)),o.a.createElement("div",{className:"relative flex-grow"},o.a.createElement(E.u,null,Object(s.a)(m))),e.footer.show&&!e.footer.fixed&&o.a.createElement(z.a,null)),!e.perfectScrollbar&&o.a.createElement("div",{className:"flex-grow flex-column relative h-full scroll-y"},t.topbar.show&&!t.topbar.fixed&&o.a.createElement(r.a,{theme:b}),o.a.createElement("div",{className:"relative flex-grow"},o.a.createElement(E.u,null,Object(s.a)(m))),e.footer.show&&!e.footer.fixed&&o.a.createElement(z.a,null)),e.footer.show&&e.footer.fixed&&o.a.createElement(z.a,null)),e.secondarySidebar.show&&o.a.createElement(W.a,null))}))}}]);