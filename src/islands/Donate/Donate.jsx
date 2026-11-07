import React from "react";
import { FaCheckCircle, FaLock, FaTimes } from "react-icons/fa";

import {
  CURRENCIES,
  CUSTOM_AMOUNT,
  DEFAULT_CURRENCY,
  defaultAmount,
  formatCurrency,
  hasCustomAmount,
  hasPaymentLinks,
  paymentLinkOf,
  presetsOf,
} from "../../lib/amount";
import "./Donate.css";

const TOAST_DURATION = 8000;

/**
 * Stripe sends the donor back with `?donation=success` (set as the Payment
 * Links' redirect URL). Thank them once, then drop the flag so a reload or a
 * shared link does not repeat it.
 */
const useDonationSuccess = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const url = new URL(window.location.href);

    if (url.searchParams.get("donation") !== "success") return;

    setIsVisible(true);

    url.searchParams.delete("donation");
    window.history.replaceState(window.history.state, "", url);

    const timer = window.setTimeout(() => setIsVisible(false), TOAST_DURATION);

    return () => window.clearTimeout(timer);
  }, []);

  return [isVisible, () => setIsVisible(false)];
};

const SuccessToast = ({ title, closeLabel, onClose }) => (
  <div className="donate-toast" role="status" aria-live="polite">
    <FaCheckCircle aria-hidden="true" />
    <p>{title}</p>
    <button type="button" aria-label={closeLabel} onClick={onClose}>
      <FaTimes aria-hidden="true" />
    </button>
  </div>
);

const AmountButton = ({ isSelected, className = "", ...props }) => (
  <button
    type="button"
    className={`donate-amount ${className}`}
    aria-pressed={isSelected}
    {...props}
  />
);

/**
 * Card donation through Stripe Payment Links: pick a currency and an amount,
 * then continue to Stripe's checkout page in the visitor's language.
 *
 * `showLabel` hides the "choose an amount" caption where a heading right
 * above the widget already asks for the donation.
 */
const Donate = ({ locale, strings, showLabel = true }) => {
  const [currency, setCurrency] = React.useState(DEFAULT_CURRENCY);
  const [amount, setAmount] = React.useState(defaultAmount(DEFAULT_CURRENCY));
  const [isSuccessVisible, closeSuccess] = useDonationSuccess();

  if (!hasPaymentLinks) return null;

  const href = paymentLinkOf(currency, amount, locale);
  const hasCurrencyChoice = CURRENCIES.length > 1;

  // The amounts are not comparable across currencies, so start over on the
  // new currency's own suggestion rather than carrying the selection across.
  const onCurrencyChange = ({ target: { value } }) => {
    setCurrency(value);
    setAmount(defaultAmount(value));
  };

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
      <div className="donate-amounts">
        {presetsOf(currency).map((preset) => (
          <AmountButton
            key={preset}
            isSelected={amount === String(preset)}
            onClick={() => setAmount(String(preset))}
          >
            {formatCurrency(preset, currency, locale)}
          </AmountButton>
        ))}
        {hasCustomAmount(currency) && (
          <AmountButton
            className="donate-amount-custom"
            isSelected={amount === CUSTOM_AMOUNT}
            onClick={() => setAmount(CUSTOM_AMOUNT)}
          >
            {strings.customLabel}
          </AmountButton>
        )}
      </div>
      <a
        className="btn btn-lg btn-primary"
        href={href}
        aria-disabled={href ? undefined : "true"}
      >
        <FaLock aria-hidden="true" />
        {strings.button}
      </a>
      {isSuccessVisible && (
        <SuccessToast
          title={strings.successTitle}
          closeLabel={strings.close}
          onClose={closeSuccess}
        />
      )}
    </div>
  );
};

export default Donate;
