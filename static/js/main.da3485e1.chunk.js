(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var s=n(0),i=n.n(s),o=n(7),a=n.n(o),l=(n(15),n(1)),c=n(2),r=n(4),d=n(3),h=n(5),u=n(8),k=n.n(u);n(16),s.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(17);var f=function(t){function e(){var t,n;Object(l.a)(this,e);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(n=Object(r.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).state={content:n.props.content},n.styles={border:"1px solid",width:"100px",height:"100px",textAlign:"center"},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("td",{onClick:function(){return t.props.onClick(t.props.id)},style:this.styles},this.props.content)}}]),e}(s.Component),m=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function p(t){for(var e="",n=0;n<m.length;n++){var s=E(t.slots[m[n][0]].content,t.slots[m[n][1]].content,t.slots[m[n][2]].content);if("x"===s){e=s;break}if("o"===s){e=s;break}}return e}function E(t,e,n){var s="";return""!==t&&""!==e&&""!==n&&("x"===t&&"x"===e&&"x"===n?s="x":"o"===t&&"o"===e&&"o"===n&&(s="o")),s}var v=function(t){function e(){var t,n;Object(l.a)(this,e);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(n=Object(r.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).state={slots:[{id:0,content:""},{id:1,content:""},{id:2,content:""},{id:3,content:""},{id:4,content:""},{id:5,content:""},{id:6,content:""},{id:7,content:""},{id:8,content:""}],turn:"x",winner:"",info:""},n.styles={width:"300px",height:"300px",border:"1px solid"},n.handleClick=function(t){n.setState(function(t,e){if(t.info="",""===p(t))if(""===t.slots[e].content){t.slots[e].content=t.turn,t.turn="x"===t.turn?"o":"x";var n=p(t);""!==n&&(t.winner=n)}else t.info="Esa celda est\xe1 ocupada.";else t.info="Ya existe un ganador. Inicie nuevamente el juego.";return t}(n.state,t))},n.restartGame=function(){n.setState({slots:[{id:0,content:""},{id:1,content:""},{id:2,content:""},{id:3,content:""},{id:4,content:""},{id:5,content:""},{id:6,content:""},{id:7,content:""},{id:8,content:""}],turn:"x",winner:"",info:""})},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("div",null,i.a.createElement("h1",null,"\xa1Bienvenido a un nuevo juego de Gato!"),this.renderTurnOrWinner(),this.renderInfo(),i.a.createElement("table",{style:this.styles},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement(f,{onClick:this.handleClick,id:this.state.slots[0].id,content:this.state.slots[0].content,key:this.state.slots[0].id}),i.a.createElement(f,{onClick:this.handleClick,id:this.state.slots[1].id,content:this.state.slots[1].content,key:this.state.slots[1].id}),i.a.createElement(f,{onClick:this.handleClick,id:this.state.slots[2].id,content:this.state.slots[2].content,key:this.state.slots[2].id})),i.a.createElement("tr",null,i.a.createElement(f,{onClick:this.handleClick,id:this.state.slots[3].id,content:this.state.slots[3].content,key:this.state.slots[3].id}),i.a.createElement(f,{onClick:this.handleClick,id:this.state.slots[4].id,content:this.state.slots[4].content,key:this.state.slots[4].id}),i.a.createElement(f,{onClick:this.handleClick,id:this.state.slots[5].id,content:this.state.slots[5].content,key:this.state.slots[5].id})),i.a.createElement("tr",null,i.a.createElement(f,{onClick:this.handleClick,id:this.state.slots[6].id,content:this.state.slots[6].content,key:this.state.slots[6].id}),i.a.createElement(f,{onClick:this.handleClick,id:this.state.slots[7].id,content:this.state.slots[7].content,key:this.state.slots[7].id}),i.a.createElement(f,{onClick:this.handleClick,id:this.state.slots[8].id,content:this.state.slots[8].content,key:this.state.slots[8].id})))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("button",{onClick:function(){return t.restartGame()}},"Volver a jugar"))}},{key:"renderTurnOrWinner",value:function(){return""===this.state.winner?i.a.createElement("h4",null,"Es el turno de '",this.state.turn,"'"):i.a.createElement("h2",null,"Ha ganado '",this.state.winner,"'")}},{key:"renderInfo",value:function(){return""!==this.state.info?i.a.createElement("p",null,"Informaci\xf3n: ",this.state.info):i.a.createElement("br",null)}}]),e}(s.Component);a.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},9:function(t,e,n){t.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.da3485e1.chunk.js.map