"use client";
import React from "react";
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
} from "react-icons/fa";
import { motion } from "framer-motion";
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
};

const OurApproachSection = ({ data }) => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section className="py-12 px-4 md:px-20 bg-gray-100">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-customYellow text-3xl md:text-4xl font-bold text-center mb-10 flex flex-wrap justify-center"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <span className="ml-2 text-customGray">OUR&nbsp;</span>
          {"APPROACH".split("").map((letter, index) => (
            <motion.span
              key={`approach-${index}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.1, delay: index * 0.1 }}
            >
              {letter}
            </motion.span>
          ))}
          <motion.span
            className="mx-1"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.1, delay: "APPROACH".length * 0.1 }}
          >
            &nbsp;
          </motion.span>
        </motion.h2>

        {/* Introduction Paragraph */}
        <motion.p
          className="text-gray-700 mb-10 leading-relaxed max-w-4xl mx-auto"
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {data.introduction}
        </motion.p>

        {/* Technical Overview Grid */}
        <motion.h2
          className="text-3xl font-bold text-customGray mb-6"
          variants={textVariants}
          transition={{ duration: 0.6 }}
        >
          Technical Overview
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10"
          variants={containerVariants}
        >
          {data.technicalObjectives.map((objective, index) => {
            const IconComponent = iconMap[objective.icon];
            return (
              <motion.div
                key={index}
                className={`flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ${objective.bgColor}`}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-white p-4 rounded-full mb-4">
                  {IconComponent && (
                    <IconComponent
                      size={40}
                      className={
                        objective.bgColor === "bg-customYellow"
                          ? "text-customGray"
                          : "text-customYellow"
                      }
                    />
                  )}
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    objective.bgColor === "bg-customYellow"
                      ? "text-white"
                      : "text-customGray"
                  }`}
                >
                  {objective.title}
                </h3>
                <p
                  className={`text-center ${
                    objective.bgColor === "bg-customYellow"
                      ? "text-white"
                      : "text-customGray"
                  }`}
                >
                  {objective.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Design Overview Grid */}
        <motion.h2
          className="text-3xl font-bold text-customGray mb-6"
          variants={textVariants}
          transition={{ duration: 0.6 }}
        >
          Design Overview
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
          variants={containerVariants}
        >
          {data.designObjectives.map((keyObj, index) => {
            const IconComponent = iconMap[keyObj.icon];
            return (
              <motion.div
                key={index}
                className={`flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ${keyObj.bgColor}`}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-white p-4 rounded-full mb-4">
                  {IconComponent && (
                    <IconComponent
                      size={40}
                      className={
                        keyObj.bgColor === "bg-customYellow"
                          ? "text-customGray"
                          : "text-customYellow"
                      }
                    />
                  )}
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    keyObj.bgColor === "bg-customYellow"
                      ? "text-white"
                      : "text-customGray"
                  }`}
                >
                  {keyObj.title}
                </h3>
                <p
                  className={`text-center ${
                    keyObj.bgColor === "bg-customYellow"
                      ? "text-white"
                      : "text-customGray"
                  }`}
                >
                  {keyObj.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurApproachSection;
