function fromRUBtoUSD(price) {
  return `${(price * 0.015).toFixed(2)}$`;
}

function fromRUBtoEUR(price) {
  return `${(price * 0.013).toFixed(2)}€`;
}

function getConvertedPrice(price, currency) {
  switch (currency) {
    case 'USD': return fromRUBtoUSD(price);
    case 'EUR': return fromRUBtoEUR(price);
    default: return `${price}P`;
  }
}

export default getConvertedPrice;
