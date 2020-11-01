import React from "react";
import { graphql } from "gatsby";
import { ContentContainer, ContentStyles } from "../styles/ContentStyles";

export default function Index({ data }) {
  const { markdownRemark: content } = data;
  return (
    <>
      <ContentContainer>
        <h1>{content.frontmatter.title}</h1>
        <ContentStyles
          dangerouslySetInnerHTML={{ __html: content.html }}
        ></ContentStyles>
      </ContentContainer>
    </>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    markdownRemark(html: {}, frontmatter: { category: { eq: "Home" } }) {
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
