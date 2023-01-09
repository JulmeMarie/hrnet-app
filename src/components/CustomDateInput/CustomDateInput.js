import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CustomDateInput.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDateInput = ({ id, label }) => {
  const [startDate, setStartDate] = useState("");

  return (
    <div className="CustomDateInput" data-testid="CustomDateInput">
      <label htmlFor={id}>{label}</label>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>
  );
}

CustomDateInput.propTypes = {};

CustomDateInput.defaultProps = {};

export default CustomDateInput;
/*
    <div className="CustomDateInput" data-testid="CustomDateInput">
      <label htmlFor={id}>{label}</label>
      <input id={id} type="date" />
    </div>*/