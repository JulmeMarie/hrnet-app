import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './CustomSelect.css';

const CustomSelect = ({ id, label, options }) => {
  const [selectedOption, setSelectedOption] = useState("Select...");
  const [isOpen, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (options != null && options.length > 0) {
      setSelectedOption(options[0].label);
    }
  }, []);

  const displayList = () => {
    setOpen(!isOpen);
    if (dropdownRef.current) { dropdownRef.current.focus(); }
  }

  const handleChange = (targetOption) => {
    setSelectedOption(targetOption);
    setOpen(false);
  };

  return (
    <div className="CustomSelect" data-testid="CustomSelect">
      <label htmlFor={id}>{label}</label>
      <div className='dropdown-box'>
        <div className='selected-item' onClick={displayList}>
          {selectedOption} <span className="chevron top"></span>
        </div>
        <input type="hidden" name={id} id={id} value={selectedOption} />
        {isOpen &&
          <div className='dropdown-list' ref={dropdownRef}>
            {
              options.map((opt, index) => {
                return <div key={index} className="dropdown-item" onClick={() => handleChange(opt.label)}>{opt.label}</div>
              })
            }
          </div>
        }
      </div>
    </div>
  );
}

CustomSelect.propTypes = {};

CustomSelect.defaultProps = {};

export default CustomSelect;
