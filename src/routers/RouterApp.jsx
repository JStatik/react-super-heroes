import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ErrorBoundary from '../pages/ErrorBoundary';
import Loading from '../pages/Loading';

const PrivateRoutes = React.lazy(() => import('./PrivateRoutes'));
const PublicRoutes  = React.lazy(() => import('./PublicRoutes'));

const ErrorAuth = React.lazy(() => import('../components/RouterApp/ErrorAuth'));

const RouterApp = () => {
    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <ErrorBoundary>
                    <ErrorAuth />

                    <Switch>
                        <PublicRoutes path="/auth" />

                        <PrivateRoutes path="/" />
                    </Switch>
                </ErrorBoundary>
            </Suspense>
        </Router>
    );
};

export default RouterApp;
