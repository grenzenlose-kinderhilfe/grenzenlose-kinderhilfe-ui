import React from "react";
import { Trans } from "react-i18next";

const Home = React.lazy(() => import("./pages/Home"));
const Donation = React.lazy(() => import("./pages/Donation"));
const Media = React.lazy(() => import("./pages/Media"));
const Pages = React.lazy(() => import("./pages/Pages"));
const About = React.lazy(() => import("./pages/About"));

const routes = [
  {
    url: "/",
    title: <Trans i18nKey="ui.navigation.home">Kezdőoldal</Trans>,
    element: <Home />,
  },
  {
    url: "/media",
    title: <Trans i18nKey="ui.navigation.media">Média</Trans>,
    element: <Media />,
  },
  {
    url: "/pages",
    title: <Trans i18nKey="ui.navigation.pages">Oldalak</Trans>,
    element: <Pages />,
  },
  {
    url: "/about",
    title: <Trans i18nKey="ui.navigation.aboutUs">Rólunk</Trans>,
    element: <About />,
  },
  {
    isButton: true,
    url: "/donation",
    title: <Trans i18nKey="ui.navigation.donation">Adományozás</Trans>,
    element: <Donation />,
  },
];

export default routes;
