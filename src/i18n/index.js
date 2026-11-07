import { FALLBACK_LOCALE, LOCALE_PREFIXES } from "../constants";
import de from "./locales/de-DE.json";
import en from "./locales/en-GB.json";
import hu from "./locales/hu-HU.json";

/**
 * Translations are resolved while the site is built, so every page ships as
 * finished HTML in its own language and needs no JavaScript to show text.
 */

const DICTIONARIES = { "hu-HU": hu, "de-DE": de, "en-GB": en };

const lookup = (dictionary, key) =>
  key
    .split(".")
    .reduce(
      (node, part) => (node && typeof node === "object" ? node[part] : null),
      dictionary,
    );

/**
 * `t(key, fallback)` for one language. A key missing from the language falls
 * back to the fallback language, then to the given default, then to the key.
 */
export const getTranslator = (locale) => (key, fallback) => {
  const value =
    lookup(DICTIONARIES[locale], key) ??
    lookup(DICTIONARIES[FALLBACK_LOCALE], key);

  return typeof value === "string" ? value : (fallback ?? key);
};

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const VOID_TAGS = new Set(["br", "hr"]);

/**
 * Turns a react-i18next `<Trans>` string — "<0>Heading</0><1>Text</1>",
 * "line<1></1>line" — into HTML. `tags` maps each index to an element, written
 * as "p" or "h2.some-class". The text itself is always escaped.
 */
export const trans = (value, tags) => {
  const element = (index) => {
    const [tag, ...classes] = (tags[index] ?? "span").split(".");

    return {
      tag,
      open: classes.length ? `${tag} class="${classes.join(" ")}"` : tag,
    };
  };

  return value
    .split(/(<\/?\d+\s*\/?>)/)
    .map((token) => {
      const match = token.match(/^<(\/?)(\d+)\s*(\/?)>$/);

      if (!match) return escapeHtml(token);

      const [, closing, index, selfClosing] = match;
      const { tag, open } = element(index);

      if (VOID_TAGS.has(tag)) return closing ? "" : `<${open}>`;
      if (selfClosing) return `<${open}></${tag}>`;

      return closing ? `</${tag}>` : `<${open}>`;
    })
    .join("");
};

/** "/de/support/" for ("de-DE", "/support"); "/" for the default home. */
export const localizePath = (locale, path = "/") => {
  const prefix = LOCALE_PREFIXES[locale];
  const trimmed = path.replace(/^\/+|\/+$/g, "");
  const segments = [prefix, trimmed].filter(Boolean).join("/");

  return segments ? `/${segments}/` : "/";
};

/** Localizes internal paths ("/support"); other URLs are returned untouched. */
export const localizeUrl = (locale, url) =>
  url.startsWith("/") && !url.startsWith("//")
    ? localizePath(locale, url)
    : url;

/** The bare language code ("de"), as used by `lang`, Stripe and Intl. */
export const languageOf = (locale) => locale.split("-")[0];
