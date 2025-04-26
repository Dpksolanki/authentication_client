import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { forgotPassword } from '../api/auth';
import InputField from './InputField';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const methods = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const response = await forgotPassword(data.email);
    if (response.success) {
      alert('Password reset link sent! Please check your email.');
      navigate('/login');
    } else {
      alert(response.message);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="auth-card">
        <form onSubmit={methods.handleSubmit(onSubmit)} className="auth-form">
          <h2>Forgot Password</h2>
          <InputField name="email" label="Email" />
          <button type="submit">Send Reset Link</button>
        </form>
      </div>
    </FormProvider>
  );
};

export default ForgotPassword;
