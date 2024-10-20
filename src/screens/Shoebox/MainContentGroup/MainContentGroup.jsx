import {
  AspectRatio,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

const MainContentGroup = () => {
  const { t } = useTranslation();

  const localization = {
    titleHeading: t("pages.Shoebox.MainContentGroup.titleHeading"),
    titleHeadingSub: t("pages.Shoebox.MainContentGroup.titleHeadingSub"),
    shoeboxMagic: t("pages.Shoebox.MainContentGroup.shoeboxMagic"),
    joinUs: t("pages.Shoebox.MainContentGroup.joinUs"),
    community: t("pages.Shoebox.MainContentGroup.community"),
    attention: t("pages.Shoebox.MainContentGroup.attention"),
  };

  return (
    <Grid
      margin={2}
      padding={2}
      templateColumns={{ base: "1fr", xl: "2fr 3fr" }}
      borderRadius="10px"
      backgroundColor="primary.blue"
      color="white"
    >
      <GridItem align="center" p="25px">
        <Flex
          gap={6}
          align="center"
          minHeight={{ base: "250px", xl: "450px" }}
          height="100%"
          flexDirection="column"
          justifyContent="center"
        >
          <Heading as="h1" fontSize="2rem" maxW="600px">
            {localization.titleHeading}
          </Heading>
          <Text fontStyle="italic">{localization.titleHeadingSub}</Text>
          <Text maxW="800px" fontStyle="italic">
            {localization.shoeboxMagic}
          </Text>
          <Heading as="h3" fontSize="1.75rem">
            {localization.joinUs}
          </Heading>
          <Text fontStyle="italic">{localization.community}</Text>
          <Text fontStyle="italic">{localization.attention}</Text>
        </Flex>
      </GridItem>
      <GridItem
        align="center"
        display="flex"
        justifyContent="center"
        p={{ base: "0 10px 10px", md: "0 25px 25px", xl: "25px" }}
      >
        <AspectRatio width="80%" ratio={{ base: 7 / 4 }}>
          <Image
            src="/assets/img/pages/shoebox/shoebox.png"
            fit="cover"
            alt="shoebox-logo"
          />
        </AspectRatio>
      </GridItem>
    </Grid>
  );
};

export default MainContentGroup;
