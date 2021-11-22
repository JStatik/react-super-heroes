import { createSelector } from '@reduxjs/toolkit';
import { heroesAdapter } from '../slices/heroesSlice';

const selectHeroName        = (state, heroId) => state.heroes.entities[heroId].name;
const selectHeroOccupation  = (state, heroId) => state.heroes.entities[heroId].work.occupation;
const selectHeroDescription = (state, heroId) => state.heroes.entities[heroId].work.base;

export const {
    selectById: selectHeroById,
    selectIds: selectHeroesIds
} = heroesAdapter.getSelectors(state => state.heroes);

export const selectHeroLikes = (state, heroId) => state.heroes.entities[heroId].likes;
export const selectHeroImage = (state, heroId) => state.heroes.entities[heroId].image;

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
