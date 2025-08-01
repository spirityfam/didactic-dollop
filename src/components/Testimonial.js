import React from "react";

const testimonials = [
  {
    name: "Rajan Handa",
    link: "https://www.youtube.com/shorts/yc8kqhQEfRQ",
    thumbnail: "/logo.png",
  },
  {
    name: "Diksha",
    link: "https://www.youtube.com/shorts/mvjXFphSUck",
    thumbnail: "/logo.png",
  },
  {
    name: "Geeta Devgan",
    link: "https://www.youtube.com/shorts/-xpELLzE6JQ",
    thumbnail: "/logo.png",
  },
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
            <a
              href={testimonial.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mb-4 rounded-xl overflow-hidden"
            >
              <img
                src={testimonial.thumbnail}
                alt={`${testimonial.name} thumbnail`}
                className="w-full rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                style={{ aspectRatio: '9/16', objectFit: 'cover' }}
              />
            </a>
            <p className="font-semibold text-lg text-purple-900">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonial;
