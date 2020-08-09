(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{10:function(e,a,t){e.exports=t.p+"static/media/logo.75509f2e.png"},22:function(e,a,t){e.exports=t(38)},27:function(e,a,t){},28:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(16),l=t.n(n),i=t(6),s=(t(27),t(17)),m=t(18),o=t(9),u=t(21),h=t(20),d=(t(28),function(e){return c.a.createElement("div",{className:"character__card"},c.a.createElement(i.b,{to:"detail/".concat(e.characterObj.id),className:"card__btn"},c.a.createElement("img",{className:"character__img",src:e.characterObj.image,alt:e.characterObj.name}),c.a.createElement("div",{className:"character__properties"},c.a.createElement("h2",{className:"character__name"},e.characterObj.name),c.a.createElement("h3",{className:"character__species"},e.characterObj.species))))}),f=(t(34),function(e){if(0===e.characterArray.length)return c.a.createElement("p",null,"No hay ning\xfan personaje que coincida con la palabra ",e.filterName);var a=e.characterArray.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(d,{characterObj:e}))}));return c.a.createElement("ul",{className:"characters__rendered"},a)}),p=(t(35),t(10)),E=t.n(p),_=function(e){var a,t;return c.a.createElement("div",{className:"character__detail"},c.a.createElement("img",{className:"character__detail__logo",src:E.a,alt:"Rick and Morty"}),c.a.createElement(i.b,{to:"/",className:"character__detail__return"},"Volver"),c.a.createElement("div",{className:"character__detail__content"},c.a.createElement("img",{className:"character__detail__content__img",src:e.characterObj.image,alt:e.characterObj.name}),c.a.createElement("div",{className:"character__detail__content__properties"},c.a.createElement("h2",null,e.characterObj.name),c.a.createElement("h3",null,"Status:"," ",e.characterObj.status," ","Dead"===(t=e.characterObj.status)?c.a.createElement("i",{class:"fas fa-skull"}):"Alive"===t?c.a.createElement("i",{class:"fas fa-smile"}):c.a.createElement("i",{class:"fas fa-question-circle"})),c.a.createElement("h3",null,"Spices:"," ",e.characterObj.species," ","Alien"===(a=e.characterObj.species)?c.a.createElement("i",{class:"fab fa-reddit-alien"}):"Human"===a?c.a.createElement("i",{class:"fas fa-male"}):c.a.createElement("i",{class:"fas fa-question-circle"})," "),c.a.createElement("h3",null,"Origin: ",e.characterObj.origin.name),c.a.createElement("h3",null,"Episodes: ",e.characterObj.episode.length))))},b=(t(36),function(e){return c.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault()}},c.a.createElement("div",null,c.a.createElement("input",{className:"form__input-text",type:"text",id:"filterName",value:e.filterName,onChange:function(a){e.handleFilters({filterInputName:a.target.value})}})))}),N=t(1),j=(t(37),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).state={charactersList:[],filterName:""},r.handleFilters=r.handleFilters.bind(Object(o.a)(r)),r.renderCharacterDetail=r.renderCharacterDetail.bind(Object(o.a)(r)),r}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(a){e.setState({charactersList:a.results.sort((function(e,a){return e.name<a.name?-1:e.name>a.name?1:0}))})}))}},{key:"handleFilters",value:function(e){this.setState({filterName:e.filterInputName})}},{key:"renderCharacterDetail",value:function(e){var a=e.match.params.characterId,t=this.state.charactersList.find((function(e){return e.id===parseInt(a)}));return t?c.a.createElement(_,{characterObj:t}):c.a.createElement("p",null,"Personaje no encontrado")}},{key:"renderFilteredCharacters",value:function(){var e=this;return this.state.charactersList.filter((function(a){return a.name.toLowerCase().includes(e.state.filterName.toLowerCase())}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement(N.a,{exact:!0,path:"/"},c.a.createElement("img",{className:"logo",src:E.a,alt:"Rick and Morty"}),c.a.createElement("div",{className:"App"},c.a.createElement(b,{filterName:this.state.filterName,handleFilters:this.handleFilters}),c.a.createElement(f,{characterArray:this.renderFilteredCharacters(),filterName:this.state.filterName}))),c.a.createElement(N.c,null,c.a.createElement(N.a,{path:"/detail/:characterId",render:this.renderCharacterDetail})))}}]),t}(c.a.Component));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,null,c.a.createElement(j,null))),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.b3bfb681.chunk.js.map