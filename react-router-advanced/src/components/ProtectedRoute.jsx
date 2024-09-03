import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// This is an authenticationmock-up check. 
const isAuthenticated = () => {
  return localStorage.getItem('isLoggedIn') === 'true';
};

function ProtectedRoute({ children }) {
  let location = useLocation();

  if (!isAuthenticated()) {
    // Redirects users to the /login page, but saves the current location they were
    // trying to go to when they were redirected. This allows the app to send them
    // along to that page after they login, which is a Better U/X
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;