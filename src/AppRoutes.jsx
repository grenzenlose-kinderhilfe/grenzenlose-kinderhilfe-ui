import { Spinner } from "@chakra-ui/react";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import routes from "./routes";

const AppRoutes = () => (
  <React.Suspense
    fallback={
      <Spinner
        position="relative"
        left="50%"
        top="50%"
        color="primary.blue"
        size="xl"
      />
    }
  >
    <Routes>
      {routes.map((item, idx) => (
        <Route key={`route-${idx}`} path={item.url} element={item.element} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </React.Suspense>
);

export default AppRoutes;
