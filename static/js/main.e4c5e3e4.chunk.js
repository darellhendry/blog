(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(e,t,a){e.exports=a.p+"static/media/00.ad7c82b6.jpg"},58:function(e,t,a){e.exports=a(84)},64:function(e,t,a){},65:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),l=(a(63),a(52)),i=a(11),m=a(91),s=a(87),u=(a(64),a(86));function p(){return r.a.createElement(u.a,{className:"jumbo"},r.a.createElement("h1",null,"darell"),r.a.createElement("h3",{className:"subtitle"},"an introvert"))}var h=a(17),d=a(18),E=a(20),f=a(19),g=a(21),b=a(88),v=a(89),y=(a(65),a(90)),w=a(48),j=a(49),k=function(e){return r.a.createElement(y.a,Object.assign({className:"thumbnail-card"},e),r.a.createElement(y.a.Body,null,r.a.createElement("div",{className:"container-title"},r.a.createElement("div",null,r.a.createElement(y.a.Title,{style:{opacity:"87%",color:"#000",marginBottom:0,fontWeight:"bold"}},e.title),r.a.createElement("p",{className:"date",style:{opacity:"87%",color:"#000",marginBottom:0}},e.time)),r.a.createElement(w.a,{icon:j.a}))))},O=[{id:0,title:"Proklamasi",time:"Jul 12, 2019"}],N=[{id:0,title:"Proklamasi",content:"Pukul 00: 42 web ini saya proklamasikan telah memposting postingan pertama saya."}],C=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).goToPost=function(e){a.props.history.push("/post/".concat(e))},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(s.a,null,O.map(function(t){return r.a.createElement(b.a,{key:t.id,className:"justify-content-center"},r.a.createElement(v.a,{xs:12,md:9},r.a.createElement(k,{onClick:function(){return e.goToPost(t.id)},title:t.title,preview:t.preview,time:t.time})))}))}}]),t}(r.a.Component),P=a(43),B=(a(78),a(51)),x=a.n(B),F=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){a.setState(function(e){return{isIn:!e.isIn}})},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t={title:"",content:""};return null!==this.props.match&&(t=N.find(function(t){return t.id==e.props.match.params.id})),r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:Object(P.b)(I.image),src:x.a,alt:"Proklamasi"}),r.a.createElement(s.a,null,r.a.createElement(b.a,null,r.a.createElement(v.a,null,r.a.createElement("h5",{className:"h5"},t.title),r.a.createElement("p",null,t.content)))))}}]),t}(r.a.Component),I=P.a.create({image:{width:"100%",height:450,objectFit:"cover",marginBottom:34}}),J=(a(79),[{path:"/",name:"Home",Component:C},{path:"/post/:id",name:"Post",Component:F}]);var T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{basename:"/blog"},r.a.createElement(p,null),r.a.createElement(s.a,{fluid:!0,className:"container"},J.map(function(e){var t=e.path,a=e.Component;return r.a.createElement(i.a,{key:t,exact:!0,path:t},function(e){return r.a.createElement(m.a,{in:null!=e.match,timeout:300,classNames:"page",unmountOnExit:!0},r.a.createElement("div",{className:"page"},r.a.createElement(a,e)))})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[58,1,2]]]);
//# sourceMappingURL=main.e4c5e3e4.chunk.js.map