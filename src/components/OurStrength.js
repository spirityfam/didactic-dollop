import React from 'react';

const strengths = [
  {
    img: '/assets/strength1.jpg',
    title: 'Your Body Changing With weight loss program',
    desc: '',
  },
  {
    img: '/assets/strength2.jpg',
    title: '',
    desc: '',
  },
  {
    img: '/assets/strength3.jpg',
    title: '',
    desc: '',
  },
];

export default function OurStrength() {
  return (
    <section className="bg-accent">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-dark">Your Body Changing With weight loss program</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {strengths.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow p-4 flex flex-col items-center w-72">
              <img src={item.img} alt={item.title || 'Strength'} className="w-full h-48 object-cover rounded-xl mb-4" />
              {item.title && <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>}
              {item.desc && <p className="text-gray-600 text-base">{item.desc}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 