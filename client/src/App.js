import React, { useEffect, useState} from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "../src/components/layout";
import { useDispatch } from 'react-redux';

import { getLists } from './actions';

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLists());
  }, [currentId, dispatch]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout />
    </BrowserRouter>
  );
}

export default App;
