// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Correctly import useAuth

const PrivateRoute = ({ children }) => {
  const { auth } = useAuth();

  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
