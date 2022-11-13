import { Flex, Grid, GridItem, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import rollingKidsImage from "../../assets/img/pages/rolling-kids.jpg";

const pageItems = [
  {
    title: "Ukraine 2022",
    url: "/pages/ukraine-2022",
    backgroundImage: rollingKidsImage,
  },
  {
    isExternal: true,
    title: "Rolling Kids",
    url: "https://rollingkids.eu/",
    backgroundImage: rollingKidsImage,
  },
  {
    title: "Kresz Park",
    url: "/pages/kresz-park",
    backgroundImage: rollingKidsImage,
  },
  {
    title: "Cipősdoboz",
    url: "/pages/ciposdoboz",
    backgroundImage: rollingKidsImage,
  },
];

const PageImage = ({ title, backgroundImage }) => (
  <Flex flexDirection="column" gap={3} alignItems="center">
    <Flex
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize="cover"
      borderRadius="10px"
      backgroundColor="lightgrey"
      opacity="90%"
      height={{ base: "250px", md: "320px" }}
      width="100%"
      minWidth="250px"
      maxWidth="320px"
      _hover={{ opacity: "50%" }}
    />
    <Text
      fontWeight={700}
      fontSize="24px"
      _hover={{ textDecoration: "underline" }}
    >
      {title}
    </Text>
  </Flex>
);

const Pages = () => (
  <Grid
    gap={8}
    color="black"
    m={{
      base: "25px",
      lg: "50px 100px 50px",
      xl: "50px 250px 50px",
      "2xl": "50px 500px 50px",
    }}
    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
  >
    {pageItems.map(({ title, backgroundImage, url, isExternal }, idx) => (
      <GridItem key={`page-${idx}`}>
        {isExternal ? (
          <a href={url} target="_blank" rel="noreferrer">
            <PageImage title={title} backgroundImage={backgroundImage} />
          </a>
        ) : (
          <Link as={RouterLink} to={url}>
            <PageImage title={title} backgroundImage={backgroundImage} />
          </Link>
        )}
      </GridItem>
    ))}
  </Grid>
);

export default Pages;
