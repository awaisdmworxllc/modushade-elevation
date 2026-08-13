import { site } from "@/data/site";

type MetaEntry = Record<string, string>;

/**
 * Build a consistent, unique head() payload for a page.
 * Canonical + og:url are relative so they stay correct on any host.
 */
export function pageMeta({
  title,
  description,
  path,
  image,
  type = "website",
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
}) {
  const meta: MetaEntry[] = [
    { title },
    { name: "description", content: description },
    { name: "robots", content: noindex ? "noindex,follow" : "index,follow,max-image-preview:large" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: path },
    { property: "og:site_name", content: site.name },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  if (image) {
    const absolute = image.startsWith("http") ? image : `${site.domain}${image}`;
    meta.push({ property: "og:image", content: absolute });
    meta.push({ name: "twitter:image", content: absolute });
  }
  return { meta, links: [{ rel: "canonical", href: path }] };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${site.domain}${item.path}`,
      })),
    }),
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      description,
      serviceType: name,
      url: `${site.domain}${path}`,
      provider: { "@id": `${site.domain}/#business` },
      areaServed: site.areasServed.map((area) => ({ "@type": "AdministrativeArea", name: area })),
    }),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    }),
  };
}
