(this.webpackJsonppresupuesto=this.webpackJsonppresupuesto||[]).push([[0],{22:function(e,t,a){e.exports=a(40)},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),s=(a(7),a(18)),u=a(6),o=a(21),m=a(2),i=function(e){var t=e.message;return r.a.createElement("p",{className:"alert alert-danger error"},t)},p=function(e){var t=e.setBudget,a=e.setRemaining,l=e.setShowquestion,c=Object(n.useState)(0),s=Object(m.a)(c,2),u=s[0],o=s[1],p=Object(n.useState)(!1),E=Object(m.a)(p,2),b=E[0],d=E[1];return r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"Coloca tu presupuesto"),b?r.a.createElement(i,{message:"El Presupuesto es Incorrecto"}):null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u<1||isNaN(u)?d(!0):(d(!1),t(u),a(u),l(!1))}},r.a.createElement("input",{type:"number",className:"u-full-width",placeholder:"Coloca tu presupuesto",onChange:function(e){o(parseInt(e.target.value,10))}}),r.a.createElement("input",{type:"submit",className:"button-primary u-full-width",value:"Definir Presupuesto"})))},E=a(17),b=a.n(E),d=function(e){var t=e.setPayment,a=e.setCreatePayment,l=Object(n.useState)(""),c=Object(m.a)(l,2),s=c[0],u=c[1],o=Object(n.useState)(0),p=Object(m.a)(o,2),E=p[0],d=p[1],g=Object(n.useState)(!1),v=Object(m.a)(g,2),f=v[0],h=v[1];return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),E<1||isNaN(E)||""===s.trim())h(!0);else{h(!1);var n={name:s,expense:E,id:b.a.generate()};console.log(n),t(n),a(!0),u(""),d(0)}}},r.a.createElement("h2",null,"Agrega tus gastos aqu\xed"),f?r.a.createElement(i,{message:"Ambos campos son obligatorios o presupesto incorrecto"}):null,r.a.createElement("div",{className:"campo"},r.a.createElement("label",null,"Nombre Gasto"),r.a.createElement("input",{type:"text",className:"u-full-width",placeholder:"ej. transporte",value:s,onChange:function(e){u(e.target.value)}})),r.a.createElement("div",{className:"campo"},r.a.createElement("label",null,"Cantidad Gasto"),r.a.createElement("input",{type:"number",className:"u-full-width",placeholder:"ej. 300",value:E,onChange:function(e){d(parseInt(e.target.value,10))}})),r.a.createElement("input",{type:"submit",className:"button-primary u-full-width",value:"Agregar Gasto"}))},g=function(e){var t=e.payment;return r.a.createElement("div",null,r.a.createElement("li",{className:"gastos"},r.a.createElement("p",null,t.name,r.a.createElement("span",{className:"gasto"},"$ ",t.expense))))},v=function(e){var t=e.payments;return r.a.createElement("div",{className:"gastos-realizados"},r.a.createElement("h2",null,"Listado"),t.map((function(e){return r.a.createElement(g,{key:e.id,payment:e})})))},f=function(e){var t,a,l=e.budget,c=e.remaining;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"alert alert-primary"},"Presupuesto: $ ",l),r.a.createElement("div",{className:(t=l,a=c,t/4>a?"alert alert-danger":t/2>a?"alert alert-warning":"alert alert-success")},"Restante: $ ",c))};var h=function(){var e=Object(n.useState)(0),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(0),s=Object(m.a)(c,2),u=s[0],i=s[1],E=Object(n.useState)(!0),b=Object(m.a)(E,2),g=b[0],h=b[1],j=Object(n.useState)([]),O=Object(m.a)(j,2),N=O[0],y=O[1],w=Object(n.useState)({}),S=Object(m.a)(w,2),C=S[0],P=S[1],k=Object(n.useState)(!1),x=Object(m.a)(k,2),B=x[0],G=x[1];return Object(n.useEffect)((function(){if(B){y([].concat(Object(o.a)(N),[C]));var e=u-C.expense;i(e),console.log(u),G(!1)}}),[C]),r.a.createElement("div",{className:"container"},r.a.createElement("header",null,r.a.createElement("h1",null,"Gasto Semanal"),r.a.createElement("div",{className:"contenido-principal contenido"},g?r.a.createElement(p,{setBudget:l,setRemaining:i,setShowquestion:h}):r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"one-half column"},r.a.createElement(d,{setPayment:P,setCreatePayment:G})),r.a.createElement("div",{className:"one-half column"},r.a.createElement(v,{payments:N}),r.a.createElement(f,{budget:a,remaining:u}))))))};var j=function(){return r.a.createElement(s.a,null,r.a.createElement(u.a,{path:"/",component:h}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,a){}},[[22,1,2]]]);
//# sourceMappingURL=main.bcfd6310.chunk.js.map