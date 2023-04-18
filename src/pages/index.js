import * as React from "react";
import Home from "./home";

const isBrowser = typeof window !== "undefined";

const IndexPage = () => {
  return <Home />;
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
