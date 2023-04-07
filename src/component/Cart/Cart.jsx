import React from 'react';  
import Lottie from "lottie-react";
import cartAnimation from "../../assets/116422-shopping-cart.json"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '../Cart/Cart.css'

const Cart = (props) => { 
    const cart=props.cart;
     console.log(cart)
    let total=0;  
    let shipping=0;   
    let quantity=0;
    for(const product of cart)
    {  
        // this condition set quantity when you add first time ,then product quantity is 0 ,so that we set product quantity 1 and it's work (this is a optional solution)
        
        // if(product.quantity===0) 
        // { 
        //     product.quantity=1;
        // }
        total=total+product.price*product.quantity; 
        shipping=shipping+product.shipping; 
        quantity=quantity+product.quantity; 

    } 
    let tax=total*10/100;//10% tax
    let grandTotal=total+shipping+tax;

    return ( 
        <div>
           <h3>Order Summary<FontAwesomeIcon icon={faShoppingCart} /></h3> 
           <div className="cart-body">
           <p>Selected Item: {quantity} </p> 
           <p>Total Price: ${total.toFixed(2)} </p> 
           <p>Total Shipping: ${shipping.toFixed(2)}</p> 
           <p>Tax: ${tax.toFixed(2)}</p>  
           <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
           </div> 
           <Lottie className='cartAnimation' animationData={cartAnimation} loop={true} />
        </div>
    );
};

export default Cart;