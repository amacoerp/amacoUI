(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[165],{1354:function(e,t,a){"use strict";var l=a(1),n=l.createContext();t.a=n},1382:function(e,t,a){"use strict";var l=a(6),n=a(3),i=a(1),r=(a(0),a(5)),c=a(11),o=a(15),s=a(33),d=a(1440),u=a(1354),m=i.forwardRef((function(e,t){var a,c,s=e.align,m=void 0===s?"inherit":s,p=e.classes,b=e.className,v=e.component,g=e.padding,f=e.scope,h=e.size,y=e.sortDirection,x=e.variant,O=Object(l.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),E=i.useContext(d.a),j=i.useContext(u.a),N=j&&"head"===j.variant;v?(c=v,a=N?"columnheader":"cell"):c=N?"th":"td";var w=f;!w&&N&&(w="col");var _=g||(E&&E.padding?E.padding:"default"),z=h||(E&&E.size?E.size:"medium"),q=x||j&&j.variant,S=null;return y&&(S="asc"===y?"ascending":"descending"),i.createElement(c,Object(n.a)({ref:t,className:Object(r.default)(p.root,p[q],b,"inherit"!==m&&p["align".concat(Object(o.a)(m))],"default"!==_&&p["padding".concat(Object(o.a)(_))],"medium"!==z&&p["size".concat(Object(o.a)(z))],"head"===q&&E&&E.stickyHeader&&p.stickyHeader),"aria-sort":S,role:a,scope:w},O))}));t.a=Object(c.a)((function(e){return{root:Object(n.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.i)(Object(s.d)(e.palette.divider,1),.88):Object(s.a)(Object(s.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(m)},1384:function(e,t,a){"use strict";var l=a(6),n=a(3),i=a(1),r=(a(0),a(5)),c=a(11),o=a(1440),s=i.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,d=void 0===s?"table":s,u=e.padding,m=void 0===u?"default":u,p=e.size,b=void 0===p?"medium":p,v=e.stickyHeader,g=void 0!==v&&v,f=Object(l.a)(e,["classes","className","component","padding","size","stickyHeader"]),h=i.useMemo((function(){return{padding:m,size:b,stickyHeader:g}}),[m,b,g]);return i.createElement(o.a.Provider,{value:h},i.createElement(d,Object(n.a)({role:"table"===d?null:"table",ref:t,className:Object(r.default)(a.root,c,g&&a.stickyHeader)},f)))}));t.a=Object(c.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(n.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},1385:function(e,t,a){"use strict";var l=a(3),n=a(6),i=a(1),r=(a(0),a(5)),c=a(11),o=a(1354),s=a(33),d=i.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,d=void 0===s?"tr":s,u=e.hover,m=void 0!==u&&u,p=e.selected,b=void 0!==p&&p,v=Object(n.a)(e,["classes","className","component","hover","selected"]),g=i.useContext(o.a);return i.createElement(d,Object(l.a)({ref:t,className:Object(r.default)(a.root,c,g&&{head:a.head,footer:a.footer}[g.variant],m&&a.hover,b&&a.selected),role:"tr"===d?null:"row"},v))}));t.a=Object(c.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1386:function(e,t,a){"use strict";var l=a(3),n=a(6),i=a(1),r=(a(0),a(5)),c=a(11),o=a(1354),s={variant:"body"},d=i.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.component,u=void 0===d?"tbody":d,m=Object(n.a)(e,["classes","className","component"]);return i.createElement(o.a.Provider,{value:s},i.createElement(u,Object(l.a)({className:Object(r.default)(a.root,c),ref:t,role:"tbody"===u?null:"rowgroup"},m)))}));t.a=Object(c.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},1387:function(e,t,a){"use strict";var l=a(3),n=a(6),i=a(1),r=(a(0),a(5)),c=a(11),o=a(1354),s={variant:"head"},d=i.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.component,u=void 0===d?"thead":d,m=Object(n.a)(e,["classes","className","component"]);return i.createElement(o.a.Provider,{value:s},i.createElement(u,Object(l.a)({className:Object(r.default)(a.root,c),ref:t,role:"thead"===u?null:"rowgroup"},m)))}));t.a=Object(c.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},1420:function(e,t,a){"use strict";var l=a(3),n=a(6),i=a(1),r=(a(0),a(5)),c=a(11),o=a(33),s=i.forwardRef((function(e,t){var a=e.absolute,c=void 0!==a&&a,o=e.classes,s=e.className,d=e.component,u=void 0===d?"hr":d,m=e.flexItem,p=void 0!==m&&m,b=e.light,v=void 0!==b&&b,g=e.orientation,f=void 0===g?"horizontal":g,h=e.role,y=void 0===h?"hr"!==u?"separator":void 0:h,x=e.variant,O=void 0===x?"fullWidth":x,E=Object(n.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(u,Object(l.a)({className:Object(r.default)(o.root,s,"fullWidth"!==O&&o[O],c&&o.absolute,p&&o.flexItem,v&&o.light,"vertical"===f&&o.vertical),role:y,ref:t},E))}));t.a=Object(c.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(o.d)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},1440:function(e,t,a){"use strict";var l=a(1),n=l.createContext();t.a=n},2727:function(e,t,a){"use strict";a.r(t);var l=a(13),n=a(8),i=a(20),r=a(17),c=a(1),o=a.n(c),s=a(1223),d=a(1167),u=a(1196),m=a(1420),p=a(1384),b=a(1387),v=a(1385),g=a(1382),f=a(1386),h=a(538),y=a(56),x=a(45),O=a(1166),E=a(5),j=a(66),N=a(4),w=a(356),_=a.n(w),z=a(1392),q=a.n(z),S=Object(O.a)((function(e){e.palette;var t=Object(r.a)(e,["palette"]);return{invoiceEditor:{"& h5":{fontSize:15}},root:{width:"100px"},heading:{fontSize:t.typography.pxToRem(15),fontWeight:t.typography.fontWeightRegular}}})),I={id:"",orderNo:"",buyer:{name:"",address:""},seller:{name:"",address:""},item:[],status:"",date:new Date,currency:"",loading:!1};t.default=function(e){var t=e.isNewInvoice,a=(e.toggleInvoiceEditor,Object(c.useState)(!0)),r=Object(i.a)(a,2),O=r[0],w=(r[1],Object(c.useState)(I)),z=Object(i.a)(w,2),C=z[0],k=z[1],R=Object(c.useState)(""),T=Object(i.a)(R,2),A=T[0],M=T[1],D=new Date,F=Object(c.useState)(""),H=Object(i.a)(F,2),W=H[0],L=H[1],V=Object(c.useState)(""),P=Object(i.a)(V,2),Y=P[0],Q=P[1],B=Object(c.useState)("0"),$=Object(i.a)(B,2),J=$[0],U=($[1],Object(c.useState)([])),G=Object(i.a)(U,2),K=(G[0],G[1]),X=Object(c.useState)([]),Z=Object(i.a)(X,2),ee=(Z[0],Z[1],Object(c.useState)("0")),te=Object(i.a)(ee,2),ae=te[0],le=te[1],ne=Object(c.useState)(!1),ie=Object(i.a)(ne,2),re=ie[0],ce=(ie[1],Object(c.useState)(!1)),oe=Object(i.a)(ce,2),se=(oe[0],oe[1]),de=Object(x.g)(),ue=Object(x.i)().id,me=Object(j.a)().user,pe=S(),be=Object(c.useCallback)((function(){var e=Math.random().toString(),t=e.substr(2,e.length-1);k((function(e){return Object(n.a)(Object(n.a)({},e),{},{id:t})}))}),[]);Object(c.useEffect)((function(){N.g.get("products").then((function(e){var t=e.data;K(t)})),N.g.get("invoice/"+ue).then((function(e){var t=e.data;M(t[0].party.firm_name),L(t[0].quotation_no),Q(t[0].po_number),le(t[0].discount_in_p),k(Object(n.a)(Object(n.a)({},C),{},{item:t[0].invoice_detail}));Object(l.a)(C.item)}))}),[ue,t,O,be]);var ve=0,ge=0,fe=0,he=C.item,ye=void 0===he?[]:he,xe=(C.quote,C.vat),Oe=C.loading;return o.a.createElement("div",{className:"m-sm-30"},o.a.createElement(s.a,{elevation:3},o.a.createElement("div",{className:Object(E.default)("invoice-viewer py-4",pe.invoiceEditor)},o.a.createElement(y.ValidatorForm,{onSubmit:function(){k(Object(n.a)(Object(n.a)({},C),{},{loading:!0}));var e=[];delete Object(n.a)({},C).loading;var t=Object(l.a)(C.item);fe>0?(se(!0),e.is_partial=!0):(e.is_partial=!1,e.is_completed=!0),e.delivery_note_details=t,e.invoice_id=parseInt(ue),e.discount_in_percentage=ae,e.total_value=parseFloat(ve).toFixed(2),e.grand_total=ge,e.vat_in_value=parseFloat(xe).toFixed(2),e.div_id=localStorage.getItem("division"),e.user_id=me.id;var a=Object.assign({},e);console.log(t),N.g.post("invoce_note",a).then((function(e){_.a.fire({title:"Success",type:"success",icon:"success",text:"Data saved successfully."}),de.push(N.x+"/dnoteview")})).catch((function(e){}))},onError:function(e){return null}},o.a.createElement("div",{className:"viewer_actions px-4 flex justify-between"},o.a.createElement("div",{className:"mb-6"},o.a.createElement("h3",{align:"left"},"DELIVERY NOTE")),o.a.createElement("div",{className:"mb-6"},o.a.createElement(d.a,{className:"mr-4 py-2",variant:"outlined",color:"secondary",onClick:function(){de.push(N.x+"/quote/".concat(ue,"/accept"))}},o.a.createElement(u.a,null,"cancel")," CANCEL"),o.a.createElement(d.a,{type:"submit",className:"py-2",variant:"outlined",color:"primary",disabled:Oe},o.a.createElement(u.a,null,"save")," SAVE"))),o.a.createElement("div",{className:"viewer__order-info px-4 mb-4 flex justify-between"},o.a.createElement("div",null,o.a.createElement("h5",{className:"font-normal capitalize"},o.a.createElement("strong",null,"Quotation Number: ")," ",o.a.createElement("span",null,W)),o.a.createElement("h5",{className:"font-normal capitalize"},o.a.createElement("strong",null,"Company Name: ")," ",o.a.createElement("span",null,A))),o.a.createElement("div",null,o.a.createElement("div",{className:"text-right"},o.a.createElement("h5",{className:"font-normal"},o.a.createElement("strong",null,"Due date: "),o.a.createElement("span",null,q()(D).format("DD MMM YYYY")))),o.a.createElement("div",{className:"text-right"},o.a.createElement("h5",{className:"font-normal"},o.a.createElement("strong",null,"P.O Number: "),o.a.createElement("span",null,Y))))),o.a.createElement(m.a,null),o.a.createElement(p.a,{className:"mb-4"},o.a.createElement(b.a,null,o.a.createElement(v.a,{className:"bg-default"},o.a.createElement(g.a,{className:"pl-sm-24",style:{width:70},align:"left"},"S.NO."),o.a.createElement(g.a,{className:"px-0",style:{width:"400px"}},"RFQ DESCRIPTION"),o.a.createElement(g.a,{className:"px-0",style:{width:70}},"UOM"),o.a.createElement(g.a,{className:"px-0",style:{width:"150px"}},"QUANTITY"),o.a.createElement(g.a,{className:"px-0",style:{width:"150px"}},"DELIVERED QTY"),o.a.createElement(g.a,{className:"px-0",style:{width:"150px"}},"DELIVERING QTY"),o.a.createElement(g.a,{className:"px-0",style:{width:"150px"}},"BALANCE QTY"))),o.a.createElement(f.a,null,ye.map((function(e,t){return fe+=parseInt(e.balance),re?(ve+=parseFloat(e.total_amount),xe=(15*(ve-parseFloat(J*ve/100))/100).toFixed(2),ge=(ve-parseFloat(J*ve/100)+parseFloat(xe)).toFixed(2)):(ve+=parseFloat(e.total_amount),xe=(15*ve/100).toFixed(2),ge=(ve+15*ve/100).toFixed(2)),o.a.createElement(v.a,{key:t},o.a.createElement(g.a,{className:"pl-sm-24 capitalize",align:"left",style:{width:50}},t+1),o.a.createElement(g.a,{className:"pl-0 mr-2 capitalize",align:"left",style:{width:"300px"}},o.a.createElement(y.TextValidator,{label:"description",type:"text",name:"description",variant:"outlined",size:"small",fullWidth:!0,value:e?e.description:null,validators:["required"],errorMessages:["this field is required"]})),o.a.createElement(g.a,{className:"pl-0 capitalize",align:"left",style:{width:70}},o.a.createElement(y.TextValidator,{label:"UOM",type:"text",variant:"outlined",inputProps:{min:0,style:{textAlign:"center"}},size:"small",name:"uom",value:(null===e||void 0===e?void 0:e.unit_of_measure)?null===e||void 0===e?void 0:e.unit_of_measure:" "})),o.a.createElement(g.a,{className:"pl-0 capitalize",align:"center",style:{width:"150px"}},o.a.createElement(y.TextValidator,{label:"Quantity",type:"number",variant:"outlined",inputProps:{min:0,style:{textAlign:"center"}},size:"small",fullWidth:!0,name:"quantity",align:"center",min:"1",max:e.quantity,value:e?e.quantity:"",validators:["required"],errorMessages:["this field is required"]})),o.a.createElement(g.a,{className:"pl-0 capitalize",align:"center",style:{width:"150px"}},o.a.createElement(y.TextValidator,{label:"delivered quantity",type:"number",name:"delivered_quantity",align:"center",inputProps:{min:0,style:{textAlign:"center"}},fullWidth:!0,variant:"outlined",size:"small",value:e.delivered_quantity?e.delivered_quantity:0,validators:["required"],errorMessages:["this field is required"]})),o.a.createElement(g.a,{className:"pl-0 capitalize",align:"center",style:{width:"150px"}},o.a.createElement(y.TextValidator,{label:"delivery quantity",onChange:function(e){return function(e,t){e.persist();var a=Object(l.a)(C.item);a.map((function(a,l){if(t===l){var n=parseInt(a.quantity)-parseInt(a.delivered_quantity);return parseInt(e.target.value)>=parseInt(n)?(a[e.target.name]=parseInt(a.quantity)-parseInt(a.delivered_quantity),a.balance=0):e.target.value<=0?(a[e.target.name]=n,a.balance=0):(a[e.target.name]=e.target.value,a.balance=parseInt(a.quantity)-parseInt(a.delivered_quantity)-e.target.value),a}})),k(Object(n.a)(Object(n.a)({},C),{},{item:a}))}(e,t)},type:"number",inputProps:{min:0,style:{textAlign:"center"}},name:"delivering_quantity",fullWidth:!0,required:!0,variant:"outlined",size:"small",value:e.delivering_quantity})),o.a.createElement(g.a,{className:"pl-0 capitalize",align:"left"},o.a.createElement(h.a,{label:"Balance Qty",type:"text",variant:"outlined",size:"small",name:"balance",fullWidth:!0,value:e.balance?e.balance:0})))})))),o.a.createElement("div",{className:"flex justify-end px-4 mb-4"},o.a.createElement("div",{className:"flex "},o.a.createElement("div",null)))))))}}}]);