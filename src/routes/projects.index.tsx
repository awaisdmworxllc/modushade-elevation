import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaSection, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
];

export const Route = createFileRoute("/projects/")({
  head: () => ({
    ...pageMeta({
      title: "Projects | Custom Window Treatment Installations | ModuShade",
      description:
        "Real ModuShade installations across Bergen County, Northern NJ, Hudson County and New York — motorized shades, blinds and custom drapery.",
      path: "/projects",
      image: "/images/layered-coverings.jpg",
    }),
    scripts: [breadcrumbJsonLd(crumbs)],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Our work, window by window"
        lead="Completed installations with the reasoning behind each specification — what the room needed, what we recommended and how it was installed."
        image="/images/layered-coverings.jpg"
        imageAlt="Layered shades and drapery installed across a residential living space"
        breadcrumbs={crumbs}
      />
      <Section>
        {projects.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to="/projects/$slug"
                params={{ slug: project.slug }}
                className="group block overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-elegant"
              >
                {project.images[0] ? (
                  <img
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    width={640}
                    height={420}
                    loading="lazy"
                    decoding="async"
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : null}
                <div className="p-6">
                  <p className="eyebrow">{project.location}</p>
                  <h2 className="display-md mt-2 text-lg">{project.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Coming soon"
              title="We're photographing our latest installations."
              body="We only publish real ModuShade projects, so this page goes live as soon as our newest installations are photographed and approved by the homeowners. In the meantime, every service page explains exactly what we specify and why."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {services.slice(0, 6).map((service) => (
                <Link
                  key={service.slug}
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="rounded-xl border border-border bg-card px-5 py-4 text-sm font-bold transition hover:border-primary"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Section>
      <CtaSection />
    </>
  );
}
