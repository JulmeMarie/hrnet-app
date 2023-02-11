import React from 'react';
import PropTypes from 'prop-types';
import './CustomInput.css';

const CustomInput = ({ label, id, type }) => (
  <div className="CustomInput" data-testid="CustomInput">
    <label htmlFor={id}>{label}</label>
    <input type={type} id={id} name={id} />
  </div>
);

CustomInput.propTypes = {};

CustomInput.defaultProps = {};

export default CustomInput;
