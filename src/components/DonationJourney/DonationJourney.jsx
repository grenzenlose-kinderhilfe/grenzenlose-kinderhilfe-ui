import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaArrowDown,
  FaArrowRight,
  FaBoxes,
  FaChild,
  FaHandsHelping,
  FaTruck,
  FaWarehouse,
} from "react-icons/fa";

const STEPS = [
  { id: "collection", icon: FaBoxes },
  { id: "sorting", icon: FaWarehouse },
  { id: "transport", icon: FaTruck },
  { id: "handover", icon: FaHandsHelping },
  { id: "children", icon: FaChild },
];

const Step = ({ icon, title, description }) => (
  <Flex
    p="20px"
    gap={2}
    flex="1"
    align="center"
    textAlign="center"
    flexDirection="column"
    backgroundColor="primary.white"
    border="1px solid"
    borderColor="primary.blue"
    borderRadius="10px"
  >
    <Flex
      minW="48px"
      height="48px"
      align="center"
      justify="center"
      borderRadius="full"
      backgroundColor="primary.blue"
      color="primary.white"
    >
      <Icon as={icon} boxSize="22px" />
    </Flex>
    <Heading as="h3" fontSize="20px">
      {title}
    </Heading>
    <Text fontSize="14px">{description}</Text>
  </Flex>
);

/**
 * "Where does my donation go?" — the route a donation takes, from the person
 * handing it over to the children receiving it.
 */
const DonationJourney = ({ children }) => {
  const { t } = useTranslation();

  const localization = {
    heading: t("ui.journey.heading", "Hová jut az adományom?"),
    subHeading: t(
      "ui.journey.subHeading",
      "Az adomány útja a felajánlástól a gyermekekig — minden lépést mi szervezünk.",
    ),
  };

  return (
    <Flex gap={6} flexDirection="column">
      <Flex gap={2} align="center" textAlign="center" flexDirection="column">
        <Heading as="h2" fontSize={{ base: "28px", md: "36px" }}>
          {localization.heading}
        </Heading>
        <Text maxW="700px">{localization.subHeading}</Text>
      </Flex>
      <Flex
        gap={2}
        align="stretch"
        flexDirection={{ base: "column", lg: "row" }}
      >
        {STEPS.map(({ id, icon }, idx) => (
          <React.Fragment key={`journey-step-${id}`}>
            {idx > 0 && (
              <Flex align="center" justify="center" color="primary.blue">
                <Icon
                  as={FaArrowDown}
                  display={{ base: "block", lg: "none" }}
                />
                <Icon
                  as={FaArrowRight}
                  display={{ base: "none", lg: "block" }}
                />
              </Flex>
            )}
            <Step
              icon={icon}
              title={t(`ui.journey.${id}.title`)}
              description={t(`ui.journey.${id}.description`)}
            />
          </React.Fragment>
        ))}
      </Flex>
      {children}
    </Flex>
  );
};

export default DonationJourney;
