import React from "react";
import Layout from "./src/components/Layout";
import "gatsby-prismjs-dracula";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
