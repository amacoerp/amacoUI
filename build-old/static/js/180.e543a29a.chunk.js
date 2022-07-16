(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[180],{2018:function(e,a,t){"use strict";var n=t(3),l=t(6),r=t(0),c=t(5),i=t(11),s=t(41),m=r.forwardRef((function(e,a){var t=e.absolute,i=void 0!==t&&t,s=e.classes,m=e.className,o=e.component,u=void 0===o?"hr":o,d=e.flexItem,f=void 0!==d&&d,p=e.light,v=void 0!==p&&p,b=e.orientation,E=void 0===b?"horizontal":b,h=e.role,g=void 0===h?"hr"!==u?"separator":void 0:h,N=e.variant,x=void 0===N?"fullWidth":N,y=Object(l.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return r.createElement(u,Object(n.a)({className:Object(c.default)(s.root,m,"fullWidth"!==x&&s[x],i&&s.absolute,f&&s.flexItem,v&&s.light,"vertical"===E&&s.vertical),role:g,ref:a},y))}));a.a=Object(i.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(s.a)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(m)},2019:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(0);function l(e){var a=n.useState(e),t=a[0],l=a[1],r=e||t;return n.useEffect((function(){null==t&&l("mui-".concat(Math.round(1e5*Math.random())))}),[t]),r}},2040:function(e,a,t){"use strict";var n=t(3),l=t(6),r=t(0),c=t(5),i=t(11),s=t(90),m=Object(s.a)(r.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var o=r.forwardRef((function(e,a){var t=e.alt,i=e.children,s=e.classes,o=e.className,u=e.component,d=void 0===u?"div":u,f=e.imgProps,p=e.sizes,v=e.src,b=e.srcSet,E=e.variant,h=void 0===E?"circular":E,g=Object(l.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),N=null,x=function(e){var a=e.src,t=e.srcSet,n=r.useState(!1),l=n[0],c=n[1];return r.useEffect((function(){if(a||t){c(!1);var e=!0,n=new Image;return n.src=a,n.srcSet=t,n.onload=function(){e&&c("loaded")},n.onerror=function(){e&&c("error")},function(){e=!1}}}),[a,t]),l}({src:v,srcSet:b}),y=v||b,j=y&&"error"!==x;return N=j?r.createElement("img",Object(n.a)({alt:t,src:v,srcSet:b,sizes:p,className:s.img},f)):null!=i?i:y&&t?t[0]:r.createElement(m,{className:s.fallback}),r.createElement(d,Object(n.a)({className:Object(c.default)(s.root,s.system,s[h],o,!j&&s.colorDefault),ref:a},g),N)}));a.a=Object(i.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(o)},3285:function(e,a,t){"use strict";var n=t(3),l=t(89),r=t(6),c=t(0),i=t(5),s=t(62),m=t(11),o=t(2019),u=t(226),d=t(417),f=t(36),p=t(15),v=t(90),b=Object(v.a)(c.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");function E(e,a){if(null==e)return e;var t=Math.round(e/a)*a;return Number(t.toFixed(function(e){var a=e.toString().split(".")[1];return a?a.length:0}(a)))}function h(e){e.value;var a=Object(r.a)(e,["value"]);return c.createElement("span",a)}var g=c.createElement(b,{fontSize:"inherit"});function N(e){return"".concat(e," Star").concat(1!==e?"s":"")}var x=c.forwardRef((function(e,a){var t=e.classes,m=e.className,v=e.defaultValue,b=void 0===v?null:v,x=e.disabled,y=void 0!==x&&x,j=e.emptyIcon,w=e.emptyLabelText,O=void 0===w?"Empty":w,S=e.getLabelText,k=void 0===S?N:S,z=e.icon,M=void 0===z?g:z,C=e.IconContainerComponent,F=void 0===C?h:C,A=e.max,R=void 0===A?5:A,L=e.name,I=e.onChange,T=e.onChangeActive,D=e.onMouseLeave,B=e.onMouseMove,V=e.precision,H=void 0===V?1:V,P=e.readOnly,$=void 0!==P&&P,U=e.size,W=void 0===U?"medium":U,Y=e.value,X=Object(r.a)(e,["classes","className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"]),J=Object(o.a)(L),q=Object(u.a)({controlled:Y,default:b,name:"Rating"}),G=Object(l.a)(q,2),Q=G[0],_=G[1],K=E(Q,H),Z=Object(s.a)(),ee=c.useState({hover:-1,focus:-1}),ae=ee[0],te=ae.hover,ne=ae.focus,le=ee[1],re=K;-1!==te&&(re=te),-1!==ne&&(re=ne);var ce=Object(d.a)(),ie=ce.isFocusVisible,se=ce.onBlurVisible,me=ce.ref,oe=c.useState(!1),ue=oe[0],de=oe[1],fe=c.useRef(),pe=Object(f.a)(me,fe),ve=Object(f.a)(pe,a),be=function(e){var a=parseFloat(e.target.value);_(a),I&&I(e,a)},Ee=function(e){0===e.clientX&&0===e.clientY||(le({hover:-1,focus:-1}),_(null),I&&parseFloat(e.target.value)===K&&I(e,null))},he=function(e){ie(e)&&de(!0);var a=parseFloat(e.target.value);le((function(e){return{hover:e.hover,focus:a}})),T&&ne!==a&&T(e,a)},ge=function(e){if(-1===te){!1!==ue&&(de(!1),se());le((function(e){return{hover:e.hover,focus:-1}})),T&&-1!==ne&&T(e,-1)}},Ne=function(e,a){var l="".concat(J,"-").concat(String(e.value).replace(".","-")),r=c.createElement(F,{value:e.value,className:Object(i.default)(t.icon,e.filled?t.iconFilled:t.iconEmpty,e.hover&&t.iconHover,e.focus&&t.iconFocus,e.active&&t.iconActive)},j&&!e.filled?j:M);return $?c.createElement("span",Object(n.a)({key:e.value},a),r):c.createElement(c.Fragment,{key:e.value},c.createElement("label",Object(n.a)({className:t.label,htmlFor:l},a),r,c.createElement("span",{className:t.visuallyhidden},k(e.value))),c.createElement("input",{onFocus:he,onBlur:ge,onChange:be,onClick:Ee,disabled:y,value:e.value,id:l,type:"radio",name:J,checked:e.checked,className:t.visuallyhidden}))};return c.createElement("span",Object(n.a)({ref:ve,onMouseMove:function(e){B&&B(e);var a,t=fe.current,n=t.getBoundingClientRect(),l=n.right,r=n.left,c=t.firstChild.getBoundingClientRect().width;a="rtl"===Z.direction?(l-e.clientX)/(c*R):(e.clientX-r)/(c*R);var i=E(R*a+H/2,H);i=function(e,a,t){return e<a?a:e>t?t:e}(i,H,R),le((function(e){return e.hover===i&&e.focus===i?e:{hover:i,focus:i}})),de(!1),T&&te!==i&&T(e,i)},onMouseLeave:function(e){D&&D(e);le({hover:-1,focus:-1}),T&&-1!==te&&T(e,-1)},className:Object(i.default)(t.root,m,"medium"!==W&&t["size".concat(Object(p.a)(W))],y&&t.disabled,ue&&t.focusVisible,$&&t.readOnly),role:$?"img":null,"aria-label":$?k(re):null},X),Array.from(new Array(R)).map((function(e,a){var n=a+1;if(H<1){var l=Array.from(new Array(1/H));return c.createElement("span",{key:n,className:Object(i.default)(t.decimal,n===Math.ceil(re)&&(-1!==te||-1!==ne)&&t.iconActive)},l.map((function(e,a){var t=E(n-1+(a+1)*H,H);return Ne({value:t,filled:t<=re,hover:t<=te,focus:t<=ne,checked:t===K},{style:l.length-1===a?{}:{width:t===re?"".concat((a+1)*H*100,"%"):"0%",overflow:"hidden",zIndex:1,position:"absolute"}})})))}return Ne({value:n,active:n===re&&(-1!==te||-1!==ne),filled:n<=re,hover:n<=te,focus:n<=ne,checked:n===K})})),!$&&!y&&null==K&&c.createElement(c.Fragment,null,c.createElement("input",{value:"",id:"".concat(J,"-empty"),type:"radio",name:J,defaultChecked:!0,className:t.visuallyhidden}),c.createElement("label",{className:t.pristine,htmlFor:"".concat(J,"-empty")},c.createElement("span",{className:t.visuallyhidden},O))))}));a.a=Object(m.a)((function(e){return{root:{display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#ffb400",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent","&$disabled":{opacity:.5,pointerEvents:"none"},"&$focusVisible $iconActive":{outline:"1px solid #999"}},sizeSmall:{fontSize:e.typography.pxToRem(18)},sizeLarge:{fontSize:e.typography.pxToRem(30)},readOnly:{pointerEvents:"none"},disabled:{},focusVisible:{},visuallyhidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,color:"#000",overflow:"hidden",padding:0,position:"absolute",top:20,width:1},pristine:{"input:focus + &":{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"}},label:{cursor:"inherit"},icon:{display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},iconEmpty:{color:e.palette.action.disabled},iconFilled:{},iconHover:{},iconFocus:{},iconActive:{transform:"scale(1.2)"},decimal:{position:"relative"}}}),{name:"MuiRating"})(x)},3487:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(677),c=t(1417),i=t(678),s=t(298),m=t(1357),o=t(2018),u=t(598),d=t(2025),f=[{id:"323sa680b32497dsfdsgga21rt47",imgUrl:"/assets/images/products/speaker-1.jpg",price:324,amount:10,title:"Bass Speaker Black",category:"audio",brand:"Microlab",item:"2019 6582 2365"},{id:"323sa680b324976dfgga21rt47",imgUrl:"/assets/images/products/speaker-2.jpg",price:454,amount:15,title:"Bass Speaker",category:"audio",brand:"Microlab",item:"2019 6582 2365"}],p=function(){return l.a.createElement(m.a,{className:"p-4"},l.a.createElement("div",{className:"mb-4 flex justify-between items-center"},l.a.createElement("h4",{className:"m-0 font-medium"},"Overview"),l.a.createElement("div",{className:"text-muted text-13 font-medium"},Object(d.a)(new Date,"MMM dd, yyyy")," at"," ",Object(d.a)(new Date,"HH:mm:aa"))),l.a.createElement(o.a,{className:"mb-6"}),l.a.createElement("div",{className:"flex mb-6"},l.a.createElement(u.a,{variant:"outlined",size:"small",placeholder:"Search products...",fullWidth:!0,InputProps:{startAdornment:l.a.createElement(c.a,{className:"mr-3",fontSize:"small"},"search")}}),l.a.createElement(i.a,{className:"ml-3 px-7 font-medium text-primary bg-light-primary whitespace-pre"},"Browse Catalog")),l.a.createElement("div",{className:"overflow-auto"},l.a.createElement("div",{className:"min-w-600"},l.a.createElement("div",{className:"py-3"},l.a.createElement(s.a,{container:!0},l.a.createElement(s.a,{item:!0,lg:6,md:6,sm:6,xs:6},l.a.createElement("h6",{className:"m-0 font-medium"},"Product Details")),l.a.createElement(s.a,{item:!0,lg:2,md:2,sm:2,xs:2,className:"text-center"},l.a.createElement("h6",{className:"m-0 font-medium"},"Price")),l.a.createElement(s.a,{item:!0,lg:2,md:2,sm:2,xs:2,className:"text-center"},l.a.createElement("h6",{className:"m-0 font-medium"},"Quantity")),l.a.createElement(s.a,{item:!0,lg:2,md:2,sm:2,xs:2,className:"text-center"},l.a.createElement("h6",{className:"m-0 font-medium"},"Total")))),l.a.createElement(o.a,null),f.map((function(e){return l.a.createElement("div",{key:e.id,className:"py-4"},l.a.createElement(s.a,{container:!0,alignItems:"center"},l.a.createElement(s.a,{item:!0,lg:6,md:6,sm:6,xs:6},l.a.createElement("div",{className:"flex"},l.a.createElement("img",{className:"border-radius-4 w-100 mr-3",src:e.imgUrl,alt:e.title}),l.a.createElement("div",{className:"flex-grow"},l.a.createElement("h6",{className:"mt-0 mb-3 text-15 text-primary"},e.title),l.a.createElement("p",{className:"mt-0 mb-6px text-13"},l.a.createElement("span",{className:"text-muted"},"category: "),l.a.createElement("span",{className:"font-medium"},e.item)),l.a.createElement("p",{className:"mt-0 mb-6px text-13"},l.a.createElement("span",{className:"text-muted"},"brand: "),l.a.createElement("span",{className:"font-medium"},e.brand)),l.a.createElement("p",{className:"mt-0 mb-6px text-13"},l.a.createElement("span",{className:"text-muted"},"category: "),l.a.createElement("span",{className:"font-medium"},e.category))))),l.a.createElement(s.a,{item:!0,lg:2,md:2,sm:2,xs:2,className:"text-center"},l.a.createElement(u.a,{variant:"outlined",name:"amount",type:"number",size:"small",defaultValue:e.price,inputProps:{style:{width:"60px"}}})),l.a.createElement(s.a,{item:!0,lg:2,md:2,sm:2,xs:2,className:"text-center"},l.a.createElement(u.a,{variant:"outlined",name:"amount",type:"number",size:"small",defaultValue:e.amount,inputProps:{style:{width:"60px"}}})),l.a.createElement(s.a,{item:!0,lg:2,md:2,sm:2,xs:2,className:"text-center"},l.a.createElement("div",{className:"flex justify-end items-center"},l.a.createElement("h6",{className:"m-0"},"$",e.price*e.amount),l.a.createElement(r.a,null,l.a.createElement(c.a,{fontSize:"small"},"clear"))))))})))),l.a.createElement(o.a,{className:"mt-4 mb-6"}),l.a.createElement(s.a,{container:!0,spacing:3},l.a.createElement(s.a,{item:!0,md:7,xs:12},l.a.createElement("h5",{className:"mt-0 mb-6"},"Notes"),l.a.createElement(u.a,{placeholder:"Write a note",variant:"outlined",multiline:!0,rows:6,fullWidth:!0}),l.a.createElement("div",{className:"mt-4 flex justify-end"},l.a.createElement(i.a,{variant:"contained",color:"primary",size:"small"},"Add a note"))),l.a.createElement(s.a,{item:!0,md:5,xs:12},l.a.createElement("h5",{className:"mt-0 mb-6"},"Bill Details"),l.a.createElement("div",{className:"flex justify-between mb-3"},l.a.createElement("span",{className:"text-muted"},"Subtotal:"),l.a.createElement("span",{className:"font-medium"},"$568")),l.a.createElement("p",{className:"text-primary text-13 font-medium mt-0 mb-1"},"Shipping"),l.a.createElement("div",{className:"flex justify-between mb-3"},l.a.createElement("div",null,l.a.createElement("p",{className:"m-0"},"DHL"),l.a.createElement("small",{className:"text-muted"},"Deliver in 1-3 days")),l.a.createElement("span",{className:"font-medium"},"$15.00")),l.a.createElement("p",{className:"text-primary text-13 font-medium mt-0 mb-1"},"Taxes"),l.a.createElement("div",{className:"flex justify-between mb-2"},l.a.createElement("p",{className:"m-0"},"GST 5%"),l.a.createElement("span",{className:"font-medium"},"$150.00")))))},v=t(19),b=t(2040),E=t(47),h=t(3285),g=t(687),N=t(5),x=["palette"],y=Object(g.a)((function(e){e.palette;return{avatar:{border:"4px solid rgba(var(--body), 0.03)",boxShadow:Object(v.a)(e,x).shadows[3]}}})),j=function(){var e=y();return l.a.createElement(m.a,{className:"p-4"},l.a.createElement("div",{className:"mb-4 flex justify-between items-center"},l.a.createElement("h4",{className:"m-0 font-medium"},"Customer"),l.a.createElement(E.b,{className:"text-primary",to:"/"},"View Details")),l.a.createElement(o.a,{className:"mb-6"}),l.a.createElement("div",{className:"flex-column justify-center items-center mb-6"},l.a.createElement(b.a,{className:Object(N.default)("w-100 h-100 mb-6",e.avatar),src:"/assets/images/faces/5.jpg"}),l.a.createElement("h5",null,"Devid Templehov"),l.a.createElement("p",{className:"text-primary mt-0 mb-2"},"davidtempletone@gmail.com"),l.a.createElement("p",{className:"mt-0"},"+21 (050) 071-91-58"),l.a.createElement(h.a,{readOnly:!0,value:4})),l.a.createElement(o.a,{className:"mb-6"}),l.a.createElement("div",{className:"mb-6"},l.a.createElement("p",{className:"font-medium mb-3"},"Shipping Address"),l.a.createElement("p",{className:"mt-0 mb-1"},"39, Hilbert Store"),l.a.createElement("p",{className:"m-0"},"New York, NY, United States")),l.a.createElement("div",null,l.a.createElement("p",{className:"font-medium mb-3"},"Billing Address"),l.a.createElement("p",{className:"mt-0 mb-1"},"39, Hilbert Store"),l.a.createElement("p",{className:"m-0"},"New York, NY, United States")))};a.default=function(){return l.a.createElement("div",{className:"m-sm-30"},l.a.createElement("div",{className:"flex flex-wrap justify-between mb-6"},l.a.createElement("div",null,l.a.createElement("h3",{className:"mt-0 mb-4 font-medium text-28"},"Order #1028"),l.a.createElement("div",{className:"flex"},l.a.createElement("div",{className:"px-3 text-11 py-3px border-radius-4 text-white bg-green mr-3"},"Paid"),l.a.createElement("div",{className:"px-3 text-11 py-3px border-radius-4 text-white bg-secondary"},"Unfulfilled"))),l.a.createElement("div",{className:""},l.a.createElement(r.a,{className:"mr-2"},l.a.createElement(c.a,null,"more_horiz")),l.a.createElement(i.a,{variant:"contained",color:"primary"},"Fulfill Order"))),l.a.createElement(s.a,{container:!0,spacing:3},l.a.createElement(s.a,{item:!0,md:8,xs:12},l.a.createElement(p,null)),l.a.createElement(s.a,{item:!0,md:4,xs:12},l.a.createElement(j,null))))}}}]);