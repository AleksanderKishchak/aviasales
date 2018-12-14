import React from 'react';
import PropTypes from 'prop-types';
import { Ticket } from '../index';

function TicketsList({
  tickets,
  currentCurrency
}) {
  return (
    <div className="tickets-list">
      { tickets.length > 0 ? tickets.map(ticket => (
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
  currentCurrency: PropTypes.string.isRequired
};

export default TicketsList;
