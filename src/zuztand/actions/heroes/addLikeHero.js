const createAddLikeHero = (set, get) => heroId => {
    set(state => ({
        [state.entities[heroId]]: state.entities[heroId].likes++
    }));
};

export default createAddLikeHero;
