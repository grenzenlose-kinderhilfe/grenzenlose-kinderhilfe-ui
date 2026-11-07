import { Button, Flex, useToast } from "@chakra-ui/react";
import React from "react";
import { FaLock } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import DonateSelector from "./DonateSelector/DonateSelector";
import {
  DEFAULT_CURRENCY,
  defaultAmount,
  hasPaymentLinks,
  paymentLinkOf,
} from "./amount";

const SUCCESS_TOAST_ID = "donation-success";

/**
 * Stripe sends the donor back with `?donation=success` (set as the Payment
 * Links' redirect URL). Thank them once, then drop the flag so a reload or a
 * shared link does not repeat it.
 */
const useDonationSuccessToast = () => {
  const toast = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);

    if (params.get("donation") !== "success") return;

    if (!toast.isActive(SUCCESS_TOAST_ID)) {
      toast({
        id: SUCCESS_TOAST_ID,
        status: "success",
        title: t("ui.donate.successTitle", "Köszönjük az adományod!"),
        duration: 8000,
        isClosable: true,
      });
    }

    params.delete("donation");
    navigate({ search: params.toString() }, { replace: true });
  }, [location.search, navigate, t, toast]);
};

/**
 * `showLabel` hides the "choose an amount" caption where a heading right
 * above the widget already asks for the donation.
 */
const Donate = ({ showLabel = true }) => {
  const [currency, setCurrency] = React.useState(DEFAULT_CURRENCY);
  const [amount, setAmount] = React.useState(defaultAmount(DEFAULT_CURRENCY));

  const { t, i18n } = useTranslation();

  useDonationSuccessToast();

  if (!hasPaymentLinks) return null;

  const href = paymentLinkOf(currency, amount, i18n.language);

  return (
    <Flex gap={4} width="100%" flexDirection="column">
      <DonateSelector
        amount={amount}
        currency={currency}
        setAmount={setAmount}
        setCurrency={setCurrency}
        showLabel={showLabel}
      />
      <Button
        as="a"
        href={href}
        isDisabled={!href}
        size="lg"
        leftIcon={<FaLock />}
        bg="primary.blue"
        color="primary.white"
        _hover={{ bg: "#1B3F82" }}
      >
        {t("ui.donate.button", "Adományozok")}
      </Button>
    </Flex>
  );
};

export default Donate;
