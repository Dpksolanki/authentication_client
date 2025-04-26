import React, { useState } from 'react';
import { verifyEmail } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await verifyEmail(code);
      setMessage(response.message);
      if (response.success) {
        alert('Email verified successfully! Redirecting to login...');
        navigate('/login');
      }
    } catch (error) {
      console.error('Error during verification:', error);
      setMessage('Verification failed. Please try again.');
    }
  };

  return (
    <div className="auth-card">
      <h2>Verify Email</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Verification Code" 
          value={code} 
          onChange={(e) => setCode(e.target.value)} 
        />
        <button type="submit">Verify</button>
      </form>
      {message && <p>{message}</p>}
      <p>
        Didn't receive a code? <a href="/signup">Resend</a>
      </p>
    </div>
  );
};

export default VerifyEmail;
