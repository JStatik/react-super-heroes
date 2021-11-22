import styled, { css } from 'styled-components';
import device from '../mediaQueries';

const DynamicMainContainer = css`
    ${ device.xlargeMin('width: 1300px;') }
    ${ device.xxlargeMin('width: 2250px;') }
`;

const DynamicTitleHeroes = css`
    ${ device.smallMax(`
        margin: 0.2em 0;
        text-align: center;
    `) }
`;


export const MainContainer = styled.div`
    ${ DynamicMainContainer }

    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 auto;
    max-width: 95%;
    padding-bottom: 5px;
    width: 900px;
`; MainContainer.displayName = 'MainContainer';


export const TitleHeroes = styled.h1`
    ${ DynamicTitleHeroes }

    margin-top: 0.5em;
    text-align: justify;
`; TitleHeroes.displayName = 'TitleHeroes';


export const HeroesContainer = styled.div`
    flex-grow: 1;
    height: 0;
    overflow-y: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar { display: none; }

    .ant-list-item:hover { background: #ededed; }

    .ant-list-item-meta-description { text-align: justify; }
`; HeroesContainer.displayName = 'HeroesContainer';


export const InfoHero = styled.div`
    text-align: justify;
`; InfoHero.displayName = 'InfoHero';
