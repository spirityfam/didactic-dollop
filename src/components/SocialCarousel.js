import React, { useState } from 'react';

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/spirityfam/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
    handle: '@spirityfam',
    color: 'bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/Spirityfam',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
    handle: '@spirityfam',
    color: 'bg-blue-600',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@spirityfam/shorts',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg',
    handle: '@spirityfam',
    color: 'bg-red-600',
  },
];

export default function SocialCarousel() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((current - 1 + socialLinks.length) % socialLinks.length);
  const next = () => setCurrent((current + 1) % socialLinks.length);

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center relative">
      <div className="w-full flex items-center justify-center">
        <button
          onClick={prev}
          className="hidden md:block absolute left-0 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
          aria-label="Previous"
        >
          <span className="fas fa-chevron-left text-2xl text-gray-500"></span>
        </button>
        <div className="w-full flex flex-col items-center bg-white rounded-2xl border border-gray-200 shadow p-6">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${socialLinks[current].color}`}>
            <img src={socialLinks[current].logo} alt={socialLinks[current].name + ' logo'} className="w-10 h-10 object-contain" />
          </div>
          <div className="font-bold text-lg mb-1">{socialLinks[current].name}</div>
          <div className="text-gray-500 mb-4">{socialLinks[current].handle}</div>
          <a
            href={socialLinks[current].url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white rounded-full font-bold py-2 px-6 shadow hover:bg-green-600 transition text-base"
          >
            View Profile
          </a>
        </div>
        <button
          onClick={next}
          className="hidden md:block absolute right-0 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
          aria-label="Next"
        >
          <span className="fas fa-chevron-right text-2xl text-gray-500"></span>
        </button>
      </div>
      <div className="flex gap-2 mt-4">
        {socialLinks.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-primary' : 'bg-gray-300'}`}
            aria-label={`Go to ${socialLinks[idx].name}`}
          />
        ))}
      </div>
    </div>
  );
} 