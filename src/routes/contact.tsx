import { createFileRoute } from "@tanstack/react-router";
import { ConsultationForm } from "@/components/site/ConsultationForm";
import { CallLinks, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { processSteps, site } from "@/data/site";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...pageMeta({
      title: "Free In-Home Consultation | Contact ModuShade NJ & NYC",
      description:
        "Book a free in-home window treatment consultation with ModuShade. Call (201) 846-6181 or send us your details and we will bring samples to your home.",
      path: "/contact",
      image: "/images/consultation.jpg",
    }),
    scripts: [breadcrumbJsonLd(crumbs)],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book your free in-home consultation"
        lead="Tell us about your rooms. We bring samples, measure properly and give you a straight answer on what suits each window."
        image="/images/consultation.jpg"
        imageAlt="Designer showing fabric samples to homeowners at a window"
        breadcrumbs={crumbs}
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Talk to us"
              title={`Speak with ${site.founder} directly.`}
              body={`We work throughout ${site.serviceAreaSummary}.`}
            />
            <div className="mt-8 space-y-2 text-lg font-bold">
              <p>{site.phone}</p>
              <p>{site.email}</p>
              <p className="text-sm font-normal text-muted-foreground">
                {site.address.locality}, {site.address.region} {site.address.postalCode}
              </p>
            </div>
            <div className="mt-6">
              <CallLinks location="contact_page" />
            </div>
            <ol className="mt-10 space-y-4">
              {processSteps.map((step) => (
                <li key={step.step} className="border-l-2 border-primary pl-5">
                  <p className="display-md text-base">
                    {step.step} — {step.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
          <ConsultationForm formName="contact_page" />
        </div>
      </Section>
    </>
  );
}
