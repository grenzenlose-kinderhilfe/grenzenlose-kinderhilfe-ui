import {
  AspectRatio,
  Grid,
  GridItem,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { LOCALE_DE } from "../../../constants";
import { useTranslation } from "react-i18next";
import DonateButton from "../PaypalDonate/PaypalDonate"
const Fundraiser = () => {
  const { i18n, t } = useTranslation();

  const localization = {
    actionTextHeading: t(
      "pages.Shoebox.Fundraiser.actionTextHeading",
      "Adományozz most és támogasd a szállítmányozást!",
    ),
    actionTextInstruction: t(
      "pages.Shoebox.Fundraiser.actionTextInstruction",
      "Adományoddal te is részese lehetsz ennek az örömteli kezdeményezésnek. Kattints a fenti linkre és csatlakozza nagyobb jó ügyéhez.",
    ),
  };

  const shoeboxMarketingEmbedSource =
    i18n.language === LOCALE_DE
      ? "https://www.youtube.com/embed/h__srWvtSK4?si=6SPuhV09jUNmORT_"
      : "https://www.youtube.com/embed/tIL6BPiSY1w?si=JxAeMR7Gop2wV2k-";

  return (
    <Grid
      margin="0 50px 0"
      gap="20px"
      templateColumns={{ base: "1fr", xl: "1fr 1fr" }}
    >
      <GridItem alignSelf="center">
        <AspectRatio width="100%" ratio={16 / 9}>
          <iframe
            title="Határtalan Segítség Alapítvány"
            width="1268"
            height="713"
            src={shoeboxMarketingEmbedSource}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </AspectRatio>
      </GridItem>
      <GridItem alignSelf="center" margin={{ base: "25px", xl: 0 }}>
        <Flex flexDirection="column" alignItems="center" gap={8} maxW="600px">
          <Heading as="h1" fontsize="2rem">
            {localization.actionTextHeading}
          </Heading>

          <AspectRatio
            width="100%"
            maxWidth="500px"
            ratio={1/2.5}
          >
            <DonateButton />
          </AspectRatio>
          <Text mt="-1rem">{localization.actionTextInstruction}</Text>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Fundraiser;
