import React from "react";
import "./checkout.css";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate, useParams } from "react-router-dom";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const stripe = loadStripe(
  "pk_test_51L6qfkSEt06wMJGI2gqgwCvOXzN8zx1zPnHCYBASrrMCI88aMgRZWwXMK5NnRxk2WIaB6UMgvaO9wT1MrNLAMA6e00sqM0qmTe"
);
const loader = "auto";

const Checkout = () => {
  const { id } = useParams();
  let clientSecret = id;

  if (id) {
    return (
      <Elements stripe={stripe} options={{ clientSecret, loader }}>
        <CheckoutForm />
      </Elements>
    );
  }
};

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/paymentsuccess",
      },
    });

    if (error) {
      navigate("/");
    }
  };

  return (
    <div className="container">
      <form>
        <h3>Payment</h3>
        <PaymentElement />
        <div className="btn">
          <button onClick={() => navigate("/")} className="addtocartbtn">
            Back
          </button>
          <button onClick={handleSubmit} className="addtocartbtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
