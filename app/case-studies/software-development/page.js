// app/case-studies/web-development/page.js
import CaseStudiesList from "@/components/case-studies/shared/CaseStudiesList";
import { getAllCaseStudies } from "@/data/softwareDevelopmentCaseStudyData";
import PageTitle from "@/components/PageTitle";

// Metadata for the index page
export const metadata = {
  title: "Software Development Case Studies | GDC Digital Solutions",
  description:
    "Explore our software development case studies at GDC Digital Solutions. See how our custom software solutions drive business growth, improve efficiency, and enhance user experience.",

  // Basic Meta Tags
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",

  // Open Graph
  openGraph: {
    title: "Software Development Case Studies | GDC Digital Solutions",
    description:
      "Explore our software development case studies at GDC Digital Solutions. See how our custom software solutions drive business growth, improve efficiency, and enhance user experience.",
    url: "https://gdcdigital.co.nz/case-studies/software-development",
    siteName: "GDC Digital Solutions",
    type: "website",
  },
};

export default function SoftwareDevelopmentCaseStudiesPage() {
  return (
    <>
      <PageTitle />
      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-customPurple mb-8">
            Software Development Case Studies
          </h1>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-6">
            Explore our portfolio of successful software development projects,
            showcasing our expertise in creating responsive, user-friendly, and
            high-performing software solutions.
          </p>
          <CaseStudiesList caseStudies={getAllCaseStudies()} baseUrl="software-development" />
        </div>
      </main>
    </>
  );
}
