import React from 'react';
import logo from '../../images/Shakil - mart.png' 
import './Header.css'

const Header = () => {
    return (
        <div className='header'> 
        <img src={logo} alt='logo'/>
            <nav className='navbar'>
                <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </nav>
        </div>
    );
};

export default Header;