/**
 * Per-page imagery.
 *
 * Every service and service-area page gets its OWN feature image (the
 * content-and-image block near the top) and its OWN closing CTA image, so no
 * photograph is repeated across pages or twice within a single page. Page hero
 * images live on the service/location records themselves.
 */

export type PageImage = { src: string; alt: string };
export type PageImagery = { feature: PageImage; cta: PageImage };

export const serviceImagery: Record<string, PageImagery> = {
  "motorized-shades": {
    feature: {
      src: "/images/gen/motorized-shades-feature.jpg",
      alt: "Homeowner using a handheld remote as motorized roller shades lower across a wall of living room glass",
    },
    cta: {
      src: "/images/gen/motorized-shades-cta.jpg",
      alt: "Installer mounting a motorized shade headrail bracket at a tall great-room window",
    },
  },
  "roller-shades": {
    feature: {
      src: "/images/gen/roller-shades-feature.jpg",
      alt: "Crisp white roller shade half lowered above a dining table in a bright minimalist room",
    },
    cta: {
      src: "/images/gen/roller-shades-cta.jpg",
      alt: "Roller shades set at matching heights across a wide sliding glass door",
    },
  },
  "blackout-shades": {
    feature: {
      src: "/images/gen/blackout-shades-feature.jpg",
      alt: "Bedroom darkened in daytime by blackout shades with only a thin rim of light at the edges",
    },
    cta: {
      src: "/images/gen/blackout-shades-cta.jpg",
      alt: "Nursery with a blackout shade lowered for daytime naps",
    },
  },
  "light-filtering-shades": {
    feature: {
      src: "/images/gen/light-filtering-shades-feature.jpg",
      alt: "Sunlight diffused softly through light filtering shades in a home office",
    },
    cta: {
      src: "/images/gen/light-filtering-shades-cta.jpg",
      alt: "Light filtering shades softening midday sun in a white kitchen with island seating",
    },
  },
  "zebra-shades": {
    feature: {
      src: "/images/gen/zebra-shades-feature.jpg",
      alt: "Close view of zebra shade bands alternating sheer and solid across an apartment window",
    },
    cta: {
      src: "/images/gen/zebra-shades-cta.jpg",
      alt: "Zebra shades set for daytime privacy in a city bedroom",
    },
  },
  "cellular-shades": {
    feature: {
      src: "/images/gen/cellular-shades-feature.jpg",
      alt: "Cellular honeycomb shades fitted across a bay window in a family room",
    },
    cta: {
      src: "/images/gen/cellular-shades-cta.jpg",
      alt: "Detail of the honeycomb cell structure on a white cellular shade",
    },
  },
  "roman-shades": {
    feature: {
      src: "/images/gen/roman-shades-feature.jpg",
      alt: "Flat-fold Roman shades in natural linen above a kitchen sink window",
    },
    cta: {
      src: "/images/gen/roman-shades-cta.jpg",
      alt: "Relaxed-fold Roman shade in patterned fabric over a bedroom window seat",
    },
  },
  "sheer-shades": {
    feature: {
      src: "/images/gen/sheer-shades-feature.jpg",
      alt: "Sheer shade with soft fabric vanes glowing against daylight in a neutral sitting room",
    },
    cta: {
      src: "/images/gen/sheer-shades-cta.jpg",
      alt: "Sheer shades veiling a wide corner window in a bright bedroom",
    },
  },
  "custom-drapery": {
    feature: {
      src: "/images/gen/custom-drapery-feature.jpg",
      alt: "Floor-length pinch-pleat drapery panels framing a tall window in a formal living room",
    },
    cta: {
      src: "/images/gen/custom-drapery-cta.jpg",
      alt: "Hand adjusting a pleated drapery header on a decorative rod",
    },
  },
  "motorized-curtains": {
    feature: {
      src: "/images/gen/motorized-curtains-feature.jpg",
      alt: "Motorized curtains drawing open on a ceiling track across a high-rise window wall at dusk",
    },
    cta: {
      src: "/images/gen/motorized-curtains-cta.jpg",
      alt: "Layered motorized sheer and blackout curtains in a bedroom with a city view",
    },
  },
  "outdoor-motorized-shades": {
    feature: {
      src: "/images/gen/outdoor-motorized-shades-feature.jpg",
      alt: "Outdoor motorized solar shades lowered across a covered patio with lounge seating",
    },
    cta: {
      src: "/images/gen/outdoor-motorized-shades-cta.jpg",
      alt: "Exterior screen shades half lowered on a pergola beside a pool at golden hour",
    },
  },
  "custom-blinds": {
    feature: {
      src: "/images/gen/custom-blinds-feature.jpg",
      alt: "Custom hardwood blinds tilted open in a study lined with bookshelves",
    },
    cta: {
      src: "/images/gen/custom-blinds-cta.jpg",
      alt: "White faux wood blinds closed for privacy on a bathroom window",
    },
  },
};

