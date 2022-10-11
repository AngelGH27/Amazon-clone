import React from 'react'
import "./CheckOutProduct.css"
import { StateData } from "../StateProvider";

function CheckOutProduct({id,image,title,stars,price}) {
    const [{basket},dispatch]=StateData();

    function removeItem(){
        dispatch({
            type:"remove",
            id:id
        })
    }
  return (
    <div className='checkout_product'>
        <img src={image}/>
        <div className='checkout_product_details'>
            <p>{title}</p>
            <div className='stars'>{Array(stars).fill().map((_,i)=>{return <span>⭐</span>})}</div>
            <span className="price">${price}</span>
            <button onClick={removeItem}>Remove From Basket</button>
        </div>
    </div>
  )
}

export default CheckOutProduct