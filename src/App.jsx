import React, { Fragment } from 'react';
import RouterApp from './routers/RouterApp';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
    return (
        <Fragment>
            <GlobalStyles />

            <RouterApp />
        </Fragment>
    );
};

export default App;
