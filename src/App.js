import React, { Component } from 'react';
import tickets from './data/tickets';
import './App.sass';
import logo from './img/app-logo.png';
import {
  FiltersBar,
  TicketsList
} from './Components/index';

const ticketsList = tickets.tickets;

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentCurrency: 'RUB',
      filteredTickets: [],
      showAll: true,
      stops: {
        0: true,
        1: true,
        2: true,
        3: true
      }
    }
  }

  componentDidMount() {
    this.fetchTickets();
  }

  fetchTickets = () => {
    const sortedTicketsList = ticketsList.sort((a, b) => a.price - b.price);
    console.log(sortedTicketsList);
    this.setState({
      filteredTickets: sortedTicketsList
    });
  }

  handleCurrencyChange = e => {
    this.setState({
      currentCurrency: e.target.value
    });
  }

  handleStopsChange = e => {
    const newStops = this.state.stops;
    let isAllActive;

    newStops[e.target.value] = !newStops[e.target.value];
    isAllActive = Object.values(newStops).every(value => value);

    if(isAllActive) {
      this.setState({
        stops: newStops,
        showAll: true
      }, this.filterTickets);
    } else {
      this.setState(() => ({
        stops: newStops,
        showAll: false
      }), this.filterTickets);
    }
  }

  selectOnlyOneStop = value => {
    const newStops = this.state.stops;

    for (const key in newStops) {
      newStops[key] = key === value ? true : false
    }

    this.setState({
      showAll: false,
      stops: newStops
    }, this.filterTickets);
  }

  selectAllStops = () => {
    if(!this.state.showAll){
      this.setState(state => ({
        showAll: !state.showAll,
        stops: {
          0: true,
          1: true,
          2: true,
          3: true
        }
      }), this.filterTickets);
    } else {
      this.setState(state => ({
        showAll: !state.showAll,
        stops: {
          0: false,
          1: false,
          2: false,
          3: false
        }
      }), this.filterTickets);
    }
    
  }

  filterTickets = () => {
    const {
      showAll,
      stops
    } = this.state;

    let filteredTickets;
    if (!showAll) {
      filteredTickets = ticketsList.filter(ticket => stops[ticket.stops]);
    } else {
      filteredTickets = ticketsList;
    }

    this.setState({
      filteredTickets: filteredTickets
    });
  }

  render() {
    const { 
      stops,
      currentCurrency,
      showAll,
      filteredTickets
    } = this.state;

    return (
      <div className="app">
        <img
          src={logo} 
          alt="app logo, airplane" 
          className="app-logo"
        />
        <div className="app-main">
          <FiltersBar 
            handleCurrencyChange={this.handleCurrencyChange}
            handleStopsChange={this.handleStopsChange}
            selectOnlyOneStop={this.selectOnlyOneStop}
            selectAllStops={this.selectAllStops}
            stops={stops}
            currentCurrency={currentCurrency}
            showAll={showAll}
          />
          <TicketsList 
            tickets={filteredTickets}
            currentCurrency={currentCurrency}
          />
        </div>
      </div>
    );
  }
}

export default App;
