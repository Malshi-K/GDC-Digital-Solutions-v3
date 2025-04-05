"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const GallerySection = ({ data }) => {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section className="py-16 bg-gray-100 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-customYellow text-3xl md:text-4xl font-bold text-center mb-10 flex flex-wrap justify-center"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Animated "SUCCESS STORY" */}
          {"SUCCESS".split("").map((letter, index) => (
            <motion.span
              key={`success-${index}`}
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
            transition={{ duration: 0.1, delay: "SUCCESS".length * 0.1 }}
          >
            &nbsp;
          </motion.span>
          {"STORY".split("").map((letter, index) => (
            <motion.span
              key={`story-${index}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.1,
                delay: ("STORY".length + index) * 0.1,
              }}
            >
              {letter}
            </motion.span>
          ))}
          <span className="ml-2 text-customGray">OVERVIEW</span>
        </motion.h2>

        {/* Masonry Grid for Images */}
        <motion.div
          className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 gap-4 space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {data.images.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg break-inside-avoid"
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                className="w-full h-auto object-cover transform hover:scale-105 transition duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;