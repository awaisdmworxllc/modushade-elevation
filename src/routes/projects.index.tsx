import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaSection, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { WorkGallery } from "@/components/site/WorkGallery";
import { galleryCategories, portfolioPhotos } from "@/data/gallery";
import { services } from "@/data/services";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Our work", path: "/projects" },
];

export const Route = createFileRoute("/projects/")({
  head: () => ({
    ...pageMeta({
      title: "Our Work | Shade & Blind Installations in NJ and NY | ModuShade",
      description:
        "Photographs of real ModuShade installations — motorized and roller shades, zebra shades, sheer shades, drapery and commercial fit-outs across Northern NJ and New York.",
      path: "/projects",
      image: "/images/work/installers-arched-window.jpg",
    }),
    scripts: [breadcrumbJsonLd(crumbs)],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Window by window, in real homes and businesses"
        lead="Every photograph below is a finished ModuShade job — measured, made to the opening and installed by our own team. Filter by the kind of treatment you are considering."
        image="/images/work/installers-arched-window.jpg"
        imageAlt="ModuShade installers on ladders fitting shades at a tall arched window"
        breadcrumbs={crumbs}
      />

      <Section>
        <SectionHeading
          eyebrow={`${portfolioPhotos.length} photographs`}
          title="Recent installations."
          body="Bedrooms, kitchens, bay windows, vaulted ceilings, offices and storefronts — including the awkward openings that make the difference between a shade that fits and one that nearly fits."
        />
        <div className="mt-10">
          <WorkGallery photos={portfolioPhotos} />
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="By product"
          title="See the service behind each install."
          body={`Our work spans ${galleryCategories.length} categories. Each service page explains what we specify, why, and what it costs to get right.`}
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="rounded-full border border-border bg-card px-5 py-3 text-sm font-bold transition hover:border-primary"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Want this standard of finish at your windows?"
        body="Book a free in-home consultation and we will bring samples, measure your openings and give you a straight price."
      />
    </>
  );
}
