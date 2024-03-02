import {
  Flex,
  Grid,
  GridItem,
  HStack,
  Box,
  Tag,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ReactCountryFlag } from "react-country-flag";
import { FaLink } from "react-icons/fa6";

const MediaItem = ({
  date,
  countryCode,
  title,
  description,
  source,
  sourceUrl,
  videoEmbedUrl,
}) => {
  return (
    <Grid
      templateColumns={{ base: "1fr", xl: "1fr 1fr" }}
      borderRadius="10px"
      backgroundColor="primary.blue"
      color="white"
    >
      <GridItem align="center" p="25px">
        <Flex
          gap={6}
          align="center"
          height="100%"
          flexDirection="column"
          justifyContent="center"
        >
          <Heading as="h1" fontSize="32px" maxW="600px">
            {title}
          </Heading>
          {description && (
            <Text maxW="800px" fontStyle="italic">
              {'"'}
              {description}
              {'"'}
            </Text>
          )}
          <HStack>
            {date && <Tag>{date}</Tag>}
            {countryCode && (
              <Tag>
                <ReactCountryFlag svg countryCode={countryCode} />
              </Tag>
            )}
            {source && <Tag>{source}</Tag>}
            {sourceUrl && (
              <Tag>
                <Link isExternal href={sourceUrl}>
                  <FaLink />
                </Link>
              </Tag>
            )}
          </HStack>
        </Flex>
      </GridItem>
      <GridItem
        align="center"
        display="flex"
        justifyContent="center"
        p={{ base: "0 10px 10px", md: "0 25px 25px", xl: "25px" }}
      >
        <Box as="iframe" src={videoEmbedUrl} width="100%" aspectRatio="16/9" />
      </GridItem>
    </Grid>
  );
};

export default MediaItem;
