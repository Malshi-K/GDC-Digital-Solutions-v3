"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  FaSearch, 
  FaSitemap, 
  FaPalette, 
  FaCode, 
  FaRocket,
  FaLightbulb,
  FaUserFriends,
  FaClipboardCheck,
  FaCogs,
  FaChartLine
} from "react-icons/fa";

// Icon mapping
const iconComponents = {
  FaSearch: FaSearch,
  FaSitemap: FaSitemap,
  FaPalette: FaPalette,
  FaCode: FaCode,
  FaRocket: FaRocket,
  FaLightbulb: FaLightbulb,
  FaUserFriends: FaUserFriends,
  FaClipboardCheck: FaClipboardCheck,
  FaCogs: FaCogs,
  FaChartLine: FaChartLine
};

const DesignProcessSection = ({ data }) => {
  // If no design process data is available, don't render the component
  if (!data || !data.steps || data.steps.length === 0) {
    return null;
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-customYellow mb-6">
            Our Design Process
          </h2>
          {data.introduction && (
            <p className="text-gray-700 max-w-3xl mx-auto">
              {data.introduction}
            </p>
          )}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {data.steps.map((step, index) => {
            // Get the icon component or default to FaLightbulb
            const IconComponent = iconComponents[step.icon] || FaLightbulb;
            
            return (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-8 flex flex-col items-start hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <span className="text-4xl font-bold text-customYellow opacity-30">
                    {step.number}
                  </span>
                  <div className="bg-customYellow bg-opacity-10 p-3 rounded-full">
                    <IconComponent className="text-customYellow text-xl" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default DesignProcessSection;