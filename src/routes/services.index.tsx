import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaSection, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { services, serviceGroups } from "@/data/services";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export const Route = createFileRoute("/services/")({
  head: () => ({
    ...pageMeta({
      title: "Custom Window Treatment Services | ModuShade NJ & NYC",
      description:
        "Motorized shades, roller, blackout, zebra, cellular and roman shades, custom blinds and made-to-measure drapery — measured and installed across Northern NJ and New York.",
      path: "/services",
      image: "/images/layered-coverings.jpg",
    }),
    scripts: [breadcrumbJsonLd(crumbs)],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Made-to-measure window treatments, installed properly"
        lead="Each product below solves a different problem — light control, privacy, insulation, blackout or pure design. We help you match the right one to each room."
        image="/images/layered-coverings.jpg"
        imageAlt="Custom shades and drapery layered across a bright living room window"
        breadcrumbs={crumbs}
      />
      {serviceGroups.map((group, index) => (
        <Section key={group.title} tone={index % 2 === 1 ? "sand" : "paper"}>
          <SectionHeading eyebrow={group.title} title={group.blurb} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((s) => s.group === group.title)
              .map((service) => (
                <Link
                  key={service.slug}
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-elegant"
                >
                  <img
                    src={service.heroImage}
                    alt={service.heroAlt}
                    width={640}
                    height={420}
                    loading="lazy"
                    decoding="async"
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="display-md text-lg">{service.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.lead}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </Section>
      ))}
      <CtaSection />
    </>
  );
}
