/**
 * Real ModuShade installation photography.
 *
 * Every entry is a photograph from an actual completed job. Nothing here is
 * stock or generated, so descriptions stay factual: what the treatment is and
 * what kind of room it is in — no invented customers, addresses or dates.
 *
 * `serviceSlugs` lets service pages pull only the photos that genuinely show
 * that product. `category` drives the filters on /projects.
 */

export type GalleryCategory =
  | "Motorized & roller shades"
  | "Zebra & dual shades"
  | "Sheer shades & drapery"
  | "Commercial"
  | "Measuring & installation";

/**
 * Where a photograph is used. Each photo has exactly one purpose so service
 * imagery, area/application imagery and the portfolio gallery stay distinct:
 *  - "service": feature or closing-CTA image on a service page (see imagery.ts)
 *  - "area": feature image on a service-area page (see imagery.ts)
 *  - "about": About page hero
 *  - "gallery": the /projects portfolio grid (and the teaser strips that link to it)
 */
export type GalleryUse = "service" | "area" | "about" | "gallery";

export type GalleryPhoto = {
  /** Base filename in /images/work (without extension) */
  file: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  serviceSlugs: string[];
  use: GalleryUse;
  orientation: "landscape" | "portrait";
};

const w = (file: string) => `/images/work/${file}.jpg`;
const t = (file: string) => `/images/work/${file}-800.jpg`;

export const photoSrc = (photo: GalleryPhoto) => w(photo.file);
export const photoThumb = (photo: GalleryPhoto) => t(photo.file);

