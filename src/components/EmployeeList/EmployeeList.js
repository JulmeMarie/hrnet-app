import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EmployeeList.css';
import EmployeeService from '../../Services/EmployeeService';
import { DataTable } from 'datatable-hrnet';

const EmployeeList = () => {
  const [data, setData] = useState(null);
  const service = new EmployeeService();

  useEffect(() => {
    setData(service.getData());
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
