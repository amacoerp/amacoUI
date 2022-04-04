(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[219],{2015:function(e,t,a){"use strict";var n=a(3),r=a(6),i=a(0),o=a(5),l=a(11),c=a(41),s=i.forwardRef((function(e,t){var a=e.absolute,l=void 0!==a&&a,c=e.classes,s=e.className,u=e.component,m=void 0===u?"hr":u,d=e.flexItem,f=void 0!==d&&d,p=e.light,v=void 0!==p&&p,b=e.orientation,h=void 0===b?"horizontal":b,g=e.role,E=void 0===g?"hr"!==m?"separator":void 0:g,O=e.variant,j=void 0===O?"fullWidth":O,x=Object(r.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(m,Object(n.a)({className:Object(o.default)(c.root,s,"fullWidth"!==j&&c[j],l&&c.absolute,f&&c.flexItem,v&&c.light,"vertical"===h&&c.vertical),role:E,ref:t},x))}));t.a=Object(l.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(c.a)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},2090:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(0),i=a.n(r),o=a(673),l=a(1437),c=a(297),s=a(674),u=a(2015),m=a(53),d=a(1550),f=a.n(d),p=a(1414),v=a(149),b=a.n(v),h=a(4),g=a(70);t.default=function(e){e.uid;var t=e.open,a=e.handleClose,d=(e.setid,e.manufacture),v=Object(r.useState)(""),E=Object(n.a)(v,2),O=E[0],j=E[1],x=Object(r.useState)(""),C=Object(n.a)(x,2),y=C[0],N=C[1],S=Object(r.useState)([]),w=Object(n.a)(S,2),I=w[0],k=w[1],A=Object(r.useState)(!0),D=Object(n.a)(A,2),R=D[0],T=D[1],z=i.a.useState(!0),M=Object(n.a)(z,2),W=M[0],_=(M[1],i.a.useState("sm")),B=Object(n.a)(_,2),V=B[0],F=(B[1],Object(g.a)().user);function L(e){T(!R),Object(h.p)().then((function(e){var t=e.data;k(t),d(t)}))}Object(r.useEffect)((function(){h.g.get("manufacturer").then((function(e){var t=e.data;k(t)}))}),[]);var P=[{name:"name",label:"NAME",options:{filter:!0}},{name:"id",label:"ACTION",options:{filter:!0,customBodyRender:function(e,t,a){return i.a.createElement(o.a,{onClick:function(){return e=t.rowData[1],void b.a.fire({text:"Are you sure you want to delete this manufacturer?",icon:"warning",showCancelButton:!0,customClass:{zIndex:1e3},confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it"}).then((function(t){t.value?h.g.delete("manufacturer/".concat(e)).then((function(e){L(),b.a.fire({customClass:{zIndex:1e3},title:"Deleted Successfully",icon:"success"})})):t.dismiss===b.a.DismissReason.cancel&&b.a.fire({customClass:{zIndex:1e3},title:"Cancelled",icon:"error"})}));var e}},i.a.createElement(p.a,{color:"error"},"delete"))}}}];return i.a.createElement(l.a,{onClose:a,open:t,className:"px-6 pt-2 pb-4",style:{zIndex:1e3},fullWidth:W,maxWidth:V},i.a.createElement("div",{className:"p-6"},i.a.createElement("h4",{className:"mb-5"},"ADD MANUFACTURER"),i.a.createElement(m.ValidatorForm,{onSubmit:function(){var e={name:O?Object(h.d)(O):"",description:y?Object(h.d)(y):"",div_id:localStorage.getItem("division"),user_id:F.id};h.g.post("manufacturer",e).then((function(e){Object(h.p)(),b.a.fire({icon:"success",type:"success",text:"Data saved successfully."}),Object(h.p)().then((function(e){var t=e.data;d(t),k(t)}))})),a(),N(""),j("")},autoComplete:"off"},i.a.createElement(c.a,{className:"mb-4",container:!0,spacing:4},i.a.createElement(c.a,{item:!0,sm:6,xs:12},i.a.createElement(m.TextValidator,{className:"w-full mb-4",label:"Name",autoComplete:"none",variant:"outlined",onChange:function(e){return j(e.target.value)},type:"text",name:"cname",value:O,validators:["required"],inputProps:{style:{textTransform:"capitalize"}},errorMessages:["this field is required"]}))),i.a.createElement(s.a,{variant:"outlined",className:"mr-4 py-2",color:"primary",type:"submit"},i.a.createElement(p.a,null,"save"),"SAVE"),i.a.createElement(s.a,{variant:"outlined",color:"secondary",className:"mr-4 py-2",onClick:function(){return a()}},i.a.createElement(p.a,null,"cancel")," CANCEL"),i.a.createElement(s.a,{variant:"outlined",color:"primary",onClick:function(){return L()}},i.a.createElement(p.a,null,"remove_red_eye")," VIEW")),i.a.createElement(u.a,{className:"mb-2"}),!R&&i.a.createElement(f.a,{title:"Manufacturer",columns:P,data:I.filter((function(e){return e.div_id==localStorage.getItem("division")})),options:{filterType:"textField",responsive:"simple",selectableRows:"none",elevation:0,rowsPerPageOptions:[10,20,40,80,100]}})))}}}]);