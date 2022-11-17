/* eslint-disable import/no-named-as-default-member */
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
    debug: true,
    load: "currentOnly",
    fallbackLng: "de-DE",
    supportedLngs: LANGUAGES,
    saveMissing: true,
    interpolation: {
      escapeValue: false,
    },
  });

i18n.services.formatter.add("DATE_HUGE", (value, lng) =>
  DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime.DATE_HUGE)
);

export default i18n;
