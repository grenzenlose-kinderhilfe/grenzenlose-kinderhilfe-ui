import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./AppRoutes";
import Layout from "./components/ui/Layout";
import SuspenseBoundary from "./components/ui/SuspenseBoundary";
import routes from "./routes";

const App = () => {
  const displayedRoutes = routes.filter((route) => route?.display ?? true);

  return (
    <BrowserRouter>
      <Layout routes={displayedRoutes}>
        <SuspenseBoundary>
          <AppRoutes routes={routes} />
        </SuspenseBoundary>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