export const locationImagery: Record<string, PageImagery> = {
  "bergen-county-nj": {
    feature: {
      src: "/images/gen/bergen-county-nj-feature.jpg",
      alt: "Two-storey family room in a Bergen County colonial home with tall windows and soft neutral shades",
    },
    cta: {
      src: "/images/gen/bergen-county-nj-cta.jpg",
      alt: "Sunroom with a bank of windows and light filtering shades overlooking a landscaped garden",
    },
  },
  "northern-new-jersey": {
    feature: {
      src: "/images/gen/northern-new-jersey-feature.jpg",
      alt: "Open-plan living room with sliding patio doors and layered shades framing autumn trees",
    },
    cta: {
      src: "/images/gen/northern-new-jersey-cta.jpg",
      alt: "Two-storey stairwell landing with a tall arched window and a shade fitted above the rail",
    },
  },
  "hudson-county-nj": {
    feature: {
      src: "/images/gen/hudson-county-nj-feature.jpg",
      alt: "High-rise condo living room with roller shades partly lowered over a river and skyline view",
    },
    cta: {
      src: "/images/gen/hudson-county-nj-cta.jpg",
      alt: "Converted brick warehouse loft with tall industrial windows and simple roller shades",
    },
  },
  "manhattan-ny": {
    feature: {
      src: "/images/gen/manhattan-ny-feature.jpg",
      alt: "Pre-war Manhattan apartment with tall narrow windows dressed in drapery and sheer shades",
    },
    cta: {
      src: "/images/gen/manhattan-ny-cta.jpg",
      alt: "Manhattan high-rise bedroom with layered shades and drapery framing a skyline view",
    },
  },
  "fort-lee-nj": {
    feature: {
      src: "/images/gen/fort-lee-nj-feature.jpg",
      alt: "High-rise apartment living room with motorized shades and a bridge and river view at dusk",
    },
    cta: {
      src: "/images/gen/fort-lee-nj-cta.jpg",
      alt: "Condo kitchen and dining area with slim shades across a floor-to-ceiling window wall",
    },
  },
  "englewood-nj": {
    feature: {
      src: "/images/gen/englewood-nj-feature.jpg",
      alt: "Dining room of an older colonial home with a curved bay of windows and linen Roman shades",
    },
    cta: {
      src: "/images/gen/englewood-nj-cta.jpg",
      alt: "Primary bedroom in a stately older home with blackout shades under decorative drapery",
    },
  },
  "edgewater-nj": {
    feature: {
      src: "/images/gen/edgewater-nj-feature.jpg",
      alt: "Waterfront condominium bedroom with dual sheer and blackout shades facing the river",
    },
    cta: {
      src: "/images/gen/edgewater-nj-cta.jpg",
      alt: "Riverfront townhouse living area with solar screen shades lowered against low sun",
    },
  },
  "essex-county-nj": {
    feature: {
      src: "/images/gen/essex-county-nj-feature.jpg",
      alt: "Victorian-era parlor with a bay window, ornate millwork and shades mounted inside the trim",
    },
    cta: {
      src: "/images/gen/essex-county-nj-cta.jpg",
      alt: "Tudor-style kitchen with diamond-pane windows and woven wood shades",
    },
  },
  "brooklyn-ny": {
    feature: {
      src: "/images/gen/brooklyn-ny-feature.jpg",
      alt: "Brooklyn brownstone parlor floor with very tall windows, shutters and long drapery panels",
    },
    cta: {
      src: "/images/gen/brooklyn-ny-cta.jpg",
      alt: "Brooklyn apartment bedroom with a blackout roller shade over a tall street-facing window",
    },
  },
  "yonkers-ny": {
    feature: {
      src: "/images/gen/yonkers-ny-feature.jpg",
      alt: "Hillside home living room with a wide picture window over a wooded valley and shades raised",
    },
    cta: {
      src: "/images/gen/yonkers-ny-cta.jpg",
      alt: "Split-level family room with woven wood shades above sliding doors to a deck",
    },
  },
};

const fallback: PageImagery = {
  feature: {
    src: "/images/gen/consultation-samples.jpg",
    alt: "Fabric sample books and a tape measure laid out on a dining table during a consultation",
  },
  cta: {
    src: "/images/gen/measuring-team.jpg",
    alt: "Two installers measuring a window opening with a laser measure and steel tape",
  },
};

export const getServiceImagery = (slug: string): PageImagery => serviceImagery[slug] ?? fallback;
export const getLocationImagery = (slug: string): PageImagery => locationImagery[slug] ?? fallback;
