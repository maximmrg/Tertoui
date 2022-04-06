import { Route, Redirect, Navigate } from 'react-router-dom';
import UserProfile from '../UserProfile';
import React from 'react';

export const PrivateRoute = ({ children }) => {
    const isLoggedIn = UserProfile.getIsActive();
    return isLoggedIn ? children : <Navigate to="/login"/>
};

export default PrivateRoute;
