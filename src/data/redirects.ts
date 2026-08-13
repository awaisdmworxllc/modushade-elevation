/**
 * SEO migration map: legacy modu-shade.com URLs -> current pages.
 *
 * Handled by the catch-all route (src/routes/$.tsx) with permanent (301)
 * redirects. Keys are matched without a trailing slash, with or without the
 * legacy ".html" extension, case-insensitively.
 *
 * Rules followed here:
 *  - never redirect everything to the homepage
 *  - point each old URL at its closest matching new page
 *  - no chains: every value below is a final destination
 */
export const legacyRedirects: Record<string, string> = {
  // Core pages
  "/index": "/",
  "/home": "/",
  "/about-us": "/about",
  "/about": "/about",
  "/contact-us": "/contact",
  "/contact": "/contact",
  "/faq": "/faq",
  "/faqs": "/faq",
  "/projects": "/projects",
  "/our-work": "/projects",
  "/services": "/services",
  "/service-area": "/service-areas",
  "/service-areas": "/service-areas",
  "/privacy-policy": "/privacy-policy",
  "/terms": "/terms",

  // Shades: overlapping legacy pages consolidated into distinct intents
  "/shades": "/services",
  "/shades-custom": "/services/roller-shades",
  "/custom-shades": "/services/roller-shades",
  "/shades-light-filtering": "/services/light-filtering-shades",
  "/light-filtering-shades": "/services/light-filtering-shades",
  "/shades-blackout": "/services/blackout-shades",
  "/blackout-shades": "/services/blackout-shades",
  "/shades-privacy": "/services/zebra-shades",
  "/privacy-shades": "/services/zebra-shades",
  "/motorized-shades": "/services/motorized-shades",
  "/roller-shades": "/services/roller-shades",
  "/zebra-shades": "/services/zebra-shades",
  "/cellular-shades": "/services/cellular-shades",
  "/honeycomb-shades": "/services/cellular-shades",
  "/roman-shades": "/services/roman-shades",
  "/sheer-shades": "/services/sheer-shades",

  // Blinds: four near-duplicate legacy pages -> one custom blinds page
  "/blinds": "/services/custom-blinds",
  "/blinds-custom": "/services/custom-blinds",
  "/custom-blinds": "/services/custom-blinds",
  "/blinds-wood": "/services/custom-blinds",
  "/wood-blinds": "/services/custom-blinds",
  "/blinds-faux-wood": "/services/custom-blinds",
  "/faux-wood-blinds": "/services/custom-blinds",
  "/blinds-vertical": "/services/custom-blinds",
  "/vertical-blinds": "/services/custom-blinds",

  // Custom treatment pages: cannibalizing variants consolidated
  "/custom-window-treatments": "/services",
  "/custom-window-coverings": "/services",
  "/custom-window-solutions": "/services",
  "/custom-drapery": "/services/custom-drapery",
  "/drapery": "/services/custom-drapery",
  "/curtains": "/services/custom-drapery",
  "/motorized-curtains": "/services/motorized-curtains",
  "/outdoor-shades": "/services/outdoor-motorized-shades",
  "/outdoor-motorized-shades": "/services/outdoor-motorized-shades",

  // Locations
  "/bergen-county-nj": "/service-areas/bergen-county-nj",
  "/hudson-county-nj": "/service-areas/hudson-county-nj",
  "/essex-county-nj": "/service-areas/essex-county-nj",
  "/northern-new-jersey": "/service-areas/northern-new-jersey",
  "/fort-lee-nj": "/service-areas/fort-lee-nj",
  "/englewood-nj": "/service-areas/englewood-nj",
  "/edgewater-nj": "/service-areas/edgewater-nj",
  "/manhattan-ny": "/service-areas/manhattan-ny",
  "/brooklyn-ny": "/service-areas/brooklyn-ny",
  "/yonkers-ny": "/service-areas/yonkers-ny",
};

/** Resolve a legacy path to its destination, or null when there is no match. */
export function resolveLegacyPath(pathname: string): string | null {
  let path = pathname.toLowerCase();
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  if (path.endsWith(".html")) path = path.slice(0, -5);
  if (path.endsWith(".htm")) path = path.slice(0, -4);
  if (!path.startsWith("/")) path = `/${path}`;
  const target = legacyRedirects[path];
  if (!target || target === pathname) return null;
  return target;
}
