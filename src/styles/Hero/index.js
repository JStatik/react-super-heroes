import styled, { css } from 'styled-components';
import device from '../mediaQueries';

const DynamicMainContainer = css`
    ${ device.xlargeMin('width: 1050px;') }
    ${ device.xxlargeMin('width: 1300px;') }
`;

const DynamicCardsContainer = css`
    ${ device.mediumMax('grid-template-columns: minmax(365px, 1fr) 1fr;') }
    ${ device.smallMax('grid-template: minmax(282.47px, auto) auto / 100%;') }
    ${ device.xsmallMax('grid-template: minmax(249.08px, auto) auto / 100%;') }
    ${ device.xxsmallMax('grid-template: minmax(212.34px, auto) auto / 100%;') }
`;


export const MainContainer = styled.div`
    ${ DynamicMainContainer }

    display: flex;
    height: 100%;
    margin: 0 auto;
    max-width: 95%;
    padding: 10px 0;
    width: 900px;
`; MainContainer.displayName = 'MainContainer';


export const HeroContainer = styled.div`
    height: 0;
    min-height: 100%;
    min-width: 100%;
    overflow-y: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar { display: none; }
`; HeroContainer.displayName = 'HeroContainer';


export const CardsContainer = styled.div`
    ${ DynamicCardsContainer }

    background: #fff;
    border: solid 1px #ccc;
    border-radius: 2px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    display: grid;
    grid-template-columns: minmax(450px, 1fr) 1fr;
    height: fit-content;

    .ant-image { height: fit-content; }

    .ant-card { height: 100%; }

    .ant-card-head-title { font-size: 20px; }

    .ant-card-meta { margin-bottom: 20px; }

    .ant-card-body .ant-card-meta:last-child { margin-bottom: 0; }

    .ant-card-meta-title { margin-bottom: 0 !important; }

    .ant-card-meta-description { text-align: justify; }
`; CardsContainer.displayName = 'CardsContainer';
