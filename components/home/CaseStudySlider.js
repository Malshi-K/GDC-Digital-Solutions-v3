"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const CaseStudySlider = ({ caseStudies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const previousSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentStudy = caseStudies[currentIndex];

  const flipTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.9, ease: [0.22, 1, 0.36, 1] };

  const flipInitial = shouldReduceMotion
    ? false
    : { rotateX: 180, opacity: 0, scale: 0.96 };

  const flipAnimate = shouldReduceMotion
    ? {}
    : { rotateX: 0, opacity: 1, scale: 1 };

  return (
    <div className="bg-transparent py-8 sm:py-12 md:py-16">
      <motion.div
        className="mx-auto mb-12 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="mb-4 text-center text-3xl font-bold text-black sm:text-4xl md:text-5xl">
          Our Success Stories
        </h2>
        <p className="mx-auto max-w-3xl text-center text-lg text-customLightGray">
          Discover how we&apos;ve helped businesses achieve remarkable growth
          and digital transformation
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 [perspective:1400px]">
        <motion.button
          onClick={previousSlide}
          className="absolute left-0 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-100 sm:h-12 sm:w-12 md:left-2 lg:left-4"
          aria-label="Previous slide"
          initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <ChevronLeft className="h-5 w-5 text-gray-700 sm:h-6 sm:w-6" />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-100 sm:h-12 sm:w-12 md:right-2 lg:right-4"
          aria-label="Next slide"
          initial={shouldReduceMotion ? false : { opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <ChevronRight className="h-5 w-5 text-gray-700 sm:h-6 sm:w-6" />
        </motion.button>

        <motion.div
          className="relative min-h-[600px] w-full overflow-hidden rounded-2xl sm:min-h-[700px] md:min-h-[800px]"
          style={{ transformStyle: "preserve-3d", transformOrigin: "center center" }}
          initial={flipInitial}
          whileInView={flipAnimate}
          viewport={{ once: true, amount: 0.25 }}
          transition={flipTransition}
        >
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={currentStudy.imagePath}
            />
            <img
              src={currentStudy.mobileImagePath || currentStudy.imagePath}
              alt={currentStudy.heading}
              className="block h-full w-full object-cover brightness-[.8]"
            />
          </picture>

          <div className="relative z-10 px-8 sm:px-12 md:px-16 lg:px-20 xl:absolute xl:inset-0">
            <div className="flex items-center xl:h-full">
              <motion.div
                key={currentStudy.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="mx-auto mt-4 w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl sm:rounded-3xl sm:p-8 md:p-10 xl:mx-0 xl:mt-0 lg:max-w-lg"
              >
                <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  {currentStudy.heading}
                </h2>

                <p className="mb-4 text-base font-semibold text-purple-600 sm:mb-6 sm:text-lg md:text-xl">
                  {currentStudy.statistic}
                </p>

                <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:mb-8 sm:text-base">
                  {currentStudy.description}
                </p>

                <a
                  href={currentStudy.caseStudyPath}
                  className="inline-block rounded-lg bg-customPurple px-6 py-2.5 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-customPurple hover:shadow-lg sm:px-8 sm:py-3"
                >
                  {currentStudy.buttonLabel}
                </a>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-8 sm:gap-3 xl:bottom-8 xl:left-20 xl:translate-x-0">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-6 bg-white sm:w-8"
                    : "w-2 bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudySlider;
