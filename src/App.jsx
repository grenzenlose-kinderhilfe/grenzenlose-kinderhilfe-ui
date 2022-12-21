import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./AppRoutes";
import Layout from "./components/ui/Layout";
import SuspenseBoundary from "./components/ui/SuspenseBoundary";
import routes from "./routes";

const App = () => (
  <BrowserRouter>
    <Layout routes={routes}>
      <SuspenseBoundary>
        <AppRoutes />
      </SuspenseBoundary>
    </Layout>
  </BrowserRouter>
);

export default App;
