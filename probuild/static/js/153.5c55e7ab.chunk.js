(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[153],{1561:function(e,a,t){"use strict";var l=t(0),r=l.createContext();a.a=r},1627:function(e,a,t){"use strict";var l=t(6),r=t(3),n=t(0),c=t(5),i=t(11),o=t(1684),s=n.forwardRef((function(e,a){var t=e.classes,i=e.className,s=e.component,d=void 0===s?"table":s,m=e.padding,p=void 0===m?"normal":m,b=e.size,u=void 0===b?"medium":b,g=e.stickyHeader,E=void 0!==g&&g,f=Object(l.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=n.useMemo((function(){return{padding:p,size:u,stickyHeader:E}}),[p,u,E]);return n.createElement(o.a.Provider,{value:v},n.createElement(d,Object(r.a)({role:"table"===d?null:"table",ref:a,className:Object(c.default)(t.root,i,E&&t.stickyHeader)},f)))}));a.a=Object(i.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},1628:function(e,a,t){"use strict";var l=t(3),r=t(6),n=t(0),c=t(5),i=t(11),o=t(1561),s=t(41),d=n.forwardRef((function(e,a){var t=e.classes,i=e.className,s=e.component,d=void 0===s?"tr":s,m=e.hover,p=void 0!==m&&m,b=e.selected,u=void 0!==b&&b,g=Object(r.a)(e,["classes","className","component","hover","selected"]),E=n.useContext(o.a);return n.createElement(d,Object(l.a)({ref:a,className:Object(c.default)(t.root,i,E&&{head:t.head,footer:t.footer}[E.variant],p&&t.hover,u&&t.selected),role:"tr"===d?null:"row"},g))}));a.a=Object(i.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.a)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1630:function(e,a,t){"use strict";var l=t(3),r=t(6),n=t(0),c=t(5),i=t(11),o=t(1561),s={variant:"body"},d=n.forwardRef((function(e,a){var t=e.classes,i=e.className,d=e.component,m=void 0===d?"tbody":d,p=Object(r.a)(e,["classes","className","component"]);return n.createElement(o.a.Provider,{value:s},n.createElement(m,Object(l.a)({className:Object(c.default)(t.root,i),ref:a,role:"tbody"===m?null:"rowgroup"},p)))}));a.a=Object(i.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},1632:function(e,a,t){"use strict";var l=t(6),r=t(3),n=t(0),c=t(5),i=t(11),o=t(15),s=t(41),d=t(1684),m=t(1561),p=n.forwardRef((function(e,a){var t,i,s=e.align,p=void 0===s?"inherit":s,b=e.classes,u=e.className,g=e.component,E=e.padding,f=e.scope,v=e.size,x=e.sortDirection,h=e.variant,y=Object(l.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),N=n.useContext(d.a),O=n.useContext(m.a),j=O&&"head"===O.variant;g?(i=g,t=j?"columnheader":"cell"):i=j?"th":"td";var w=f;!w&&j&&(w="col");var A=E||(N&&N.padding?N.padding:"normal"),S=v||(N&&N.size?N.size:"medium"),z=h||O&&O.variant,C=null;return x&&(C="asc"===x?"ascending":"descending"),n.createElement(i,Object(r.a)({ref:a,className:Object(c.default)(b.root,b[z],u,"inherit"!==p&&b["align".concat(Object(o.a)(p))],"normal"!==A&&b["padding".concat(Object(o.a)(A))],"medium"!==S&&b["size".concat(Object(o.a)(S))],"head"===z&&N&&N.stickyHeader&&b.stickyHeader),"aria-sort":C,role:t,scope:w},y))}));a.a=Object(i.a)((function(e){return{root:Object(r.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.j)(Object(s.a)(e.palette.divider,1),.88):Object(s.b)(Object(s.a)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(p)},1633:function(e,a,t){"use strict";var l=t(3),r=t(6),n=t(0),c=t(5),i=t(11),o=t(1561),s={variant:"head"},d=n.forwardRef((function(e,a){var t=e.classes,i=e.className,d=e.component,m=void 0===d?"thead":d,p=Object(r.a)(e,["classes","className","component"]);return n.createElement(o.a.Provider,{value:s},n.createElement(m,Object(l.a)({className:Object(c.default)(t.root,i),ref:a,role:"thead"===m?null:"rowgroup"},p)))}));a.a=Object(i.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},1684:function(e,a,t){"use strict";var l=t(0),r=l.createContext();a.a=r},2024:function(e,a,t){"use strict";a.a=t.p+"static/media/amaco-logo.8dcffb1f.png"},2115:function(e,a,t){"use strict";t.p},2116:function(e){e.exports=JSON.parse('{"app.header":"\u0642\u0645 \u0628\u062a\u062d\u0631\u064a\u0631 \u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0648\u062d\u0641\u0638\u0647\u0627 \u0644\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u062a\u062d\u0645\u064a\u0644","app.content":"\u062a\u0639\u0644\u0645 React","app.channel.plug":"\u0634\u0631\u0643\u0629 \u0623\u0645\u0627\u0643\u0648 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0644\u0644\u0645\u0642\u0627\u0648\u0644\u0627\u062a","pono":"\u0631\u0642\u0645 \u0627\u0644\u0641\u0627\u062a\u0648\u0631\u0629","podate":"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0635\u062f\u0627\u0631","vatinvoice":"\u0641\u0627\u062a\u0648\u0631\u0629 \u0636\u0631\u064a\u0628\u0629 \u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u0645\u0636\u0627\u0641\u0629","companyname":"\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629 \u0648\u0639\u0646\u0648\u0627\u0646\u0647\u0627","po_no":"\u0638\u0631\u064a\u0628\u0647 \u0627\u0644\u0634\u0631\u0627\u0621","vatno":"\u0631\u0642\u0645 \u0627\u0645\u0631\u0627\u0644\u0634\u0631\u0627\u0621","preparedby":"\u0623\u0639\u062f\u062a \u0628\u0648\u0627\u0633\u0637\u0629","approvedby":"\u0627\u0639\u062a\u0645\u062f\u062a \u0628\u0648\u0627\u0633\u0629","receivedby":"\u0627\u0633\u062a\u0644\u0645\u062a \u0645\u0646 \u0642\u0628\u0644"}')},3302:function(e,a,t){"use strict";t.r(a);var l=t(7),r=t(18),n=t(16),c=t(19),i=t(0),o=t.n(i),s=(t(2157),t(2116)),d=t(3254),m=t(3256),p=t(1657),b=t.n(p),u=(t(2372),t(2186)),g=t(673),E=t(1414),f=t(674),v=t(1354),x=t(1627),h=t(1633),y=t(1628),N=t(1632),O=t(1630),j=t(31),w=t(47),A=t(4),S=t(683),z=t(5),C=(t(26),t(191),t(680),t(2024)),T=(t(2115),t(149)),_=t.n(T),k=t(91),R=["palette"],B=navigator.language,I=Object(S.a)((function(e){var a;e.palette,Object(c.a)(e,R);return{"@global":{"@page":{size:"A4",margin:0},"@media print":{"body, *, html":{visibility:"hidden",size:"auto",margin:"0mm"},"#header":{position:"fixed",top:0,left:0,width:"100%"},"#footer":{backgroundColor:"#F8F8F8",borderTop:"1px solid #E7E7E7",textAlign:"center",padding:"20px",position:"fixed",left:"0",bottom:"0",height:"auto",width:"100%"},"#table":(a={display:"-webkit-box"},Object(n.a)(a,"display","-ms-flexbox"),Object(n.a)(a,"width","650px"),Object(n.a)(a,"margin","15px"),Object(n.a)(a,"position","absolute"),a),"#print-area":{position:"fixed",top:45,left:0,right:0,height:"100%",marginTop:"45px","& *":{visibility:"visible"}}}},invoiceViewer:{"& h5":{fontSize:15}}}}));a.default=function(e){e.toggleInvoiceEditor;var a=Object(i.useState)({}),t=Object(r.a)(a,2),c=t[0],p=(t[1],Object(i.useState)([])),S=Object(r.a)(p,2),T=(S[0],S[1],Object(i.useState)([])),R=Object(r.a)(T,2),M=(R[0],R[1],Object(i.useState)([])),D=Object(r.a)(M,2),L=(D[0],D[1],Object(i.useState)([])),P=Object(r.a)(L,2),Y=(P[0],P[1],Object(i.useState)("")),H=Object(r.a)(Y,2),q=H[0],U=H[1],V=Object(i.useState)(""),F=Object(r.a)(V,2),J=F[0],W=F[1],X=Object(i.useState)(""),$=Object(r.a)(X,2),K=$[0],G=$[1],Q=Object(i.useState)(""),Z=Object(r.a)(Q,2),ee=Z[0],ae=Z[1],te=Object(i.useState)(""),le=Object(r.a)(te,2),re=le[0],ne=le[1],ce=Object(i.useState)(""),ie=Object(r.a)(ce,2),oe=ie[0],se=ie[1],de=Object(i.useState)([]),me=Object(r.a)(de,2),pe=me[0],be=me[1],ue=Object(i.useState)(""),ge=Object(r.a)(ue,2),Ee=(ge[0],ge[1]),fe=Object(i.useState)(""),ve=Object(r.a)(fe,2),xe=ve[0],he=ve[1],ye=Object(i.useState)(""),Ne=Object(r.a)(ye,2),Oe=Ne[0],je=Ne[1],we=Object(i.useState)(0),Ae=Object(r.a)(we,2),Se=Ae[0],ze=Ae[1],Ce=Object(i.useState)(""),Te=Object(r.a)(Ce,2),_e=Te[0],ke=(Te[1],Object(i.useState)("")),Re=Object(r.a)(ke,2),Be=Re[0],Ie=Re[1],Me=Object(i.useState)(""),De=Object(r.a)(Me,2),Le=De[0],Pe=De[1],Ye=Object(i.useState)(0),He=Object(r.a)(Ye,2),qe=(He[0],He[1]),Ue=Object(i.useState)(),Ve=Object(r.a)(Ue,2),Fe=Ve[0],Je=Ve[1],We=new u.ToWords({localeCode:"en-IN",converterOptions:{currency:!0,ignoreDecimal:!1,ignoreZeroCurrency:!1}}),Xe=Object(j.i)().id,$e=I(),Ke=Object(k.a)(),Ge=Ke.settings,Qe=Ke.updateSettings;Object(i.useEffect)((function(){Ze({mode:"close"}),document.title="VAT Invoice - Amaco",A.g.get("purchase-invoice/"+Xe).then((function(e){var a=e.data;if(a){qe(a[0].discount_in_percentage),be(a[0].purchase_invoice_detail),U(a[0].quotation.party.firm_name),W(a[0].quotation.party.city),G(a[0].quotation.party.street),ne(a[0].quotation.party.zip_code),ae(a[0].quotation.po_number),se(a[0].quotation.party.vat_no),Ie(a[0].bill_no),Pe(a[0].issue_date),he(a[0].vat_in_value),ze(a[0].grand_total),je(a[0].total_value);var t=We.convert(parseFloat(a[0].grand_total)).replace("Rupees","Riyals").replace("Paise","Halala");Je(t)}})),A.g.get("quotation/"+Xe).then((function(e){var a=e.data;Ee(a[0].quotation_no)}))}),[Xe]);var Ze=function(e){if("close"==e.mode){var a=Ge.activeLayout+"Settings",t=Ge[a];Qe(Object(l.a)(Object(l.a)({},Ge),{},Object(n.a)({},a,Object(l.a)(Object(l.a)({},t),{},{leftSidebar:Object(l.a)(Object(l.a)({},t.leftSidebar),e)}))))}else{window.location.href="../inv";var r=Ge.activeLayout+"Settings",c=Ge[r];Qe(Object(l.a)(Object(l.a)({},Ge),{},Object(n.a)({},r,Object(l.a)(Object(l.a)({},c),{},{leftSidebar:Object(l.a)(Object(l.a)({},c.leftSidebar),e)}))))}};window.onafterprint=function(){window.close(),window.location.href=""};c.orderNo,c.buyer,c.seller,c.item,c.status;var ea=c.vat;c.date;return o.a.createElement("div",{className:Object(z.default)("invoice-viewer py-4",$e.invoiceViewer)},o.a.createElement("div",{className:"viewer_actions px-4 mb-5 flex items-center justify-between"},o.a.createElement(w.b,{onClick:function(){return Ze({mode:"on"})}},o.a.createElement(g.a,null,o.a.createElement(E.a,null,"arrow_back"))),o.a.createElement("div",null,o.a.createElement(f.a,{className:"mr-4 py-2",style:{color:"red"},variant:"outlined",onClick:function(){return function(){var e;_.a.fire((e={title:"Are you sure?",text:"You will not be able to recover this Invoice!",icon:"danger",showCancelButton:!0,confirmButtonText:"Yes, delete it!"},Object(n.a)(e,"icon","warning"),Object(n.a)(e,"cancelButtonText","No, keep it"),e)).then((function(e){e.value?A.g.delete("invoice/".concat(Xe)).then((function(e){_.a.fire("Deleted!","Invoice has been deleted.","success"),Ze({mode:"on"}),window.location.href="../inv"})):e.dismiss===_.a.DismissReason.cancel&&_.a.fire("Cancelled","Your Invoice is safe :)","error")}))}()}},"Delete Invoice"),o.a.createElement(f.a,{onClick:function(){return window.print()},className:"py-2",color:"secondary",variant:"outlined"},"Print Invoice"))),o.a.createElement("div",{id:"print-area"},o.a.createElement("header",{id:"header"},o.a.createElement("div",{className:"px-2 flex justify-between"},o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"pr-12"},o.a.createElement("img",{src:C.a,alt:"this is car image",style:{marginLeft:"15px",width:237}})),o.a.createElement("div",{className:"viewer__order-info px-4 mb-4 flex justify-between"})),o.a.createElement("div",{className:"flex",align:"right"},o.a.createElement("div",null,o.a.createElement("h4",{style:{color:"#00008B"}},o.a.createElement(d.a,{locale:B,messages:s},o.a.createElement(m.a,{id:"app.channel.plug",defaultMessage:"Amaco Arabia Contracting Company",values:"Amaco Arabia Contracting Company"}))),o.a.createElement("h5",{className:"font-normal b-4  capitalize"},o.a.createElement("strong",{style:{color:"#00008B"}},"AMACO ARABIA CONTRACTING COMPANY")),o.a.createElement("h6",{className:"font-normal b-4 capitalize",style:{color:"#555"}},"C.R No. 205500334 | VAT No. 810398615200003"))))),o.a.createElement("hr",null),o.a.createElement("div",{className:"px-4 flex justify-between"},o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"pr-12 px-4 mb-4"},o.a.createElement("h4",null,"PURCHASE INVOICE"),ea)),o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"pr-12 px-4 mb-4"},o.a.createElement("h4",null,o.a.createElement(d.a,{locale:B,messages:s},o.a.createElement(m.a,{id:"vatinvoice"})))))),o.a.createElement("div",{className:"px-4 flex justify-between"},o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"pr-12 px-6 mb-4"},o.a.createElement("h5",null,"ISSUE DATE"),b()(Le).format("DD MMM YYYY")),o.a.createElement("div",{className:"pl-24 px-26 mb-4"},o.a.createElement("h5",null,"INVOICE NUMBER"),Be)),o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"pr-25"},o.a.createElement("h5",{align:"right"},o.a.createElement(d.a,{locale:B,messages:s},o.a.createElement(m.a,{id:"pono"}))),Be),o.a.createElement("div",{className:"pr-4"},o.a.createElement("h5",{align:"right"},o.a.createElement(d.a,{locale:B,messages:s},o.a.createElement(m.a,{id:"podate"}))),b()(Le).format("DD MMM YYYY")))),o.a.createElement("div",{className:"px-4 flex justify-between"},o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"pr-12 px-4 mb-4"},o.a.createElement("h5",null,"COMPANY NAME & ADDRESS"),q,o.a.createElement("br",null),K,"-",J,",",ee," ",re)),o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"pr-12 px-4 mb-4"},o.a.createElement("h5",null,o.a.createElement(d.a,{locale:B,messages:s},o.a.createElement(m.a,{id:"companyname"}))),_e))),o.a.createElement("div",{className:"px-4 flex justify-between"},o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"pr-12 px-4 mb-4"},o.a.createElement("h5",null,"P.O. NUMBER"),ee),o.a.createElement("div",{className:"pl-24 px-26 mb-4"},o.a.createElement("h5",null,"VAT NUMBER"),oe)),o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"pr-25"},o.a.createElement("h5",{align:"right"},o.a.createElement(d.a,{locale:B,messages:s},o.a.createElement(m.a,{id:"po_no"}))),ee),o.a.createElement("div",{className:"pr-4"},o.a.createElement("h5",{align:"right"},o.a.createElement(d.a,{locale:B,messages:s},o.a.createElement(m.a,{id:"vatno"}))),oe))),o.a.createElement(v.a,{className:"mb-4",elevation:0,borderRadius:"borderRadius"},o.a.createElement("div",{className:"viewer__order-info px-4 mb-4 flex justify-between"},o.a.createElement(x.a,{style:{border:"1px solid rgb(0, 0, 0)"}},o.a.createElement(h.a,null,o.a.createElement(y.a,{style:{border:"1px solid rgb(0, 0, 0)"}},o.a.createElement(N.a,{className:"pl-0",colspan:1,style:{border:"1px solid rgb(0, 0, 0)",width:"50px"},align:"center"},"\u0631\u0642\u0645",o.a.createElement("br",null),"S.No."),o.a.createElement(N.a,{className:"px-0",colspan:3,style:{border:"1px solid rgb(0, 0, 0)"},align:"center"},"\u0648\u0635\u0641",o.a.createElement("br",null),"DESCRIPTION"),o.a.createElement(N.a,{className:"px-0",style:{border:"1px solid rgb(0, 0, 0)",width:"70px"},align:"center"},"\u0648\u062d\u062f\u0629",o.a.createElement("br",null),"UOM"),o.a.createElement(N.a,{className:"px-0",style:{border:"1px solid rgb(0, 0, 0)"},align:"center"},"\u0643\u0645\u064a\u0629",o.a.createElement("br",null),"QTY"),o.a.createElement(N.a,{className:"px-0",style:{border:"1px solid rgb(0, 0, 0)"},align:"center"},"\u0633\u0639\u0631 \u0627\u0644\u0648\u062d\u062f\u0629",o.a.createElement("br",null),"UNIT PRICE"),o.a.createElement(N.a,{className:"px-0",style:{border:"1px solid rgb(0, 0, 0)",wordBreak:"break-word"},align:"center"},"\u0627\u0644\u0645\u0628\u0644\u063a \u0627\u0644\u062e\u0627\u0636\u0639 \u0644\u0644\u0636\u0631\u064a\u0628\u0629",o.a.createElement("br",null),"TAXABLE AMOUNT"),o.a.createElement(N.a,{className:"px-0",style:{border:"1px solid rgb(0, 0, 0)"},align:"center"},"\u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u0636\u0631\u064a\u0628\u064a\u0629",o.a.createElement("br",null),"TAX VALUE (15%)"),o.a.createElement(N.a,{className:"px-0",style:{border:"1px solid rgb(0, 0, 0)"},align:"center"},"\u0645\u062c\u0645\u0648\u0639",o.a.createElement("br",null),"TOTAL"))),o.a.createElement(O.a,null,pe.map((function(e,a){return o.a.createElement(y.a,{key:a,style:{border:"1px solid rgb(0, 0, 0)"}},o.a.createElement(N.a,{className:"pl-0",align:"center",colspan:1,style:{border:"1px solid rgb(0, 0, 0)"}},a+1),o.a.createElement(N.a,{className:"pl-0 capitalize",align:"left",colspan:3,style:{border:"1px solid rgb(0, 0, 0)"}},e.product.description),o.a.createElement(N.a,{className:"pl-0 capitalize",align:"center",style:{border:"1px solid rgb(0, 0, 0)"}},e.product.unit_of_measure),o.a.createElement(N.a,{className:"pl-0 capitalize",align:"center",style:{border:"1px solid rgb(0, 0, 0)"}},e.quotation_detail.quantity),o.a.createElement(N.a,{className:"pl-0 capitalize",style:{textAlign:"right",border:"1px solid rgb(0, 0, 0)"}},e.quotation_detail.purchase_price),o.a.createElement(N.a,{className:"pl-0 capitalize",style:{textAlign:"right",border:"1px solid rgb(0, 0, 0)"}},e.quotation_detail.total_amount),o.a.createElement(N.a,{className:"pl-0 capitalize",style:{textAlign:"right",border:"1px solid rgb(0, 0, 0)"}},(15*e.total_amount/100).toFixed(2)),o.a.createElement(N.a,{className:"pl-0 capitalize",style:{textAlign:"right",border:"1px solid rgb(0, 0, 0)"}},(parseFloat(e.total_amount)+15*e.total_amount/100).toFixed(2)))})),o.a.createElement(y.a,{style:{border:"1px solid rgb(0, 0, 0)"}},o.a.createElement(N.a,{className:"pl-0 capitalize",align:"center",style:{border:"1px solid rgb(0, 0, 0)"},rowspan:2,colspan:8},o.a.createElement("div",{className:"px-4 flex justify-between"},o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"pr-12"},o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("h5",{className:"font-normal capitalize"},o.a.createElement("strong",null,"BANK DETAILS ")," "))),o.a.createElement("tr",{style:{height:5,fontSize:13,textAlign:"left"}},o.a.createElement("td",{style:{height:"auto !important"}},o.a.createElement("strong",null,"Bank Name")),o.a.createElement("td",{style:{height:"auto !important"}},"National Commercial Bank")),o.a.createElement("tr",{style:{height:5,fontSize:13,textAlign:"left"}},o.a.createElement("td",{style:{height:"auto !important"}},o.a.createElement("strong",null,"Account No")),o.a.createElement("td",{style:{height:"auto !important"}},"6000000242200")),o.a.createElement("tr",{style:{height:5,fontSize:13,textAlign:"left"}},o.a.createElement("td",{style:{height:"auto !important"}},o.a.createElement("strong",null,"IBAN No")),o.a.createElement("td",{style:{height:"auto !important"}},"SA3610000006000000242200")))))),o.a.createElement(N.a,{className:"pl-0 capitalize",align:"center",style:{border:"1px solid rgb(0, 0, 0)",wordBreak:"break-word"}},"\u0627\u0644\u0645\u0628\u0644\u063a \u0627\u0644\u062e\u0627\u0636\u0639 \u0644\u0644\u0636\u0631\u064a\u0628\u0629",o.a.createElement("br",null),"TAXABLE AMOUNT"),o.a.createElement(N.a,{className:"pl-0 capitalize",align:"right",style:{border:"1px solid rgb(0, 0, 0)"}},Oe)),o.a.createElement(y.a,{style:{border:"1px solid rgb(0, 0, 0)"}},o.a.createElement(N.a,{className:"pl-0 capitalize",align:"center",style:{border:"1px solid rgb(0, 0, 0)"}},"\u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u0636\u0631\u064a\u0628\u064a\u0629",o.a.createElement("br",null),"TAX VALUE (15%)"),o.a.createElement(N.a,{className:"pl-0 capitalize",align:"right",style:{border:"1px solid rgb(0, 0, 0)"}},xe)),o.a.createElement(y.a,{style:{border:"1px solid rgb(0, 0, 0)"}},o.a.createElement(N.a,{className:"pl-0 capitalize",colspan:8,style:{border:"1px solid rgb(0, 0, 0)"}},o.a.createElement("div",{className:"px-4 flex justify-between"},o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"pr-12"},o.a.createElement("strong",null,"Total In Words"),"  ",Fe)))),o.a.createElement(N.a,{className:"pl-0 capitalize",align:"center",style:{border:"1px solid rgb(0, 0, 0)"}},"TOTAL INC.VAT"),o.a.createElement(N.a,{className:"pl-0 capitalize",align:"right",style:{border:"1px solid rgb(0, 0, 0)"}},Se))))),o.a.createElement("br",null),o.a.createElement("div",{className:"viewer__order-info px-4 mb-4 flex justify-between"},o.a.createElement("div",{className:"ml-24"},o.a.createElement("h5",{className:"font-normal t-4 capitalize"},o.a.createElement(d.a,{locale:B,messages:s},o.a.createElement(m.a,{id:"preparedby"}))),"Prepared By"),o.a.createElement("div",null,o.a.createElement("h5",{className:"font-normal t-4 capitalize"},o.a.createElement(d.a,{locale:B,messages:s},o.a.createElement(m.a,{id:"approvedby"}))),"Approved By"),o.a.createElement("div",{className:"mr-24"},o.a.createElement("h5",{className:"font-normal t-4 capitalize"},o.a.createElement(d.a,{locale:B,messages:s},o.a.createElement(m.a,{id:"receivedby"}))),"Received By"))),o.a.createElement("div",null),o.a.createElement("footer",{id:"footer",style:{visibility:"hidden"}},o.a.createElement("div",Object(n.a)({style:{fontSize:"8px",visibility:"hidden"}},"style",{borderBottom:"25px solid #555",borderLeft:"50px solid transparent",height:0,width:"100%",marginLeft:"10%"}),o.a.createElement("span",{style:{color:"#fff"}},"Tel: +966 1336323871 | P.O.Box 7452 | Jubail 31951 | Kingdom of Saudi Arabia")),o.a.createElement("div",Object(n.a)({style:{fontSize:"8px",visibility:"hidden"}},"style",{borderBottom:"25px solid #00008B",height:0,width:"100%",alignItems:"center"}),o.a.createElement("span",{style:{color:"#fff"}},"Tel: +966 1336323871 | P.O.Box 7452 | Jubail 31951 | Kingdom of Saudi Arabia")))))}}}]);