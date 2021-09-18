import React, { useMemo } from "react";

import { Container, Profile } from "./styles";

const MainHeader = () => {
  return (
    <Container>
      <Profile>
        <h3> Olá</h3>
        <span>Vitor Gabriel</span>
      </Profile>
    </Container>
  );
};

export default MainHeader;
