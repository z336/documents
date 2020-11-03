import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavStyles = styled.div`
  display: flex;
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
    font-size: 2.75rem;
    padding-left: 2rem;
    margin-top: 2rem;
  }
`;

const MobileButton = styled.button`
  @media (min-width: 800px) {
    display: none;
  }
  @media (max-width: 800px) {
    position: absolute;
    top: 2.75rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    &:focus {
      outline: none;
    }
    div {
      width: 2rem;
      height: 0.25rem;
      background: var(--white);
      border-radius: 10px;
      position: relative;
    }
  }
`;

export default function Nav({ open, setOpen }) {
  return (
    <>
      <NavStyles>
        <Link to="/" onClick={() => setOpen(false)}>
          <h1>Documentation</h1>
        </Link>
        <MobileButton open={open} onClick={() => setOpen(!open)}>
          <div></div>
          <div></div>
          <div></div>
        </MobileButton>
      </NavStyles>
    </>
  );
}
