/**
 * Google Analytics events. Everything here is a no-op while Analytics is not
 * on the page (no PUBLIC_GA_MEASUREMENT_ID), so local builds stay untracked.
 *
 * Most clicks are tracked declaratively by the listener in
 * src/layouts/BaseLayout.astro: `data-track="event_name"` plus
 * `data-track-some-param="value"` attributes become
 * `gtag("event", "event_name", { some_param: "value" })`.
 */

export const track = (name, params = {}) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", name, params);
};

/** `data-track-video-title` → `{ video_title }`, ignoring `data-track` itself. */
export const trackParamsOf = (element) =>
  Object.fromEntries(
    Object.entries(element.dataset)
      .filter(([key]) => key.startsWith("track") && key !== "track")
      .map(([key, value]) => [
        key
          .slice("track".length)
          .replace(/^[A-Z]/, (letter) => letter.toLowerCase())
          .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`),
        value,
      ]),
  );

const PENDING_DONATION_KEY = "pendingDonation";

// A donor who comes back to the thank-you page much later did not just pay.
const PENDING_DONATION_TTL = 2 * 60 * 60 * 1000;

/**
 * The donation as GA4 ecommerce parameters. A custom amount is chosen on
 * Stripe's page, so it has no value here.
 */
export const donationParams = ({ currency, frequency, amount, placement }) => {
  const value = Number(amount);
  const hasValue = Number.isFinite(value);
  const id = `${frequency}-${amount}`;

  return {
    currency,
    ...(hasValue ? { value } : {}),
    donation_frequency: frequency,
    placement,
    items: [
      {
        item_id: id,
        item_name: id,
        item_category: frequency,
        item_variant: currency,
        ...(hasValue ? { price: value } : {}),
        quantity: 1,
      },
    ],
  };
};

/**
 * Remembers the selection on the way to Stripe, so the thank-you page can
 * report what was donated. It lives in the tab's session storage, which the
 * redirect back from Stripe keeps. The id makes the donation one transaction
 * in Analytics.
 */
export const rememberDonation = (donation) => {
  const startedAt = Date.now();

  try {
    sessionStorage.setItem(
      PENDING_DONATION_KEY,
      JSON.stringify({
        ...donation,
        id: `donation-${startedAt}-${Math.random().toString(36).slice(2, 8)}`,
        startedAt,
      }),
    );
  } catch {
    // Storage unavailable (private mode): this donation goes unreported.
  }
};

/**
 * The remembered selection, once: it is removed, so reloading the thank-you
 * page or opening it again does not count the donation twice.
 */
export const takeDonation = () => {
  try {
    const raw = sessionStorage.getItem(PENDING_DONATION_KEY);
    sessionStorage.removeItem(PENDING_DONATION_KEY);

    const donation = raw ? JSON.parse(raw) : null;

    return donation && Date.now() - donation.startedAt < PENDING_DONATION_TTL
      ? donation
      : null;
  } catch {
    return null;
  }
};
