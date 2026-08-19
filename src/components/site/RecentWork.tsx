import { Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/ui";
import { photoThumb, type GalleryPhoto } from "@/data/gallery";

/**
 * Compact strip of real installation photos, used on the homepage and on
 * service pages. Each page passes a different set of photos so no image is
 * repeated within or across pages.
 */
export function RecentWork({
  photos,
  eyebrow = "Our work",
  title = "Real ModuShade installations.",
  body,
  tone = "paper",
  linkLabel = "See more of our work",
}: {
  photos: GalleryPhoto[];
  eyebrow?: string;
  title?: string;
  body?: string;
  tone?: "paper" | "sand" | "ink";
  linkLabel?: string;
}) {
  if (!photos.length) return null;
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow={eyebrow} title={title} {...(body ? { body } : {})} />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <figure key={photo.file} className="overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src={photoThumb(photo)}
              alt={photo.alt}
              width={photo.orientation === "landscape" ? 800 : 600}
              height={photo.orientation === "landscape" ? 600 : 800}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="p-5 text-sm leading-relaxed text-muted-foreground">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-bold tracking-wide uppercase text-primary underline-offset-4 hover:underline"
        >
          {linkLabel}
        </Link>
      </div>
    </Section>
  );
}
