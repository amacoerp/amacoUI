(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[217],{2081:function(e,t,a){"use strict";a.r(t);var n=a(16),l=a(18),r=a(0),i=a.n(r),c=a(1437),s=a(594),o=a(1640),u=a(674),m=a(53),d=a(1414),p=a(149),b=a.n(p),f=a(4),v=a(70),g=[{value:"Mr",label:"Mr"},{value:"Mrs",label:"Mrs"},{value:"Ms",label:"Ms"}],x=[{value:91,label:"+91"},{value:973,label:"+973"},{value:965,label:"+965"},{value:961,label:"+961"},{value:968,label:"+968"},{value:974,label:"+974"},{value:966,label:"+966"},{value:971,label:"+971"},{value:967,label:"+967"}];t.default=function(e){e.uid;var t,a=e.open,p=e.handleClose,E=e.contactid,y=e.customercontact,h=e.partyid,O=parseInt(h),j=Object(r.useState)(""),N=Object(l.a)(j,2),S=N[0],C=N[1],w=Object(r.useState)(""),A=Object(l.a)(w,2),P=A[0],T=A[1],k=Object(r.useState)(""),z=Object(l.a)(k,2),I=z[0],R=z[1],_=Object(r.useState)(""),M=Object(l.a)(_,2),V=M[0],W=M[1],D=Object(r.useState)(""),H=Object(l.a)(D,2),L=H[0],Y=H[1],B=Object(r.useState)(""),U=Object(l.a)(B,2),F=U[0],q=U[1],J=Object(r.useState)(""),$=Object(l.a)(J,2),K=$[0],G=$[1],Q=Object(r.useState)(""),X=Object(l.a)(Q,2),Z=X[0],ee=X[1],te=Object(r.useState)(""),ae=Object(l.a)(te,2),ne=ae[0],le=ae[1],re=Object(r.useState)(""),ie=Object(l.a)(re,2),ce=ie[0],se=ie[1],oe=Object(r.useState)(""),ue=Object(l.a)(oe,2),me=ue[0],de=ue[1],pe=Object(r.useState)(""),be=Object(l.a)(pe,2),fe=be[0],ve=be[1],ge=Object(r.useState)(!1),xe=Object(l.a)(ge,2),Ee=xe[0],ye=xe[1],he=Object(r.useState)([]),Oe=Object(l.a)(he,2),je=(Oe[0],Oe[1],Object(r.useState)(!0)),Ne=Object(l.a)(je,2),Se=(Ne[0],Ne[1],i.a.useState(!0)),Ce=Object(l.a)(Se,2),we=Ce[0],Ae=(Ce[1],i.a.useState("md")),Pe=Object(l.a)(Ae,2),Te=Pe[0],ke=(Pe[1],Object(v.a)().user),ze=function(){C(""),T(""),R(""),ve(""),W(""),Y(""),de(""),se("")};return Object(r.useEffect)((function(){E&&f.g.get("contact/"+E).then((function(e){var t=e.data;C(t[0].fname),T(t[0].lname),R(t[0].email),W(t[0].mobno),Y(t[0].landline),de(t[0].designation),se(t[0].address),ve(t[0].prefix),G(t[0].mcode),q(t[0].lcode),le(t[0].mext),ee(t[0].lext)}))}),[E]),i.a.createElement(c.a,{onClose:p,open:a,style:{zIndex:1e3},maxWidth:Te,fullWidth:we},i.a.createElement("div",{className:"p-6"},i.a.createElement("h4",{className:"mb-5"},"CONTACT DETAILS"),i.a.createElement(m.ValidatorForm,{onSubmit:function(){if(ye(!0),E){var e={party_id:O,fname:S.toUpperCase(),lname:P.toUpperCase(),designation:me,mobno:V,landline:L,email:I,lcode:F,mcode:K,lext:Z,mext:ne,address:ce,prefix:fe,user_id:ke.id,div_id:localStorage.getItem("division")};f.g.put("contact/"+E,e).then((function(e){f.g.get("parties/"+O).then((function(e){var t=e.data;y(t[0].contacts)})),p(),b.a.fire({title:"Success",type:"success",icon:"success",text:"Data saved successfully."}).then((function(e){}))})).catch((function(e){}))}else{var t={party_id:O,fname:S,lname:P,designation:me,mobno:V,lcode:F,mcode:K,lext:Z,mext:ne,email:I,address:ce,prefix:fe,user_id:ke.id,div_id:localStorage.getItem("division")};f.g.post("contact",t).then((function(e){f.g.get("parties/"+O).then((function(e){var t=e.data;y(t[0].contacts),b.a.fire({title:"Success",icon:"success",type:"success",text:"Data saved successfully."}).then((function(e){}))})),ze(),p()})).catch((function(e){}))}},autoComplete:"off",inputProps:{style:{textTransform:"capitalize"}}},i.a.createElement("div",{className:"flex"},i.a.createElement(s.a,{className:"mr-2",autoComplete:"none",label:"Prefix",variant:"outlined",onChange:function(e){return ve(e.target.value)},value:fe,size:"small",style:{width:"180px"},select:!0},g.map((function(e,t){return i.a.createElement(o.a,{value:e.value,key:e},e.label)}))),i.a.createElement(m.TextValidator,{className:"w-full mb-4",label:"First Name",inputProps:{required:!0,style:{textTransform:"capitalize"}},size:"small",variant:"outlined",required:!0,value:S,onChange:function(e){return C(e.target.value)},type:"text",name:"fname",style:{width:724}})),i.a.createElement(m.TextValidator,{className:"w-full mb-4",label:"Last Name",inputProps:{style:{textTransform:"capitalize"}},size:"small",variant:"outlined",onChange:function(e){return T(e.target.value)},type:"text",name:"lname",value:P}),i.a.createElement(m.TextValidator,(t={className:"w-full mb-4",label:"Email",size:"small",variant:"outlined",onChange:function(e){return R(e.target.value)},type:"text",name:"email",validators:["isEmail"],errorMessages:["Please Enter valid Email"],value:I},Object(n.a)(t,"validators",["isEmail"]),Object(n.a)(t,"errorMessages","Invalid Email"),t)),i.a.createElement(m.TextValidator,{className:"w-full mb-4",label:"Designation",inputProps:{style:{textTransform:"capitalize"}},size:"small",variant:"outlined",onChange:function(e){return de(e.target.value)},type:"text",name:"designation",value:me}),i.a.createElement("div",{className:"flex"},i.a.createElement(s.a,{className:"mr-2",label:"Code",autoComplete:"none",onChange:function(e){return G(e.target.value)},name:"mobno",type:"text",size:"small",style:{width:"260px"},variant:"outlined",value:K||"",fullWidth:!0,select:!0},x.map((function(e,t){return i.a.createElement(o.a,{value:e.value,key:e},e.label)}))),i.a.createElement(m.TextValidator,{className:"w-full mb-4 mr-2",label:"Mobile Number",size:"small",variant:"outlined",validators:["matchRegexp:^(0|[1-9][0-9]*)$"],errorMessages:["Number is not valid"],onChange:function(e){return W(e.target.value)},inputProps:{style:{width:400}},type:"text",name:"contact1",value:V}),i.a.createElement(s.a,{className:"w-50 mb-4 ml-2",label:"Ext",size:"small",variant:"outlined",onChange:function(e){return le(e.target.value)},type:"text",name:"mext",value:ne})),i.a.createElement("div",{className:"flex"},i.a.createElement(s.a,{className:"mr-2",label:"Code",autoComplete:"none",onChange:function(e){return q(e.target.value)},name:"mobno",type:"text",size:"small",style:{width:"260px"},variant:"outlined",value:F||"",fullWidth:!0,select:!0},x.map((function(e,t){return i.a.createElement(o.a,{value:e.value,key:e},e.label)}))),i.a.createElement(m.TextValidator,{className:"mb-4",label:"Landline Number",size:"small",variant:"outlined",onChange:function(e){return Y(e.target.value)},inputProps:{style:{width:400}},validators:["matchRegexp:^(0|[1-9][0-9]*)$"],errorMessages:["Number is not valid"],type:"text",name:"contact2",value:L}),i.a.createElement(s.a,{className:"w-50 mb-4 ml-2",label:"Ext",size:"small",variant:"outlined",onChange:function(e){return ee(e.target.value)},type:"text",name:"lext",value:Z})),i.a.createElement(m.TextValidator,{className:"w-full mb-4",label:"Address",inputProps:{style:{textTransform:"capitalize"}},size:"small",variant:"outlined",onChange:function(e){return se(e.target.value)},multiline:!0,type:"text",name:"contact2",value:ce}),i.a.createElement("div",{className:"flex  items-center"},i.a.createElement(u.a,{variant:"outlined",className:"mr-4 py-2",color:"primary",type:"submit",disabled:Ee},i.a.createElement(d.a,null,"save"),"SAVE"),i.a.createElement(u.a,{variant:"outlined",className:"mr-4 py-2",color:"secondary",onClick:function(){return p()}},i.a.createElement(d.a,null,"cancel")," CANCEL"),!E&&i.a.createElement(u.a,{color:".bg-green",className:"py-2",variant:"outlined",type:"reset",onClick:ze},i.a.createElement(d.a,null,"loop"),i.a.createElement("span",{className:"pl-2 capitalize"},"RESET")),i.a.createElement("div",{className:"flex justify-between items-center"})))))}},3318:function(e,t,a){"use strict";a.r(t);var n=a(19),l=a(18),r=a(0),i=a.n(r),c=a(100),s=a(1550),o=a.n(s),u=a(1414),m=a(47),d=a(2081),p=a(1659),b=a(4),f=a(683),v=a(70),g=a(1632),x=a(674),E=["index"],y=["index"],h=["index"],O=["index"],j=["index"],N=["index"],S=Object(f.a)((function(e){return{button:{margin:e.spacing(1),float:"right",background:"blue",color:"white"},input:{display:"none"},columnStyleWithWidthSno:{top:"0px",left:"0px",zIndex:"50",position:"sticky",backgroundColor:"#fff",width:"50px",textAlign:"center"},columnStyleWithWidth:{top:"0px",left:"0px",zIndex:"100",position:"sticky",backgroundColor:"#fff",width:"600px",wordBreak:"break-word",hyphens:"auto",textAlign:"center"}}}));t.default=function(){var e=S(),t=(Object(v.a)().user,Object(r.useState)(!0)),a=Object(l.a)(t,2),s=a[0],f=a[1],C=Object(r.useState)([]),w=Object(l.a)(C,2),A=w[0],P=w[1],T=Object(r.useState)(!1),k=Object(l.a)(T,2),z=k[0],I=k[1],R=Object(r.useState)(!1),_=Object(l.a)(R,2),M=_[0],V=(_[1],function(){I(!1)});Object(r.useEffect)((function(){return"party"!==localStorage.getItem("page")&&(localStorage.removeItem("search"),localStorage.removeItem("page")),b.g.get("getParties/".concat(localStorage.getItem("division"))).then((function(e){var t=e.data;s&&P(t)})),function(){return f(!1)}}),[s]);var W=[{name:"id",label:"S.NO.",options:{customHeadRender:function(e){var t=e.index;Object(n.a)(e,E);return i.a.createElement(g.a,{key:t,style:{width:100,textAlign:"center"}},i.a.createElement("span",{textAlign:"center"},"S.NO."))},setCellProps:function(){return{align:"center"}}}},{name:"firm_name",label:"COMPANY NAME",options:{customHeadRender:function(t){var a=t.index;Object(n.a)(t,y);return i.a.createElement(g.a,{key:a,className:e.columnStyleWithWidth,inputProps:{style:{textTransform:"capitalize"}}},i.a.createElement("span",null,"COMPANY NAME"))},setCellProps:function(){return{align:"center",wordWrap:"break"}}}},{name:"vat_no",label:"VAT NO",options:{filter:!0,customHeadRender:function(e){var t=e.index;Object(n.a)(e,h);return i.a.createElement(g.a,{key:t,style:{textAlign:"center"}},i.a.createElement("span",null,"VAT NO"))},setCellProps:function(){return{align:"center"}}}},{name:"vendor code",label:"VENDOR CODE",options:{filter:!0,customHeadRender:function(e){var t=e.index;Object(n.a)(e,O);return i.a.createElement(g.a,{key:t,style:{textAlign:"center"}},i.a.createElement("span",null,"PARTY TYPE"))},setCellProps:function(){return{align:"center"}}}},{name:"vendor code",label:"VENDOR CODE",options:{filter:!0,customHeadRender:function(e){var t=e.index;Object(n.a)(e,j);return i.a.createElement(g.a,{key:t,className:"pr-2",style:{textAlign:"right"}},i.a.createElement("span",null,"BALANCE"))},setCellProps:function(){return{align:"right",paddingLeft:20}}}},{name:"id",label:"ACTION",options:{filter:!0,customHeadRender:function(e){var t=e.index;Object(n.a)(e,N);return i.a.createElement(g.a,{key:t,style:{textAlign:"right"},className:"pr-15"},i.a.createElement("span",null,"ACTION"))},customBodyRender:function(e,t,a){return i.a.createElement("div",{style:{textAlign:"end"},className:"pr-15"},i.a.createElement(m.b,{style:{textAlign:"right",paadingRight:20},to:b.w+"/pages/view-customer/"+t.rowData[5]},i.a.createElement(p.a,{title:"Party contact details"},i.a.createElement(u.a,{color:"primary",style:{transform:"rotate(270deg)",transition:"all 0.25s ease-in-out",textAlign:"right"}},"arrow_drop_down_circle"))))}}}];return i.a.createElement("div",null,i.a.createElement("div",{className:"m-sm-30"},i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement("div",{className:"flex flex-wrap justify-between"},i.a.createElement(c.b,{routeSegments:[{name:"PARTY"}]}),z&&i.a.createElement(d.default,{handleClose:V,open:z}),M&&i.a.createElement(c.c,{open:M,onConfirmDialogClose:V,text:"Are you sure to delete?"}),i.a.createElement("div",{className:"text-right"},i.a.createElement(m.b,{to:"./Addparty"},i.a.createElement(x.a,{className:"py-2",color:"primary",variant:"outlined"},i.a.createElement(u.a,null,"add"),"ADD NEW"))))),i.a.createElement(o.a,{title:"PARTY",data:A.filter((function(e){return e.div_id==localStorage.getItem("division")})).map((function(e,t){return[++t,e.firm_name,e.vat_no?e.vat_no:"--",e.party_type.toUpperCase(),e.opening_balance,e.id]})),columns:W,minWidth:"6px",inputProps:{style:{wordBreak:"break-word"}},options:{filterType:"textField",responsive:"simple",selectableRows:"none",rowsPerPageOptions:[10,20,40,80,100],onSearchClose:function(e){localStorage.removeItem("search"),localStorage.removeItem("page")},searchProps:{onKeyUp:function(e){localStorage.setItem("search",e.target.value),localStorage.setItem("page","party")}},searchText:localStorage.getItem("search")&&localStorage.getItem("search")}})))}}}]);