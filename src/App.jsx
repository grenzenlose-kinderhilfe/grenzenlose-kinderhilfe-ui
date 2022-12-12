import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./AppRoutes";
import Layout from "./components/ui/Layout";
import routes from "./routes";

const App = () => (
  <BrowserRouter>
    <Layout routes={routes}>
      <AppRoutes />
    </Layout>
  </BrowserRouter>
);

export default App;
