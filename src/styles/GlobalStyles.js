import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --dark: #000000;
    --mid: #191919;
    --light: #212424;
    --white: #FFFFFF;
    --link: #056FFA;
    --border: #4b4b4b;

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
