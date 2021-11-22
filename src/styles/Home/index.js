import styled, { css } from 'styled-components';
import device from '../mediaQueries';

const DynamicMainContainer = css`
    ${ device.smallMax('margin-top: 125px;') }
`;

const DynamicFormContainer = css`
    ${ device.largeMin('width: 800px;') }
    ${ device.xlargeMin('width: 1000px;') }
`;

const DynamicTitleForm = css`
    ${ device.smallMax(`
        padding: 0;
        text-align: center;
    `) }
`;

const DynamicSearchContainer = css`
    ${ device.smallMax(`
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "input input" "search clear";

        div:first-child { grid-area: input; }

        div:nth-child(2) { grid-area: search; }

        div:last-child { grid-area: clear; }
    `) }
`;


export const MainContainer = styled.div`
    ${ DynamicMainContainer }

    display: flex;
    justify-content: center;
    margin-top: 250px;
`; MainContainer.displayName = 'MainContainer';


export const FormContainer = styled.div`
    ${ DynamicFormContainer }

    display: flex;
    flex-direction: column;
    max-width: 95%;
    width: 650px;
`; FormContainer.displayName = 'FormContainer';


export const TitleForm = styled.h2`
    ${ DynamicTitleForm }

    margin: 0;
    padding-left: 5px;
`; TitleForm.displayName = 'TitleForm';


export const SearchContainer = styled.div`
    ${ DynamicSearchContainer }

    display: grid;
    grid-template-columns: 5fr 1.5fr 1.5fr;

    .ant-form-item {
        margin: 0;
        padding: 5px;
    }
    
    .ant-form-item-control-input-content {
        text-align: center;
    }
`; SearchContainer.displayName = 'SearchContainer';
