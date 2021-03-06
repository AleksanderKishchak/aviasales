import React from 'react';
import { PropTypes } from 'prop-types';

function FilterRadiobutton({
  checked,
  value,
  handleChange
}) {
  return (
    <label className={`currency-item ${checked ? 'active' : ''}`}>
      <input
        hidden
        checked={checked}
        className="currency-input"
        value={value}
        onChange={handleChange}
        type="radio"
      />
      {value}
    </label>
  );
}

FilterRadiobutton.propTypes = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default FilterRadiobutton;
