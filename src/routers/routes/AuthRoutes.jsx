import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Login = React.lazy(() => import('../../pages/Login'));

export const AuthRoutes = () => {
    return (
        <Switch>
            <Route
                exact
                path="/auth/login"
            >
                <Login />
            </Route>

            <Redirect to="/auth/login" />
        </Switch>
    );
};
