// components/Footer.js
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import TrackedPhoneLink from "./TrackedPhoneLink";

export default function Footer() {
  return (
    <>
      {/* Main Footer Section - Purple Gradient Background */}
      <footer 
        className="text-white py-8 sm:py-10 md:py-12 relative overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 7, 200, 0.3), transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(194, 3, 157, 0.3), transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 7, 200, 0.4), transparent 50%),
            linear-gradient(135deg, #1e1b4b 0%, #312e81 25%, #6d28d9 50%, #8b5cf6 75%, #a855f7 100%)
          `
        }}
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute top-10 right-20 w-24 h-24 rounded-lg opacity-10 transform rotate-12"
            style={{ background: "linear-gradient(135deg, #7407c8 0%, #c2039d 100%)" }}
          ></div>
          <div 
            className="absolute bottom-20 left-10 w-20 h-20 rounded-full opacity-15"
            style={{ background: "linear-gradient(135deg, #c2039d 0%, #7407c8 100%)" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          {/* Three Columns Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1: Let's start working together */}
            <div className="mb-6 sm:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Let&apos;s start working 
                <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  {" "}together
                </span>
                {" "}get in touch!
              </h2>
              <p className="text-white/80 mb-4 text-sm sm:text-base">
                Ready to transform your digital presence? Let&apos;s discuss your goals and create something amazing together.
              </p>
              <div className="mt-4 sm:mt-6">
                <Link
                  href="/schedule-consultation"
                  className="inline-flex items-center bg-white text-customPurple hover:bg-gray-50 font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 text-sm sm:text-base hover:scale-105 hover:shadow-lg group"
                >
                  Schedule a Consultation
                  <svg 
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Column 2: Contact information */}
            <div className="mb-6 sm:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Contact 
                <span className="bg-gradient-to-r from-purple-200 via-pink-200 to-white bg-clip-text text-transparent">
                  information
                </span>
              </h2>
              <ul className="space-y-4 sm:space-y-5">
                <li className="flex items-start group">
                  <div className="text-white/70 mr-3 flex-shrink-0 p-2 rounded-lg transition-all duration-300 group-hover:bg-white/10">
                    <FaMapMarkedAlt className="text-lg sm:text-xl" />
                  </div>
                  <span className="text-sm sm:text-base text-white/90 group-hover:text-white transition-colors">
                    89 Church Road, Pukete, Hamilton 3200
                  </span>
                </li>
                <li className="flex items-center group">
                  <div className="text-white/70 mr-3 flex-shrink-0 p-2 rounded-lg transition-all duration-300 group-hover:bg-white/10">
                    <FaPhoneAlt className="text-lg sm:text-xl" />
                  </div>
                  <TrackedPhoneLink
                    phoneNumber="0212463988"
                    className="hover:text-white transition-colors text-sm sm:text-base text-white/90"
                  >
                    021 246 3988
                  </TrackedPhoneLink>
                </li>
                <li className="flex items-center group">
                  <div className="text-white/70 mr-3 flex-shrink-0 p-2 rounded-lg transition-all duration-300 group-hover:bg-white/10">
                    <FaEnvelope className="text-lg sm:text-xl" />
                  </div>
                  <Link
                    href="mailto:digital@gdcgroup.co.nz"
                    className="hover:text-white transition-colors text-sm sm:text-base text-white/90 break-all"
                  >
                    digital@gdcgroup.co.nz
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Subscribe newsletter */}
            <div className="sm:col-span-2 md:col-span-1">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Subscribe 
                <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  newsletter
                </span>
              </h2>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base text-white/80">
                Get our latest news, insights, and digital marketing tips delivered to your inbox
              </p>
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full p-3 sm:p-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:border-white focus:bg-white/20 text-white placeholder-white/60 text-sm sm:text-base transition-all duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-white text-customPurple hover:bg-gray-50 font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 text-sm sm:text-base hover:scale-105 hover:shadow-lg flex items-center justify-center group"
                >
                  Subscribe Now
                  <svg 
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>

      {/* Logo Section - Light Gray Background */}
      <div className="bg-gray-50 py-6 sm:py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <div className="flex items-center justify-center w-1/2 sm:w-1/3 md:w-auto mb-4 sm:mb-0 group">
              <a
                href="https://www.gdcdigital.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-105 p-4 rounded-lg hover:shadow-lg"
              >
                <Image
                  src="/assets/images/Digital Solution.webp"
                  alt="GDC Digital Solutions Logo"
                  width={180}
                  height={60}
                  className="object-contain h-12 sm:h-16 transition-opacity group-hover:opacity-80"
                />
              </a>
            </div>
            <div className="flex items-center justify-center w-1/2 sm:w-1/3 md:w-auto mb-4 sm:mb-0 group">
              <a
                href="https://www.gdcgroup.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-105 p-4 rounded-lg hover:shadow-lg"
              >
                <Image
                  src="/assets/images/GDC LOGOS 2024 BLUE.webp"
                  alt="GDC Consultants Logo"
                  width={180}
                  height={60}
                  className="object-contain h-12 sm:h-16 transition-opacity group-hover:opacity-80"
                />
              </a>
            </div>
            <div className="flex items-center justify-center w-1/2 sm:w-1/3 md:w-auto mb-4 sm:mb-0 group">
              <a
                href="https://www.gdcrecruit.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-105 p-4 rounded-lg hover:shadow-lg"
              >
                <Image
                  src="/assets/images/Recruit Logo.png"
                  alt="GDC Recruitment Logo"
                  width={180}
                  height={60}
                  className="object-contain h-12 sm:h-16 transition-opacity group-hover:opacity-80"
                />
              </a>
            </div>
            <div className="flex items-center justify-center w-1/2 sm:w-1/3 md:w-auto group">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-105 p-4 rounded-lg hover:shadow-lg"
              >
                <Image
                  src="/assets/images/properties logo.png"
                  alt="GDC Properties Logo"
                  width={180}
                  height={60}
                  className="object-contain h-12 sm:h-16 transition-opacity group-hover:opacity-80"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section - White Background */}
      <div className="bg-white py-4 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-customLightGray">
            <p className="text-xs sm:text-sm mb-2 sm:mb-0">
              Copyright © 2025 GDC Digital Solutions. All Rights Reserved.
            </p>
            <div className="flex space-x-4 text-xs sm:text-sm">
              <Link href="/privacy-policy" className="hover:text-customPurple transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-customPurple transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}