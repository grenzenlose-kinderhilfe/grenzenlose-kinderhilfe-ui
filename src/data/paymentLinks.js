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
    monthly: {
      10: "https://donate.stripe.com/5kQdR8eIF76oehg0FfgjC0g",
      25: "https://donate.stripe.com/6oU28q9oleyQehgbjTgjC0A",
      50: "https://donate.stripe.com/3cI00ieIF76o5KK87HgjC0G",
      100: "https://donate.stripe.com/6oU7sK9ol8as8WWcnXgjC0J",
    },
    once: {
      20: "https://donate.stripe.com/8x24gy7gd8as2yycnXgjC0b",
      50: "https://donate.stripe.com/bJebJ00RPfCU8WW0FfgjC0i",
      100: "https://donate.stripe.com/28E8wOeIF76o5KK2NngjC0o",
      200: "https://donate.stripe.com/28E7sKcAxeyQ1uubjTgjC0p",
      custom: "https://donate.stripe.com/4gM8wOasp1M4flk73DgjC0t",
    },
  },
  HUF: {
    monthly: {
      2500: "https://donate.stripe.com/dRm3cu2ZX0I0gpo5ZzgjC0f",
      5000: "https://donate.stripe.com/28E4gyeIF4Yg5KKfA9gjC0z",
      10000: "https://donate.stripe.com/6oU28qcAx1M43CC3RrgjC0D",
      25000: "https://donate.stripe.com/fZu9ASgQNbmE3CC1JjgjC0H",
    },
    once: {
      5000: "https://donate.stripe.com/5kQ5kC6c9eyQb54cnXgjC0c",
      10000: "https://donate.stripe.com/00w3cuasp1M48WWds1gjC0h",
      25000: "https://donate.stripe.com/cNi00i1VTfCU7SS3RrgjC0l",
      50000: "https://donate.stripe.com/fZu4gyaspcqI2yy3RrgjC0s",
      custom: "https://donate.stripe.com/8x2fZgfMJaiA6OOcnXgjC0w",
    },
  },
  CHF: {
    monthly: {
      10: "https://donate.stripe.com/cNi4gy2ZXeyQ0qqcnXgjC0x",
      25: "https://donate.stripe.com/8x2fZgdEBbmE5KKgEdgjC0B",
      50: "https://donate.stripe.com/28E9ASbwtduMddc73DgjC0F",
      100: "https://donate.stripe.com/4gM14m0RPduM0qq2NngjC0I",
    },
    once: {
      20: "https://donate.stripe.com/eVq6oGasp4Yg8WW3RrgjC0d",
      50: "https://donate.stripe.com/eVqcN4gQN2Q81uu4VvgjC0j",
      100: "https://donate.stripe.com/eVqaEWbwt1M4a101JjgjC0m",
      200: "https://donate.stripe.com/bJe3cu5852Q8gpo3RrgjC0r",
      custom: "https://donate.stripe.com/3cI28q1VT1M41uu1JjgjC0v",
    },
  },
  USD: {
    monthly: {
      10: "https://donate.stripe.com/eVqcN41VT62k1uucnXgjC0y",
      25: "https://donate.stripe.com/28E5kCbwtgGYehg5ZzgjC0C",
      50: "https://donate.stripe.com/dRmbJ0asp1M43CCbjTgjC0E",
      100: "https://donate.stripe.com/7sY00i2ZX0I0b542NngjC0K",
    },
    once: {
      20: "https://donate.stripe.com/8x24gy6c9aiA8WWew5gjC0e",
      50: "https://donate.stripe.com/dRmeVcgQNduM2yy1JjgjC0k",
      100: "https://donate.stripe.com/3cIfZg7gdbmEa100FfgjC0n",
      200: "https://donate.stripe.com/fZu5kCbwt3Ucgpo1JjgjC0q",
      custom: "https://donate.stripe.com/eVqcN4asp9ewgpo4VvgjC0u",
    },
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
