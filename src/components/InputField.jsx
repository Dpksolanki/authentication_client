// src/components/InputField.jsx
import React from 'react';
import { useFormContext } from 'react-hook-form';

const InputField = ({ name, label, type = 'text' }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} {...register(name, { required: `${label} is required` })} />
      {errors[name] && <p className="error-text">{errors[name]?.message}</p>}
    </div>
  );
};

export default InputField;
