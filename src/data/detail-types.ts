/**
 * Shared shape for the rich, page-specific sections that make each service and
 * service-area page genuinely different from the others.
 *
 * Rules for anyone adding content here:
 * - Content must be written for THAT service / THAT town. Never copy a block and
 *   swap the product or city name.
 * - Never invent customers, addresses, awards, prices or projects.
 */

export type DetailSectionKind =
  | "split" // image on one side, prose + optional bullets on the other
  | "cards" // 2–4 column card grid
  | "steps" // numbered process
  | "checklist" // two-column checklist
  | "compare" // side-by-side "this vs that" pairs
  | "prose"; // wide editorial block, optional bullets

export type DetailSection = {
  /** Stable anchor id, e.g. "how-it-works" */
  id: string;
  kind: DetailSectionKind;
  eyebrow?: string;
  /** H2 for the section */
  title: string;
  /** Optional short standfirst under the H2 */
  intro?: string;
  /** Paragraphs of body copy */
  body?: string[];
  bullets?: string[];
  items?: { name: string; body: string }[];
  image?: { src: string; alt: string };
  /** Which side the image sits on for "split" sections */
  imageSide?: "left" | "right";
  tone?: "paper" | "sand" | "ink";
};

export type ServiceDetail = {
  slug: string;
  /** Page-specific sections, rendered in this order after the intro block. */
  sections: DetailSection[];
  /** Appended to the base FAQs in src/data/services.ts (target 5–7 total). */
  extraFaqs: { q: string; a: string }[];
  /** Service-specific closing CTA copy */
  cta?: { title: string; body: string; buttonLabel?: string };
};

export type LocationDetail = {
  slug: string;
  sections: DetailSection[];
  extraFaqs: { q: string; a: string }[];
  cta?: { title: string; body: string; buttonLabel?: string };
};
