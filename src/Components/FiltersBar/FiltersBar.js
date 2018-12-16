import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FiltersBar.sass';
import {
  FilterCheckbox,
  FilterRadiobutton
} from '../index';

class FiltersBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true
    };
  }

  componentDidMount() {
    this.setVisibilityDependingOnScreenSize();
  }

  setVisibilityDependingOnScreenSize = e => {
    const screenSize = window.screen.availWidth;

    if (screenSize <= 768) {
      this.setState({ isVisible: false });
    } else {
      this.setState({ isVisible: true });
    }
  }

  handleVisibilityChange = () => {
    const { isVisible }= this.state;

    this.setState({
      isVisible: !isVisible
    });
  }

  render() {
    const {
      handleCurrencyChange,
      handleStopsChange,
      selectOnlyOneStop,
      selectAllStops,
      stops,
      currentCurrency
    } = this.props;
    const { isVisible } = this.state;
    const showAll = Object.values(stops).every(value => value);

    return (
      <div 
        className="filters"
      >
        <form
          className={`filters-form${isVisible ? ' active' : ''}`}
        >
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
              checked={showAll}
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
        <button
          className="open-filter"
          type="button"
          onClick={this.handleVisibilityChange}
        >
          {isVisible ? 'Свернуть' : 'Фильтровать'}
        </button>
      </div>
    );
  }
}

FiltersBar.propTypes = {
  handleCurrencyChange: PropTypes.func.isRequired,
  handleStopsChange: PropTypes.func.isRequired,
  selectOnlyOneStop: PropTypes.func.isRequired,
  selectAllStops: PropTypes.func.isRequired,
  stops: PropTypes.object.isRequired,
  currentCurrency: PropTypes.string.isRequired
};

export default FiltersBar;
