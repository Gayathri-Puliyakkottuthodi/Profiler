(this["webpackJsonprest-api-app"]=this["webpackJsonprest-api-app"]||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(17),s=n.n(r),i=(n(88),n(89),n(78)),j=n(50),o=n(12),d=n(65),l=n(66),b=n(81),h=n(79),u=n(67),p=n.n(u),O=n(117),x=(n(108),n(6)),f=O.a.Header,g=O.a.Footer,m=(O.a.Sider,O.a.Content),v=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={persons:[],name:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){var n=t.data;e.setState({persons:n})}))}},{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsxs)(O.a,{children:[Object(x.jsx)(f,{children:"header"}),Object(x.jsx)(O.a,{children:Object(x.jsx)(m,{children:"bbdkskjdhkjfh "})}),Object(x.jsx)(g,{children:"footer"})]})})}}]),n}(a.a.Component),k=n(118),y=n(119),S=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{style:{height:"32px",background:"rgba(255, 255, 255, 0.2)",margin:"16px"}}),Object(x.jsx)(k.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:Object(x.jsxs)(k.a.Item,{children:[Object(x.jsx)(y.a,{}),Object(x.jsx)("span",{children:" Users"})]},"1")})]})},C=n(120),w=n(121),F=O.a.Header,B=O.a.Sider,E=O.a.Content,H=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){window.innerWidth<=760?r(!0):r(!1)}),[]),Object(x.jsx)(j.a,{children:Object(x.jsxs)(O.a,{children:[Object(x.jsx)(B,{trigger:null,collapsible:!0,collapsed:n,children:Object(x.jsx)(S,{})}),Object(x.jsxs)(O.a,{children:[Object(x.jsx)(F,{className:"siteLayoutBackground",style:{padding:0,background:"#001529"},children:a.a.createElement(n?C.a:w.a,{className:"trigger",style:{color:"#fff"}})}),Object(x.jsx)(E,{style:{margin:"24px 16px",padding:24,minHeight:"calc(100vh - 114px)",background:"#fff"},children:Object(x.jsxs)(o.d,{children:[Object(x.jsx)(o.b,{path:"/list",component:v}),Object(x.jsx)(o.a,{to:"/list",from:"/"})]})})]})]})})};var I=function(){return Object(x.jsx)(H,{})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,122)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root")),L()},88:function(e,t,n){},89:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.40c68e92.chunk.js.map