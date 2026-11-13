import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://www.aptus-software.com";
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/design-system"] }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
