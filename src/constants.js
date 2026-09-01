export const LOCALE_DE = "de-DE";
export const LOCALE_HU = "hu-HU";

export const LANGUAGES = [LOCALE_DE, LOCALE_HU];

// Shown in the language switcher, each in its own language.
export const LANGUAGE_LABELS = {
  [LOCALE_DE]: "Deutsch",
  [LOCALE_HU]: "Magyar",
};

export const GA_MEASUREMENT_ID = "G-NPSNCSC1YX";

export const WORDPRESS_BLOG_BASE_URL =
  "https://blog.grenzenlose-kinderhilfe.com";

export const WORDPRESS_FEATURED_CATEGORIES = {
  [LOCALE_DE]: 38,
  [LOCALE_HU]: 36,
};

export const GOOGLE_SHEET_ID =
  import.meta.env.PUBLIC_GOOGLE_SHEET_ID ||
  "16-vdSO2vluKUWJFGb9jkWKIFgJPe7KG1r2lHGZFXiXM";

export const GOOGLE_SHEET_BASE_URL = "https://docs.google.com/spreadsheets/d";

// Public client id of the foundation's PayPal business account.
export const PAYPAL_CLIENT_ID =
  import.meta.env.PUBLIC_PAYPAL_CLIENT_ID ||
  "Afb49P4EFUTaTmOWzpWHrCvv_VJ-3SYdPn3Xf8FoVXuQghD0_66A3Aj5LowsLNPBi9YC1YKGGAP0UiSE";

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
