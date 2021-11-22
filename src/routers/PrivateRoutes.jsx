import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import useAuthStore from '../zuztand/stores/authStore';
import { selectIsAuthenticated } from '../zuztand/selectors/authSelectors';
import { DashboardRoutes } from './routes/DashboardRoutes';

const PrivateRoutes = () => {
    const { pathname } = useLocation();
    localStorage.setItem('shalp', pathname);

    const isAuthenticated = useAuthStore(selectIsAuthenticated);

    if(!isAuthenticated)
        return <Redirect to="/auth/login" />;
    
    return (
        <DashboardRoutes />
    );
};

export default PrivateRoutes;
