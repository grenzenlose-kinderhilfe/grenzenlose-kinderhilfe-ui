import React from "react";
import { ReactCountryFlag } from "react-country-flag";

const CountryFlag = ({ countryCode, size = "1em" }) => (
  <ReactCountryFlag
    svg
    countryCode={countryCode}
    aria-label={countryCode}
    style={{ width: size, height: size }}
  />
);

export default CountryFlag;
