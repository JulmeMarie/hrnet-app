import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomInput from './CustomInput';

describe('<CustomInput />', () => {
  test('it should mount', () => {
    render(<CustomInput />);
    
    const customInput = screen.getByTestId('CustomInput');

    expect(customInput).toBeInTheDocument();
  });
});