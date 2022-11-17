import React from "react";
import { HashRouter } from "react-router-dom";

import AppRoutes from "./AppRoutes";
import Layout from "./components/ui/Layout";
import routes from "./routes";

const App = () => (
  <HashRouter>
    <Layout routes={routes}>
      <AppRoutes />
    </Layout>
  </HashRouter>
);

export default App;
