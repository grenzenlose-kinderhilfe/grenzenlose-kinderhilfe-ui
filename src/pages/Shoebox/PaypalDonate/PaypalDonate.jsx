import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const clientId = "AdKic1ZZ43rTj81R_vtj1oyNd26NAY7tJp1XjsJx2mqcuGE8CW3etzf0p5NcGxb7UCx6LVjYi--A_A4I"

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
                value: "5.00", // set donation amount
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
