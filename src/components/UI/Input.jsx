import React from 'react';

const Input = ({ label, name, value, type, placeholder, onChange }) => (
  <div className='input-wrap'>
    <label htmlFor={name}>{label}</label><br />
    <input 
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      id={name}
      required
    />
  </div>
);

export default Input;
