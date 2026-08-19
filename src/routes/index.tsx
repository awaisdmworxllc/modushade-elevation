import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { HeroVideo } from "@/components/site/HeroVideo";
import { RecentWork } from "@/components/site/RecentWork";
import { ConsultationForm } from "@/components/site/ConsultationForm";
import {
  CallLinks,
  CtaSection,
  FaqSection,
  GhostButton,
  PrimaryButton,
  ReviewsSection,
  Section,
  SectionHeading,
  TrustBar,
} from "@/components/site/ui";
import { services, serviceGroups } from "@/data/services";
import { galleryPhotos, photoByFile } from "@/data/gallery";
import { coreLocations } from "@/data/locations";
import { processSteps, site } from "@/data/site";
import { faqJsonLd, pageMeta } from "@/lib/seo";

const homeFaqs = [
  {
    q: "How much do custom window treatments cost?",
    a: "It depends on size, fabric and whether the treatment is motorized. Rather than guessing, we measure your actual windows and give you a written price with options at different levels — so you can see exactly what changes the number.",
  },
  {
    q: "Is the in-home consultation really free?",
    a: "Yes. We bring samples to your home, look at the light and the way each room is used, measure, and leave you with clear recommendations. There is no charge and no obligation.",
  },
  {
    q: "Do you install what you sell?",
    a: "Always. The same team measures and installs, programs any motors and remotes, tests each treatment with you and cleans up before leaving.",
  },
  {
    q: "Which areas do you cover?",
    a: `We work throughout ${site.serviceAreaSummary}.`,
  },
];

export const Route = createFileRoute("/")({
  head: () => {
    const base = pageMeta({
      title: "Custom Window Treatments in Bergen County NJ & NYC | ModuShade",
      description:
        "Motorized shades, blinds and custom drapery, measured and installed by ModuShade. Free in-home consultation across Bergen County, Northern NJ, Hudson County and Manhattan.",
      path: "/",
      image: "/images/shades-hero.jpg",
    });
    return { ...base, scripts: [faqJsonLd(homeFaqs)] };
  },
  component: HomePage,
});

function HomePage() {
  const featured = services.filter((s) => s.featured);
  return (
    <>
      <section className="relative isolate flex min-h-[86vh] items-center overflow-hidden">
        <HeroVideo />
        <div className="container-page relative py-20 lg:py-28">
          <div className="max-w-3xl animate-rise text-ink-foreground">
            <p className="eyebrow">{site.serviceAreaShort}</p>
            <h1 className="display-xl mt-5 text-ink-foreground">
              Premium custom window treatments.{" "}
              <span className="text-hero-accent">Without the premium price.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/85 sm:text-lg">
              Motorized shades, blinds and made-to-measure drapery — recommended honestly,
              measured precisely and installed by our own team across Northern New Jersey and New
              York.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <PrimaryButton to="/contact">Get a Free Consultation</PrimaryButton>
              <GhostButton to="/services/motorized-shades" onDark>
                Explore motorized shades
              </GhostButton>
            </div>
            <div className="mt-8">
              <CallLinks location="home_hero" onDark />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Our specialty"
              title="Motorized shades that make a whole house feel effortless"
              body="Tall great-room glass, stairwell windows, wide sliders and bedrooms you want properly dark — motorization is where the difference is most obvious. We specify fabric, motor and control together so the finished system feels designed, not added on."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Battery or hardwired", "Whichever suits the opening, wiring and how often it runs."],
                ["Remote, wall, app or voice", "Grouped scenes so a whole wall moves on one command."],
                ["Quiet, precise motors", "Aligned hems and repeatable stop points on every shade."],
                ["Programmed on site", "Limits, groups and schedules set and tested with you."],
              ].map(([title, body]) => (
                <li key={title} className="rounded-2xl border border-border bg-card p-5">
                  <p className="display-md text-lg">{title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <GhostButton to="/services/motorized-shades">Motorized shades in detail</GhostButton>
            </div>
          </div>
          <img
            src="/images/custom-hero.jpg"
            alt="Motorized roller shades aligned across floor-to-ceiling windows in a modern living room"
            width={900}
            height={1100}
            loading="lazy"
            decoding="async"
            className="h-full w-full rounded-3xl object-cover shadow-elegant"
          />
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="What we make"
          title="One team for every window in the house."
          body="Distinct products for distinct problems — light control, privacy, insulation, blackout and pure design."
        />
        <div className="mt-12 space-y-12">
          {serviceGroups.map((group) => (
            <div key={group.title}>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="display-md text-2xl">{group.title}</h3>
                <p className="max-w-xl text-sm text-muted-foreground">{group.blurb}</p>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                        <h4 className="display-md text-lg">{service.name}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {service.lead}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase text-primary">
                          Learn more <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
        {featured.length ? null : <div className="sr-only">Services list</div>}
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How it works"
          title="Four steps, no surprises."
          body="From the first visit to the final adjustment, the same people handle your project."
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.step} className="rounded-2xl border border-border bg-card p-6">
              <p className="display-md text-3xl text-primary">{step.step}</p>
              <h3 className="display-md mt-3 text-lg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <RecentWork
        photos={[
          photoByFile("zebra-shades-vaulted-bedroom"),
          photoByFile("sheer-shades-bay-window"),
          photoByFile("restaurant-storefront-shades"),
        ].filter((p): p is (typeof galleryPhotos)[number] => Boolean(p))}
        eyebrow="Our work"
        title="Recent ModuShade installations."
        body="Real photographs from finished jobs — homes, apartments and businesses across Northern New Jersey and New York."
        tone="paper"
      />

      <ReviewsSection />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Where we work"
              title="Local, and it shows."
              body="Based in Cresskill, NJ. Close enough to drop off samples, re-check a measurement or come back to adjust a motor limit without it becoming a project."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {coreLocations.map((location) => (
                <Link
                  key={location.slug}
                  to="/service-areas/$slug"
                  params={{ slug: location.slug }}
                  className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 text-sm font-bold transition hover:border-primary"
                >
                  {location.name}
                  <ArrowRight className="h-4 w-4 text-primary" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <GhostButton to="/service-areas">All service areas</GhostButton>
            </div>
          </div>
          <ConsultationForm formName="home_consultation" />
        </div>
      </Section>

      <FaqSection faqs={homeFaqs} title="Questions we hear every week." />
      <CtaSection />
    </>
  );
}
