(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{65:function(e,t,n){},86:function(e,t,n){e.exports=n(97)},97:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(28),r=n.n(l),o=(n(65),n(56)),i=n(15),u=n(13),s=n(142),m=n(12),f=n.n(m),d=n(146),p=function(e){var t=e.text,n=e.onClick;return c.a.createElement(d.a,{onClick:n},t)};p.prototypes={text:f.a.string,onClick:f.a.func};var E=n(147),g=n(140),b=n(148),k=n(143),O=n(144),v=n(149),C=n(150),j=n(74),S=n.n(j),h=n(75),x=n.n(h),y=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)([]),m=Object(u.a)(r,2),f=m[0],d=m[1],j=Object(a.useState)("all"),h=Object(u.a)(j,2),y=h[0],I=h[1],F=Object(a.useState)([]),J=Object(u.a)(F,2),N=J[0],w=J[1];Object(a.useEffect)((function(){T()}),[]),Object(a.useEffect)((function(){!function(){switch(y){case"completed":w(f.filter((function(e){return!0===e.completed})));break;case"active":w(f.filter((function(e){return!1===e.completed})));break;default:w(f)}}(),L()}),[f,y]);var P=function(e){I(e.target.innerText.toLowerCase())},L=function(){localStorage.setItem("tasks",JSON.stringify(f))},T=function(){if(null===localStorage.getItem("tasks"))localStorage.setItem("tasks",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("tasks"));d(e)}};return c.a.createElement("div",null,c.a.createElement(E.a,null,c.a.createElement(g.a,{autoFocus:!0,fullWidth:!0,placeholder:"Put your task here",onChange:function(e){return l(e.target.value)},value:n,onClick:function(){n.length>0&&(d([].concat(Object(i.a)(f),[{text:n,completed:!1,id:Object(s.a)()}])),l(""))},color:"secondary"})),c.a.createElement(E.a,null,c.a.createElement(b.a,null,N.map((function(e){return c.a.createElement(k.a,{key:e.id,className:"list-item".concat(e.completed?"-completed":"")},c.a.createElement(O.a,null,e.text),c.a.createElement(v.a,{onClick:function(){return function(e){d(f.map((function(t){return t.id===e.id?Object(o.a)(Object(o.a)({},t),{},{completed:!t.completed}):t})))}(e)}},c.a.createElement(S.a,null)),c.a.createElement(v.a,{onClick:function(){return function(e){d(f.filter((function(t){return t.id!==e.id})))}(e)}},c.a.createElement(x.a,null)))})))),c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,{type:"number",value:N.length,inputProps:{readOnly:!0},color:"secondary",size:"small"})),c.a.createElement(E.a,{component:"form",sx:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{m:1}}},c.a.createElement(C.a,{color:"secondary"},c.a.createElement(p,{text:"All",onClick:P}),c.a.createElement(p,{text:"Active",onClick:P}),c.a.createElement(p,{text:"Completed",onClick:P}))))};var I=function(){return c.a.createElement("div",{className:"container"},c.a.createElement(y,null))},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,151)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),l(e),r(e)}))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root")),F()}},[[86,1,2]]]);
//# sourceMappingURL=main.5e19f901.chunk.js.map