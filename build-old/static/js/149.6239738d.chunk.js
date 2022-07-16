(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[149,154],{1566:function(e,t,a){"use strict";var n=a(0),r=n.createContext();t.a=r},1630:function(e,t,a){"use strict";var n=a(6),r=a(3),l=a(0),i=a(5),c=a(11),o=a(1960),s=l.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,d=void 0===s?"table":s,u=e.padding,m=void 0===u?"normal":u,p=e.size,b=void 0===p?"medium":p,f=e.stickyHeader,v=void 0!==f&&f,g=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),O=l.useMemo((function(){return{padding:m,size:b,stickyHeader:v}}),[m,b,v]);return l.createElement(o.a.Provider,{value:O},l.createElement(d,Object(r.a)({role:"table"===d?null:"table",ref:t,className:Object(i.default)(a.root,c,v&&a.stickyHeader)},g)))}));t.a=Object(c.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},1631:function(e,t,a){"use strict";var n=a(3),r=a(6),l=a(0),i=a(5),c=a(11),o=a(1566),s=a(41),d=l.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,d=void 0===s?"tr":s,u=e.hover,m=void 0!==u&&u,p=e.selected,b=void 0!==p&&p,f=Object(r.a)(e,["classes","className","component","hover","selected"]),v=l.useContext(o.a);return l.createElement(d,Object(n.a)({ref:t,className:Object(i.default)(a.root,c,v&&{head:a.head,footer:a.footer}[v.variant],m&&a.hover,b&&a.selected),role:"tr"===d?null:"row"},f))}));t.a=Object(c.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.a)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1632:function(e,t,a){"use strict";var n=a(3),r=a(6),l=a(0),i=a(5),c=a(11),o=a(1566),s={variant:"body"},d=l.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.component,u=void 0===d?"tbody":d,m=Object(r.a)(e,["classes","className","component"]);return l.createElement(o.a.Provider,{value:s},l.createElement(u,Object(n.a)({className:Object(i.default)(a.root,c),ref:t,role:"tbody"===u?null:"rowgroup"},m)))}));t.a=Object(c.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},1635:function(e,t,a){"use strict";var n=a(6),r=a(3),l=a(0),i=a(5),c=a(11),o=a(15),s=a(41),d=a(1960),u=a(1566),m=l.forwardRef((function(e,t){var a,c,s=e.align,m=void 0===s?"inherit":s,p=e.classes,b=e.className,f=e.component,v=e.padding,g=e.scope,O=e.size,j=e.sortDirection,h=e.variant,y=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),x=l.useContext(d.a),E=l.useContext(u.a),N=E&&"head"===E.variant;f?(c=f,a=N?"columnheader":"cell"):c=N?"th":"td";var w=g;!w&&N&&(w="col");var S=v||(x&&x.padding?x.padding:"normal"),D=O||(x&&x.size?x.size:"medium"),z=h||E&&E.variant,T=null;return j&&(T="asc"===j?"ascending":"descending"),l.createElement(c,Object(r.a)({ref:t,className:Object(i.default)(p.root,p[z],b,"inherit"!==m&&p["align".concat(Object(o.a)(m))],"normal"!==S&&p["padding".concat(Object(o.a)(S))],"medium"!==D&&p["size".concat(Object(o.a)(D))],"head"===z&&x&&x.stickyHeader&&p.stickyHeader),"aria-sort":T,role:a,scope:w},y))}));t.a=Object(c.a)((function(e){return{root:Object(r.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.j)(Object(s.a)(e.palette.divider,1),.88):Object(s.b)(Object(s.a)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(m)},1636:function(e,t,a){"use strict";var n=a(3),r=a(6),l=a(0),i=a(5),c=a(11),o=a(1566),s={variant:"head"},d=l.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.component,u=void 0===d?"thead":d,m=Object(r.a)(e,["classes","className","component"]);return l.createElement(o.a.Provider,{value:s},l.createElement(u,Object(n.a)({className:Object(i.default)(a.root,c),ref:t,role:"thead"===u?null:"rowgroup"},m)))}));t.a=Object(c.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},1656:function(e,t,a){"use strict";var n=a(3),r=a(6),l=a(35),i=a(0),c=a(5),o=a(11),s=i.forwardRef((function(e,t){var a=e.classes,l=e.className,o=e.component,s=void 0===o?"div":o,d=e.disableGutters,u=void 0!==d&&d,m=e.variant,p=void 0===m?"regular":m,b=Object(r.a)(e,["classes","className","component","disableGutters","variant"]);return i.createElement(s,Object(n.a)({className:Object(c.default)(a.root,a[p],l,!u&&a.gutters),ref:t},b))}));t.a=Object(o.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(l.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(s)},1960:function(e,t,a){"use strict";var n=a(0),r=n.createContext();t.a=r},2018:function(e,t,a){"use strict";var n=a(3),r=a(6),l=a(0),i=a(5),c=a(11),o=a(41),s=l.forwardRef((function(e,t){var a=e.absolute,c=void 0!==a&&a,o=e.classes,s=e.className,d=e.component,u=void 0===d?"hr":d,m=e.flexItem,p=void 0!==m&&m,b=e.light,f=void 0!==b&&b,v=e.orientation,g=void 0===v?"horizontal":v,O=e.role,j=void 0===O?"hr"!==u?"separator":void 0:O,h=e.variant,y=void 0===h?"fullWidth":h,x=Object(r.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return l.createElement(u,Object(n.a)({className:Object(i.default)(o.root,s,"fullWidth"!==y&&o[y],c&&o.absolute,p&&o.flexItem,f&&o.light,"vertical"===g&&o.vertical),role:j,ref:t},x))}));t.a=Object(c.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(o.a)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},2039:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(35),r=a(0),l=a(1518),i=a(5),c=(a(3),a(6),a(687)),o=a(2017),s=a(1654),d=(a(1650),a(89),a(1652)),u=(a(408),a(150),a(1513),a(1514),a(1515),Object(c.a)({toolbar:{flexDirection:"column",alignItems:"flex-start"},toolbarLandscape:{padding:16},dateLandscape:{marginRight:16}},{name:"MuiPickersDatePickerRoot"})),m=function(e){var t=e.date,a=e.views,n=e.setOpenView,c=e.isLandscape,d=e.openView,m=Object(l.b)(),p=u(),b=Object(r.useMemo)((function(){return Object(s.d)(a)}),[a]),f=Object(r.useMemo)((function(){return Object(s.b)(a)}),[a]);return Object(r.createElement)(o.b,{isLandscape:c,className:Object(i.default)(!b&&p.toolbar,c&&p.toolbarLandscape)},Object(r.createElement)(o.c,{variant:b?"h3":"subtitle1",onClick:function(){return n("year")},selected:"year"===d,label:m.getYearText(t)}),!b&&!f&&Object(r.createElement)(o.c,{variant:"h4",selected:"date"===d,onClick:function(){return n("date")},align:c?"left":"center",label:m.getDatePickerHeaderText(t),className:Object(i.default)(c&&p.dateLandscape)}),f&&Object(r.createElement)(o.c,{variant:"h4",onClick:function(){return n("month")},selected:"month"===d,label:m.getMonthText(t)}))};function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var b=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},d.c,{openTo:"date",views:["year","date"]});function f(e){var t=Object(l.b)();return{getDefaultFormat:function(){return Object(s.c)(e.views,t)}}}var v=Object(o.g)({useOptions:f,Input:o.d,useState:o.i,DefaultToolbarComponent:m}),g=Object(o.g)({useOptions:f,Input:o.a,useState:o.e,DefaultToolbarComponent:m});v.defaultProps=b,g.defaultProps=b},2107:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(2124);function r(e){return Object(n.a)(e)}},2124:function(e,t,a){"use strict";function n(e){return e}a.d(t,"a",(function(){return n}))},3353:function(e,t,a){"use strict";a.r(t);a(16);var n=a(13),r=a(7),l=a(18),i=a(19),c=a(0),o=a.n(c),s=a(678),d=a(1417),u=a(598),m=a(2018),p=a(1630),b=a(1636),f=a(1631),v=a(1635),g=a(1632),O=a(53),j=a(1518),h=a(2039),y=a(1668),x=a(4),E=a(31),N=a(687),w=a(5),S=(a(26),a(149)),D=a.n(S),z=a(1660),T=a.n(z),_=["palette"],k=Object(N.a)((function(e){e.palette;var t=Object(i.a)(e,_);return{invoiceEditor:{"& h5":{fontSize:15}},root:{width:"100px"},heading:{fontSize:t.typography.pxToRem(15),fontWeight:t.typography.fontWeightRegular}}})),M={id:"",orderNo:"",buyer:{name:"",address:""},seller:{name:"",address:""},item:[],status:"",date:new Date,currency:"",loading:!1};t.default=function(e){var t=e.isNewInvoice,a=(e.toggleInvoiceEditor,Object(c.useState)(!0)),i=Object(l.a)(a,2),N=i[0],S=(i[1],Object(c.useState)(M)),z=Object(l.a)(S,2),_=z[0],C=z[1],P=Object(c.useState)([]),R=Object(l.a)(P,2),q=(R[0],R[1],Object(c.useState)([])),I=Object(l.a)(q,2),F=(I[0],I[1],Object(c.useState)("")),V=Object(l.a)(F,2),W=(V[0],V[1],Object(c.useState)("")),A=Object(l.a)(W,2),H=A[0],L=A[1],Y=new Date,G=Object(c.useState)(""),U=Object(l.a)(G,2),$=(U[0],U[1]),B=Object(c.useState)(""),J=Object(l.a)(B,2),Q=J[0],K=J[1],X=Object(c.useState)(""),Z=Object(l.a)(X,2),ee=(Z[0],Z[1],Object(c.useState)("")),te=Object(l.a)(ee,2),ae=te[0],ne=te[1],re=Object(c.useState)([]),le=Object(l.a)(re,2),ie=(le[0],le[1],Object(c.useState)("0")),ce=Object(l.a)(ie,2),oe=ce[0],se=(ce[1],Object(c.useState)([])),de=Object(l.a)(se,2),ue=(de[0],de[1]),me=Object(c.useState)([]),pe=Object(l.a)(me,2),be=(pe[0],pe[1],Object(c.useState)("3 Days")),fe=Object(l.a)(be,2),ve=(fe[0],fe[1],Object(c.useState)("100 %Advance")),ge=Object(l.a)(ve,2),Oe=(ge[0],ge[1],Object(c.useState)("NA")),je=Object(l.a)(Oe,2),he=(je[0],je[1],Object(c.useState)("Within 2-3 Days from the Date of PO")),ye=Object(l.a)(he,2),xe=(ye[0],ye[1],Object(c.useState)("DDP-Delivery Duty Paid To CATCO Office")),Ee=Object(l.a)(xe,2),Ne=(Ee[0],Ee[1],Object(c.useState)("0")),we=Object(l.a)(Ne,2),Se=we[0],De=we[1],ze=Object(c.useState)(T()(new Date).format("DD MMM YYYY")),Te=Object(l.a)(ze,2),_e=Te[0],ke=Te[1],Me=Object(c.useState)(!1),Ce=Object(l.a)(Me,2),Pe=Ce[0],Re=(Ce[1],Object(E.i)().id),qe=k(),Ie=o.a.useState(!1),Fe=Object(l.a)(Ie,2),Ve=(Fe[0],Fe[1],Object(E.g)()),We=Object(c.useCallback)((function(){var e=Math.random().toString(),t=e.substr(2,e.length-1);C((function(e){return Object(r.a)(Object(r.a)({},e),{},{id:t})}))}),[]);Object(c.useEffect)((function(){x.g.get("products").then((function(e){var t=e.data;ue(t)})),x.g.get("purchase-quotation/"+Re).then((function(e){var t=e.data;L(t[0].party.firm_name),$(t[0].quotation_no),K(t[0].po_number),De(t[0].discount_in_p),C(Object(r.a)(Object(r.a)({},_),{},{item:t[0].quotation_details}))}))}),[Re,t,N,We]);var Ae=0,He=0,Le=(_.orderNo,_.net_amount,_.buyer,_.seller,_.item),Ye=void 0===Le?[]:Le,Ge=(_.quote,_.status,_.vat),Ue=(_.date,_.currency,_.loading);_.margin;return o.a.createElement("div",{className:"m-sm-30"},o.a.createElement("div",{className:Object(w.default)("invoice-viewer py-4",qe.invoiceEditor)},o.a.createElement(O.ValidatorForm,{onSubmit:function(){C(Object(r.a)(Object(r.a)({},_),{},{loading:!0}));var e=[];delete Object(r.a)({},_).loading;var t=Object(n.a)(_.item);e.invoice_details=t,e.quotation_id=parseInt(Re),e.discount_in_percentage=Se,e.total_value=parseFloat(Ae).toFixed(2),e.grand_total=He,e.bill_no=ae,e.issue_date=_e,e.vat_in_value=parseFloat(Ge).toFixed(2);var a=Object.assign({},e);x.g.post("purchase-invoice",a).then((function(e){D.a.fire({title:"Success",type:"success",icon:"success",text:"Data saved successfully."}),Ve.push("/poinv")})).catch((function(e){}))},onError:function(e){return null}},o.a.createElement("div",{className:"viewer_actions px-4 flex justify-between"},o.a.createElement("div",{className:"mb-6"},o.a.createElement("h3",{align:"left"},"Invoice")),o.a.createElement("div",{className:"mb-6"},o.a.createElement(s.a,{className:"mr-4 py-2",variant:"outlined",color:"secondary",onClick:function(){Ve.push("/Newinvoiceview")}},o.a.createElement(d.a,null,"cancel")," Cancel"),o.a.createElement(s.a,{type:"submit",className:"py-2",variant:"outlined",color:"primary",disabled:Ue},o.a.createElement(d.a,null,"save")," Save & Print Invoice"))),o.a.createElement("div",{className:"viewer__order-info px-4 mb-4 flex justify-between"},o.a.createElement("div",null,o.a.createElement("h5",{className:"font-normal capitalize"},o.a.createElement("strong",null,"P.O Number: "),o.a.createElement("span",null,Q)),o.a.createElement("h5",{className:"font-normal capitalize"},o.a.createElement("strong",null,"Company Name: ")," ",o.a.createElement("span",null,H)),o.a.createElement(u.a,{label:"Bill No",style:{minWidth:200,maxWidth:"250px"},name:"party_id",size:"small",variant:"outlined",value:ae,onChange:function(e){return ne(e.target.value)},required:!0})),o.a.createElement("div",null,o.a.createElement("div",{className:"text-right"},o.a.createElement("h5",{className:"font-normal"},o.a.createElement("strong",null,"Due date: "),o.a.createElement("span",null,T()(Y).format("DD MMM YYYY")))),o.a.createElement("div",{className:"text-right"},o.a.createElement(j.a,{utils:y.a},o.a.createElement(h.a,{className:"m-2",margin:"none",label:"Invoice Date",inputVariant:"outlined",type:"text",size:"small",selected:_e,value:_e,onChange:function(e){ke(T()(e).format("DD MMM YYYY"))}}))))),o.a.createElement(m.a,null),o.a.createElement(p.a,{className:"mb-4"},o.a.createElement(b.a,null,o.a.createElement(f.a,{className:"bg-default"},o.a.createElement(v.a,{className:"pl-sm-24"},"S.No."),o.a.createElement(v.a,{className:"px-0"},"Item Name"),o.a.createElement(v.a,{className:"px-0"},"Rfq description"),o.a.createElement(v.a,{className:"px-0"},"UOM"),o.a.createElement(v.a,{className:"px-0",style:{width:"80px"}},"Quantity"),o.a.createElement(v.a,{className:"px-0",style:{width:"80px"}},"Unit Price"),o.a.createElement(v.a,{className:"px-0"},"Total"))),o.a.createElement(g.a,null,Ye.map((function(e,t){return Pe?(Ae+=parseFloat(e.total_amount),Ge=(15*(Ae-parseFloat(oe*Ae/100))/100).toFixed(2),He=(Ae-parseFloat(oe*Ae/100)+parseFloat(Ge)).toFixed(2)):(Ae+=parseFloat(e.total_amount),Ge=(15*Ae/100).toFixed(2),He=(Ae+15*Ae/100).toFixed(2)),o.a.createElement(f.a,{key:t},o.a.createElement(v.a,{className:"pl-sm-24 capitalize",align:"left"},t+1),o.a.createElement(v.a,{className:"pl-0 capitalize",align:"left"},o.a.createElement(O.TextValidator,{label:"Item Name",variant:"outlined",size:"small",type:"text",name:"name",fullWidth:!0,value:e?e.product.name:null,validators:["required"],errorMessages:["this field is required"]})),o.a.createElement(v.a,{className:"pl-0 capitalize",align:"left"},o.a.createElement(O.TextValidator,{label:"description",type:"text",name:"description",fullWidth:!0,variant:"outlined",size:"small",value:e?e.description:null,validators:["required"],errorMessages:["this field is required"]})),o.a.createElement(v.a,{className:"pl-0 capitalize",align:"left"},o.a.createElement(O.TextValidator,{label:"UOM",type:"text",variant:"outlined",size:"small",name:"uom",fullWidth:!0,value:e?e.product.unit_of_measure:null})),o.a.createElement(v.a,{className:"pl-0 capitalize",align:"left",style:{width:"60px"}},o.a.createElement(O.TextValidator,{label:"Quantity",onChange:function(e){return function(e,t){e.persist();var a=Object(n.a)(_.item);a.map((function(a,n){return t===n&&(a.total_amount=(parseInt(a.purchase_price)*e.target.value).toFixed(2),a[e.target.name]=e.target.value),a})),C(Object(r.a)(Object(r.a)({},_),{},{item:a}))}(e,t)},type:"number",variant:"outlined",size:"small",fullWidth:!0,name:"quantity",min:"1",max:e.quantity,value:e.quantity,validators:["required"],errorMessages:["this field is required"]})),o.a.createElement(v.a,{className:"pl-0 capitalize",align:"left",style:{width:"80px"}},o.a.createElement(O.TextValidator,{label:"Unit_Price",type:"text",name:"purchase_price",fullWidth:!0,variant:"outlined",size:"small",value:e?e.purchase_price:null,validators:["required"],errorMessages:["this field is required"]})),o.a.createElement(v.a,{className:"pl-0 capitalize",align:"left"},o.a.createElement(O.TextValidator,{label:"QTotal",type:"text",variant:"outlined",size:"small",name:"total_amount",fullWidth:!0,value:e.total_amount})))})))),o.a.createElement("div",{className:"flex justify-end px-4 mb-4"},o.a.createElement("div",{className:"flex "},o.a.createElement("div",{className:"pr-12"})),o.a.createElement("div",{className:"flex "},o.a.createElement("div",{className:"pr-12"},o.a.createElement("p",{className:"mb-8"},"Sub Total:"),o.a.createElement("p",{className:"mb-8"},"Discount:"),o.a.createElement("p",{className:"mb-8"},"VAT (15%):"),o.a.createElement("strong",null,o.a.createElement("p",{className:"mb-8"},"Grand Total:"))),o.a.createElement("div",null,o.a.createElement("p",{className:"mb-4"},Ae?Ae.toFixed(2):"0.00"),o.a.createElement(O.TextValidator,{className:"mb-4",label:"Discount",type:"text",variant:"outlined",size:"small",value:Se}),o.a.createElement(O.TextValidator,{className:"mb-4",label:"VAT",type:"text",variant:"outlined",size:"small",name:"vat",value:Ae?Ge:0,validators:["required"],errorMessages:["this field is required"]}),o.a.createElement(O.TextValidator,{label:"Grand Total",type:"text",className:"mb-4",variant:"outlined",size:"small",name:"net_amount",value:Ae?He:0,validators:["required"],errorMessages:["this field is required"]})))))))}}}]);