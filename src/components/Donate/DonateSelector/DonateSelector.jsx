import React from "react";
import { Input, Select, Flex } from "@chakra-ui/react";
import { usePayPalScriptReducer } from "@paypal/react-paypal-js";

const DonateSelector = ({ amount, setAmount }) => {
  const [{ options }, dispatch] = usePayPalScriptReducer();

  const onAmountChange = ({ target: { value } }) => {
    setAmount(value);
  };

  const resetOptionsAmount = () => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
      },
    });
  };

  const resetOptionsCurrency = ({ target: { value } }) => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: value,
      },
    });
  };

  return (
    <Flex mt={50} gap={6} maxWidth="300px">
      <Input
        isInvalid={isNaN(amount)}
        value={amount}
        onChange={onAmountChange}
        onBlur={resetOptionsAmount}
      />
      <Select value={options.currencycurrency} onChange={resetOptionsCurrency}>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CHF">CHF</option>
        <option value="HUF">HUF</option>
      </Select>
    </Flex>
  );
};

export default DonateSelector;
