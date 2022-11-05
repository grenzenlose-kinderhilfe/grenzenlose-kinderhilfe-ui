import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Events = React.lazy(() => import("./pages/Events"));
const Pages = React.lazy(() => import("./pages/Pages"));
const Contact = React.lazy(() => import("./pages/Contact"));

export const routes = [
  {
    url: "/",
    title: "Home",
    element: <Home />,
  },
  {
    url: "/events",
    title: "Events",
    element: <Events />,
  },
  {
    url: "/pages",
    title: "Pages",
    element: <Pages />,
  },
  {
    url: "/contact",
    title: "Contact",
    element: <Contact />,
  },
];

export const generateRoutes = (config) => (
  <React.Suspense fallback={<div>Loading</div>}>
    <Routes>
      {config.map((item, idx) => (
        <Route key={`route-${idx}`} path={item.url} element={item.element} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </React.Suspense>
);
