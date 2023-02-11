import React, { useState } from 'react';
import './CustomDateInput.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDateInput = ({ id, label }) => {
  const [startDate, setStartDate] = useState("");

  return (
    <div className="CustomDateInput" data-testid="CustomDateInput">
      <label htmlFor={id}>{label}</label>
      <DatePicker id={id} name={id} selected={startDate} onChange={(date) => setStartDate(date)} autoComplete="off" />
    </div>
  );
}
export default CustomDateInput;
