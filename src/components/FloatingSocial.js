import React from 'react';

const FloatingSocial = () => {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/spirityfam/', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919958715050', '_blank');
  };

  return (
    <>
      {/* Instagram Button - Bottom Left Corner */}
      <button
        onClick={handleInstagramClick}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
        aria-label="Follow us on Instagram"
      >
        <i className="fab fa-instagram text-white text-2xl"></i>
        <span className="absolute left-16 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Follow us on Instagram
        </span>
      </button>

      {/* WhatsApp Button - Bottom Right Corner */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
        aria-label="Chat with us on WhatsApp"
      >
        <i className="fab fa-whatsapp text-white text-2xl"></i>
        <span className="absolute right-16 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us on WhatsApp
        </span>
      </button>
    </>
  );
};

export default FloatingSocial; 