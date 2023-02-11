import React from 'react';
import './AddressFields.css';
import CustomInput from '../CustomInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';

const AddressFields = ({ states }) => (
  <div className="AddressFields" data-testid="AddressFields">
    <fieldset className="address">
      <legend>Address</legend>
      <CustomInput type="text" id="street" label="Street" />
      <CustomInput type="text" id="city" label="City" />
      <CustomSelect id="state" label="State" options={states} />
      <CustomInput type="number" id="zip-code" label="Zip Code" />
    </fieldset>
  </div>
);

export default AddressFields;
