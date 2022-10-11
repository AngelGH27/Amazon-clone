import React from 'react'
import Subtotal from '../subtotal/Subtotal'
import './Checkout.css'
import { StateData } from "../StateProvider";
import CheckOutProduct from '../checkoutproduct/CheckOutProduct';
import EmptyBucket from '../checkoutproduct/EmptyBucket';

function Checkout() {

  const [{basket},dispatch]=StateData();
  return (
     basket.length<1?<EmptyBucket/>:
    <div className='checkout_page'>
      
        <div className="checkout_left">
            <h2 className="checkout_title">
                Your Shopping Basket
            </h2>
            {basket.map((item)=>{
              return (
                <CheckOutProduct
                 id={item.id}
                 title={item.title}
                 price={item.price}
                 image={item.image}
                 stars={item.stars}
                />
              )
            })}
        </div>
        <div className="checkout_right">
            <Subtotal/>
        </div></div>
    
  )
}

export default Checkout