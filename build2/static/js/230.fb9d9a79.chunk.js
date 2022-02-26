(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[230],{3461:function(e,a,t){"use strict";t.r(a);var n=t(13),l=t(17),r=t(0),c=t.n(r),i=t(98),m=t(232),s=t(106),o=t(591),u=t(1637),d=t(1400),b=t(1427),p=t(1340),g=t(674),f=t(1499),h=t(1372),v=t(1651),E=t(3503),j=t(1373),y=t(1643),N=t(678),O=t(3290),x=function(e){var a=e.query,t=e.categories,n=e.brands,l=e.multilevel,i=e.categoryList,m=e.brandList,s=e.ratingList,x=e.shipping,C=e.sliderRange,w=e.toggleSidenav,P=e.handleSearch,S=e.handleMultilevelChange,k=e.handleSliderChange,L=e.handleCategoryChange,z=e.handleBrandChange,R=e.handleRatingClick,B=e.handleFreeShippingClick,F=e.handleClearAllFilter;return c.a.createElement(r.Fragment,null,c.a.createElement("div",{className:"pl-4 flex items-center mb-4 mt-2"},c.a.createElement(o.a,{className:"bg-paper flex-grow mr-4",size:"small",margin:"none",name:"query",variant:"outlined",placeholder:"Search here...",value:a,onChange:function(e){return P(e.target.value)},InputProps:{startAdornment:c.a.createElement(u.a,{position:"start"},c.a.createElement(d.a,{fontSize:"small"},"search"))},fullWidth:!0}),c.a.createElement(b.a,{smUp:!0},c.a.createElement(d.a,{onClick:w},"clear"))),c.a.createElement("div",{className:"px-4"},c.a.createElement(p.a,{elevation:3,className:"p-4 mb-4"},c.a.createElement("h6",{className:"m-0 mb-4"},"Price"),c.a.createElement(g.a,{component:"fieldset",className:"w-full"},c.a.createElement(f.a,{"aria-label":"status",name:"status",value:l,onChange:S},c.a.createElement(h.a,{className:"h-32",value:"0,10",control:c.a.createElement(v.a,{color:"secondary"}),label:"<$10",labelPlacement:"end"}),c.a.createElement(h.a,{className:"h-32",value:"10,100",control:c.a.createElement(v.a,{color:"secondary"}),label:"$10-$100",labelPlacement:"end"}),c.a.createElement(h.a,{className:"h-32",value:"100,500",control:c.a.createElement(v.a,{color:"secondary"}),label:"$100-$500",labelPlacement:"end"}),c.a.createElement(h.a,{className:"h-32",value:"500",control:c.a.createElement(v.a,{color:"secondary"}),label:">$500",labelPlacement:"end"}),c.a.createElement(h.a,{className:"h-32",value:"all",control:c.a.createElement(v.a,{color:"secondary"}),label:"All",labelPlacement:"end"})))),c.a.createElement(p.a,{elevation:3,className:"p-4 mb-4"},c.a.createElement("div",{className:"flex justify-between items-center  mb-4"},c.a.createElement("h5",{className:"m-0"},"Slider"),c.a.createElement("span",{className:"text-muted"},"$",10*C[0]," - $",10*C[1])),c.a.createElement(E.a,{value:C,onChange:k,valueLabelDisplay:"auto","aria-labelledby":"range-slider",valueLabelFormat:function(e){return 10*e}})),c.a.createElement(p.a,{elevation:3,className:"relative p-4 mb-4"},c.a.createElement("h5",{className:"m-0 mb-4"},"Category"),i.map((function(e){return c.a.createElement("div",{key:e.title,className:"flex items-center justify-between"},c.a.createElement(h.a,{className:"flex-grow",name:e.title,onChange:L,control:c.a.createElement(j.a,{checked:t.includes(e.title)}),label:c.a.createElement("span",{className:"capitalize"},e.title)}),c.a.createElement("small",{className:"badge bg-light-primary text-primary"},e.product))}))),c.a.createElement(p.a,{elevation:3,className:"relative p-4 mb-4"},c.a.createElement("h5",{className:"m-0 mb-4"},"Brands"),c.a.createElement(o.a,{size:"small",className:"mb-4",variant:"outlined",placeholder:"Search here...",InputProps:{startAdornment:c.a.createElement(u.a,{position:"start"},c.a.createElement(d.a,{fontSize:"small"},"search"))},fullWidth:!0}),m.map((function(e){return c.a.createElement("div",{key:e.title,className:"flex items-center justify-between"},c.a.createElement(h.a,{className:"flex-grow",name:e.title,onChange:z,control:c.a.createElement(j.a,{checked:n.includes(e.title)}),label:e.title}),c.a.createElement("small",{className:"badge bg-light-primary text-primary"},e.product))}))),c.a.createElement(p.a,{elevation:3,className:"relative p-4 mb-4"},c.a.createElement("h5",{className:"m-0 mb-4"},"Rating"),s.map((function(e){return c.a.createElement("div",{key:e.rate,value:e.rate,className:"flex items-center justify-between cursor-pointer pb-4",onClick:function(){return R(e.rate)}},c.a.createElement(O.a,{size:"small",name:"half-rating",value:e.rate,precision:.5,readOnly:!0}),c.a.createElement("small",{className:"badge bg-light-primary text-primary"},e.product))}))),c.a.createElement(p.a,{elevation:3,className:"relative p-4 mb-4 flex justify-between items-center"},c.a.createElement("h5",{className:"m-0"},"Toggle"),c.a.createElement(y.a,{className:"px-3 box-shadow-none",variant:"extended",color:x?"primary":"inherit",size:"small",onClick:B},c.a.createElement("small",{className:"mr-4"},"Free Shipping"),c.a.createElement(d.a,null,"add"))),c.a.createElement(N.a,{className:"w-full",variant:"contained",color:"primary",onClick:F},"Clear All Filteres")))},C=t(1589),w=t(677),P=t(399),S=t(1595),k=t(19),L=t(673),z=t(5),R=t(66),B=Object(L.a)((function(e){e.palette,Object(k.a)(e,["palette"]);return{productCard:{"& .product-price":{position:"absolute",right:0,top:24,borderTopLeftRadius:26,borderBottomLeftRadius:26,zIndex:4},"& .image-box-overlay":{position:"absolute",top:0,bottom:0,left:0,right:0,background:"rgba(0, 0, 0, 0.74)",zIndex:2,opacity:0,transition:"all 250ms ease-in-out"},"&:hover":{"& .image-box-overlay":{opacity:1}}}}})),F=function(e){var a,t=e.product,n=B(),l=Object(R.a)().user,r=Object(m.d)((function(e){return e.ecommerce})).cartList,o=Object(m.c)(),u=(null===r||void 0===r||null===(a=r.find((function(e){return e.id===t.id})))||void 0===a?void 0:a.amount)||0;return c.a.createElement(p.a,{elevation:3,className:Object(z.default)("text-center relative h-full",n.productCard)},c.a.createElement("div",{className:"flex justify-center items-center relative"},c.a.createElement("span",{className:"product-price font-medium bg-primary text-white py-1 px-3 m-0"},"$",t.price),c.a.createElement("img",{className:"w-full",src:t.imgUrl,alt:t.title}),c.a.createElement("div",{className:"image-box-overlay flex justify-center items-center"})),c.a.createElement("div",{className:"p-6"},c.a.createElement("h5",{className:"m-0"},t.title)),c.a.createElement(i.a,{className:"mb-4 mx-auto px-4",amount:u,totalUnit:t.totalUnit,handleAddProduct:function(){o(Object(s.i)(l.id,t.id))},handleUpdateCart:function(e){o(Object(s.p)(l.id,t.id,e))}}))},I=Object(L.a)((function(e){e.palette,Object(k.a)(e,["palette"]);return{productCard:{"& .product-price":{position:"absolute",right:0,top:24,borderTopLeftRadius:26,borderBottomLeftRadius:26,zIndex:4},"& .image-box-overlay":{position:"absolute",top:0,bottom:0,left:0,right:0,background:"rgba(0, 0, 0, 0.74)",zIndex:2,opacity:0,transition:"all 250ms ease-in-out"},"&:hover":{"& .image-box-overlay":{opacity:1}}}}})),U=function(e){var a,t=e.product,n=I(),l=Object(R.a)().user,r=Object(m.d)((function(e){return e.ecommerce})).cartList,o=Object(m.c)(),u=(null===r||void 0===r||null===(a=r.find((function(e){return e.id===t.id})))||void 0===a?void 0:a.amount)||0,b=function(){o(Object(s.i)(l.id,t.id))};return c.a.createElement(p.a,{elevation:3,className:Object(z.default)("p-4 relative h-full",n.productCard)},c.a.createElement(P.a,{container:!0,spacing:2,alignItems:"center"},c.a.createElement(P.a,{item:!0,lg:6,md:6,sm:6,xs:12},c.a.createElement("div",{className:"flex justify-center items-center relative"},c.a.createElement("img",{className:"w-full",src:t.imgUrl,alt:t.title}),c.a.createElement("div",{className:"image-box-overlay flex justify-center items-center"},c.a.createElement(N.a,{variant:"outlined",className:"bg-default",onClick:function(){return b(l.id,t.id)}},c.a.createElement(d.a,{className:"mr-2"},"shopping_cart"),c.a.createElement("span",null,"Add to cart"))))),c.a.createElement(P.a,{item:!0,lg:6,md:6,sm:6,xs:12,className:"p-6"},c.a.createElement("h5",{className:"m-0 mb-3"},t.title),c.a.createElement("div",{className:"flex justify-between mb-4"},c.a.createElement("span",{className:"text-muted"},"$",t.price.toFixed(2)),c.a.createElement(O.a,{size:"small",readOnly:!0,name:"half-rating",value:t.rating,precision:.5})),c.a.createElement(i.a,{className:"mb-4",amount:u,totalUnit:t.totalUnit,handleAddProduct:b,handleUpdateCart:function(e){o(Object(s.p)(l.id,t.id,e))}}),c.a.createElement("p",{className:"m-0 text-muted"},t.description.substring(0,200)))))},$=t(185),A=function(e){var a=e.orderBy,t=e.view,n=e.productList,l=e.page,i=e.rowsPerPage,m=e.toggleSidenav,s=e.toggleView,u=e.handleChange,p=e.handleChangePage,g=e.setRowsPerPage;return c.a.createElement(r.Fragment,null,c.a.createElement("div",{className:"relative h-full w-full"},c.a.createElement("div",{className:"flex items-center justify-between mb-4"},c.a.createElement(b.a,{mdUp:!0},c.a.createElement(N.a,{size:"small",variant:"contained",color:"primary",onClick:m},"Filter")),c.a.createElement("div",{className:"flex items-center justify-end flex-grow"},c.a.createElement(o.a,{select:!0,name:"orderBy",onChange:u,value:a,InputProps:{disableUnderline:!0}},c.a.createElement(C.a,{value:"default"},"Default"),c.a.createElement(C.a,{value:"asc"},"Lowest Price"),c.a.createElement(C.a,{value:"desc"},"Highest Price")),c.a.createElement(w.a,{onClick:function(){return s("grid")}},c.a.createElement(d.a,{color:"grid"===t?"primary":"inherit"},"view_comfy")),c.a.createElement(w.a,{onClick:function(){return s("list")}},c.a.createElement(d.a,{color:"list"===t?"primary":"inherit"},"list")))),c.a.createElement(P.a,{container:!0,spacing:2},$.orderBy(n,"false"!==a?"price":"",a).slice(l*i,l*i+i).map((function(e){return"grid"===t?c.a.createElement(P.a,{item:!0,key:e.id,lg:4,md:6,sm:12,xs:12},c.a.createElement(F,{product:e})):c.a.createElement(P.a,{item:!0,key:e.id,lg:12,md:12,sm:12,xs:12},c.a.createElement(U,{product:e}))})))),c.a.createElement(S.a,{rowsPerPageOptions:[6,12,24],component:"div",count:n.length,rowsPerPage:i,page:l,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:p,onChangeRowsPerPage:g}))};a.default=function(){var e=Object(r.useState)(!0),a=Object(l.a)(e,2),t=a[0],o=a[1],u=Object(r.useState)("grid"),d=Object(l.a)(u,2),b=d[0],p=d[1],g=Object(r.useState)(0),f=Object(l.a)(g,2),h=f[0],v=f[1],E=Object(r.useState)(6),j=Object(l.a)(E,2),y=j[0],N=j[1],O=Object(r.useState)("default"),C=Object(l.a)(O,2),w=C[0],P=C[1],S=Object(r.useState)([0,100]),k=Object(l.a)(S,2),L=k[0],z=k[1],R=Object(r.useState)(""),B=Object(l.a)(R,2),F=B[0],I=B[1],U=Object(r.useState)("all"),q=Object(l.a)(U,2),T=q[0],D=q[1],J=Object(r.useState)(!1),M=Object(l.a)(J,2),V=M[0],W=M[1],_=Object(r.useState)([]),H=Object(l.a)(_,2),G=H[0],K=H[1],Q=Object(r.useState)([]),X=Object(l.a)(Q,2),Y=X[0],Z=X[1],ee=Object(r.useState)([]),ae=Object(l.a)(ee,2),te=ae[0],ne=ae[1],le=Object(m.c)(),re=Object(m.d)((function(e){return e.ecommerce})).productList,ce=void 0===re?[]:re,ie=Object(m.d)((function(e){return e.ecommerce})).categoryList,me=void 0===ie?[]:ie,se=Object(m.d)((function(e){return e.ecommerce})).ratingList,oe=void 0===se?[]:se,ue=Object(m.d)((function(e){return e.ecommerce})).brandList,de=void 0===ue?[]:ue,be=function(){o(!t)},pe=Object(r.useCallback)(Object($.debounce)((function(e){var a=ce.filter((function(a){return a.title.toLowerCase().match(e.toLowerCase())}));ne(a)}),200),[ce]),ge=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return 0===a.length?ce:ce.filter((function(t){return a.includes(t[e])}))},fe=function(e,a){var t=ce.filter((function(t){return t.price>=e&&t.price<=a}));ne(t)};return Object(r.useEffect)((function(){le(Object(s.n)()),le(Object(s.m)()),le(Object(s.o)()),le(Object(s.k)())}),[le]),Object(r.useEffect)((function(){ne(ce)}),[ce]),c.a.createElement("div",{className:"shop m-sm-30"},c.a.createElement(i.s,null,c.a.createElement(i.r,{width:"288px",open:t,toggleSidenav:be},c.a.createElement(x,{query:F,categories:G,brands:Y,multilevel:T,categoryList:me,brandList:de,ratingList:oe,shipping:V,sliderRange:L,toggleSidenav:be,handleSearch:function(e){I(e),pe(e)},handleMultilevelChange:function(e){var a=e.target.value,t=a.split(",");if(D(a),"all"!==a)if(2===(t=t.map((function(e){return parseInt(e)}))).length)fe(t[0],t[1]);else{var n=ce.filter((function(e){return e.price>=t[0]}));ne(n)}else ne(ce)},handleSliderChange:function(e,a){z(a),fe(10*a[0],10*a[1])},handleCategoryChange:function(e){var a=e.target,t=[];t=a.checked?[].concat(Object(n.a)(G),[a.name]):G.filter((function(e){return e!==a.name})),K(t),ne(ge("category",t))},handleBrandChange:function(e){var a=e.target,t=[];t=a.checked?[].concat(Object(n.a)(Y),[a.name]):Y.filter((function(e){return e!==a.name})),Z(t),ne(ge("brand",t))},handleRatingClick:function(e){ne(ge("rating",[e]))},handleFreeShippingClick:function(){W(!V),ne(ge("freeShipping",[V]))},handleClearAllFilter:function(){z([0,100]),I(""),D("all"),W(!1),K([]),Z([]),ne(ce)}})),c.a.createElement(i.t,null,c.a.createElement(A,{orderBy:w,view:b,productList:te,page:h,rowsPerPage:y,toggleView:function(e){return p(e)},toggleSidenav:be,handleChange:function(e){return P(e.target.value)},handleChangePage:function(e,a){v(a)},setRowsPerPage:function(e){return N(e.target.value)}}))))}}}]);