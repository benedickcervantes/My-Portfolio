import { getSiteUrl } from "../lib/site";

export default function robots() {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
    host: siteUrl.host,
  };
}
