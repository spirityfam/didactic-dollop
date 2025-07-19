import React from 'react';

const contactInfo = [
  {
    icon: "fas fa-user",
    heading: "Experience",
    value: "7 Years of Experience"
  },
  {
    icon: "fas fa-envelope",
    heading: "Email Address",
    value: "spirityfam@gmail.com"
  },
  {
    icon: "fas fa-phone",
    heading: "Phone Number",
    value: "9958715050"
  },
  {
    icon: "fas fa-map-marker-alt",
    heading: "Address",
    value: "Vasundhara and Indrapuram"
  }
];

export default function ContactUs() {
  const handleBookCall = () => {
    window.open('https://calendly.com/spirityfam/30min?month=2025-07', '_blank');
  };

  const handleSocialClick = (platform) => {
    const urls = {
      facebook: 'https://www.facebook.com/Spirityfam',
      instagram: 'https://www.instagram.com/spirityfam/',
      whatsapp: 'https://wa.me/919958715050',
      youtube: 'https://www.youtube.com/@spiritywellness'
    };
    window.open(urls[platform], '_blank');
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to start your wellness journey? Contact us today and let's begin your transformation together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Left Section - Contact Info & Social */}
          <div className="space-y-8">
            {/* Spirity Wellness Center Info */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Spirity Wellness Center
              </h3>
            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-gray-50">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className={`${info.icon} text-green-600 text-lg`}></i>
                  </div>
                  <h3 className="text-gray-500 text-sm font-medium mb-1">{info.heading}</h3>
                  <p className="text-gray-900 font-semibold">{info.value}</p>
                </div>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="text-center lg:text-left">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex justify-center lg:justify-start gap-4">
                {/* Facebook */}
                <button
                  onClick={() => handleSocialClick('facebook')}
                  className="w-12 h-12 bg-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
                  aria-label="Follow us on Facebook"
                >
                  <i className="fab fa-facebook-f text-white text-xl"></i>
                </button>

                {/* Instagram */}
                <button
                  onClick={() => handleSocialClick('instagram')}
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
                  aria-label="Follow us on Instagram"
                >
                  <i className="fab fa-instagram text-white text-xl"></i>
                </button>

                {/* WhatsApp */}
                <button
                  onClick={() => handleSocialClick('whatsapp')}
                  className="w-12 h-12 bg-green-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
                  aria-label="Chat with us on WhatsApp"
                >
                  <i className="fab fa-whatsapp text-white text-xl"></i>
                </button>

                {/* YouTube */}
                <button
                  onClick={() => handleSocialClick('youtube')}
                  className="w-12 h-12 bg-red-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
                  aria-label="Subscribe to our YouTube"
                >
                  <i className="fab fa-youtube text-white text-xl"></i>
                </button>
              </div>
            </div>

            {/* Book a Free Call Button */}
            <div className="text-center lg:text-left">
              <button
                onClick={handleBookCall}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                BOOK A FREE CALL
              </button>
            </div>
          </div>

          {/* Right Section - Google Map */}
          <div className="space-y-6">
            {/* Map Container */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-80 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.3713!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMjInMTYuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Spirity Wellness Center Location"
                ></iframe>
              </div>
            </div>

            {/* Map Info Card */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Visit Our Centers</h4>
                  <p className="text-gray-700 mb-3">
                    Located in Vasundhara and Indrapuram, our wellness centers are easily accessible and ready to welcome you.
                  </p>
                  <button
                    onClick={() => window.open('https://maps.app.goo.gl/KXbf9p5Hjov8pGqz8', '_blank')}
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors"
                  >
                    <i className="fas fa-directions mr-2"></i>
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 