import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './slices/authSlice';
import heroesReducer from './slices/heroesSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        heroes: heroesReducer
    },
    devTools: (process.env.NODE_ENV === 'development'),
    middleware: getDefaultMiddleware => {
        if(process.env.NODE_ENV === 'development')
            return getDefaultMiddleware().concat(logger);

        return getDefaultMiddleware();
    }
});

export default store;
