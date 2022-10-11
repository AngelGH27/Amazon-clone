import React from "react";
import { Link } from "react-router-dom";
import "./EmptyBucket.css";
import { StateData } from "../StateProvider";

function EmptyBucket() {

  const [{user},dispatch]=StateData();

  return (
    <div className="emptybucket">
      <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"></img>
      <div className="emptybucket_div">
        <h2>Your Amazon Basket Is Empty</h2>
        <a class="a-link-normal" href="/gp/goldbox/ref=cart_empty_deals">
          Shop today’s deals
        </a>
        <div className="emptybucket_signin">
            {!user && <>
            <Link to='/sign-in'><button className="sign_in">Sign in to your account</button></Link>
            <button className="sign_up">Sign up now</button></>
            }
        </div>
      </div>
    </div>
  );
}

export default EmptyBucket;
