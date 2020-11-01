import React from "react";
import Nav from "./Nav";
import Menu from "./Menu";
import ExternalLinks from "./Links";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <Menu />
      <ExternalLinks />
      {children}
    </>
  );
}
