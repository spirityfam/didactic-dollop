import React from "react";

const testimonials = [
  {
    name: "Rohit M.",
    video: "yc8kqhQEfRQ"
  },
  {
    name: "Priya S.",
    video: "mvjXFphSUck"
  },
  {
    name: "Ayesha R.",
    video: "-xpELLzE6JQ"
  }
];

const Testimonial = () => (
  <section id="testimonial" className="w-full py-16 px-4 bg-white/70 backdrop-blur-md">
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 section-heading">Testimonials</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="testimonial-tile flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="video-wrapper mb-4 w-full">
              <iframe 
                src={`https://www.youtube.com/embed/${testimonial.video}`}
                title={`${testimonial.name} Testimonial`}
                className="w-full rounded-xl shadow-md"
                style={{ aspectRatio: '16/9', minHeight: '300px' }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="font-semibold text-lg text-purple-900">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonial; 