import React, { useState } from "react";

const platforms = [
  {
    title: "Physical Wellness Centers",
    desc: "Visit our physical Spirity Wellness Centers for body analysis, personalized consultations, and community wellness sessions.",
    videoUrl: "/testimonial1.mp4",
    name: "Vasundhara Center"
  },
  {
    title: "Virtual Wellness Club",
    desc: "Join live Zoom-based coaching from anywhere in the world. Get expert guidance, real-time meal tracking, and daily motivation.",
    videoUrl: "/testimonial1.mp4",
    name: "Online Platform"
  },
  {
    title: "10-Days Transformation Challenge",
    desc: "Join our popular 10-day fitness bootcamp on Telegram. Enjoy curated nutrition plans, workout videos, and group motivation.",
    videoUrl: "/testimonial1.mp4",
    name: "Telegram Group"
  }
];

const OurPlatforms = () => {
  const [expandedDesc, setExpandedDesc] = useState(null);
  const [playingVideos, setPlayingVideos] = useState({});

  const handleJoinNow = (platform) => {
    window.open('https://calendly.com/spirityfam/30min?month=2025-07', '_blank');
  };

  const handleVideoClick = (index) => {
    const videoElement = document.getElementById(`platform-video-${index}`);
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
        setPlayingVideos(prev => ({ ...prev, [index]: true }));
      } else {
        videoElement.pause();
        setPlayingVideos(prev => ({ ...prev, [index]: false }));
      }
    }
  };

  const toggleDescription = (index) => {
    setExpandedDesc(expandedDesc === index ? null : index);
  };

  return (
    <section id="platforms" className="w-full py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Platforms</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {platforms.map((platform, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              data-aos="fade-up" 
              data-aos-delay={100 * idx}
            >
              {/* Video Player Section */}
              <div className="relative">
                <video 
                  id={`platform-video-${idx}`}
                  src={platform.videoUrl} 
                  className="w-full h-48 object-cover cursor-pointer"
                  preload="metadata"
                  onClick={() => handleVideoClick(idx)}
                />
                
                {/* Play Button Overlay */}
                {!playingVideos[idx] && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
                    onClick={() => handleVideoClick(idx)}
                  >
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-0 h-0 border-l-[12px] border-l-green-500 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {platform.title}
                </h3>
                
                {/* Platform Name */}
                <p className="text-purple-600 font-semibold text-center mb-4">
                  {platform.name}
                </p>
                
                {/* Description with Touch to Expand */}
                <div className="mb-6">
                  <div 
                    className="text-gray-600 text-sm leading-relaxed cursor-pointer"
                    onClick={() => toggleDescription(idx)}
                  >
                    {expandedDesc === idx ? (
                      <span>{platform.desc}</span>
                    ) : (
                      <span>
                        {platform.desc.length > 80 
                          ? `${platform.desc.substring(0, 80)}...` 
                          : platform.desc
                        }
                        {platform.desc.length > 80 && (
                          <span className="text-green-500 font-medium"> (Tap to read more)</span>
                        )}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Join Now Button */}
                <div className="text-center">
                  <button
                    onClick={() => handleJoinNow(platform.title)}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPlatforms; 