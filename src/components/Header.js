import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 70;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'ourservices' },
    { name: 'Our Platforms', id: 'platforms' },
    { name: 'Testimonials', id: 'testimonial' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      style={{ backgroundColor: '#d4eb97' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section - Left Side */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center cursor-pointer transition-transform hover:scale-105"
            >
              <img 
                src="/logo.png" 
                alt="Spirity - The Spirit of Wellness" 
                className="h-12 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
                onError={(e) => {
                  // Fallback to text if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="flex flex-col items-start text-white" style={{ display: 'none' }}>
                <span className="text-xs font-medium leading-tight mb-0.5">SPIRITY</span>
                <span className="text-2xl font-bold leading-none mb-0.5">S</span>
                <span className="text-xs font-medium leading-tight">THE SPIRIT OF WELLNESS</span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                          <div 
                className="rounded-full px-8 py-3 flex items-center gap-6 transition-all duration-300 hover:shadow-inner"
                style={{
                  background: 'rgba(255, 255, 255, 0.25)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  boxShadow: 'inset 0 2px 8px rgba(255, 255, 255, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(12px)'
                }}
              >
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="relative font-semibold transition-all duration-300 hover:opacity-80 hover:scale-105"
                  style={{
                    color: '#2c4e2d',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '14px',
                    letterSpacing: '0.02em'
                  }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button - Right Side */}
          <div className="flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div 
              className="rounded-2xl py-4 flex flex-col gap-1 transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                boxShadow: 'inset 0 2px 8px rgba(255, 255, 255, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(12px)'
              }}
            >
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-6 py-3 font-semibold transition-all duration-300 hover:bg-white/20 rounded-xl mx-2"
                  style={{
                    color: '#2c4e2d',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '14px'
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 