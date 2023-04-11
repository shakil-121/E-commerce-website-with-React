import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons' 
import './Shop.css'

import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import HeroSection from '../Hero-section/HeroSection';

const Shop = () => {
    const [products,setProducts]=useState([]) 
    useEffect(()=>{
        fetch('products.json') 
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]) 

    useEffect(()=>{
        const storedcart=getShoppingCart();  
        // to get the product by id into LocalStorage 
        // step 1 : get id 
        const saveCart=[];
       for(const id in storedcart) 
       { 
           //step 2 get the product by using id 
           let addedProduct=products.find(product=> product.id === id); 
           console.log('added',addedProduct)
            //step 3 quntity of the product 
            if(addedProduct)
            {
            const quantity =storedcart[id]; 
            addedProduct.quantity=quantity;   
            // step 4 add the addedProduct to the save cart
            saveCart.push(addedProduct)
            } 
            // console.log('added product',addedProduct);
       }  
    //  step 5  set to cart  
       setCart(saveCart);

    },[products])

    const [cart,setCart]=useState([]); 

    const addToCart=(product)=>{  
        // first option 
        // const newCart=[...cart,product] 

    //  2nd option 
        // if product does not exist in the cart , then set quantity= 1 
        //if exist update quantity by 1
     let newCart=[]
      const exist=cart.find(pd =>pd.id === product.id); 
      if(!exist)
      {
        product.quantity=1; 
        newCart=[...cart,product]
      } 
      else{ 
         exist.quantity=exist.quantity+1; 
         const remainig=cart.filter(pd=>pd.id !== product.id); 
         newCart=[...remainig,exist]
      }


        setCart(newCart); 
        addToDb(product.id);
    } 

    const handleClearCart=()=>{ 
        setCart([]);
        deleteShoppingCart();
    }

    return ( 
        <div> 
            {/* Hero section  */} 
            <HeroSection></HeroSection>  
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
                  <Cart cart={cart}
                   handleClearCart={handleClearCart}
                  ></Cart>
                 </div>
             </div>
        </div>
        
    );
};

export default Shop;