"use client";
import React from "react";
import {
  FaBuilding,
  FaWrench,
  FaWater,
  FaBolt,
  FaCogs,
  FaClipboardList,
  FaGlobe,
  FaHome,
  FaTools,
  FaHammer,
  FaSink,
  FaTree,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

// Icon mapping for dynamic rendering
const iconMap = {
  FaBuilding: FaBuilding,
  FaWrench: FaWrench,
  FaWater: FaWater,
  FaBolt: FaBolt,
  FaCogs: FaCogs,
  FaClipboardList: FaClipboardList,
  FaGlobe: FaGlobe,
  FaHome: FaHome,
  FaTools: FaTools,
  FaHammer: FaHammer,
  FaSink: FaSink,
  FaTree: FaTree,
};

const ClientOverview = ({ data }) => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="flex flex-col md:flex-row items-start justify-center py-16 px-6 md:px-20">
      {/* Left Side - Services */}
      <motion.div
        className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4 items-start justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        {data.services.map((service, index) => {
          const IconComponent = iconMap[service.icon];
          return (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center w-32 h-32 border-2 border-customYellow rounded-full shadow-md p-2 mx-auto"
              variants={itemVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center w-15 h-15">
                {IconComponent && (
                  <IconComponent size={24} className="text-customYellow" />
                )}
              </div>
              <div className="pb-6">
                <p className="text-center font-semibold text-gray-800 text-sm mt-2">
                  {service.label}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Right Side - Overview Details */}
      <motion.div
        className="w-full md:w-1/2 p-4 md:p-8 flex flex-col items-start space-y-4 mt-8 md:mt-0"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-customYellow mb-4">
          CLIENT OVERVIEW
        </h2>
        <p>
          <span className="font-semibold">Company:</span> {data.companyName}
        </p>
        <p>
          <span className="font-semibold">Industry:</span> {data.industry}
        </p>
        <p>
          <span className="font-semibold">Website:</span>{" "}
          <Link
            href={data.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {data.website.replace("https://", "")}
          </Link>
        </p>
        <p
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </motion.div>
    </section>
  );
};

export default ClientOverview;
