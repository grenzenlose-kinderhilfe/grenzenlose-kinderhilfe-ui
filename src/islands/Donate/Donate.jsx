import React from "react";
import { FaLock } from "react-icons/fa";

import { LANGUAGE_STORAGE_KEY } from "../../constants";
import {
  CURRENCIES,
  CUSTOM_AMOUNT,
  MONTHLY,
  defaultCurrency,
  formatAmount,
  frequenciesOf,
  hasCustomAmount,
  hasPaymentLinks,
  paymentLinkOf,
  presetsOf,
  selectionFor,
} from "../../lib/amount";
import "./Donate.css";

/**
 * Stripe sends every donor back to the one thank-you address of the default
 * language; its language redirect then forwards them to their own language
 * when it is saved, so save the page's language on the way out.
 */
const rememberLanguage = (locale) => {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
  } catch {
    // Storage can be unavailable (private mode); the link still works.
  }
};

const AmountButton = ({ isSelected, className = "", ...props }) => (
  <button
    type="button"
    className={`donate-amount ${className}`}
    aria-pressed={isSelected}
    {...props}
  />
);

/**
 * Card donation through Stripe Payment Links: pick a currency, monthly or
 * one-time and an amount, then continue to Stripe's checkout page in the
 * visitor's language. Stripe then sends them to the thank-you page.
 *
 * `showLabel` hides the "choose an amount" caption where a heading right
 * above the widget already asks for the donation.
 */
const Donate = ({ locale, strings, showLabel = true }) => {
  const [selection, setSelection] = React.useState(() =>
    selectionFor(defaultCurrency(locale), MONTHLY, undefined),
  );

  if (!hasPaymentLinks) return null;

  const { currency, frequency, amount } = selection;
  const frequencies = frequenciesOf(currency);
  const href = paymentLinkOf(selection, locale);
  const suffix = frequency === MONTHLY ? strings.perMonth : "";
  const hasCurrencyChoice = CURRENCIES.length > 1;

  // Amounts are not comparable across currencies, so a new currency starts
  // on its own suggestion; the frequency is kept where it is offered.
  const onCurrencyChange = ({ target: { value } }) =>
    setSelection(selectionFor(value, frequency, undefined));

  const select = (changes) =>
    setSelection(
      selectionFor(
        currency,
        changes.frequency ?? frequency,
        changes.amount ?? amount,
      ),
    );

  return (
    <div className="donate">
      {(showLabel || hasCurrencyChoice) && (
        <div
          className="donate-header"
          style={{ justifyContent: showLabel ? "space-between" : "flex-end" }}
        >
          {showLabel && <p className="eyebrow">{strings.presetLabel}</p>}
          {hasCurrencyChoice && (
            <select
              className="donate-currency"
              value={currency}
              onChange={onCurrencyChange}
              aria-label={strings.currencyLabel}
            >
              {CURRENCIES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          )}
        </div>
      )}
      {frequencies.length > 1 && (
        <div
          className="donate-frequency"
          role="group"
          aria-label={strings.frequencyLabel}
        >
          {frequencies.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={frequency === item}
              onClick={() => select({ frequency: item })}
            >
              {strings[item]}
            </button>
          ))}
        </div>
      )}
      <div className="donate-amounts">
        {presetsOf(currency, frequency).map((preset) => (
          <AmountButton
            key={preset}
            isSelected={amount === String(preset)}
            onClick={() => select({ amount: String(preset) })}
          >
            {formatAmount(preset, currency, locale)}
            {suffix}
          </AmountButton>
        ))}
        {hasCustomAmount(currency, frequency) && (
          <AmountButton
            className="donate-amount-custom"
            isSelected={amount === CUSTOM_AMOUNT}
            onClick={() => select({ amount: CUSTOM_AMOUNT })}
          >
            {strings.customLabel}
          </AmountButton>
        )}
      </div>
      <a
        className="btn btn-lg btn-primary"
        href={href}
        aria-disabled={href ? undefined : "true"}
        onClick={() => rememberLanguage(locale)}
      >
        <FaLock aria-hidden="true" />
        {strings.button}
      </a>
    </div>
  );
};

export default Donate;
