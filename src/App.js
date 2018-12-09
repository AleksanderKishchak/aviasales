import React, { Component } from 'react';
import tickets from './data/tickets';
import './App.sass';
import FiltersBar from './Components/FiltersBar';
import TicketsList from './Components/TicketsList';
import logo from './img/app-logo.png';

const ticketsList = tickets.tickets;

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentCurrency: 'RUB',
      showAll: true,
      stops: {
        0: true,
        1: true,
        2: true,
        3: true
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
    let isAllActive;

    newStops[e.target.value] = !newStops[e.target.value];
    isAllActive = Object.values(newStops).every(value => value);

    if(isAllActive) {
      this.setState({
        stops: newStops,
        showAll: true
      });
    } else {
      this.setState({
        stops: newStops,
        showAll: false
      });
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
    });
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
      }));
    } else {
      this.setState(state => ({
        showAll: !state.showAll,
        stops: {
          0: false,
          1: false,
          2: false,
          3: false
        }
      }));
    }
  }

  render() {
    const { 
      stops,
      currentCurrency,
      showAll
    } = this.state;

    return (
      <div>
        <img
          src={logo} 
          alt="app logo, airplane" 
          className="app-logo"
        />
        <div className="app">
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
            tickets={ticketsList}
            stops={stops}
            currentCurrency={currentCurrency}
            showAll={showAll}
          />
        </div>
      </div>
    );
  }
}

export default App;
