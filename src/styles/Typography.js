import { createGlobalStyle } from "styled-components";

import fontHeader from "../assets/fonts/WorkSans-VariableFont_wght.ttf";
import fontBody from "../assets/fonts/RobotoSlab-VariableFont_wght.ttf";

const Typography = createGlobalStyle`
  @font-face {
    font-family: WorkSans;
    font-weight: 700;
    src: url(${fontHeader});
  }

  @font-face {
    font-family: RobotoSlab;
    src: url(${fontBody});
  }

  html {
    font-family: RobotoSlab, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--blackbird);
  }

  h1 {
    font-family: WorkSans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: normal;
    margin: 0;
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
