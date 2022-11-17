import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import routes from "./routes";

const AppRoutes = () => (
  <Routes>
    {routes.map((item, idx) => (
      <Route key={`route-${idx}`} path={item.url} element={item.element} />
    ))}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AppRoutes;
