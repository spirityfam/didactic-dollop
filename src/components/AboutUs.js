import React from 'react';

const features = [
  'Personalized Nutrition Plans',
  'Progress Tracking',
  'One‑on‑One Coaching & Support',
  'Health Education',
  'Reminders and Notifications',
  'Fitness Guidance',
];

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle mr-1">
      <rect width="24" height="24" rx="6" fill="#2fb49b"/>
      <path d="M7 13.5L10.5 17L17 10.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function AboutUs() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        {/* Left Image with Brush Stroke */}
        <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 550 }}>
          <div
            style={{
              position: 'absolute',
              top: -20,
              left: -20,
              width: '120%',
              height: '120%',
              background: "url('/assets/brush-stroke.svg') no-repeat center center",
              backgroundSize: 'contain',
              zIndex: -1,
              animation: 'pulse 5s ease-in-out infinite',
            }}
          />
          <img src="/assets/about-indian-woman.jpg" alt="Smiling Indian Woman" className="rounded-lg shadow-lg w-full" />
        </div>

        {/* Right Text Content */}
        <div className="flex-1">
          <p className="text-green-600 font-medium mb-2">About Us</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">Unlock Your Full Potential<br />With Our Support</h2>
          <p className="text-gray-500 mb-6 text-lg max-w-xl">
            Welcome to Spirity, your trusted wellness partner! We are passionate about helping individuals like you achieve a healthier, happier lifestyle through personalized nutrition, expert guidance, and consistent support.
          </p>

          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 text-base">
            {features.map((feature, idx) => (
              <div className="flex items-center gap-2" key={feature}>
                <CheckIcon />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 