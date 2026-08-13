import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaSection, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { locations } from "@/data/locations";
import { site } from "@/data/site";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Service areas", path: "/service-areas" },
];

export const Route = createFileRoute("/service-areas/")({
  head: () => ({
    ...pageMeta({
      title: "Service Areas: Bergen County, Northern NJ & NYC | ModuShade",
      description:
        "ModuShade installs custom window treatments across Bergen County, Hudson County, Essex County, Northern New Jersey, Manhattan, Brooklyn and Yonkers.",
      path: "/service-areas",
      image: "/images/nj-home.jpg",
    }),
    scripts: [breadcrumbJsonLd(crumbs)],
  }),
  component: ServiceAreasIndex,
});

function ServiceAreasIndex() {
  const nj = locations.filter((l) => l.region === "New Jersey");
  const ny = locations.filter((l) => l.region === "New York");
  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title="Local window treatment specialists"
        lead={`Based in ${site.address.locality}, ${site.address.region}, working throughout ${site.serviceAreaSummary}.`}
        image="/images/nj-home.jpg"
        imageAlt="Residential street of homes in Northern New Jersey"
        breadcrumbs={crumbs}
      />
      {[
        { title: "New Jersey", items: nj },
        { title: "New York", items: ny },
      ].map((group, index) => (
        <Section key={group.title} tone={index % 2 === 1 ? "sand" : "paper"}>
          <SectionHeading eyebrow={group.title} title={`Where we work in ${group.title}.`} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((location) => (
              <Link
                key={location.slug}
                to="/service-areas/$slug"
                params={{ slug: location.slug }}
                className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-elegant"
              >
                <h3 className="display-md text-lg">{location.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {location.lead}
                </p>
              </Link>
            ))}
          </div>
        </Section>
      ))}
      <CtaSection />
    </>
  );
}
