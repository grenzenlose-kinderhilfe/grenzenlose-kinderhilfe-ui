import { Grid, GridItem, Heading, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

import DataBoundary from "../../components/DataBoundary/DataBoundary";
import { useLocations } from "../../hooks/useContent";
import withTracker from "../../utils/tracking";
import LocationAccordion from "./LocationAccordion/LocationAccordion";
import LocationGrid from "./LocationGrid/LocationGrid";

const Institutions = () => {
  const { t } = useTranslation();

  const [isLargerThan426] = useMediaQuery("(min-width: 426px)");

  const { data: locations, isPending, isError } = useLocations();

  const localization = {
    supportedTitle: t(
      "pages.donation.supportedTitle",
      "Támogatott gyermekotthonok / intézmények",
    ),
    countries: {
      HU: t("pages.donation.country.hungary", "Magyarország"),
      RO: t("pages.donation.country.romania", "Románia"),
      SK: t("pages.donation.country.slovakia", "Szlovákia"),
      UA: t("pages.donation.country.ukraine", "Ukrajna"),
      DE: t("pages.donation.country.germany", "Németország"),
      AT: t("pages.donation.country.austria", "Ausztria"),
      CH: t("pages.donation.country.switzerland", "Svájc"),
      XK: t("pages.donation.country.kosovo", "Koszovó"),
    },
  };

  const localizedLocations = (locations ?? []).map((item) => ({
    ...item,
    country: localization.countries[item.countryCode],
  }));

  return (
    <Grid
      gap={8}
      color="black"
      align="center"
      margin={{ base: "10px", lg: "25px", xl: "25px 50px 25px" }}
    >
      <GridItem align="center">
        <Heading as="h1">{localization.supportedTitle}</Heading>
      </GridItem>
      <GridItem>
        <DataBoundary
          isLoading={isPending}
          isError={isError}
          isEmpty={!localizedLocations.length}
        >
          {isLargerThan426 ? (
            <LocationGrid locations={localizedLocations} />
          ) : (
            <LocationAccordion locations={localizedLocations} />
          )}
        </DataBoundary>
      </GridItem>
    </Grid>
  );
};

export default withTracker(Institutions);
