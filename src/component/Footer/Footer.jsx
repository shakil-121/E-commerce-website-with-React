import React from 'react';  
import '../Footer/Footer.css'; 
import logo from '../../images/Shakil - mart.png'

const Footer = () => {
    return (
        <div className='footer'>
           <img src={logo} alt="" srcset="" /> 
           <p>Happy Shopping , Happy Life with SHAKIL-MART</p> 
        </div>
    );
};

export default Footer;