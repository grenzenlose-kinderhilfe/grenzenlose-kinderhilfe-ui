import React from "react";

import CountryFlag from "../CountryFlag";

/** "2 October 2025" in the page language; the ISO date is read as UTC. */
const formatDate = (date, locale) => {
  const parsed = new Date(`${date}T00:00:00Z`);

  if (Number.isNaN(parsed.getTime())) return date;

  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(parsed);
};

/** Country, source and date of an article or video, as one dotted line. */
const MediaMeta = ({ date, countryCode, source, locale, countries }) => (
  <p className="media-meta">
    {countryCode && (
      <span className="media-meta-item">
        <CountryFlag countryCode={countryCode} size="1.1em" />
        {countries?.[countryCode] ?? countryCode}
      </span>
    )}
    {source && <span className="media-meta-item">{source}</span>}
    {date && (
      <span className="media-meta-item">
        <time dateTime={date}>{formatDate(date, locale)}</time>
      </span>
    )}
  </p>
);

export default MediaMeta;
