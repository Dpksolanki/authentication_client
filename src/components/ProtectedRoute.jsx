import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { checkAuth } from '../api/auth'; // Import the checkAuth function

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // State to hold authentication status

  useEffect(() => {
    const verifyAuth = async () => {
      const response = await checkAuth(); // Call the checkAuth function
      setIsAuthenticated(response.success); // Update the authentication status
    };

    verifyAuth();
  }, []);

  // While checking authentication, you can return a loading state or null
  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
