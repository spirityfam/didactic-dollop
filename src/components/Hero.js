import React from "react";

const Hero = () => (
  <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden">
    <video
      className="absolute inset-0 w-full h-full object-cover z-0"
      src="/your-hero-video.mp4"
      autoPlay
      loop
      muted
      playsInline
      poster="/your-uploaded-image.jpg"
    />
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40 backdrop-blur-sm py-24 px-4 text-center" data-aos="fade-up">
      <img src="/logo.png" alt="Spirity Logo" className="w-32 md:w-40 mb-6 mx-auto" />
      <h1 className="text-white font-extrabold text-3xl md:text-5xl mb-6 drop-shadow-lg">
        Welcome to Spirity Wellness Club
      </h1>
      <a
        href="#about"
        className="glassy-button text-lg mt-2"
      >
        Get Started
      </a>
    </div>
  </section>
);

export default Hero; 