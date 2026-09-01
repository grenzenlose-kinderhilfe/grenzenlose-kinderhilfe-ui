/**
 * The numbers shown in the "what we achieved together" block on the home page.
 *
 * Only put a figure here that the foundation can actually back up with its own
 * records — the block exists to build trust, so a number that cannot be
 * defended does more harm than no number at all.
 */

// The first charity event the foundation grew out of (see the about page).
const FOUNDED_YEAR = 2010;

const yearsActive = () => new Date().getFullYear() - FOUNDED_YEAR;

export const IMPACT_METRICS = [
  { localizationKey: "aidDelivered", value: 850, suffix: "+" },
  { localizationKey: "yearsActive", value: yearsActive() },
  { localizationKey: "children", value: 20000, suffix: "+" },
  { localizationKey: "locations", value: 130, suffix: "+" },
  { localizationKey: "countries", value: 9 },
  { localizationKey: "volunteers", value: 600, suffix: "+" },
];
