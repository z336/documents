import React from "react";
import styled from "styled-components";

const LinksContainer = styled.div`
  background: var(--wolf);
  @media (max-width: 1600px) {
    display: none;
  }
  @media (min-width: 800px) {
    margin-top: 7rem;
    height: 100vh;
    width: 50rem;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
  }
`;

const LinksItems = styled.div`
  padding: 5rem;
  li {
    list-style: none;
  }
  a {
    transition: color 0.2s ease-out 0s;
  }
`;

const ExternalLinks = () => {
  return (
    <LinksContainer>
      <LinksItems>
        <h2>Links</h2>
        <ul>
          <li>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link One
            </a>
          </li>
          <li>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link Two
            </a>
          </li>
          <li>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link Three
            </a>
          </li>
        </ul>
      </LinksItems>
    </LinksContainer>
  );
};

export default ExternalLinks;
