import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Collapsible from "react-collapsible";
import styled from "styled-components";

const MenuContainer = styled.div`
  background: var(--mid);
  color: var(--white);
  margin-top: 7rem;
  height: 100vh;
  width: 30rem;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  @media (max-width: 800px) {
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: 1s;
    width: 75vw;
  }
`;

const MenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  a.is-active {
    color: var(--bright);
  }
  a,
  h2 {
    color: var(--white);
    transition: color 0.2s ease-out 0s;
    &:hover {
      color: var(--bright);
      cursor: pointer;
    }
  }
  li {
    list-style: none;
    padding-bottom: 1rem;
  }
  ul > li:first-child {
    padding-top: 2rem;
  }
  @media (min-width: 800px) {
    padding-top: 5rem;
  }
`;

const Menu = ({ open, setOpen }) => {
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
    <MenuContainer open={open}>
      <MenuItems>
        <li>
          <Collapsible trigger={<h2>First</h2>} transitionTime={50}>
            <ul>
              {first.map(({ node: article }) => {
                return (
                  <li key={article.id}>
                    <Link
                      to={article.frontmatter.path}
                      activeClassName="is-active"
                      onClick={() => setOpen(!open)}
                    >
                      {article.frontmatter.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Collapsible>
        </li>
        <li>
          <Collapsible trigger={<h2>Second</h2>} transitionTime={50}>
            <ul>
              {second.map(({ node: article }) => {
                return (
                  <li key={article.id}>
                    <Link
                      to={article.frontmatter.path}
                      activeClassName="is-active"
                      onClick={() => setOpen(!open)}
                    >
                      {article.frontmatter.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Collapsible>
        </li>
      </MenuItems>
    </MenuContainer>
  );
};

export default Menu;
