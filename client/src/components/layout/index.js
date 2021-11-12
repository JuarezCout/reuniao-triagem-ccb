import React from "react";

//# Components
import Aside from "../Aside";
import Content from "../Content";
import Router from "../../router";
import MainHeader from "../MainHeader";

import { Container } from "./styles";

const Layout = () => {
  return (
    <Container>
      <MainHeader />
      <Aside />
      <Router />
    </Container>
  );
};

export default Layout;
