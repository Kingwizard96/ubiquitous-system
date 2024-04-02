import React from 'react';
import './index.css';
// import CustomCarousel from './components/Carousel';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Notification from './components/Notification';
// import Hero from './components/Hero';
 {/* this is written using tailwind */}
import Contact from './pages/Contact';

export default function HeroSection() {
  return (
    <>
    <Notification />
    <Navbar />
    <Contact />
    {/* <Hero /> */}
    {/* <CustomCarousel /> */}
    {/* Other components and content */}
  
  <Footer />
  </>
);
}

