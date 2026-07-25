const DEV_FALLBACK_URL = "http://localhost:3000";

let warnedMissingSiteUrl = false;

/** Canonical site origin from NEXT_PUBLIC_SITE_URL (required in production). */
export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) {
    if (process.env.NODE_ENV === "production" && !warnedMissingSiteUrl) {
      warnedMissingSiteUrl = true;
      console.warn(
        "[portfolio] NEXT_PUBLIC_SITE_URL is not set. SEO metadata and sitemap will use localhost fallback."
      );
    }
    return new URL(DEV_FALLBACK_URL);
  }
  return new URL(raw.endsWith("/") ? raw.slice(0, -1) : raw);
}

export function getGoogleSiteVerification() {
  const value = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  return value || undefined;
}

export function absoluteUrl(path = "/") {
  const base = getSiteUrl();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, base).toString();
}
