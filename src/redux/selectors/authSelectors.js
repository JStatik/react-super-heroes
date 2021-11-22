import { createSelector } from '@reduxjs/toolkit';

const selectUser = state => state.auth.user;

export const selectErrorAuth        = state => state.auth.errorAuth;
export const selectLoadingLogin     = state => state.auth.loadingLogin;
export const selectLoadingLogout    = state => state.auth.loadingLogout;
export const selectIsAuthenticated  = state => state.auth.isAuthenticated;

export const makeSelectUser = () => createSelector(
    selectUser,
    user => user
);
