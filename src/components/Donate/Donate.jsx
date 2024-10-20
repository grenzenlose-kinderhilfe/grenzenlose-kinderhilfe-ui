import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import DonateButton from "./DonateButton/DonateButton";
import DonateSelector from "./DonateSelector/DonateSelector";

const clientId =
  "Afb49P4EFUTaTmOWzpWHrCvv_VJ-3SYdPn3Xf8FoVXuQghD0_66A3Aj5LowsLNPBi9YC1YKGGAP0UiSE";

const Donate = () => {
  const [amount, setAmount] = React.useState("5");

  const isDisabled = amount.length === 0 || isNaN(amount);

  return (
    <PayPalScriptProvider options={{ "client-id": clientId, currency: "EUR" }}>
      <DonateButton isDisabled={isDisabled} amount={amount} />
      <DonateSelector amount={amount} setAmount={setAmount} />
    </PayPalScriptProvider>
  );
};

export default Donate;
