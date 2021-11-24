const createStartLogin = (set, get) => user => {
    try {
        set(() => ({ loadingLogin: true }));

        localStorage.setItem('sha', JSON.stringify({
            errorAuth: null,
            loadingLogin: false,
            loadingLogout: false,
            isAuthenticated: true,
            user
        }));

        set(() => ({
            loadingLogin: false,
            isAuthenticated: true,
            user
        }));
    } catch(err) {
        // console.log(err);

        set(() => ({
            errorAuth: 'Por favor, hable con el administrador.',
            loadingLogin: false,
            isAuthenticated: false,
            user: {
                email: null,
                name: null
            }
        }));
    }
};

export default createStartLogin;
