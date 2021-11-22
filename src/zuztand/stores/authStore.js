import create from 'zustand';

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

const useAuthStore = create(set => ({
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
            set(state => ({
                ...state,
                loadingLogout: true
            }));

            // TODO: Eliminar listado de heroes al desloguearse
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
}));

export default useAuthStore;
