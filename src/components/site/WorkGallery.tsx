import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  galleryCategories,
  photoSrc,
  photoThumb,
  type GalleryCategory,
  type GalleryPhoto,
} from "@/data/gallery";

/**
 * Filterable grid of real installation photography with a keyboard-accessible
 * lightbox. Thumbnails are the 800px renditions; the lightbox loads the 1600px
 * version only when a photo is opened.
 */
export function WorkGallery({ photos }: { photos: GalleryPhoto[] }) {
  const [active, setActive] = useState<GalleryCategory | "All">("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = active === "All" ? photos : photos.filter((p) => p.category === active);
  const categories = galleryCategories.filter((c) => photos.some((p) => p.category === c));

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((current) =>
        current === null ? null : (current + delta + visible.length) % visible.length,
      ),
    [visible.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, close, step]);

  const current = openIndex === null ? null : visible[openIndex];

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {(["All", ...categories] as const).map((category) => {
          const isActive = active === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActive(category as GalleryCategory | "All");
                setOpenIndex(null);
              }}
              aria-pressed={isActive}
              className={`rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:border-primary"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((photo, index) => (
          <button
            key={photo.file}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group block overflow-hidden rounded-2xl border border-border bg-card text-left transition hover:-translate-y-1 hover:shadow-elegant"
          >
            <img
              src={photoThumb(photo)}
              alt={photo.alt}
              width={photo.orientation === "landscape" ? 800 : 600}
              height={photo.orientation === "landscape" ? 600 : 800}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="p-5">
              <p className="eyebrow">{photo.category}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{photo.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative max-h-full w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={photoSrc(current)}
              alt={current.alt}
              className="mx-auto max-h-[78vh] w-auto rounded-2xl object-contain"
            />
            <p className="mt-4 text-center text-sm text-white/85">{current.caption}</p>
            <button
              type="button"
              onClick={close}
              aria-label="Close photo"
              className="absolute -top-3 right-0 rounded-full bg-white/15 p-2.5 text-white transition hover:bg-white/30"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            {visible.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous photo"
                  className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white transition hover:bg-white/30"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next photo"
                  className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white transition hover:bg-white/30"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
