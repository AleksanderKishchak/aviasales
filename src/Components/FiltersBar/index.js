import React from 'react';
import PropTypes from 'prop-types';
import FilterCheckbox from '../FilterCheckbox';
import FilterRadiobutton from '../FilterRadiobutton';

function FiltersBar({
  handleCurrencyChange,
  handleStopsChange,
  selectOnlyOneStop,
  selectAllStops,
  stops,
  currentCurrency
}) {
  const showAll1 = Object.values(stops).every(value => value);

  return (
    <form className="filters">
      <div className="currency-select">
        <h3 className="filter-title">валюта</h3>
        <div className="currency-list">
          <FilterRadiobutton
            checked={currentCurrency === 'RUB'}
            handleChange={handleCurrencyChange}
            value="RUB"
          />
          <FilterRadiobutton
            checked={currentCurrency === 'USD'}
            handleChange={handleCurrencyChange}
            value="USD"
          />
          <FilterRadiobutton
            checked={currentCurrency === 'EUR'}
            handleChange={handleCurrencyChange}
            value="EUR"
          />
        </div>
      </div>
      <div className="stops-select">
        <h3 className="filter-title">Количество пересадок</h3>
        <FilterCheckbox
          text="Все"
          handleChange={selectAllStops}
          checked={showAll1}
          hasBtn={false}
        />
        <FilterCheckbox
          text="0 пересадок"
          handleChange={handleStopsChange}
          handleBtnClick={selectOnlyOneStop}
          value="0"
          checked={stops[0]}
        />
        <FilterCheckbox
          text="1 пересадка"
          handleChange={handleStopsChange}
          handleBtnClick={selectOnlyOneStop}
          value="1"
          checked={stops[1]}
        />
        <FilterCheckbox
          text="2 пересадки"
          handleChange={handleStopsChange}
          handleBtnClick={selectOnlyOneStop}
          value="2"
          checked={stops[2]}
        />
        <FilterCheckbox
          text="3 пересадки"
          handleChange={handleStopsChange}
          handleBtnClick={selectOnlyOneStop}
          value="3"
          checked={stops[3]}
        />
      </div>
    </form>
  );
}

FiltersBar.propTypes = {
  handleCurrencyChange: PropTypes.func.isRequired,
  handleStopsChange: PropTypes.func.isRequired,
  selectOnlyOneStop: PropTypes.func.isRequired,
  selectAllStops: PropTypes.func.isRequired,
  stops: PropTypes.object.isRequired,
  currentCurrency: PropTypes.string.isRequired
}

export default FiltersBar;
