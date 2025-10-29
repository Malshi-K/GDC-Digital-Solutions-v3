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
          <div className="space-y-6 sm:space-y-8 order-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-gray-900">
              We <span className="bg-gradient-to-r from-customPurple to-customLightPurple bg-clip-text text-transparent">Transform</span>
              <br />
              Your Ideas into
              <br />
              Reality
            </h1>

            {/* Desktop Layout - Button and Text side by side */}
            <div className="hidden sm:flex items-start gap-6">
              <button className="bg-customPurple text-white px-8 py-4 rounded-lg text-lg font-medium transition-all hover:shadow-lg hover:scale-105 flex-shrink-0">
                Work with us
              </button>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed flex-1">
                We make exceptional digital marketing, web & app development, consulting, for startups and enterprises.</p>
            </div>

            {/* Mobile Layout - Paragraph first, then button below */}
            <div className="sm:hidden space-y-4 flex flex-col items-center">
              <p className="text-gray-600 text-sm leading-relaxed text-center max-w-[28rem]">
                Silicon is a leading full-service digital agency based in New York. We make mobile apps, websites & brands, that people appreciate all around the world.
              </p>
              
              <button className="bg-customPurple text-white px-6 py-3 rounded-lg text-base font-medium transition-all hover:shadow-lg hover:scale-105 mx-auto">
                Work with us
              </button>
            </div>
          </div>

          {/* Right Content - Animated Gradient Sphere */}
          <div className="mt-20 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]">
              {/* Gradient Sphere */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-600 opacity-80 animate-pulse"></div>
              
              {/* Spiral Lines Overlay */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="w-full h-full animate-spin-slow">
                  {/* Create spiral effect with multiple gradients */}
                  <div 
                    className="w-full h-full rounded-full"
                    style={{
                      background: `
                        repeating-conic-gradient(
                          from 0deg at 50% 50%,
                          transparent 0deg,
                          rgba(255, 255, 255, 0.1) 5deg,
                          transparent 10deg
                        ),
                        radial-gradient(circle at 30% 30%, 
                          #a754f3,
                          #b386fb 18%,
                          #beb7fb 37%,
                          #988df7 51%,
                          #7262f3 63%,
                          #905af1 75%,
                          #ae52f0 87%,
                          #8a2fd7 96%,
                          #670cbf 100%
                        )
                      `
                    }}
                  ></div>
                </div>
              </div>

              {/* Inner glow effect */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-300/50 to-pink-300/50 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}