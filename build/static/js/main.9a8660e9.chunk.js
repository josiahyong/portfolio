(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(9),s=c(3),i=c(1),a=c(0),l=Object(i.createContext)(),r=function(e){var t=e.children,c=Object(i.useState)("light"),n=Object(s.a)(c,2),r=n[0],o=n[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://rajshekhar26.github.io/cleanfolio",j="JY",h="Josiah Yong",b="Software Engineer",u="A Computer Science student that is always excited to take on new challenges",d="https://example.com",m={linkedin:"https://linkedin.com/in/josiahyqt/",github:"https://github.com/josiahyong"},O=[{name:"Weather App",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["HTML","CSS","React"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Project 2",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Project 3",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com/josiahyong/Weather-App",livePreview:"https://github.com"}],p=["HTML","CSS","JavaScript","TypeScript","React","Redux","SASS","Material UI","Git","CI/CD","Jest","Enzyme"],x="johnsmith@mail.com",f=c(16),k=c.n(f),v=c(14),N=c.n(v),g=c(18),_=c.n(g),S=c(17),C=c.n(S),w=(c(28),function(){var e=Object(i.useContext)(l),t=Object(s.a)(e,1)[0],c=t.themeName,n=t.toggleTheme,r=Object(i.useState)(!1),o=Object(s.a)(r,2),j=o[0],h=o[1],b=function(){return h(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[O.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:b,className:"link link--nav",children:"Projects"})}):null,p.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:b,className:"link link--nav",children:"Skills"})}):null,x?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:b,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:n,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===c?Object(a.jsx)(N.a,{}):Object(a.jsx)(k.a,{})}),Object(a.jsx)("button",{type:"button",onClick:b,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(C.a,{}):Object(a.jsx)(_.a,{})})]})}),y=(c(32),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(w,{})]})}),A=c(11),P=c.n(A),E=c(19),q=c.n(E),R=(c(33),function(){var e=h,t=b,c=u,n=d,s=m;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:c&&c}),Object(a.jsxs)("div",{className:"about__contact center",children:[n&&Object(a.jsx)("a",{href:n,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(a.jsxs)(a.Fragment,{children:[s.github&&Object(a.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(P.a,{})}),s.linkedin&&Object(a.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(q.a,{})})]})]})]})}),T=c(7),J=c.n(T),I=c(20),L=c.n(I),M=(c(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},J()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(P.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(L.a,{})})]})}),H=(c(36),function(){return O.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(a.jsx)(M,{project:e},J()())}))})]}):null}),V=(c(37),function(){return p.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:p.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},J()())}))})]}):null}),Y=c(21),z=c.n(Y),B=(c(38),function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),c?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(z.a,{fontSize:"large"})})}):null}),W=(c(39),function(){return x?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(x),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),D=(c(40),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Created By Raj Shekhar"})})}),F=(c(41),function(){var e=Object(i.useContext)(l),t=Object(s.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(y,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(R,{}),Object(a.jsx)(H,{}),Object(a.jsx)(V,{}),Object(a.jsx)(W,{})]}),Object(a.jsx)(B,{}),Object(a.jsx)(D,{})]})});c(42);Object(n.render)(Object(a.jsx)(r,{children:Object(a.jsx)(F,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.9a8660e9.chunk.js.map