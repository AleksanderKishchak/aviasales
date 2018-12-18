import React from 'react';
import { PropTypes } from 'prop-types';
import './FilterCheckbox.sass';

function FilterCheckbox({
  text,
  hasBtn,
  handleChange,
  handleBtnClick,
  value,
  checked
}) {
  return (
    <label className="stops-item checkbox">
      <input
        className="stops-input"
        type="checkbox"
        value={value}
        onChange={handleChange}
        checked={checked}
      />
      <span className="label-text">
        {text}
      </span>
      {hasBtn
        ? (
          <button
            type="button"
            className="select-only"
            onClick={() => handleBtnClick(value)}
          >
            Только
          </button>
        ) : ''
      }
    </label>
  );
}

FilterCheckbox.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleBtnClick: PropTypes.func,
  hasBtn: PropTypes.bool,
  checked: PropTypes.bool
};

FilterCheckbox.defaultProps = {
  hasBtn: true,
  handleBtnClick: () => false,
  checked: true,
  value: ''
};

export default FilterCheckbox;
