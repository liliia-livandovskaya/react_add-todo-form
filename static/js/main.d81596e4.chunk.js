(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),s=a(6),c=a(2),r=a(7),l=a(1),o=a(9),u=a.n(o),d=a(0),m=function(e){var t=e.user;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},j=function(e){var t=e.todo;return Object(d.jsxs)("article",{"data-id":t.id,className:u()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(d.jsx)("h2",{className:"TodoInfo__title title is-2 is-spaced",children:t.title}),t.user&&Object(d.jsx)(m,{user:t.user})]})},b=(a(15),function(e){var t=e.todos,a=void 0===t?[]:t;return Object(d.jsx)("section",{className:"TodoList",children:a.map((function(e){return Object(d.jsx)(j,{todo:e},e.id)}))})}),h=(a(16),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]);function f(e){return h.find((function(t){return t.id===e}))||null}var O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"delectus aut autem",completed:!0,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(r.a)(Object(r.a)({},e),{},{user:f(e.userId)})})),p=function(){var e=Object(l.useState)(O),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(""),r=Object(c.a)(i,2),o=r[0],u=r[1],m=Object(l.useState)(0),j=Object(c.a)(m,2),p=j[0],x=j[1],v=Object(l.useState)(!1),y=Object(c.a)(v,2),N=y[0],S=y[1],_=Object(l.useState)(!1),I=Object(c.a)(_,2),g=I[0],C=I[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("form",{action:"/api/users",method:"POST",className:"form box",onSubmit:function(e){if(e.preventDefault(),S(!o),C(!p),o&&p){var t={id:Math.max.apply(Math,Object(s.a)(a.map((function(e){return e.id}))))+1,title:o,userId:p,completed:!1,user:f(p)};n((function(e){return[].concat(Object(s.a)(e),[t])})),u(""),x(0)}},children:[Object(d.jsxs)("div",{className:"field ",children:[Object(d.jsxs)("label",{children:["Title: ",Object(d.jsx)("input",{placeholder:"Title",type:"text","data-cy":"titleInput",value:o,className:"form_field input is-info",onChange:function(e){u(e.target.value),S(!1)}})]}),N&&Object(d.jsx)("p",{className:"error",children:"Please fill the title"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsxs)("label",{children:["User: ",Object(d.jsxs)("select",{"data-cy":"userSelect",value:p,className:"form_field select is-info",onChange:function(e){x(+e.target.value),C(!1)},children:[Object(d.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),h.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),g&&Object(d.jsx)("p",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",className:"button is-info button__main",children:"Add"})]}),Object(d.jsx)(b,{todos:a})]})};i.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d81596e4.chunk.js.map