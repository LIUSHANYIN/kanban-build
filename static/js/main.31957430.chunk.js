(this.webpackJsonpmykankan=this.webpackJsonpmykankan||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),c=a.n(o),l=(a(12),a(3)),i=a(6),s=(a(13),[{cards:[{title:"foo"},{title:"bar"}],title:"Winnie",color:"#8e6e95"},{cards:[{title:"foo"},{title:"bar"}],title:"Bob",color:"#39a59c"},{cards:[{title:"foo"},{title:"bar"}],title:"Thomas",color:"#344759"},{cards:[{title:"foo"},{title:"bar"}],title:"George",color:"#e8741e"}]);a(14);function d(e){var t=e.index,a=e.handleMoveCard,n=e.cardIndex,o=e.title;return r.a.createElement("div",{className:"card"},0!==t&&r.a.createElement("div",{className:"prev"},r.a.createElement("button",{onClick:function(){return a(t,t-1,n)}},"Prev")),r.a.createElement("div",{className:"content"},o),3!==t&&r.a.createElement("div",{className:"next"},r.a.createElement("button",{onClick:function(){return a(t,t+1,n)}},"Next")))}a(15);function m(e){var t=e.index,a=e.title,n=e.titleColor,o=e.addCardToColumn,c=e.cards,l=e.moveCard;return r.a.createElement("div",{className:"column-container"},r.a.createElement("div",{className:"header",style:{backgroundColor:n}},a),r.a.createElement("div",{className:"list"},c.map((function(e,a){return r.a.createElement(d,{handleMoveCard:l,index:t,key:a,title:e.title,cardIndex:a})}))),r.a.createElement("div",{className:"footer"},r.a.createElement("button",{onClick:function(){var e=window.prompt();e&&o(e,t)}},"+ Add a card")))}var u=function(){var e=Object(n.useState)(s),t=Object(i.a)(e,2),a=t[0],o=t[1],c=function(e,t){var n=Object(l.a)(a);n[t].cards.push({title:e}),o(n)},d=function(e,t,n){var r=Object(l.a)(a),c=r[e].cards.splice(n,1)[0];r[t].cards.push(c),o(r)};return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"columns-container"},a.map((function(e,t){return r.a.createElement(m,{moveCard:d,addCardToColumn:c,index:t,titleColor:e.color,cards:e.cards,title:e.title})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.31957430.chunk.js.map