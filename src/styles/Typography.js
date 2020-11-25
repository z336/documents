import { createGlobalStyle } from "styled-components";

import fontHeader from "../assets/fonts/Poppins-SemiBold.ttf";
import fontBody from "../assets/fonts/RobotoSlab-VariableFont_wght.ttf";

const Typography = createGlobalStyle`
  @font-face {
    font-family: Poppins;
    src: url(${fontHeader});
  }

  @font-face {
    font-family: RobotoSlab;
    src: url(${fontBody});
  }

  html {
    font-family: RobotoSlab, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--white);
  }

  h1 {
    font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: normal;
    margin: 0;
  }

  h1,h2,h3,h4,h5,h6,ul {
    font-weight: normal;
    margin: 0;
  }

  a {
    color: var(--link);
    text-decoration: none;
    &:hover {
        color: var(--hover);
    }
  }

`;

export default Typography;
