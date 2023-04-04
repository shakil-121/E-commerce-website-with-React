import React from 'react';
import './HeroSection.css'; 
import hero from '../../images/hero.jpg'

const HeroSection = () => {
    return (
        <div className='hero-section'>
            <div className="left-side">
               <p><small>Sale up to 70% off</small></p> 
               <h1>New Collection For Fall</h1> 
               <p>Discover all the new arrivals of ready-to-wear collection.</p> 
               <button>SHOP NOW</button>
            </div>
            <div className="right-side">
              <img src={hero} alt="" srcset="" />
            </div>
        </div>
    );
};

export default HeroSection;