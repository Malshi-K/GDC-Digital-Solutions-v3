"use client";
import { useRef, useState, useEffect } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import TrackedPhoneLink from '@/components/TrackedPhoneLink';

export default function FBClosingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gray-200"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-customPurple opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-customPurple opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-customLightGray backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center">
            {/* Left content */}
            <div 
              className={`md:w-2/3 md:pr-8 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } transition-all duration-700 ease-out`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get Started with GDC Digital Solutions Today!
              </h2>
              <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                Ready to scale your business with Facebook Ads? Let&apos;s create a high-performance ad campaign that drives sales, leads, and brand awareness in New Zealand.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed md:mb-0 mb-8">
                Contact Us today to grow your business with expert Facebook advertising in NZ!
              </p>
            </div>
            
            {/* Right content with CTA */}
            <div 
              className={`md:w-1/3 flex justify-center md:justify-end transform ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              } transition-all duration-700 ease-out`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="bg-customPurple rounded-xl p-6 backdrop-blur-sm border border-gray-700 shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Ready for more leads?</h3>
                <p className="text-gray-300 mb-6">Our Facebook Ads experts are ready to help your business reach its full potential.</p>
                <a 
                  href="/contact-us" 
                  className="group inline-flex items-center justify-center gap-2 bg-white text-customPurple font-semibold py-3 px-6 rounded-lg w-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-customPurple/30"
                >
                  Start Your Campaign Now
                  <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <div className="flex justify-center mt-6">
                  <span className="text-sm text-gray-400">Or call us: </span>
                  <TrackedPhoneLink 
                    phoneNumber="0278412236"
                    className="text-sm text-white ml-2 hover:underline"
                  >
                    027 841 2236
                  </TrackedPhoneLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}