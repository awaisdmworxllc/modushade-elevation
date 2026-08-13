import type { DetailSection } from "@/data/detail-types";
import { BulletList, Section, SectionHeading } from "@/components/site/ui";

/**
 * Renders the page-specific sections defined in src/data/service-details.*.ts and
 * src/data/location-details.ts. Each section chooses its own layout, so no two
 * pages read or look the same.
 */
export function DetailSections({ sections }: { sections: DetailSection[] }) {
  return (
    <>
      {sections.map((section, index) => (
        <DetailSectionBlock key={section.id} section={section} index={index} />
      ))}
    </>
  );
}

function DetailSectionBlock({ section, index }: { section: DetailSection; index: number }) {
  const tone = section.tone ?? (index % 2 === 1 ? "sand" : "paper");
  const onDark = tone === "ink";
  const bodyClass = onDark ? "text-ink-foreground/80" : "text-muted-foreground";

  const heading = (
    <SectionHeading
      eyebrow={section.eyebrow}
      title={section.title}
      body={section.intro}
      onDark={onDark}
    />
  );

  const prose = section.body?.length ? (
    <div className="mt-6 space-y-4">
      {section.body.map((paragraph) => (
        <p key={paragraph} className={`text-base leading-relaxed ${bodyClass}`}>
          {paragraph}
        </p>
      ))}
    </div>
  ) : null;

  if (section.kind === "split" && section.image) {
    const imageFirst = section.imageSide === "left";
    return (
      <Section id={section.id} tone={tone}>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <img
            src={section.image.src}
            alt={section.image.alt}
            width={1000}
            height={780}
            loading="lazy"
            decoding="async"
            className={`aspect-[5/4] w-full rounded-3xl object-cover shadow-elegant ${
              imageFirst ? "lg:order-first" : "lg:order-last"
            }`}
          />
          <div>
            {heading}
            {prose}
            {section.bullets?.length ? (
              <div className="mt-7">
                <BulletList items={section.bullets} />
              </div>
            ) : null}
            {section.items?.length ? (
              <dl className="mt-7 space-y-4">
                {section.items.map((item) => (
                  <div key={item.name} className="border-l-2 border-primary pl-5">
                    <dt className="display-md text-lg">{item.name}</dt>
                    <dd className={`mt-1.5 text-sm leading-relaxed ${bodyClass}`}>{item.body}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>
        </div>
      </Section>
    );
  }

  if (section.kind === "steps") {
    return (
      <Section id={section.id} tone={tone}>
        {heading}
        {prose}
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {(section.items ?? []).map((item, i) => (
            <li
              key={item.name}
              className={`rounded-2xl border p-6 ${
                onDark ? "border-ink-foreground/15" : "border-border bg-card"
              }`}
            >
              <p className="display-md text-3xl text-primary">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="display-md mt-3 text-lg">{item.name}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${bodyClass}`}>{item.body}</p>
            </li>
          ))}
        </ol>
      </Section>
    );
  }

  if (section.kind === "compare") {
    return (
      <Section id={section.id} tone={tone}>
        {heading}
        {prose}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {(section.items ?? []).map((item) => (
            <div
              key={item.name}
              className={`rounded-3xl border p-7 ${
                onDark ? "border-ink-foreground/15" : "border-border bg-card shadow-elegant"
              }`}
            >
              <h3 className="display-md text-xl">{item.name}</h3>
              <p className={`mt-3 text-sm leading-relaxed sm:text-base ${bodyClass}`}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>
    );
  }

  if (section.kind === "checklist") {
    return (
      <Section id={section.id} tone={tone}>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            {heading}
            {prose}
          </div>
          <div className="lg:pt-2">
            {section.bullets?.length ? <BulletList items={section.bullets} /> : null}
            {section.items?.length ? (
              <dl className="mt-8 space-y-4">
                {section.items.map((item) => (
                  <div key={item.name}>
                    <dt className="display-md text-lg">{item.name}</dt>
                    <dd className={`mt-1 text-sm leading-relaxed ${bodyClass}`}>{item.body}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>
        </div>
      </Section>
    );
  }

  if (section.kind === "cards") {
    return (
      <Section id={section.id} tone={tone}>
        {heading}
        {prose}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {(section.items ?? []).map((item) => (
            <div
              key={item.name}
              className={`rounded-2xl border p-6 transition hover:-translate-y-1 ${
                onDark ? "border-ink-foreground/15" : "border-border bg-card hover:shadow-elegant"
              }`}
            >
              <h3 className="display-md text-lg">{item.name}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${bodyClass}`}>{item.body}</p>
            </div>
          ))}
        </div>
        {section.bullets?.length ? (
          <div className="mt-10">
            <BulletList items={section.bullets} />
          </div>
        ) : null}
      </Section>
    );
  }

  // prose (and any split without an image)
  return (
    <Section id={section.id} tone={tone}>
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div>{heading}</div>
        <div>
          {section.body?.length ? (
            <div className="space-y-4">
              {section.body.map((paragraph) => (
                <p key={paragraph} className={`text-base leading-relaxed ${bodyClass}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null}
          {section.bullets?.length ? (
            <div className="mt-7">
              <BulletList items={section.bullets} />
            </div>
          ) : null}
          {section.items?.length ? (
            <dl className="mt-7 grid gap-5 sm:grid-cols-2">
              {section.items.map((item) => (
                <div key={item.name}>
                  <dt className="display-md text-lg">{item.name}</dt>
                  <dd className={`mt-1.5 text-sm leading-relaxed ${bodyClass}`}>{item.body}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
