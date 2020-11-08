import styled from "styled-components";

export const ContentContainer = styled.div`
  max-width: 70rem;
  padding: 2rem;
  @media (min-width: 1450px) {
    margin: 7rem auto 0 auto;
    padding: 5rem 6rem;
  }
  @media (min-width: 801px) and (max-width: 1450px) {
    margin: 7rem 0 0 30rem;
    padding: 5rem 6rem;
  }
  @media (max-width: 800px) {
    margin-top: 7rem;
  }
`;

export const ContentStyles = styled.div`
  img,
  .gatsby-highlight {
    border-radius: 4px;
  }

  .gatsby-highlight {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .gatsby-highlight pre {
    padding: 3rem 0;
  }

  code {
    font-size: 1.5rem;
  }

  blockquote {
    border-left: 2px solid #bebebe;
    padding-left: 2rem;
  }

  p,
  ul,
  ol,
  blockquote,
  img,
  code {
    margin: 1.5rem 0;
    line-height: 1.5;
  }
`;
