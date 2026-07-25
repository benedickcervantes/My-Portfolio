import { getSiteUrl } from "../lib/site";

export default function sitemap() {
  const siteUrl = getSiteUrl();

  return [
    {
      url: new URL("/", siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
