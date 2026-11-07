import React from "react";
import { FaChevronDown } from "react-icons/fa";

import { getLocations } from "../../lib/content";
import CountryFlag from "../CountryFlag";
import DataBoundary from "../DataBoundary";
import useLiveContent from "../useLiveContent";
import "./Institutions.css";

/** All institutions as flagged tiles; shown from 426px up. */
const LocationGrid = ({ locations }) => (
  <ul className="location-grid">
    {locations.map(({ countryCode, name, place }, idx) => (
      <li key={`location-${idx}`} className="location-tile">
        <CountryFlag countryCode={countryCode} size="2em" />
        <span>
          {name}, {place}
        </span>
      </li>
    ))}
  </ul>
);

/** The institutions grouped by country, one collapsible group per country. */
const LocationAccordion = ({ locations, countries }) => {
  const countryCodes = [...new Set(locations.map((item) => item.countryCode))];

  return (
    <div className="location-accordion">
      {countryCodes.map((countryCode) => (
        <details key={countryCode} className="location-country">
          <summary>
            <span>{countries[countryCode]}</span>
            <FaChevronDown aria-hidden="true" />
          </summary>
          <ul>
            {locations
              .filter((item) => item.countryCode === countryCode)
              .map(({ name, place }, idx) => (
                <li key={`${countryCode}-${idx}`}>
                  {name}, {place}
                </li>
              ))}
          </ul>
        </details>
      ))}
    </div>
  );
};

const Institutions = ({ strings, countries, initialLocations }) => {
  const {
    data: locations,
    isPending,
    isError,
  } = useLiveContent(getLocations, initialLocations);

  return (
    <DataBoundary
      isLoading={isPending}
      isError={isError}
      isEmpty={!locations?.length}
      strings={strings}
    >
      <LocationGrid locations={locations ?? []} />
      <LocationAccordion locations={locations ?? []} countries={countries} />
    </DataBoundary>
  );
};

export default Institutions;
