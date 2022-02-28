(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[214],{1624:function(e,t,a){"use strict";var m=a(3),l=a(6),c=a(0),n=(a(1),a(5)),r=a(11),s=a(37),i=c.forwardRef((function(e,t){var a=e.absolute,r=void 0!==a&&a,s=e.classes,i=e.className,o=e.component,d=void 0===o?"hr":o,u=e.flexItem,E=void 0!==u&&u,x=e.light,h=void 0!==x&&x,f=e.orientation,g=void 0===f?"horizontal":f,p=e.role,v=void 0===p?"hr"!==d?"separator":void 0:p,N=e.variant,b=void 0===N?"fullWidth":N,j=Object(l.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return c.createElement(d,Object(m.a)({className:Object(n.default)(s.root,i,"fullWidth"!==b&&s[b],r&&s.absolute,E&&s.flexItem,h&&s.light,"vertical"===g&&s.vertical),role:v,ref:t},j))}));t.a=Object(r.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(s.d)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(i)},3389:function(e,t,a){"use strict";a.r(t);var m=a(19),l=a(0),c=a.n(l),n=a(1340),r=a(399),s=a(1624),i=a(677),o=a(1400),d=a(591),u=a(678),E=a(232),x=a(106),h=a(28),f=a(673),g=a(5),p=Object(f.a)((function(e){e.palette,Object(m.a)(e,["palette"]);return{cart:{minWidth:900,overflowX:"scroll"}}}));t.default=function(){var e=Object(E.d)((function(e){return e.ecommerce})).cartList,t=void 0===e?[]:e,a=Object(E.d)((function(e){return e.user})),m=Object(E.c)(),l=Object(h.g)(),f=p();return c.a.createElement(n.a,{elevation:3,className:Object(g.default)("m-sm-30",f.cart)},c.a.createElement("div",{className:"py-4 px-4"},c.a.createElement(r.a,{container:!0},c.a.createElement(r.a,{item:!0,lg:3,md:3,sm:3,xs:3}),c.a.createElement(r.a,{item:!0,lg:4,md:4,sm:4,xs:4},c.a.createElement("h6",{className:"m-0"},"Name")),c.a.createElement(r.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"text-center"},c.a.createElement("h6",{className:"m-0"},"Price")),c.a.createElement(r.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"text-center"},c.a.createElement("h6",{className:"m-0"},"Quantity")),c.a.createElement(r.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"text-center"},c.a.createElement("h6",{className:"m-0"},"Total")))),c.a.createElement(s.a,null),t.map((function(e){return c.a.createElement("div",{key:e.id,className:"py-4 px-4"},c.a.createElement(r.a,{container:!0,alignItems:"center"},c.a.createElement(r.a,{item:!0,lg:3,md:3,sm:3,xs:3},c.a.createElement("div",{className:"flex items-center"},c.a.createElement(i.a,{size:"small",onClick:function(){return t=e.id,void m(Object(x.j)(a.userId,t));var t}},c.a.createElement(o.a,{fontSize:"small"},"clear")),c.a.createElement("div",{className:"px-4"},c.a.createElement("img",{className:"border-radius-4 w-full",src:e.imgUrl,alt:e.title})))),c.a.createElement(r.a,{item:!0,lg:4,md:4,sm:4,xs:4},c.a.createElement("h6",{className:"m-0"},e.title),c.a.createElement("p",{className:"mt-2 m-0 text-muted"},e.description)),c.a.createElement(r.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"text-center"},c.a.createElement("h6",{className:"m-0"},"$",e.price)),c.a.createElement(r.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"text-center"},c.a.createElement(d.a,{variant:"outlined",name:"amount",type:"number",size:"small",value:e.amount,onChange:function(t){return function(e,t){var l=e.target.value;m(Object(x.p)(a.userId,t,Math.abs(l)))}(t,e.id)},inputProps:{style:{width:"60px"}}})),c.a.createElement(r.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"text-center"},c.a.createElement("h6",{className:"m-0"},"$",e.price*e.amount))))})),c.a.createElement("div",null,c.a.createElement(s.a,{className:"mb-12"}),c.a.createElement(r.a,{container:!0,className:"mb-12 px-4"},c.a.createElement(r.a,{item:!0,lg:3,md:3,sm:3,xs:3}),c.a.createElement(r.a,{item:!0,lg:4,md:4,sm:4,xs:4}),c.a.createElement(r.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0}),c.a.createElement(r.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"text-center"},c.a.createElement("h6",{className:"m-0"},"Total")),c.a.createElement(r.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"text-center"},c.a.createElement("h6",{className:"m-0"},"$",function(){var e=0;return t.forEach((function(t){e+=t.amount*t.price})),e}().toFixed(2)))),c.a.createElement("div",{className:"flex items-center mb-4 px-4"},c.a.createElement(d.a,{variant:"outlined",placeholder:"Discount Coupon",className:"flex-grow",size:"small"}),c.a.createElement(u.a,{className:"mx-3",variant:"contained",color:"secondary"},"Apply"),c.a.createElement(u.a,{variant:"contained",color:"primary",onClick:function(){return l.push("/ecommerce/checkout")}},"Checkout"))))}}}]);