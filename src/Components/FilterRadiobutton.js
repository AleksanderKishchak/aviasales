import React from 'react';
import { PropTypes } from 'prop-types';

function FilterRadiobutton({
  checked,
  value,
  handleChange,
  ...rest
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
        {...rest}
      />
      {value}
    </label>
  );
}

FilterRadiobutton.propTypes = {
  text: PropTypes.string.isRequired
};

export default FilterRadiobutton;
