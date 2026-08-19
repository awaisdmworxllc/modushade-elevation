import { Check, ChevronRight } from "lucide-react";
import type { LandingConfig } from "@/data/landing";
import { HeroVideo } from "@/components/site/HeroVideo";
import { Section, SectionHeading, Stars } from "@/components/site/ui";
import { reviews, googleAggregate } from "@/data/reviews";
import { processSteps } from "@/data/site";
import { LandingActions, LandingFooter, LandingHeader, StickyMobileCta } from "./LandingChrome";
import { LandingLeadForm } from "./LandingLeadForm";
import { PromoBadge, PromoStrip } from "./Promo";

/**
 * Reusable, conversion-focused landing page shell.
 *
 * Every paid page is assembled from the same blocks (hero → trust → products →
 * real work → why → how it works → reviews → CTA → lead form → FAQ) and driven
 * entirely by a `LandingConfig`, so a new paid page is one data entry plus a
 * one-line route.
 */
export function LandingPage({ config }: { config: LandingConfig }) {
  return (
    <div className="bg-background pb-20 md:pb-0">
      <LandingHeader />
      <main id="main">
        <LandingHero config={config} />
        <TrustStrip items={config.trust} />
        <ProductOptions config={config} />
        <RealWork config={config} />
        <WhyModuShade config={config} />
        <HowItWorks />
        <SocialProof />
        <FooterCta />
        <ConsultationBlock config={config} />
        <LandingFaq config={config} />
      </main>
      <LandingFooter />
      <StickyMobileCta />
    </div>
  );
}

/* ---------------------------------- hero ---------------------------------- */

