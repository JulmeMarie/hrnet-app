import React from 'react';
import PropTypes from 'prop-types';
import './CustomSelect.css';

const CustomSelect = ({ id, label, options }) => (
  <div className="CustomSelect" data-testid="CustomSelect">
    <label htmlFor={id}>{label}</label>
    <select name={id} id={id}>
      {
        options && options.map((opt, index) => {
          return <option key={index} value={opt.abbreviation}>{opt.name}</option>
        })
      }
    </select>
  </div>
);

CustomSelect.propTypes = {};

CustomSelect.defaultProps = {};

export default CustomSelect;
