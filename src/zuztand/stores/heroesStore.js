import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { normalize, schema } from 'normalizr';

const useHeroesStore = create(devtools(set => ({
    ids: [],
    entities: {},
    setHeroes: heroes => {
        const hero = new schema.Entity('heroes', {}, {
            idAttribute: 'id',
            processStrategy: hero => ({
                ...hero,
                likes: 0,
                image: hero.image.url
            })
        });

        const heroListSchema = new schema.Array(hero);
        const normalizedData = normalize(heroes, heroListSchema);

        set(state => ({
            ...state,
            ids: normalizedData.result,
            entities: normalizedData.entities.heroes
        }));
    },
    addLikeHero: heroId => {
        set(state => ({
            ...state,
            entities: {
                ...state.entities,
                [state.entities[heroId]]: state.entities[heroId].likes++
            }
        }));
    }
}), { name: 'heroes' }));

export default useHeroesStore;
