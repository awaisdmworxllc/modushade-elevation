/**
 * Genuine Google reviews only.
 * Do NOT add, edit or invent reviews here. New entries must be copied verbatim
 * from a real Google review.
 *
 * Aggregate rating / review count are intentionally omitted because they have
 * not been verified. Add `googleAggregate` below only with confirmed numbers
 * taken from the live Google Business Profile.
 */

export type Review = {
  quote: string;
  author: string;
  source: string;
};

export const reviews: Review[] = [
  {
    quote:
      "He walked me through the pros and cons and focused on finding the right fit rather than upselling the most expensive option.",
    author: "Eli K.",
    source: "Google Review",
  },
  {
    quote:
      "They came with samples, explained all the options clearly, and helped us find the perfect fit for our windows and our budget.",
    author: "Shai",
    source: "Google Review",
  },
  {
    quote:
      "One of the best contractors I've dealt with. He returned calls, gave honest advice and made the entire process stress-free.",
    author: "Patricia P.",
    source: "Google Review",
  },
  {
    quote:
      "Professional, honest and knowledgeable. Everything arrived on time, our home was left neat and clean, and the pricing was very reasonable.",
    author: "Michael C.",
    source: "Google Review",
  },
  {
    quote:
      "Lior helped us choose the right blinds for our home. The service and installation were excellent.",
    author: "Saji K.",
    source: "Google Review",
  },
];

/**
 * Set this once the real Google rating and review count are confirmed, e.g.
 * export const googleAggregate = { rating: 5, reviewCount: 24, profileUrl: "..." };
 * Leave as null until then — the UI hides the rating block automatically.
 */
export const googleAggregate: {
  rating: number;
  reviewCount: number;
  profileUrl: string;
} | null = null;
