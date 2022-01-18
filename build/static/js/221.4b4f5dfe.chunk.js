(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[221],{2884:function(e,t,a){"use strict";a.r(t);var n=a(20),l=a(1),c=a.n(l),o=a(2860),r=a(2702),i=a(1420),u=a(91),s=a(4),m=a(1166),d=a(1446),b=a(1448),p=a(1447),f=a(1384),v=a(1385),E=a(1382),j=a(568),O=a(1458),h=(a(22),a(38)),y=a.n(h),g=a(59),S=a(8),C=a(1220),N=a(1222),_=a(1383),x=a(1167),w=a(56),M=a(356),D=a.n(M),k=function(e){var t=e.open,a=e.handleClose,o=e.parentId,r=(e.type,e.ref),i=e.moid,u=e.div,m=Object(l.useState)({module_name:"",type:"",parentId:o,isActive:!1}),d=Object(n.a)(m,2),b=d[0],p=d[1],f=function(e,t){e.persist(),p(Object(S.a)(Object(S.a)({},b),{},{[e.target.name]:e.target.value}))},v=function(){var e=Object(g.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),i){s.g.put("update-module/".concat(i),b).then((function(e){console.log(e),D.a.fire({title:"Success",type:"success",icon:"success",text:"Data Updated Successfully."})})).catch((function(e){})),p({module_name:"",type:"",div_id:""});try{r()}catch(n){}}else{s.g.post("add-module",b).then((function(e){console.log(e),D.a.fire({title:"Success",type:"success",icon:"success",text:"Data saved successfully."}),p({module_name:"",type:"",div_id:""})})).catch((function(e){}));try{r()}catch(n){}}a();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){console.log(u),i&&s.g.get("edit-data-modules/".concat(i)).then((function(e){var t,a,n=e.data;p({module_name:null===(t=n.data[0])||void 0===t?void 0:t.module_name,type:null===(a=n.data[0])||void 0===a?void 0:a.type})})),console.log(b)}),[]),c.a.createElement(C.a,{onClose:a,style:{zIndex:"1000"},open:t},c.a.createElement("div",{className:"p-6"},c.a.createElement("h4",{className:"mb-5"},"ADD MODULE"),c.a.createElement(w.ValidatorForm,{onSubmit:v},c.a.createElement(N.a,{style:{width:"500px"},className:"mb-6",container:!0,spacing:4},c.a.createElement(N.a,{item:!0,md:12},c.a.createElement(w.TextValidator,{className:"w-full mb-4",label:"Division",onChange:f,type:"text",name:"div_id",value:null===b||void 0===b?void 0:b.div_id,validators:["required"],select:!0,errorMessages:["this field is required"]},c.a.createElement(_.a,{value:""},"Choose Division"),null===u||void 0===u?void 0:u.map((function(e,t){return c.a.createElement(_.a,{value:t,value:e.id},e.name)}))),c.a.createElement(w.TextValidator,{className:"w-full mb-4",label:"Module Name",onChange:f,type:"text",name:"module_name",value:null===b||void 0===b?void 0:b.module_name,validators:["required"],errorMessages:["this field is required"]}),c.a.createElement(w.TextValidator,{className:"w-full mb-4",label:"Type",onChange:f,select:!0,name:"type",value:null===b||void 0===b?void 0:b.type,validators:["required"],errorMessages:["this field is required"]},c.a.createElement(_.a,{value:""},"Choose Type"),c.a.createElement(_.a,{value:"Module"},"Module"),c.a.createElement(_.a,{value:"Sub Module"},"Sub Module"),c.a.createElement(_.a,{value:"Component"},"Component")))),c.a.createElement("div",{className:"flex justify-between items-center"},c.a.createElement(x.a,{variant:"contained",color:"primary",type:"submit"},"Save"),c.a.createElement(x.a,{variant:"outlined",color:"secondary",onClick:function(){return a()}},"Cancel")))))},T=a(1196),I=Object(m.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}}));function q(e){var t=e.id,a=I(),o=Object(l.useState)(!1),r=Object(n.a)(o,2),i=r[0],m=r[1],h=Object(l.useState)(!1),y=Object(n.a)(h,2),g=(y[0],y[1],Object(l.useState)(null)),S=Object(n.a)(g,2),C=(S[0],S[1],Object(l.useState)("")),N=Object(n.a)(C,2),_=N[0],x=N[1],w=Object(l.useState)(null),M=Object(n.a)(w,2),D=M[0],q=M[1],L=Object(l.useState)([]),A=Object(n.a)(L,2),V=(A[0],A[1]),z=Object(l.useState)([]),B=Object(n.a)(z,2),H=B[0],U=B[1],W=Object(l.useState)(!0),F=Object(n.a)(W,2),J=F[0],R=F[1],P=Object(l.useState)(null),Y=Object(n.a)(P,2),G=Y[0],K=Y[1],Q=Object(l.useState)(!1),X=Object(n.a)(Q,2),Z=X[0],$=X[1],ee=Object(l.useState)(!1),te=Object(n.a)(ee,2),ae=(te[0],te[1],function(){m(!1),$(!1),x(null),q(null),R(!0)}),ne=function e(t){var n=t.data;t.modid;return c.a.createElement("span",null,n.map((function(t,n){var l=n+Math.floor(1e3*Math.random());return c.a.createElement("div",{style:{width:"450px"}},c.a.createElement(d.a,{style:{width:"100%"},className:a.root},c.a.createElement(b.a,{"aria-controls":"panel1a-content",id:"panel1a-header",onClick:function(e){return function(e,t){"remove_circle_outline"==document.getElementById(t).innerHTML?document.getElementById(t).innerHTML="add_circle_outline":document.getElementById(t).innerHTML="remove_circle_outline"}(0,l)}},c.a.createElement(f.a,null,c.a.createElement(v.a,null,c.a.createElement(E.a,{width:"30",className:""},c.a.createElement(T.a,{id:l},"add_circle_outline")),c.a.createElement(E.a,{width:"250",className:""},c.a.createElement(j.a,{className:a.heading},c.a.createElement("span",{className:""},t.module_name),c.a.createElement(O.a,{style:{width:"30px"},onClick:function(e){!function(e,t){m(!0),x(t)}(0,t.mod_id)},className:"ml-2",badgeContent:t.child.length>0?t.child.length:"0",color:"primary"}))),c.a.createElement(E.a,{style:{float:"left"}},c.a.createElement("div",{style:{float:"right"}},c.a.createElement(T.a,{color:"secondary",onClick:function(){q(t.mod_id),m(!0)}},"edit"),"\xa0 \xa0",c.a.createElement(T.a,{className:"mr-2",color:"error",onClick:function(e){return a=t.mod_id,K(a),void $(!0);var a}},"delete")))))),c.a.createElement(p.a,{style:{width:"350px"}},null!==t.child?c.a.createElement("span",null,c.a.createElement(e,{data:t.child})):c.a.createElement(c.a.Fragment,null))))})))};return Object(l.useEffect)((function(){s.g.get("get-modules/".concat(t)).then((function(e){var t=e.data;V(t.gData),U(t.all)})),R(!1)}),[J]),c.a.createElement("div",{className:"m-sm-30"},c.a.createElement(ne,{data:H,inputProps:{style:{justifyContent:"space-between"}},style:{justifyContent:"space-between"}}),i&&c.a.createElement(k,{handleClose:ae,open:i,parentId:_,ref:function(){R(!0)},moid:D}),Z&&c.a.createElement(u.d,{open:Z,onConfirmDialogClose:ae,onYesClick:function(){s.g.delete("delete-modules/".concat(G)).then((function(e){e.data})),R(!0),ae()},text:"Are you sure to delete?"}))}t.default=function(){var e=Object(l.useState)(0),t=Object(n.a)(e,2),a=t[0],m=t[1],d=Object(l.useState)([]),b=Object(n.a)(d,2),p=b[0],f=b[1],v=Object(l.useState)(!1),E=Object(n.a)(v,2),j=E[0],O=E[1],h=Object(l.useState)(!1),y=Object(n.a)(h,2),g=(y[0],y[1],Object(l.useState)(null)),S=Object(n.a)(g,2),C=(S[0],S[1],Object(l.useState)("")),N=Object(n.a)(C,2),_=N[0],w=N[1],M=Object(l.useState)(null),D=Object(n.a)(M,2),I=D[0],L=D[1],A=Object(l.useState)([]),V=Object(n.a)(A,2),z=(V[0],V[1],Object(l.useState)([])),B=Object(n.a)(z,2),H=(B[0],B[1],Object(l.useState)(!0)),U=Object(n.a)(H,2),W=U[0],F=U[1],J=Object(l.useState)(null),R=Object(n.a)(J,2),P=(R[0],R[1],Object(l.useState)(!1)),Y=Object(n.a)(P,2),G=(Y[0],Y[1]);Object(l.useEffect)((function(){s.g.get("division").then((function(e){var t=e.data;f(t)}))}),[W]);var K=p.map((function(e){return e.name}));return c.a.createElement("div",{className:"m-sm-30"},c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(u.b,{routeSegments:[{name:"Module",path:"/modules"},{name:"Module"}]}),c.a.createElement("div",{className:"text-right"},c.a.createElement(x.a,{className:"py-2",color:"primary",variant:"outlined",onClick:function(e){return O(!0)}},c.a.createElement(T.a,null,"add"),"ADD NEW MODULE"))),c.a.createElement(o.a,{className:"mt-4",value:a,onChange:function(e,t){m(t)},indicatorColor:"primary",textColor:"primary"},K.map((function(e,t){return c.a.createElement(r.a,{className:"capitalize",value:t,label:e,key:t})}))),c.a.createElement(i.a,{className:"mb-6"}),p.map((function(e,t){return a==t&&c.a.createElement(q,{id:e.id})})),j&&c.a.createElement(k,{handleClose:function(){O(!1),G(!1),w(null),L(null),F(!0)},open:j,parentId:_,div:p,moid:I}))}}}]);