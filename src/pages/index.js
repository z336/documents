import React from "react";
import { graphql } from "gatsby";
import { ContentContainer, ContentStyles } from "../styles/ContentStyles";

export default function Index({ data }) {
  const { edges: content } = data.allMarkdownRemark;
  return (
    <>
      <ContentContainer>
        <ContentStyles>{content.html}</ContentStyles>
      </ContentContainer>
    </>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "Home" } } }) {
      edges {
        node {
          html
        }
      }
    }
  }
`;
