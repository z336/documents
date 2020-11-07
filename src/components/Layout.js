import React, { useState, useRef } from "react";
import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import Nav from "./Nav";
import Menu from "./Menu";
import useOnClickOutside from "../utils/useOnClickOutside";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <GlobalStyles />
      <Typography />
      <div ref={node}>
        <Nav open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      {children}
    </>
  );
}
