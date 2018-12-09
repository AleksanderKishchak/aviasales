import React from 'react';
import PropTypes from 'prop-types';
import Ticket from './../Ticket';

function TicketsList({
  tickets,
  stops,
  currentCurrency,
  showAll
}) {
  let filteredTickets;
  if (!showAll) {
    filteredTickets = tickets.filter(ticket => {
      return stops[ticket.stops];
    });
  } else {
    filteredTickets = tickets;
  }

  return (
    <div className="tickets-list">
      { filteredTickets.length > 0 ? filteredTickets.map(ticket => (
        <Ticket
          currentCurrency={currentCurrency}
          key={ticket.id}
          ticket={ticket}
        />
      )) : 'Tickets not found'
      }
    </div>
  );
}

TicketsList.propTypes = {
  tickets: PropTypes.array.isRequired,
  stops: PropTypes.bool.isRequired,
  currentCurrency: PropTypes.string.isRequired,
  showAll: PropTypes.string.isRequired
}

export default TicketsList;
