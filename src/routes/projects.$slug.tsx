import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  BulletList,
  CtaSection,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/site/ui";
import { getProject } from "@/data/projects";
import { getService } from "@/data/services";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";
import { site } from "@/data/site";

/**
 * Case-study page for a completed installation. Add a project to
 * src/data/projects.ts and this page, the projects index, the related service
 * and location pages and the sitemap all pick it up automatically.
 */
export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    const project = loaderData?.project;
    const path = `/projects/${params.slug}`;
    if (!project) {
      return pageMeta({
        title: "Project not found | ModuShade",
        description: "This project page is unavailable.",
        path,
        noindex: true,
      });
    }
    const crumbs = [
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
      { name: project.title, path },
    ];
    return {
      ...pageMeta({
        title: project.seoTitle,
        description: project.seoDescription,
        path,
        type: "article",
        ...(project.images[0] ? { image: project.images[0].src } : {}),
      }),
      scripts: [breadcrumbJsonLd(crumbs)],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const service = getService(project.serviceSlug);
  const hero = project.images[0];

  return (
    <>
      <PageHero
        eyebrow={`${project.product} · ${project.location}`}
        title={project.title}
        lead={project.summary}
        image={hero?.src ?? "/images/installation.jpg"}
        imageAlt={hero?.alt ?? `${project.product} installed in ${project.location}`}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: project.title, path: `/projects/${project.slug}` },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading eyebrow="The brief" title="What the client needed." />
            <div className="mt-7">
              <BulletList items={project.requirements} />
            </div>
            <div className="mt-12">
              <SectionHeading eyebrow="The specification" title="What we installed, and why." />
              <div className="mt-7 space-y-4">
                {project.solution.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <aside className="h-fit rounded-3xl border border-border bg-card p-7">
            <p className="eyebrow">Project details</p>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="font-bold">Location</dt>
                <dd className="text-muted-foreground">{project.location}</dd>
              </div>
              <div>
                <dt className="font-bold">Product installed</dt>
                <dd className="text-muted-foreground">{project.product}</dd>
              </div>
              {project.year ? (
                <div>
                  <dt className="font-bold">Completed</dt>
                  <dd className="text-muted-foreground">{project.year}</dd>
                </div>
              ) : null}
              {service ? (
                <div>
                  <dt className="font-bold">Service</dt>
                  <dd>
                    <Link
                      to="/services/$slug"
                      params={{ slug: service.slug }}
                      className="text-primary underline"
                    >
                      {service.name}
                    </Link>
                  </dd>
                </div>
              ) : null}
              {project.locationSlug ? (
                <div>
                  <dt className="font-bold">Service area</dt>
                  <dd>
                    <Link
                      to="/service-areas/$slug"
                      params={{ slug: project.locationSlug }}
                      className="text-primary underline"
                    >
                      {project.location}
                    </Link>
                  </dd>
                </div>
              ) : null}
            </dl>
            <p className="mt-6 text-sm text-muted-foreground">
              Planning something similar? Talk to {site.founder} on {site.phone}.
            </p>
          </aside>
        </div>
      </Section>

      {project.motorization?.length ? (
        <Section tone="sand">
          <SectionHeading eyebrow="Control" title="How it is operated." />
          <div className="mt-7 max-w-3xl">
            <BulletList items={project.motorization} />
          </div>
        </Section>
      ) : null}

      {project.images.length > 1 ? (
        <Section>
          <SectionHeading eyebrow="The finished install" title="On site." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {project.images.slice(1).map((image) => (
              <figure key={image.src}>
                <img
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={700}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[5/4] w-full rounded-3xl object-cover shadow-elegant"
                />
                {image.caption ? (
                  <figcaption className="mt-3 text-sm text-muted-foreground">
                    {image.caption}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </Section>
      ) : null}

      {project.installationNotes?.length ? (
        <Section tone="sand">
          <SectionHeading eyebrow="Installation notes" title="The details that mattered." />
          <div className="mt-7 max-w-3xl">
            <BulletList items={project.installationNotes} />
          </div>
        </Section>
      ) : null}

      <CtaSection
        title={`Want something like this in your home?`}
        body={`We can walk your rooms, bring the same fabrics and controls used on this project, and give you a straight price.`}
      />
    </>
  );
}
