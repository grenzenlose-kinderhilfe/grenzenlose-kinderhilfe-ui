/**
 * Stripe Payment Links used by the card donation widget, per currency and
 * frequency. Each link points at its own product and price in Stripe.
 *
 * Create them in the Stripe dashboard (Payment Links → New), per currency:
 *   - `monthly`: one link per suggested amount, keyed by that amount, each on
 *     a recurring monthly price in that currency;
 *   - `once`: the same for one-time payments, plus `custom`: a "Customers
 *     choose what to pay" link, opened by "other amount". Stripe offers that
 *     link type for one-time payments only, so `monthly` has no `custom`.
 * Set "After payment" → "Don't show confirmation page" and redirect to
 * https://grenzenlose-kinderhilfe.com/thank-you so donors land on the
 * thank-you page, in their own language.
 *
 * Rename an amount key to change that suggestion. Leave a value empty to hide
 * that button; a frequency or currency with no links is not offered, and the
 * widget disappears entirely while nothing is configured. The widget opens
 * on `monthly` whenever the currency has monthly links.
 */
export const STRIPE_PAYMENT_LINKS = {
  EUR: {
    monthly: { 10: "", 25: "", 50: "", 100: "" },
    once: { 20: "", 50: "", 100: "", 200: "", custom: "" },
  },
  HUF: {
    monthly: { 2500: "", 5000: "", 10000: "", 25000: "" },
    once: { 5000: "", 10000: "", 25000: "", 50000: "", custom: "" },
  },
  CHF: {
    monthly: { 10: "", 25: "", 50: "", 100: "" },
    once: { 20: "", 50: "", 100: "", 200: "", custom: "" },
  },
  USD: {
    monthly: { 10: "", 25: "", 50: "", 100: "" },
    once: { 20: "", 50: "", 100: "", 200: "", custom: "" },
  },
};

/**
 * The Stripe customer portal's login link (Settings → Billing → Customer
 * portal → "Activate link"), where monthly donors update their card or cancel
 * on their own: they enter their email and Stripe sends them a sign-in link.
 * Taken from the build environment, or from .env locally; the links on the
 * thank-you and the support page are hidden while it is unset.
 */
export const STRIPE_CUSTOMER_PORTAL_URL =
  import.meta.env.PUBLIC_STRIPE_CUSTOMER_PORTAL_URL || "";
