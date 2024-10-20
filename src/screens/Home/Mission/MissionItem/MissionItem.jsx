import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react";

const MissionItem = ({ title, onClickHandler, children }) => (
  <AccordionItem>
    <AccordionButton
      onClick={onClickHandler}
      _hover={{ bg: "#EDEDED", borderRadius: "10px" }}
      _expanded={{ bg: "primary.lightblue", borderRadius: "10px" }}
    >
      <Box flex="1" textAlign="left">
        <Heading fontSize="24px">{title}</Heading>
      </Box>
      <AccordionIcon />
    </AccordionButton>
    <AccordionPanel pb={4}>{children}</AccordionPanel>
  </AccordionItem>
);

export default MissionItem;
