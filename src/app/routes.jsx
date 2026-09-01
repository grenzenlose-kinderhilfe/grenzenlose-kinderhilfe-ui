import React from "react";

import { LOCALE_DE, WORDPRESS_BLOG_BASE_URL } from "../constants";

const Home = React.lazy(() => import("../screens/Home"));
const Institutions = React.lazy(() => import("../screens/Institutions"));
const Media = React.lazy(() => import("../screens/Media"));
const Pages = React.lazy(() => import("../screens/Pages"));
const About = React.lazy(() => import("../screens/About"));
const ShoeBox = React.lazy(() => import("../screens/Shoebox"));
const Support = React.lazy(() => import("../screens/Support"));

const routes = [
  {
    url: "/",
    localizationKey: "home",
    element: <Home />,
  },
  {
    url: "/media",
    localizationKey: "media",
    element: <Media />,
  },
  {
    url: WORDPRESS_BLOG_BASE_URL,
    isExternal: true,
    isLocaleContext: true,
    localeSuffix: { [LOCALE_DE]: "/de" },
    localizationKey: "blog",
  },
  {
    url: "/pages",
    localizationKey: "pages",
    element: <Pages />,
  },
  {
    url: "/pages/shoebox",
    localizationKey: "shoebox",
    element: <ShoeBox />,
  },
  {
    url: "/about",
    localizationKey: "aboutUs",
    element: <About />,
  },
  {
    display: false,
    url: "/pages/institutions",
    localizationKey: "institutions",
    element: <Institutions />,
  },
  {
    isButton: true,
    url: "/support",
    localizationKey: "support",
    element: <Support />,
  },
];

export default routes;
