import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmployeeList from './EmployeeList';

describe('<EmployeeList />', () => {
  test('it should mount', () => {
    render(<EmployeeList />);
    
    const employeeList = screen.getByTestId('EmployeeList');

    expect(employeeList).toBeInTheDocument();
  });
});