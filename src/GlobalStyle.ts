import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        word-break: break-word;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: raleway, sans-serif;
    }
`;
