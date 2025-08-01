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
            <div className="video-container mb-4 relative">
              <a
                href={`https://www.youtube.com/watch?v=${testimonial.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <img
                  src={testimonial.thumbnail}
                  alt={`${testimonial.name} Testimonial`}
                  className="w-full h-full object-cover rounded-xl"
                  style={{ aspectRatio: '9/16' }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-xl hover:bg-opacity-40 transition-all duration-300">
                  <div className="bg-red-600 rounded-full p-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
            <p className="font-semibold text-lg text-purple-900">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonial;
