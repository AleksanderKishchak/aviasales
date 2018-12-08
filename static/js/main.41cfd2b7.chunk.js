(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/turkish-airlines_logo.52bc738c.png"},12:function(e,t,a){e.exports=a(27)},18:function(e,t,a){},20:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),c=a.n(i),s=(a(18),a(1)),l=a(2),o=a(4),d=a(3),u=a(5),m=(a(20),a(7));function p(e){var t=e.text,a=e.hasBtn,n=e.handleChange,i=e.handleBtnClick,c=e.value,s=Object(m.a)(e,["text","hasBtn","handleChange","handleBtnClick","value"]);return r.a.createElement("label",{className:"stops-item"},r.a.createElement("input",Object.assign({className:"stops-input",type:"checkbox",value:c,onChange:n},s)),r.a.createElement("span",{className:"label-text"},t),a?r.a.createElement("button",{type:"button",className:"select-only",onClick:function(){return i(c)}},"\u0422\u043e\u043b\u044c\u043a\u043e"):"")}p.defaultProps={hasBtn:!0,handleBtnClick:function(){return null}};var h=p;var v=function(e){var t=e.checked,a=e.value,n=e.handleChange,i=Object(m.a)(e,["checked","value","handleChange"]);return r.a.createElement("label",{className:"currency-item ".concat(t?"active":"")},r.a.createElement("input",Object.assign({hidden:!0,checked:t,className:"currency-input",value:a,onChange:n,type:"radio"},i)),a)};var _=function(e){var t=e.handleCurrencyChange,a=e.handleStopsChange,n=e.selectOnlyOneStop,i=e.selectAllStops,c=e.stops,s=e.currentCurrency,l=Object.values(c).every(function(e){return e});return r.a.createElement("form",{className:"filters"},r.a.createElement("div",{className:"currency-select"},r.a.createElement("h3",{className:"filter-title"},"\u0432\u0430\u043b\u044e\u0442\u0430"),r.a.createElement("div",{className:"currency-list"},r.a.createElement(v,{checked:"RUB"===s,handleChange:t,value:"RUB"}),r.a.createElement(v,{checked:"USD"===s,handleChange:t,value:"USD"}),r.a.createElement(v,{checked:"EUR"===s,handleChange:t,value:"EUR"}))),r.a.createElement("div",{className:"stops-select"},r.a.createElement("h3",{className:"filter-title"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"),r.a.createElement(h,{text:"\u0412\u0441\u0435",handleChange:i,checked:l,hasBtn:!1}),r.a.createElement(h,{text:"0 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a",handleChange:a,handleBtnClick:n,value:"0",checked:c[0]}),r.a.createElement(h,{text:"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430",handleChange:a,handleBtnClick:n,value:"1",checked:c[1]}),r.a.createElement(h,{text:"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",handleChange:a,handleBtnClick:n,value:"2",checked:c[2]}),r.a.createElement(h,{text:"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",handleChange:a,handleBtnClick:n,value:"3",checked:c[3]})))},g=a(8),k=a.n(g),E=(a(23),a(26),a(11)),f=a.n(E);var C=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.currentCurrency,n=t.ticket,i=n.origin,c=n.origin_name,s=n.destination,l=n.destination_name,o=n.departure_date,d=n.departure_time,u=n.arrival_date,m=n.arrival_time,p=n.stops,h=n.price,v="";switch(p){case 0:break;case 1:v="1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430";break;case 2:v="2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438";break;case 3:v="3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438";break;default:v="\u0431\u043e\u043b\u044c\u0448\u0435 \u0442\u0440\u0435\u0445 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"}switch(a){case"USD":e="".concat(function(e){return(.015*e).toFixed(2)}(h),"$");break;case"EUR":e="".concat(function(e){return(.013*e).toFixed(2)}(h),"\u20ac");break;default:e="".concat(h,"P")}return r.a.createElement("div",{className:"ticket"},r.a.createElement("div",{className:"ticket-buy"},r.a.createElement("img",{src:f.a,alt:"turkish airlines",className:"ticket-logo"}),r.a.createElement("button",{className:"buy-btn"},"\u041a\u0443\u043f\u0438\u0442\u044c \u0437\u0430 ",e)),r.a.createElement("div",{className:"ticket-info"},r.a.createElement("div",{className:"ticket-from"},r.a.createElement("div",{className:"ticket-time"},d),r.a.createElement("div",{className:"ticket-place"},i,", ",c),r.a.createElement("div",{className:"ticket-date"},r.a.createElement(k.a,{format:"D MMM YYYY, ddd",date:o,interval:0}))),r.a.createElement("div",{className:"ticket-stops"},v,r.a.createElement("div",{className:"line"})),r.a.createElement("div",{className:"ticket-to"},r.a.createElement("div",{className:"ticket-time"},m),r.a.createElement("div",{className:"ticket-place"},l,", ",s),r.a.createElement("div",{className:"ticket-date"},r.a.createElement(k.a,{format:"D MMM YYYY, ddd",date:u,interval:0})))))}}]),t}(n.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.tickets,n=t.stops,i=t.currentCurrency;return e=t.showAll?a:a.filter(function(e){return n[e.stops]}),r.a.createElement("div",{className:"tickets-list"},e.length>0?e.map(function(e,t){return r.a.createElement(C,{currentCurrency:i,key:t,ticket:e})}):"Tickets not found")}}]),t}(n.Component),O=[{origin:"VVO",origin_name:"\u041d\u0435\u0440\u0432\u043d\u044b\u0439 \u0441\u0440\u044b\u0432",destination:"TLV",destination_name:"\u0421\u043f\u043e\u043a\u043e\u0439\u043d\u0430\u044f \u0436\u0438\u0437\u043d\u044c",departure_date:"12.05.18",departure_time:"16:20",arrival_date:"12.25.18",arrival_time:"22:10",carrier:"TK",stops:3,price:12400},{origin:"VVO",origin_name:"Ukraine",destination:"TLV",destination_name:"Poland",departure_date:"12.05.18",departure_time:"17:20",arrival_date:"12.05.18",arrival_time:"23:50",carrier:"S7",stops:1,price:13100},{origin:"VVO",origin_name:"Unates States of America",destination:"TLV",destination_name:"\u0422\u0435\u043b\u044c-\u0410\u0432\u0438\u0432",departure_date:"12.05.18",departure_time:"12:10",arrival_date:"12.05.18",arrival_time:"18:10",carrier:"SU",stops:0,price:15300},{origin:"VVO",origin_name:"\u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a",destination:"TLV",destination_name:"\u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435",departure_date:"12.05.18",departure_time:"17:00",arrival_date:"12.05.18",arrival_time:"23:30",carrier:"TK",stops:2,price:11e3},{origin:"VVO",origin_name:"\u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a",destination:"TLV",destination_name:"\u0422\u0435\u043b\u044c-\u0410\u0432\u0438\u0432",departure_date:"12.05.18",departure_time:"12:10",arrival_date:"12.05.18",arrival_time:"20:15",carrier:"BA",stops:3,price:13400},{origin:"VVO",origin_name:"\u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a",destination:"TLV",destination_name:"\u0422\u0435\u043b\u044c-\u0410\u0432\u0438\u0432",departure_date:"12.05.18",departure_time:"9:40",arrival_date:"12.05.18",arrival_time:"19:25",carrier:"SU",stops:3,price:12450},{origin:"VVO",origin_name:"\u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a",destination:"TLV",destination_name:"\u0422\u0435\u043b\u044c-\u0410\u0432\u0438\u0432",departure_date:"12.05.18",departure_time:"17:10",arrival_date:"12.05.18",arrival_time:"23:45",carrier:"TK",stops:1,price:13600},{origin:"VVO",origin_name:"\u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a",destination:"TLV",destination_name:"\u0422\u0435\u043b\u044c-\u0410\u0432\u0438\u0432",departure_date:"12.05.18",departure_time:"6:10",arrival_date:"12.05.18",arrival_time:"15:25",carrier:"TK",stops:0,price:14250},{origin:"VVO",origin_name:"\u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a",destination:"TLV",destination_name:"\u0422\u0435\u043b\u044c-\u0410\u0432\u0438\u0432",departure_date:"12.05.18",departure_time:"16:50",arrival_date:"12.05.18",arrival_time:"23:35",carrier:"SU",stops:1,price:16700},{origin:"VVO",origin_name:"\u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a",destination:"TLV",destination_name:"\u0422\u0435\u043b\u044c-\u0410\u0432\u0438\u0432",departure_date:"12.05.18",departure_time:"6:10",arrival_date:"12.25.18",arrival_time:"16:15",carrier:"S7",stops:0,price:17400}],y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).handleCurrencyChange=function(e){a.setState({currentCurrency:e.target.value})},a.handleStopsChange=function(e){var t=a.state.stops;t[e.target.value]=!t[e.target.value],Object.values(t).every(function(e){return e})?a.setState({stops:t,showAll:!0}):a.setState({stops:t,showAll:!1})},a.selectOnlyOneStop=function(e){var t=a.state.stops;for(var n in t)t[n]=n===e;a.setState({showAll:!1,stops:t})},a.selectAllStops=function(){a.state.showAll?a.setState(function(e){return{showAll:!e.showAll,stops:{0:!1,1:!1,2:!1,3:!1}}}):a.setState(function(e){return{showAll:!e.showAll,stops:{0:!0,1:!0,2:!0,3:!0}}})},a.state={currentCurrency:"RUB",showAll:!0,stops:{0:!0,1:!0,2:!0,3:!0}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.stops,a=e.currentCurrency,n=e.showAll;return r.a.createElement("div",{className:"app"},r.a.createElement(_,{handleCurrencyChange:this.handleCurrencyChange,handleStopsChange:this.handleStopsChange,selectOnlyOneStop:this.selectOnlyOneStop,selectAllStops:this.selectAllStops,stops:t,currentCurrency:a,showAll:n}),r.a.createElement(b,{tickets:O,stops:t,currentCurrency:a,showAll:n}))}}]),t}(n.Component);c.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[12,2,1]]]);
//# sourceMappingURL=main.41cfd2b7.chunk.js.map