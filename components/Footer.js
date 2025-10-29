// components/Footer.js
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import TrackedPhoneLink from "./TrackedPhoneLink";
export default function Footer() {
  return (
    <>
      {/* Main Footer Section - White Background */}
      <footer className="bg-white text-gray-900 py-6 sm:py-8 md:py-10 lg:py-12 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1),0_-4px_6px_-2px_rgba(0,0,0,0.05)] px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Single Section Layout */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 sm:gap-8 lg:gap-12">
            {/* Left Side: Let's start working together */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-900 leading-tight">
                Let&apos;s start working
                <span className="block sm:inline"> together</span> get in touch!
              </h2>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Ready to transform your digital presence? Let&apos;s discuss
                your goals and create something amazing together.
              </p>
              <div className="mt-4 sm:mt-6">
                <Link
                  href="/schedule-consultation"
                  className="inline-flex items-center justify-center bg-customPurple text-white hover:bg-customPurple font-semibold py-3 px-4 sm:px-6 md:px-8 rounded-lg transition-all duration-300 text-sm sm:text-base hover:scale-105 hover:shadow-lg group active:bg-customPurple focus:outline-none focus:ring-0 w-full sm:w-auto"
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                  }}
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

            {/* Right Side: Contact information - Positioned right but left-aligned */}
            <div className="w-full lg:w-auto lg:max-w-md">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-black">
                Contact <span className="text-black">information</span>
              </h2>
              <ul className="space-y-3 sm:space-y-4 md:space-y-5">
                <li className="flex items-start group">
                  <div className="text-customPurple mr-3 flex-shrink-0 p-2 rounded-lg transition-all duration-300 group-hover:bg-gray-100">
                    <FaMapMarkedAlt className="text-base sm:text-lg md:text-xl" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-600 group-hover:text-gray-900 transition-colors leading-relaxed">
                    89 Church Road, Pukete, Hamilton 3200
                  </span>
                </li>
                <li className="flex items-center group">
                  <div className="text-customPurple mr-3 flex-shrink-0 p-2 rounded-lg transition-all duration-300 group-hover:bg-gray-100">
                    <FaPhoneAlt className="text-base sm:text-lg md:text-xl" />
                  </div>
                  <TrackedPhoneLink
                    phoneNumber="0212463988"
                    className="hover:text-customPurple transition-colors text-sm sm:text-base text-gray-600"
                  >
                    021 246 3988
                  </TrackedPhoneLink>
                </li>
                <li className="flex items-center group">
                  <div className="text-customPurple mr-3 flex-shrink-0 p-2 rounded-lg transition-all duration-300 group-hover:bg-gray-100">
                    <FaEnvelope className="text-base sm:text-lg md:text-xl" />
                  </div>
                  <Link
                    href="mailto:digital@gdcgroup.co.nz"
                    className="hover:text-customPurple transition-colors text-sm sm:text-base text-gray-600 break-all"
                  >
                    digital@gdcgroup.co.nz
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* Logo Section - Light Gray Background */}
      <div className="bg-white py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <div className="flex items-center justify-center group">
              <a
                href="https://gdcdigital.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 p-2 sm:p-3 md:p-4 hover:scale-105"
              >
                <Image
                  src="/assets/images/footer-logos/1.png"
                  alt="GDC Digital Solutions Logo"
                  width={400}
                  height={150}
                  className="w-full h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] transition-opacity group-hover:opacity-80"
                  priority
                />
              </a>
            </div>
            <div className="flex items-center justify-center group">
              <a
                href="https://www.gdcgroup.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 p-2 sm:p-3 md:p-4 hover:scale-105"
              >
                <Image
                  src="/assets/images/footer-logos/2.png"
                  alt="GDC Consultants Logo"
                  width={400}
                  height={150}
                  className="w-full h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] transition-opacity group-hover:opacity-80"
                  priority
                />
              </a>
            </div>
            <div className="flex items-center justify-center group">
              <a
                href="https://www.gdcrecruit.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 p-2 sm:p-3 md:p-4 hover:scale-105"
              >
                <Image
                  src="/assets/images/footer-logos/3.png"
                  alt="GDC Recruitment Logo"
                  width={400}
                  height={150}
                  className="w-full h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] transition-opacity group-hover:opacity-80"
                  priority
                />
              </a>
            </div>
            <div className="flex items-center justify-center group">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 p-2 sm:p-3 md:p-4 hover:scale-105"
              >
                <Image
                  src="/assets/images/footer-logos/4.png"
                  alt="GDC Properties Logo"
                  width={400}
                  height={150}
                  className="w-full h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] transition-opacity group-hover:opacity-80"
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Section - White Background */}
      <div className="bg-white py-3 sm:py-4 md:py-5 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1),0_-4px_6px_-2px_rgba(0,0,0,0.05)] px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center text-customLightGray gap-2 sm:gap-0">
            <p className="text-xs sm:text-sm text-center sm:text-left leading-relaxed">
              Copyright © 2025 GDC Digital Solutions. All Rights Reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm">
              <Link
                href="/privacy-policy"
                className="hover:text-customPurple transition-colors px-2 py-1 rounded hover:bg-gray-50"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-customPurple transition-colors px-2 py-1 rounded hover:bg-gray-50"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}