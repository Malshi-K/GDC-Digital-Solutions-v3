"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  FaUsers,
  FaGlobe,
  FaDesktop,
  FaChartLine,
  FaComments,
  FaServer,
  FaEnvelope,
  FaPalette,
  FaMobile,
  FaCompass,
  FaImage,
  FaWordpress,
  FaPuzzlePiece,
  FaWpforms,
  FaPaperPlane,
  FaBuilding,
  FaShieldAlt,
  FaUserCheck,
  FaLock,
  FaAward,
  FaListUl,
  FaImages,
  FaBullseye,
  FaSearch,
} from "react-icons/fa";
import { SiNextdotjs, SiHubspot, SiGithub, SiNetlify } from "react-icons/si";

// Icon mapping for dynamic rendering
const iconMap = {
  FaUsers: FaUsers,
  FaGlobe: FaGlobe,
  FaDesktop: FaDesktop,
  FaChartLine: FaChartLine,
  FaComments: FaComments,
  FaServer: FaServer,
  FaEnvelope: FaEnvelope,
  FaPalette: FaPalette,
  FaMobile: FaMobile,
  FaImage: FaImage,
  FaCompass: FaCompass,
  SiNextdotjs: SiNextdotjs,
  SiHubspot: SiHubspot,
  SiGithub: SiGithub,
  SiNetlify: SiNetlify,
  FaWordpress: FaWordpress,
  FaPuzzlePiece: FaPuzzlePiece,
  FaWpforms: FaWpforms,
  FaPaperPlane: FaPaperPlane,
  FaBuilding: FaBuilding,
  FaShieldAlt: FaShieldAlt,
  FaUserCheck: FaUserCheck,
  FaLock: FaLock,
  FaAward:FaAward,
  FaListUl:FaListUl,
  FaImages:FaImages,
  FaBullseye:FaBullseye,
  FaSearch:FaSearch,
};

const OurApproachSection = ({ data }) => {
  const [isVisible, setIsVisible] = useState(true); // Always visible - no animation delay
  const sectionRef = useRef(null);

  // Check if design objectives exist and have data
  const hasDesignObjectives = data.designObjectives && data.designObjectives.length > 0;

  return (
    <section className="py-12 px-4 md:px-20 bg-gray-100" ref={sectionRef}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-customPurple text-3xl md:text-4xl font-bold text-center mb-10">
          <span className="ml-2 text-customGray">OUR&nbsp;</span>
          <span>APPROACH</span>
        </h2>

        {/* Introduction Paragraph */}
        <p className="text-gray-700 mb-10 leading-relaxed max-w-4xl mx-auto">
          {data.introduction}
        </p>

        {/* Technical Overview Grid */}
        <h2 className="text-3xl font-bold text-customGray mb-6">
          Technical Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {data.technicalObjectives.map((objective, index) => {
            const IconComponent = iconMap[objective.icon];
            return (
              <div
                key={index}
                className={`flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-xl ${objective.bgColor}`}
              >
                <div className="bg-white p-4 rounded-full mb-4">
                  {IconComponent && (
                    <IconComponent
                      size={40}
                      className={
                        objective.bgColor === "bg-customPurple"
                          ? "text-customGray"
                          : "text-customPurple"
                      }
                    />
                  )}
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    objective.bgColor === "bg-customPurple"
                      ? "text-white"
                      : "text-customGray"
                  }`}
                >
                  {objective.title}
                </h3>
                <p
                  className={`text-center ${
                    objective.bgColor === "bg-customPurple"
                      ? "text-white"
                      : "text-customGray"
                  }`}
                >
                  {objective.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Design Overview Grid - Only render if data exists */}
        {hasDesignObjectives && (
          <>
            <h2 className="text-3xl font-bold text-customGray mb-6">
              Design Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {data.designObjectives.map((keyObj, index) => {
                const IconComponent = iconMap[keyObj.icon];
                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-xl ${keyObj.bgColor}`}
                  >
                    <div className="bg-white p-4 rounded-full mb-4">
                      {IconComponent && (
                        <IconComponent
                          size={40}
                          className={
                            keyObj.bgColor === "bg-customPurple"
                              ? "text-customGray"
                              : "text-customPurple"
                          }
                        />
                      )}
                    </div>
                    <h3
                      className={`text-xl font-semibold mb-2 ${
                        keyObj.bgColor === "bg-customPurple"
                          ? "text-white"
                          : "text-customGray"
                      }`}
                    >
                      {keyObj.title}
                    </h3>
                    <p
                      className={`text-center ${
                        keyObj.bgColor === "bg-customPurple"
                          ? "text-white"
                          : "text-customGray"
                      }`}
                    >
                      {keyObj.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default OurApproachSection;