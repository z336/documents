import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavStyles = styled.div`
  background: var(--blackbird);
  color: var(--snow);
  height: 7rem;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  a {
    color: var(--snow);
    &:hover {
      text-decoration: none;
    }
  }
  h1 {
    padding-left: 2rem;
    margin-top: 2rem;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <Link to="/">
        <h1>Documentation</h1>
      </Link>
    </NavStyles>
  );
}
