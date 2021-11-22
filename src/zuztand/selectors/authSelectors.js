import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectErrorAuth        = state => state.errorAuth;
export const selectLoadingLogin     = state => state.loadingLogin;
export const selectLoadingLogout    = state => state.loadingLogout;
export const selectIsAuthenticated  = state => state.isAuthenticated;

export const selectStartLogin = createSelector(
    state => state.startLogin,
    startLogin => startLogin
);

export const selectStartLogout = createSelector(
    state => state.startLogout,
    startLogout => startLogout
);

export const selectRemoveErrorAuth = createSelector(
    state => state.removeErrorAuth,
    removeErrorAuth => removeErrorAuth
);

export const makeSelectUser = () => createSelector(
    selectUser,
    user => user
);
