(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/homeimg1.a4b476c9.png"},function(e,t,a){e.exports=a.p+"static/media/homeimg2.d94c7d2b.png"},function(e,t,a){e.exports=a.p+"static/media/homeimg3.f4da9310.png"},function(e,t,a){e.exports=a.p+"static/media/work2.ec92e46b.png"},function(e,t,a){e.exports=a.p+"static/media/work1.28831ad7.png"},function(e,t,a){e.exports=a.p+"static/media/work3.aeb1995d.png"},function(e,t,a){e.exports=a.p+"static/media/work4.cec216f7.png"},function(e,t,a){e.exports=a.p+"static/media/work5.f1197896.png"},function(e,t,a){e.exports=a(33)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(10),s=a.n(c),r=(a(25),a(6)),o=a(1),l=a(2),m=a(4),u=a(3),v=a(5),d=(a(26),a(27),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={isActive:!0},a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({isActive:!e.state.isActive})},3e3)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:this.state.isActive?"loadingAnimation active":"loadingAnimation"},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)),i.a.createElement("div",{className:this.state.isActive?"welcomeRectangle rectangle-1 active":"welcomeRectangle rectangle-1"}),i.a.createElement("div",{className:this.state.isActive?"welcomeRectangle rectangle-2 active":"welcomeRectangle rectangle-2"},i.a.createElement("h2",null,"At this moment this website is available only in horizontal view.")))}}]),t}(n.Component)),h=(a(9),function(e){return i.a.createElement("button",{className:e.className,action:e.action,onClick:function(){return e.click(e.action)}},i.a.createElement("i",{className:"fas fa-arrow-up"}))}),p=(a(28),a(11)),f=a.n(p),b=a(12),g=a.n(b),k=a(13),E=a.n(k),w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={activeHeaderIndex:0,animationStartCounter:0},a.content=[{header:"This is a React single page application.",img:f.a},{header:"Made with create-react-app.",img:g.a},{header:"React is awesome! ",img:E.a}],a.startHomeAnimation=function(){setInterval(function(){2!==a.state.activeHeaderIndex?a.setState({activeHeaderIndex:a.state.activeHeaderIndex+1}):a.setState({activeHeaderIndex:0})},4500)},a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setInterval(function(){e.setState({animationStartCounter:e.state.animationStartCounter+1}),800===e.state.animationStartCounter&&(e.startHomeAnimation(),clearInterval(t))},1)}},{key:"render",value:function(){return 800===this.state.animationStartCounter&&i.a.createElement("div",{className:this.props.className},i.a.createElement("h1",null," ",this.content[this.state.activeHeaderIndex].header),i.a.createElement("img",{src:this.content[this.state.activeHeaderIndex].img,alt:"example"}))}}]),t}(n.Component),N=(a(29),a(14)),A=a.n(N),y=a(15),x=a.n(y),j=a(16),O=a.n(j),S=a(17),I=a.n(S),W=a(18),C=a.n(W),M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={works:[{id:1,name:"work work-1",active:!0,img:A.a},{id:2,name:"work work-2",active:!1,img:x.a},{id:3,name:"work work-3",active:!1,img:O.a},{id:4,name:"work work-4",active:!1,img:I.a},{id:5,name:"work work-5",active:!1,img:C.a}],activeWorkIndex:0},a.handleWorkSelection=function(e){var t=Object(r.a)(a.state.works);t[a.state.activeWorkIndex].active=!1,"next"===e&&a.state.activeWorkIndex<t.length-1?(t[a.state.activeWorkIndex+1].active=!0,a.setState({works:t,activeWorkIndex:a.state.activeWorkIndex+1})):"next"===e&&4===a.state.activeWorkIndex?(t[0].active=!0,a.setState({works:t,activeWorkIndex:0})):"prev"===e&&a.state.activeWorkIndex>0?(t[a.state.activeWorkIndex-1].active=!0,a.setState({works:t,activeWorkIndex:a.state.activeWorkIndex-1})):"prev"===e&&0===a.state.activeWorkIndex&&(t[4].active=!0,a.setState({works:t,activeWorkIndex:4}))},a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.works.map(function(e){return i.a.createElement("section",{className:e.active?"".concat(e.name," active"):e.name,key:e.id},i.a.createElement("img",{src:e.img,alt:"example project"}),i.a.createElement("h2",null,"work ".concat(e.id)))});return i.a.createElement(i.a.Fragment,null,t,i.a.createElement("button",{action:"prev",className:"prev",onClick:function(){return e.handleWorkSelection("prev")}},i.a.createElement("i",{className:"fas fa-arrow-up"})),i.a.createElement("button",{action:"next",className:"next",onClick:function(){return e.handleWorkSelection("next")}},i.a.createElement("i",{className:"fas fa-arrow-up"})))}}]),t}(n.Component),B=(a(30),function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:e.active?"quote-container quote-1 active":"quote-container quote-1"},"Everything is"),i.a.createElement("p",{className:e.active?"quote-container quote-2 active":"quote-container quote-2"},i.a.createElement("span",null,"Is this")," possible"),i.a.createElement("span",{className:e.active?"card active":"card"},i.a.createElement("span",{className:"card-front"},"?"),i.a.createElement("span",{className:"card-back"},".")))}),D=(a(31),function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:"dot dot-big"}),i.a.createElement("span",{className:"dot dot-smaller"}),i.a.createElement("span",{className:"dot dot-small"}),i.a.createElement("section",{className:"contact-me"},i.a.createElement("a",{href:"https://github.com/Bartosz90",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fab fa-github"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/bartosz-krupa-95b715159/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fab fa-linkedin"})),i.a.createElement("a",{href:"https://www.facebook.com/bartek.krupa.503",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fab fa-facebook-square"}))))}),P=(a(32),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={buttons:[{action:"Web Design",active:!1,id:0,gridArea:"btn1"},{action:"Graphic Design",active:!1,id:1,gridArea:"btn2"},{action:"Motion Design",active:!1,id:2,gridArea:"btn3"},{action:"App Design",active:!1,id:3,gridArea:"btn4"},{action:"UX Design",active:!1,id:4,gridArea:"btn5"},{action:"UI Design",active:!1,id:5,gridArea:"btn6"}],buttonWidth:220},a.updateDimensions=function(){window.innerWidth<580?a.setState({buttonWidth:120}):window.innerWidth<1001?a.setState({buttonWidth:150}):a.setState({buttonWidth:220})},a.handleActiveButtons=function(e){var t=Object(r.a)(a.state.buttons);t.map(function(t){return t.action===e&&(t.active=!t.active),t}),a.setState({buttons:t})},a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var e=this,t=this.state.buttons.map(function(t){return i.a.createElement("button",{action:t.action,className:t.active?"active":"",key:t.id,onClick:function(){return e.handleActiveButtons(t.action)},type:"button",style:{width:e.state.buttonWidth,justifySelf:"center",alignSelf:"center",gridArea:t.gridArea}},t.active&&i.a.createElement("i",{className:"fas fa-check"})," ",t.action)});return i.a.createElement("form",{className:"form"},i.a.createElement("p",null,"What can I do for you?"),t,i.a.createElement("input",{type:"text",placeholder:"Your name"}),i.a.createElement("input",{type:"email",placeholder:"Your email"}),i.a.createElement("button",{type:"button",style:{gridArea:"submit",width:this.state.buttonWidth,justifySelf:"center",alignSelf:"center"}},"Send"))}}]),t}(n.Component)),q=function(e){var t=e.sections.map(function(e){return i.a.createElement("section",{key:e.id,name:e.name,active:e.active,className:e.active?"".concat(e.className," active"):"".concat(e.className)},"home"===e.name?i.a.createElement(w,{className:"homePage"}):null,"works"===e.name?i.a.createElement(M,{className:"works",active:e.active}):null,"about"===e.name?i.a.createElement(B,{className:"about",active:e.active}):null,"contact"===e.name?i.a.createElement(D,{className:"contact"}):null,"hire us"===e.name?i.a.createElement(P,{className:"hire"}):null)});return i.a.createElement("main",{className:e.isMenuActive?"main active":"main"},e.sections[0].active?null:i.a.createElement(h,{action:"up",className:"sectionUp sectionChangeBtn",click:e.click}),e.sections[4].active?null:i.a.createElement(h,{action:"down",className:"sectionDown sectionChangeBtn",click:e.click}),t)},H=(a(7),function(e){var t=e.sections,a=e.isMenuActive,n=e.click,c=e.handleMenu,s=t.map(function(e){return i.a.createElement("button",{className:"menuBtn",onClick:function(){return c(e.name)},active:e.active,key:e.id},e.name)});return i.a.createElement("nav",null,i.a.createElement("button",{className:a?"hamburgerBtn":"hamburgerBtn active",onClick:n},i.a.createElement("i",{className:"fas fa-bars"})),i.a.createElement("section",{className:a?"navButtons active":"navButtons"},s))}),z=function(e){return i.a.createElement("div",{className:e.className},e.className.includes("active")?i.a.createElement("p",null,e.name):i.a.createElement("p",null,"0",e.section.toString()))},R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={},a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"sectionPointersContainer"},i.a.createElement(z,{className:this.props.sections[0].active?"sectionPointer active":"sectionPointer",section:this.props.sections[0].id,name:this.props.sections[0].name}),i.a.createElement(z,{className:this.props.sections[1].active?"sectionPointer active":"sectionPointer",section:this.props.sections[1].id,name:this.props.sections[1].name}),i.a.createElement(z,{className:this.props.sections[2].active?"sectionPointer active":"sectionPointer",section:this.props.sections[2].id,name:this.props.sections[2].name}),i.a.createElement(z,{className:this.props.sections[3].active?"sectionPointer active":"sectionPointer",section:this.props.sections[3].id,name:this.props.sections[3].name}),i.a.createElement(z,{className:this.props.sections[4].active?"sectionPointer active":"sectionPointer",section:this.props.sections[4].id,name:this.props.sections[4].name}))}}]),t}(n.Component),F=function(){return i.a.createElement("a",{className:"signature",href:"https://bartosz90.github.io/Portfolio/",target:"_blank",rel:"noopener noreferrer"},"designed by ",i.a.createElement("span",null,"B. Krupa"))},_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={isMenuActive:!1,sections:[{name:"home",id:0,active:!0,className:"section home"},{name:"works",id:1,active:!1,className:"section works"},{name:"about",id:2,active:!1,className:"section about"},{name:"contact",id:3,active:!1,className:"section contact"},{name:"hire us",id:4,active:!1,className:"section hire"}]},a.handlehamburgerBtn=function(){a.setState({isMenuActive:!a.state.isMenuActive})},a.handleSectionChange=function(e){var t=Object(r.a)(a.state.sections);t.map(function(t){return t.active=!1,t.name===e?t.active=!0:t.active=!1,t}),a.setState({sections:t})},a.handleMenu=function(e){a.handlehamburgerBtn(),a.handleSectionChange(e)},a.handleSectionArrow=function(e){var t=Object(r.a)(a.state.sections),n=t.findIndex(function(e){return e.active});t[n].active=!1,t["".concat("down"===e?n+1:n-1)].active=!0,t.map(function(e){return e}),a.setState({sections:t})},a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"portraitError"},i.a.createElement("h1",null,"At this moment this website is available only in horizontal view.")),i.a.createElement(d,null),i.a.createElement(q,{isMenuActive:this.state.isMenuActive,sections:this.state.sections,click:this.handleSectionArrow}),i.a.createElement(H,{handleMenu:this.handleMenu,click:this.handlehamburgerBtn,isMenuActive:this.state.isMenuActive,sections:this.state.sections}),i.a.createElement(R,{sections:this.state.sections}),i.a.createElement(F,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[19,1,2]]]);
//# sourceMappingURL=main.766bf253.chunk.js.map