import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import RouterApp from './routers/RouterApp';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
    return (
        <Fragment>
            <GlobalStyles />

            <Provider store={store}>
                <RouterApp />
            </Provider>
        </Fragment>
    );
};

export default App;
