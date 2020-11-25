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
  @media (max-width: 1100px) {
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: 0.25s ease-in-out;
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
  @media (min-width: 1100px) {
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

  const css = articles.filter(
    article => article.node.frontmatter.category === "CSS"
  );

  const design = articles.filter(
    article => article.node.frontmatter.category === "Design"
  );

  const javascript = articles.filter(
    article => article.node.frontmatter.category === "JavaScript"
  );

  const tools = articles.filter(
    article => article.node.frontmatter.category === "Tools"
  );

  return (
    <MenuContainer open={open}>
      <MenuItems>
        <li>
          <Collapsible trigger={<h2>CSS</h2>} transitionTime={50}>
            <ul>
              {css.map(({ node: article }) => {
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
          <Collapsible trigger={<h2>Design</h2>} transitionTime={50}>
            <ul>
              {design.map(({ node: article }) => {
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
          <Collapsible trigger={<h2>JavaScript</h2>} transitionTime={50}>
            <ul>
              {javascript.map(({ node: article }) => {
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
          <Collapsible trigger={<h2>Tools</h2>} transitionTime={50}>
            <ul>
              {tools.map(({ node: article }) => {
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
