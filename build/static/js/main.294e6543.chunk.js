(this["webpackJsonpkhai-app"]=this["webpackJsonpkhai-app"]||[]).push([[0],{26:function(e,a,n){},27:function(e,a,n){},35:function(e,a,n){"use strict";n.r(a);var t=n(4),s=n(0),c=n.n(s),r=n(9),i=n.n(r),o=(n(26),n(12)),l=n(13),u=n(21),j=n(19),b=(n(27),n(11)),m=n(3);b.a.use(m.e).init({resources:{en:{translation:{nameTitle:"{{name}}",userMessagesUnread:"Hello <1>{{name}}</1>, you have {{count}} unread message. <5>Go to message</5>.",userMessagesUnread_plural:"Hello2 <1>{{name}}</1>, you have {{count}} unread messages.  <5>Go to messages</5>."}},fr:{translation:{nameTitle:"{{name}}",userMessagesUnread:"Hello <1>{{name}}</1>, you have {{count}} unread message. <5>Go to message</5>.",userMessagesUnread_plural:"\u4f60\u597d <1>{{name}}</1>, you have {{count}} unread messages.  Go to messages."}},cn:{translation:{userMessagesUnread_plural:"\u4f5c\u4e1a\u8bba\u6587\u662f\u4ece\u56fa\u5b9a\u95ee\u9898\u53d1\u5c55\u800c\u6765\u7684\uff0c\u8fd9\u4e9b\u95ee\u9898\u8ba9\u5b66\u751f\u6709\u4e00\u6bb5\u65f6\u95f4\u7814\u7a76\u4e00\u4e2a\u4e3b\u9898\uff0c\u5e76\u53c2\u8003\u4ed6\u4eec\u7684\u4fe1\u606f\u6765\u6e90\u5f97\u51fa\u7b54\u6848\u3002\u867d\u7136\u4f7f\u7528\u4f5c\u4e1a\u8bba\u6587\u4f5c\u4e3a\u8bc4\u4f30\u5de5\u5177\u6709\u4e00\u4e9b\u7f3a\u70b9\uff0c\u4f46\u8fd9\u79cd\u505a\u6cd5\u6709\u826f\u597d\u7684\u6559\u80b2\u76ee\u7684\u3002\u672c\u6587\u63a2\u8ba8\u4e86\u4f5c\u4e1a\u8bba\u6587\u5bf9\u5b66\u751f\u5b66\u4e60\u6709\u76ca\u7684\u539f\u56e0\uff0c\u5e76\u8003\u8651\u4e86\u8fd9\u79cd\u8bc4\u4f30\u65b9\u6cd5\u7684\u4e00\u4e9b\u95ee\u9898\u3002",cn_lang:"\u4e2d\u6587",bm_lang:"\u9a6c\u6765\u6587"}},bm:{translation:{userMessagesUnread_plural:"Esei tugasan dikembangkan dari soalan set yang memberi pelajar jangka masa untuk meneliti sesuatu topik dan menghasilkan jawapan mereka dengan merujuk kepada sumber maklumat mereka. Walaupun terdapat beberapa kelemahan menggunakan karangan tugasan sebagai alat penilaian, terdapat tujuan pendidikan yang kukuh yang menyokong amalan ini. Esei ini mengkaji sebab-sebab mengapa karangan tugasan bermanfaat untuk pembelajaran pelajar dan mempertimbangkan beberapa masalah dengan kaedah penilaian ini.",cn_lang:"Chinese",bm_lang:"Malay"}}},lng:"bm",interpolation:{escapeValue:!1}});var d=b.a,g=n(20),p=n(1),h=[{n:"\u4e2d\u6587",v:"cn"},{n:"English",v:"en"},{n:"Bahasa Melayu",v:"bm"}];function O(){var e=Object(s.useState)(""),a=Object(t.a)(e,2),n=a[0],c=a[1],r=Object(s.useState)(""),i=Object(t.a)(r,2),o=i[0],l=i[1];return console.log(n),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("input",{type:"text",className:"input-form login-input ".concat(n.length>0?"hasLength":""),placeholder:"Phone number, username or email address",onKeyUp:function(e){return c(n=e.target.value)}}),Object(p.jsx)("input",{type:"password",className:"input-form login-input ".concat(o.length>0?"hasLength":""),placeholder:"Password",onKeyUp:function(e){return l(o=e.target.value)}})]})}function v(){var e=Object(s.useState)({n:"cn"}),a=Object(t.a)(e,2),n=(a[0],a[1]),c=h.map((function(e){return Object(p.jsx)("option",{value:e.v,children:e.n},e.v)}));return Object(p.jsx)("select",{onChange:function(e){return n((a=e.target.value,void d.changeLanguage(a)));var a},children:c})}function f(){var e=Object(s.useState)(null),a=Object(t.a)(e,2),n=a[0],c=a[1],r=Object(s.useState)(!1),i=Object(t.a)(r,2),o=i[0],l=i[1],u=Object(s.useState)([]),j=Object(t.a)(u,2),b=(j[0],j[1]),m={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:"eve.holt@reqres.in",password:"cityslicka"})};return Object(s.useEffect)((function(){fetch("https://reqres.in/api/login",m).then((function(e){return e.json()})).then((function(e){console.log(e),l(!0),b(e)}),(function(e){l(!0),c(e)}))}),[]),n?Object(p.jsxs)("div",{children:["Error : ",n.message]}):o?Object(p.jsx)("div",{children:"yaya"}):Object(p.jsx)("div",{children:"Loading..."})}var x=function(e){Object(u.a)(n,e);var a=Object(j.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("main",{children:[Object(p.jsx)("nav",{children:Object(p.jsxs)("div",{class:"topnav",children:[Object(p.jsx)("div",{class:"topnav_left",children:"..."}),Object(p.jsx)("div",{class:"topnav_center",children:Object(p.jsx)(v,{})})]})}),Object(p.jsx)("div",{className:"logo-title",children:Object(p.jsx)("h1",{children:"Instragram"})}),Object(p.jsxs)("form",{className:"login-form",children:[Object(p.jsxs)("button",{className:"input-form",children:[Object(p.jsx)("span",{className:"icon-fb",children:Object(p.jsx)(g.a,{size:20})}),Object(p.jsx)("span",{children:"Continue Using Facebook"})]}),Object(p.jsxs)("div",{className:"container-or",children:[Object(p.jsx)("div",{className:"line-or"}),Object(p.jsx)("div",{className:"text-or",children:"OR"}),Object(p.jsx)("div",{className:"line-or"})]}),Object(p.jsx)(O,{}),Object(p.jsx)("div",{className:"input-form",children:Object(p.jsx)("a",{children:"Forgot password?"})}),Object(p.jsx)("button",{className:"input-form",children:"Log In"}),Object(p.jsx)(f,{})]})]})}}]),n}(c.a.Component),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(a){var n=a.getCLS,t=a.getFID,s=a.getFCP,c=a.getLCP,r=a.getTTFB;n(e),t(e),s(e),c(e),r(e)}))};n(37),n(38);i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),k()}},[[35,1,2]]]);
//# sourceMappingURL=main.294e6543.chunk.js.map