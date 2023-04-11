import React, { useState } from 'react';
import logo from '../../images/Shakil - mart.png' 
import './Header.css' 
import { Bars4Icon,XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Header = () => { 
    const [open,setOpen]=useState(false)
    return (
        <div className='header'>  
         {/* <div onClick={()=>{setOpen(!open)}} className='md:hidden'>
            <span>
                {
                    open === true ? <XMarkIcon className="h-6 w-6 text-blue-500" />: <Bars4Icon className="h-6 w-6 text-blue-500" /> 
                    
                    
                }
            </span>
         </div> */}

        <img src={logo} alt='logo'/>
            <nav className='navbar'> 

                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/order-review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
            </nav>
        </div>
    );
};

export default Header;