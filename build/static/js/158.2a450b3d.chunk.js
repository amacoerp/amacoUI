(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[158],{1355:function(e,t,a){"use strict";var n=a(1),r=n.createContext();t.a=r},1382:function(e,t,a){"use strict";var n=a(6),r=a(3),i=a(1),l=(a(0),a(5)),c=a(11),o=a(15),s=a(33),d=a(1441),m=a(1355),u=i.forwardRef((function(e,t){var a,c,s=e.align,u=void 0===s?"inherit":s,p=e.classes,b=e.className,f=e.component,g=e.padding,v=e.scope,h=e.size,E=e.sortDirection,j=e.variant,O=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),y=i.useContext(d.a),N=i.useContext(m.a),x=N&&"head"===N.variant;f?(c=f,a=x?"columnheader":"cell"):c=x?"th":"td";var w=v;!w&&x&&(w="col");var k=g||(y&&y.padding?y.padding:"default"),C=h||(y&&y.size?y.size:"medium"),M=j||N&&N.variant,z=null;return E&&(z="asc"===E?"ascending":"descending"),i.createElement(c,Object(r.a)({ref:t,className:Object(l.default)(p.root,p[M],b,"inherit"!==u&&p["align".concat(Object(o.a)(u))],"default"!==k&&p["padding".concat(Object(o.a)(k))],"medium"!==C&&p["size".concat(Object(o.a)(C))],"head"===M&&y&&y.stickyHeader&&p.stickyHeader),"aria-sort":z,role:a,scope:w},O))}));t.a=Object(c.a)((function(e){return{root:Object(r.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.i)(Object(s.d)(e.palette.divider,1),.88):Object(s.a)(Object(s.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(u)},1384:function(e,t,a){"use strict";var n=a(6),r=a(3),i=a(1),l=(a(0),a(5)),c=a(11),o=a(1441),s=i.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,d=void 0===s?"table":s,m=e.padding,u=void 0===m?"default":m,p=e.size,b=void 0===p?"medium":p,f=e.stickyHeader,g=void 0!==f&&f,v=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),h=i.useMemo((function(){return{padding:u,size:b,stickyHeader:g}}),[u,b,g]);return i.createElement(o.a.Provider,{value:h},i.createElement(d,Object(r.a)({role:"table"===d?null:"table",ref:t,className:Object(l.default)(a.root,c,g&&a.stickyHeader)},v)))}));t.a=Object(c.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},1385:function(e,t,a){"use strict";var n=a(3),r=a(6),i=a(1),l=(a(0),a(5)),c=a(11),o=a(1355),s=a(33),d=i.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,d=void 0===s?"tr":s,m=e.hover,u=void 0!==m&&m,p=e.selected,b=void 0!==p&&p,f=Object(r.a)(e,["classes","className","component","hover","selected"]),g=i.useContext(o.a);return i.createElement(d,Object(n.a)({ref:t,className:Object(l.default)(a.root,c,g&&{head:a.head,footer:a.footer}[g.variant],u&&a.hover,b&&a.selected),role:"tr"===d?null:"row"},f))}));t.a=Object(c.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1386:function(e,t,a){"use strict";var n=a(3),r=a(6),i=a(1),l=(a(0),a(5)),c=a(11),o=a(1355),s={variant:"body"},d=i.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.component,m=void 0===d?"tbody":d,u=Object(r.a)(e,["classes","className","component"]);return i.createElement(o.a.Provider,{value:s},i.createElement(m,Object(n.a)({className:Object(l.default)(a.root,c),ref:t,role:"tbody"===m?null:"rowgroup"},u)))}));t.a=Object(c.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},1387:function(e,t,a){"use strict";var n=a(3),r=a(6),i=a(1),l=(a(0),a(5)),c=a(11),o=a(1355),s={variant:"head"},d=i.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.component,m=void 0===d?"thead":d,u=Object(r.a)(e,["classes","className","component"]);return i.createElement(o.a.Provider,{value:s},i.createElement(m,Object(n.a)({className:Object(l.default)(a.root,c),ref:t,role:"thead"===m?null:"rowgroup"},u)))}));t.a=Object(c.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},1388:function(e,t,a){"use strict";var n=a(3),r=a(6),i=a(34),l=a(1),c=(a(0),a(5)),o=a(11),s=l.forwardRef((function(e,t){var a=e.classes,i=e.className,o=e.component,s=void 0===o?"div":o,d=e.disableGutters,m=void 0!==d&&d,u=e.variant,p=void 0===u?"regular":u,b=Object(r.a)(e,["classes","className","component","disableGutters","variant"]);return l.createElement(s,Object(n.a)({className:Object(c.default)(a.root,a[p],i,!m&&a.gutters),ref:t},b))}));t.a=Object(o.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(i.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(s)},1420:function(e,t,a){"use strict";var n=a(3),r=a(6),i=a(1),l=(a(0),a(5)),c=a(11),o=a(33),s=i.forwardRef((function(e,t){var a=e.absolute,c=void 0!==a&&a,o=e.classes,s=e.className,d=e.component,m=void 0===d?"hr":d,u=e.flexItem,p=void 0!==u&&u,b=e.light,f=void 0!==b&&b,g=e.orientation,v=void 0===g?"horizontal":g,h=e.role,E=void 0===h?"hr"!==m?"separator":void 0:h,j=e.variant,O=void 0===j?"fullWidth":j,y=Object(r.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(m,Object(n.a)({className:Object(l.default)(o.root,s,"fullWidth"!==O&&o[O],c&&o.absolute,p&&o.flexItem,f&&o.light,"vertical"===v&&o.vertical),role:E,ref:t},y))}));t.a=Object(c.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(o.d)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},1441:function(e,t,a){"use strict";var n=a(1),r=n.createContext();t.a=r},1888:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return o}));var n=a(22),r=a.n(n),i=function(){return r.a.get("http://www.dataqueuesystems.com/amaco/amaco/public/api/products")},l=function(e){return r.a.get("/api/invoices",{data:e})},c=function(e){return r.a.post("/api/invoices/add",e)},o=function(e){return r.a.post("/api/invoices/update",e)}},2875:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a(1),i=a.n(r),l=a(1223),c=a(8),o=a(17),s=a(570),d=a(1196),m=a(1167),u=a(1420),p=a(1384),b=a(1387),f=a(1385),g=a(1382),v=a(1386),h=a(45),E=a(51),j=a(1888),O=a(1491),y=a(1166),N=a(5),x=Object(y.a)((function(e){e.palette,Object(o.a)(e,["palette"]);return{"@global":{"@media print":{"body, *, html":{visibility:"hidden"},"#print-area":{position:"fixed",top:0,left:0,right:0,height:"100%","& *":{visibility:"visible"}}}},invoiceViewer:{"& h5":{fontSize:15}}}})),w=function(e){var t=e.toggleInvoiceEditor,a=Object(r.useState)({}),o=Object(n.a)(a,2),y=o[0],w=o[1],k=Object(h.i)().id,C=x();Object(r.useEffect)((function(){"add"!==k&&Object(j.c)(k).then((function(e){w(Object(c.a)({},e.data))}))}),[k]);y.orderNo,y.buyer,y.seller;var M=y.item,z=void 0===M?[]:M,R=(y.status,y.vat,y.date);return i.a.createElement("div",{className:Object(N.default)("invoice-viewer py-4",C.invoiceViewer)},i.a.createElement("div",{className:"viewer_actions px-4 mb-5 flex items-center justify-between"},i.a.createElement(E.a,{to:"/invoice/list"},i.a.createElement(s.a,null,i.a.createElement(d.a,null,"arrow_back"))),i.a.createElement("div",null,i.a.createElement(m.a,{className:"mr-4 py-2",variant:"contained",color:"primary",onClick:function(){return t()}},"Edit Invoice"),i.a.createElement(m.a,{onClick:function(){return window.print()},className:"py-2",variant:"contained",color:"secondary"},"Print Invoice"))),i.a.createElement("div",{id:"print-area"},i.a.createElement("div",{className:"viewer__order-info px-4 mb-4 flex justify-between"},i.a.createElement("div",null,i.a.createElement("p",{className:"mb-4"},"Customer Name"),i.a.createElement("p",{className:"mb-0"},"# ")),i.a.createElement("div",{className:"text-right"},i.a.createElement("h5",{className:"font-normal mb-4 capitalize"},i.a.createElement("strong",null,"Requested date: ")," ",i.a.createElement("span",null,R?Object(O.a)(new Date(R).getTime(),"MMMM dd, yyyy"):"")),i.a.createElement("h5",{className:"font-normal capitalize"},i.a.createElement("strong",null,"Due date: ")," ",i.a.createElement("span",null,R?Object(O.a)(new Date(R).getTime(),"MMMM dd, yyyy"):"")))),i.a.createElement(u.a,null),i.a.createElement(l.a,{className:"mb-4",elevation:0},i.a.createElement(p.a,null,i.a.createElement(b.a,null,i.a.createElement(f.a,null,i.a.createElement(g.a,{className:"pl-sm-24"},"#"),i.a.createElement(g.a,{className:"px-0"},"Item Name"),i.a.createElement(g.a,{className:"px-0"},"Description"),i.a.createElement(g.a,{className:"px-0"},"Quantity"),i.a.createElement(g.a,{className:"px-0"},"Action"))),i.a.createElement(v.a,null,z.map((function(e,t){return e.unit*e.price,i.a.createElement(f.a,{key:t},i.a.createElement(g.a,{className:"pl-sm-24 capitalize",align:"left"},t+1),i.a.createElement(g.a,{className:"pl-0 capitalize",align:"left"},e.name),i.a.createElement(g.a,{className:"pl-0 capitalize",align:"left"},e.price),i.a.createElement(g.a,{className:"pl-0 capitalize"},e.unit),i.a.createElement(g.a,{className:"pl-0"},i.a.createElement(E.a,{to:"/sales/rfq-form/rfqanalysis"},i.a.createElement(d.a,null,"search"))))})))))))},k=a(13),C=a(56),M=a(1352),z=a(1503),R=a(1421),I=Object(y.a)((function(e){e.palette,Object(o.a)(e,["palette"]);return{invoiceEditor:{"& h5":{fontSize:15}}}})),q={id:"",orderNo:"",buyer:{name:"",address:""},seller:{name:"",address:""},item:[],status:"",vat:"",date:new Date,currency:"",loading:!1},S=function(e){var t=e.isNewInvoice,a=e.toggleInvoiceEditor,l=Object(r.useState)(!0),o=Object(n.a)(l,2),s=o[0],d=o[1],E=Object(r.useState)(q),O=Object(n.a)(E,2),y=O[0],x=O[1],w=Object(h.g)(),S=Object(h.i)().id,T=I(),D=Object(r.useCallback)((function(){var e=Math.random().toString(),t=e.substr(2,e.length-1);x((function(e){return Object(c.a)(Object(c.a)({},e),{},{id:t})}))}),[]),A=function(e,t){var a=Object(k.a)(y.item);a.map((function(a,n){return t===n&&(a[e.target.name]=e.target.value),a})),x(Object(c.a)(Object(c.a)({},y),{},{item:a}))},H=function(e){x(Object(c.a)(Object(c.a)({},y),{},{date:e}))};Object(r.useEffect)((function(){t?D():Object(j.c)(S).then((function(e){var t=e.data;s&&x(Object(c.a)({},t))}))}),[S,t,s,D]),Object(r.useEffect)((function(){return function(){return d(!1)}}),[]);var W=y.orderNo,V=y.buyer,L=(y.seller,y.item),P=void 0===L?[]:L,_=(y.status,y.vat,y.date),B=(y.currency,y.loading);return i.a.createElement("div",{className:Object(N.default)("invoice-viewer py-4",T.invoiceEditor)},i.a.createElement(C.ValidatorForm,{onSubmit:function(){x(Object(c.a)(Object(c.a)({},y),{},{loading:!0}));var e=Object(c.a)({},y);delete e.loading,t?Object(j.a)(e).then((function(){x(Object(c.a)(Object(c.a)({},y),{},{loading:!1})),w.push("/invoice/".concat(y.id)),a()})):Object(j.d)(e).then((function(){x(Object(c.a)(Object(c.a)({},y),{},{loading:!1})),a()}))},onError:function(e){return null}},i.a.createElement("div",{className:"viewer_actions px-4 flex justify-end"},i.a.createElement("div",{className:"mb-6"},i.a.createElement(m.a,{type:"button",className:"mr-4 py-2",variant:"text",onClick:function(){return a()}},"Cancel"),i.a.createElement(m.a,{type:"submit",className:"py-2",variant:"contained",color:"primary",disabled:B},"Save"))),i.a.createElement("div",{className:"viewer__order-info px-4 mb-4 flex justify-between"},i.a.createElement("div",null,i.a.createElement("h5",{className:"mb-2"},"Customer Name"),i.a.createElement(C.TextValidator,{label:"Customer Name.",type:"text",fullWidth:!0,name:"orderNo",value:W,onChange:function(e){e.persist(),x(Object(c.a)(Object(c.a)({},y),{},{[e.target.name]:e.target.value}))},validators:["required"],errorMessages:["this field is required"]}),i.a.createElement("h5",{className:"mb-2"},"Address"),i.a.createElement(C.TextValidator,{label:"Buyer Address",onChange:function(e){return function(e,t){e.persist(),x(Object(c.a)(Object(c.a)({},y),{},{[t]:Object(c.a)(Object(c.a)({},y[t]),{},{[e.target.name]:e.target.value})}))}(e,"buyer")},type:"text",name:"address",fullWidth:!0,multiline:!0,rowsMax:4,value:V?V.address:null,validators:["required"],errorMessages:["this field is required"]})),i.a.createElement("div",null,i.a.createElement("div",{className:"text-right"},i.a.createElement("h5",{className:"font-normal"},i.a.createElement("strong",null,"Requested date: "))),i.a.createElement(M.a,{utils:R.a},i.a.createElement(z.a,{margin:"none",id:"mui-pickers-date",label:"Requested Date",inputVariant:"standard",type:"text",autoOk:!0,value:_,fullWidth:!0,format:"MMMM dd, yyyy",onChange:H,KeyboardButtonProps:{"aria-label":"change date"}})),i.a.createElement("div",{className:"text-right"},i.a.createElement("h5",{className:"font-normal"},i.a.createElement("strong",null,"Due date: "))),i.a.createElement(M.a,{utils:R.a},i.a.createElement(z.a,{margin:"none",id:"mui-pickers-date",label:"Due Date",inputVariant:"standard",type:"text",autoOk:!0,value:_,fullWidth:!0,format:"MMMM dd, yyyy",onChange:H,KeyboardButtonProps:{"aria-label":"change date"}})))),i.a.createElement(u.a,null),i.a.createElement(p.a,{className:"mb-4"},i.a.createElement(b.a,null,i.a.createElement(f.a,{className:"bg-default"},i.a.createElement(g.a,{className:"pl-sm-24"},"#"),i.a.createElement(g.a,{className:"px-0"},"Item Name"),i.a.createElement(g.a,{className:"px-0"},"description"),i.a.createElement(g.a,{className:"px-0"},"Quantity"),i.a.createElement(g.a,{className:"px-0"},"Action"))),i.a.createElement(v.a,null,P.map((function(e,t){return e.price*e.unit,i.a.createElement(f.a,{key:t},i.a.createElement(g.a,{className:"pl-sm-24 capitalize",align:"left"},t+1),i.a.createElement(g.a,{className:"pl-0 capitalize",align:"left"},i.a.createElement(C.TextValidator,{label:"Item Name",onChange:function(e){return A(e,t)},type:"text",name:"name",fullWidth:!0,value:e?e.name:null,validators:["required"],errorMessages:["this field is required"]})),i.a.createElement(g.a,{className:"pl-0 capitalize",align:"left"},i.a.createElement(C.TextValidator,{label:"Item Price",onChange:function(e){return A(e,t)},type:"number",name:"price",fullWidth:!0,value:e?e.price:null,validators:["required"],errorMessages:["this field is required"]})),i.a.createElement(g.a,{className:"pl-0 capitalize",align:"left"},i.a.createElement(C.TextValidator,{label:"Item Unit",onChange:function(e){return A(e,t)},type:"number",name:"unit",fullWidth:!0,value:e?e.unit:null,validators:["required"],errorMessages:["this field is required"]})),i.a.createElement(g.a,{className:"pl-0 capitalize",align:"left"},i.a.createElement(m.a,{onClick:function(){return function(e){var t=Object(k.a)(y.item);t.splice(e,1),x(Object(c.a)(Object(c.a)({},y),{},{item:t}))}(t)}},"Delete")))})))),i.a.createElement("div",{className:"flex justify-end px-4 mb-4"},i.a.createElement(m.a,{onClick:function(){var e=Object(k.a)(y.item);e.push({name:"",unit:"",price:""}),x(Object(c.a)(Object(c.a)({},y),{},{item:e}))}},"Add Item"))))};t.default=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)(!1),s=Object(n.a)(o,2),d=s[0],m=s[1],u=Object(h.i)().id,p=function(){c(!a),m(!1)};return Object(r.useEffect)((function(){"add"===u&&(c(!0),m(!0))}),[u]),i.a.createElement(l.a,{elevation:6,className:"m-sm-30"},a?i.a.createElement(S,{toggleInvoiceEditor:p,isNewInvoice:d}):i.a.createElement(w,{toggleInvoiceEditor:p}))}}}]);