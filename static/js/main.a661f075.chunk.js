(this.webpackJsonpbasics=this.webpackJsonpbasics||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(8),o=a.n(i),r=(a(14),a(1)),c=a(2),s=a(4),u=a(3),m=a(5),h=a(6),p=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("li",{key:this.props.id},"Nome: ",this.props.name," ",l.a.createElement("br",null),this.props.like>1?this.props.like+" Curtidas":this.props.like+" Curtida"," ",l.a.createElement("br",null),this.props.comments>1?this.props.comments+" Coment\xe1rios":this.props.comments+" Coment\xe1rio"," ",l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={feed:[{id:1,name:"THIAGO",like:1,comments:20},{id:2,name:"Raquel",like:100,comments:200},{id:3,name:"rodrigo",like:1e3,comments:2e4}]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("ul",null,this.state.feed.map((function(e){return l.a.createElement(p,{key:e.id,name:e.name,like:e.like,comments:e.comments})})))}}]),t}(n.Component),d=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={email:"nome@email.com",pass:""},a.changeEmail=a.changeEmail.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"changeEmail",value:function(e){var t=e.target.value;this.setState({email:t})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("label",null,"First name:",l.a.createElement("input",{type:"text",placeholder:"Nome"})),l.a.createElement("label",null,"First name:",l.a.createElement("input",{type:"email",placeholder:"E-mail",value:this.state.email,onChange:this.changeEmail})),l.a.createElement("label",null,"First name:",l.a.createElement("input",{type:"password",placeholder:"Senha",value:this.state.pass,onChange:function(t){return e.setState({pass:t.target.value})}}))),l.a.createElement("p",null,this.state.email),l.a.createElement("p",null,this.state.pass))}}]),t}(n.Component),E=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"Ol\xe1 ",this.props.name," essa \xe9 uma \xe1rea logada do nosso site. Fique a vontade para apreciar",l.a.createElement(b,null),l.a.createElement(d,null))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={name:e.name,login:"deslogado",state:0},a.login=a.login.bind(Object(h.a)(a)),a.logout=a.logout.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"login",value:function(){this.setState({name:"thiago",login:"logado",state:1})}},{key:"logout",value:function(){this.setState({name:"Visitate",login:"deslogado",state:0})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Bem vindo ao nosso site"),l.a.createElement("button",{onClick:this.login},"Clique aqui para logar"),l.a.createElement("button",{onClick:this.logout},"Clique aqui para sair"),1===this.state.state?l.a.createElement(E,{name:"Thiago"}):l.a.createElement("div",null," Voc\xea n\xe3o est\xe1 logado "))}}]),t}(n.Component),g=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(O,{name:"Visitante"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.a661f075.chunk.js.map