(this.webpackJsonpcalendarappointment=this.webpackJsonpcalendarappointment||[]).push([[0],{21:function(e){e.exports=JSON.parse("[]")},28:function(e,t,n){},47:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(11),s=n.n(i),r=(n(28),n(18)),l=n(14),j=n(6),d=n(22),o=n(13),u=n.n(o),m=(n(31),n(20)),h=n.n(m),p=(n(47),n(21)),b=n(23),O=n(3),x=function(e){var t=e.addAppointment,n=e.d,c=e.t,i=e.datetext,s=Object(a.useState)(""),r=Object(j.a)(s,2),l=r[0],d=r[1],o=Object(a.useState)(""),u=Object(j.a)(o,2),m=u[0],h=u[1],p=Object(a.useState)(""),x=Object(j.a)(p,2),f=x[0],g=x[1];return Object(O.jsxs)("form",{className:"forminput",onSubmit:function(e){e.preventDefault(),b.a.sendForm("service_uldtv6l","template_sduxcjy",e.target,"user_eA7KqEISP9K6PiwEFGIGj").then((function(e){}),(function(e){})),t(l,m,n,c),d(""),h(""),g(""),alert("Mail has been sent to the email-id")},children:[Object(O.jsx)("input",{value:l,type:"text",onChange:function(e){d(e.currentTarget.value)},placeholder:"Enter Meeting Name",name:"title"}),Object(O.jsx)("input",{value:m,type:"text",onChange:function(e){h(e.currentTarget.value)},placeholder:"Enter Description",name:"desc"}),Object(O.jsx)("input",{value:f,type:"text",onChange:function(e){g(e.currentTarget.value)},placeholder:"Enter mailid",name:"mail"}),Object(O.jsx)("input",{value:i+", "+c+" hrs",type:"text",placeholder:"Enter Description",name:"time"}),Object(O.jsx)("button",{className:"btn-imp",children:"Make Appointment"})]})},f=function(e){var t=e.list,n=e.handleToggle;return Object(O.jsx)("div",{className:"todoitem",children:Object(O.jsxs)("div",{id:t.id,value:t.id,onClick:function(e){e.preventDefault(),n(e.currentTarget.id)},className:t.complete?"todo strike":"todo",children:[Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{className:"meeting-item",children:"Title:"})," ",t.title]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{className:"meeting-item",children:"Description:"})," ",t.desc]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{className:"meeting-item",children:"Date:"})," ",t.date]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{className:"meeting-item",children:"Time:"})," ",t.rtime," hrs"]})]},t.id+t.title)})},g=function(e){var t=e.todo,n=e.handleToggle,a=e.handleFilter;return Object(O.jsxs)("div",{className:"allitems",children:[t.map((function(e){return Object(O.jsx)(f,{list:e,handleToggle:n},e.id)})),Object(O.jsx)("button",{className:"btn",onClick:a,children:"Trash"})]})};var v=function(){var e=Object(a.useState)(new Date),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)("10:00"),s=Object(j.a)(i,2),o=s[0],m=s[1],b=Object(a.useState)(p),f=Object(j.a)(b,2),v=f[0],N=f[1],M=Object(O.jsx)(u.a,{format:"D MMM YYYY",withTitle:!0,children:n});return M=M.props.children.toString().slice(0,15),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h2",{className:"header",children:"A Calender App for making appointments"}),Object(O.jsx)("p",{className:"header",children:"You can send email to your email-id"}),Object(O.jsxs)("div",{className:"calend-time",children:[Object(O.jsx)(d.a,{value:n,onChange:function(e){c(e)}}),Object(O.jsx)("span",{style:{height:"1em"}}),Object(O.jsx)(h.a,{value:o,onChange:m})]}),Object(O.jsxs)("p",{className:"para",children:["Current selected date is ",Object(O.jsx)(u.a,{format:"D MMM YYYY",withTitle:!0,children:n})," and time is ",o," hrs"]}),Object(O.jsxs)("div",{children:[Object(O.jsx)(x,{addAppointment:function(e,t,n,a){var c=Object(r.a)(v);c=[].concat(Object(r.a)(c),[{id:v.length+1,title:e,desc:t,date:n,rtime:a,complete:!1}]),N(c)},d:Object(O.jsx)(u.a,{format:"D MMM YYYY",withTitle:!0,children:n}),t:o,datetext:M}),Object(O.jsx)("hr",{}),Object(O.jsx)("h3",{className:"header",children:"List of Scheduled Meetings"}),Object(O.jsx)(g,{todo:v,handleToggle:function(e){var t=v.map((function(t){return t.id===Number(e)?Object(l.a)(Object(l.a)({},t),{},{complete:!t.complete}):Object(l.a)({},t)}));N(t)},handleFilter:function(){var e=v.filter((function(e){return!e.complete}));N(e)}})]})]})};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.0215fdbb.chunk.js.map