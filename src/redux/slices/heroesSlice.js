import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export const heroesAdapter = createEntityAdapter({
    selectId: hero => hero.id,
    sortComparer: (a, b) => a.name.localeCompare(b.name)
});

const initialState = heroesAdapter.getInitialState();

const heroesSlice = createSlice({
    name: '[HEROES]',
    initialState,
    reducers: {
        SET_HEROES: heroesAdapter.upsertMany,
        ADD_LIKE_HERO: (state, action) => {
            state.entities[action.payload].likes++;
        },
        CLEAR_HEROES: heroesAdapter.removeAll
    }
});

export const { ADD_LIKE_HERO, CLEAR_HEROES, SET_HEROES } = heroesSlice.actions;

export default heroesSlice.reducer;
