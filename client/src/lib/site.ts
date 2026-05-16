/** Canonical site URL and share assets (used in index.html + components). */

export const SITE_URL = "https://diamondhomeservices.vercel.app";

export const SITE = {
  name: "Diamond Home Services LLC",
  shortName: "Diamond Home Services",
  description:
    "Family-owned lawn & landscaping (Diamond Cutz) and home cleaning (A Diamond Girl) serving Nassau County, Florida.",
  logo: "/logos/diamond-home-services.jpg",
  ogImage: "/og-hero.jpg",
} as const;

export const siteUrl = (path = "") => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
