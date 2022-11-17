import { Spinner } from "@chakra-ui/react";
import React from "react";
import { Trans } from "react-i18next";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Donation = React.lazy(() => import("./pages/Donation"));
const Media = React.lazy(() => import("./pages/Media"));
const Pages = React.lazy(() => import("./pages/Pages"));
const About = React.lazy(() => import("./pages/About"));

export const routes = [
  {
    url: "/",
    title: <Trans i18nKey="ui.navigation.home">Home</Trans>,
    element: <Home />,
  },
  {
    url: "/media",
    title: <Trans i18nKey="ui.navigation.media">Media</Trans>,
    element: <Media />,
  },
  {
    url: "/pages",
    title: <Trans i18nKey="ui.navigation.pages">Pages</Trans>,
    element: <Pages />,
  },
  {
    url: "/about",
    title: <Trans i18nKey="ui.navigation.aboutUs">About Us</Trans>,
    element: <About />,
  },
  {
    isButton: true,
    url: "/donation",
    title: <Trans i18nKey="ui.navigation.donation">DONATION</Trans>,
    element: <Donation />,
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
