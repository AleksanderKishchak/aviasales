(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/app-logo.c9f5a62b.png"},function(e,t,a){e.exports=a.p+"static/media/turkish-airlines_logo.52bc738c.png"},function(e,t,a){e.exports=a(35)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),s=(a(18),a(2)),l=a(3),o=a(5),d=a(4),u=a(6),m=(a(20),a(10)),p=a.n(m);a(22);function h(e){var t=e.text,a=e.hasBtn,n=e.handleChange,i=e.handleBtnClick,c=e.value,s=e.checked;return r.a.createElement("label",{className:"stops-item checkbox"},r.a.createElement("input",{className:"stops-input",type:"checkbox",value:c,onChange:n,checked:s}),r.a.createElement("span",{className:"label-text"},t),a?r.a.createElement("button",{type:"button",className:"select-only",onClick:function(){return i(c)}},"\u0422\u043e\u043b\u044c\u043a\u043e"):"")}h.defaultProps={hasBtn:!0,handleBtnClick:function(){return!1},checked:!0};var v=h;var f=function(e){var t=e.checked,a=e.value,n=e.handleChange;return r.a.createElement("label",{className:"currency-item ".concat(t?"active":"")},r.a.createElement("input",{hidden:!0,checked:t,className:"currency-input",value:a,onChange:n,type:"radio"}),a)},_=(a(24),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).setVisibilityDependingOnScreenSize=function(e){window.screen.availWidth<=768?a.setState({isVisible:!1}):a.setState({isVisible:!0})},a.handleVisibilityChange=function(){var e=a.state.isVisible;a.setState({isVisible:!e})},a.state={isVisible:!0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setVisibilityDependingOnScreenSize()}},{key:"render",value:function(){var e=this.props,t=e.handleCurrencyChange,a=e.handleStopsChange,n=e.selectOnlyOneStop,i=e.selectAllStops,c=e.stops,s=e.currentCurrency,l=this.state.isVisible,o=Object.values(c).every(function(e){return e});return r.a.createElement("div",{className:"filters"},r.a.createElement("form",{className:"filters-form".concat(l?" active":"")},r.a.createElement("div",{className:"currency-select"},r.a.createElement("h3",{className:"filter-title"},"\u0432\u0430\u043b\u044e\u0442\u0430"),r.a.createElement("div",{className:"currency-list"},r.a.createElement(f,{checked:"RUB"===s,handleChange:t,value:"RUB"}),r.a.createElement(f,{checked:"USD"===s,handleChange:t,value:"USD"}),r.a.createElement(f,{checked:"EUR"===s,handleChange:t,value:"EUR"}))),r.a.createElement("div",{className:"stops-select"},r.a.createElement("h3",{className:"filter-title"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"),r.a.createElement(v,{text:"\u0412\u0441\u0435",handleChange:i,checked:o,hasBtn:!1}),r.a.createElement(v,{text:"0 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a",handleChange:a,handleBtnClick:n,value:"0",checked:c[0]}),r.a.createElement(v,{text:"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430",handleChange:a,handleBtnClick:n,value:"1",checked:c[1]}),r.a.createElement(v,{text:"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",handleChange:a,handleBtnClick:n,value:"2",checked:c[2]}),r.a.createElement(v,{text:"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",handleChange:a,handleBtnClick:n,value:"3",checked:c[3]}))),r.a.createElement("button",{className:"open-filter",type:"button",onClick:this.handleVisibilityChange},l?"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c":"\u0424\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c"))}}]),t}(n.Component)),k=a(7),g=a.n(k),E=(a(27),a(30),a(11)),C=a.n(E);var b=function(e,t){switch(t){case"USD":return function(e){return"".concat((.015*e).toFixed(2),"$")}(e);case"EUR":return function(e){return"".concat((.013*e).toFixed(2),"\u20ac")}(e);default:return"".concat(e,"P")}};a(31);var y=function(e){var t=e.currentCurrency,a=e.ticket,n=a.origin,i=a.origin_name,c=a.destination,s=a.destination_name,l=a.departure_date,o=a.departure_time,d=a.arrival_date,u=a.arrival_time,m=a.stops,p=a.price,h=function(e){switch(e){case 0:break;case 1:return"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430";case 2:return"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438";case 3:return"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438";default:return"\u0431\u043e\u043b\u044c\u0448\u0435 \u0442\u0440\u0435\u0445 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"}}(m),v=b(p,t);return r.a.createElement("div",{className:"ticket"},r.a.createElement("div",{className:"ticket-buy"},r.a.createElement("img",{src:C.a,alt:"turkish airlines",className:"ticket-logo"}),r.a.createElement("button",{className:"buy-btn",type:"button"},"\u041a\u0443\u043f\u0438\u0442\u044c \u0437\u0430 ",v)),r.a.createElement("div",{className:"ticket-info"},r.a.createElement("div",{className:"ticket-from"},r.a.createElement("div",{className:"ticket-time"},o),r.a.createElement("div",{className:"ticket-place"},n,", ",i),r.a.createElement("div",{className:"ticket-date"},r.a.createElement(g.a,{format:"D MMM YYYY, ddd",date:l,interval:0}))),r.a.createElement("div",{className:"ticket-stops"},h,r.a.createElement("div",{className:"line"})),r.a.createElement("div",{className:"ticket-to"},r.a.createElement("div",{className:"ticket-time"},u),r.a.createElement("div",{className:"ticket-place"},s,", ",c),r.a.createElement("div",{className:"ticket-date"},r.a.createElement(g.a,{format:"D MMM YYYY, ddd",date:d,interval:0})))))};a(33);var V=function(e){var t=e.tickets,a=e.currentCurrency;return r.a.createElement("div",{className:"tickets-list"},t.length>0?t.map(function(e){return r.a.createElement(y,{currentCurrency:a,key:e.id,ticket:e})}):"Tickets not found")},S=[{origin:"VVO",origin_name:"\u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435",destination:"TLV",destination_name:"\u041a\u0438\u0435\u0432",departure_date:"12.09.18",departure_time:"16:20",arrival_date:"12.25.18",arrival_time:"22:10",carrier:"TK",stops:3,price:12400,id:1},{origin:"VVO",origin_name:"Ukraine",destination:"TLV",destination_name:"Poland",departure_date:"12.05.18",departure_time:"17:20",arrival_date:"12.06.18",arrival_time:"23:50",carrier:"S7",stops:1,price:13100,id:2},{origin:"VVO",origin_name:"Unates States of America",destination:"TLV",destination_name:"\u0422\u0435\u043b\u044c-\u0410\u0432\u0438\u0432",departure_date:"12.05.18",departure_time:"12:10",arrival_date:"12.05.18",arrival_time:"18:10",carrier:"SU",stops:0,price:15300,id:3},{origin:"VVO",origin_name:"\u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a",destination:"TLV",destination_name:"\u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435",departure_date:"12.05.18",departure_time:"17:00",arrival_date:"12.05.18",arrival_time:"23:30",carrier:"TK",stops:2,price:11e3,id:4},{origin:"VVO",origin_name:"\u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a",destination:"TLV",destination_name:"\u0422\u0435\u043b\u044c-\u0410\u0432\u0438\u0432",departure_date:"12.05.18",departure_time:"12:10",arrival_date:"12.05.18",arrival_time:"20:15",carrier:"BA",stops:3,price:13400,id:5},{origin:"VVO",origin_name:"\u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a",destination:"TLV",destination_name:"\u0422\u0435\u043b\u044c-\u0410\u0432\u0438\u0432",departure_date:"12.05.18",departure_time:"9:40",arrival_date:"12.05.18",arrival_time:"19:25",carrier:"SU",stops:3,price:12450,id:6},{origin:"VVO",origin_name:"\u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a",destination:"TLV",destination_name:"\u0422\u0435\u043b\u044c-\u0410\u0432\u0438\u0432",departure_date:"12.05.18",departure_time:"17:10",arrival_date:"12.05.18",arrival_time:"23:45",carrier:"TK",stops:1,price:13600,id:7},{origin:"VVO",origin_name:"\u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a",destination:"TLV",destination_name:"\u0422\u0435\u043b\u044c-\u0410\u0432\u0438\u0432",departure_date:"12.05.18",departure_time:"6:10",arrival_date:"12.05.18",arrival_time:"15:25",carrier:"TK",stops:0,price:14250,id:8},{origin:"VVO",origin_name:"\u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a",destination:"TLV",destination_name:"\u0422\u0435\u043b\u044c-\u0410\u0432\u0438\u0432",departure_date:"12.05.18",departure_time:"16:50",arrival_date:"12.05.18",arrival_time:"23:35",carrier:"SU",stops:1,price:16700,id:9},{origin:"VVO",origin_name:"\u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a",destination:"TLV",destination_name:"\u0422\u0435\u043b\u044c-\u0410\u0432\u0438\u0432",departure_date:"12.05.18",departure_time:"6:10",arrival_date:"12.25.18",arrival_time:"16:15",carrier:"S7",stops:0,price:17400,id:10}],N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).handleCurrencyChange=function(e){a.setState({currentCurrency:e.target.value})},a.handleStopsChange=function(e){var t=a.state.stops;t[e.target.value]=!t[e.target.value],Object.values(t).every(function(e){return e})?a.setState({stops:t,showAll:!0},a.filterTickets):a.setState(function(){return{stops:t,showAll:!1}},a.filterTickets)},a.selectOnlyOneStop=function(e){var t=a.state.stops;for(var n in t)t[n]=n===e;a.setState({showAll:!1,stops:t},a.filterTickets)},a.selectAllStops=function(){a.state.showAll?a.setState(function(e){return{showAll:!e.showAll,stops:{0:!1,1:!1,2:!1,3:!1}}},a.filterTickets):a.setState(function(e){return{showAll:!e.showAll,stops:{0:!0,1:!0,2:!0,3:!0}}},a.filterTickets)},a.filterTickets=function(){var e,t=a.state,n=t.showAll,r=t.stops;e=n?S:S.filter(function(e){return r[e.stops]}),a.setState({filteredTickets:e})},a.state={currentCurrency:"RUB",filteredTickets:S,showAll:!0,stops:{0:!0,1:!0,2:!0,3:!0}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.stops,a=e.currentCurrency,n=e.showAll,i=e.filteredTickets;return r.a.createElement("div",{className:"app"},r.a.createElement("img",{src:p.a,alt:"app logo, airplane",className:"app-logo"}),r.a.createElement("div",{className:"app-main"},r.a.createElement(_,{handleCurrencyChange:this.handleCurrencyChange,handleStopsChange:this.handleStopsChange,selectOnlyOneStop:this.selectOnlyOneStop,selectAllStops:this.selectAllStops,stops:t,currentCurrency:a,showAll:n}),r.a.createElement(V,{tickets:i,currentCurrency:a})))}}]),t}(n.Component);c.a.render(r.a.createElement(N,null),document.getElementById("root"))}],[[12,2,1]]]);
//# sourceMappingURL=main.5a0b7098.chunk.js.map