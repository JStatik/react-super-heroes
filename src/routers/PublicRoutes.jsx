import React from 'react';
import { Redirect } from 'react-router-dom';
import useAuthStore from '../zuztand/stores/authStore';
import { selectIsAuthenticated } from '../zuztand/selectors/authSelectors';
import { AuthRoutes } from './routes/AuthRoutes';

const PublicRoutes = () => {
    const lastPath = localStorage.getItem('shalp') || '/';
    const isAuthenticated = useAuthStore(selectIsAuthenticated);

    if(isAuthenticated)
        return <Redirect to={lastPath} />;

    return (
        <AuthRoutes />
    );
};

export default PublicRoutes;
