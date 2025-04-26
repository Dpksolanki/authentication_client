import React, { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { loginUser, checkAuth } from '../api/auth';
import InputField from './InputField';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const methods = useForm();
  const navigate = useNavigate();

  // // Check if the user is already logged in
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
    try {
      const response = await loginUser(data);
      if (response.success) {
        navigate('/');
      } else {
        alert(response.message);
      }
    } catch (error) {
      alert('Login failed. Please try again.');
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="auth-card">
        <form onSubmit={methods.handleSubmit(onSubmit)} className="auth-form">
          <h2>Login</h2>
          <InputField name="email" label="Email" type="email" />
          <InputField name="password" label="Password" type="password" />
          <button type="submit">Login</button>
          <p>
            Don't have an account? <a href="/signup">Create one</a>
          </p>
          <p>
            <a href="/forgot-password">Forgot Password?</a>
          </p>
        </form>
      </div>
    </FormProvider>
  );
};

export default Login;