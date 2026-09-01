import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaGift,
  FaHandsHelping,
  FaMobileAlt,
  FaUniversity,
} from "react-icons/fa";

import { DONATION_MAP_EMBED_URL } from "../../constants";
import DonationJourney from "../../components/DonationJourney/DonationJourney";
import EmbedMap from "../../components/EmbedMap/EmbedMap";
import { BANK_ACCOUNT, ORGANIZATION, TWINT } from "../../data/organization";
import withTracker from "../../utils/tracking";
import BankDetails from "./BankDetails/BankDetails";
import SupportOption from "./SupportOption/SupportOption";

const actionStyle = {
  as: "a",
  bg: "primary.blue",
  color: "primary.white",
  _hover: { bg: "#1B3F82" },
};

const Support = () => {
  const { t } = useTranslation();

  const option = (id, field) => t(`pages.support.options.${id}.${field}`);

  const localization = {
    heading: t("pages.support.heading", "Támogasd a munkánkat"),
    lead: t(
      "pages.support.lead",
      "Válaszd azt a módot, amelyik neked a legegyszerűbb. Minden felajánlás a Kárpát-medence gyermekeihez jut el.",
    ),
    taxNumber: t("pages.aboutUs.taxNumber", "Adószám"),
    mapHeading: t("pages.support.mapHeading", "Hol segítünk?"),
  };

  return (
    <Grid
      gap={12}
      color="black"
      m={{ base: "25px", lg: "25px 50px", xl: "50px" }}
    >
      <GridItem>
        <Flex gap={3} align="center" textAlign="center" flexDirection="column">
          <Heading as="h1" fontSize={{ base: "32px", md: "44px" }}>
            {localization.heading}
          </Heading>
          <Text maxW="800px" fontSize={{ base: "16px", md: "18px" }}>
            {localization.lead}
          </Text>
          <Text fontSize="14px" color="primary.blue">
            {ORGANIZATION.name} · {localization.taxNumber}:{" "}
            {ORGANIZATION.taxNumber}
          </Text>
        </Flex>
      </GridItem>
      <GridItem>
        <Grid
          gap={6}
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            "2xl": "repeat(4, 1fr)",
          }}
        >
          <SupportOption
            icon={FaUniversity}
            title={option("transfer", "title")}
            description={option("transfer", "description")}
            spending={option("transfer", "spending")}
          >
            <BankDetails
              details={[
                ["Bank", BANK_ACCOUNT.bank],
                ["SWIFT", BANK_ACCOUNT.swift],
                ["IBAN", BANK_ACCOUNT.iban],
              ]}
            />
          </SupportOption>
          <SupportOption
            icon={FaMobileAlt}
            title={option("twint", "title")}
            description={option("twint", "description")}
            spending={option("twint", "spending")}
          >
            <Flex gap={1} flexDirection="column">
              <Link fontWeight={700} href={`tel:${TWINT.phone}`}>
                {TWINT.phone}
              </Link>
              <Text fontSize="14px">{TWINT.name}</Text>
              <Link fontSize="14px" href={`mailto:${TWINT.email}`}>
                {TWINT.email}
              </Link>
            </Flex>
          </SupportOption>
          <SupportOption
            icon={FaGift}
            title={option("inKind", "title")}
            description={option("inKind", "description")}
            spending={option("inKind", "spending")}
          >
            <Button
              width="100%"
              href={`mailto:${ORGANIZATION.email}`}
              {...actionStyle}
            >
              {option("inKind", "action")}
            </Button>
          </SupportOption>
          <SupportOption
            icon={FaHandsHelping}
            title={option("volunteer", "title")}
            description={option("volunteer", "description")}
            spending={option("volunteer", "spending")}
          >
            <Button
              width="100%"
              href={`mailto:${ORGANIZATION.email}`}
              {...actionStyle}
            >
              {option("volunteer", "action")}
            </Button>
          </SupportOption>
        </Grid>
      </GridItem>
      <GridItem>
        <DonationJourney />
      </GridItem>
      <GridItem>
        <Flex gap={6} flexDirection="column">
          <Heading
            as="h2"
            textAlign="center"
            fontSize={{ base: "28px", md: "36px" }}
          >
            {localization.mapHeading}
          </Heading>
          <EmbedMap src={DONATION_MAP_EMBED_URL} alt="locations" />
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default withTracker(Support);
