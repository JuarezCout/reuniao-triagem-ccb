import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../pages/Dashboard";
import NovaLista from "../pages/NovaLista";

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/nova-lista" component={NovaLista} />
    </Router>
  );
}
