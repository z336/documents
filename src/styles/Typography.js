import { createGlobalStyle } from "styled-components";

import font from "../assets/fonts/Quicksand-VariableFont_wght.ttf";

const Typography = createGlobalStyle`
  @font-face {
    font-family: Quicksand;
    src: url(${font});
  }

  html {
    font-family: Quicksand, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--blackbird);
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }

  a {
    color: var(--mid-mobu);
    text-decoration: none;
    &:hover {
        color: var(--heavy-mobu);
    }
  }
`;

export default Typography;
