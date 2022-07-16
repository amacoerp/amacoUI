(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[247],{3403:function(e,a,t){"use strict";t.r(a);var r=t(16),n=t(32),l=t.n(n),i=t(59),o=t(18),c=t(19),m=t(0),s=t.n(m),u=t(1357),d=t(2018),p=t(298),b=t(598),h=t(1638),g=t(1417),v=t(678),y=t(100),E=t(2181),f=t(3280),N=t(2729),x=t(5),B=t(687),C=["palette"],O=Object(B.a)((function(e){e.palette,Object(c.a)(e,C);return{dropZone:{transition:"all 350ms ease-in-out",border:"2px dashed rgba(var(--body),0.3)","&:hover":{background:"rgba(var(--body), 0.2) !important"}}}})),q=f.b().shape({name:f.c().required("Name is required"),price:f.a().required("Price is required"),category:f.c().required("Category is required"),quantity:f.a().required("Quantity is required")}),P={name:"",sku:"",price:"",category:"",quantity:""},j=["Electronics","Clothes","Toys","Books","Utensils"];a.default=function(){var e=Object(m.useState)([]),a=Object(o.a)(e,2),t=a[0],n=a[1],c=Object(N.a)({accept:"image/*"}),f=c.getRootProps,B=c.getInputProps,C=c.isDragActive,k=c.acceptedFiles,S=O(),z=function(){var e=Object(i.a)(l.a.mark((function e(a,t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isSubmitting;case 1:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}();return Object(m.useEffect)((function(){n(k)}),[k]),s.a.createElement("div",{className:"m-sm-30"},s.a.createElement("div",{className:"mb-sm-30"},s.a.createElement(y.b,{routeSegments:[{name:"Pages",path:"/pages"},{name:"New Product"}]})),s.a.createElement(u.a,{elevation:3},s.a.createElement("div",{className:"flex p-4"},s.a.createElement("h4",{className:"m-0"},"Add New Product")),s.a.createElement(d.a,{className:"mb-6"}),s.a.createElement(E.b,{initialValues:P,onSubmit:z,enableReinitialize:!0,validationSchema:q},(function(e){var a,n=e.values,l=e.errors,i=e.touched,o=e.handleChange,c=e.handleBlur,m=e.handleSubmit;e.isSubmitting,e.setSubmitting,e.setFieldValue;return s.a.createElement("form",{className:"px-4",onSubmit:m},s.a.createElement(p.a,{container:!0,spacing:3},s.a.createElement(p.a,{item:!0,sm:6,xs:12},s.a.createElement(b.a,{className:"mb-4",name:"name",label:"Name",variant:"outlined",size:"small",fullWidth:!0,onBlur:c,onChange:o,value:n.name||"",error:Boolean(i.name&&l.name),helperText:i.name&&l.name}),s.a.createElement(b.a,{className:"mb-4",name:"description",label:"Description",variant:"outlined",size:"small",fullWidth:!0,multiline:!0,onBlur:c,onChange:o,value:n.description||"",error:Boolean(i.description&&l.description),helperText:i.description&&l.description}),s.a.createElement(b.a,{className:"mb-4",name:"category",label:"Category",variant:"outlined",size:"small",fullWidth:!0,select:!0,onBlur:c,onChange:o,value:n.category||"",error:Boolean(i.category&&l.category),helperText:i.category&&l.category},j.sort().map((function(e){return s.a.createElement(h.a,{value:e,key:e},e)}))),s.a.createElement("div",Object.assign({className:Object(x.default)((a={"border-radius-4 h-160 w-full flex justify-center items-center cursor-pointer mb-4":!0},Object(r.a)(a,S.dropZone,!0),Object(r.a)(a,"bg-light-gray",!C),Object(r.a)(a,"bg-gray",C),a))},f()),s.a.createElement("input",B()),s.a.createElement("div",{className:"flex-column items-center"},s.a.createElement(g.a,{className:"text-muted text-48"},"publish"),t.length?s.a.createElement("span",null,t.length," images were selected"):s.a.createElement("span",null,"Drop product images")))),s.a.createElement(p.a,{item:!0,sm:6,xs:12},s.a.createElement(b.a,{className:"mb-4",name:"productCode",label:"Product Code",variant:"outlined",size:"small",fullWidth:!0,onBlur:c,onChange:o,value:n.productCode||"",error:Boolean(i.productCode&&l.productCode),helperText:i.productCode&&l.productCode}),s.a.createElement(b.a,{className:"mb-4",name:"sku",label:"SKU",variant:"outlined",size:"small",fullWidth:!0,onBlur:c,onChange:o,value:n.sku||"",error:Boolean(i.sku&&l.sku),helperText:i.sku&&l.sku}),s.a.createElement(b.a,{className:"mb-4",name:"price",label:"Price",variant:"outlined",size:"small",type:"number",fullWidth:!0,onBlur:c,onChange:o,value:n.price||"",error:Boolean(i.price&&l.price),helperText:i.price&&l.price}),s.a.createElement(b.a,{className:"mb-4",name:"salePrice",label:"Sale Price",variant:"outlined",size:"small",type:"number",fullWidth:!0,onBlur:c,onChange:o,value:n.salePrice||"",error:Boolean(i.salePrice&&l.salePrice),helperText:i.salePrice&&l.salePrice}),s.a.createElement(b.a,{className:"mb-4",name:"quantity",label:"Quantity",variant:"outlined",size:"small",type:"number",fullWidth:!0,onBlur:c,onChange:o,value:n.quantity||"",error:Boolean(i.quantity&&l.quantity),helperText:i.quantity&&l.quantity}),s.a.createElement(b.a,{className:"mb-4",name:"minOrderAmount",label:"Minimum Order Amount",variant:"outlined",size:"small",type:"number",fullWidth:!0,onBlur:c,onChange:o,value:n.minOrderAmount||"",error:Boolean(i.minOrderAmount&&l.minOrderAmount),helperText:i.minOrderAmount&&l.minOrderAmount}))),s.a.createElement(v.a,{className:"mb-4 px-12",variant:"contained",color:"primary",type:"submit"},"Add Product"))}))))}}}]);