import useHeroesStore from '../../stores/heroesStore';
import { selectHeroesIds } from '../../selectors/heroesSelectors';

const createStartLogout = (set, get) => () => {
    try {
        set(() => ({ loadingLogout: true }));

        localStorage.removeItem('sha');
        const heroesIds = selectHeroesIds(useHeroesStore.getState());
        
        if(heroesIds.length > 0) {
            useHeroesStore.setState({
                ids: [],
                entities: {}
            });
        }
        
        set(() => ({
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

        set(() => ({
            errorAuth: 'Por favor, hable con el administrador.',
            loadingLogout: false
        }));
    }
};

export default createStartLogout;
