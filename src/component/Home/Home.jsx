import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import HeroSection from '../Hero-section/HeroSection';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            {/* header section  */} 
      <Header></Header> 
      

       <Outlet></Outlet>

       {/* footer section  */} 
      <Footer></Footer>
        </div>
    );
};

export default Home;