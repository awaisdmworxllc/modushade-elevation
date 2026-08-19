import type { LandingConfig } from "@/data/landing";
import { site } from "@/data/site";

/**
 * Head metadata for a paid landing page.
 *
 * `noindex, follow` keeps these pages out of organic search so they cannot
 * compete with the main SEO website for the same terms — Google Ads still
 * serves them normally. Remove the robots meta if you ever want one indexed.
 */
export function landingHead(config: LandingConfig) {
  const url = `${site.domain}${config.path}`;
  return {
    meta: [
      { title: config.title },
      { name: "description", content: config.description },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: config.title },
      { property: "og:description", content: config.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: `${site.domain}${config.heroImage.src}` },
      { name: "twitter:image", content: `${site.domain}${config.heroImage.src}` },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          url,
          mainEntity: config.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }),
      },
    ],
  };
}
