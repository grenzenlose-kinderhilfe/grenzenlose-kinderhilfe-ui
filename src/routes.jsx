import React from "react";

const Home = React.lazy(() => import("./pages/Home"));
const Donation = React.lazy(() => import("./pages/Donation"));
const Media = React.lazy(() => import("./pages/Media"));
const Pages = React.lazy(() => import("./pages/Pages"));
const About = React.lazy(() => import("./pages/About"));

const routes = [
  {
    url: "/",
    translationKey: "home",
    element: <Home />,
  },
  {
    url: "/media",
    translationKey: "media",
    element: <Media />,
  },
  {
    url: "/pages",
    translationKey: "pages",
    element: <Pages />,
  },
  {
    url: "/about",
    translationKey: "aboutUs",
    element: <About />,
  },
  {
    isButton: true,
    url: "/donation",
    translationKey: "donation",
    element: <Donation />,
  },
];

export default routes;
