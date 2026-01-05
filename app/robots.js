export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://gdcgroup.co.nz/sitemap.xml",
  };
}