export const galleryPhotos: GalleryPhoto[] = [
  {
    file: "zebra-shades-vaulted-bedroom",
    use: "area",
    alt: "Two zebra shades fitted side by side under the vaulted ceiling of a finished attic bedroom",
    caption: "Zebra shades in a vaulted attic bedroom — sheer bands left aligned across both windows.",
    category: "Zebra & dual shades",
    serviceSlugs: ["zebra-shades", "light-filtering-shades"],
    orientation: "landscape",
  },
  {
    file: "zebra-shade-wide-window",
    use: "service",
    alt: "Wide zebra shade lowered across a bedroom window with alternating sheer and solid bands",
    caption: "A single wide zebra shade covering one opening instead of two narrow shades.",
    category: "Zebra & dual shades",
    serviceSlugs: ["zebra-shades"],
    orientation: "landscape",
  },
  {
    file: "zebra-shade-dining-bay",
    use: "gallery",
    alt: "Zebra shades across a dining area window wall with a table and chairs in front",
    caption: "Dining area window wall — shades set to the same height for a clean line.",
    category: "Zebra & dual shades",
    serviceSlugs: ["zebra-shades"],
    orientation: "landscape",
  },
  {
    file: "zebra-shade-small-window",
    use: "gallery",
    alt: "Zebra shade fitted inside the trim of a small bedroom window",
    caption: "Small opening, inside-mounted so the shade sits flush with the trim.",
    category: "Zebra & dual shades",
    serviceSlugs: ["zebra-shades"],
    orientation: "portrait",
  },
  {
    file: "zebra-shade-bedroom-alcove",
    use: "area",
    alt: "Zebra shade lowered in a bedroom alcove window beside a radiator",
    caption: "Alcove window with a radiator below — shade stopped short to keep airflow clear.",
    category: "Zebra & dual shades",
    serviceSlugs: ["zebra-shades"],
    orientation: "portrait",
  },
  {
    file: "roller-shades-guest-bedroom",
    use: "service",
    alt: "Roller shades lowered across two windows in a neutral guest bedroom",
    caption: "Guest bedroom rollers — plain fabric, matched cassettes, aligned hems.",
    category: "Motorized & roller shades",
    serviceSlugs: ["roller-shades", "blackout-shades"],
    orientation: "landscape",
  },
  {
    file: "roller-shade-bedroom-office",
    use: "service",
    alt: "Roller shade half raised above a desk in a bedroom used as a home office",
    caption: "Bedroom-office window set to cut screen glare without losing daylight.",
    category: "Motorized & roller shades",
    serviceSlugs: ["roller-shades", "light-filtering-shades"],
    orientation: "landscape",
  },
  {
    file: "roller-shade-kids-room-lowered",
    use: "service",
    alt: "Blackout roller shade fully lowered over a child's bedroom window",
    caption: "Child's room with the blackout roller down for naps.",
    category: "Motorized & roller shades",
    serviceSlugs: ["blackout-shades", "roller-shades"],
    orientation: "portrait",
  },
  {
    file: "roller-shade-kids-room-raised",
    use: "service",
    alt: "The same child's bedroom window with the blackout roller shade raised into its cassette",
    caption: "Same window with the shade raised — the cassette keeps the roll out of sight.",
    category: "Motorized & roller shades",
    serviceSlugs: ["blackout-shades", "roller-shades"],
    orientation: "portrait",
  },
  {
    file: "roller-shade-bedroom-install",
    use: "gallery",
    alt: "Newly installed roller shade lowered over a bedroom window on install day",
    caption: "Install day: brackets set, shade hung, limits checked before we leave.",
    category: "Motorized & roller shades",
    serviceSlugs: ["roller-shades"],
    orientation: "portrait",
  },
  {
    file: "roller-shade-kitchen-window",
    use: "area",
    alt: "Roller shade fitted above a kitchen window beside cabinetry",
    caption: "Kitchen window — wipe-clean fabric chosen for a work area.",
    category: "Motorized & roller shades",
    serviceSlugs: ["roller-shades", "custom-blinds"],
    orientation: "portrait",
  },
  {
    file: "roller-shade-small-bedroom",
    use: "area",
    alt: "Roller shade lowered over a small bedroom window in an older apartment",
    caption: "Older apartment opening measured out of square, then fitted to the millimetre.",
    category: "Motorized & roller shades",
    serviceSlugs: ["roller-shades"],
    orientation: "portrait",
  },
  {
    file: "roller-shade-sliding-window",
    use: "service",
    alt: "Wide roller shade lowered across a sliding window in a living room",
    caption: "Wide slider covered by one shade so nothing splits the view.",
    category: "Motorized & roller shades",
    serviceSlugs: ["roller-shades", "motorized-shades"],
    orientation: "portrait",
  },
  {
    file: "shades-bathroom-skylight",
    use: "gallery",
    alt: "Light filtering shade fitted to a bathroom window under a sloped ceiling",
    caption: "Bathroom under a sloped ceiling — privacy without blocking the light.",
    category: "Motorized & roller shades",
    serviceSlugs: ["light-filtering-shades", "roller-shades"],
    orientation: "portrait",
  },
  {
    file: "sheer-shades-bay-window",
    use: "service",
    alt: "Sheer shades fitted across the three windows of a bay in an apartment living room",
    caption: "Bay window fitted as three separate shades that read as one run.",
    category: "Sheer shades & drapery",
    serviceSlugs: ["sheer-shades", "light-filtering-shades"],
    orientation: "landscape",
  },
  {
    file: "sheer-drapery-bedroom",
    use: "service",
    alt: "Floor-length sheer drapery panels hung across a bedroom window",
    caption: "Floor-length sheers hung high and wide to make the window feel taller.",
    category: "Sheer shades & drapery",
    serviceSlugs: ["custom-drapery", "sheer-shades"],
    orientation: "portrait",
  },
  {
    file: "sheer-curtains-living-room",
    use: "gallery",
    alt: "Sheer curtains drawn across a living room door window in a room with a vaulted ceiling and skylight",
    caption: "Vaulted living room — sheers soften the door glass under a skylight.",
    category: "Sheer shades & drapery",
    serviceSlugs: ["custom-drapery", "motorized-curtains"],
    orientation: "portrait",
  },
  {
    file: "zebra-shades-office-windows",
    use: "area",
    alt: "Zebra shades fitted across a row of office windows above desks and equipment",
    caption: "Office fit-out: shades sized per window and lowered to a common height.",
    category: "Commercial",
    serviceSlugs: ["zebra-shades", "light-filtering-shades"],
    orientation: "landscape",
  },
  {
    file: "zebra-shades-showroom",
    use: "area",
    alt: "Zebra shades along a showroom window wall with display cases below",
    caption: "Showroom window wall — daylight kept, glare on the cases removed.",
    category: "Commercial",
    serviceSlugs: ["zebra-shades"],
    orientation: "landscape",
  },
  {
    file: "zebra-shades-office-desks",
    use: "gallery",
    alt: "Corner of an office with zebra shades on two window walls above workstations",
    caption: "Corner workspace with shades on both walls for even light.",
    category: "Commercial",
    serviceSlugs: ["zebra-shades"],
    orientation: "landscape",
  },
  {
    file: "restaurant-storefront-shades",
    use: "gallery",
    alt: "Restaurant storefront with shades fitted behind the full-height glazing",
    caption: "Restaurant storefront glazing dressed for the afternoon sun.",
    category: "Commercial",
    serviceSlugs: ["outdoor-motorized-shades", "roller-shades"],
    orientation: "landscape",
  },
  {
    file: "restaurant-interior-shade",
    use: "service",
    alt: "Interior of a restaurant with a dark woven shade lowered over the entrance glazing",
    caption: "Same restaurant from inside — dark weave keeps the room comfortable at the bar.",
    category: "Commercial",
    serviceSlugs: ["outdoor-motorized-shades", "custom-blinds"],
    orientation: "portrait",
  },
  {
    file: "installers-arched-window",
    use: "gallery",
    alt: "Two ModuShade installers on ladders fitting shades at a tall arched window",
    caption: "Tall arched opening handled from ladders by our own installers.",
    category: "Measuring & installation",
    serviceSlugs: ["motorized-shades", "sheer-shades"],
    orientation: "portrait",
  },
  {
    file: "installer-bay-window-shades",
    use: "about",
    alt: "Installer adjusting a newly fitted shade in a bay window",
    caption: "Final adjustment — every shade is tested with the customer before we go.",
    category: "Measuring & installation",
    serviceSlugs: ["sheer-shades", "roller-shades"],
    orientation: "landscape",
  },
  {
    file: "measuring-window-tape",
    use: "gallery",
    alt: "Window opening being measured with a steel tape during a consultation",
    caption: "Measuring the actual opening, top, middle and bottom, before anything is ordered.",
    category: "Measuring & installation",
    serviceSlugs: ["motorized-shades", "custom-blinds"],
    orientation: "portrait",
  },
];

export const galleryCategories: GalleryCategory[] = [
  "Motorized & roller shades",
  "Zebra & dual shades",
  "Sheer shades & drapery",
  "Commercial",
  "Measuring & installation",
];

/** Portfolio photographs — the only ones shown in the /projects grid. */
export const portfolioPhotos = galleryPhotos.filter((p) => p.use === "gallery");

/**
 * Portfolio photos that genuinely show a given service. Used for the teaser
 * strip on service pages, so it never repeats that page's own feature/CTA image.
 */
export const photosForService = (slug: string, limit = 3) =>
  portfolioPhotos.filter((p) => p.serviceSlugs.includes(slug)).slice(0, limit);

export const photoByFile = (file: string) => galleryPhotos.find((p) => p.file === file);
