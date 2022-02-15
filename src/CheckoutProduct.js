import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvidre';

function CheckoutProduct( {id, title, image, price, rating}) {
  const [{basket}, dispatch]= useStateValue();
  const removeFromBasket=()=>{
    //remmove itam from baskmat
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id:id, 
    })
  }
  return(
       <div className="checkoutproduct">
           <img className="checkoutproduct__image" src={image}
           />
        <div className="checkoutproduct__info">
           <p className="checkoutproduct__titel">{title}</p> 
           <p className="checkoutproduct__price">
               <small>$</small>
               <strong>{price}</strong>
           </p>
           <div className="checkoutproduct__rating">
               {Array(rating)
               .fill()
               .map((_, i)=>(
               <p>*</p>
               ))}
            </div> 
            <button onClick={removeFromBasket}>Remove from Basket</button>


  </div>
  </div>
  );
}

export default CheckoutProduct;

