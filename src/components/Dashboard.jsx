import React, { useEffect, useState } from 'react';
import { checkAuth } from '../api/auth'; // API call to check auth status
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../api/auth'; // Import the logout function

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await checkAuth();
      if (response.success) {
        setUser(response.user);
      } else {
        navigate('/login');
      }
    };
    fetchUser();
  }, [navigate]);

  // Logout function
  const handleLogout = async () => {
    const response = await logoutUser(); 
    if (response.success) {
      alert('You have been logged out successfully.');
      navigate('/login'); 
    } else {
      alert('Logout failed. Please try again.');
    }
  };

  return (
    <div className="auth-card">
      <h2>Welcome, {user?.name}</h2>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Dashboard;
