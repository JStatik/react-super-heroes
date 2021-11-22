import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectIsAuthenticated } from '../redux/selectors/authSelectors';
import { AuthRoutes } from './routes/AuthRoutes';

const PublicRoutes = () => {
    const lastPath = localStorage.getItem('shalp') || '/';
    const isAuthenticated = useSelector(selectIsAuthenticated);

    if(isAuthenticated)
        return <Redirect to={lastPath} />;

    return (
        <AuthRoutes />
    );
};

export default PublicRoutes;
