(this.webpackJsonppresupuesto=this.webpackJsonppresupuesto||[]).push([[0],{22:function(e,t,a){e.exports=a(40)},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),s=(a(8),a(18)),o=a(6),u=a(21),m=a(3),i=function(e){var t=e.message;return l.a.createElement("p",{className:"alert alert-danger error"},t)},p=function(e){var t=e.setBudget,a=e.setRemaining,r=e.setShowquestion,c=Object(n.useState)(0),s=Object(m.a)(c,2),o=s[0],u=s[1],p=Object(n.useState)(!1),d=Object(m.a)(p,2),E=d[0],b=d[1];return l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"Coloca tu presupuesto"),E?l.a.createElement(i,{message:"El Presupuesto es Incorrecto"}):null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o<1||isNaN(o)?b(!0):(b(!1),t(o),a(o),r(!1))}},l.a.createElement("input",{type:"number",className:"u-full-width",placeholder:"Coloca tu presupuesto",onChange:function(e){u(parseInt(e.target.value,10))}}),l.a.createElement("input",{type:"submit",className:"button-primary u-full-width",value:"Definir Presupuesto"})))},d=a(17),E=a.n(d),b=function(e){var t=e.addNewPayment,a=Object(n.useState)(""),r=Object(m.a)(a,2),c=r[0],s=r[1],o=Object(n.useState)(0),u=Object(m.a)(o,2),p=u[0],d=u[1],b=Object(n.useState)(!1),v=Object(m.a)(b,2),f=v[0],g=v[1];return l.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),p<1||isNaN(p)||""===c.trim())g(!0);else{g(!1);var a={name:c,expense:p,id:E.a.generate()};console.log(a),t(a),s(""),d(0)}}},l.a.createElement("h2",null,"Agrega tus gastos aqu\xed"),f?l.a.createElement(i,{message:"Ambos campos son obligatorios o presupesto incorrecto"}):null,l.a.createElement("div",{className:"campo"},l.a.createElement("label",null,"Nombre Gasto"),l.a.createElement("input",{type:"text",className:"u-full-width",placeholder:"ej. transporte",value:c,onChange:function(e){s(e.target.value)}})),l.a.createElement("div",{className:"campo"},l.a.createElement("label",null,"Cantidad Gasto"),l.a.createElement("input",{type:"number",className:"u-full-width",placeholder:"ej. 300",value:p,onChange:function(e){d(parseInt(e.target.value,10))}})),l.a.createElement("input",{type:"submit",className:"button-primary u-full-width",value:"Agregar Gasto"}))},v=function(e){var t=e.payment;return l.a.createElement("div",null,l.a.createElement("li",{className:"gastos"},l.a.createElement("p",null,t.name,l.a.createElement("span",{className:"gasto"},"$ ",t.expense))))},f=function(e){var t=e.payments;return l.a.createElement("div",{className:"gastos-realizados"},l.a.createElement("h2",null,"Listado"),t.map((function(e){return l.a.createElement(v,{key:e.id,payment:e})})))};var g=function(){var e=Object(n.useState)(0),t=Object(m.a)(e,2),a=(t[0],t[1]),r=Object(n.useState)(0),c=Object(m.a)(r,2),s=(c[0],c[1]),o=Object(n.useState)(!0),i=Object(m.a)(o,2),d=i[0],E=i[1],v=Object(n.useState)([]),g=Object(m.a)(v,2),h=g[0],N=g[1];return l.a.createElement("div",{className:"container"},l.a.createElement("header",null,l.a.createElement("h1",null,"Gasto Semanal"),l.a.createElement("div",{className:"contenido-principal contenido"},d?l.a.createElement(p,{setBudget:a,setRemaining:s,setShowquestion:E}):l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"one-half column"},l.a.createElement(b,{addNewPayment:function(e){N([].concat(Object(u.a)(h),[e]))}})),l.a.createElement("div",{className:"one-half column"},l.a.createElement(f,{payments:h}))))))};var h=function(){return l.a.createElement(s.a,null,l.a.createElement(o.a,{path:"/",component:g}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){}},[[22,1,2]]]);
//# sourceMappingURL=main.d5d8579b.chunk.js.map