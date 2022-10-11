import React, { useEffect, useState } from "react";
import "./CheckoutPage.css";
import CheckOutProduct from "../checkoutproduct/CheckOutProduct";
import { StateData } from "../StateProvider";
import { Link } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../Reducer";
import { useHistory } from "react-router-dom";
import axios from "../../axios";

function CheckoutPage() {
  const [{ basket, user }, dispatch] = StateData();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    //generate the special client secret which
    // will be use to charge customer

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement), //It says payment method is card and it will get card details with this card value
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>Checkout {<Link to="/checkout">{basket?.length} items</Link>}</h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>H.No.1, Word No. 1</p>
            <p>Daulatpur Chowk , Una , Himachal</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item, index) => {
              return (
                <CheckOutProduct
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  stars={item.stars}
                />
              );
            })}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="price_container">
                <CurrencyFormat
                  renderText={(value) => {
                    return (
                      <>
                        <h3>Order Total: {value}</h3>
                      </>
                    );
                  }}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
