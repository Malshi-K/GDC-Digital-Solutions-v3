"use client";

import SharedPageTitle from "@/components/PageTitle";

// Thin wrapper to reuse the global PageTitle design with a custom title
const PageTitle = ({ nextSectionId = "next-section" }) => {
  return (
    <SharedPageTitle
      title="Get a Free Quote for Your Business"
      nextSectionId={nextSectionId}
    />
  );
};

export default PageTitle;