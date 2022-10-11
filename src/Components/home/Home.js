import React from "react";
import Product from "../product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg"
          className="home_img"
        ></img>
        <div className="home_row">
          <Product
            id={201}
            image="https://images-eu.ssl-images-amazon.com/images/I/41jr5nrfFoL._AC_SR400,600_.jpg"
            title="OPPO A31 (Fantasy White, 6GB RAM, 128GB Storage) with No"
            stars={4}
            sold={48469}
            price={12990}
            dis={15000}
            per={19}
          />
          <Product
            id={202}
            image="https://images-eu.ssl-images-amazon.com/images/I/41CkKbseMGL._AC_SR400,600_.jpg"
            title="Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB"
            stars={4}
            sold={12813}
            price={39990}
            dis={74999}
            per={47}
          />
          <Product
            id={203}
            image="https://images-eu.ssl-images-amazon.com/images/I/41O3PUgmItL._AC_SR400,600_.jpg"
            title="ASUS ROG Strix G17 (2021), 17.3 (43.94 cms) FHD 144Hz, AMD"
            stars={4}
            sold={34}
            price={80990}
            dis={118310}
            per={32}
          />
          <Product
            id={204}
            image="https://images-eu.ssl-images-amazon.com/images/I/417prn9T2VL._AC_SR400,600_.jpg"
            title="DiSano Extra Virgin Olive Oil, First Cold Pressed, 1L + 100ml free"
            stars={4}
            sold={14469}
            price={674}
            dis={1250}
            per={46}
          />
          <Product
            id={205}
            image="https://m.media-amazon.com/images/I/81pSrz0gw2L._AC_UL480_FMwebp_QL65_.jpg"
            title="HP AIO 11th Gen Intel Core i3 23.8-Inch(60.5 cm) FHD Desktop PC "
            stars={4}
            sold={1283}
            price={47990}
            dis={54999}
            per={13}
          />
          <Product
            id={206}
            image="https://m.media-amazon.com/images/I/61bwTIJQWXL._AC_UL480_FMwebp_QL65_.jpg"
            title="JBL Charge 4, Wireless Portable Bluetooth Speaker, JBL Signature Sound"
            stars={4}
            sold={21813}
            price={10990}
            dis={15999}
            per={31}
          />
        </div>
        <div className="home_row_2">
          <div className="row_2_head">
            <p className="row_2_heading">
              Exclusive home décor picks | From women-led local shops{" "}
              <a href="">Explore more women-led local shop</a>
            </p>
          </div>
          <div className="row_2_images">
            <img
              src="https://m.media-amazon.com/images/I/71WjCFHP6xS._AC_SY200_.jpg"
              alt=""
            />
            <img
              src="https://m.media-amazon.com/images/I/81YD7Kffn4L._AC_SY200_.jpg"
              alt=""
            />
            <img
              src="https://m.media-amazon.com/images/I/81byLVZURXL._AC_SY200_.jpg"
              alt=""
            />
            <img
              src="https://m.media-amazon.com/images/I/813tJHqTXFL._AC_SY200_.jpg"
              alt=""
            />
            <img
              src="https://m.media-amazon.com/images/I/91IzUMqgwPL._AC_SY200_.jpg"
              alt=""
            />
            <img
              src="https://m.media-amazon.com/images/I/813Xlu4HmkL._AC_SY200_.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="home_row_2">
          <div className="row_2_head">
            <p className="row_2_heading">
              Up to 40% off | Drinkware & serveware picks from local shops{" "}
              <a href="">See More</a>
            </p>
          </div>
          <div className="row_2_images">
            <img
              src="https://m.media-amazon.com/images/I/81eKY6HhVML._AC_SY200_.jpg"
              alt=""
            />
            <img
              src="https://m.media-amazon.com/images/I/81oztXbAKaL._AC_SY200_.jpg"
              alt=""
            />
            <img
              src="https://m.media-amazon.com/images/I/71DfbU8Sz3L._AC_SY200_.jpg"
              alt=""
            />
            <img
              src="https://m.media-amazon.com/images/I/81f9eHs-7xL._AC_SY200_.jpg"
              alt=""
            />
            <img
              src="https://m.media-amazon.com/images/I/71TB5Firh0L._AC_SY200_.jpg"
              alt=""
            />
            <img
              src="https://m.media-amazon.com/images/I/81DCi66EaxL._AC_SY200_.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
