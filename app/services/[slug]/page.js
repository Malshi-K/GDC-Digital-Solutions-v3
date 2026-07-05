import Script from "next/script";
import { notFound } from "next/navigation";
import ServicePageClient from "./ServicePageClient";
import {
  serviceDetails,
  serviceSEOData,
} from "@/data/serviceData";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const service = serviceDetails[slug];

  if (!service) {
    return {};
  }

  const seoData = serviceSEOData[slug] || {};
  const title =
    seoData.title || `${service.heading} | GDC Digital Solutions`;
  const description = seoData.description || service.description;
  const canonical =
    seoData.canonical || `https://gdcdigital.co.nz/services/${slug}`;
  const image = service.image
    ? `https://gdcdigital.co.nz${service.image}`
    : undefined;

  return {
    title,
    description,
    keywords: seoData.keywords,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      images: image ? [image] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default function ServicePage({ params }) {
  const { slug } = params;
  const service = serviceDetails[slug];
  const seoData = serviceSEOData[slug] || {};

  if (!service) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.heading,
    provider: {
      "@type": "Organisation",
      name: "GDC Digital Solutions",
      url: "https://gdcdigital.net",
    },
    description: seoData.description || service.description,
    areaServed: "New Zealand",
    serviceType: service.heading,
    image: service.image
      ? `https://gdcdigital.net${service.image}`
      : undefined,
    offers: {
      "@type": "Offer",
      areaServed: "New Zealand",
    },
    mainEntityOfPage: seoData.canonical
      ? {
          "@type": "WebPage",
          "@id": seoData.canonical,
        }
      : undefined,
  };

  return (
    <>
      <Script
        id={`service-jsonld-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <ServicePageClient slug={slug} />
    </>
  );
}
