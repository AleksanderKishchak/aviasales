import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/ru';
import logo from '../../img/turkish-airlines_logo.png';

function fromRUBtoUSD(price) {
  return (price * 0.015).toFixed(2);
}

function fromRUBtoEUR(price) {
  return (price * 0.013).toFixed(2);
}

function Ticket({
  currentCurrency,
  ticket: {
    origin,
    origin_name,
    destination,
    destination_name,
    departure_date,
    departure_time,
    arrival_date,
    arrival_time,
    stops,
    price
  }
}) {
  let stopsString = '';
  let convertedPrice;

  switch (stops) {
    case 0: break;
    case 1: stopsString = '1 пересадка'; break;
    case 2: stopsString = '2 пересадки'; break;
    case 3: stopsString = '3 пересадки'; break;
    default: stopsString = 'больше трех пересадок'; break;
  }

  switch (currentCurrency) {
    case 'USD': convertedPrice = `${fromRUBtoUSD(price)}$`; break;
    case 'EUR': convertedPrice = `${fromRUBtoEUR(price)}€`; break;
    default: convertedPrice = `${price}P`;
  }

  return (
    <div className="ticket">
      <div className="ticket-buy">
        <img
          src={logo}
          alt="turkish airlines"
          className="ticket-logo"
        />
        <button
          className="buy-btn"
          type="button"
        >
          Купить за {convertedPrice}
        </button>
      </div>
      <div className="ticket-info">
        <div className="ticket-from">
          <div className="ticket-time">{ departure_time }</div>
          <div className="ticket-place">{origin}, {origin_name}</div>
          <div className="ticket-date">
            <Moment
              format="D MMM YYYY, ddd"
              date={departure_date}
              interval={0}
            />
          </div>
        </div>
        <div className="ticket-stops">
          {stopsString}
          <div className="line" />
        </div>
        <div className="ticket-to">
          <div className="ticket-time">{arrival_time}</div>
          <div className="ticket-place">{destination_name}, {destination}</div>
          <div className="ticket-date">
            <Moment
              format="D MMM YYYY, ddd"
              date={arrival_date}
              interval={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Ticket.propTypes = {
  currentCurrency: PropTypes.string.isRequired,
  ticket: PropTypes.object.isRequired
};

export default Ticket;
