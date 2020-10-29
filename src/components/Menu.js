import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Collapsible from "react-collapsible";
import styled from "styled-components";

const MenuContainer = styled.div`
  background: var(--midnight);
  color: var(--snow);
  margin-top: 7rem;
  @media (min-width: 800px) {
    height: 100vh;
    width: 30rem;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
  }
`;

const MenuItems = styled.div`
  padding: 2rem;
  a.is-active {
    color: var(--lime);
  }
  a,
  h2 {
    color: var(--snow);
    transition: color 0.2s ease-out 0s;
    &:hover {
      color: var(--lime);
      cursor: pointer;
    }
  }
  ul {
    border-left: 1px solid var(--snow);
  }
  li {
    list-style: none;
    padding: 0.5rem 0;
  }
  @media (min-width: 800px) {
    padding-top: 5rem;
  }
`;

const Menu = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date] }) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMMM Do, YYYY")
              path
              description
              category
            }
          }
        }
      }
    }
  `);

  const { edges: articles } = data.allMarkdownRemark;

  const first = articles.filter(
    article => article.node.frontmatter.category === "First"
  );

  const second = articles.filter(
    article => article.node.frontmatter.category === "Second"
  );

  return (
    <MenuContainer>
      <MenuItems>
        <Collapsible trigger={<h2>First</h2>} transitionTime={50}>
          <ul>
            {first.map(({ node: article }) => {
              return (
                <li key={article.id}>
                  <Link
                    to={article.frontmatter.path}
                    activeClassName="is-active"
                  >
                    {article.frontmatter.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Collapsible>
        <Collapsible trigger={<h2>Second</h2>} transitionTime={50}>
          <ul>
            {second.map(({ node: article }) => {
              return (
                <li key={article.id}>
                  <Link
                    to={article.frontmatter.path}
                    activeClassName="is-active"
                  >
                    {article.frontmatter.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Collapsible>
      </MenuItems>
    </MenuContainer>
  );
};

export default Menu;
