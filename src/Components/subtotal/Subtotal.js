import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { StateData } from "../StateProvider";
import { getBasketTotal } from "../Reducer";
import {useHistory} from "react-router-dom"

function Subtotal() {
  const [{basket},dispatch]=StateData();

  const history=useHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => {
          return (<>
            <p>
              Subtotal ({basket.length} items) <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>)
        }}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={()=>{history.push("/checkout-page")}}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
