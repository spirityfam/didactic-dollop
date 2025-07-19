import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import OurPlatforms from './components/OurPlatforms';
import Testimonial from './components/Testimonial';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import FloatingSocial from './components/FloatingSocial';
import './App.css';

function App() {
  return (
    <div className="App bg-gradient-to-br from-purple-50 to-white min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <OurServices />
      <OurPlatforms />
      <Testimonial />
      <ContactUs />
      <Footer />
      <FloatingSocial />
    </div>
  );
}

export default App;
