export const LOCALE_DE = "de-DE";
export const LOCALE_HU = "hu-HU";
export const LOCALE_EN = "en-GB";

export const LANGUAGES = [LOCALE_DE, LOCALE_HU, LOCALE_EN];

// Served without a prefix (/, /support, …). It keeps the URLs the site had
// before every language got its own address.
export const DEFAULT_LOCALE = LOCALE_HU;

// Visitors whose browser language is none of LANGUAGES get this one.
export const FALLBACK_LOCALE = LOCALE_DE;

// URL prefix of each language: /de/support, /en/support. Empty for the default.
export const LOCALE_PREFIXES = {
  [LOCALE_HU]: "",
  [LOCALE_DE]: "de",
  [LOCALE_EN]: "en",
};

// Where the language picked in the switcher is remembered. The key is the one
// i18next used, so returning visitors keep the language they chose before.
export const LANGUAGE_STORAGE_KEY = "i18nextLng";

export const SITE_URL = "https://grenzenlose-kinderhilfe.com";

export const SITE_NAME = "Grenzenlose Kinderhilfe";

// Shown in the language switcher, each in its own language.
export const LANGUAGE_LABELS = {
  [LOCALE_DE]: "Deutsch",
  [LOCALE_HU]: "Magyar",
  [LOCALE_EN]: "English",
};

// Compact form shown on the language switcher button.
export const LANGUAGE_CODES = {
  [LOCALE_DE]: "DE",
  [LOCALE_HU]: "HU",
  [LOCALE_EN]: "EN",
};

export const GA_MEASUREMENT_ID = "G-NPSNCSC1YX";

export const WORDPRESS_BLOG_BASE_URL =
  "https://blog.grenzenlose-kinderhilfe.com";

export const WORDPRESS_FEATURED_CATEGORIES = {
  [LOCALE_DE]: 38,
  [LOCALE_HU]: 36,
  // The blog has no English posts; English visitors get the German ones.
  [LOCALE_EN]: 38,
};

export const GOOGLE_SHEET_ID =
  import.meta.env.PUBLIC_GOOGLE_SHEET_ID ||
  "16-vdSO2vluKUWJFGb9jkWKIFgJPe7KG1r2lHGZFXiXM";

export const GOOGLE_SHEET_BASE_URL = "https://docs.google.com/spreadsheets/d";

export const SHEET_ARTICLES = "articles";
export const SHEET_VIDEOS = "videos";
export const SHEET_LOCATIONS = "locations";

// Country codes we are able to render: they need both a flag and a translated
// country name. Rows referring to any other country are rejected.
export const COUNTRY_CODES = ["AT", "CH", "DE", "HU", "RO", "SK", "UA", "XK"];

// Google MyMaps showing where the donations are delivered.
export const DONATION_MAP_EMBED_URL =
  "https://www.google.com/maps/d/u/0/embed?mid=1etvEUuIIc54Y88TmwCgbF7aihOpgo9U&ehbc=2E312F&noprof=1";

// Video players allowed inside the embed iframe.
export const VIDEO_EMBED_HOSTS = ["youtube.com", "youtu.be", "videa.hu"];
