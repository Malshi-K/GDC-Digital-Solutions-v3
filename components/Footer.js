
// components/Footer.js
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import TrackedPhoneLink from "./TrackedPhoneLink";
export default function Footer() {
  return (
    <>
      {/* Main Footer Section - White Background */}
      <footer className="bg-white text-gray-900 py-8 sm:py-10 md:py-12 border-t border-gray-200 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Single Section Layout */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12">
            {/* Left Side: Let's start working together */}
            <div className="lg:w-1/2">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">
              Let&apos;s start working
              <span>
                {" "}together
              </span>
              {" "}get in touch!
            </h2>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Ready to transform your digital presence? Let&apos;s discuss your goals and create something amazing together.
              </p>
              <div className="mt-4 sm:mt-6">
                <Link
                  href="/schedule-consultation"
                  className="inline-flex items-center bg-customPurple text-white hover:bg-customLightPurple font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 text-sm sm:text-base hover:scale-105 hover:shadow-lg group"
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
            <div className="lg:w-auto">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-black">
                Contact{' '}
                <span className="text-black">
                  information
                </span>
              </h2>
              <ul className="space-y-4 sm:space-y-5">
                <li className="flex items-start group">
                  <div className="text-customPurple mr-3 flex-shrink-0 p-2 rounded-lg transition-all duration-300 group-hover:bg-gray-100">
                    <FaMapMarkedAlt className="text-lg sm:text-xl" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-600 group-hover:text-gray-900 transition-colors">
                    89 Church Road, Pukete, Hamilton 3200
                  </span>
                </li>
                <li className="flex items-center group">
                  <div className="text-customPurple mr-3 flex-shrink-0 p-2 rounded-lg transition-all duration-300 group-hover:bg-gray-100">
                    <FaPhoneAlt className="text-lg sm:text-xl" />
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
                    <FaEnvelope className="text-lg sm:text-xl" />
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
      <div className="bg-white py-6 sm:py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
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
                  width={240}
                  height={80}
                  className="object-contain h-16 sm:h-20 transition-opacity group-hover:opacity-80"
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
                  width={240}
                  height={80}
                  className="object-contain h-16 sm:h-20 transition-opacity group-hover:opacity-80"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Section - White Background */}
      <div className="bg-white py-4 border-t border-gray-200 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
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
