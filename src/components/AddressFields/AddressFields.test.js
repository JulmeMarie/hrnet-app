import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddressFields from './AddressFields';

describe('<AddressFields />', () => {
  test('it should mount', () => {
    render(<AddressFields />);
    
    const addressFields = screen.getByTestId('AddressFields');

    expect(addressFields).toBeInTheDocument();
  });
});