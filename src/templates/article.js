import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

const ArticleContainer = styled.div`
  max-width: 70rem;
  padding: 2rem;
  @media (min-width: 800px) {
    margin: 7rem 0 0 30rem;
    padding: 5rem 6rem;
  }
`;

const ArticleEntry = styled.div`
  img,
  .gatsby-highlight {
    border-radius: 4px;
  }

  .gatsby-highlight {
    margin-bottom: 1rem;
  }

  code {
    font-size: 1.25rem;
  }
`;

export default function Template({ data }) {
  const { markdownRemark: article } = data;
  return (
    <>
      <ArticleContainer>
        <h1>{article.frontmatter.title}</h1>
        <ArticleEntry
          dangerouslySetInnerHTML={{ __html: article.html }}
        ></ArticleEntry>
      </ArticleContainer>
    </>
  );
}

export const pageQuery = graphql`
  query ArticleByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
        category
      }
    }
  }
`;
