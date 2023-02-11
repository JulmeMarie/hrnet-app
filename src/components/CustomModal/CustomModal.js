import React from 'react';
import './CustomModal.css';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/reducer';

const CustomModal = ({ id, message }) => {

  const dispatch = useDispatch();

  const handleClose = (event) => {
    let target = event.target;
    if (!target.className.includes("modal-content")) {
      dispatch(closeModal());
    }
  }

  return (
    <div className="CustomModal modal" id={id} data-testid="CustomModal" onClick={handleClose}>
      <div className="modal-content">
        <div className='close-button'></div>
        {message}
      </div>
    </div>
  );
}
export default CustomModal;
