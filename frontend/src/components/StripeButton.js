import React from "react";
import StripeCheckout from "react-stripe-checkout";
const StripeButton = (props) => {
  const priceForStripe = props.price * 100;
  const key = "pk_test_sUGDV5JFtlQCoZAM6v3HPW1500WwmxWMs3";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Donate Now"
      name="Thank you "
      billingAddress
      description={`Your total is ${props.price}`}
      amount={priceForStripe}
      panelLabel="Donate Now"
      token={onToken}
      stripeKey={key}
    />
  );
};

export default StripeButton;
