import { absoluteUrl, getGoogleSiteVerification, getSiteUrl } from "./site";

export const SITE_NAME = "Benedick Cervantes";
export const SITE_TITLE = "Benedick Cervantes - Full Stack Developer Portfolio";
export const SITE_DESCRIPTION =
  "Benedick Cervantes - Full Stack Developer, UI/UX Designer, and IT Consultant. Explore my portfolio of modern web applications and digital solutions.";
export const SITE_KEYWORDS = [
  "Benedick Cervantes",
  "Full Stack Developer",
  "UI/UX Designer",
  "IT Consultant",
  "Web Developer Philippines",
  "React Developer",
  "Next.js Developer",
  "Software Developer",
  "Portfolio",
  "San Juan City",
  "PC Builder",
  "PC Builder Philippines",
  "Computer Supplier",
  "Laptop Supplier",
  "Computer Supplier Philippines",
  "Laptop Supplier Philippines",
];

export const PROFILE = {
  name: "Benedick Cervantes",
  givenName: "Benedick",
  familyName: "Cervantes",
  jobTitle: "Full Stack Developer",
  email: "benedickcervantes@gmail.com",
  telephone: "+63-917-843-2759",
  addressLocality: "San Juan City",
  addressCountry: "PH",
  imagePath: "/images/developer-photo.png",
  sameAs: [
    "https://github.com/benedickcervantes",
    "https://www.linkedin.com/in/benedick-cervantes-1375a9111",
    "https://www.facebook.com/Benedick.Cervantes/",
  ],
};

export function buildRootMetadata() {
  const siteUrl = getSiteUrl();
  const canonical = absoluteUrl("/");
  const googleVerification = getGoogleSiteVerification();

  return {
    metadataBase: siteUrl,
    title: {
      default: SITE_TITLE,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    keywords: SITE_KEYWORDS,
    authors: [{ name: SITE_NAME, url: canonical }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    applicationName: `${SITE_NAME} Portfolio`,
    category: "portfolio",
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_PH",
      url: canonical,
      siteName: SITE_NAME,
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
    },
    icons: {
      icon: [
        { url: "/favicon.ico?v=14", sizes: "any" },
        { url: "/icon.svg?v=14", type: "image/svg+xml" },
        { url: "/favicon-16.png?v=14", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32.png?v=14", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png?v=14" }],
      shortcut: ["/favicon.ico?v=14"],
    },
    manifest: "/manifest.json",
    ...(googleVerification
      ? { verification: { google: googleVerification } }
      : {}),
  };
}

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    givenName: PROFILE.givenName,
    familyName: PROFILE.familyName,
    jobTitle: PROFILE.jobTitle,
    url: absoluteUrl("/"),
    image: absoluteUrl(PROFILE.imagePath),
    email: PROFILE.email,
    telephone: PROFILE.telephone,
    address: {
      "@type": "PostalAddress",
      addressLocality: PROFILE.addressLocality,
      addressCountry: PROFILE.addressCountry,
    },
    sameAs: PROFILE.sameAs,
    knowsAbout: [
      "Full Stack Development",
      "UI/UX Design",
      "React",
      "Next.js",
      "IT Consulting",
      "PC Building",
      "Computer Supply",
      "Laptop Supply",
    ],
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${SITE_NAME} Portfolio`,
    url: absoluteUrl("/"),
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: PROFILE.name,
    },
  };
}
