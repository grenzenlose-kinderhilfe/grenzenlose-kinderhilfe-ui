import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const DonateButton = ({ isDisabled, amount }) => {
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
      createOrder={async (_, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amount,
              },
            },
          ],
        });
      }}
      onApprove={async (_, actions) => {
        return actions.order.capture().then(function (details) {
          alert(
            "Donation successful! Thank you, " + details.payer.name.given_name,
          );
        });
      }}
    />
  );
};

export default DonateButton;
