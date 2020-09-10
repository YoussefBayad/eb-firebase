import React from 'react';
import './index.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className={otherProps.type === 'checkbox' ? 'checkbox' : 'form-row'}>
      {label && <label>{label}</label>}

      <input
        className="product-input"
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;
