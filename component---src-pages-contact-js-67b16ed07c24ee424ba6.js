(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{199:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(215),r=t(216),i=t(212),s=t(200),m=t.n(s);a.default=function(){return l.a.createElement(c.a,null,l.a.createElement("div",{className:"page"},l.a.createElement(r.a,{title:"Contact",description:"Say hello!"}),l.a.createElement("div",{className:m.a.row},l.a.createElement("form",{className:m.a.form},l.a.createElement("div",{className:m.a.title},"You can write me a letter right from here. Enter your name and e-mail for feedback"),l.a.createElement("label",{htmlFor:"name"},"Name",l.a.createElement("input",{id:"name"})),l.a.createElement("label",{htmlFor:"email"},"E-mail",l.a.createElement("input",{id:"email"})),l.a.createElement("label",{htmlFor:"subject"},"Subject",l.a.createElement("input",{id:"subject"})),l.a.createElement("label",{htmlFor:"text"},"Text",l.a.createElement("textarea",{id:"text"})),l.a.createElement(i.a,null,"Send")),l.a.createElement("div",{className:m.a.contactInfo},l.a.createElement("div",{className:m.a.text},l.a.createElement("div",{className:m.a.textItem},l.a.createElement("i",{className:"fa fa-globe"}),"Kyrgyzstan, Bishkek"),l.a.createElement("div",{className:m.a.textItem},l.a.createElement("i",{className:"fa fa-envelope"}),"avgustin456@gmail.com"),l.a.createElement("div",{className:m.a.textItem},l.a.createElement("i",{className:"fa fa-skype"}),"polina.antonova31")),l.a.createElement("div",{className:m.a.btns},l.a.createElement(i.a,{link:"https://t.me/an4morph",external:!0,className:"longSocial"},l.a.createElement("i",{className:"fa fa-telegram"}),"Chat with Telegram"),l.a.createElement(i.a,{link:"https://github.com/an4morph",external:!0,className:"longSocial"},l.a.createElement("i",{className:"fa fa-github"}),"Github account"),l.a.createElement(i.a,{link:"https://www.linkedin.com/in/polina-antonova-b08436161/",external:!0,className:"longSocial"},l.a.createElement("i",{className:"fa fa-linkedin"}),"Linkedin profile"))))))}},208:function(e,a,t){"use strict";t(211)("link",function(e){return function(a){return e(this,"a","href",a)}})},209:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(66),r=t.n(c);t.d(a,"a",function(){return r.a});t(210),t(9).default.enqueue,l.a.createContext({})},210:function(e,a,t){var n;e.exports=(n=t(213))&&n.default||n},211:function(e,a,t){var n=t(1),l=t(7),c=t(31),r=/"/g,i=function(e,a,t,n){var l=String(c(e)),i="<"+a;return""!==t&&(i+=" "+t+'="'+String(n).replace(r,"&quot;")+'"'),i+">"+l+"</"+a+">"};e.exports=function(e,a){var t={};t[e]=a(i),n(n.P+n.F*l(function(){var a=""[e]('"');return a!==a.toLowerCase()||a.split('"').length>3}),"String",t)}},212:function(e,a,t){"use strict";t(208);var n=t(0),l=t.n(n),c=t(209),r=t(192),i=t.n(r);a.a=function(e){var a=e.children,t=e.onClick,n=e.type,r=e.className,s=e.link,m=e.external,o=l.a.createElement("button",{className:r?i.a[r]:i.a.btn,type:n||"button",onClick:t},a);return s&&m?l.a.createElement("a",{href:s,rel:"noopener noreferrer",target:"_blank"},o):s?l.a.createElement(c.a,{to:s},o):o}},213:function(e,a,t){"use strict";t.r(a);t(22);var n=t(0),l=t.n(n),c=t(91);a.default=function(e){var a=e.location,t=e.pageResources;return t?l.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null}},214:function(e,a,t){e.exports=t.p+"static/avatar-4bc39742b617a6dcfb0c58040780303d.jpg"},215:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=(t(208),t(209)),r=t(191),i=t.n(r),s=t(212),m=t(214),o=t.n(m),u=function(e){var a=e.className;return l.a.createElement("div",{className:a},l.a.createElement("div",{className:i.a.head},l.a.createElement("div",{className:i.a.avatar},l.a.createElement("img",{src:o.a,alt:"avatar"})),l.a.createElement("h1",{className:i.a.title},"Antonova Polina")),l.a.createElement("ul",{className:i.a.menu},[{id:1,text:"About",link:"/"},{id:2,text:"Resume",link:"/resume"},{id:3,text:"Portfolio",link:"/portfolio"},{id:4,text:"Contact",link:"/contact"}].map(function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(c.a,{to:e.link,className:i.a.sidebarLink,activeClassName:i.a.sidebarLinkActive},e.text))})),l.a.createElement("div",{className:i.a.social},l.a.createElement(s.a,{link:"https://www.linkedin.com/in/polina-antonova-b08436161/",external:!0,className:"socialBtn"},l.a.createElement("i",{className:"fa fa-linkedin"})),l.a.createElement(s.a,{link:"https://github.com/an4morph/Resume",external:!0,className:"socialBtn"},l.a.createElement("i",{className:"fa fa-github"})),l.a.createElement(s.a,{link:"https://t.me/an4morph",external:!0,className:"socialBtn"},l.a.createElement("i",{className:"fa fa-telegram"}))))},E=t(193),f=t.n(E),d=function(e){var a=e.toggleSidebar,t=e.isOpen;return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,{className:f.a.desktop}),l.a.createElement("div",{onClick:a,className:t?f.a.overlayOpen:f.a.overlayClosed}),l.a.createElement(u,{className:t?f.a.mobileOpen:f.a.mobileClosed}))},v=t(194),p=t.n(v);a.a=function(e){var a=Object(n.useState)(!1),t=a[0],c=a[1],r=function(){return c(!t)};return l.a.createElement("div",{className:p.a.page},l.a.createElement("header",{className:p.a.header},l.a.createElement("i",{className:"fa fa-bars",onClick:r}),l.a.createElement("h1",null,"Antonova Polina")),l.a.createElement(d,{isOpen:t,toggleSidebar:r}),l.a.createElement("div",{className:p.a.content},e.children))}},216:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(195),r=t.n(c);a.a=function(e){var a=e.title,t=e.description;return l.a.createElement("div",{className:r.a.sectionTitle},l.a.createElement("h2",null,a),t&&l.a.createElement("h5",null,t))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-67b16ed07c24ee424ba6.js.map