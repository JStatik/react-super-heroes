import { createGlobalStyle } from 'styled-components';

export const primaryColor = '#26a69a';

const GlobalStyles = createGlobalStyle`
    body {
        background: #fafafa;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: scroll;
        scrollbar-width: none;
    }

    body::-webkit-scrollbar { display: none; }

    .error-message .ant-modal-body { padding: 25px; }
    .error-message .ant-modal-confirm-btns { margin-top: 15px; }
`; GlobalStyles.displayName = 'GlobalStyles';

export default GlobalStyles;
