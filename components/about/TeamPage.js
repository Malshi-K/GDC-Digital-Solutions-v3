"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon
import TeamTitleBar from "./TeamTitleBar";

// Define the teamMembers array with LinkedIn profiles
const teamMembers = [
  {
    image: "/assets/images/team/Danyon-Fernando.png",
    name: "Danyon Fernando",
    position: "Director of Operations",
    linkedinUrl: "https://www.linkedin.com/in/danyon-fernando-2b7563149", 
  },
  {
    image: "/assets/images/team/Ruwani.png",
    name: "Ruwani Kokawala",
    position: "Google Ads Specialist/ SEO",
    linkedinUrl: "https://www.linkedin.com/in/ruwani-kokawala-233846261",
  },
  {
    image: "/assets/images/team/Malshi.png",
    name: "Malshi Kulasinghe",
    position: "Web Developer/ App Development",
    linkedinUrl: "https://www.linkedin.com/in/malshii",
  },
];

const TeamPage = () => {
  // State for tracking which member is being hovered/focused
  const [activeIndex, setActiveIndex] = useState(null);

  // Handle mouse and touch interactions
  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const handleTouchStart = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Function to handle LinkedIn link click without closing the hover state
  const handleLinkedInClick = (e) => {
    e.stopPropagation(); // Prevent the click from affecting the parent elements
  };

  return (
    <div>
      <header className="text-center py-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Core Team</h2>
      </header>

      <section className="px-8 md:px-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-screen-full mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative overflow-hidden h-full p-4"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onTouchStart={(e) => handleTouchStart(e, index)}
              tabIndex={0}
              onFocus={() => handleMouseEnter(index)}
              onBlur={handleMouseLeave}
            >
              {/* Member image */}
              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-square">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  quality={100}
                  style={{ objectFit: "cover" }}
                  className="transition-all duration-300"
                />

                {/* Overlay that appears on hover (customPurple with name/position) */}
                <div
                  className={`absolute bottom-0 left-0 w-full transition-[max-height,opacity,background-color] duration-300 ease-in-out overflow-hidden
                    ${activeIndex === index ? "bg-customPurple opacity-100 max-h-[400px]" : "bg-transparent opacity-0 max-h-0"}`}
                  aria-hidden={activeIndex === index ? "false" : "true"}
                >
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold text-white">
                      {member.name}
                    </h3>
                    <h6 className="text-white mb-4">{member.position}</h6>
                    
                    {/* LinkedIn Icon */}
                    <a 
                      href={member.linkedinUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={handleLinkedInClick}
                      className="inline-block"
                    >
                      <FaLinkedin className="text-white text-3xl hover:text-white transition-colors duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default TeamPage;