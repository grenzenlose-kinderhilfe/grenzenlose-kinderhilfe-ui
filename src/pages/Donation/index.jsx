import { Grid, GridItem, Heading, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

import LocationAccordion from "./components/LocationAccordion";
import LocationGrid from "./components/LocationGrid";
import locations from "./locations";

const Donation = () => {
  const [isLargerThan426] = useMediaQuery("(min-width: 426px)");
  const { t } = useTranslation();

  const localization = {
    supportedTitle: t(
      "pages.donation.supportedTitle",
      "Támogatott gyermekotthonok / intézmények"
    ),
  };

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
        {isLargerThan426 ? (
          <LocationGrid locations={locations} />
        ) : (
          <LocationAccordion locations={locations} />
        )}
      </GridItem>
    </Grid>
  );
};

export default Donation;
