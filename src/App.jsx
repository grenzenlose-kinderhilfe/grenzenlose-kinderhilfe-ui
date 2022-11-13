import React from "react";
import { useCookies } from "react-cookie";
import { HashRouter } from "react-router-dom";

import AppRoutes, { routes } from "./AppRoutes";
import Layout from "./components/ui/Layout";
import { COOKIE_LANGUAGE_KEY, LANGUAGES } from "./constants";

const App = () => {
  const [cookies, setCookie] = useCookies([COOKIE_LANGUAGE_KEY]);

  React.useMemo(() => {
    if (!cookies[COOKIE_LANGUAGE_KEY]) {
      const isLanguageSupported = Object.values(LANGUAGES).find(
        (languageCode) => navigator.language == languageCode
      );

      const defaultLanguage = isLanguageSupported
        ? navigator.language
        : "de-DE";

      setCookie(COOKIE_LANGUAGE_KEY, defaultLanguage);
    }
  }, [cookies, setCookie]);

  return (
    <HashRouter>
      <Layout routes={routes}>
        <AppRoutes />
      </Layout>
    </HashRouter>
  );
};

export default App;
