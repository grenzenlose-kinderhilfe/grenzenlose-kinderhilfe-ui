export const DEFAULT_CURRENCY = "EUR";

export const CURRENCIES = ["EUR", "USD", "CHF", "HUF"];

// PayPal rejects these currencies when the amount carries decimals.
const ZERO_DECIMAL_CURRENCIES = ["HUF", "JPY", "TWD"];

// Both Hungarian and German write decimals with a comma.
const parseAmount = (value) => Number(String(value).trim().replace(",", "."));

export const isValidAmount = (value) => {
  const amount = parseAmount(value);

  return String(value).trim() !== "" && Number.isFinite(amount) && amount > 0;
};

/** The amount in the format the PayPal order API expects for the currency. */
export const formatAmount = (value, currency) => {
  const amount = parseAmount(value);

  return ZERO_DECIMAL_CURRENCIES.includes(currency)
    ? String(Math.round(amount))
    : amount.toFixed(2);
};
