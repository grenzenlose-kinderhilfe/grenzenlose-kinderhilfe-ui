export const DEFAULT_CURRENCY = "EUR";

/**
 * Suggested amounts offered as one-click buttons. They are per currency on
 * purpose: 10 HUF is not a donation, so the same numbers cannot be reused
 * across currencies.
 */
export const CURRENCY_PRESETS = {
  EUR: [10, 25, 50, 100],
  USD: [10, 25, 50, 100],
  CHF: [10, 25, 50, 100],
  HUF: [5000, 10000, 25000, 50000],
};

export const CURRENCIES = Object.keys(CURRENCY_PRESETS);

// PayPal rejects these currencies when the amount carries decimals.
const ZERO_DECIMAL_CURRENCIES = ["HUF", "JPY", "TWD"];

// Both Hungarian and German write decimals with a comma.
export const parseAmount = (value) =>
  Number(String(value).trim().replace(",", "."));

export const isValidAmount = (value) => {
  const amount = parseAmount(value);

  return String(value).trim() !== "" && Number.isFinite(amount) && amount > 0;
};

/** The amount the currency's buttons start on. */
export const defaultAmount = (currency) =>
  String(CURRENCY_PRESETS[currency][0]);

/** True when the typed amount is exactly one of the suggested ones. */
export const isPresetSelected = (value, preset) =>
  parseAmount(value) === preset;

export const formatCurrency = (value, currency, locale) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);

/** The amount in the format the PayPal order API expects for the currency. */
export const formatAmount = (value, currency) => {
  const amount = parseAmount(value);

  return ZERO_DECIMAL_CURRENCIES.includes(currency)
    ? String(Math.round(amount))
    : amount.toFixed(2);
};
