import React from 'react';
import { PropTypes } from 'prop-types';

function FilterCheckbox({
  text,
  handleChange,
  ...rest
}) {
  
  return (
    <label className="stops-item">
      <input
        className="stops-input"
        type="checkbox"
        onChange={handleChange}
        {...rest}
      />
      <span className="label-text">
        {text}
      </span>
    </label>
  );
}

FilterCheckbox.propTypes = {
  text: PropTypes.string.isRequired
};

export default FilterCheckbox;
