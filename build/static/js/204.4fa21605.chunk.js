(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[204],{1383:function(e,t,a){"use strict";var n=a(6),o=a(34),s=a(3),i=a(1),l=(a(0),a(5)),r=a(11),c=a(1512),d=i.forwardRef((function(e,t){var a,o=e.classes,r=e.className,d=e.component,m=void 0===d?"li":d,u=e.disableGutters,b=void 0!==u&&u,p=e.ListItemClasses,f=e.role,v=void 0===f?"menuitem":f,g=e.selected,h=e.tabIndex,E=Object(n.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(a=void 0!==h?h:-1),i.createElement(c.a,Object(s.a)({button:!0,role:v,tabIndex:a,component:m,selected:g,disableGutters:b,classes:Object(s.a)({dense:o.dense},p),className:Object(l.default)(o.root,r,g&&o.selected,!b&&o.gutters),ref:t},E))}));t.a=Object(r.a)((function(e){return{root:Object(s.a)({},e.typography.body1,Object(o.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(s.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(d)},1512:function(e,t,a){"use strict";var n=a(3),o=a(6),s=a(1),i=(a(0),a(5)),l=a(11),r=a(558),c=a(194),d=a(28),m=a(353),u=a(25),b="undefined"===typeof window?s.useEffect:s.useLayoutEffect,p=s.forwardRef((function(e,t){var a=e.alignItems,l=void 0===a?"center":a,p=e.autoFocus,f=void 0!==p&&p,v=e.button,g=void 0!==v&&v,h=e.children,E=e.classes,x=e.className,y=e.component,N=e.ContainerComponent,j=void 0===N?"li":N,O=e.ContainerProps,C=(O=void 0===O?{}:O).className,w=Object(o.a)(O,["className"]),I=e.dense,S=void 0!==I&&I,k=e.disabled,A=void 0!==k&&k,L=e.disableGutters,z=void 0!==L&&L,M=e.divider,D=void 0!==M&&M,T=e.focusVisibleClassName,V=e.selected,B=void 0!==V&&V,G=Object(o.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),P=s.useContext(m.a),R={dense:S||P.dense||!1,alignItems:l},F=s.useRef(null);b((function(){f&&F.current&&F.current.focus()}),[f]);var $=s.Children.toArray(h),H=$.length&&Object(c.a)($[$.length-1],["ListItemSecondaryAction"]),J=s.useCallback((function(e){F.current=u.findDOMNode(e)}),[]),Y=Object(d.a)(J,t),X=Object(n.a)({className:Object(i.default)(E.root,x,R.dense&&E.dense,!z&&E.gutters,D&&E.divider,A&&E.disabled,g&&E.button,"center"!==l&&E.alignItemsFlexStart,H&&E.secondaryAction,B&&E.selected),disabled:A},G),_=y||"li";return g&&(X.component=y||"div",X.focusVisibleClassName=Object(i.default)(E.focusVisible,T),_=r.a),H?(_=X.component||y?_:"div","li"===j&&("li"===_?_="div":"li"===X.component&&(X.component="div")),s.createElement(m.a.Provider,{value:R},s.createElement(j,Object(n.a)({className:Object(i.default)(E.container,C),ref:Y},w),s.createElement(_,X,$),$.pop()))):s.createElement(m.a.Provider,{value:R},s.createElement(_,Object(n.a)({ref:Y},X),$))}));t.a=Object(l.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(p)},2882:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),s=a(538),i=a(1383),l=a(1223),r=a(570),c=a(1196),d=a(1222),m=a(1734),u=a.n(m),b=a(1392),p=a.n(b),f=function(){return o.a.createElement(u.a,{options:v,series:[{name:"Sale",data:[14,29,18,20,20,40,20,30,24,18,30,15,88,98,77,30,24,18,30,15,88,98,77,24,18,30,15,88,98,77,1]}],type:"line",height:400})},v={chart:{height:350,type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},toolbar:{show:!1}},colors:["#5d78ff","#fbaf0f"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:3},title:{text:"",align:"left"},grid:{},markers:{size:4,hover:{size:6}},xaxis:{categories:Array.from({length:p()(new Date).daysInMonth()},(function(e,t){return p()().startOf("month").add(t,"days").format("DD")})),title:{text:""},axisBorder:{show:!1}},yaxis:{title:{text:""}},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5}},g=a(91),h=function(){return o.a.createElement("div",null,o.a.createElement(g.A,{title:"Profit Loss Shares"},o.a.createElement("div",{className:"pt-2"}),o.a.createElement(g.p,{value:34,color:"primary",text:"Asif"}),o.a.createElement("div",{className:"py-1"}),o.a.createElement(g.p,{value:15,color:"secondary",text:"Danish"}),o.a.createElement("div",{className:"py-1"}),o.a.createElement(g.p,{value:15,color:"secondary",text:"Shazli"}),o.a.createElement("div",{className:"py-1"}),o.a.createElement(g.p,{value:15,color:"secondary",text:"Jamsheed"}),o.a.createElement("div",{className:"py-1"}),o.a.createElement(g.p,{value:15,color:"secondary",text:"Ansif"})))},E=a(256);t.default=function(){Object(E.a)();return o.a.createElement("div",{className:"analytics m-sm-30"},o.a.createElement("div",{className:"flex justify-between items-center items-center mb-6"},o.a.createElement("h3",{className:"m-0"},"Overview"),o.a.createElement(s.a,{defaultValue:"1",variant:"outlined",size:"small",select:!0},o.a.createElement(i.a,{value:"1"},"This Month"),o.a.createElement(i.a,{value:"2"},"Last Month"),o.a.createElement(i.a,{value:"3"},"Six Month"),o.a.createElement(i.a,{value:"4"},"Last Year"))),o.a.createElement(l.a,{className:"mt-5 mb-6",elevation:3},o.a.createElement("div",{className:" px-4 py-3 mb-6 flex justify-between items-center bg-light-gray"},o.a.createElement("span",{className:"font-medium text-muted"},"STATISTICS"),o.a.createElement(r.a,{size:"small"},o.a.createElement(c.a,null,"more_horiz")))),o.a.createElement(d.a,{container:!0,spacing:2},o.a.createElement(d.a,{item:!0,md:6,xs:12},o.a.createElement(f,null)),o.a.createElement(d.a,{item:!0,md:6,xs:12},o.a.createElement(f,null))),o.a.createElement(d.a,{container:!0,spacing:2},o.a.createElement(d.a,{item:!0,md:6,xs:12}),o.a.createElement(d.a,{item:!0,md:6,xs:12},o.a.createElement(h,null))))}}}]);