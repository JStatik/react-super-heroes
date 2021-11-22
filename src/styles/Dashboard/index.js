import styled from 'styled-components';
import { primaryColor } from '../GlobalStyles';

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;

    .ant-page-header { background: ${ primaryColor }; }

    .ant-page-header-heading { align-items: center; }

    .ant-page-header-heading-sub-title { font-size: 20px; }
`; DashboardContainer.displayName = 'DashboardContainer';


export const TitleHeader = styled.img`
    cursor: pointer;
    width: 70px;
`; TitleHeader.displayName = 'TitleHeader';


export const ContentContainer = styled.main`
    flex-grow: 1;
`; ContentContainer.displayName = 'ContentContainer';
