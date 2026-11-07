import { STRIPE_PAYMENT_LINKS } from "../../data/paymentLinks";

export const CUSTOM_AMOUNT = "custom";

/**
 * The configured links per currency, without the empty placeholders. Only
 * currencies with at least one link are kept.
 */
const LINKS = Object.fromEntries(
  Object.entries(STRIPE_PAYMENT_LINKS)
    .map(([currency, links]) => [
      currency,
      Object.fromEntries(Object.entries(links).filter(([, url]) => url)),
    ])
    .filter(([, links]) => Object.keys(links).length > 0),
);

export const CURRENCIES = Object.keys(LINKS);

export const hasPaymentLinks = CURRENCIES.length > 0;

export const DEFAULT_CURRENCY = CURRENCIES.includes("EUR")
  ? "EUR"
  : CURRENCIES[0];

/** Suggested amounts of the currency, smallest first. */
export const presetsOf = (currency) =>
  Object.keys(LINKS[currency] ?? {})
    .filter((key) => key !== CUSTOM_AMOUNT)
    .map(Number)
    .sort((a, b) => a - b);

export const hasCustomAmount = (currency) =>
  Boolean(LINKS[currency]?.[CUSTOM_AMOUNT]);

/** The selection a currency starts on: its smallest preset, else "custom". */
export const defaultAmount = (currency) => {
  const [first] = presetsOf(currency);

  return first !== undefined ? String(first) : CUSTOM_AMOUNT;
};

/**
 * The Stripe checkout page for the selection, in the visitor's language
 * (Stripe takes the bare language code, e.g. "de").
 */
export const paymentLinkOf = (currency, amount, language) => {
  const url = LINKS[currency]?.[amount];

  if (!url) return undefined;

  const link = new URL(url);
  link.searchParams.set("locale", language.split("-")[0]);

  return link.toString();
};

export const formatCurrency = (value, currency, locale) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
