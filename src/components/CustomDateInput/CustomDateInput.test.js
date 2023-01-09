import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomDateInput from './CustomDateInput';

describe('<CustomDateInput />', () => {
  test('it should mount', () => {
    render(<CustomDateInput />);
    
    const customDateInput = screen.getByTestId('CustomDateInput');

    expect(customDateInput).toBeInTheDocument();
  });
});