"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-40 pb-8 sm:pb-10 md:pb-12 xl:pt-32 xl:pb-14 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-1 text-center xl:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-gray-900">
              We <span className="bg-customPurple bg-clip-text text-transparent">Transform</span>
              <br />
              Your Ideas into
              <br />
              Reality
            </h1>

            {/* Desktop Layout - Button and Text side by side (show only on xl and up) */}
            <div className="hidden xl:flex items-start gap-6">
              <Link href="/contact-us" className="bg-customPurple text-white px-8 py-4 rounded-lg text-lg font-medium transition-all hover:shadow-lg hover:scale-105 flex-shrink-0 inline-block text-center">
                Work with us
              </Link>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed flex-1">
                We make exceptional digital marketing, web & app development, consulting, for startups and enterprises.</p>
            </div>

            {/* Mobile Layout - Paragraph first, then button below (show for widths below xl) */}
            <div className="xl:hidden space-y-4 flex flex-col items-center">
              <p className="text-gray-600 text-sm leading-relaxed text-center max-w-[28rem]">
                We make exceptional digital marketing, web & app development, consulting, for startups and enterprises.
              </p>

              <Link href="/contact-us" className="bg-customPurple text-white px-6 py-3 rounded-lg text-base font-medium transition-all hover:shadow-lg hover:scale-105 mx-auto inline-block text-center">
                Work with us
              </Link>
            </div>
          </div>

          {/* Right Content - Static GIF replacement */}
          <div className="mt-20 order-1 xl:order-2 flex justify-center xl:justify-end">
            <div className="relative w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[460px] md:h-[460px]">
              <Image
                src="/assets/images/hero-animation.gif"
                alt="Digital solutions animation"
                fill
                sizes="(max-width: 640px) 260px, (max-width: 768px) 360px, (max-width: 1024px) 460px, 500px"
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      {/* No custom styles needed for GIF */}
    </div>
  );
}