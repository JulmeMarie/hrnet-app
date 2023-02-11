import React from 'react';
import './EmployeeForm.css';
import CustomInput from '../CustomInput/CustomInput';
import CustomDateInput from '../CustomDateInput/CustomDateInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import EmployeeService from '../../Services/EmployeeService';
import AddressFields from '../AddressFields/AddressFields';
import CustomModal from '../CustomModal/CustomModal';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, setEmployee } from '../../redux/reducer';

const EmployeeForm = () => {
  const dispatch = useDispatch();
  const displayModal = useSelector(state => state.employee_state.displayModal);

  const service = new EmployeeService();
  const departments = service.getDepartments();
  const states = service.getStates();

  const handleSubmit = (event) => {

    event.preventDefault();
    let form = document.getElementById("create-employee");
    if (!service.isFormValid(form)) {
      return;
    }
    let employee = service.createEmployee(form);
    dispatch(setEmployee(JSON.stringify(employee)));
    dispatch(openModal());
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
      {displayModal && <CustomModal message="Employee Created" />}
    </div>
  );
}
export default EmployeeForm;
