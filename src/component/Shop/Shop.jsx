import React, { useEffect, useState } from 'react';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([]) 
    useEffect(()=>{
        fetch('products.json') 
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return ( 
        <div className='shop'>
            <div className="products">
                <h1>Products:{products.length}</h1>
            </div>
            <div className="shoppingCart"> 
            <h3>Shopping Cart</h3>

            </div>
        </div>
    );
};

export default Shop;