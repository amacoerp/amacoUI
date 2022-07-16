(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[200],{2018:function(e,a,t){"use strict";var n=t(3),r=t(6),i=t(0),l=t(5),c=t(11),s=t(41),o=i.forwardRef((function(e,a){var t=e.absolute,c=void 0!==t&&t,s=e.classes,o=e.className,m=e.component,u=void 0===m?"hr":m,d=e.flexItem,f=void 0!==d&&d,p=e.light,b=void 0!==p&&p,v=e.orientation,h=void 0===v?"horizontal":v,E=e.role,g=void 0===E?"hr"!==u?"separator":void 0:E,w=e.variant,j=void 0===w?"fullWidth":w,x=Object(r.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(u,Object(n.a)({className:Object(l.default)(s.root,o,"fullWidth"!==j&&s[j],c&&s.absolute,f&&s.flexItem,b&&s.light,"vertical"===h&&s.vertical),role:g,ref:a},x))}));a.a=Object(c.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(s.a)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(o)},2498:function(e,a,t){"use strict";t.r(a);var n=t(32),r=t.n(n),i=t(59),l=t(7),c=t(18),s=t(0),o=t.n(s),m=t(1440),u=t(298),d=t(678),f=t(2018),p=t(53),b=t(26),v=t.n(b),h=t(4),E=t(1638),g=t(149),w=t.n(g);a.default=function(e){e.uid;var a=e.open,t=e.handleClose,n=window.location.search,b=new URLSearchParams(n),g=parseInt(b.get("id")),j=Object(s.useState)({brand_name:"",unit_price:"",party_id:"",description:"",user_id:1,product_id:g}),x=Object(c.a)(j,2),y=x[0],O=x[1],_=function(e){var a=e.target,t=a.name,n=a.value,r=Object(l.a)({},y);r[t]=n,O(r)},N=Object(s.useState)([]),S=Object(c.a)(N,2),C=S[0],k=S[1],q=o.a.useState(!0),V=Object(c.a)(q,2),I=V[0],z=(V[1],o.a.useState("md")),D=Object(c.a)(z,2),P=D[0],R=(D[1],function(){var e=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.g.post("analyse",y).then((function(e){w.a.fire({title:"Success",type:"success",text:"Data saved successfully."}),O({brand_name:"",unit_price:"",party_id:"",description:"",user_id:1})})).catch((function(e){}));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}());return Object(s.useEffect)((function(){v.a.get("http://dataqueuesystems.com/amaco/amaco/public/api/parties-vendor").then((function(e){var a=e.data;k(a)}))}),[]),o.a.createElement(m.a,{onClose:t,open:a,fullWidth:I,maxWidth:P,style:{zIndex:1e3}},o.a.createElement("div",{className:"p-6"},o.a.createElement("h4",{className:"mb-5"},"Add New"),o.a.createElement(p.ValidatorForm,{onSubmit:R,autoComplete:"off"},o.a.createElement(p.TextValidator,{className:"mb-4 w-full",label:"Brand Name",variant:"outlined",size:"small",onChange:_,type:"text",name:"brand_name",value:y.brand_name,validators:["required"],errorMessages:["this field is required"]}),o.a.createElement(u.a,null,o.a.createElement(p.TextValidator,{className:"w-full mb-4",label:"unit Price",onChange:_,size:"small",variant:"outlined",type:"textarea",name:"unit_price",value:y.unit_price}),o.a.createElement(p.TextValidator,{className:"mb-4 w-full",label:"Vendor",name:"party_id",size:"small",variant:"outlined",select:!0,value:y.party_id,validators:["required"],errorMessages:["this field is required"],onChange:_},C.map((function(e,a){return o.a.createElement(E.a,{value:e.id,key:e.id},e.fname)}))),o.a.createElement(p.TextValidator,{label:"Description",name:"description",size:"small",variant:"outlined",multiline:!0,value:y.description,rows:8,fullWidth:!0,onChange:_}),o.a.createElement(u.a,{item:!0,sm:6,xs:12})),o.a.createElement("div",{className:"flex justify-between items-center"},o.a.createElement(d.a,{variant:"contained",color:"primary",type:"submit"},"Save"),o.a.createElement("div",{className:"flex justify-between items-center"},o.a.createElement(d.a,{variant:"outlined",color:"secondary",onClick:function(){return t()}},"Cancel")))),o.a.createElement(f.a,{className:"mb-2"})))}},3376:function(e,a,t){"use strict";t.r(a);var n=t(18),r=t(0),i=t.n(r),l=t(100),c=t(1550),s=t.n(c),o=t(1357),m=t(1417),u=t(47),d=t(4),f=t(2498),p=t(677),b=t(678);a.default=function(){var e=Object(r.useState)(!0),a=Object(n.a)(e,2),t=a[0],c=a[1],v=Object(r.useState)([]),h=Object(n.a)(v,2),E=h[0],g=h[1],w=Object(r.useState)([]),j=Object(n.a)(w,2),x=j[0],y=j[1],O=Object(r.useState)(!1),_=Object(n.a)(O,2),N=_[0],S=_[1],C=Object(r.useState)(!1),k=Object(n.a)(C,2),q=k[0],V=(k[1],window.location.search),I=new URLSearchParams(V),z=parseInt(I.get("id")),D=function(){S(!1)};Object(r.useEffect)((function(){return d.g.get("products/"+z).then((function(e){var a=e.data;t&&g(a[0])})),d.g.get("analyse/"+z).then((function(e){var a=e.data;t&&y(a[0].analyses_details)})),function(){return c(!1)}}),[t]);return i.a.createElement("div",null,i.a.createElement("div",{className:"m-sm-30"},i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(l.b,{routeSegments:[{name:"View",path:"/sales/rfq-form/rfqview"},{name:"Analysis"}]})),N&&i.a.createElement(f.default,{handleClose:D,open:N}),q&&i.a.createElement(l.c,{open:q,onConfirmDialogClose:D,text:"Are you sure to delete?"}),i.a.createElement(o.a,{elevation:3},i.a.createElement("div",{className:"viewer_actions px-4 mb-5 flex items-center justify-between"},i.a.createElement(u.b,{to:"/sales/rfq-form/rfqview"},i.a.createElement(p.a,null,i.a.createElement(m.a,null,"arrow_back"))),i.a.createElement("div",null,i.a.createElement("div",{className:"text-right"},i.a.createElement(b.a,{className:"py-2",color:"primary",variant:"outlined",onClick:function(){S(!0)}},i.a.createElement(m.a,null,"add"),"add new")))),i.a.createElement("div",{id:"print-area"},i.a.createElement("div",{className:"viewer__order-info px-4 mb-4 flex justify-between"},i.a.createElement("div",null,i.a.createElement("h5",{className:"mb-2"},"Product Name:"),i.a.createElement("span",null,i.a.createElement("p",null,E.name)),i.a.createElement("h5",{className:"mb-2"},"Description:"),i.a.createElement("p",{className:"mb-0"},E.description))),i.a.createElement("div",{className:"viewer__order-info px-4 mb-3 flex justify-between"},i.a.createElement(s.a,{columns:[{name:"id",label:"Brand",options:{filter:!0}},{name:"name",label:"Description",options:{filter:!0}},{name:"description",label:"Vendor",options:{filter:!0}},{name:"unit_price",label:"Unitprice",options:{filter:!0}}],data:x.map((function(e,a){return[e.brand_name,e.description,e.party[0].fname,e.unit_price]})),options:{filterType:"textField",responsive:"simple",selectableRows:"none",elevation:0,rowsPerPageOptions:[10,20,40,80,100]}}))))))}}}]);