import React from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./AppRoutes";
import Layout from "../components/layout/Layout";
import SuspenseBoundary from "./SuspenseBoundary";
import routes from "./routes";

const queryClient = new QueryClient();

const App = () => {
  const displayedRoutes = routes.filter((route) => route?.display ?? true);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout routes={displayedRoutes}>
          <SuspenseBoundary>
            <AppRoutes routes={routes} />
          </SuspenseBoundary>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