function LandingHero({ config }: { config: LandingConfig }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      {config.heroVideo ? (
        <HeroVideo posterUrl={config.heroImage.src} posterAlt={config.heroImage.alt} />
      ) : (
        <img
          src={config.heroImage.src}
          alt={config.heroImage.alt}
          width={1920}
          height={1080}
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 hero-overlay" aria-hidden="true" />

      <div className="container-page relative grid gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="animate-rise">
          <PromoBadge promo={config.promo} onDark />
          <p className="eyebrow mt-4">{config.eyebrow}</p>
          <h1 className="display-xl mt-4">
            <span className="block">{config.headline}</span>
            <span className="block text-hero-accent">{config.headlineAccent}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-foreground/85 sm:text-lg">
            {config.lead}
          </p>
          <ul className="mt-6 grid gap-2.5">
            {config.heroPoints.map((point) => (
              <li key={point} className="flex gap-3 text-sm font-semibold sm:text-base">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 rounded-2xl border border-primary/40 bg-ink/55 p-5 backdrop-blur-sm">
            <p className="display-md text-xl text-hero-accent sm:text-2xl">
              {config.promo.highlight}
            </p>
            <p className="mt-2 text-sm text-ink-foreground/85 sm:text-base">
              {config.promo.support}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#consultation"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground shadow-lift transition hover:-translate-y-0.5"
            >
              {config.promo.cta}
            </a>
            <LandingActions location="landing_hero" onDark />
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="rounded-2xl border border-ink-foreground/15 bg-ink/60 p-6 text-foreground backdrop-blur-sm">
            <LandingLeadForm
              idPrefix="hero-form"
              formName={`${config.path}#hero`}
              interestOptions={config.interestOptions}
              title={config.promo.formTitle}
              subtitle={config.promo.support}
              submitLabel={config.promo.cta}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- trust bar -------------------------------- */

function TrustStrip({ items }: { items: LandingConfig["trust"] }) {
  return (
    <div className="border-b border-border bg-background">
      <div className="container-page grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title}>
            <p className="display-md text-lg sm:text-xl">{item.title}</p>
            <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------- products -------------------------------- */

function ProductOptions({ config }: { config: LandingConfig }) {
  return (
    <Section tone="sand">
      <SectionHeading
        eyebrow={config.productsEyebrow}
        title={config.productsTitle}
        body={config.productsBody}
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {config.products.map((product) => (
          <article
            key={product.name}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-elegant"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={product.image.src}
                alt={product.image.alt}
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div className="p-6">
              <h3 className="display-md text-lg sm:text-xl">{product.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.body}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10">
        <a
          href="#consultation"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground shadow-lift transition hover:-translate-y-0.5"
        >
          Schedule Your Free Consultation
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </Section>
  );
}

/* -------------------------------- real work ------------------------------- */

function RealWork({ config }: { config: LandingConfig }) {
  return (
    <Section>
      <SectionHeading eyebrow="Our own installations" title={config.workTitle} body={config.workBody} />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {config.work.map((image) => (
          <figure key={image.src} className="overflow-hidden rounded-2xl border border-border">
            <img
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------ why modushade ----------------------------- */

function WhyModuShade({ config }: { config: LandingConfig }) {
  return (
    <Section tone="ink">
      <SectionHeading eyebrow="Why ModuShade" title={config.whyTitle} onDark />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {config.why.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-ink-foreground/15 bg-ink/40 p-6"
          >
            <Check className="h-5 w-5 text-primary" aria-hidden="true" />
            <h3 className="display-md mt-3 text-lg">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-foreground/75">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------- how it works ----------------------------- */

function HowItWorks() {
  return (
    <Section tone="sand">
      <SectionHeading eyebrow="How it works" title="Four simple steps." />
      <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step) => (
          <li key={step.step} className="rounded-2xl border border-border bg-card p-6 shadow-elegant">
            <p className="display-md text-primary">{step.step}</p>
            <h3 className="display-md mt-2 text-lg">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ------------------------------ social proof ------------------------------ */

function SocialProof() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Real Google reviews"
        title="What our clients say."
        body="Genuine reviews from ModuShade customers across New Jersey and New York."
        align="center"
      />
      {googleAggregate ? (
        <p className="mt-6 text-center text-sm font-bold">
          <Stars className="mr-2 align-middle" />
          {googleAggregate.rating.toFixed(1)} from {googleAggregate.reviewCount} Google reviews
        </p>
      ) : null}
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {reviews.slice(0, 3).map((review) => (
          <figure key={review.author} className="rounded-2xl border border-border bg-card p-7 shadow-elegant">
            <Stars />
            <blockquote className="display-md mt-4 text-lg leading-snug">
              &ldquo;{review.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-xs tracking-wide text-muted-foreground uppercase">
              {review.author} · {review.source}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------------- cta band -------------------------------- */

function FooterCta() {
  return (
    <Section tone="ink" className="text-center">
      <p className="eyebrow">Free in-home consultation · Free professional installation</p>
      <h2 className="display-lg mt-4">Ready to Upgrade Your Windows?</h2>
      <p className="mx-auto mt-4 max-w-2xl text-base text-ink-foreground/80 sm:text-lg">
        Schedule your free in-home consultation. We bring samples, measure properly and give you a
        straight answer.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#consultation"
          className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground shadow-lift transition hover:-translate-y-0.5"
        >
          Schedule My Free Consultation
        </a>
        <LandingActions location="landing_cta_band" onDark />
      </div>
    </Section>
  );
}

/* ------------------------------ form + image ------------------------------ */

function ConsultationBlock({ config }: { config: LandingConfig }) {
  return (
    <Section id="consultation" tone="sand">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <img
            src={config.formImage.src}
            alt={config.formImage.alt}
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded-2xl border border-border object-cover shadow-elegant"
          />
        </div>
        <div className="order-1 lg:order-2">
          <PromoStrip promo={config.promo} />
          <LandingLeadForm
            idPrefix="consultation-form"
            formName={config.path}
            interestOptions={config.interestOptions}
            title={config.promo.formTitle}
            subtitle={config.promo.support}
            submitLabel={config.promo.cta}
          />
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------------- faq ---------------------------------- */

function LandingFaq({ config }: { config: LandingConfig }) {
  return (
    <Section>
      <SectionHeading eyebrow="Frequently asked questions" title="Good to know." />
      <div className="mt-10 divide-y divide-border border-y border-border">
        {config.faqs.map((faq) => (
          <details key={faq.q} className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between gap-4">
              <h3 className="display-md text-lg sm:text-xl">{faq.q}</h3>
              <ChevronRight
                className="h-5 w-5 shrink-0 text-primary transition group-open:rotate-90"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
