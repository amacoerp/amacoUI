(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[176],{1355:function(e,a,t){"use strict";var n=t(1),l=n.createContext();a.a=l},1382:function(e,a,t){"use strict";var n=t(6),l=t(3),i=t(1),r=(t(0),t(5)),c=t(11),s=t(15),o=t(33),m=t(1441),d=t(1355),u=i.forwardRef((function(e,a){var t,c,o=e.align,u=void 0===o?"inherit":o,p=e.classes,g=e.className,f=e.component,h=e.padding,v=e.scope,b=e.size,E=e.sortDirection,x=e.variant,N=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),y=i.useContext(m.a),j=i.useContext(d.a),O=j&&"head"===j.variant;f?(c=f,t=O?"columnheader":"cell"):c=O?"th":"td";var C=v;!C&&O&&(C="col");var w=h||(y&&y.padding?y.padding:"default"),S=b||(y&&y.size?y.size:"medium"),z=x||j&&j.variant,k=null;return E&&(k="asc"===E?"ascending":"descending"),i.createElement(c,Object(l.a)({ref:a,className:Object(r.default)(p.root,p[z],g,"inherit"!==u&&p["align".concat(Object(s.a)(u))],"default"!==w&&p["padding".concat(Object(s.a)(w))],"medium"!==S&&p["size".concat(Object(s.a)(S))],"head"===z&&y&&y.stickyHeader&&p.stickyHeader),"aria-sort":k,role:t,scope:C},N))}));a.a=Object(c.a)((function(e){return{root:Object(l.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(o.i)(Object(o.d)(e.palette.divider,1),.88):Object(o.a)(Object(o.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(u)},1384:function(e,a,t){"use strict";var n=t(6),l=t(3),i=t(1),r=(t(0),t(5)),c=t(11),s=t(1441),o=i.forwardRef((function(e,a){var t=e.classes,c=e.className,o=e.component,m=void 0===o?"table":o,d=e.padding,u=void 0===d?"default":d,p=e.size,g=void 0===p?"medium":p,f=e.stickyHeader,h=void 0!==f&&f,v=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),b=i.useMemo((function(){return{padding:u,size:g,stickyHeader:h}}),[u,g,h]);return i.createElement(s.a.Provider,{value:b},i.createElement(m,Object(l.a)({role:"table"===m?null:"table",ref:a,className:Object(r.default)(t.root,c,h&&t.stickyHeader)},v)))}));a.a=Object(c.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(l.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(o)},1385:function(e,a,t){"use strict";var n=t(3),l=t(6),i=t(1),r=(t(0),t(5)),c=t(11),s=t(1355),o=t(33),m=i.forwardRef((function(e,a){var t=e.classes,c=e.className,o=e.component,m=void 0===o?"tr":o,d=e.hover,u=void 0!==d&&d,p=e.selected,g=void 0!==p&&p,f=Object(l.a)(e,["classes","className","component","hover","selected"]),h=i.useContext(s.a);return i.createElement(m,Object(n.a)({ref:a,className:Object(r.default)(t.root,c,h&&{head:t.head,footer:t.footer}[h.variant],u&&t.hover,g&&t.selected),role:"tr"===m?null:"row"},f))}));a.a=Object(c.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(o.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(m)},1386:function(e,a,t){"use strict";var n=t(3),l=t(6),i=t(1),r=(t(0),t(5)),c=t(11),s=t(1355),o={variant:"body"},m=i.forwardRef((function(e,a){var t=e.classes,c=e.className,m=e.component,d=void 0===m?"tbody":m,u=Object(l.a)(e,["classes","className","component"]);return i.createElement(s.a.Provider,{value:o},i.createElement(d,Object(n.a)({className:Object(r.default)(t.root,c),ref:a,role:"tbody"===d?null:"rowgroup"},u)))}));a.a=Object(c.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(m)},1387:function(e,a,t){"use strict";var n=t(3),l=t(6),i=t(1),r=(t(0),t(5)),c=t(11),s=t(1355),o={variant:"head"},m=i.forwardRef((function(e,a){var t=e.classes,c=e.className,m=e.component,d=void 0===m?"thead":m,u=Object(l.a)(e,["classes","className","component"]);return i.createElement(s.a.Provider,{value:o},i.createElement(d,Object(n.a)({className:Object(r.default)(t.root,c),ref:a,role:"thead"===d?null:"rowgroup"},u)))}));a.a=Object(c.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(m)},1441:function(e,a,t){"use strict";var n=t(1),l=n.createContext();a.a=l},2879:function(e,a,t){"use strict";t.r(a);var n=t(38),l=t.n(n),i=t(59),r=t(1),c=t.n(r),s=t(1576),o=t(1223),m=t(1420),d=t(1222),u=t(538),p=t(1167),g=t(20),f=t(1384),h=t(1387),v=t(1385),b=t(1382),E=t(1386),x=t(570),N=t(1196),y=t(1569),j=t(22),O=t.n(j),C=function(e){if(!e.discount)return e.price*e.quantity||0;if("$"===e.discountType)return e.price*e.quantity-e.discount||0;var a=e.price*e.quantity;return a-a*e.discount/100||0},w=function(e){var a=e.values,t=e.handleChange,n=(e.setFieldValue,Object(r.useState)(!0)),l=Object(g.a)(n,2),i=l[0],o=l[1],m=Object(r.useState)([]),d=Object(g.a)(m,2),j=d[0],w=d[1];return Object(r.useEffect)((function(){return O.a.get("/api/ecommerce/get-product-list").then((function(e){var a=e.data;i&&w(a)})),function(){return o(!1)}}),[i]),c.a.createElement(s.a,{name:"items"},(function(e){var n;return c.a.createElement("div",{className:"overflow-auto"},c.a.createElement(f.a,{className:"whitespace-pre min-w-750"},c.a.createElement(h.a,null,c.a.createElement(v.a,null,c.a.createElement(b.a,{colSpan:4},"product"),c.a.createElement(b.a,{colSpan:4},"Description"),c.a.createElement(b.a,{colSpan:2},"price"),c.a.createElement(b.a,{colSpan:2},"Discount"),c.a.createElement(b.a,{colSpan:1,className:"p-0",align:"center"}))),c.a.createElement(E.a,null,null===(n=a.items)||void 0===n?void 0:n.map((function(a,n){return c.a.createElement(v.a,{className:"position-relative",key:n},c.a.createElement(b.a,{colSpan:4,className:"p-0",align:"left"},c.a.createElement("div",{className:"flex items-center"},c.a.createElement("img",{className:"w-48",src:null===a||void 0===a?void 0:a.imgUrl,alt:""}),c.a.createElement(y.a,{className:"w-full",size:"small",options:j,getOptionLabel:function(e){return e.title},renderInput:function(e){return c.a.createElement(u.a,Object.assign({},e,{variant:"outlined",fullWidth:!0}))},onChange:function(e,a){t({target:{name:"items[".concat(n,"]"),value:a}})}}))),c.a.createElement(b.a,{colSpan:2,className:"p-0",align:"left"},c.a.createElement(u.a,{name:"items[".concat(n,"].quantity"),size:"small",variant:"outlined",type:"number",fullWidth:!0,defaultValue:a.quantity||"",onChange:t})),c.a.createElement(b.a,{colSpan:4,className:"p-0",align:"left"},c.a.createElement(u.a,{name:"items[".concat(n,"].price"),size:"small",variant:"outlined",type:"text",fullWidth:!0,value:a.price||"",onChange:t})),c.a.createElement(b.a,{colSpan:2,className:"p-0",align:"center"},C(a).toFixed(2)),c.a.createElement(b.a,{colSpan:1,className:"p-0",align:"center"},c.a.createElement(x.a,{size:"small",onClick:function(){return e.remove(n)}},c.a.createElement(N.a,{color:"error",fontSize:"small"},"clear"))))})))),c.a.createElement(p.a,{className:"mt-4",color:"primary",variant:"contained",size:"small",onClick:function(){return e.push({})}},"+ Add New Item"))}))},S=t(91),z={customerType:"",otherField:"Adjustment"};a.default=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=0;return e.forEach((function(e){a+=C(e)})),a},a=function(){var e=Object(i.a)(l.a.mark((function e(a,t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isSubmitting;case 1:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"m-sm-30"},c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(S.b,{routeSegments:[{name:"View",path:"/sales/Viewrfq"},{name:"RFQ"}]})),c.a.createElement(o.a,{elevation:3},c.a.createElement("div",{className:"flex p-4"},c.a.createElement("h4",{className:"m-0"},"New Quoatation")),c.a.createElement(m.a,{className:"mb-2"}),c.a.createElement(s.b,{initialValues:z,onSubmit:a,enableReinitialize:!0},(function(a){var t=a.values,n=(a.errors,a.touched,a.handleChange),l=(a.handleBlur,a.handleSubmit),i=(a.isSubmitting,a.setSubmitting,a.setFieldValue);return c.a.createElement("form",{className:"p-4",onSubmit:l},c.a.createElement("div",{className:"viewer__order-info px-4 mb-4 flex justify-between"},c.a.createElement("div",null,c.a.createElement("p",{className:"mb-4"},"Customer Name"),c.a.createElement("p",{className:"mb-0"},"# ")),c.a.createElement("div",{className:"text-right"},c.a.createElement("h5",{className:"font-normal mb-4 capitalize"},c.a.createElement("strong",null,"Requested date: ")," ",c.a.createElement("span",null)),c.a.createElement("h5",{className:"font-normal capitalize"},c.a.createElement("strong",null,"Due date: ")," ",c.a.createElement("span",null)))),c.a.createElement(d.a,{container:!0,spacing:3,alignItems:"center"},c.a.createElement(d.a,{item:!0,xs:12},c.a.createElement(m.a,null))),c.a.createElement("div",{className:"mb-8"},c.a.createElement(w,{values:t,setFieldValue:i,handleChange:n})),c.a.createElement("div",{className:"mb-8"},c.a.createElement(d.a,{container:!0,spacing:3},c.a.createElement(d.a,{item:!0,xs:6},c.a.createElement(u.a,{label:"Custom Notes",name:"notes",size:"small",variant:"outlined",multiline:!0,rows:6,fullWidth:!0,value:t.notes,onChange:n})),c.a.createElement(d.a,{item:!0,xs:6},c.a.createElement(o.a,{className:"bg-default p-4",elevation:0},c.a.createElement(d.a,{container:!0,spacing:3,justify:"space-between",alignItems:"center"},c.a.createElement(d.a,{item:!0,xs:6},"Sub Total"),c.a.createElement(d.a,{item:!0,xs:6},c.a.createElement("div",{className:"text-right"},e(t.items).toFixed(2))),c.a.createElement(d.a,{item:!0,xs:6},c.a.createElement("div",{className:"flex items-center"},c.a.createElement("span",{className:"whitespace-pre"},"Shipping Charges"),c.a.createElement(u.a,{className:"ml-3",name:"shippingCharge",size:"small",type:"number",variant:"outlined",value:t.shippingCharge||"",onChange:n}))),c.a.createElement(d.a,{item:!0,xs:6},c.a.createElement("div",{className:"text-right"},(t.shippingCharge||0).toFixed(2))),c.a.createElement(d.a,{item:!0,xs:6},c.a.createElement("div",{className:"flex items-center"},c.a.createElement(u.a,{name:"otherField",size:"small",variant:"outlined",value:t.otherField||"",onChange:n}),c.a.createElement(u.a,{className:"ml-3",name:t.otherField,size:"small",variant:"outlined",type:"number",value:t[t.otherField]||"",onChange:n}))),c.a.createElement(d.a,{item:!0,xs:6},c.a.createElement("div",{className:"text-right"},(t[t.otherField]||0).toFixed(2))),c.a.createElement(d.a,{item:!0,xs:6},c.a.createElement("h5",{className:"m-0"},"Total ( $ )")),c.a.createElement(d.a,{item:!0,xs:6},c.a.createElement("div",{className:"text-right"},c.a.createElement("h5",{className:"m-0"},function(a){var t=0;return t+=e(a.items),t+=a.shippingCharge||0,t+=a[a.otherField]||0}(t).toFixed(2))))))))),c.a.createElement(o.a,{className:"bg-default p-4",elevation:0},c.a.createElement(d.a,{container:!0,spacing:3},c.a.createElement(d.a,{item:!0,xs:6},c.a.createElement(u.a,{label:"Terms & Conditions",name:"terms_conditions",size:"small",variant:"outlined",multiline:!0,rows:6,fullWidth:!0,value:t.terms_conditions,onChange:n})),c.a.createElement(d.a,{item:!0,xs:6},c.a.createElement("input",{className:"hidden",onChange:function(e){return i("files",e.target.files)},id:"upload-multiple-file",type:"file",multiple:!0})))),c.a.createElement("div",{className:"mt-6"},c.a.createElement(p.a,{color:"primary",variant:"contained",type:"submit"},"Submit")))}))))}}}]);