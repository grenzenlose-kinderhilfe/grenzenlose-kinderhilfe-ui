/**
 * Stripe Payment Links used by the card donation widget, per currency.
 *
 * Create them in the Stripe dashboard (Payment Links → New):
 *   - one link per suggested amount, keyed by that amount;
 *   - `custom`: a "Customers choose what to pay" link, opened by "other amount".
 * Set "After payment" → "Don't show confirmation page" and redirect to
 * https://grenzenlose-kinderhilfe.com/support?donation=success so donors get
 * the thank-you message back on the site.
 *
 * Leave a value empty to hide that button; a currency with no links is not
 * offered, and the widget disappears entirely while nothing is configured.
 */
export const STRIPE_PAYMENT_LINKS = {
  EUR: { 10: "", 25: "", 50: "", 100: "", custom: "" },
  CHF: { 10: "", 25: "", 50: "", 100: "", custom: "" },
  USD: { 10: "", 25: "", 50: "", 100: "", custom: "" },
  HUF: {
    5000: "https://donate.stripe.com/00w7sK2ZX1M48WWew5gjC00",
    10000: "https://donate.stripe.com/28EdR8asp8as0qqds1gjC01",
    25000: "https://donate.stripe.com/5kQ5kC0RPbmE4GG2NngjC02",
    50000: "https://donate.stripe.com/28E6oGbwt76oddcafPgjC03",
    custom: "https://donate.stripe.com/00wcN40RPeyQflkbjTgjC04",
  },
};
