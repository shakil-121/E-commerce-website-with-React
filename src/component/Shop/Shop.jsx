import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
const Shop = () => {
    const [products,setProducts]=useState([]) 
    useEffect(()=>{
        fetch('products.json') 
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return ( 
        <div>
            <h2 style={{textAlign:'center',color:'#000'}}>ALL PRODUCT</h2>
             <div className='shop'> 
                 <div className="products">
            {
                products.map(product=><Product
                key={product.id} 
                product={product}
                ></Product>)
            }
            </div>
            <div className="shoppingCart"> 
            <h3>Shopping Cart</h3>
                 </div>
             </div>
        </div>
        
    );
};

export default Shop;