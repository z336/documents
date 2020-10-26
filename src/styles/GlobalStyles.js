import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    // Primary
    --heavy-lime: #588B00;
    --lime: #70B300;
    --mid-lime: #B0E875;
    --lite-lime: #E2F9CE;
    
    // Secondary
    --heavy-mobu: #146078;
    --mobu: #298BAB;
    --mid-mobu: #70C7E4;
    --lite-mobu: #D8F6FF;

    // Status
    --heavy-fred: #CC3532;
    --infrared: #E54D4A;
    --mid-fred: #EE7977;
    --lite-fred: #FCD4D4;

    --heavy-goldi: #E29E2A;
    --goldikova: #FDB740;
    --mid-goldi: #FFD080;
    --lite-goldi: #FFF2DC;

    --heavy-kelly: #397533;
    --kelly: #3F8F24;
    --mid-kelly: #77D56F;
    --lite-kelly: #E4F7E2;

    // Whimsey
    --heavy-royale: #4E1F91;
    --royale: #7848BE;
    --mid-royale: #A173E4;
    --lite-royale: #EDE1FF;

    --heavy-bloom: #9F0C56;
    --bloom: #DE3589;
    --mid-bloom: #F377B5;
    --lite-bloom: #FFDEEE;

    --heavy-tang: #DE5C28;
    --tang: #F28D3F;
    --mid-tang: #FFB47A;
    --lite-tang: #FFE0D4;

    // Neutrals
    --snow: #FFFFFF;
    --snow40: #FFFFFF66;

    --midnight: #36424A;
    --raccoon: #36424A99;
    --wolf: #36424A33;
    --parrot: #36424A0C;

    --whale: #465864;
    
    --blackbird: #272D30;
}

html {
    background: var(--snow);
    font-size: 10px;
}

body {
    font-size: 1.5rem;
}

`;

export default GlobalStyles;
