"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Shared CaseStudiesList component
const CaseStudiesList = ({ caseStudies = [], baseUrl }) => {
  if (!caseStudies.length) {
    return null;
  }

  return (
    <div className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-customPurple mb-12">
          Our Success Stories
        </h2>
        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-customPurple/10 bg-customPurpleLight shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Image Section */}
              <div className="relative flex h-52 items-center justify-center bg-white/40 p-6">
                <Image
                  src={caseStudy.hero.imageSrc}
                  alt={caseStudy.hero.title}
                  width={200}
                  height={150}
                  className="object-contain max-h-40"
                />
              </div>
              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-2 text-sm text-gray-600 uppercase">
                  {caseStudy.clientOverview.companyName}
                </div>
                <h3 className="text-2xl font-bold text-customPurple mb-3">
                  {caseStudy.achievements?.items?.[0]?.title || "Increase in Engagement"}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {caseStudy.hero.description}
                </p>
                <div className="mt-auto">
                  <Link
                    href={`/case-studies/${baseUrl}/${caseStudy.id}`}
                    className="group inline-flex w-full items-center justify-center rounded-full bg-customPurple px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-customPurpleDark hover:shadow-lg"
                  >
                    View Success Story
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesList;
