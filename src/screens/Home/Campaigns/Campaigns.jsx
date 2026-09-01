import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

import { CAMPAIGNS } from "../../../data/campaigns";
import CampaignCard from "./CampaignCard/CampaignCard";

/**
 * "What are we collecting for right now" — one card per running programme,
 * each answering what is needed, who it helps and how to join in.
 */
const Campaigns = () => {
  const { t } = useTranslation();

  const localization = {
    heading: t("pages.home.campaigns.heading", "Mire gyűjtünk most?"),
    subHeading: t(
      "pages.home.campaigns.subHeading",
      "Ezek a programjaink várnak most támogatásra.",
    ),
    need: t("pages.home.campaigns.needLabel", "Mire van szükség?"),
    who: t("pages.home.campaigns.whoLabel", "Kiknek segítünk?"),
    how: t("pages.home.campaigns.howLabel", "Hogyan csatlakozhatok?"),
  };

  return (
    <Flex flexDirection="column" gap={6} p={{ base: "25px", lg: 0 }}>
      <Flex gap={2} align="center" textAlign="center" flexDirection="column">
        <Heading as="h2" fontSize={{ base: "28px", md: "36px" }}>
          {localization.heading}
        </Heading>
        <Text maxW="700px">{localization.subHeading}</Text>
      </Flex>
      <Grid
        gap={6}
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
      >
        {CAMPAIGNS.map(({ id, icon, url, isExternal }) => (
          <GridItem key={`campaign-${id}`}>
            <CampaignCard
              url={url}
              icon={icon}
              isExternal={isExternal}
              title={t(`pages.home.campaigns.${id}.title`)}
              action={t(`pages.home.campaigns.${id}.action`)}
              details={[
                {
                  label: localization.need,
                  value: t(`pages.home.campaigns.${id}.need`),
                },
                {
                  label: localization.who,
                  value: t(`pages.home.campaigns.${id}.who`),
                },
                {
                  label: localization.how,
                  value: t(`pages.home.campaigns.${id}.how`),
                },
              ]}
            />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default Campaigns;
