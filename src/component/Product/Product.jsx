import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => { 
    const {name,price,img,seller,ratings}=props.product;
    const addToCart=props.addToCart;
    
    return (
        <div className='productCard'>
            <img  src={img} alt="" srcset="" /> 
            <div className='product_info'>
            <h4>{name}</h4> 
            <h4>Price: ${price}</h4> 
            <p>Manufacturer: {seller}</p>  
            <p>Rating: {ratings} Stars</p> 
            </div>
            <button onClick={()=>addToCart(props.product)} className='btn'>Add to Cart
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
         </div>
    );
};

export default Product;