"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AgencyHeader() {
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect on background when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex items-stretch w-full py-12">
      {/* Left yellow accent bar */}
      <div className="w-16 bg-customYellow hidden md:block"></div>

      {/* Main content area */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Content section - takes 2/3 on desktop */}
        <div className="w-full md:w-2/3 p-6 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900">
              We are the experts in driving digital growth through innovative
              solutions
            </h1>

            <div className="text-gray-600 mb-12">
              <p className="mb-4">
                From web development and SEO to targeted ad campaigns and
                cutting-edge technology, our team excels at crafting strategies
                that empower businesses to thrive in the digital landscape.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold border-b-2 border-black inline-block pb-2 mb-6">
                Who We Are
              </h2>

              <p className="text-gray-600">
                At GDC Digital Solutions, we are dedicated to empowering
                businesses through innovative digital strategies. Our team of
                experts specialises in offering cutting-edge solutions that
                enhance communication, streamline operations, and drive growth.
                With over a decade of industry experience and a global network
                of partners, we are committed to delivering excellence at every
                step of the journey.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Image section - takes 1/3 on desktop */}
        <div className="w-full md:w-1/3">
          <div className="h-full relative">
            <img
              src="/assets/images/hero.jpeg"
              alt="Digital agency team working together"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right accent block */}
      <div className="hidden md:block">
        <div className="bg-gray-400 w-16 h-16 absolute right-0 top-0"></div>
        <div className="bg-customYellow w-16 h-16 absolute right-0 top-16"></div>
      </div>
    </div>
  );
}
