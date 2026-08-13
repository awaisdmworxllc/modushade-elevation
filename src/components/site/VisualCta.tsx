import { CallLinks, GhostButton, PrimaryButton, Section } from "@/components/site/ui";

/**
 * Premium image + content CTA block used on inner pages in place of the full
 * consultation form (which now lives only on the homepage and /contact).
 * `imageSide` lets pages alternate the layout so inner pages don't feel repetitive.
 */
export function VisualCta({
  eyebrow = "Next step",
  title,
  body,
  image,
  imageAlt,
  imageSide = "left",
  ctaLabel = "Get a Free Consultation",
  secondary,
  tone = "sand",
  trackingLocation = "inner_page",
}: {
  eyebrow?: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  imageSide?: "left" | "right";
  ctaLabel?: string;
  secondary?: { label: string; to: string };
  tone?: "paper" | "sand" | "ink";
  trackingLocation?: string;
}) {
  const onDark = tone === "ink";
  return (
    <Section tone={tone}>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <img
          src={image}
          alt={imageAlt}
          width={900}
          height={700}
          loading="lazy"
          decoding="async"
          className={`h-full max-h-[26rem] w-full rounded-3xl object-cover shadow-elegant ${
            imageSide === "right" ? "lg:order-2" : ""
          }`}
        />
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="display-md mt-4 text-3xl sm:text-4xl">{title}</h2>
          <p
            className={`mt-5 max-w-xl text-base leading-relaxed ${
              onDark ? "text-ink-foreground/85" : "text-muted-foreground"
            }`}
          >
            {body}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryButton to="/contact">{ctaLabel}</PrimaryButton>
            {secondary ? (
              <GhostButton to={secondary.to} onDark={onDark}>
                {secondary.label}
              </GhostButton>
            ) : null}
          </div>
          <div className="mt-7">
            <CallLinks location={trackingLocation} onDark={onDark} />
          </div>
        </div>
      </div>
    </Section>
  );
}
