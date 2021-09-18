import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../src/router";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "../src/components/layout";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout />
      <Router />
    </BrowserRouter>
  );
}

export default App;
