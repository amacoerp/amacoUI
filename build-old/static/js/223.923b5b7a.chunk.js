(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[223],{3472:function(e,r,a){"use strict";a.r(r);var n=a(0),t=a.n(n),i=a(7),c=a(18),d=a(2323),o=function(){var e=Object(n.useState)([]),r=Object(c.a)(e,2),a=r[0],o=r[1];Object(n.useEffect)((function(){var e;o((e=6,Array.from({length:e},(function(e,r){return r})).map((function(e){return{id:"item-".concat(e),content:"item ".concat(e)}}))))}),[]);return t.a.createElement(d.a,{onDragEnd:function(e){if(e.destination){var r=function(e,r,a){var n=Array.from(e),t=n.splice(r,1),i=Object(c.a)(t,1)[0];return n.splice(a,0,i),n}(a,e.source.index,e.destination.index);o(r)}}},t.a.createElement(d.c,{droppableId:"droppable"},(function(e,r){return t.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef,style:(n=r.isDraggingOver,{borderRadius:"4px",background:n?"rgba(0,0,0, .1)":"var(--bg-default)",padding:8,width:250})}),a.map((function(e,r){return t.a.createElement(d.b,{key:e.id,draggableId:e.id,index:r},(function(r,a){return t.a.createElement("div",Object.assign({ref:r.innerRef},r.draggableProps,r.dragHandleProps,{style:(n=a.isDragging,c=r.draggableProps.style,Object(i.a)({userSelect:"none",padding:16,margin:"0 0 ".concat(8,"px 0"),boxShadow:"var(--elevation-z4)",borderRadius:"4px",background:n?"var(--primary)":"var(--bg-paper)"},c))}),e.content);var n,c}))})),e.placeholder);var n})))},l=a(100),p=function(){var e=Object(n.useState)([]),r=Object(c.a)(e,2),a=r[0],o=r[1];Object(n.useEffect)((function(){var e;o((e=6,Array.from({length:e},(function(e,r){return r})).map((function(e){return{id:"item-".concat(e),content:"item ".concat(e)}}))))}),[]);return t.a.createElement(d.a,{onDragEnd:function(e){if(e.destination){var r=function(e,r,a){var n=Array.from(e),t=n.splice(r,1),i=Object(c.a)(t,1)[0];return n.splice(a,0,i),n}(a,e.source.index,e.destination.index);o(r)}}},t.a.createElement(d.c,{droppableId:"droppable",direction:"horizontal"},(function(e,r){return t.a.createElement("div",Object.assign({ref:e.innerRef,style:(n=r.isDraggingOver,{borderRadius:"4px",background:n?"rgba(0,0,0, .1)":"var(--bg-default)",display:"flex",padding:8,overflow:"auto"})},e.droppableProps),a.map((function(e,r){return t.a.createElement(d.b,{key:e.id,draggableId:e.id,index:r},(function(r,a){return t.a.createElement("div",Object.assign({ref:r.innerRef},r.draggableProps,r.dragHandleProps,{style:(n=a.isDragging,c=r.draggableProps.style,Object(i.a)({userSelect:"none",padding:16,margin:"0 ".concat(8,"px 0 0"),boxShadow:"var(--elevation-z4)",borderRadius:"4px",background:n?"var(--primary)":"var(--bg-paper)"},c))}),e.content);var n,c}))})),e.placeholder);var n})))},s=a(62),u=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array.from({length:e},(function(e,r){return r})).map((function(e){return{id:"item-".concat(e+r),content:"item ".concat(e+r)}}))},g=function(e,r,a){return Object(i.a)({userSelect:"none",padding:16,margin:"0 0 ".concat(8,"px 0"),boxShadow:a.shadows[4],borderRadius:"4px",background:e?"rgba(var(--primary),1)":"rgba(var(--bg-paper),1)"},r)},b=function(e){return{borderRadius:"4px",background:e?"rgba(0,0,0, .1)":"rgba(var(--bg-default),1)",padding:8,width:250}},f=function(){var e=Object(n.useState)([]),r=Object(c.a)(e,2),a=r[0],i=r[1],o=Object(n.useState)([]),l=Object(c.a)(o,2),p=l[0],f=l[1],m=Object(s.a)();Object(n.useEffect)((function(){i(u(10)),f(u(5,10))}),[]);var v=function(e){return"droppable"===e?a:p};return t.a.createElement(d.a,{onDragEnd:function(e){var r=e.source,a=e.destination;if(a)if(r.droppableId===a.droppableId){var n=function(e,r,a){var n=Array.from(e),t=n.splice(r,1),i=Object(c.a)(t,1)[0];return n.splice(a,0,i),n}(v(r.droppableId),r.index,a.index);"droppable2"===r.droppableId?f(n):i(n)}else{var t=function(e,r,a,n){var t=Array.from(e),i=Array.from(r),d=t.splice(a.index,1),o=Object(c.a)(d,1)[0];i.splice(n.index,0,o);var l={};return l[a.droppableId]=t,l[n.droppableId]=i,l}(v(r.droppableId),v(a.droppableId),r,a);i(t.droppable),f(t.droppable2)}}},t.a.createElement("div",{className:"flex justify-around"},t.a.createElement(d.c,{droppableId:"droppable"},(function(e,r){return t.a.createElement("div",{ref:e.innerRef,style:b(r.isDraggingOver)},a.map((function(e,r){return t.a.createElement(d.b,{key:e.id,draggableId:e.id,index:r},(function(r,a){return t.a.createElement("div",Object.assign({ref:r.innerRef},r.draggableProps,r.dragHandleProps,{style:g(a.isDragging,r.draggableProps.style,m)}),e.content)}))})),e.placeholder)})),t.a.createElement(d.c,{droppableId:"droppable2"},(function(e,r){return t.a.createElement("div",{ref:e.innerRef,style:b(r.isDraggingOver)},p.map((function(e,r){return t.a.createElement(d.b,{key:e.id,draggableId:e.id,index:r},(function(r,a){return t.a.createElement("div",Object.assign({ref:r.innerRef},r.draggableProps,r.dragHandleProps,{style:g(a.isDragging,r.draggableProps.style,m)}),e.content)}))})),e.placeholder)}))))};r.default=function(){return t.a.createElement("div",{className:"m-sm-30"},t.a.createElement("div",{className:"mb-sm-30"},t.a.createElement(l.b,{routeSegments:[{name:"others",path:"/drag-and-drop"},{name:"Drag and Drop"}]})),t.a.createElement(l.z,{title:"Simple List Drag and Drop"},t.a.createElement(o,null)),t.a.createElement("div",{className:"py-3"}),t.a.createElement(l.z,{title:"Simple Horizontal List Drag and Drop"},t.a.createElement(p,null)),t.a.createElement("div",{className:"py-3"}),t.a.createElement(l.z,{title:"Simple Two List Drag and Drop"},t.a.createElement(f,null)))}}}]);