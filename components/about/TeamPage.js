"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon
import TeamTitleBar from "./TeamTitleBar";

// Define the teamMembers array with LinkedIn profiles
const teamMembers = [
  {
    image: "/assets/images/team/Danyon-Fernando.webp",
    name: "Danyon Fernando",
    position: "Business Analyst",
    linkedinUrl: "https://www.linkedin.com/in/danyon-fernando-2b7563149", // Replace with actual LinkedIn URL
  },
  {
    image: "/assets/images/team/Vazin-Shareef.webp",
    name: "Vazin Shareef",
    position: "Chief Information Officer",
    linkedinUrl: "https://www.linkedin.com/in/vazin-shareef-99639a282", // Replace with actual LinkedIn URL
  },
  {
    image: "/assets/images/team/Ruwani.webp",
    name: "Ruwani Kokawala",
    position: "Google Ads Specialist/ SEO",
    linkedinUrl: "https://www.linkedin.com/in/ruwani-kokawala-233846261",
  },
  {
    image: "/assets/images/team/Malshi.webp",
    name: "Malshi Kulasinghe",
    position: "Web Developer/ App Development",
    linkedinUrl: "https://www.linkedin.com/in/malshii", // Replace with actual LinkedIn URL
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
    <div className="min-h-screen">
      <TeamTitleBar />

      <section className="pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-screen-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative overflow-hidden h-full"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onTouchStart={(e) => handleTouchStart(e, index)}
            >
              {/* Member image */}
              <div className="h-[400px] md:h-[500px] relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="grayscale transition-all duration-300"
                />

                {/* Overlay that appears on hover (customYellow with name/position) */}
                <div
                  className={`absolute bottom-0 left-0 w-full transition-all duration-300 ease-in-out
                    ${activeIndex === index ? "bg-customYellow h-auto" : "bg-transparent h-0"}`}
                >
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold text-black">
                      {member.name}
                    </h3>
                    <h6 className="text-black mb-4">{member.position}</h6>
                    
                    {/* LinkedIn Icon */}
                    <a 
                      href={member.linkedinUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={handleLinkedInClick}
                      className="inline-block"
                    >
                      <FaLinkedin className="text-black text-3xl hover:text-customGray transition-colors duration-300" />
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