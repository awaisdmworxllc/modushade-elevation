import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { VisualCta } from "@/components/site/VisualCta";
import { DetailSections } from "@/components/site/DetailSections";
import {
  BulletList,
  CtaSection,
  FaqSection,
  PageHero,
  ReviewsSection,
  Section,
  SectionHeading,
} from "@/components/site/ui";
import { getLocation } from "@/data/locations";
import { getLocationDetail } from "@/data/details";
import { getService } from "@/data/services";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/service-areas/$slug")({
  loader: ({ params }) => {
    const location = getLocation(params.slug);
    if (!location) throw notFound();
    const detail = getLocationDetail(params.slug);
    const faqs = [...location.faqs, ...(detail?.extraFaqs ?? [])];
    return { location, detail, faqs };
  },
  head: ({ params, loaderData }) => {
    const location = loaderData?.location;
    const path = `/service-areas/${params.slug}`;
    if (!location) {
      return pageMeta({
        title: "Service area not found | ModuShade",
        description: "This service area page is unavailable.",
        path,
        noindex: true,
      });
    }
    return {
      ...pageMeta({
        title: location.seoTitle,
        description: location.seoDescription,
        path,
        image: location.heroImage,
      }),
      scripts: [
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Service areas", path: "/service-areas" },
          { name: location.name, path },
        ]),
        ...(loaderData.faqs.length ? [faqJsonLd(loaderData.faqs)] : []),
      ],
    };
  },
  component: LocationPage,
});

function LocationPage() {
  const { location, detail, faqs } = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow={location.name}
        title={location.h1}
        lead={location.lead}
        image={location.heroImage}
        imageAlt={location.heroAlt}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Service areas", path: "/service-areas" },
          { name: location.name, path: `/service-areas/${location.slug}` },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl space-y-5">
            {location.context.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
            <div className="pt-4">
              <h2 className="display-md text-2xl">Areas we cover from here</h2>
              <div className="mt-5">
                <BulletList items={location.covers} />
              </div>
            </div>
          </div>
          <img
            src={location.heroImage}
            alt={location.heroAlt}
            width={900}
            height={1100}
            loading="lazy"
            decoding="async"
            className="h-full min-h-[22rem] w-full rounded-3xl object-cover shadow-elegant"
          />
        </div>
      </Section>

      <VisualCta
        eyebrow={`Serving ${location.shortName}`}
        title={`Talk to ModuShade about your ${location.shortName} windows.`}
        body={`We bring samples to ${location.shortName} homes, measure every opening on site and install with our own team — so you get one clear recommendation instead of a catalogue.`}
        image={location.heroImage}
        imageAlt={location.heroAlt}
        imageSide="left"
        ctaLabel="Get a Free Consultation"
        secondary={{ label: "All service areas", to: "/service-areas" }}
        trackingLocation={`area_${location.slug}_cta`}
      />

      <Section tone="sand">
        <SectionHeading
          eyebrow="Local window challenges"
          title={`What we actually see in ${location.shortName}.`}
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {location.needs.map((need) => (
            <div key={need.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="display-md text-lg">{need.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{need.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Most requested locally"
          title={`Popular treatments in ${location.shortName}.`}
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {location.focusServices.map((slug) => {
            const service = getService(slug);
            if (!service) return null;
            return (
              <Link
                key={slug}
                to="/services/$slug"
                params={{ slug }}
                className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-elegant"
              >
                <h3 className="display-md text-lg">{service.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.lead}
                </p>
              </Link>
            );
          })}
        </div>
      </Section>

      {detail ? <DetailSections sections={detail.sections} /> : null}

      <ReviewsSection limit={2} />
      <FaqSection faqs={faqs} title={`${location.shortName}: common questions.`} />
      {detail?.cta ? <CtaSection title={detail.cta.title} body={detail.cta.body} /> : <CtaSection />}
    </>
  );
}
