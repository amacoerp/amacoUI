(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[205],{1918:function(e,a,t){"use strict";var l=t(17),n=t(1),r=t.n(n),m=t(1223),s=t(572),c=t(1383),i=t(1384),o=t(1387),p=t(1385),u=t(1382),d=t(1386),E=t(1441),h=t(570),b=t(1196),y=t(1166),f=t(5),x=Object(y.a)((function(e){e.palette,Object(l.a)(e,["palette"]);return{productTable:{"& small":{height:15,width:50,borderRadius:500,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"},"& td":{borderBottom:"none"},"& td:first-child":{paddingLeft:"16px !important"}}}})),g=[{imgUrl:"/assets/images/products/headphone-2.jpg",name:"earphone",price:100,available:15},{imgUrl:"/assets/images/products/headphone-3.jpg",name:"earphone",price:1500,available:30},{imgUrl:"/assets/images/products/iphone-2.jpg",name:"iPhone x",price:1900,available:35},{imgUrl:"/assets/images/products/iphone-1.jpg",name:"iPhone x",price:100,available:0},{imgUrl:"/assets/images/products/headphone-3.jpg",name:"Head phone",price:1190,available:5}];a.a=function(){var e=x();return r.a.createElement(m.a,{elevation:3,className:"pt-5 mb-6"},r.a.createElement("div",{className:"flex justify-between items-center px-6 mb-3"},r.a.createElement("span",{className:"card-title"},"top selling products"),r.a.createElement(s.a,{size:"small",defaultValue:"this_month",disableUnderline:!0},r.a.createElement(c.a,{value:"this_month"},"This Month"),r.a.createElement(c.a,{value:"last_month"},"Last Month"))),r.a.createElement("div",{className:"overflow-auto"},r.a.createElement(i.a,{className:Object(f.default)("whitespace-pre min-w-400",e.productTable)},r.a.createElement(o.a,null,r.a.createElement(p.a,null,r.a.createElement(u.a,{className:"px-6",colSpan:4},"Name"),r.a.createElement(u.a,{className:"px-0",colSpan:2},"Revenue"),r.a.createElement(u.a,{className:"px-0",colSpan:2},"Stock Status"),r.a.createElement(u.a,{className:"px-0",colSpan:1},"Action"))),r.a.createElement(d.a,null,g.map((function(e,a){return r.a.createElement(p.a,{key:a,hover:!0},r.a.createElement(u.a,{className:"px-0 capitalize",colSpan:4,align:"left"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(E.a,{src:e.imgUrl}),r.a.createElement("p",{className:"m-0 ml-8"},e.name))),r.a.createElement(u.a,{className:"px-0 capitalize",align:"left",colSpan:2},"$",e.price>999?(e.price/1e3).toFixed(1)+"k":e.price),r.a.createElement(u.a,{className:"px-0",align:"left",colSpan:2},e.available?e.available<20?r.a.createElement("small",{className:"border-radius-4 bg-secondary text-white px-2 py-2px"},e.available," available"):r.a.createElement("small",{className:"border-radius-4 bg-primary text-white px-2 py-2px"},"in stock"):r.a.createElement("small",{className:"border-radius-4 bg-error text-white px-2 py-2px"},"out of stock")),r.a.createElement(u.a,{className:"px-0",colSpan:1},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"primary"},"edit"))))}))))))}},2836:function(e,a,t){"use strict";t.r(a);var l=t(20),n=t(1),r=t.n(n),m=t(2856),s=t(2701),c=t(1222),i=t(1223),o=t(570),p=t(1196),u=function(){return r.a.createElement("div",null,r.a.createElement(c.a,{container:!0,spacing:3},[{icon:"card_giftcard",amount:10495,title:"TO BE PACKED"},{icon:"local_shipping",amount:30942,title:"TO BE SHIPPED"},{icon:"assignment_turned_in",amount:45269,title:"TO BE DELIVERED"},{icon:"assignment",amount:20965,title:"TO BE INVOICED"}].map((function(e,a){return r.a.createElement(c.a,{key:e.title,item:!0,md:3,sm:6,xs:12},r.a.createElement(i.a,{elevation:3,className:"p-5 flex-column justify-center items-center"},r.a.createElement("div",null,r.a.createElement(o.a,{size:"small",className:"p-2 bg-light-gray"},r.a.createElement(p.a,{className:"text-muted"},e.icon))),r.a.createElement("h3",{className:"mt-1 text-32"},e.amount.toLocaleString()),r.a.createElement("p",{className:"m-0 text-muted"},e.title)))}))))},d=t(1918),E=t(1734),h=t.n(E),b=function(){return r.a.createElement(h.a,{options:y,series:[{name:"Sale",data:[14,29,18,20,20,40,20,30,24,18,30,15]}],type:"line",height:400})},y={chart:{height:350,type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},toolbar:{show:!1}},colors:["#5d78ff","#fbaf0f"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:3},title:{text:"",align:"left"},grid:{},markers:{size:4,hover:{size:6}},xaxis:{categories:["January","February","March","April","May","June","July","August","Spetember","October","November","December"],title:{text:""},axisBorder:{show:!1}},yaxis:{title:{text:""}},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5}},f=t(1420),x=t(572),g=t(1383),v={labels:["Available","Low Stock","Out of Stock"],stroke:{width:0},colors:["rgba(var(--primary), 1)","rgba(var(--secondary), 1)","rgba(var(--error), 1)"],dataLabels:{enabled:!1},legend:{show:!1}},N=function(){return r.a.createElement(h.a,{options:v,series:[75,50,25],type:"donut"})},w=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(c.a,{container:!0,spacing:3},r.a.createElement(c.a,{item:!0,sm:8,xs:12},r.a.createElement("h5",{className:"mt-0 mb-4 text-muted"},"Sales Activity"),r.a.createElement(u,null)),r.a.createElement(c.a,{item:!0,sm:4,xs:12},r.a.createElement("div",{className:"flex-column h-full"},r.a.createElement("h5",{className:"mt-0 mb-4 text-muted"},"Inventory Summary"),r.a.createElement(i.a,{className:"p-5 flex justify-between items-center mb-4 h-full",elevation:3},r.a.createElement("span",null,"QUANTITY IN HAND"),r.a.createElement("h5",{className:"m-0"},"540")),r.a.createElement(i.a,{className:"p-5 flex justify-between items-center h-full",elevation:3},r.a.createElement("span",null,"QUANTITY TO BE RECEIVED"),r.a.createElement("h5",{className:"m-0"},"120")))),r.a.createElement(c.a,{item:!0,sm:6,xs:12},r.a.createElement(i.a,{className:"px-6 py-4"},r.a.createElement(c.a,{container:!0,spacing:3,alignItems:"center"},r.a.createElement(c.a,{item:!0,sm:7,xs:12},r.a.createElement("div",{className:"flex justify-between items-center py-3"},r.a.createElement("h5",{className:"font-normal text-error"},"Stockout Items"),r.a.createElement("h5",{className:"text-error"},"234")),r.a.createElement("div",{className:"flex justify-between items-center py-3"},r.a.createElement("h5",{className:"font-normal"},"Low Stock Items"),r.a.createElement("h5",null,"123")),r.a.createElement("div",{className:"flex justify-between items-center py-3"},r.a.createElement("h5",{className:"font-normal"},"Available Items"),r.a.createElement("h5",null,"3432"))),r.a.createElement(c.a,{item:!0,sm:5,xs:12},r.a.createElement(N,null))),r.a.createElement(f.a,{className:"mt-6"}),r.a.createElement("div",{className:"flex justify-between items-center p-4"},r.a.createElement("h5",{className:"m-0"},"Purchase Order"),r.a.createElement(x.a,{size:"small",defaultValue:"this_year",disableUnderline:!0},r.a.createElement(g.a,{value:"this_year"},"This Year"),r.a.createElement(g.a,{value:"last_year"},"Last Year"))),r.a.createElement("div",{className:"flex justify-around"},r.a.createElement("div",{className:"py-3 text-center"},r.a.createElement("p",null,"Quantity Ordered"),r.a.createElement("h4",{className:"text-primary"},"432")),r.a.createElement(f.a,{orientation:"vertical",flexItem:!0}),r.a.createElement("div",{className:"py-3 text-center"},r.a.createElement("p",null,"Total Cost"),r.a.createElement("h4",{className:"text-primary"},"$",432432..toLocaleString()))))),r.a.createElement(c.a,{item:!0,sm:6,xs:12},r.a.createElement(d.a,null))),r.a.createElement(i.a,{className:"mt-5 mb-6",elevation:3},r.a.createElement("div",{className:"flex justify-between items-center p-4"},r.a.createElement("h5",{className:"m-0"},"Sales Order Summery"),r.a.createElement(x.a,{size:"small",defaultValue:"this_year",disableUnderline:!0},r.a.createElement(g.a,{value:"this_year"},"This Year"),r.a.createElement(g.a,{value:"last_year"},"Last Year"))),r.a.createElement(b,null)))},k=t(1127),I=t(52),j=t(2708),S=t(5),O=t(17),L=t(1492),T=t(2703),_=t(2704),U=t(2705),A=t(2706),z=t(2707),D=t(1166),B=Object(D.a)((function(e){e.palette,Object(O.a)(e,["palette"]);return{root:{"&:before":{display:"none !important"}}}})),C=function(e){var a=e.notification,t=e.isFirstIndex,l=e.isLastIndex,m=B();return r.a.createElement(n.Fragment,null,r.a.createElement(T.a,{classes:{root:m.root}},r.a.createElement(_.a,null,r.a.createElement(U.a,{color:"primary",variant:t||l?"default":"outlined"}),r.a.createElement(A.a,null)),r.a.createElement(z.a,null,r.a.createElement("p",{className:"mt-0 mb-5 text-muted uppercase"},Object(L.a)(new Date(a.timestamp),"dd MMM, yyyy")),r.a.createElement("h4",{className:"mt-0 mb-4"},a.title),r.a.createElement("p",{className:Object(S.default)({"m-0":!0,"pb-8":!l})},a.subtitle))))},M=[{title:"What is Lorem Ipsum?",subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",timestamp:"2020/09/15"},{title:"Why do we use it?",subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",timestamp:"2020/08/1"},{title:"Where can I get some?",subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",timestamp:"2020/07/05"},{title:"Where does it come from?",subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",timestamp:"2020/05/12"}],Y=function(){var e=Object(I.a)(),a=Object(k.a)(e.breakpoints.down("xs"));return r.a.createElement(i.a,{className:Object(S.default)({"max-w-900 mx-auto":!0,"p-10":!a}),elevation:3},r.a.createElement(j.a,{align:"left"},M.map((function(e,a){return r.a.createElement(C,{notification:e,isLastIndex:a===M.length-1,isFirstIndex:0===a,key:a})}))))};a.default=function(){var e=Object(n.useState)(0),a=Object(l.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:"analytics m-sm-30"},r.a.createElement(m.a,{className:"mt-4 mb-6",value:t,onChange:function(e,a){return c(a)},indicatorColor:"primary",textColor:"primary"},["Dashboard","Recent Updates"].map((function(e,a){return r.a.createElement(s.a,{className:"capitalize",value:a,label:e,key:a})}))),0===t&&r.a.createElement(w,null),1===t&&r.a.createElement(Y,null))}}}]);