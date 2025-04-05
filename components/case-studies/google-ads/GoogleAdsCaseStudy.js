import CaseStudiesHero from '@/components/case-studies/google-ads/CaseStudiesHero';
import ObjectivesSection from '@/components/case-studies/google-ads/ObjectivesSection';
import ChallengesSection from '@/components/case-studies/google-ads/ChallengesSection';
import KeyAchievements from '@/components/case-studies/google-ads/KeyAchievements ';
import GallerySection from '@/components/case-studies/google-ads/GallerySection';
import CampaignStrategySection from '@/components/case-studies/google-ads/CampaignStrategySection';
import GoogleAdsClientOverview from '@/components/case-studies/google-ads/GoogleAdsClientOverview';

const GoogleAdsCaseStudy = () => {
  return (
    <section>
      <CaseStudiesHero /> 
      <GoogleAdsClientOverview />
      <ObjectivesSection />
      <ChallengesSection />
      <CampaignStrategySection />
      <GallerySection />
      <KeyAchievements />  
    </section>
  );
};

export default GoogleAdsCaseStudy;
