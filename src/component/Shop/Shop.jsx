import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons' 
import './Shop.css'

import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products,setProducts]=useState([]) 
    useEffect(()=>{
        fetch('products.json') 
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]) 


    const [cart,setCart]=useState([]);
    const addToCart=(product)=>{ 
        const newCart=[...cart,product]
        setCart(newCart);
    }

    return ( 
        <div>
            <h2 style={{textAlign:'center',color:'#000'}}>ALL PRODUCT</h2>
            
            
             <div className='shop'> 
                 <div className="products">
            {
                products.map(product=><Product
                key={product.id} 
                product={product} 
                addToCart={addToCart}
                ></Product>)
            }
            </div>
            <div className="shoppingCart">  
            {/* <p>Add Product: {cart.length}</p>  */}
                  <Cart cart={cart}></Cart>
                 </div>
             </div>
        </div>
        
    );
};

export default Shop;