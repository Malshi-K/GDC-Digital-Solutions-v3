"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const ConsultationCTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

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
    <section className="bg-transparent px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:px-12 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-ds-gradient">
          <div className="absolute inset-0 z-0">
            <div
              className="absolute right-20 top-10 h-24 w-24 rotate-12 transform rounded-lg opacity-10"
              style={{
                background:
                  "linear-gradient(135deg, #59107D 0%, #3B0B4D 100%)",
              }}
            />
            <div
              className="absolute bottom-20 left-10 h-20 w-20 rounded-full opacity-15"
              style={{
                background:
                  "linear-gradient(135deg, #3B0B4D 0%, #59107D 100%)",
              }}
            />
            <div
              className="absolute left-20 top-1/3 h-16 w-16 -rotate-12 transform rounded-lg opacity-12"
              style={{
                background:
                  "linear-gradient(135deg, #59107D 0%, #3B0B4D 100%)",
              }}
            />
          </div>

          <div className="relative z-10 px-6 py-16 sm:px-8 md:px-12 md:py-20 lg:px-16 lg:py-24 [perspective:1400px]">
            <motion.div
              className="text-center"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
              }}
              initial={flipInitial}
              whileInView={flipAnimate}
              viewport={{ once: true, amount: 0.25 }}
              transition={flipTransition}
            >
            <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Let&apos;s Discuss Your Business Goals & Request A Quote Today
            </h2>

            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
              Transform your digital presence with our expert guidance. Get
              personalized strategies tailored to your business needs.
            </p>

            <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/request-quote">
                <span
                  className="group inline-flex items-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-purple-700 transition-all duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-xl"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Request a Quote
                  <svg
                    className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                      isHovered ? "translate-x-1" : ""
                    }`}
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
                </span>
              </Link>

              <Link href="/contact-us">
                <span
                  className="group inline-flex items-center rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10"
                  onMouseEnter={() => setIsContactHovered(true)}
                  onMouseLeave={() => setIsContactHovered(false)}
                >
                  Contact Us
                  <svg
                    className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                      isContactHovered ? "scale-110" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-white/80">
              <div className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Expert Guidance</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">
                  Personalized Strategy
                </span>
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
