import React from 'react';
import './Product.css'
const Product = (props) => { 
    const {name,price,img,seller,ratings}=props.product;
    return (
        <div className='productCard'>
            <img  src={img} alt="" srcset="" /> 
            <div className='product_info'>
            <h4>{name}</h4> 
            <h4>Price: ${price}</h4> 
            <p>Manufacturer: {seller}</p>  
            <p>Rating: {ratings} Stars</p> 
            </div>
            <button className='btn'>Add to Cart</button>
         </div>
    );
};

export default Product;