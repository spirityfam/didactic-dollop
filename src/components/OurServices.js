import React from 'react';

const services = [
  {
    title: 'Weight Loss & Gain',
    desc: 'Two sides of the fitness journey, each requiring a strategic approach to achieve a healthy body composition.',
  },
  {
    title: 'Muscle Gain',
    desc: 'Balance protein, carbohydrates, and healthy fats to fuel workouts and promote muscle development.',
  },
  {
    title: "Kid's Nutrition",
    desc: 'Essential vitamins, minerals, and protein to support healthy growth and development and promote overall well-being in children.',
  },
  {
    title: 'Sleep & Stress Management',
    desc: 'Physical and Mental recovery, while effective stress management helps balance hormones and maintain emotional well-being.',
  },
  {
    title: 'Skin Care',
    desc: 'A personalized skincare routine, along with healthy lifestyle choices, can significantly enhance your skin\'s health and appearance.',
  },
  {
    title: 'Boost Energy',
    desc: 'Boosting energy levels naturally involves a combination of healthy habits that support both physical and mental well-being.',
  },
];

export default function OurServices() {
  return (
    <section id="ourservices" className="relative py-20 overflow-hidden" style={{ backgroundColor: '#22c55e' }}>
      {/* Decorative elements */}
      <div className="absolute top-8 left-8 w-24 h-24 opacity-20">
        <div className="w-full h-full border-3 border-white rounded-full"></div>
      </div>
      <div className="absolute bottom-8 right-8 w-20 h-20 opacity-20">
        <div className="w-full h-full border-3 border-white rounded-full"></div>
      </div>
      <div className="absolute top-1/2 left-4 w-12 h-12 opacity-25 transform -translate-y-1/2">
        <div className="w-full h-full bg-white rounded-full"></div>
      </div>
      <div className="absolute top-1/3 right-6 w-10 h-10 opacity-25">
        <div className="w-full h-full bg-white rounded-full"></div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 w-8 h-8 opacity-20">
        <div className="w-full h-full bg-white rounded-full"></div>
      </div>
      <div className="absolute top-1/4 right-1/4 w-6 h-6 opacity-20">
        <div className="w-full h-full bg-white rounded-full"></div>
      </div>
      
      {/* Additional geometric patterns */}
      <div className="absolute top-16 right-16 w-16 h-16 opacity-15 transform rotate-45">
        <div className="w-full h-full border-2 border-white"></div>
      </div>
      <div className="absolute bottom-16 left-16 w-12 h-12 opacity-15 transform -rotate-45">
        <div className="w-full h-full border-2 border-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Small heading */}
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-2 bg-white/20 text-white text-sm font-semibold rounded-full shadow-lg backdrop-blur-sm border border-white/30">
            What We Offer
          </span>
        </div>
        
        {/* Main heading */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center relative shadow-lg">
              <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Our Diet & Nutrition Services
            </h2>
          </div>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div 
              key={service.title} 
              className="rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(12px)'
              }}
            >
              {/* Pattern on each card */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <div className="w-full h-full bg-white rounded-full"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 leading-tight relative z-10">
                {service.title}
              </h3>
              <p className="text-white/90 text-base leading-relaxed relative z-10">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 