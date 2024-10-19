import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const clientId = "Afb49P4EFUTaTmOWzpWHrCvv_VJ-3SYdPn3Xf8FoVXuQghD0_66A3Aj5LowsLNPBi9YC1YKGGAP0UiSE"

const DonateButton = () => (
  <PayPalScriptProvider options={{ "client-id": clientId }}>
    <PayPalButtons
      style={{
        layout: "vertical",
        color: "blue",
        shape: "rect",
        label: "donate",
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "5.00"
              },
            },
          ],
        });
      }}
      onApprove={(data, actions) => {
        return actions.order.capture().then(function (details) {
          alert(
            "Donation successful! Thank you, " + details.payer.name.given_name,
          );
        });
      }}
    />
  </PayPalScriptProvider>
);

export default DonateButton;
