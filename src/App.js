import React, { Component } from 'react';
import tickets from './data/tickets';
import './App.sass';
import FiltersBar from './Components/FiltersBar';
import TicketsList from './Components/TicketsList';
/*eslint-disable */

const ticketsList = tickets.tickets;

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentCurrency: 'RUB',
      showAll: true,
      stops: {
        0: false,
        1: false,
        2: false,
        3: false
      }
    }
  }

  handleCurrencyChange = e => {
    this.setState({
      currentCurrency: e.target.value
    });
  }

  handleStopsChange = e => {
    const newStops = this.state.stops;
    newStops[e.target.value] = !newStops[e.target.value];

    this.setState({
      stops: newStops
    });
  }

  selectAllStops = () => {
    this.setState(state => ({
      showAll: !state.showAll
    }));
  }

  render() {
    const { 
      stops,
      currentCurrency,
      showAll
    } = this.state;

    return (
      <div className="app">
        <FiltersBar 
          handleCurrencyChange={this.handleCurrencyChange}
          handleStopsChange={this.handleStopsChange}
          selectAllStops={this.selectAllStops}
          stops={stops}
          currentCurrency={currentCurrency}
          showAll={showAll}
        />
        <TicketsList 
          tickets={ticketsList}
          stops={stops}
          currentCurrency={currentCurrency}
          showAll={showAll}
        />
      </div>
    );
  }
}

export default App;
