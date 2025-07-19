import React from "react";

const Hero = () => (
  <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#22c55e' }}>
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full py-24 px-4 text-center" data-aos="fade-up">
      <img src="/logo.png" alt="Spirity Logo" className="w-32 md:w-40 mb-6 mx-auto" style={{ filter: 'brightness(0) invert(1)' }} />
      <h1 className="text-white font-extrabold text-3xl md:text-5xl mb-6 drop-shadow-lg">
        Welcome to Spirity Wellness Club
      </h1>
      <a
        href="#about"
        className="text-lg mt-6 px-8 py-4 font-semibold text-white bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
      >
        Get Started
      </a>
    </div>
  </section>
);

export default Hero; 