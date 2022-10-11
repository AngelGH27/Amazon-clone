import "./App.css";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./Components/checkout/Checkout";
import CheckoutPage from "./Components/checkoutpage/CheckoutPage";
import SignIn from "./Components/login-page/SignIn";
import { useEffect } from "react";
import { auth } from "./Components/FireBase";
import { StateData } from "./Components/StateProvider";
import { onAuthStateChanged } from "firebase/auth";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Geeky from "./Components/Geeky";

const promise = loadStripe(
  "pk_test_51Kl4yPSHDaf0ApOCxCIeu9eXEWrSYGa2yVpO1neQ9D0edNmdZi3l2Xo1Ttjo41F0P5nJIgSDjzTmcPxGIqV15dI300BkJJR4SK"
);

function App() {
  const [state, dispatch] = StateData();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
     

      <BrowserRouter>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/checkout-page">
            <Header />
            <Elements stripe={promise}>
            <CheckoutPage />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
