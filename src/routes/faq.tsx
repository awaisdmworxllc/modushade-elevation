import { createFileRoute } from "@tanstack/react-router";
import { CtaSection, FaqSection, PageHero } from "@/components/site/ui";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
];

const generalFaqs = [
  {
    q: "Is the in-home consultation free?",
    a: "Yes. We bring samples to your home, look at the light and how each room is used, measure, and leave you with clear recommendations at no charge.",
  },
  {
    q: "How long does an order take?",
    a: "Most custom treatments arrive within a few weeks of ordering, depending on fabric and motorization. We confirm the expected window before you commit.",
  },
  {
    q: "Do you measure and install yourselves?",
    a: "Always. The same team measures, installs, programs motors and remotes, tests everything with you and cleans up afterwards.",
  },
  {
    q: "Which areas do you serve?",
    a: `We work throughout ${site.serviceAreaSummary}.`,
  },
  {
    q: "Can you motorize shades without rewiring?",
    a: "Usually yes. Rechargeable battery motors avoid rewiring entirely and suit most rooms; we recommend hardwiring only where it genuinely makes sense.",
  },
];

const allFaqs = [
  ...generalFaqs,
  ...services.flatMap((service) => service.faqs.slice(0, 1)),
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...pageMeta({
      title: "Window Treatment FAQ | ModuShade NJ & NYC",
      description:
        "Answers on pricing, lead times, measuring, motorization, blackout performance and installation for custom window treatments in NJ and New York.",
      path: "/faq",
      image: "/images/fabrics.jpg",
    }),
    scripts: [breadcrumbJsonLd(crumbs), faqJsonLd(allFaqs)],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Straight answers before you buy"
        lead="Pricing, lead times, measuring, motorization and installation — the questions we are asked most, answered without sales language."
        image="/images/fabrics.jpg"
        imageAlt="Window treatment fabric samples in a range of opacities and colors"
        breadcrumbs={crumbs}
      />
      <FaqSection faqs={generalFaqs} title="General questions." eyebrow="The basics" />
      <FaqSection
        faqs={services.flatMap((service) => service.faqs.slice(0, 1))}
        title="Product questions."
        eyebrow="By product"
      />
      <CtaSection />
    </>
  );
}
