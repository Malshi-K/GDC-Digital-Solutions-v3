'use client';

import React from 'react';

export default function DigitalAgencyHero() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 md:opacity-50"
        style={{
          backgroundImage: "url('https://coderthemes.com/silicon/assets/img/landing/digital-agency/hero-bg.svg')"
        }}
      ></div>
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-32 pb-8 sm:py-10 md:py-12 lg:py-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-gray-900">
              We <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Transform</span>
              <br />
              Your Ideas into
              <br />
              Reality
            </h1>

            {/* Desktop Layout - Button and Text side by side */}
            <div className="hidden sm:flex items-start gap-6">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all hover:shadow-lg hover:scale-105 flex-shrink-0">
                Work with us
              </button>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed flex-1">
                We make exceptional digital marketing, web & app development, consulting, for startups and enterprises.</p>
            </div>

            {/* Mobile Layout - Paragraph first, then button below */}
            <div className="sm:hidden space-y-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                Silicon is a leading full-service digital agency based in New York. We make mobile apps, websites & brands, that people appreciate all around the world.
              </p>
              
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg text-base font-medium transition-all hover:shadow-lg hover:scale-105">
                Work with us
              </button>
            </div>
          </div>

          {/* Right Content - GIF Animation */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] xl:h-[850px] flex items-end lg:items-center justify-center order-2 lg:-mr-32">
            <img
              src="/assets/images/hero.gif"
              alt="Animation"
              className="w-full h-full object-contain object-bottom lg:object-center max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-none lg:w-[80%] lg:h-[80%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}