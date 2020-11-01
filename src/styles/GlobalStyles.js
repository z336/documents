import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --dark: #191919;
    --mid: #323232;
    --light: #f2f2f2;
    --bright: #f7f914;
    --white: #FFFFFF;
    --hover: #666666;

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
