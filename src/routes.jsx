import React from "react";

import { LOCALE_DE, WORDPRESS_BLOG_BASE_URL } from "./constants";

const Home = React.lazy(() => import("./pages/Home"));
const Donation = React.lazy(() => import("./pages/Donation"));
const Media = React.lazy(() => import("./pages/Media"));
// const Pages = React.lazy(() => import("./pages/Pages"));
const About = React.lazy(() => import("./pages/About"));

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
    localeSuffix: { [LOCALE_DE]: "de/" },
    localizationKey: "blog",
  },
  // {
  //   url: "/pages",
  //   localizationKey: "pages",
  //   element: <Pages />,
  // },
  {
    url: "/about",
    localizationKey: "aboutUs",
    element: <About />,
  },
  {
    isButton: true,
    url: "/donation",
    localizationKey: "donation",
    element: <Donation />,
  },
];

export default routes;
