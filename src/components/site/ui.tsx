import { Link } from "@tanstack/react-router";
import { Check, ChevronRight, Phone, Star } from "lucide-react";
import type { ReactNode } from "react";
import { site, trustPoints } from "@/data/site";
import { reviews, googleAggregate } from "@/data/reviews";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";

/* ---------------------------------- links --------------------------------- */

export function PrimaryButton({
  to,
  children,
  className = "",
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground shadow-lift transition hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </Link>
  );
}

export function GhostButton({
  to,
  children,
  onDark = false,
}: {
  to: string;
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 rounded-full border px-7 py-4 text-sm font-bold transition hover:bg-primary hover:text-primary-foreground hover:border-primary ${
        onDark ? "border-ink-foreground/40 text-ink-foreground" : "border-border text-foreground"
      }`}
    >
      {children}
      <ChevronRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

export function CallLinks({
  location,
  onDark = false,
}: {
  location: string;
  onDark?: boolean;
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-bold ${
        onDark ? "text-ink-foreground" : ""
      }`}
    >
      <a
        href={site.phoneHref}
        onClick={() => trackPhoneClick(location)}
        className="inline-flex items-center gap-2 hover:text-primary"
      >
        <Phone className="h-4 w-4" aria-hidden="true" /> {site.phone}
      </a>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener"
        onClick={() => trackWhatsAppClick(location)}
        className="hover:text-primary"
      >
        WhatsApp
      </a>
      <a href={site.emailHref} className="hover:text-primary">
        {site.email}
      </a>
    </div>
  );
}

/* -------------------------------- structure ------------------------------- */

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs font-semibold tracking-wide uppercase">
      <ol className="flex flex-wrap items-center gap-2 opacity-80">
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-2">
            {i < items.length - 1 ? (
              <Link to={item.path} className="hover:text-primary">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page">{item.name}</span>
            )}
            {i < items.length - 1 ? <span className="text-primary">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Section({
  children,
  className = "",
  id,
  tone = "paper",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "paper" | "sand" | "ink";
}) {
  const tones = {
    paper: "bg-background text-foreground",
    sand: "bg-sand text-foreground",
    ink: "bg-gradient-ink text-ink-foreground",
  } as const;
  return (
    <section id={id} className={`${tones[tone]} py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  onDark = false,
}: {
  eyebrow?: string | undefined;
  title: string;
  body?: string | undefined;
  align?: "left" | "center";
  onDark?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="display-lg">{title}</h2>
      {body ? (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            onDark ? "text-ink-foreground/75" : "text-muted-foreground"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
  breadcrumbs: { name: string; path: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <img
        src={image}
        alt={imageAlt}
        width={1600}
        height={900}
        loading="eager"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
      <div className="container-page relative py-16 sm:py-20 lg:py-28">
        <div className="max-w-3xl animate-rise">
          <Breadcrumbs items={breadcrumbs} />
          <p className="eyebrow mt-6">{eyebrow}</p>
          <h1 className="display-xl mt-4">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/85 sm:text-lg">
            {lead}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryButton to="/contact">Get a Free Consultation</PrimaryButton>
            <CallLinks location="page_hero" onDark />
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  return (
    <div className="border-y border-border bg-background">
      <div className="container-page grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((point) => (
          <div key={point.title}>
            <p className="display-md text-lg sm:text-xl">{point.title}</p>
            <p className="mt-2 text-sm text-muted-foreground">{point.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 text-gold ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </span>
  );
}

export function ReviewsSection({ limit = 4 }: { limit?: number }) {
  return (
    <Section tone="sand">
      <SectionHeading
        eyebrow="Real Google reviews"
        title="Our clients say it best."
        body="The same words come up again and again: honest, knowledgeable, clear, professional and easy to work with."
        align="center"
      />
      {googleAggregate ? (
        <p className="mt-6 text-center text-sm font-bold">
          <Stars className="mr-2 align-middle" />
          {googleAggregate.rating.toFixed(1)} from {googleAggregate.reviewCount} Google reviews
        </p>
      ) : null}
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {reviews.slice(0, limit).map((review) => (
          <figure
            key={review.author}
            className="rounded-2xl border border-border bg-card p-7 shadow-elegant"
          >
            <Stars />
            <blockquote className="display-md mt-4 text-xl leading-snug">
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

export function FaqSection({
  faqs,
  title = "Good to know.",
  eyebrow = "Frequently asked questions",
}: {
  faqs: { q: string; a: string }[];
  title?: string;
  eyebrow?: string;
}) {
  if (!faqs.length) return null;
  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mt-10 divide-y divide-border border-y border-border">
        {faqs.map((faq) => (
          <details key={faq.q} className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-bold sm:text-lg">
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

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed sm:text-base">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CtaSection({
  title = "Ready to love every window?",
  body = "Tell us about your rooms and what you would like to achieve. We bring samples, measure properly, give you a straight answer — and installation is free, handled by our own team.",
  eyebrow = "Free in-home consultation · Free professional installation",

}: {
  title?: string;
  body?: string;
  eyebrow?: string;
}) {
  return (
    <Section tone="ink">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading eyebrow={eyebrow} title={title} body={body} onDark />
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryButton to="/contact">Get a Free Consultation</PrimaryButton>
            <GhostButton to="/services" onDark>
              Browse services
            </GhostButton>

          </div>
        </div>
        <div className="rounded-2xl border border-ink-foreground/15 p-7">
          <p className="eyebrow">Talk to {site.founder} directly</p>
          <p className="mt-4 text-lg font-bold">{site.phone}</p>
          <p className="text-lg font-bold">{site.email}</p>
          <p className="mt-4 text-sm text-ink-foreground/70">{site.serviceAreaSummary}</p>
          <div className="mt-6">
            <CallLinks location="cta_section" onDark />
          </div>
        </div>
      </div>
    </Section>
  );
}
