import React from 'react';
import './EmployeeFormPage.css';
import EmployeeForm from '../components/EmployeeForm/EmployeeForm';
import { Link } from 'react-router-dom';

const EmployeeFormPage = () => (
    <div className="EmployeeFormPage" data-testid="EmployeeFormPage">
        <div className='title'>
            <h1>HRnet</h1>
        </div>
        <div className='container'>
            <Link to="employee-list">View Current Employees</Link>
            <EmployeeForm />
        </div>
    </div>
);

EmployeeFormPage.propTypes = {};

EmployeeFormPage.defaultProps = {};

export default EmployeeFormPage;
