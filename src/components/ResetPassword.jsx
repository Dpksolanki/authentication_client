import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { resetPassword } from '../api/auth';
import InputField from './InputField';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const { token } = useParams();

  const onSubmit = async (data) => {
    // Check if passwords match
    if (data.password !== data.confirmPassword) {
        alert('Passwords do not match!');
        return; // Stop the submission if passwords do not match
      }
  
    const response = await resetPassword(token, data.password);
    if (response.success) {
      alert('Password reset successful!');
      navigate('/login');
    } else {
      alert(response.message || 'Password reset failed');
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="auth-card">
        <form onSubmit={methods.handleSubmit(onSubmit)} className="auth-form">
          <h2>Reset Password</h2>
          <InputField name="password" label="New Password" type="password" />
          <InputField name="confirmPassword" label="Confirm Password" type="password" />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </FormProvider>
  );
};

export default ResetPassword;
