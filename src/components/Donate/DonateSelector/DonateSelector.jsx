import React from "react";
import { Input, Select, Flex } from "@chakra-ui/react";
import { usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useTranslation } from "react-i18next";

import { CURRENCIES, isValidAmount } from "../amount";

const DonateSelector = ({ amount, currency, setAmount, setCurrency }) => {
  const [{ options }, dispatch] = usePayPalScriptReducer();

  const { t } = useTranslation();

  const onAmountChange = ({ target: { value } }) => setAmount(value);

  /**
   * The currency is part of the SDK script URL, so changing it means reloading
   * the script. Nothing else may dispatch this: a reset tears the rendered
   * buttons down, which closes an open checkout window.
   */
  const onCurrencyChange = ({ target: { value } }) => {
    setCurrency(value);

    dispatch({
      type: "resetOptions",
      value: { ...options, currency: value },
    });
  };

  return (
    <Flex gap={6} maxWidth="300px">
      <Input
        value={amount}
        inputMode="decimal"
        onChange={onAmountChange}
        isInvalid={!isValidAmount(amount)}
        aria-label={t("ui.donate.amountLabel", "Adomány összege")}
      />
      <Select
        value={currency}
        onChange={onCurrencyChange}
        aria-label={t("ui.donate.currencyLabel", "Pénznem")}
      >
        {CURRENCIES.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </Flex>
  );
};

export default DonateSelector;
