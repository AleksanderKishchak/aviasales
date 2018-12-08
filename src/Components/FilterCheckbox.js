import React from 'react';
import { PropTypes } from 'prop-types';

function FilterCheckbox({
  text,
  hasBtn,
  handleChange,
  handleBtnClick,
  value,
  ...rest
}) {
  
  return (
    <label className="stops-item">
      <input
        className="stops-input"
        type="checkbox"
        value={value}
        onChange={handleChange}
        {...rest}
      />
      <span className="label-text">
        {text}
      </span>
      {hasBtn ? 
        <button 
          type="button"
          className="select-only"
          onClick={() => handleBtnClick(value)}
        >Только
        </button> : ''
      }
    </label>
  );
}

FilterCheckbox.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBtnClick: PropTypes.func,
  hasBtn: PropTypes.bool
};

FilterCheckbox.defaultProps = {
  hasBtn: true,
  handleBtnClick: () => null
}

export default FilterCheckbox;
