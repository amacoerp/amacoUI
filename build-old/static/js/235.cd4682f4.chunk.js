(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[235],{3467:function(e,a,t){"use strict";t.r(a);var l=t(18),n=t(0),c=t.n(n),m=t(100),r=t(1662),s=t(31),i=(t(26),t(1660)),u=t.n(i),E=t(1357),o=t(2018),p=t(298),d=t(1630),b=t(1632),v=t(1631),f=t(1635),g=t(4),N=t.p+"static/media/pdf.ebc43593.png",h=t.p+"static/media/excel.5b54e07c.png",_=t.p+"static/media/doc.17c82cb8.jpg",x=t.p+"static/media/zipp.99d7a357.png";a.default=function(){var e=Object(s.i)().id,a=Object(n.useState)([]),t=Object(l.a)(a,2),i=t[0],y=t[1],j=Object(n.useState)(),O=Object(l.a)(j,2),w=O[0],k=O[1],S=Object(n.useState)([]),D=Object(l.a)(S,2),Y=D[0],M=D[1],V=Object(n.useState)(""),F=Object(l.a)(V,2),P=F[0],A=F[1],B=Object(n.useState)(""),I=Object(l.a)(B,2),T=I[0],q=I[1],z=Object(n.useState)(""),C=Object(l.a)(z,2),J=C[0],L=C[1],R=Object(n.useState)([]),U=Object(l.a)(R,2),G=U[0],H=U[1],K=function(e,a){return"jpg"===e||"png"===e||"jpeg"===e?a:"pdf"===e?N:"docx"===e?_:"exe"===e?h:"zip"===e?x:void 0};return Object(n.useEffect)((function(){g.g.get("expense/"+e).then((function(e){var a=e.data;y(a[0]),M(a.mapdata),A(null===a||void 0===a?void 0:a.account[0].name),H(a[0].column_data),q(a.img),L(a.referrenceImgUrl),k(a[0].payment_account[0].name)}))}),[]),c.a.createElement("div",{className:"m-sm-30"},c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(m.b,{routeSegments:[{name:"View Expense",path:g.w+"/expenseview"},{name:"Expenses"}]})),c.a.createElement(E.a,{className:"pt-6",elevation:3},c.a.createElement("small",{className:"text-muted pl-4"},c.a.createElement("h5",{className:"pl-4"},c.a.createElement("strong",null,"Expense Details:"),i.registration_no)),c.a.createElement(o.a,null),c.a.createElement(p.a,{container:!0,spacing:2},c.a.createElement(p.a,{item:!0,lg:6,md:6,xs:12},c.a.createElement(d.a,{className:"mb-4"},c.a.createElement(b.a,null,c.a.createElement(v.a,null,c.a.createElement(f.a,{className:"pl-4"},"Voucher No."),c.a.createElement(f.a,null,null===i||void 0===i?void 0:i.voucher_no)),c.a.createElement(v.a,null,c.a.createElement(f.a,{className:"pl-4"},"Expense Division"),c.a.createElement(f.a,null,w)),c.a.createElement(v.a,null,c.a.createElement(f.a,{className:"pl-4"},"Payment Account"),c.a.createElement(f.a,null,P)),c.a.createElement(v.a,null,c.a.createElement(f.a,{className:"pl-4"},"Paid From"),c.a.createElement(f.a,null,null===Y||void 0===Y?void 0:Y.map((function(e,a){var t;return c.a.createElement("text",null,c.a.createElement("small",{className:"bg-gray border-radius-4 px-2 py-2 mr-2"},c.a.createElement("strong",null,null===(t=e[0])||void 0===t?void 0:t.name)))})))),c.a.createElement(v.a,null,c.a.createElement(f.a,{className:"pl-4"},"Description"),c.a.createElement(f.a,null,i.description)),c.a.createElement(v.a,null,c.a.createElement(f.a,{className:"pl-4"},"Tax Amount"),c.a.createElement(f.a,null,null!==i.tax?parseFloat(i.tax).toLocaleString(void 0,{minimumFractionDigits:2}):"0.00")),c.a.createElement(v.a,null,c.a.createElement(f.a,{className:"pl-4"},"Paid Date"),c.a.createElement(f.a,null,u()(i.paid_date).format("DD MMM YYYY"))),c.a.createElement(v.a,null,c.a.createElement(f.a,{className:"pl-4"},"Paid To"),c.a.createElement(f.a,null,i.paid_to)),null!==i.company&&c.a.createElement(v.a,null,c.a.createElement(f.a,{className:"pl-4"},"Company"),c.a.createElement(f.a,null,i.company)),null!==i.vatno&&c.a.createElement(v.a,null,c.a.createElement(f.a,{className:"pl-4"},"VAT No"),c.a.createElement(f.a,null,i.vatno)),null!==i.inv_no&&c.a.createElement(v.a,null,c.a.createElement(f.a,{className:"pl-4"},"Invoice No"),c.a.createElement(f.a,null,i.inv_no)),null===G||void 0===G?void 0:G.map((function(e,a){var t,l,n;return c.a.createElement(v.a,null,c.a.createElement(f.a,{className:"pl-4"},null===(t=e.column)||void 0===t?void 0:t.name),"file"===(null===(l=e.column)||void 0===l?void 0:l.type)?c.a.createElement(f.a,null,c.a.createElement(r.a,{title:"View"},c.a.createElement("a",{href:e.file,target:"_blank"},c.a.createElement("img",{src:K(e.file.split(".")[3],e.file),width:"100px",height:"100px"})))):c.a.createElement(f.a,null,"date"===(null===(n=e.column)||void 0===n?void 0:n.type)?u()(e.value).format("DD  MMM, YYYY "):e.value))}))))),c.a.createElement(p.a,{item:!0,lg:6,md:6,xs:12},c.a.createElement(d.a,{className:"mb-4"},c.a.createElement(b.a,null,c.a.createElement(v.a,null,c.a.createElement(f.a,{className:"pl-4"},"Amount"),c.a.createElement(f.a,null,parseFloat(i.amount).toLocaleString(void 0,{minimumFractionDigits:2}))),"No file Uploaded"===J?"":c.a.createElement(v.a,null,i.file_path&&c.a.createElement(f.a,{className:"pl-4"},"Reference Bill"),c.a.createElement(f.a,null,i.file_path&&c.a.createElement(r.a,{title:"View"},c.a.createElement("a",{href:J,target:"_blank"},c.a.createElement("img",{src:i.file_path?K(J.substring(J.lastIndexOf(".")).split(".")[1],J):"",href:J,className:"border-radius-4 w-100 mr-3",style:{width:100,height:100}}))))),null!==i.bank_ref_no&&c.a.createElement(v.a,null,c.a.createElement(f.a,{className:"pl-4"},"Bank Reference Number"),c.a.createElement(f.a,null,i.bank_ref_no)),i.payment_type&&c.a.createElement(v.a,null,c.a.createElement(f.a,{className:"pl-4"},"Payment Mode"),c.a.createElement(f.a,null,i.payment_type)),"cheque"==i.payment_type&&c.a.createElement(v.a,null,c.a.createElement(f.a,{className:"pl-4"},"Cheque Number"),c.a.createElement(f.a,null,i.check_no)),"banktransfer"==i.payment_type&&c.a.createElement(v.a,null,c.a.createElement(f.a,{className:"pl-4"},"Bank Slip"),c.a.createElement(f.a,null,c.a.createElement(r.a,{title:"View"},c.a.createElement("a",{href:T},c.a.createElement("img",{src:T,href:T,className:"border-radius-4 w-100 mr-3",style:{width:100,height:100},target:"_blank"})))))))))))}}}]);