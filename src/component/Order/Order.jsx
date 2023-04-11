import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => { 
    const cart=useLoaderData() 
    // console.log(cart)
    const [iteam,setIteam]=useState(cart) ;

    const removeIteamhandle=(id)=>{ 
       const remaining=iteam.filter(product=>product.id !==id); 
       setIteam(remaining); 
       removeFromDb(id);
    }
    return (
        <div> 
            <div className="shop">
                <div className="">
                     { 
                     iteam.map(product=><ReviewItem
                     key={product.id} 
                     product={product} 
                     removeIteamhandle={removeIteamhandle}
                     ></ReviewItem>)
                     }
                </div> 
                <div className="shoppingCart"> 
                  <Cart cart={iteam}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;