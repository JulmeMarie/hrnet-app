import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmployeeForm from './EmployeeForm';

describe('<EmployeeForm />', () => {
  test('it should mount', () => {
    render(<EmployeeForm />);
    
    const employeeForm = screen.getByTestId('EmployeeForm');

    expect(employeeForm).toBeInTheDocument();
  });
});