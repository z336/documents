import styled from "styled-components";

export const ContentContainer = styled.div`
  max-width: 70rem;
  padding: 2rem;
  @media (min-width: 800px) {
    margin: 7rem 0 0 30rem;
    padding: 5rem 6rem;
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
    font-size: 1.35rem;
  }
  blockquote {
    border-left: 4px solid #bebebe;
    padding-left: 12px;
  }
`;
