import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { DateTime } from "luxon";
import { initReactI18next } from "react-i18next";

import { LANGUAGES } from "./constants";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: import.meta.env.DEV,
    load: "currentOnly",
    fallbackLng: "de-DE",
    supportedLngs: LANGUAGES,
    saveMissing: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      // Translations are fetched over HTTP. react-i18next re-renders on
      // "languageChanged", but that fires before the new file has arrived —
      // without this the previous language stays on screen until something
      // else happens to re-render the component.
      bindI18nStore: "added",
    },
  });

i18n.services.formatter.add("DATE_HUGE", (value, lng) =>
  DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime.DATE_HUGE),
);

export default i18n;
