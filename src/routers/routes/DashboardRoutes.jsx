import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ContentContainer, DashboardContainer } from '../../styles/Dashboard';

const Hero      = React.lazy(() => import('../../pages/Hero'));
const Heroes    = React.lazy(() => import('../../pages/Heroes'));
const Home      = React.lazy(() => import('../../pages/Home'));

const Header = React.lazy(() => import('../../components/Dashboard/Header'));

export const DashboardRoutes = () => {
    return (
        <DashboardContainer className="animate__animated animate__fadeIn">
            <Header />

            <ContentContainer>
                <Switch>
                    <Route
                        exact
                        path="/"
                    >
                        <Home />
                    </Route>

                    <Route
                        exact
                        path="/heroes/:heroesSearch"
                    >
                        <Heroes />
                    </Route>

                    <Route
                        exact
                        path="/hero/:heroesSearch/:heroId"
                    >
                        <Hero />
                    </Route>

                    <Redirect to="/" />
                </Switch>
            </ContentContainer>
        </DashboardContainer>
    );
};
