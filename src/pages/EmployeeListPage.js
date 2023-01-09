import React from 'react';
import PropTypes from 'prop-types';
import './EmployeeListPage.css';
import EmployeeList from '../components/EmployeeList/EmployeeList';
import { Link } from 'react-router-dom';

const EmployeeListPage = () => (
    <div className="EmployeeListPage" data-testid="EmployeeListPage">
        <div className='title'><h1>Current Employees</h1></div>
        <EmployeeList />
        <Link to="/">Home</Link>
    </div>
);

EmployeeListPage.propTypes = {};

EmployeeListPage.defaultProps = {};

export default EmployeeListPage;
