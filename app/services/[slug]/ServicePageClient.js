"use client";

import CallToAction from "@/components/home/CallToAction";
import HeroSection from "@/components/services/HeroSection";
import WebDevelopmentBenefits from "@/components/services/web-development/WebDevelopment";
import CustomCodedWebsites from "@/components/services/web-development/CustomCodedWebsites";
import ProcessFlow from "@/components/services/web-development/ProcessFlow";
import Packages from "@/components/services/web-development/Packages";
import OnePageWebsite from "@/components/services/web-development/OnePageWebsite";
import GoogleAdsBenefits from "@/components/services/google-ads/GoogleAds";
import GoogleAdsProcessFlow from "@/components/services/google-ads/GoogleAdsProcessFlow";
import SeoOverview from "@/components/services/seo/SeoOverview";
import ConsultingBenefits from "@/components/services/business-consulting/ConsultingBenefits";
import ConsultingIntroductionSection from "@/components/services/business-consulting/ConsultingIntroductionSection";
import ExpertiseSection from "@/components/services/business-consulting/ExpertiseSection";
import ClosingSection from "@/components/services/business-consulting/ClosingSection";
import AppDevelopmentBenefits from "@/components/services/app-development/AppDevelopment";
import AppProcessFlow from "@/components/services/app-development/ProcessFlow";
import BrandingIntro from "@/components/services/branding-solutions/BrandingIntro";
import BrandingClosing from "@/components/services/branding-solutions/ClosingSection";
import ListOfServices from "@/components/services/branding-solutions/ListOfServices";
import WhyChooseOurBranding from "@/components/services/branding-solutions/WhyChooseOurBranding";
import FacebookAdsBenefits from "@/components/services/facebook-ads/FacebookAds";
import FacebookAdsProcessFlow from "@/components/services/facebook-ads/FacebookAdsProcessFlow";
import FacebookAdsIntroductionSection from "@/components/services/facebook-ads/FacebookAdsIntroductionSection";
import FBClosingSection from "@/components/services/facebook-ads/ClosingSection";
import LocalBusinessTargeting from "@/components/services/facebook-ads/LocalBusinessTargeting";
import GoogleAdsCaseStudyCard from "@/components/case-studies/google-ads/GoogleAdsCaseStudyCard";
import CaseStudiesList from "@/components/case-studies/shared/CaseStudiesList";
import { getAllCaseStudies } from "@/data/caseStudiesData";
import {
  serviceDetails,
  serviceCaseStudies,
} from "@/data/serviceData";

export default function ServicePageClient({ slug }) {
  const service = {
    ...serviceDetails[slug],
    slug,
  };
  const caseStudy = serviceCaseStudies[slug];

  const renderServiceContent = () => {
    switch (service.heading) {
      case "Website Development":
        return (
          <>
            <WebDevelopmentBenefits />
            <CustomCodedWebsites />
            <ProcessFlow />
            <CaseStudiesList
              caseStudies={getAllCaseStudies()}
              baseUrl="web-development"
            />
            <Packages />
            <OnePageWebsite />
            <CallToAction />
          </>
        );

      case "Google Ads":
        return (
          <>
            <GoogleAdsBenefits />
            <GoogleAdsProcessFlow />
            <GoogleAdsCaseStudyCard
              heading={caseStudy?.heading}
              statistic={caseStudy?.statistic}
              description={caseStudy?.description}
              buttonLabel={caseStudy?.buttonLabel}
              imagePath={caseStudy?.imagePath}
              caseStudyPath={caseStudy?.caseStudyPath}
            />
            <CallToAction />
          </>
        );

      case "Facebook Ads":
        return (
          <>
            <FacebookAdsIntroductionSection />
            <FacebookAdsBenefits />
            <FacebookAdsProcessFlow />
            <LocalBusinessTargeting />
            <FBClosingSection />
          </>
        );

      case "SEO/ Copywriting":
        return (
          <>
            <SeoOverview />
            <CallToAction />
          </>
        );

      case "Business Consulting":
        return (
          <>
            <ConsultingIntroductionSection />
            <ConsultingBenefits />
            <ExpertiseSection />
            <ClosingSection />
          </>
        );

      case "App Development":
        return (
          <>
            <AppDevelopmentBenefits />
            <AppProcessFlow />
            <CallToAction />
          </>
        );

      case "Branding Solutions":
        return (
          <>
            <BrandingIntro />
            <ListOfServices />
            <WhyChooseOurBranding />
            <BrandingClosing />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <HeroSection service={service} />
      <section id="next-section">{renderServiceContent()}</section>
    </>
  );
}
