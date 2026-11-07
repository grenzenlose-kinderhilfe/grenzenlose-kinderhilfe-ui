import {
  CONSENT_MAX_AGE_DAYS,
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
} from "../constants";

/**
 * The visitor's cookie choice, as made in the cookie banner
 * (src/components/CookieBanner.astro). Google Analytics is only loaded once
 * statistics were accepted: the inline script in src/layouts/BaseLayout.astro
 * reads the same stored choice on every page load and defines
 * `window.loadAnalytics`.
 */

export const CONSENT_MAX_AGE = CONSENT_MAX_AGE_DAYS * 24 * 60 * 60 * 1000;

/** `{ analytics: boolean }`, or null when the visitor still has to choose. */
export const readConsent = () => {
  try {
    const consent = JSON.parse(localStorage.getItem(CONSENT_STORAGE_KEY));

    return consent?.version === CONSENT_VERSION &&
      Date.now() - consent.date < CONSENT_MAX_AGE
      ? consent
      : null;
  } catch {
    return null;
  }
};

export const saveConsent = ({ analytics }) => {
  try {
    localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({ version: CONSENT_VERSION, analytics, date: Date.now() }),
    );
  } catch {
    // Storage blocked: the choice applies to this page only.
  }
};

export const isAnalyticsLoaded = () => typeof window.gtag === "function";

export const startAnalytics = () => window.loadAnalytics?.();

/**
 * Deletes the Google Analytics cookies (_ga, _ga_<id>) after consent is
 * withdrawn. Analytics sets them on the top-level domain, so every parent
 * domain of the current host is tried.
 */
export const removeAnalyticsCookies = () => {
  const names = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0].trim())
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));

  const parts = location.hostname.split(".");
  const domains = [""].concat(
    parts
      .slice(0, -1)
      .map((_, index) => `; domain=.${parts.slice(index).join(".")}`),
  );

  names.forEach((name) =>
    domains.forEach((domain) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
    }),
  );
};
