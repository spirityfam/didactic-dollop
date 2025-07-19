import React from "react";

const Footer = () => (
  <footer className="w-full py-8 px-4 flex flex-col items-center mt-8" style={{ backgroundColor: '#22c55e' }}>
    <p className="text-white text-sm">&copy; {new Date().getFullYear()} Spirity Wellness Club. All rights reserved.</p>
  </footer>
);

export default Footer; 