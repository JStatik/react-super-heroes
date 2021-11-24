import create from 'zustand';
import { devtools } from 'zustand/middleware';
import createStartLogin from '../actions/auth/startLogin';
import createStartLogout from '../actions/auth/startLogout';

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

const useAuthStore = create(devtools((set, get) => ({
    ...initialState,
    startLogin: createStartLogin(set, get),
    startLogout: createStartLogout(set, get),
    removeErrorAuth: () => set(() => ({ errorAuth: null }))
}), { name: 'auth' }));

export default useAuthStore;
