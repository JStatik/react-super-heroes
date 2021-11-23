import { createSelector } from 'reselect';

const selectHeroName        = (state, heroId) => state.entities[heroId].name;
const selectHeroOccupation  = (state, heroId) => state.entities[heroId].work.occupation;
const selectHeroDescription = (state, heroId) => state.entities[heroId].work.base;

export const selectHeroLikes = (state, heroId) => state.entities[heroId].likes;
export const selectHeroImage = (state, heroId) => state.entities[heroId].image;

export const selectHeroesIds = createSelector(
    state => state.ids,
    heroesIds => heroesIds
);

export const selectAddLikeHero = createSelector(
    state => state.addLikeHero,
    addLikeHero => addLikeHero
);

export const selectSetHeroes = createSelector(
    state => state.setHeroes,
    setHeroes => setHeroes
);

export const selectHeroById = createSelector(
    (state, heroId) => state.entities[heroId],
    hero => hero
);

export const makeSelectHeroItem = () => createSelector(
    selectHeroName,
    selectHeroImage,
    selectHeroOccupation,
    selectHeroDescription,
    (heroName, heroImage, heroOccupation, heroDescription) => ({
        heroName,
        heroImage,
        heroOccupation,
        heroDescription
    })
);
