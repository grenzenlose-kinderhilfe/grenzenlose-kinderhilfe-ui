import React from "react";
import {
  Button,
  Flex,
  Input,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useTranslation } from "react-i18next";

import {
  CURRENCIES,
  CURRENCY_PRESETS,
  defaultAmount,
  formatCurrency,
  isPresetSelected,
  isValidAmount,
} from "../amount";

const Label = ({ children }) => (
  <Text
    fontSize="12px"
    fontWeight={700}
    letterSpacing="1px"
    textTransform="uppercase"
    color="primary.blue"
  >
    {children}
  </Text>
);

const DonateSelector = ({ amount, currency, setAmount, setCurrency }) => {
  const [{ options }, dispatch] = usePayPalScriptReducer();

  const { t, i18n } = useTranslation();

  const localization = {
    preset: t("ui.donate.presetLabel", "Válassz összeget"),
    custom: t("ui.donate.customLabel", "Vagy adj meg egy összeget"),
    amount: t("ui.donate.amountLabel", "Adomány összege"),
    currency: t("ui.donate.currencyLabel", "Pénznem"),
  };

  /**
   * The currency is part of the SDK script URL, so changing it means reloading
   * the script. Nothing else may dispatch this: a reset tears the rendered
   * buttons down, which closes an open checkout window.
   */
  const onCurrencyChange = ({ target: { value } }) => {
    setCurrency(value);
    // The amounts are not comparable across currencies, so start over on the
    // new currency's own suggestion rather than carrying the number across.
    setAmount(defaultAmount(value));

    dispatch({
      type: "resetOptions",
      value: { ...options, currency: value },
    });
  };

  return (
    <Flex gap={3} flexDirection="column">
      <Label>{localization.preset}</Label>
      <SimpleGrid columns={2} spacing={2}>
        {CURRENCY_PRESETS[currency].map((preset) => {
          const isSelected = isPresetSelected(amount, preset);

          return (
            <Button
              key={preset}
              size="sm"
              onClick={() => setAmount(String(preset))}
              color={isSelected ? "primary.white" : "primary.blue"}
              bg={isSelected ? "primary.blue" : "transparent"}
              border="1px solid"
              borderColor="primary.blue"
              _hover={{ bg: isSelected ? "#1B3F82" : "primary.lightblue" }}
            >
              {formatCurrency(preset, currency, i18n.language)}
            </Button>
          );
        })}
      </SimpleGrid>
      <Label>{localization.custom}</Label>
      <Flex gap={3}>
        <Input
          flex="1"
          value={amount}
          inputMode="decimal"
          aria-label={localization.amount}
          onChange={({ target: { value } }) => setAmount(value)}
          isInvalid={!isValidAmount(amount)}
        />
        <Select
          width="auto"
          value={currency}
          onChange={onCurrencyChange}
          aria-label={localization.currency}
        >
          {CURRENCIES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </Flex>
    </Flex>
  );
};

export default DonateSelector;
