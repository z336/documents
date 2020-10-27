import React from "react";
import Layout from "./src/components/Layout";
import "gatsby-prismjs-dracula";
import GlobalStyles from "./src/styles/GlobalStyles";
import Typography from "./src/styles/Typography";

export function wrapPageElement({ element, props }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Layout {...props}>{element}</Layout>
    </>
  );
}
