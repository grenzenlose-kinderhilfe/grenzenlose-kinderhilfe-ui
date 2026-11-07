import React from "react";
import { Button, Flex, Select, SimpleGrid, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import {
  CURRENCIES,
  CUSTOM_AMOUNT,
  defaultAmount,
  formatCurrency,
  hasCustomAmount,
  presetsOf,
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

const AmountButton = ({ isSelected, children, ...props }) => (
  <Button
    size="md"
    fontWeight={700}
    color={isSelected ? "primary.white" : "primary.blue"}
    bg={isSelected ? "primary.blue" : "transparent"}
    border="1px solid"
    borderColor="primary.blue"
    _hover={{ bg: isSelected ? "#1B3F82" : "primary.lightblue" }}
    aria-pressed={isSelected}
    {...props}
  >
    {children}
  </Button>
);

const DonateSelector = ({
  amount,
  currency,
  setAmount,
  setCurrency,
  showLabel = true,
}) => {
  const { t, i18n } = useTranslation();

  const localization = {
    preset: t("ui.donate.presetLabel", "Válassz összeget"),
    custom: t("ui.donate.customLabel", "Más összeg"),
    currency: t("ui.donate.currencyLabel", "Pénznem"),
  };

  // The amounts are not comparable across currencies, so start over on the
  // new currency's own suggestion rather than carrying the selection across.
  const onCurrencyChange = ({ target: { value } }) => {
    setCurrency(value);
    setAmount(defaultAmount(value));
  };

  const hasCurrencyChoice = CURRENCIES.length > 1;

  return (
    <Flex gap={3} flexDirection="column">
      {(showLabel || hasCurrencyChoice) && (
        <Flex
          justify={showLabel ? "space-between" : "flex-end"}
          align="center"
          gap={3}
        >
          {showLabel && <Label>{localization.preset}</Label>}
          {hasCurrencyChoice && (
            <Select
              size="sm"
              width="auto"
              borderRadius="md"
              borderColor="primary.blue"
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
          )}
        </Flex>
      )}
      <SimpleGrid columns={2} spacing={2}>
        {presetsOf(currency).map((preset) => (
          <AmountButton
            key={preset}
            isSelected={amount === String(preset)}
            onClick={() => setAmount(String(preset))}
          >
            {formatCurrency(preset, currency, i18n.language)}
          </AmountButton>
        ))}
        {hasCustomAmount(currency) && (
          <AmountButton
            gridColumn="1 / -1"
            isSelected={amount === CUSTOM_AMOUNT}
            onClick={() => setAmount(CUSTOM_AMOUNT)}
          >
            {localization.custom}
          </AmountButton>
        )}
      </SimpleGrid>
    </Flex>
  );
};

export default DonateSelector;
