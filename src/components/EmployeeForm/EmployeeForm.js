import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './EmployeeForm.css';
import CustomInput from '../CustomInput/CustomInput';
import CustomDateInput from '../CustomDateInput/CustomDateInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import EmployeeService from '../../Services/EmployeeService';
import AddressFields from '../AddressFields/AddressFields';
import CustomModal from '../CustomModal/CustomModal';

const EmployeeForm = () => {
  const service = new EmployeeService();
  const departments = service.getDepartments();
  const states = service.getStates();

  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form sumitted");
  }

  return (
    <div className="EmployeeForm" data-testid="EmployeeForm">
      <h2>Create Employee</h2>
      <form action="#" id="create-employee" onSubmit={handleSubmit}>
        <CustomInput type="text" id="first-name" label="First Name" />
        <CustomInput type="text" id="last-name" label="Last Name" />
        <CustomDateInput id="date-of-birth" label="Date of Birth" />
        <CustomDateInput id="start-date" label="Start Date" />
        <AddressFields states={states} />
        <CustomSelect id="department-button" label="Department" options={departments} />
        <input type="submit" value="save" />
      </form>
      {success && <CustomModal message="Employee Created" />}
    </div>
  );
}

EmployeeForm.propTypes = {};

EmployeeForm.defaultProps = {};

export default EmployeeForm;
