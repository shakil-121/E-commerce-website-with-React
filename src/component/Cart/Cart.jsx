import React from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '../Cart/Cart.css'

const Cart = (props) => { 
    const cart=props.cart;
     console.log(cart)
    let total=0;  
    let shipping=0; 
    for(const product of cart)
    {
        total=total+product.price; 
        shipping=shipping+product.shipping; 

    } 
    let tax=total*10/100;//10% tax
    let grandTotal=total+shipping+tax;

    return ( 
        <div>
           <h3>Order Summary<FontAwesomeIcon icon={faShoppingCart} /></h3> 
           <div className="cart-body">
           <p>Selected Item: {cart.length} </p> 
           <p>Total Price: ${total.toFixed(2)} </p> 
           <p>Total Shipping: ${shipping.toFixed(2)}</p> 
           <p>Tax: ${tax.toFixed(2)}</p>  
           <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
           </div>
        </div>
    );
};

export default Cart;