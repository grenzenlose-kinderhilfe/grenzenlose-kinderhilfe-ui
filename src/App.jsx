import React from "react";
import { HashRouter } from "react-router-dom";

import AppRoutes, { routes } from "./AppRoutes";
import Layout from "./components/ui/Layout";

const App = () => (
  <HashRouter>
    <Layout routes={routes}>
      <AppRoutes />
    </Layout>
  </HashRouter>
);

export default App;
