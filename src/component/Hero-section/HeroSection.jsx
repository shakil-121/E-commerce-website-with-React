import React from 'react';
import Lottie from "lottie-react";
import animation from "../../assets/84631-team-ecommerce.json";
import './HeroSection.css'; 
import banner from '../../images/SHAKIL MART.png'

const HeroSection = () => {
    return ( 
        <div>
            <div className='hero-section'>
            <div className="left-side">
               <h1><small>Sale up to <span>70%</span> off</small></h1> 
               <h1>New Collection For Eid</h1> 
               <p>Discover all the new arrivals of ready-to-wear collection.</p> 
               <button>SHOP NOW</button>
            </div>
            <div className="right-side">
              {/* <img src={hero} alt="" srcset="" />  */}
              <Lottie className='animation' animationData={animation} loop={true} />;
            </div>
        </div>
        <div className='banner'>
        <img src={banner} alt="" srcset="" />
        </div>
        </div>
        
    );
};

export default HeroSection;