import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Blog = React.lazy(() => import("./pages/Blog"));
const Donation = React.lazy(() => import("./pages/Donation"));
const Pages = React.lazy(() => import("./pages/Pages"));
const About = React.lazy(() => import("./pages/About"));

export const routes = [
  {
    url: "/",
    title: "Home",
    element: <Home />,
  },
  {
    url: "/blog",
    title: "News",
    element: <Blog />,
  },
  {
    hideNav: true,
    url: "/donation",
    title: "Donation",
    element: <Donation />,
  },
  {
    url: "/pages",
    title: "Pages",
    element: <Pages />,
  },
  {
    url: "/about",
    title: "About Us",
    element: <About />,
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
