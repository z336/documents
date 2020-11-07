import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --dark: #000000;
    --mid: #191919;
    --light: #212424;
    --bright: #f7f914;
    --white: #FFFFFF;
    --link: #51FA7B;
    --hover: #ff79c6;

}

html {
    background: var(--light);
    font-size: 10px;
}

body {
    font-size: 1.75rem;
}

`;

export default GlobalStyles;
