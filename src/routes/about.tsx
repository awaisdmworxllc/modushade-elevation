import { createFileRoute } from "@tanstack/react-router";
import {
  CtaSection,
  PageHero,
  ReviewsSection,
  Section,
  SectionHeading,
} from "@/components/site/ui";
import { processSteps, site, trustPoints } from "@/data/site";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    ...pageMeta({
      title: "About ModuShade | Window Treatment Specialists in Cresskill NJ",
      description:
        "ModuShade is a local window treatment company based in Cresskill, NJ, offering honest recommendations, precise measuring and professional installation across NJ and NYC.",
      path: "/about",
      image: "/images/gen/consultation-samples.jpg",
    }),
    scripts: [breadcrumbJsonLd(crumbs)],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ModuShade"
        title="A local team that treats your home like a home"
        lead={`Based in ${site.address.locality}, ${site.address.region}. One team from the first consultation to the final adjustment — no subcontracted installers, no pressure to buy the most expensive option.`}
        image="/images/gen/consultation-samples.jpg"
        imageAlt="Installer fitting a custom shade at a residential window"
        breadcrumbs={crumbs}
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="max-w-2xl space-y-5">
            <p className="text-base leading-relaxed text-muted-foreground">
              ModuShade exists because getting window treatments right is mostly about judgement:
              which fabric behaves well in afternoon light, when a motor is worth it, how to handle
              a recess that is out of square. That judgement comes from doing the work — measuring,
              installing and coming back to adjust — not from a catalog.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              So the process is deliberately simple. We visit, look at the actual rooms, bring
              samples, and recommend a focused set of options with the trade-offs explained plainly.
              You get a clear price, we order to your exact openings, and we install and test
              everything with you before we leave.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              The result our customers mention most often is not a product name — it is that the
              process was honest, on time and clean.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <div key={point.title} className="rounded-2xl border border-border bg-card p-6">
                <p className="display-md text-lg">{point.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section tone="sand">
        <SectionHeading eyebrow="Our process" title="How a ModuShade project runs." />
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.step} className="rounded-2xl border border-border bg-card p-6">
              <p className="display-md text-3xl text-primary">{step.step}</p>
              <h2 className="display-md mt-3 text-lg">{step.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>
      <ReviewsSection />
      <CtaSection />
    </>
  );
}
