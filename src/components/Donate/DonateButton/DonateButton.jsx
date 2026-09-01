import React from "react";
import { useToast } from "@chakra-ui/react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useTranslation } from "react-i18next";

import { formatAmount } from "../amount";

const DonateButton = ({ isDisabled, amount, currency }) => {
  const toast = useToast();

  const { t } = useTranslation();

  const notify = (status, title, description) =>
    toast({ status, title, description, duration: 8000, isClosable: true });

  return (
    <PayPalButtons
      fundingSource="paypal"
      disabled={isDisabled}
      style={{
        layout: "vertical",
        color: "blue",
        shape: "rect",
        label: "donate",
      }}
      createOrder={(_, actions) =>
        actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                currency_code: currency,
                value: formatAmount(amount, currency),
              },
            },
          ],
        })
      }
      onApprove={async (_, actions) => {
        const details = await actions.order.capture();

        notify(
          "success",
          t("ui.donate.successTitle", "Köszönjük az adományod!"),
          details?.payer?.name?.given_name
            ? t("ui.donate.successNamed", "Köszönjük, {{name}}!", {
                name: details.payer.name.given_name,
              })
            : undefined,
        );
      }}
      onCancel={() =>
        notify(
          "info",
          t("ui.donate.cancelledTitle", "Az adományozás megszakadt"),
          t(
            "ui.donate.cancelledText",
            "Nem történt terhelés. Bármikor újrapróbálhatod.",
          ),
        )
      }
      onError={(error) => {
        console.error(error);

        notify(
          "error",
          t("ui.donate.errorTitle", "Az adományozás nem sikerült"),
          t(
            "ui.donate.errorText",
            "Kérjük, próbáld újra, vagy támogass minket banki átutalással.",
          ),
        );
      }}
    />
  );
};

export default DonateButton;
