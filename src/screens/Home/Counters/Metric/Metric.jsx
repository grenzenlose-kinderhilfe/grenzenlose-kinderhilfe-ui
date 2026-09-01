import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import useCountUp from "../../../../hooks/useCountUp";

const Metric = ({ label, value, suffix = "" }) => {
  const { i18n } = useTranslation();

  const [ref, displayed] = useCountUp(value);

  return (
    <Stat
      ref={ref}
      flex="1"
      textAlign="center"
      padding={{ base: "15px 10px", md: "20px 15px" }}
      margin={{ base: "10px", md: "20px" }}
      border="2px solid #112B5C"
      borderRadius="25px"
      backgroundColor="rgba(255, 255, 255, .75)"
    >
      <StatNumber
        fontFamily="heading"
        fontWeight={600}
        lineHeight="1.1"
        fontSize={{ base: "34px", md: "44px" }}
      >
        {displayed.toLocaleString(i18n.language)}
        {suffix}
      </StatNumber>
      <StatLabel
        mt={1}
        whiteSpace="normal"
        fontSize={{ base: "14px", md: "16px" }}
      >
        {label}
      </StatLabel>
    </Stat>
  );
};

export default Metric;
