import React from "react";
import { FiMapPin } from "react-icons/fi";

import CountryFlag from "../CountryFlag";
import DataBoundary from "../DataBoundary";

/** The institutions grouped by country, the country with the most first. */
const groupByCountry = (locations) => {
  const groups = locations.reduce((byCountry, location) => {
    const items = byCountry.get(location.countryCode) ?? [];

    items.push(location);

    return byCountry.set(location.countryCode, items);
  }, new Map());

  return [...groups.entries()]
    .map(([countryCode, items]) => ({ countryCode, items }))
    .sort((a, b) => b.items.length - a.items.length);
};

/** The children's homes and institutions the foundation supports. */
const InstitutionList = ({
  data: locations,
  isPending,
  isError,
  strings,
  countries,
}) => {
  const groups = React.useMemo(
    () => groupByCountry(locations ?? []),
    [locations],
  );

  return (
    <DataBoundary
      isLoading={isPending}
      isError={isError}
      isEmpty={!locations?.length}
      strings={strings}
    >
      <div className="article-years">
        <p className="institution-intro">{strings.institutionsLead}</p>
        {groups.map(({ countryCode, items }) => (
          <section key={countryCode} className="article-year">
            <h2 className="article-year-title institution-country">
              <CountryFlag countryCode={countryCode} size="1.1em" />
              {countries?.[countryCode] ?? countryCode}
              <span className="media-tab-count">{items.length}</span>
            </h2>
            <ul className="article-grid institution-grid">
              {items.map(({ name, place }, idx) => (
                <li
                  key={`${name}-${place}-${idx}`}
                  className="institution-card"
                >
                  <h3>{name}</h3>
                  <p className="media-meta">
                    <span className="media-meta-item">
                      <FiMapPin aria-hidden="true" />
                      {place}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </DataBoundary>
  );
};

export default InstitutionList;
