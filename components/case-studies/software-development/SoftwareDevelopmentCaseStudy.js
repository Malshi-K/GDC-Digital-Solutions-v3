"use client";
import React from "react";
import CaseStudiesHero from '../shared/CaseStudiesHero';
import ChallengesSection from '../shared/ChallengesSection';
import ClientOverview from '../shared/ClientOverview';
import OurApproachSection from '../shared/OurApproachSection';
import KeyAchievements from '../shared/KeyAchievements';
import GallerySection from '../shared/GallerySection';
import { getCaseStudyById } from "@/data/softwareDevelopmentCaseStudyData";
import DesignProcessSection from "../shared/DesignProcessSection";
import AdditionalServicesSection from "../shared/AdditionalServicesSection";

const SoftwareDevelopmentCaseStudy = ({ caseStudyId }) => {
  // Get the case study data based on the ID
  const caseStudyData = getCaseStudyById(caseStudyId);
  
  // If there's no caseStudyData, return null or a fallback UI
  if (!caseStudyData) {
    return <div>Case study not found</div>;
  }

  // Check if design process data exists
  const hasDesignProcess = caseStudyData.designProcess && 
                           caseStudyData.designProcess.steps && 
                           caseStudyData.designProcess.steps.length > 0;

  return (
    <section>
      <CaseStudiesHero data={caseStudyData.hero} />
      <ClientOverview data={caseStudyData.clientOverview} />
      <ChallengesSection data={caseStudyData.challenges} />
      <OurApproachSection data={caseStudyData.approach} />
      {hasDesignProcess && <DesignProcessSection data={caseStudyData.designProcess} />}
      <AdditionalServicesSection data={caseStudyData.additionalServices} />      
      <GallerySection data={caseStudyData.gallery} />
      <KeyAchievements data={caseStudyData.achievements} />
    </section>
  );
};

export default SoftwareDevelopmentCaseStudy;