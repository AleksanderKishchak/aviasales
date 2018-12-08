import React, { Component } from 'react';
import Ticket from './Ticket';
/*eslint-disable */

class TicketsList extends Component {
  render() {
    const { 
      tickets, 
      stops, 
      currentCurrency,
      showAll
    } = this.props;
    let filteredTickets;
    if(!showAll) {
      filteredTickets = tickets.filter(ticket => {
        return stops[ticket.stops];
      });
    } else {
      filteredTickets = tickets;
    }
    
    
    return (
      <div className="tickets-list">
        { filteredTickets.length > 0 ? filteredTickets.map((ticket, i) => (
            <Ticket
              currentCurrency={currentCurrency}
              key={i}
              ticket={ticket}
            />
          )) : 'Tickets not found'
        }
      </div>
    );
  }
}

export default TicketsList;
