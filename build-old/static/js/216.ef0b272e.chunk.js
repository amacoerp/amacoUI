(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[216],{2040:function(e,t,a){"use strict";var r=a(3),c=a(6),n=a(0),s=a(5),l=a(11),i=a(90),m=Object(i.a)(n.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var o=n.forwardRef((function(e,t){var a=e.alt,l=e.children,i=e.classes,o=e.className,u=e.component,d=void 0===u?"div":u,f=e.imgProps,p=e.sizes,g=e.src,h=e.srcSet,b=e.variant,v=void 0===b?"circular":b,E=Object(c.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),y=null,x=function(e){var t=e.src,a=e.srcSet,r=n.useState(!1),c=r[0],s=r[1];return n.useEffect((function(){if(t||a){s(!1);var e=!0,r=new Image;return r.src=t,r.srcSet=a,r.onload=function(){e&&s("loaded")},r.onerror=function(){e&&s("error")},function(){e=!1}}}),[t,a]),c}({src:g,srcSet:h}),N=g||h,j=N&&"error"!==x;return y=j?n.createElement("img",Object(r.a)({alt:a,src:g,srcSet:h,sizes:p,className:i.img},f)):null!=l?l:N&&a?a[0]:n.createElement(m,{className:i.fallback}),n.createElement(d,Object(r.a)({className:Object(s.default)(i.root,i.system,i[v],o,!j&&i.colorDefault),ref:t},E),y)}));t.a=Object(l.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(o)},3398:function(e,t,a){"use strict";a.r(t);var r=a(18),c=a(0),n=a.n(c),s=a(298),l=a(1357),i=a(2040),m=a(678),o=a(100),u=a(26),d=a.n(u);t.default=function(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),a=t[0],u=t[1],f=Object(c.useState)([]),p=Object(r.a)(f,2),g=p[0],h=p[1];return Object(c.useEffect)((function(){return d.a.get("/api/user/all").then((function(e){var t=e.data;a&&h(t)})),function(){return u(!1)}}),[a]),n.a.createElement("div",{className:"m-sm-30"},n.a.createElement("div",{className:"mb-sm-30"},n.a.createElement(o.b,{routeSegments:[{name:"Pages",path:"/pages"},{name:"User List 2"}]})),n.a.createElement(s.a,{container:!0,spacing:3},g.map((function(e,t){var a;return n.a.createElement(s.a,{key:e.id,item:!0,sm:6,xs:12},n.a.createElement(l.a,null,n.a.createElement("div",{className:"p-6 flex flex-wrap justify-between items-center m--2"},n.a.createElement("div",{className:"flex items-center m-2"},n.a.createElement(i.a,{className:"h-48 w-48",src:e.imgUrl}),n.a.createElement("div",{className:"ml-4"},n.a.createElement("h5",{className:"m-0"},e.name),n.a.createElement("p",{className:"mb-0 mt-2 text-muted font-normal capitalize"},null===(a=e.company)||void 0===a?void 0:a.toLowerCase()))),n.a.createElement("div",{className:"flex m-2"},n.a.createElement(m.a,{size:"small",className:"bg-light-primary hover-bg-primary text-primary px-5 mr-1"},"CHAT"),n.a.createElement(m.a,{size:"small",className:"bg-light-primary hover-bg-primary text-primary px-5"},"PROFILE")))))}))))}}}]);