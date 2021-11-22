import { configureStore } from '@reduxjs/toolkit';
import heroesReducer from './slices/heroesSlice';

const store = configureStore({
    reducer: { heroes: heroesReducer },
    devTools: (process.env.NODE_ENV === 'development')
});

export default store;
