import React from 'react';
import PropTypes from 'prop-types';
import './CustomModal.css';

const CustomModal = ({ id, message }) => (
  <div className="CustomModal modal" id={id} data-testid="CustomModal">
    <div className="modal-content">{message}</div>
  </div>
);

CustomModal.propTypes = {};

CustomModal.defaultProps = {};

export default CustomModal;
