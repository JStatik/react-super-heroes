import { normalize, schema } from 'normalizr';

const createSetHeroes = (set, get) => heroes => {
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

    set(() => ({
        ids: normalizedData.result,
        entities: normalizedData.entities.heroes
    }));
};

export default createSetHeroes;
