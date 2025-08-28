"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllCaseStudies } from "@/data/caseStudiesData";

const CaseStudiesList = () => {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-customYellow mb-12">
          Our Success Stories
        </h2>
        
        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((caseStudy, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Image Section with yellow background */}
              <div className="relative p-6 h-52 flex items-center justify-center">
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
                
                <h3 className="text-2xl font-bold text-customYellow mb-3">
                  {caseStudy.achievements?.items?.[0]?.title || "Increase in Engagement"}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {caseStudy.hero.description}
                </p>
                
                <div className="mt-auto">
                  <Link href={`/case-studies/web-development/${caseStudy.id}`}>
                    <button className="w-full px-6 py-2 rounded-full border border-customYellow text-customYellow hover:bg-customYellow hover:text-white transition-colors text-sm font-medium">
                      View Success Story
                    </button>
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