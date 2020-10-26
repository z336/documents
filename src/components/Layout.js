import React from "react";
import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import Nav from "./Nav";
import Menu from "./Menu";
import ExternalLinks from "./Links";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Nav />
      <Menu />
      <ExternalLinks />
      {children}
    </>
  );
}
