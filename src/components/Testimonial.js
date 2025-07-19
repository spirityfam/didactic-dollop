import React from "react";

const testimonials = [
  {
    name: "Rohit M.",
    video: "/testimonial1.mp4",
    poster: "/your-uploaded-image.jpg"
  },
  {
    name: "Priya S.",
    video: "/testimonial1.mp4",
    poster: "/your-uploaded-image.jpg"
  },
  {
    name: "Ayesha R.",
    video: "/testimonial1.mp4",
    poster: "/your-uploaded-image.jpg"
  }
];

const Testimonial = () => (
  <section id="testimonial" className="w-full py-16 px-4 bg-white/70 backdrop-blur-md">
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 section-heading">Testimonial</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="testimonial-tile flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="video-wrapper mb-4 w-full">
              <video 
                src={testimonial.video} 
                controls 
                playsInline 
                poster={testimonial.poster} 
                className="w-full rounded-xl shadow-md"
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