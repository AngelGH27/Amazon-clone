import React from "react";
import "./Product.css";
import { StateData } from "../StateProvider";

function Product({id,image,title,stars,sold,price,dis,per}) {

  const [{basket},dispatch]=StateData();

  function addtobasket(){
         dispatch({
           type:"Add_to_basket",
           item:{
             id:id,
             image:image,
             title:title,
             stars:stars,
             price:price
           }
         })
  }

  return (
    <div className="product">
      <img src={image}></img>
      <div className="product_info">
        <p>{title}</p>
        <div className="product_rating">
            {Array(stars).fill().map((_,i)=>{
                return <span>⭐</span>
            })}
          <span className="sold">{sold}</span>
        </div>
        <div className="deal_of_the_day">DEAL OF THE DAY</div>
        <br></br>
        <sup>$</sup>
        <span className="price">{price}</span>
        <sup>00</sup>
        <p className="discount">
          M.R.P.: <strike>${dis} </strike> ({per}% off)
        </p>
        <div className="product_extra">
          <span className="fullfilled">
            <img src="https://icon-library.com/images/amazon-icon/amazon-icon-23.jpg"></img>
            Fulfilled
          </span>
          <span className="delivery">FREE Delivery.</span> <a href="#">Details</a>
        </div>
      </div>
      <button onClick={addtobasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
