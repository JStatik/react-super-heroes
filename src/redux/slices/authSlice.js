import { createSlice } from '@reduxjs/toolkit';
import START_LOGIN from '../actions/auth/startLogin';
import START_LOGOUT from '../actions/auth/startLogout';

const defaultAuth = {
    errorAuth: null,
    loadingLogin: false,
    loadingLogout: false,
    isAuthenticated: false,
    user: {
        email: null,
        name: null
    }
};

const initialState = JSON.parse(localStorage.getItem('sha')) || defaultAuth;

const authSlice = createSlice({
    name: '[AUTH]',
    initialState,
    reducers: {
        REMOVE_ERROR_AUTH: state => {
            state.errorAuth = null;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(START_LOGIN.pending, state => {
                state.loadingLogin = true;
            })
            .addCase(START_LOGOUT.pending, state => {
                state.loadingLogout = true;
            })
            .addCase(START_LOGIN.rejected, (state, action) => {
                state.loadingLogin = false;
                state.errorAuth = action.payload || null;
            })
            .addCase(START_LOGOUT.rejected, (state, action) => {
                state.loadingLogout = false;
                state.errorAuth = action.payload || null;
            })
            .addCase(START_LOGIN.fulfilled, (state, action) => {
                state.loadingLogin = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(START_LOGOUT.fulfilled, state => {
                state.errorAuth = null;
                state.loadingLogin = false;
                state.loadingLogout = false;
                state.isAuthenticated = false;
                state.user.email = null;
                state.user.name = null;
            })
            .addDefaultCase(state => state);
    }
});

export const { REMOVE_ERROR_AUTH } = authSlice.actions;

export default authSlice.reducer;
