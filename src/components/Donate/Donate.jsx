import { Flex } from "@chakra-ui/react";
import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import { PAYPAL_CLIENT_ID } from "../../constants";
import DonateButton from "./DonateButton/DonateButton";
import DonateSelector from "./DonateSelector/DonateSelector";
import { DEFAULT_CURRENCY, defaultAmount, isValidAmount } from "./amount";

// Read once: the provider only looks at these when it first mounts, every later
// change has to go through a "resetOptions" dispatch.
const options = {
  clientId: PAYPAL_CLIENT_ID,
  currency: DEFAULT_CURRENCY,
  intent: "capture",
  components: "buttons",
};

const Donate = () => {
  const [amount, setAmount] = React.useState(defaultAmount(DEFAULT_CURRENCY));
  const [currency, setCurrency] = React.useState(DEFAULT_CURRENCY);

  return (
    <PayPalScriptProvider options={options}>
      <Flex gap={4} width="100%" flexDirection="column">
        <DonateSelector
          amount={amount}
          currency={currency}
          setAmount={setAmount}
          setCurrency={setCurrency}
        />
        <DonateButton
          amount={amount}
          currency={currency}
          isDisabled={!isValidAmount(amount)}
        />
      </Flex>
    </PayPalScriptProvider>
  );
};

export default Donate;
