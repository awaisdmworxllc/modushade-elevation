/**
 * Projects / Our Work.
 *
 * IMPORTANT: only real, completed ModuShade installations belong here. Nothing
 * in this array may be invented — no fabricated customers, addresses or photos.
 *
 * Adding a project is a single object below. It automatically appears on
 * /projects, gets its own SEO page at /projects/<slug>, is linked from the
 * related service and location pages, and is added to the sitemap.
 *
 * Suggested slug format: motorized-roller-shades-fort-lee-nj
 */

export type Project = {
  slug: string;
  title: string;
  /** e.g. "Fort Lee, NJ" */
  location: string;
  /** slug from src/data/locations.ts, if the town has a service-area page */
  locationSlug?: string;
  /** slug from src/data/services.ts */
  serviceSlug: string;
  /** Product actually installed, e.g. "Motorized blackout roller shades" */
  product: string;
  year?: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  /** What the customer asked for */
  requirements: string[];
  /** What was specified and why */
  solution: string[];
  /** Motorization / control details, if applicable */
  motorization?: string[];
  installationNotes?: string[];
  images: { src: string; alt: string; caption?: string }[];
  beforeAfter?: { before: string; after: string; alt: string };
};

export const projects: Project[] = [];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectsForService = (serviceSlug: string) =>
  projects.filter((p) => p.serviceSlug === serviceSlug);
export const projectsForLocation = (locationSlug: string) =>
  projects.filter((p) => p.locationSlug === locationSlug);
