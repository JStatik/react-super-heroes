import create from 'zustand';
import { devtools } from 'zustand/middleware';
import useHeroesStore from './heroesStore';
import { selectHeroesIds } from '../selectors/heroesSelectors';

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

const useAuthStore = create(devtools(set => ({
    ...initialState,
    removeErrorAuth: () => {
        set(state => ({
            ...state,
            errorAuth: null
        }));
    },
    startLogin: user => {
        try {
            set(state => ({
                ...state,
                loadingLogin: true
            }));

            localStorage.setItem('sha', JSON.stringify({
                errorAuth: null,
                loadingLogin: false,
                loadingLogout: false,
                isAuthenticated: true,
                user
            }));

            set(state => ({
                ...state,
                loadingLogin: false,
                isAuthenticated: true,
                user
            }));
        } catch(err) {
            // console.log(err);

            set(state => ({
                ...state,
                errorAuth: 'Por favor, hable con el administrador.',
                loadingLogin: false,
                isAuthenticated: false,
                user: {
                    email: null,
                    name: null
                }
            }));
        }
    },
    startLogout: () => {
        try {
            const heroesIds = selectHeroesIds(useHeroesStore.getState());

            set(state => ({
                ...state,
                loadingLogout: true
            }));

            if(heroesIds.length > 0) {
                useHeroesStore.setState({
                    ids: [],
                    entities: {}
                });
            }

            localStorage.removeItem('sha');

            set(state => ({
                ...state,
                errorAuth: null,
                loadingLogin: false,
                loadingLogout: false,
                isAuthenticated: false,
                user: {
                    email: null,
                    name: null
                }
            }));
        } catch(err) {
            // console.log(err);

            set(state => ({
                ...state,
                errorAuth: 'Por favor, hable con el administrador.',
                loadingLogout: false
            }));
        }
    }
}), { name: 'auth' }));

export default useAuthStore;
