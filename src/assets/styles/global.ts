import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --orange: #F69906;
        --blue: #003F63;
        --grey: #313131;
        --grey-light: #9F9F9F;
        --text: #F6F6F6;
        --background: #353D40;
        --background-calculator: #000000;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;  //15px (16px * 0.9375 = 15)
        }
        @media(max-width: 720px) {
            font-size: 87.5%;   //14px
        }
    }

    body {
        width: 100vw;
        height: 100vh;
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        color: var(--text);
    }
`