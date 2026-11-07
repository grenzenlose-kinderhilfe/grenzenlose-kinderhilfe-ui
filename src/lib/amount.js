import { LOCALE_HU } from "../constants";
import { STRIPE_PAYMENT_LINKS } from "../data/paymentLinks";

export const CUSTOM_AMOUNT = "custom";
export const MONTHLY = "monthly";
export const ONCE = "once";

/** Recurring first, so it is the default wherever it is configured. */
const FREQUENCY_ORDER = [MONTHLY, ONCE];

const withoutEmpty = (links) =>
  Object.fromEntries(Object.entries(links ?? {}).filter(([, url]) => url));

/**
 * The configured links per currency and frequency, without the empty
 * placeholders. Only frequencies, and currencies, with a link are kept.
 */
const LINKS = Object.fromEntries(
  Object.entries(STRIPE_PAYMENT_LINKS)
    .map(([currency, frequencies]) => [
      currency,
      Object.fromEntries(
        FREQUENCY_ORDER.map((frequency) => [
          frequency,
          withoutEmpty(frequencies[frequency]),
        ]).filter(([, links]) => Object.keys(links).length > 0),
      ),
    ])
    .filter(([, frequencies]) => Object.keys(frequencies).length > 0),
);

const linksOf = (currency, frequency) => LINKS[currency]?.[frequency] ?? {};

export const CURRENCIES = Object.keys(LINKS);

export const hasPaymentLinks = CURRENCIES.length > 0;

/** The currency the widget opens on: forints in Hungarian, else euros. */
export const defaultCurrency = (locale) => {
  const preferred = locale === LOCALE_HU ? "HUF" : "EUR";

  return CURRENCIES.includes(preferred) ? preferred : CURRENCIES[0];
};

/** The frequencies the currency offers, recurring first. */
export const frequenciesOf = (currency) => Object.keys(LINKS[currency] ?? {});

/** Suggested amounts, smallest first. */
export const presetsOf = (currency, frequency) =>
  Object.keys(linksOf(currency, frequency))
    .filter((key) => key !== CUSTOM_AMOUNT)
    .map(Number)
    .sort((a, b) => a - b);

export const hasCustomAmount = (currency, frequency) =>
  Boolean(linksOf(currency, frequency)[CUSTOM_AMOUNT]);

/** The selection to start on: the smallest preset, else "custom". */
export const defaultAmount = (currency, frequency) => {
  const [first] = presetsOf(currency, frequency);

  return first !== undefined ? String(first) : CUSTOM_AMOUNT;
};

/**
 * The selection after a change: kept when the new combination offers it too,
 * else the new combination's own default.
 */
export const selectionFor = (currency, frequency, amount) => {
  const frequencies = frequenciesOf(currency);
  const nextFrequency = frequencies.includes(frequency)
    ? frequency
    : frequencies[0];
  const nextAmount = linksOf(currency, nextFrequency)[amount]
    ? amount
    : defaultAmount(currency, nextFrequency);

  return { currency, frequency: nextFrequency, amount: nextAmount };
};

/**
 * The Stripe checkout page for the selection, in the visitor's language
 * (Stripe takes the bare language code, e.g. "de").
 */
export const paymentLinkOf = ({ currency, frequency, amount }, language) => {
  const url = linksOf(currency, frequency)[amount];

  if (!url) return undefined;

  const link = new URL(url);
  link.searchParams.set("locale", language.split("-")[0]);

  return link.toString();
};

export const formatAmount = (value, currency, locale) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
