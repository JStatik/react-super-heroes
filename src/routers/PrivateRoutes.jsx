import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';
import { selectIsAuthenticated } from '../redux/selectors/authSelectors';
import { DashboardRoutes } from './routes/DashboardRoutes';

const PrivateRoutes = () => {
    const { pathname } = useLocation();
    localStorage.setItem('shalp', pathname);
    
    const isAuthenticated = useSelector(selectIsAuthenticated);

    if(!isAuthenticated)
        return <Redirect to="/auth/login" />;
    
    return (
        <DashboardRoutes />
    );
};

export default PrivateRoutes;
