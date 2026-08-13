import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ConsultationForm } from "@/components/site/ConsultationForm";
import { DetailSections } from "@/components/site/DetailSections";
import {
  BulletList,
  CtaSection,
  FaqSection,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/site/ui";
import { getService } from "@/data/services";
import { getServiceDetail } from "@/data/details";
import { coreLocations } from "@/data/locations";
import { breadcrumbJsonLd, faqJsonLd, pageMeta, serviceJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    const detail = getServiceDetail(params.slug);
    const faqs = [...service.faqs, ...(detail?.extraFaqs ?? [])];
    return { service, detail, faqs };
  },
  head: ({ params, loaderData }) => {
    const service = loaderData?.service;
    const path = `/services/${params.slug}`;
    if (!service) {
      return pageMeta({
        title: "Service not found | ModuShade",
        description: "This service page is unavailable.",
        path,
        noindex: true,
      });
    }
    const crumbs = [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: service.name, path },
    ];
    return {
      ...pageMeta({
        title: service.seoTitle,
        description: service.seoDescription,
        path,
        image: service.heroImage,
      }),
      scripts: [
        breadcrumbJsonLd(crumbs),
        serviceJsonLd({ name: service.name, description: service.seoDescription, path }),
        ...(loaderData.faqs.length ? [faqJsonLd(loaderData.faqs)] : []),
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service, detail, faqs } = Route.useLoaderData();
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.h1}
        lead={service.lead}
        image={service.heroImage}
        imageAlt={service.heroAlt}
        breadcrumbs={crumbs}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl space-y-5">
            {service.intro.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
            <div className="pt-4">
              <h2 className="display-md text-2xl">Where it works best</h2>
              <div className="mt-5">
                <BulletList items={service.applications} />
              </div>
            </div>
          </div>
          <ConsultationForm
            defaultService={service.name}
            formName={`service_${service.slug}`}
          />
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Options" title="Choose the version that fits the room." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.options.map((option) => (
            <div key={option.name} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="display-md text-lg">{option.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{option.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Benefits" title="Why homeowners choose it." />
            <dl className="mt-8 space-y-5">
              {service.benefits.map((benefit) => (
                <div key={benefit.name} className="border-l-2 border-primary pl-5">
                  <dt className="display-md text-lg">{benefit.name}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {benefit.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <SectionHeading eyebrow="Made to measure" title="Customization." />
            <div className="mt-8">
              <BulletList items={service.customization} />
            </div>
          </div>
        </div>
      </Section>

      {detail ? <DetailSections sections={detail.sections} /> : null}


      <Section tone="sand">
        <SectionHeading eyebrow="Related" title="Often specified alongside." />
        <div className="mt-8 flex flex-wrap gap-3">
          {service.related.map((slug) => {
            const related = getService(slug);
            if (!related) return null;
            return (
              <Link
                key={slug}
                to="/services/$slug"
                params={{ slug }}
                className="rounded-full border border-border bg-card px-5 py-3 text-sm font-bold transition hover:border-primary"
              >
                {related.name}
              </Link>
            );
          })}
        </div>
        <SectionHeading
          eyebrow="Service areas"
          title={`${service.name} near you.`}
          body="We measure and install throughout Northern New Jersey and selected New York areas."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          {coreLocations.map((location) => (
            <Link
              key={location.slug}
              to="/service-areas/$slug"
              params={{ slug: location.slug }}
              className="rounded-full border border-border bg-card px-5 py-3 text-sm font-bold transition hover:border-primary"
            >
              {location.shortName}
            </Link>
          ))}
        </div>
      </Section>

      <FaqSection faqs={service.faqs} title={`${service.name}: your questions answered.`} />
      <CtaSection />
    </>
  );
}
