import React, { useMemo, useEffect, useState } from "react";

import { Container, Profile } from "./styles";

import versos from '../../assets/texts/versos.json'

const MainHeader = () => {
  const [versoBiblico, setVersoBiblico] = useState({})  

  useEffect(() => {
    window.performance.navigation.type == 1  && setVersoBiblico(versos[Math.floor(Math.random() * versos.length)])

  },[window.performance])

  return (
    <Container>
      <Profile>
        <span><i>{versoBiblico.verso}</i></span><br/>
        <span><small>({versoBiblico.livro})</small></span>
      </Profile>
    </Container>
  );
};

export default MainHeader;
