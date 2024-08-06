import React, { useContext } from 'react';
import {  Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ children }) => {
    const { auth } = useContext(AuthContext);
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/login" />;
    };

export default ProtectedRoute;