import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavStyles = styled.div`
  background: var(--dark);
  color: var(--white);
  height: 7rem;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  a {
    color: var(--white);
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
