import React, { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { signupUser, checkAuth } from '../api/auth';
import InputField from './InputField';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const methods = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAuth = async () => {
      const response = await checkAuth();
      if (response.success) {
        navigate('/');
      }
    };

    verifyAuth();
  }, [navigate]);

  const onSubmit = async (data) => {
    const response = await signupUser(data);
    if (response.success) {
      navigate('/verify-email');
    } else {
      alert(response.message);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="auth-card">
        <form onSubmit={methods.handleSubmit(onSubmit)} className="auth-form">
          <h2>Signup</h2>
          <InputField name="name" label="Name" />
          <InputField name="email" label="Email" type="email" />
          <InputField name="password" label="Password" type="password" />
          <button type="submit">Signup</button>
          <p>
            Already have an account? <a href="/login">Login here</a>
          </p>
        </form>
      </div>
    </FormProvider>
  );
};

export default Signup;
