import { createAsyncThunk } from '@reduxjs/toolkit';

const START_LOGIN = createAsyncThunk(
    '[AUTH]/START_LOGIN',
    async (data, thunkAPI) => {
        const { fulfillWithValue, rejectWithValue } = thunkAPI;

        try {
            localStorage.setItem('sha', JSON.stringify({
                errorAuth: null,
                loadingLogin: false,
                loadingLogout: false,
                isAuthenticated: true,
                user: data.formValues
            }));

            return fulfillWithValue(data.formValues);
        } catch(err) {
            // console.log(err);
            return rejectWithValue('Por favor, hable con el administrador.');
        }
    },
    {
        condition: data => data.isMounted
    }
);

export default START_LOGIN;
