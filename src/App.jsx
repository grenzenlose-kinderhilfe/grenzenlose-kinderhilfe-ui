import React from "react";
import { HashRouter } from "react-router-dom";

import Layout from "./components/ui/Layout";
import { generateRoutes, routes } from "./routes";

const App = () => (
  <HashRouter>
    <Layout routes={routes}>{generateRoutes(routes)}</Layout>
  </HashRouter>
);

export default App;
