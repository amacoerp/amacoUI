(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[36],{2024:function(e,t,a){"use strict";t.a=a.p+"static/media/amaco-logo.8dcffb1f.png"},2030:function(e,t,a){"use strict";var n=a(18),l=a(0),i=a.n(l),c=a(4);t.a=function(e){e.p;var t=Object(l.useState)([]),a=Object(n.a)(t,2),o=a[0],r=a[1];return Object(l.useEffect)((function(){c.g.get("company").then((function(e){var t=e.data;r(t[0])}))}),[]),i.a.createElement("footer",{style:{visibility:"hidden"}},i.a.createElement("div",null,i.a.createElement("div",{id:"outer",class:"outer",style:{position:"relative",width:"1050px",backgroundColor:"#c1c1c1",transform:"skew(-20deg)",marginLeft:"40px",marginRight:"50px"}},i.a.createElement("p",{style:{color:"#fff",paddingTop:5,paddingBottom:5,transform:"skew(20deg)"},align:"center"}," Tel.: ",o.contact,"| Fax: ",o.fax," | P.O.Box ",o.po_box," | Jubail 31951 | Kingdom of Saudi Arabia"),i.a.createElement("div",{id:"spacer",style:{width:"200px",height:"10px",marginRight:0}}),i.a.createElement("div",{style:{position:"fixed",bottom:0,width:"100%",height:30,backgroundColor:"#1d2257"}}," ",i.a.createElement("p",{style:{textAlign:"center",color:"white",fontFamily:"Calibri",paddingTop:5,paddingBottom:10,transform:"skew(20deg)"}},"E-mail: ",o.email," | Website: ",o.website)))))}},2078:function(e,t,a){"use strict";var n=a(18),l=a(0),i=a.n(l),c=(a(2024),a(4)),o=a(594),r=a(1414),s=a(674),u=a(649),m=a(1640),d=(a(2086),a(149)),f=a.n(d);t.a=function(){var e,t,a,d,p=Object(l.useState)([]),v=Object(n.a)(p,2),b=v[0],E=v[1],g=Object(l.useState)([]),y=Object(n.a)(g,2),j=y[0],h=y[1],O=Object(l.useState)(""),x=Object(n.a)(O,2),S=x[0],w=x[1],N=Object(l.useState)(""),_=Object(n.a)(N,2),C=_[0],F=_[1],R=Object(l.useState)(!1),T=Object(n.a)(R,2),k=T[0],D=T[1],Y=Object(l.useState)(""),q=Object(n.a)(Y,2),z=q[0],A=q[1],B=Object(l.useState)(""),M=Object(n.a)(B,2),I=M[0],Q=M[1],W=Object(l.useState)(""),P=Object(n.a)(W,2),L=P[0],H=P[1],J=Object(l.useState)(""),U=Object(n.a)(J,2),G=U[0],V=U[1],K=Object(l.useState)(!1),X=Object(n.a)(K,2),Z=X[0],$=X[1],ee=Object(l.useState)([]),te=Object(n.a)(ee,2),ae=te[0],ne=te[1],le=(Boolean(ce),Object(l.useState)(null)),ie=Object(n.a)(le,2),ce=ie[0],oe=ie[1];return Object(l.useEffect)((function(){return c.g.get("company").then((function(e){var t=e.data;E(t[0])})),c.g.get("singleDivision/".concat(localStorage.getItem("division"))).then((function(e){var t=e.data;h(t.div),w(t.div[0].name),F(t.div[0].opening_balance),Q(t.div[0].company_arabic),A(t.div[0].company_name),H(t.div[0].cr_no),V(t.div[0].vat_no),ne(t.divs)})),$(!0)}),[Z]),i.a.createElement("thead",{style:{display:"table-header-group",marginTop:"20px"}},i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("div",{class:"empty-header"},i.a.createElement("div",{className:"px-2 flex justify-between"},i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"pr-12"},(localStorage.getItem("division"),i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{src:null===b||void 0===b?void 0:b.image1,alt:"logo",style:{marginLeft:"15px",width:237}})))),i.a.createElement("div",{className:"viewer__order-info px-4 mb-4 flex justify-between"})),i.a.createElement("div",{className:"flex pr-4 mr-1"},i.a.createElement("div",{style:{marginLeft:"50px"}},0==k?i.a.createElement("h2",{style:{color:"#1d2257",textAlign:"right"}},i.a.createElement(i.a.Fragment,null,null===(e=j[0])||void 0===e?void 0:e.company_arabic)):i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{value:I,onChange:function(e){return Q(e.target.value)}}),i.a.createElement(r.a,{onClick:function(){return function(){var e={name:S,opening_bal:C,id:localStorage.getItem("division"),company_name:z,company_arabic:I,cr_no:L,vat_no:G};c.g.put("division/".concat(localStorage.getItem("division")),e).then((function(e){f.a.fire({icon:"success",type:"success",text:"Data updated successfully."}),D(!1),$(!1)}))}()}},"done"),i.a.createElement("br",null)),i.a.createElement(i.a.Fragment,null,0==k?i.a.createElement("h3",{style:{color:"#1d2257",textAlign:"right",fontSize:20}},null===(t=j[0])||void 0===t?void 0:t.company_name.toUpperCase()):i.a.createElement(o.a,{value:z,onChange:function(e){return A(e.target.value)}})),i.a.createElement("h5",{style:{color:"#555",textAlign:"right",fontSize:17},className:"font-normal b-4 capitalize"},0==k?i.a.createElement(i.a.Fragment,null," C.R.",null===(a=j[0])||void 0===a?void 0:a.cr_no," "):i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{value:L,onChange:function(e){return H(e.target.value)}}),i.a.createElement("br",null)),0==k?i.a.createElement(i.a.Fragment,null,"| VAT ",null===(d=j[0])||void 0===d?void 0:d.vat_no):i.a.createElement(o.a,{value:G,onChange:function(e){return V(e.target.value)}})),i.a.createElement(s.a,{style:{float:"right"},variant:"",color:"",className:"mr-4 py-2 changeHeadButton","aria-owns":ce?"simple-menu":void 0,"aria-haspopup":"true",onClick:function(e){oe(e.currentTarget)}},"CHANGE HEADER ",i.a.createElement(r.a,null,"expand_more")),i.a.createElement(u.a,{id:"simple-menu",anchorEl:ce,open:Boolean(ce),onClose:function(){oe(null)}},ae.map((function(e,t){return i.a.createElement(m.a,{value:e.id,onClick:function(t){var a;a=e.id,c.g.get("company").then((function(e){var t=e.data;E(t[0])})),c.g.get("singleDivision/".concat(a)).then((function(e){var t=e.data;h(t.div),w(t.div[0].name),F(t.div[0].opening_balance),Q(t.div[0].company_arabic),A(t.div[0].company_name),H(t.div[0].cr_no),V(t.div[0].vat_no),oe(null)}))},key:t},e.name)}))))))))))}},2086:function(e,t,a){},2096:function(e,t,a){},2115:function(e,t,a){"use strict";a.p},2116:function(e){e.exports=JSON.parse('{"app.header":"\u0642\u0645 \u0628\u062a\u062d\u0631\u064a\u0631 \u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0648\u062d\u0641\u0638\u0647\u0627 \u0644\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u062a\u062d\u0645\u064a\u0644","app.content":"\u062a\u0639\u0644\u0645 React","app.channel.plug":"\u0634\u0631\u0643\u0629 \u0623\u0645\u0627\u0643\u0648 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0644\u0644\u0645\u0642\u0627\u0648\u0644\u0627\u062a","pono":"\u0631\u0642\u0645 \u0627\u0644\u0641\u0627\u062a\u0648\u0631\u0629","podate":"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0635\u062f\u0627\u0631","vatinvoice":"\u0641\u0627\u062a\u0648\u0631\u0629 \u0636\u0631\u064a\u0628\u0629 \u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u0645\u0636\u0627\u0641\u0629","companyname":"\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629 \u0648\u0639\u0646\u0648\u0627\u0646\u0647\u0627","po_no":"\u0638\u0631\u064a\u0628\u0647 \u0627\u0644\u0634\u0631\u0627\u0621","vatno":"\u0631\u0642\u0645 \u0627\u0645\u0631\u0627\u0644\u0634\u0631\u0627\u0621","preparedby":"\u0623\u0639\u062f\u062a \u0628\u0648\u0627\u0633\u0637\u0629","approvedby":"\u0627\u0639\u062a\u0645\u062f\u062a \u0628\u0648\u0627\u0633\u0629","receivedby":"\u0627\u0633\u062a\u0644\u0645\u062a \u0645\u0646 \u0642\u0628\u0644"}')},2633:function(e,t,a){"use strict";a.r(t);a(7);var n=a(18),l=a(16),i=a(19),c=a(0),o=a.n(c),r=a(1354),s=a(673),u=a(1414),m=a(674),d=a(1627),f=a(1633),p=a(1628),v=a(1632),b=a(1630),E=a(31),g=a(47),y=a(4),j=a(683),h=a(5),O=(a(26),a(680),a(191),a(2024),a(2115),a(91)),x=(a(2116),a(149)),S=a.n(x),w=a(649),N=a(1640),_=a(1617),C=a(1657),F=a.n(C),R=a(2078),T=a(2030),k=(a(2096),["palette"]),D=(navigator.language,Object(j.a)((function(e){var t;e.palette,Object(i.a)(e,k);return{"@global":{"@media print":{"@page":{"@bottom-left":{content:"counter(page)"}},"body, html":{visibility:"hidden",size:"auto",marginTop:"10px"},"#header":{position:"fixed",left:0,justifySelf:"end"},".empty-header":{height:"100px",marginTop:"10px"},".empty-footer":{height:"100px",marginTop:"10px"},".header":{position:"fixed",height:"100px",top:0},".footer":{position:"fixed",height:"100px",bottom:0,width:"100%"},"#footer":{backgroundColor:"#F8F8F8",borderTop:"1px solid #E7E7E7",textAlign:"center",bottom:"0",position:"fixed",width:"100%",justifySelf:"end"},"#table":(t={display:"-webkit-box"},Object(l.a)(t,"display","-ms-flexbox"),Object(l.a)(t,"width","650px"),Object(l.a)(t,"margin","15px"),Object(l.a)(t,"position","absolute"),t),"#print-area":{left:0,right:0,boxDecorationBreak:"clone",position:"relative","& *":{visibility:"visible"}}}},invoiceViewer:{}}})));t.default=function(e){e.toggleInvoiceEditor;var t=Object(c.useState)({}),a=Object(n.a)(t,2),i=a[0],j=(a[1],Object(c.useRef)()),x=Object(c.useState)([]),C=Object(n.a)(x,2),k=(C[0],C[1],Object(c.useState)([])),Y=Object(n.a)(k,2),q=Y[0],z=Y[1],A=Object(c.useState)([]),B=Object(n.a)(A,2),M=B[0],I=B[1],Q=Object(c.useState)([]),W=Object(n.a)(Q,2),P=(W[0],W[1]),L=Object(c.useState)(" "),H=Object(n.a)(L,2),J=(H[0],H[1],Object(c.useState)("")),U=Object(n.a)(J,2),G=U[0],V=U[1],K=Object(c.useState)(""),X=Object(n.a)(K,2),Z=(X[0],X[1]),$=Object(c.useState)(""),ee=Object(n.a)($,2),te=(ee[0],ee[1]),ae=Object(c.useState)(""),ne=Object(n.a)(ae,2),le=(ne[0],ne[1]),ie=Object(c.useState)(""),ce=Object(n.a)(ie,2),oe=(ce[0],ce[1]),re=Object(c.useState)(""),se=Object(n.a)(re,2),ue=(se[0],se[1]),me=Object(c.useState)(""),de=Object(n.a)(me,2),fe=(de[0],de[1]),pe=Object(c.useState)([]),ve=Object(n.a)(pe,2),be=ve[0],Ee=ve[1],ge=Object(c.useState)([]),ye=Object(n.a)(ge,2),je=ye[0],he=ye[1],Oe=Object(c.useState)([]),xe=Object(n.a)(Oe,2),Se=(xe[0],xe[1],Object(c.useState)([])),we=Object(n.a)(Se,2),Ne=(we[0],we[1],Object(c.useState)("")),_e=Object(n.a)(Ne,2),Ce=(_e[0],_e[1]),Fe=Object(c.useState)(""),Re=Object(n.a)(Fe,2),Te=(Re[0],Re[1]),ke=Object(c.useState)(""),De=Object(n.a)(ke,2),Ye=(De[0],De[1]),qe=Object(c.useState)(""),ze=Object(n.a)(qe,2),Ae=ze[0],Be=ze[1],Me=Object(c.useState)(""),Ie=Object(n.a)(Me,2),Qe=(Ie[0],Ie[1]),We=Object(c.useState)(""),Pe=Object(n.a)(We,2),Le=(Pe[0],Pe[1]),He=Object(c.useState)(""),Je=Object(n.a)(He,2),Ue=(Je[0],Je[1]),Ge=Object(c.useState)([]),Ve=Object(n.a)(Ge,2),Ke=Ve[0],Xe=Ve[1],Ze=0,$e=Object(E.i)(),et=$e.id,tt=$e.search,at=D(),nt=Object(O.a)(),lt=(nt.settings,nt.updateSettings,o.a.useState(null)),it=Object(n.a)(lt,2),ct=it[0],ot=it[1];function rt(){ot(null)}var st=Object(_.useReactToPrint)({content:function(){return j.current},header:function(){return j.current}}),ut=Object(E.g)();Object(c.useEffect)((function(){document.title="Request for quoatation - Amaco",y.g.get("rfq/"+et).then((function(e){var t,a,n,l,i,c,o,r,s,u,m,d,f,p,v,b,E,g,y,j,h,O,x,S,w,N,_,C,R,T,k,D=e.data;z(F()(D[0].requested_date).format("DD MMM YYYY")),I(F()(D[0].require_date).format("DD MMM YYYY")),P(null===(t=D[0])||void 0===t||null===(a=t.party[0])||void 0===a?void 0:a.fname),V(null===(n=D[0])||void 0===n||null===(l=n.party[0])||void 0===l?void 0:l.firm_name),Te(null===(i=D[0])||void 0===i||null===(c=i.party[0])||void 0===c?void 0:c.firm_name_in_ar),Z(null===(o=D[0])||void 0===o||null===(r=o.party[0])||void 0===r?void 0:r.city),te(null===(s=D[0])||void 0===s||null===(u=s.party[0])||void 0===u?void 0:u.street),oe(null===(m=D[0])||void 0===m||null===(d=m.party[0])||void 0===d?void 0:d.zip_code),le(null===(f=D[0])||void 0===f||null===(p=f.party[0])||void 0===p?void 0:p.post_box_no),ue(null===(v=D[0])||void 0===v||null===(b=v.party[0])||void 0===b?void 0:b.vat_no),fe(null===(E=D[0])||void 0===E||null===(g=E.party[0])||void 0===g?void 0:g.registration_no),Ye(null===(y=D[0])||void 0===y||null===(j=y.contact)||void 0===j?void 0:j.fname),Be(null===(h=D[0])||void 0===h||null===(O=h.contact)||void 0===O?void 0:O.email),Qe(null===(x=D[0])||void 0===x||null===(S=x.contact)||void 0===S?void 0:S.mobno),Ue(null===(w=D[0])||void 0===w||null===(N=w.contact)||void 0===N?void 0:N.designation),Ee(null===(_=D[0])||void 0===_?void 0:_.rfq_details),he(D[0].files),Ce(null===(C=D[0])||void 0===C||null===(R=C.party[0])||void 0===R?void 0:R.contact),Le(null===(T=D[0])||void 0===T||null===(k=T.party[0])||void 0===k?void 0:k.vendor_id)})),y.g.get("rfq/"+et).then((function(e){e.data}))}),[]);window.onafterprint=function(){window.close(),window.location.href=""};i.orderNo,i.buyer,i.seller,i.item,i.status,i.vat,i.date;return o.a.createElement(r.a,{className:Object(h.default)("invoice-viewer py-4",at.invoiceViewer)},o.a.createElement("div",{className:"viewer_actions px-4 mb-5 flex items-center justify-between"},o.a.createElement(g.b,{to:"po"==tt?y.w+"/sales/rfq-form/rfqview/2":y.w+"/sales/rfq-form/rfqview/0"},o.a.createElement(s.a,null,o.a.createElement(u.a,null,"arrow_back"))),"po"==tt?"":o.a.createElement("div",null,o.a.createElement(m.a,{variant:"outlined",color:"primary",className:"mr-4 py-2","aria-owns":ct?"simple-menu":void 0,"aria-haspopup":"true",onClick:function(e){ot(e.currentTarget)}},"ACTION",o.a.createElement(u.a,null,"expand_more")),o.a.createElement(w.a,{id:"simple-menu",anchorEl:ct,open:Boolean(ct),onClose:rt},tt?o.a.createElement(o.a.Fragment,null,o.a.createElement(N.a,{onClick:function(){return function(){var e;rt(),S.a.fire((e={title:"Are you sure?",text:"You will not be able to recover this RFQ!",icon:"danger",showCancelButton:!0,confirmButtonText:"Yes, delete it!"},Object(l.a)(e,"icon","warning"),Object(l.a)(e,"cancelButtonText","No, keep it"),e)).then((function(e){e.value?y.g.delete("rfqdelete/".concat(et)).then((function(e){S.a.fire("Deleted!"," RFQ has been deleted.","success"),ut.push(y.w+"/sales/rfq-form/rfqview")})):e.dismiss===S.a.DismissReason.cancel&&S.a.fire("Cancelled","Your RFQ is safe :)","error")}))}()}},"DELETE RFQ"),o.a.createElement(N.a,{onClick:function(){return function(){var e;rt(),S.a.fire((e={title:"Are you sure?",text:"You want to recover this RFQ!",icon:"danger",showCancelButton:!0,confirmButtonText:"Yes"},Object(l.a)(e,"icon","warning"),Object(l.a)(e,"cancelButtonText","No"),e)).then((function(e){e.value?y.g.put("rfqRecover/".concat(et)).then((function(e){S.a.fire("Recovered!"," RFQ has been Recovered.","success"),ut.push(y.w+"/sales/rfq-form/rfqview")})):e.dismiss===S.a.DismissReason.cancel&&S.a.fire("Cancelled","","error")}))}()}},"RESTORE RFQ")):o.a.createElement(o.a.Fragment,null,o.a.createElement(N.a,{onClick:function(){return function(){var e;rt(),S.a.fire((e={title:"Are you sure?",text:"You want move RFQ Details to trash !",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Move it!"},Object(l.a)(e,"icon","warning"),Object(l.a)(e,"cancelButtonText","No, keep it"),e)).then((function(e){e.value?y.g.delete("rfq/".concat(et)).then((function(e){S.a.fire("Moved to Trash !"," RFQ has been moved to trash.","success"),ut.push(y.w+"/sales/rfq-form/rfqview")})):e.dismiss===S.a.DismissReason.cancel&&S.a.fire("Cancelled","Your RFQ is safe :)","error")}))}()}},"DELETE RFQ"),o.a.createElement(N.a,{onClick:function(){var e=Math.ceil(j.current.scrollHeight/1123);console.log(e);for(var t=[],a=0;a<e;a++){var n=a,l="Page "+(n=++n)+" of "+e;t[a]=l}console.log(t),Xe(t),setTimeout((function(){st()}),500)}},"PRINT RFQ"),o.a.createElement(N.a,{onClick:function(){ut.push("../edit/".concat(et))}},"EDIT RFQ"))),!tt&&o.a.createElement(m.a,{className:"mr-4 py-2",color:"warnning",variant:"outlined",onClick:function(){ut.push(y.w+"/purchaseanalysis/".concat(et))}},"GENERATE PURCHASE ORDER"))),o.a.createElement("div",{id:"print-area",ref:j,style:{fontFamily:"Calibri",fontSize:16}},Ke.map((function(e,t){return 0==t?Ze=1535:Ze+=1563,o.a.createElement("span",{className:"showPageNumber",style:{position:"relative",top:Ze,display:"none"}}," ",o.a.createElement("center",null,e))})),o.a.createElement("table",null,o.a.createElement(R.a,null),o.a.createElement("hr",null),o.a.createElement("tbody",{style:{marginBottom:"50px"}},o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("div",{className:"px-2 flex justify-between"},o.a.createElement("div",{className:"px-2 flex justify-end"},o.a.createElement("div",{className:"flex "},o.a.createElement("div",{className:""},o.a.createElement("div",{className:"pl-2 pb-4"},o.a.createElement("span",{style:{fontWeight:1e3}},"SUPPLIER NAME"),o.a.createElement("br",null),G||"---"),o.a.createElement("div",{className:"pl-2 pb-4 "},o.a.createElement("span",{style:{fontWeight:1e3}},"EMAIL ID"),o.a.createElement("br",null),Ae||"---")),o.a.createElement("div",null))),o.a.createElement("div",{className:"px-2 flex justify-left"},o.a.createElement("div",{className:"flex "},o.a.createElement("div",{className:""},o.a.createElement("div",{className:"pl-2 pb-4"},o.a.createElement("span",{style:{fontWeight:1e3}},"RFQ DATE"),o.a.createElement("br",null),F()(q).format("DD MMM YYYY")),o.a.createElement("div",{className:"pl-2 pb-4 "},o.a.createElement("span",{style:{fontWeight:1e3}},"BID CLOSING DATE"),o.a.createElement("br",null),F()(M).format("DD MMM YYYY"))),o.a.createElement("div",null))),o.a.createElement("div",{className:"px-2 flex justify-left"},o.a.createElement("div",{className:"flex "},o.a.createElement("div",{className:""},o.a.createElement("div",{className:"pl-2"},o.a.createElement("h5",{style:{fontWeight:1e3}})),o.a.createElement("div",{className:"pl-2 "},o.a.createElement("h5",{style:{fontWeight:1e3}})),o.a.createElement("div",{className:"pl-2 "},o.a.createElement("h5",{style:{fontWeight:1e3}}))),o.a.createElement("div",null)))),o.a.createElement(r.a,{className:"mb-4",elevation:0},o.a.createElement("div",{className:"viewer_actions px-4 mb-5 flex items-center justify-between"},o.a.createElement(d.a,null,o.a.createElement(f.a,{style:{border:"1px solid #ccc",fontFamily:"Calibri",backgroundColor:"#1d2257",fontWeight:1e3,fontSize:16}},o.a.createElement(p.a,{style:{border:"1px solid #ccc",fontFamily:"Calibri",color:"#fff",fontWeight:1e3,fontSize:16}},o.a.createElement(v.a,{className:"pl-0",colspan:1,align:"center",style:{border:"1px solid #ccc",fontFamily:"Calibri",color:"#fff",fontWeight:1e3,fontSize:16}},"S.No."),o.a.createElement(v.a,{className:"px-0",colspan:3,align:"center",style:{border:"1px solid #ccc",fontFamily:"Calibri",color:"#fff",fontWeight:1e3,fontSize:16}},"DESCRIPTION"),o.a.createElement(v.a,{className:"px-0",align:"center",style:{border:"1px solid #ccc",fontFamily:"Calibri",color:"#fff",fontWeight:1e3,fontSize:16}},"QTY"),o.a.createElement(v.a,{className:"px-0",align:"center",style:{border:"1px solid #ccc",fontFamily:"Calibri",color:"#fff",fontWeight:1e3,fontSize:16}},"UOM"))),o.a.createElement(b.a,null,null===be||void 0===be?void 0:be.map((function(e,t){var a;return e.unit*e.price,o.a.createElement(p.a,{key:t},o.a.createElement(v.a,(a={className:"pr-0 capitalize",align:"left",colspan:1},Object(l.a)(a,"align","center"),Object(l.a)(a,"style",{border:"1px solid #ccc",fontFamily:"Calibri",color:"#000",fontSize:16}),a),t+1),o.a.createElement(v.a,{className:"pr-0 pl-2 capitalize",align:"left",colspan:3,style:{border:"1px solid #ccc",fontFamily:"Calibri",color:"#000",fontSize:16}},o.a.createElement("strong",null,null===e||void 0===e?void 0:e.product_name),"(",null===e||void 0===e?void 0:e.description,")"),o.a.createElement(v.a,{className:"pr-0 capitalize",align:"center",style:{border:"1px solid #ccc",fontFamily:"Calibri",color:"#000",fontSize:16}},e.quantity),o.a.createElement(v.a,{className:"pr-0 capitalize",align:"center",style:{border:"1px solid #ccc",fontFamily:"Calibri",color:"#000",fontSize:16}},null===e||void 0===e?void 0:e.unit_of_measure))}))))))))),o.a.createElement("tfoot",null,o.a.createElement("div",{class:"empty-footer"}))),o.a.createElement("div",{class:"footer"},o.a.createElement(T.a,null))),o.a.createElement("div",{className:"mb-8"},o.a.createElement("div",{className:"flex flex-wrap justify-center items-center m--2"},je.map((function(e,t){return o.a.createElement(r.a,{elevation:6,className:Object(h.default)({"flex-column justify-center items-center py-6 px-8 m-2 cursor-pointer":!0})},"jpg"===e.file_name.split(".")[1]&&o.a.createElement(u.a,null,"photo_library"),"png"===e.file_name.split(".")[1]&&o.a.createElement(u.a,null,"photo_library"),"pdf"===e.file_name.split(".")[1]&&o.a.createElement(u.a,null,"picture_as_pdf"),o.a.createElement("a",{href:e.img_url,target:"_blank"},e.file_name.split("/")[2]))})))))}}}]);