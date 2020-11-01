import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { ContentContainer, ContentStyles } from "../styles/ContentStyles";

export default function Template({ data }) {
  const { markdownRemark: content } = data;
  return (
    <Layout>
      <ContentContainer>
        <h1>{content.frontmatter.title}</h1>
        <ContentStyles
          dangerouslySetInnerHTML={{ __html: content.html }}
        ></ContentStyles>
      </ContentContainer>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ContentByPath($path: String!) {
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
