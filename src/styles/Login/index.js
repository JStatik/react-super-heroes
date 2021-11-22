import styled, { css } from 'styled-components';
import device from '../mediaQueries';

const DynamicFormContainer = css`
    ${ device.largeMin('width: 450px;') }
    ${ device.xlargeMin('width: 550px;') }
    ${ device.xxlargeMin('width: 650px;') }
`;

const DynamicFormLogo = css`
    ${ device.largeMin('width: 250px;') }
    ${ device.xlargeMin('width: 300px;') }
    ${ device.xxlargeMin('width: 350px;') }
`;


export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
`; MainContainer.displayName = 'MainContainer';


export const FormContainer = styled.div`
    ${ DynamicFormContainer }

    display: flex;
    flex-direction: column;
    margin-top: 130px;
    max-width: 95%;
    width: 350px;

    form { padding: 0 20px; }

    form .ant-form-item { margin-bottom: 8px; }

    form .ant-form-item .ant-form-item-label { padding-bottom: 3px; }

    form .ant-form-item:last-child .ant-form-item-control { margin-top: 4px; }
`; FormContainer.displayName = 'FormContainer';


export const FormLogo = styled.img`
    ${ DynamicFormLogo }

    margin: 0 auto;
    width: 200px;
`; FormLogo.displayName = 'FormLogo';


export const FormTitle = styled.h2`
    margin: 0;
    text-align: center;
`; FormTitle.displayName = 'FormTitle';
