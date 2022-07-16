(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[190],{1638:function(e,t,a){"use strict";var n=a(6),i=a(35),o=a(3),r=a(0),s=a(5),l=a(11),c=a(2090),d=r.forwardRef((function(e,t){var a,i=e.classes,l=e.className,d=e.component,u=void 0===d?"li":d,m=e.disableGutters,b=void 0!==m&&m,p=e.ListItemClasses,f=e.role,v=void 0===f?"menuitem":f,g=e.selected,h=e.tabIndex,x=Object(n.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(a=void 0!==h?h:-1),r.createElement(c.a,Object(o.a)({button:!0,role:v,tabIndex:a,component:u,selected:g,disableGutters:b,classes:Object(o.a)({dense:i.dense},p),className:Object(s.default)(i.root,l,g&&i.selected,!b&&i.gutters),ref:t},x))}));t.a=Object(l.a)((function(e){return{root:Object(o.a)({},e.typography.body1,Object(i.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(o.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(d)},2018:function(e,t,a){"use strict";var n=a(3),i=a(6),o=a(0),r=a(5),s=a(11),l=a(41),c=o.forwardRef((function(e,t){var a=e.absolute,s=void 0!==a&&a,l=e.classes,c=e.className,d=e.component,u=void 0===d?"hr":d,m=e.flexItem,b=void 0!==m&&m,p=e.light,f=void 0!==p&&p,v=e.orientation,g=void 0===v?"horizontal":v,h=e.role,x=void 0===h?"hr"!==u?"separator":void 0:h,j=e.variant,O=void 0===j?"fullWidth":j,y=Object(i.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return o.createElement(u,Object(n.a)({className:Object(r.default)(l.root,c,"fullWidth"!==O&&l[O],s&&l.absolute,b&&l.flexItem,f&&l.light,"vertical"===g&&l.vertical),role:x,ref:t},y))}));t.a=Object(s.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(l.a)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(c)},2090:function(e,t,a){"use strict";var n=a(3),i=a(6),o=a(0),r=a(5),s=a(11),l=a(669),c=a(227),d=a(36),u=a(413),m=a(30),b="undefined"===typeof window?o.useEffect:o.useLayoutEffect,p=o.forwardRef((function(e,t){var a=e.alignItems,s=void 0===a?"center":a,p=e.autoFocus,f=void 0!==p&&p,v=e.button,g=void 0!==v&&v,h=e.children,x=e.classes,j=e.className,O=e.component,y=e.ContainerComponent,C=void 0===y?"li":y,w=e.ContainerProps,E=(w=void 0===w?{}:w).className,N=Object(i.a)(w,["className"]),I=e.dense,k=void 0!==I&&I,S=e.disabled,_=void 0!==S&&S,V=e.disableGutters,L=void 0!==V&&V,z=e.divider,R=void 0!==z&&z,M=e.focusVisibleClassName,T=e.selected,A=void 0!==T&&T,D=Object(i.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),P=o.useContext(u.a),q={dense:k||P.dense||!1,alignItems:s},B=o.useRef(null);b((function(){f&&B.current&&B.current.focus()}),[f]);var F=o.Children.toArray(h),G=F.length&&Object(c.a)(F[F.length-1],["ListItemSecondaryAction"]),W=o.useCallback((function(e){B.current=m.findDOMNode(e)}),[]),$=Object(d.a)(W,t),H=Object(n.a)({className:Object(r.default)(x.root,j,q.dense&&x.dense,!L&&x.gutters,R&&x.divider,_&&x.disabled,g&&x.button,"center"!==s&&x.alignItemsFlexStart,G&&x.secondaryAction,A&&x.selected),disabled:_},D),J=O||"li";return g&&(H.component=O||"div",H.focusVisibleClassName=Object(r.default)(x.focusVisible,M),J=l.a),G?(J=H.component||O?J:"div","li"===C&&("li"===J?J="div":"li"===H.component&&(H.component="div")),o.createElement(u.a.Provider,{value:q},o.createElement(C,Object(n.a)({className:Object(r.default)(x.container,E),ref:$},N),o.createElement(J,H,F),F.pop()))):o.createElement(u.a.Provider,{value:q},o.createElement(J,Object(n.a)({ref:$},H),F))}));t.a=Object(s.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(p)},2498:function(e,t,a){"use strict";a.r(t);var n=a(32),i=a.n(n),o=a(59),r=a(7),s=a(18),l=a(0),c=a.n(l),d=a(1440),u=a(298),m=a(678),b=a(2018),p=a(53),f=a(26),v=a.n(f),g=a(4),h=a(1638),x=a(149),j=a.n(x);t.default=function(e){e.uid;var t=e.open,a=e.handleClose,n=window.location.search,f=new URLSearchParams(n),x=parseInt(f.get("id")),O=Object(l.useState)({brand_name:"",unit_price:"",party_id:"",description:"",user_id:1,product_id:x}),y=Object(s.a)(O,2),C=y[0],w=y[1],E=function(e){var t=e.target,a=t.name,n=t.value,i=Object(r.a)({},C);i[a]=n,w(i)},N=Object(l.useState)([]),I=Object(s.a)(N,2),k=I[0],S=I[1],_=c.a.useState(!0),V=Object(s.a)(_,2),L=V[0],z=(V[1],c.a.useState("md")),R=Object(s.a)(z,2),M=R[0],T=(R[1],function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.g.post("analyse",C).then((function(e){j.a.fire({title:"Success",type:"success",text:"Data saved successfully."}),w({brand_name:"",unit_price:"",party_id:"",description:"",user_id:1})})).catch((function(e){}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(l.useEffect)((function(){v.a.get("http://dataqueuesystems.com/amaco/amaco/public/api/parties-vendor").then((function(e){var t=e.data;S(t)}))}),[]),c.a.createElement(d.a,{onClose:a,open:t,fullWidth:L,maxWidth:M,style:{zIndex:1e3}},c.a.createElement("div",{className:"p-6"},c.a.createElement("h4",{className:"mb-5"},"Add New"),c.a.createElement(p.ValidatorForm,{onSubmit:T,autoComplete:"off"},c.a.createElement(p.TextValidator,{className:"mb-4 w-full",label:"Brand Name",variant:"outlined",size:"small",onChange:E,type:"text",name:"brand_name",value:C.brand_name,validators:["required"],errorMessages:["this field is required"]}),c.a.createElement(u.a,null,c.a.createElement(p.TextValidator,{className:"w-full mb-4",label:"unit Price",onChange:E,size:"small",variant:"outlined",type:"textarea",name:"unit_price",value:C.unit_price}),c.a.createElement(p.TextValidator,{className:"mb-4 w-full",label:"Vendor",name:"party_id",size:"small",variant:"outlined",select:!0,value:C.party_id,validators:["required"],errorMessages:["this field is required"],onChange:E},k.map((function(e,t){return c.a.createElement(h.a,{value:e.id,key:e.id},e.fname)}))),c.a.createElement(p.TextValidator,{label:"Description",name:"description",size:"small",variant:"outlined",multiline:!0,value:C.description,rows:8,fullWidth:!0,onChange:E}),c.a.createElement(u.a,{item:!0,sm:6,xs:12})),c.a.createElement("div",{className:"flex justify-between items-center"},c.a.createElement(m.a,{variant:"contained",color:"primary",type:"submit"},"Save"),c.a.createElement("div",{className:"flex justify-between items-center"},c.a.createElement(m.a,{variant:"outlined",color:"secondary",onClick:function(){return a()}},"Cancel")))),c.a.createElement(b.a,{className:"mb-2"})))}}}]);