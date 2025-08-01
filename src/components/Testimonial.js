import React from "react";

const testimonials = [
  {
    name: "Rajan Handa",
    videoId: "yc8kqhQEfRQ",
    thumbnail: "/logo 2.png",
  },
  {
    name: "Diksha",
    videoId: "mvjXFphSUck",
    thumbnail: "/logo 2.png",
  },
  {
    name: "Geeta Devgan",
    videoId: "-xpELLzE6JQ",
    thumbnail: "/logo 2.png",
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
            <div className="video-container mb-4">
              <iframe
                src={`https://www.youtube.com/embed/${testimonial.videoId}?rel=0&modestbranding=1`}
                title={`${testimonial.name} Testimonial`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
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
