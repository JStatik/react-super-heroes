import styled, { css, keyframes } from 'styled-components';
import device from '../mediaQueries';

const rotateLogo = keyframes`
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
`;

const DynamicMainContainer = css`
    ${ ({ isComponent, widthContainer }) => {
        return `
            height: ${ isComponent ? '100%' : '100vh' };
            width:  ${ widthContainer ? '100%' : '100vw' };
        `;
    } }
`;

const DynamicLogoContainer = css`
    ${ device.mediumMax('font-size: 20px;') }

    animation: ${ rotateLogo } 2s infinite linear;
`;

const DynamicLogo = css`
    ${ device.mediumMax('width: 100px;') }
`;


export const MainContainer = styled.div`
    ${ DynamicMainContainer }

    align-items: center;
    display: flex;
    justify-content: center;
`; MainContainer.displayName = 'MainContainer';


export const LogoContainer = styled.div`
    ${ DynamicLogoContainer };

    color: #000;
    font-size: 25px;
`; LogoContainer.displayName = 'LogoContainer';


export const Logo = styled.img`
    ${ DynamicLogo };

    width: 120px;
`; Logo.displayName = 'Logo';
