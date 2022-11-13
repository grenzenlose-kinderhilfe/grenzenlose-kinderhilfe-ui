import { Spinner } from "@chakra-ui/react";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Donation = React.lazy(() => import("./pages/Donation"));
const Media = React.lazy(() => import("./pages/Media"));
const Pages = React.lazy(() => import("./pages/Pages"));
const About = React.lazy(() => import("./pages/About"));

export const routes = [
  {
    url: "/",
    title: "Home",
    element: <Home />,
  },
  {
    url: "/media",
    title: "Media",
    element: <Media />,
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
