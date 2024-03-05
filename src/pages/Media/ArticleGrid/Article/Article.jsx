import { Flex, HStack, Tag, Link, Heading } from "@chakra-ui/react";
import { ReactCountryFlag } from "react-country-flag";
import { FaLink } from "react-icons/fa6";

const Article = ({ date, countryCode, title, source, sourceUrl }) => {
  return (
    <Flex
      gap={4}
      padding={6}
      color="white"
      borderRadius="10px"
      backgroundColor="primary.blue"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      flexDirection="column"
    >
      <Heading>{title}</Heading>
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
  );
};

export default Article;
