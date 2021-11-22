import { createAsyncThunk } from '@reduxjs/toolkit';
import { CLEAR_HEROES } from '../../slices/heroesSlice';
import { selectHeroesIds } from '../../selectors/heroesSelectors';

const START_LOGOUT = createAsyncThunk(
    '[AUTH]/START_LOGOUT',
    async (data, thunkAPI) => {
        const { dispatch, getState, rejectWithValue } = thunkAPI;

        try {
            const heroesIds = selectHeroesIds(getState());
            localStorage.removeItem('sha');

            if(heroesIds.length > 0)
                dispatch(CLEAR_HEROES());
        } catch(err) {
            // console.log(err);
            return rejectWithValue('Por favor, hable con el administrador.');
        }
    },
    {
        condition: data => data.isMounted
    }
);

export default START_LOGOUT;
