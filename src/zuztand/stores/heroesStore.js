import create from 'zustand';
import { devtools } from 'zustand/middleware';
import createAddLikeHero from '../actions/heroes/addLikeHero';
import createSetHeroes from '../actions/heroes/setHeroes';

const useHeroesStore = create(devtools((set, get) => ({
    ids: [],
    entities: {},
    setHeroes: createSetHeroes(set, get),
    addLikeHero: createAddLikeHero(set, get)
}), { name: 'heroes' }));

export default useHeroesStore;
