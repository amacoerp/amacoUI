(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[190],{2573:function(e,a,t){e.exports=t.p+"static/media/pdf.d63049de.png"},2574:function(e,a,t){e.exports=t.p+"static/media/excel.1771a05f.png"},2575:function(e,a,t){e.exports=t.p+"static/media/doc.a16655a1.jpg"},2576:function(e,a,t){e.exports=t.p+"static/media/zipp.0a2ad107.png"},2798:function(e,a,t){"use strict";t.r(a);var l=t(20),n=t(1),c=t.n(n),m=t(91),r=t(1348),s=t(45),i=(t(22),t(1392)),u=t.n(i),o=t(1223),p=t(1420),E=t(1222),d=t(1384),f=t(1386),v=t(1385),b=t(1382),g=t(4),N=t(2573),h=t.n(N),x=t(2574),_=t.n(x),y=t(2575),j=t.n(y),O=t(2576),w=t.n(O);a.default=function(){var e=Object(s.i)().id,a=Object(n.useState)([]),t=Object(l.a)(a,2),i=t[0],N=t[1],x=Object(n.useState)(),y=Object(l.a)(x,2),O=y[0],k=y[1],S=Object(n.useState)([]),D=Object(l.a)(S,2),Y=D[0],M=D[1],V=Object(n.useState)(""),F=Object(l.a)(V,2),P=F[0],A=F[1],B=Object(n.useState)(""),I=Object(l.a)(B,2),q=I[0],z=I[1],C=Object(n.useState)(""),J=Object(l.a)(C,2),L=J[0],R=J[1],T=Object(n.useState)([]),U=Object(l.a)(T,2),G=U[0],H=U[1],K=function(e,a){return"jpg"===e||"png"===e||"jpeg"===e?a:"pdf"===e?h.a:"docx"===e?j.a:"exe"===e?_.a:"zip"===e?w.a:void 0};return Object(n.useEffect)((function(){g.g.get("expense/"+e).then((function(e){var a=e.data;N(a[0]),M(a.mapdata),A(null===a||void 0===a?void 0:a.account[0].name),H(a[0].column_data),z(a.img),R(a.referrenceImgUrl),k(a[0].payment_account[0].name)}))}),[]),c.a.createElement("div",{className:"m-sm-30"},c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(m.b,{routeSegments:[{name:"View Expense",path:g.x+"/expenseview"},{name:"Expenses"}]})),c.a.createElement(o.a,{className:"pt-6",elevation:3},c.a.createElement("small",{className:"text-muted pl-4"},c.a.createElement("h5",{className:"pl-4"},c.a.createElement("strong",null,"Expense Details:"),i.registration_no)),c.a.createElement(p.a,null),c.a.createElement(E.a,{container:!0,spacing:2},c.a.createElement(E.a,{item:!0,lg:6,md:6,xs:12},c.a.createElement(d.a,{className:"mb-4"},c.a.createElement(f.a,null,c.a.createElement(v.a,null,c.a.createElement(b.a,{className:"pl-4"},"Voucher No."),c.a.createElement(b.a,null,null===i||void 0===i?void 0:i.voucher_no)),c.a.createElement(v.a,null,c.a.createElement(b.a,{className:"pl-4"},"Expense Division"),c.a.createElement(b.a,null,O)),c.a.createElement(v.a,null,c.a.createElement(b.a,{className:"pl-4"},"Payment Account"),c.a.createElement(b.a,null,P)),c.a.createElement(v.a,null,c.a.createElement(b.a,{className:"pl-4"},"Paid From"),c.a.createElement(b.a,null,null===Y||void 0===Y?void 0:Y.map((function(e,a){var t;return c.a.createElement("text",null,c.a.createElement("small",{className:"bg-gray border-radius-4 px-2 py-2 mr-2"},c.a.createElement("strong",null,null===(t=e[0])||void 0===t?void 0:t.name)))})))),c.a.createElement(v.a,null,c.a.createElement(b.a,{className:"pl-4"},"Description"),c.a.createElement(b.a,null,i.description)),c.a.createElement(v.a,null,c.a.createElement(b.a,{className:"pl-4"},"Tax Amount"),c.a.createElement(b.a,null,null!==i.tax?parseFloat(i.tax).toLocaleString(void 0,{minimumFractionDigits:2}):"0.00")),c.a.createElement(v.a,null,c.a.createElement(b.a,{className:"pl-4"},"Paid Date"),c.a.createElement(b.a,null,u()(i.paid_date).format("DD MMM YYYY"))),c.a.createElement(v.a,null,c.a.createElement(b.a,{className:"pl-4"},"Paid To"),c.a.createElement(b.a,null,i.paid_to)),null!==i.company&&c.a.createElement(v.a,null,c.a.createElement(b.a,{className:"pl-4"},"Company"),c.a.createElement(b.a,null,i.company)),null!==i.vatno&&c.a.createElement(v.a,null,c.a.createElement(b.a,{className:"pl-4"},"Vat No"),c.a.createElement(b.a,null,i.vatno)),null!==i.inv_no&&c.a.createElement(v.a,null,c.a.createElement(b.a,{className:"pl-4"},"Invoice No"),c.a.createElement(b.a,null,i.inv_no)),null===G||void 0===G?void 0:G.map((function(e,a){var t,l,n;return c.a.createElement(v.a,null,c.a.createElement(b.a,{className:"pl-4"},null===(t=e.column)||void 0===t?void 0:t.name),"file"===(null===(l=e.column)||void 0===l?void 0:l.type)?c.a.createElement(b.a,null,c.a.createElement(r.a,{title:"View"},c.a.createElement("a",{href:e.file,target:"_blank"},c.a.createElement("img",{src:K(e.file.split(".")[3],e.file),width:"100px",height:"100px"})))):c.a.createElement(b.a,null,"date"===(null===(n=e.column)||void 0===n?void 0:n.type)?u()(e.value).format("DD  MMM, YYYY "):e.value))}))))),c.a.createElement(E.a,{item:!0,lg:6,md:6,xs:12},c.a.createElement(d.a,{className:"mb-4"},c.a.createElement(f.a,null,c.a.createElement(v.a,null,c.a.createElement(b.a,{className:"pl-4"},"Amount"),c.a.createElement(b.a,null,parseFloat(i.amount).toLocaleString(void 0,{minimumFractionDigits:2}))),"No file Uploaded"===L?"":c.a.createElement(v.a,null,i.file_path&&c.a.createElement(b.a,{className:"pl-4"},"Reference Bill"),c.a.createElement(b.a,null,i.file_path&&c.a.createElement(r.a,{title:"View"},c.a.createElement("a",{href:L,target:"_blank"},c.a.createElement("img",{src:i.file_path?K(L.substring(L.lastIndexOf(".")).split(".")[1],L):"",href:L,className:"border-radius-4 w-100 mr-3",style:{width:100,height:100}}))))),null!==i.bank_ref_no&&c.a.createElement(v.a,null,c.a.createElement(b.a,{className:"pl-4"},"Bank Reference Number"),c.a.createElement(b.a,null,i.bank_ref_no)),i.payment_type&&c.a.createElement(v.a,null,c.a.createElement(b.a,{className:"pl-4"},"Payment Mode"),c.a.createElement(b.a,null,i.payment_type)),"cheque"==i.payment_type&&c.a.createElement(v.a,null,c.a.createElement(b.a,{className:"pl-4"},"Cheque Number"),c.a.createElement(b.a,null,i.check_no)),"banktransfer"==i.payment_type&&c.a.createElement(v.a,null,c.a.createElement(b.a,{className:"pl-4"},"Bank Slip"),c.a.createElement(b.a,null,c.a.createElement(r.a,{title:"View"},c.a.createElement("a",{href:q},c.a.createElement("img",{src:q,href:q,className:"border-radius-4 w-100 mr-3",style:{width:100,height:100},target:"_blank"})))))))))))}}}]);