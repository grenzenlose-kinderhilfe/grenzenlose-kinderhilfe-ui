import React from "react";
import { FaLink } from "react-icons/fa6";

import CountryFlag from "../CountryFlag";

/** Date, country, source and link of an article or video, as tags. */
const MediaMeta = ({ date, countryCode, source, sourceUrl, linkLabel }) => (
  <div className="tag-row">
    {date && (
      <span className="tag">
        <time dateTime={date}>{date}</time>
      </span>
    )}
    {countryCode && (
      <span className="tag">
        <CountryFlag countryCode={countryCode} />
      </span>
    )}
    {source && <span className="tag">{source}</span>}
    {sourceUrl && (
      <a
        className="tag"
        href={sourceUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={linkLabel}
      >
        <FaLink aria-hidden="true" />
      </a>
    )}
  </div>
);

export default MediaMeta;
