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
    desc: 'Essential vitamins, minerals, and protein support healthy growth, development, and overall well-being in children.',
  },
  {
    title: 'Sleep & Stress Management',
    desc: 'Physical and mental recovery, while effective stress management helps balance hormones and maintain emotional well‑being.',
  },
  {
    title: 'Skin Care',
    desc: 'A personalized skin‑care routine, along with healthy lifestyle choices, can significantly enhance your skin\'s health and appearance.',
  },
  {
    title: 'Boost Energy',
    desc: 'Boosting energy levels naturally involves a combination of healthy habits that support both physical and mental well‑being.',
  },
];

export default function OurServices() {
  return (
    <section id="ourservices" className="relative py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 overflow-hidden">
      {/* Enhanced background pattern - much more visible */}
      <div className="absolute inset-0 opacity-60" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(251, 191, 36, 0.3) 0%, transparent 40%),
          radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.3) 0%, transparent 40%),
          radial-gradient(circle at 40% 60%, rgba(251, 191, 36, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 60% 40%, rgba(245, 158, 11, 0.2) 0%, transparent 50%),
          linear-gradient(45deg, transparent 30%, rgba(251, 191, 36, 0.15) 50%, transparent 70%),
          linear-gradient(-45deg, transparent 30%, rgba(245, 158, 11, 0.15) 50%, transparent 70%)
        `,
        backgroundSize: '150px 150px, 200px 200px, 180px 180px, 220px 220px, 120px 120px, 160px 160px'
      }}></div>
      
      {/* More visible dot pattern overlay */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* More prominent decorative elements */}
      <div className="absolute top-8 left-8 w-24 h-24 opacity-20">
        <div className="w-full h-full border-3 border-amber-400 rounded-full"></div>
      </div>
      <div className="absolute bottom-8 right-8 w-20 h-20 opacity-20">
        <div className="w-full h-full border-3 border-orange-400 rounded-full"></div>
      </div>
      <div className="absolute top-1/2 left-4 w-12 h-12 opacity-25 transform -translate-y-1/2">
        <div className="w-full h-full bg-amber-300 rounded-full"></div>
      </div>
      <div className="absolute top-1/3 right-6 w-10 h-10 opacity-25">
        <div className="w-full h-full bg-orange-300 rounded-full"></div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 w-8 h-8 opacity-20">
        <div className="w-full h-full bg-yellow-300 rounded-full"></div>
      </div>
      <div className="absolute top-1/4 right-1/4 w-6 h-6 opacity-20">
        <div className="w-full h-full bg-amber-300 rounded-full"></div>
      </div>
      
      {/* Additional geometric patterns */}
      <div className="absolute top-16 right-16 w-16 h-16 opacity-15 transform rotate-45">
        <div className="w-full h-full border-2 border-orange-300"></div>
      </div>
      <div className="absolute bottom-16 left-16 w-12 h-12 opacity-15 transform -rotate-45">
        <div className="w-full h-full border-2 border-amber-300"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Small teal heading */}
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-2 bg-teal-500 text-white text-sm font-semibold rounded-full shadow-lg">
            What We Offer
          </span>
        </div>
        
        {/* Main heading with apple graphic */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex items-center gap-4">
            {/* Apple graphic */}
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center relative shadow-lg">
              <div className="w-8 h-8 bg-red-400 rounded-full"></div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-green-600 rounded-full"></div>
              {/* Yellow measuring tape */}
              <div className="absolute inset-0 border-2 border-yellow-400 rounded-full"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Our Diet & Nutrition Services
            </h2>
          </div>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div 
              key={service.title} 
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
                border: '1px solid rgba(0,0,0,0.05)'
              }}
            >
              {/* More visible pattern on each card */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <div className="w-full h-full bg-gradient-to-br from-amber-300 to-orange-300 rounded-full"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight relative z-10">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed relative z-10">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 