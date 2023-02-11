/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './EmployeeList.css';
import EmployeeService from '../../Services/EmployeeService';
import { DataTable } from 'datatable-hrnet-oc';
import { useSelector } from 'react-redux';

const EmployeeList = () => {
  const [data, setData] = useState(null);
  const employees = useSelector(state => state.employee_state.employees);
  const service = new EmployeeService();

  useEffect(() => {
    setData(service.formatData(employees));
  }, []);

  return (
    <div className="EmployeeList" data-testid="EmployeeList">
      <DataTable inputData={data} />
    </div>
  );
}

EmployeeList.propTypes = {};

EmployeeList.defaultProps = {};

export default EmployeeList;
