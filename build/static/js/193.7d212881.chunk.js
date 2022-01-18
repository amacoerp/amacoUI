(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[193],{1420:function(e,t,a){"use strict";var r=a(3),n=a(6),l=a(1),i=(a(0),a(5)),s=a(11),o=a(33),c=l.forwardRef((function(e,t){var a=e.absolute,s=void 0!==a&&a,o=e.classes,c=e.className,m=e.component,d=void 0===m?"hr":m,p=e.flexItem,u=void 0!==p&&p,h=e.light,g=void 0!==h&&h,f=e.orientation,b=void 0===f?"horizontal":f,v=e.role,E=void 0===v?"hr"!==d?"separator":void 0:v,x=e.variant,y=void 0===x?"fullWidth":x,N=Object(n.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return l.createElement(d,Object(r.a)({className:Object(i.default)(o.root,c,"fullWidth"!==y&&o[y],s&&o.absolute,u&&o.flexItem,g&&o.light,"vertical"===b&&o.vertical),role:E,ref:t},N))}));t.a=Object(s.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(o.d)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(c)},1440:function(e,t,a){"use strict";var r=a(3),n=a(6),l=a(1),i=(a(0),a(5)),s=a(11),o=a(78),c=Object(o.a)(l.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var m=l.forwardRef((function(e,t){var a=e.alt,s=e.children,o=e.classes,m=e.className,d=e.component,p=void 0===d?"div":d,u=e.imgProps,h=e.sizes,g=e.src,f=e.srcSet,b=e.variant,v=void 0===b?"circle":b,E=Object(n.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),x=null,y=function(e){var t=e.src,a=e.srcSet,r=l.useState(!1),n=r[0],i=r[1];return l.useEffect((function(){if(t||a){i(!1);var e=!0,r=new Image;return r.src=t,r.srcSet=a,r.onload=function(){e&&i("loaded")},r.onerror=function(){e&&i("error")},function(){e=!1}}}),[t,a]),n}({src:g,srcSet:f}),N=g||f,w=N&&"error"!==y;return x=w?l.createElement("img",Object(r.a)({alt:a,src:g,srcSet:f,sizes:h,className:o.img},u)):null!=s?s:N&&a?a[0]:l.createElement(c,{className:o.fallback}),l.createElement(p,Object(r.a)({className:Object(i.default)(o.root,o.system,o[v],m,!w&&o.colorDefault),ref:t},E),x)}));t.a=Object(s.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(m)},1443:function(e,t,a){"use strict";var r=a(6),n=a(3),l=a(1),i=(a(0),a(5)),s=a(11),o=a(558),c=a(15),m=l.forwardRef((function(e,t){var a=e.children,s=e.classes,m=e.className,d=e.color,p=void 0===d?"default":d,u=e.component,h=void 0===u?"button":u,g=e.disabled,f=void 0!==g&&g,b=e.disableFocusRipple,v=void 0!==b&&b,E=e.focusVisibleClassName,x=e.size,y=void 0===x?"large":x,N=e.variant,w=void 0===N?"round":N,O=Object(r.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return l.createElement(o.a,Object(n.a)({className:Object(i.default)(s.root,m,"round"!==w&&s.extended,"large"!==y&&s["size".concat(Object(c.a)(y))],f&&s.disabled,{primary:s.primary,secondary:s.secondary,inherit:s.colorInherit}[p]),component:h,disabled:f,focusRipple:!v,focusVisibleClassName:Object(i.default)(s.focusVisible,E),ref:t},O),l.createElement("span",{className:s.label},a))}));t.a=Object(s.a)((function(e){return{root:Object(n.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(m)},1458:function(e,t,a){"use strict";var r=a(3),n=a(6),l=a(1),i=(a(0),a(5)),s=a(11),o=a(15),c=l.forwardRef((function(e,t){var a=e.anchorOrigin,s=void 0===a?{vertical:"top",horizontal:"right"}:a,c=e.badgeContent,m=e.children,d=e.classes,p=e.className,u=e.color,h=void 0===u?"default":u,g=e.component,f=void 0===g?"span":g,b=e.invisible,v=e.max,E=void 0===v?99:v,x=e.overlap,y=void 0===x?"rectangle":x,N=e.showZero,w=void 0!==N&&N,O=e.variant,j=void 0===O?"standard":O,C=Object(n.a)(e,["anchorOrigin","badgeContent","children","classes","className","color","component","invisible","max","overlap","showZero","variant"]),k=b;null==b&&(0===c&&!w||null==c&&"dot"!==j)&&(k=!0);var R="";return"dot"!==j&&(R=c>E?"".concat(E,"+"):c),l.createElement(f,Object(r.a)({className:Object(i.default)(d.root,p),ref:t},C),m,l.createElement("span",{className:Object(i.default)(d.badge,d["".concat(s.horizontal).concat(Object(o.a)(s.vertical),"}")],d["anchorOrigin".concat(Object(o.a)(s.vertical)).concat(Object(o.a)(s.horizontal)).concat(Object(o.a)(y))],"default"!==h&&d["color".concat(Object(o.a)(h))],k&&d.invisible,"dot"===j&&d.dot)},R))}));t.a=Object(s.a)((function(e){return{root:{position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0},badge:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.enteringScreen})},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorError:{backgroundColor:e.palette.error.main,color:e.palette.error.contrastText},dot:{borderRadius:4,height:8,minWidth:8,padding:0},anchorOriginTopRightRectangle:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightRectangle:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftRectangle:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftRectangle:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},anchorOriginTopRightCircle:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightCircle:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftCircle:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftCircle:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},invisible:{transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen})}}}),{name:"MuiBadge"})(c)},2855:function(e,t,a){"use strict";a.r(t);var r=a(20),n=a(17),l=a(1),i=a.n(l),s=a(1127),o=a(1226),c=a(570),m=a(1196),d=a(52),p=a(91),u=a(1166),h=a(5),g=a(1222),f=a(1223),b=a(1458),v=a(1443),E=a(1420),x={backgroundColor:"rgba(0, 0, 0, 0)",grid:{left:0,top:0,right:0,bottom:0,show:!1},legend:{show:!1},tooltip:{show:!1},xAxis:{showGrid:!1,boundaryGap:!1,axisLine:{show:!1},splitLine:{show:!1}},yAxis:{type:"value",axisLine:{show:!1},splitLine:{show:!1}},series:[{data:[[5.323935116038612,.8619856545169],[35.264713062959544,26.724439915172766],[51.73530129825366,6.117848837602899],[78.23529411764707,34.80069535650455]],type:"line",smooth:!0,symbolSize:0,lineStyle:{width:2,color:["rgba(255,255,255,0.87"]}}]},y=function(e){var t=e.height;return i.a.createElement(p.e,{height:t,option:x})},N=a(13),w=a(8),O=a(1734),j=a.n(O),C=function(e){var t=e.height,a=e.color;return i.a.createElement(j.a,{type:"bar",height:t,series:[{name:"Data Use",data:[40,60,80,100,80,60,40]}],options:Object(w.a)(Object(w.a)({},{chart:{toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,endingShape:"rounded",columnWidth:"8px"}},dataLabels:{enabled:!1},legend:{show:!1},grid:{borderColor:"transparent",row:{opacity:0}},colors:["rgba(var(--primary), 1)"],xaxis:{categories:["Sat","Sun","Mon","Tue","Wed","Thu","Fri"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:"rgba(var(--body), 0.87)",fontSize:"14px",fontFamily:"Roboto, Arial, sans-serif",fontWeight:400}}},yaxis:{show:!1}}),{},{color:Object(N.a)(a)})})},k=Object(u.a)((function(e){var t=e.palette;Object(n.a)(e,["palette"]);return{profileContent:{marginTop:-345,paddingTop:74,paddingRight:30,paddingLeft:4,"& .menu-button":{display:"none"},"@media only screen and (max-width: 959px)":{marginTop:-390,paddingTop:24,paddingRight:16,paddingLeft:16},"@media only screen and (max-width: 767px)":{marginTop:-410,paddingTop:16,paddingRight:16,paddingLeft:16,"& .menu-button":{display:"flex"}}},cardLeftVerticalLine:{"&:after":{content:'" "',position:"absolute",height:35,width:5,top:-30,background:t.primary.main}},cardGrayBox:{height:220,width:"calc(100% - 16px)",borderRadius:8,backgroundColor:"rgba(var(--body), 0.1)"}}})),R=[{title:"Project Created",amount:11},{title:"Project Completed",amount:15},{title:"Project Published",amount:25}],S=[{img:"/assets/images/payment-methods/master-card.png",type:"Master Card",product:"Bundled product",amount:909},{img:"/assets/images/payment-methods/paypal.png",type:"Master Card",product:"Bundled product",amount:303},{img:"/assets/images/payment-methods/visa.png",type:"Paypal",product:"Bundled product",amount:330},{img:"/assets/images/payment-methods/maestro.png",type:"Paypal",product:"Bundled product",amount:909},{img:"/assets/images/payment-methods/maestro.png",type:"Master Card",product:"Bundled product",amount:909}],z=function(e){var t=e.toggleSidenav,a=k(),r=Object(d.a)();return i.a.createElement(l.Fragment,null,i.a.createElement("div",{className:a.profileContent},i.a.createElement("div",{className:"flex justify-end menu-button"},i.a.createElement(c.a,{onClick:t},i.a.createElement(m.a,{className:"text-white"},"menu"))),i.a.createElement("div",{className:a.headerCardHolder},i.a.createElement(g.a,{container:!0,spacing:3},R.map((function(e){return i.a.createElement(g.a,{item:!0,lg:4,md:4,sm:12,xs:12,key:e.title},i.a.createElement(f.a,{className:"h-96 bg-gray bg-default flex items-center justify-between p-4"},i.a.createElement("div",null,i.a.createElement("span",{className:"text-light-white uppercase"},e.title),i.a.createElement("h4",{className:"font-normal text-white m-0 pt-2"},e.amount)),i.a.createElement("div",{className:"w-56 h-36"},i.a.createElement(y,{height:"40px"}))))})))),i.a.createElement("div",{className:"py-8"}),i.a.createElement(g.a,{container:!0,spacing:3},i.a.createElement(g.a,{item:!0,lg:8,md:8,sm:12,xs:12},i.a.createElement(f.a,{className:"pb-4"},i.a.createElement("h4",{className:"font-medium text-muted px-4 pt-4 pb-0"},"Data Use"),i.a.createElement(C,{height:"260px",color:[r.palette.warn]}),i.a.createElement("div",{className:"pt-4 flex items-center justify-around"},i.a.createElement("div",null,i.a.createElement("h1",{className:"font-normal m-0 mb-1"},"140"),i.a.createElement("span",{className:"font-normal text-muted uppercase"},"avg yearly")),i.a.createElement("div",null,i.a.createElement("h1",{className:"font-normal m-0 mb-1"},"12"),i.a.createElement("span",{className:"font-normal text-muted uppercase"},"avg monthly")),i.a.createElement("div",null,i.a.createElement("h1",{className:"font-normal m-0 mb-1"},"3"),i.a.createElement("span",{className:"font-normal text-muted uppercase"},"avg weekly"))))),i.a.createElement(g.a,{item:!0,lg:4,md:4,sm:12,xs:12},i.a.createElement(f.a,{className:"p-4 h-full"},i.a.createElement("h4",{className:"font-medium text-muted pb-6 pb-0 mb-6"},"Contacts"),i.a.createElement("div",{className:"flex items-center mb-4"},i.a.createElement(b.a,{badgeContent:"New",color:"primary"},i.a.createElement(v.a,{className:"bg-light-primary box-shadow-none overflow-hidden"},i.a.createElement("h4",{className:"text-primary m-0 font-normal"},"MR"))),i.a.createElement("div",{className:"ml-4"},i.a.createElement("h5",{className:"m-0 mb-1 font-medium"},"Watson Joyce"),i.a.createElement("p",{className:"m-0 text-muted"},"London"))),i.a.createElement("div",{className:"flex items-center mb-4"},i.a.createElement(v.a,{className:"bg-light-green box-shadow-none overflow-hidden"},i.a.createElement("h4",{className:"text-green m-0 font-normal"},"WT")),i.a.createElement("div",{className:"ml-4"},i.a.createElement("h5",{className:"m-0 mb-1 font-medium"},"Watson Joyce"),i.a.createElement("p",{className:"m-0 text-muted"},"London"))),i.a.createElement("div",{className:"flex items-center mb-4"},i.a.createElement(v.a,{className:"bg-light-error box-shadow-none overflow-hidden"},i.a.createElement("h4",{className:"text-error m-0 font-normal"},"RY")),i.a.createElement("div",{className:"ml-4"},i.a.createElement("h5",{className:"m-0 mb-1 font-medium"},"Watson Joyce"),i.a.createElement("p",{className:"m-0 text-muted"},"London"))),i.a.createElement("div",{className:"flex items-center"},i.a.createElement(v.a,{className:"bg-light-primary box-shadow-none overflow-hidden"},i.a.createElement("h4",{className:"text-error m-0 font-normal"},"MR")),i.a.createElement("div",{className:"ml-4"},i.a.createElement("h5",{className:"m-0 mb-1 font-medium"},"Watson Joyce"),i.a.createElement("p",{className:"m-0 text-muted"},"London"))))),i.a.createElement(g.a,{item:!0,lg:8,md:8,sm:12,xs:12},i.a.createElement("div",{className:"py-3"}),i.a.createElement(f.a,{className:"overflow-unset flex py-4"},i.a.createElement("div",{className:"w-100 min-w-100 text-center"},i.a.createElement(v.a,{className:"relative mt--14",size:"medium",color:"primary"},i.a.createElement(m.a,null,"trending_up")),i.a.createElement("div",{className:"py-3"}),i.a.createElement(c.a,{size:"small"},i.a.createElement(m.a,null,"favorite")),i.a.createElement("p",{className:"pb-4 m-0"},"65"),i.a.createElement(c.a,{size:"small"},i.a.createElement(m.a,null,"chat")),i.a.createElement("p",{className:"m-0"},"65")),i.a.createElement("div",{className:"flex-grow"},i.a.createElement("div",{className:"flex items-center justify-between pr-4 pb-3"},i.a.createElement("h5",{className:"m-0 font-medium capitalize"},"update profile picture"),i.a.createElement("span",{className:"text-muted"},"12/03/2019")),i.a.createElement(E.a,{className:"mb-4"}),i.a.createElement("div",{className:a.cardGrayBox},i.a.createElement("img",{className:"h-full w-full border-radius-4",src:"/assets/images/photo-1.jpg",alt:"random"})))),i.a.createElement("div",{className:"py-7"}),i.a.createElement(f.a,{className:"overflow-unset flex py-4"},i.a.createElement("div",{className:"w-100 min-w-100 text-center"},i.a.createElement(v.a,{className:Object(h.default)("relative mt--14",a.cardLeftVerticalLine),size:"medium",color:"primary"},i.a.createElement(m.a,null,"star_outline"))),i.a.createElement("div",{className:"flex-grow"},i.a.createElement("div",{className:"flex items-center justify-between pr-4 pb-3"},i.a.createElement("h5",{className:"m-0 font-medium capitalize"},"bought air ticket"),i.a.createElement("span",{className:"text-muted"},"12/03/2019")),i.a.createElement(E.a,null),i.a.createElement("p",{className:"m-0 pt-3"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"))),i.a.createElement("div",{className:"py-7"}),i.a.createElement(f.a,{className:"overflow-unset flex py-4"},i.a.createElement("div",{className:"w-100 min-w-100 text-center"},i.a.createElement(v.a,{className:Object(h.default)("relative mt--14",a.cardLeftVerticalLine),size:"medium",color:"primary"},i.a.createElement(m.a,null,"date_range"))),i.a.createElement("div",{className:"flex-grow"},i.a.createElement("div",{className:"flex items-center justify-between pr-4 pb-3"},i.a.createElement("h5",{className:"m-0 font-medium capitalize"},"timeline box title"),i.a.createElement("span",{className:"text-muted"},"12/03/2019")),i.a.createElement(E.a,null),i.a.createElement("p",{className:"m-0 pt-3"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s")))),i.a.createElement(g.a,{item:!0,lg:4,md:4,sm:12,xs:12},i.a.createElement(f.a,null,S.map((function(e,t){return i.a.createElement(l.Fragment,{key:t},i.a.createElement("div",{className:"py-4 px-6 flex flex-wrap items-center justify-between"},i.a.createElement("div",{className:"flex flex-wrap items-center"},i.a.createElement("div",{className:"flex justify-center items-center bg-gray w-64 h-52 border-radius-4"},i.a.createElement("img",{className:"w-36 overflow-hidden",src:e.img,alt:"master card"})),i.a.createElement("div",{className:"ml-4"},i.a.createElement("h5",{className:"mb-1 font-medium"},e.type),i.a.createElement("span",{className:"text-muted"},e.product)))),t!==S.length-1&&i.a.createElement(E.a,null))}))))),i.a.createElement("div",{className:"py-2"})))},L=a(1440),T=a(1167),W=a(66),B=Object(u.a)((function(e){e.palette;return{sidenav:{marginTop:-345,paddingTop:74,[Object(n.a)(e,["palette"]).breakpoints.down("sm")]:{marginTop:-410}}}})),I=[{title:"stars",icon:"star_outline"},{title:"events",icon:"email"},{title:"Photo",icon:"collections"},{title:"settings",icon:"brightness_7"},{title:"contacts",icon:"group"}],M=function(){var e=B(),t=Object(W.a)().user;return i.a.createElement("div",{className:Object(h.default)("flex-column items-center",e.sidenav)},i.a.createElement(L.a,{className:"h-84 w-84 mb-5",src:"/assets/images/face-7.jpg"}),i.a.createElement("p",{className:"text-white"},t.name),i.a.createElement("div",{className:"py-3"}),i.a.createElement("div",{className:"flex flex-wrap w-full px-12 mb-11"},i.a.createElement("div",{className:"flex-grow"},i.a.createElement("p",{className:"uppercase text-light-white mb-1"},"balance"),i.a.createElement("h4",{className:"font-medium text-white"},"$ 20,495")),i.a.createElement("div",null,i.a.createElement("p",{className:"uppercase text-light-white mb-1"},"points"),i.a.createElement("h4",{className:"font-medium text-white"},"PT 3,000")),i.a.createElement("div",null)),i.a.createElement("div",{className:"px-8 pt-2 bg-default"},i.a.createElement(g.a,{container:!0,spacing:3},i.a.createElement(g.a,{item:!0},i.a.createElement(f.a,{className:"w-104 h-104 bg-primary flex justify-center items-center"},i.a.createElement("div",{className:"text-light-white text-center"},i.a.createElement(m.a,null,"sentiment_very_satisfied"),i.a.createElement("br",null),i.a.createElement("span",{className:"pt-4"},"Dashboard")))),I.map((function(e,t){return i.a.createElement(g.a,{item:!0,key:t},i.a.createElement(f.a,{className:"w-104 h-104 flex items-center justify-center"},i.a.createElement("div",{className:"text-muted text-center"},i.a.createElement(m.a,null,e.icon),i.a.createElement("br",null),i.a.createElement("span",{className:"pt-4"},e.title))))}))),i.a.createElement("div",{className:"py-4"}),i.a.createElement("div",{className:"flex items-center justify-center text-primary"},i.a.createElement(T.a,null,i.a.createElement(m.a,null,"sentiment_very_satisfied"),i.a.createElement("h5",{className:"ml-8 text-primary font-medium mb-0"},"Upgrade to premium"))),i.a.createElement("div",{className:"py-2"})))},$=Object(u.a)((function(e){e.palette,Object(n.a)(e,["palette"]);return{headerBG:{height:345,"@media only screen and (max-width: 959px)":{height:400}}}}));t.default=function(){var e=Object(l.useState)(!0),t=Object(r.a)(e,2),a=t[0],n=t[1],u=Object(d.a)(),g=$(),f=Object(s.a)(u.breakpoints.down("sm")),b=function(){n(!a)};return Object(l.useEffect)((function(){n(!f)}),[f]),i.a.createElement("div",{className:"relative"},i.a.createElement(p.s,null,i.a.createElement(p.r,{width:"300px",open:a,toggleSidenav:b},i.a.createElement("div",{className:Object(h.default)("bg-primary text-right",g.headerBG)},i.a.createElement(o.a,{smUp:!0},i.a.createElement(c.a,{onClick:b},i.a.createElement(m.a,{className:"text-white"},"clear")))),i.a.createElement(M,null)),i.a.createElement(p.t,{open:a},i.a.createElement("div",{className:Object(h.default)("bg-primary",g.headerBG)}),i.a.createElement(z,{toggleSidenav:b}))))}}}]);