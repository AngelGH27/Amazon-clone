import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { StateData } from "../StateProvider";
import { auth } from "../FireBase";

function Header() {
  const signOut = () => {
    auth.signOut();
  };
  const [{ basket, user }, dispatch] = StateData();
  return (
    <nav className="header">
      <Link to="/">
        <img
          src="https://cdn.neow.in/news/images/uploaded/2021/06/1622736066_amazon-logo_story.jpg"
          className="header_logo"
        ></img>
      </Link>
      <div className="header_search">
        <select>
          <option selected="selected" value="search-alias=aps">
            All Categories
          </option>
          <option value="search-alias=alexa-skills">Alexa Skills</option>
          <option value="search-alias=amazon-devices">Amazon Devices</option>
          <option value="search-alias=fashion">Amazon Fashion</option>
          <option value="search-alias=nowstore">Amazon Fresh</option>
          <option value="search-alias=amazon-pharmacy">Amazon Pharmacy</option>
          <option value="search-alias=appliances">Appliances</option>
          <option value="search-alias=mobile-apps">Apps &amp; Games</option>
          <option value="search-alias=baby">Baby</option>
          <option value="search-alias=beauty">Beauty</option>
          <option value="search-alias=stripbooks">Books</option>
          <option value="search-alias=automotive">Car &amp; Motorbike</option>
        </select>
        <input type="text" className="header_searchbox"></input>
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>
      <div className="header_options">
        <div className="header_option">
          <span className="header_option1">Hello</span>
          <span className="header_option2" onClick={signOut}>
            <Link to={!user && "/sign-in"}>
              {user ? "Sign-out" : "Sign-in"}
            </Link>
          </span>
        </div>
        <div className="header_option">
          <span className="header_option1">Returns</span>
          <span className="header_option2">& orders</span>
        </div>
        <div className="header_option">
          <span className="header_option1">Your</span>
          <span className="header_option2">Prime</span>
        </div>
        <div className="header_basket">
          <Link to="/checkout" className="checkout_css">
            <ShoppingBasketIcon />
            <span className="header_option2 basket_count">{basket.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
