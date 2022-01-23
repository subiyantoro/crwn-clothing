import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KL4fVBZxe82r4F7vzFUkHtexIFl0hcA6mRa8AdF4PlNfxf3Q7uhkVIclNWo2bz9htOOHgiHGQO8keRMhSdL19Tg00GY7UVKyf';

    const onToken = token => {
        alert('Payment successful');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Crown Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripCheckoutButton;