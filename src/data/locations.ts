/**
 * Service-area pages.
 *
 * Every entry must carry genuinely localized content — housing context, the
 * window problems that actually come up there, and the services that matter
 * most. Do not add a city just to have another page, and never claim a project
 * or customer that does not exist.
 */

export type Location = {
  slug: string;
  name: string;
  /** Short label for navigation and lists */
  shortName: string;
  region: "New Jersey" | "New York";
  tier: "core" | "secondary";
  seoTitle: string;
  seoDescription: string;
  h1: string;
  lead: string;
  heroImage: string;
  heroAlt: string;
  /** 2–3 paragraphs of genuinely local context */
  context: string[];
  /** Local window challenges we actually see */
  needs: { title: string; body: string }[];
  /** Slugs from src/data/services.ts that matter most locally */
  focusServices: string[];
  /** Towns, neighborhoods or sub-areas covered from here */
  covers: string[];
  faqs: { q: string; a: string }[];
};

export const locations: Location[] = [
  {
    slug: "bergen-county-nj",
    name: "Bergen County, NJ",
    shortName: "Bergen County",
    region: "New Jersey",
    tier: "core",
    seoTitle: "Custom Window Treatments in Bergen County, NJ | ModuShade",
    seoDescription:
      "Motorized shades, blinds and custom drapery for Bergen County homes. Free in-home consultation, professional measuring and installation from Cresskill, NJ.",
    h1: "Custom window treatments in Bergen County, NJ",
    lead: "Our home county. We are based in Cresskill, which means samples in your living room, accurate measuring and an installer who is a short drive away.",
    heroImage: "/images/bergen-street.jpg",
    heroAlt: "Tree-lined residential street in Bergen County, New Jersey",
    context: [
      "Bergen County housing runs from pre-war colonials and split-levels through to new construction with two-storey window walls, and each generation of house brings a different window problem. Older homes tend to have deep wooden recesses, out-of-square openings and cold single-glazed glass; newer builds bring tall stairwell windows and wide sliders that nobody can reach comfortably.",
      "That mix is why we spend the first visit looking rather than selling. A 1950s bedroom window usually wants a cellular or blackout shade sized for a deep recess; a new great room with 14-foot glass wants motorized rollers grouped on one control.",
      "Being local also means the practical parts are simple: we can drop samples off, re-check a measurement, or come back to adjust a motor limit without turning it into a scheduling exercise.",
    ],
    needs: [
      {
        title: "Tall great-room glass",
        body: "Two-storey windows in newer Bergen County homes are the clearest case for motorized roller shades on a single grouped control.",
      },
      {
        title: "Deep, out-of-square recesses",
        body: "Older colonials and split-levels need treatments measured on site rather than ordered to a nominal size.",
      },
      {
        title: "Cold winter glass",
        body: "Cellular shades make an immediate comfort difference in bedrooms with older windows.",
      },
      {
        title: "Street-facing privacy",
        body: "Zebra and light filtering shades keep daylight while breaking up the view in from the sidewalk.",
      },
    ],
    focusServices: ["motorized-shades", "roller-shades", "blackout-shades", "custom-blinds", "custom-drapery"],
    covers: [
      "Cresskill",
      "Tenafly",
      "Fort Lee",
      "Englewood",
      "Edgewater",
      "Closter",
      "Demarest",
      "Alpine",
      "Ridgewood",
      "Paramus",
      "Hackensack",
      "Teaneck",
    ],
    faqs: [
      {
        q: "Which Bergen County towns do you cover?",
        a: "We work throughout Bergen County from our base in Cresskill. If you would like to confirm your specific address, call or email and we will tell you straight away.",
      },
      {
        q: "Is the in-home consultation free in Bergen County?",
        a: "Yes. The consultation, the samples and the measuring visit are free and carry no obligation.",
      },
    ],
  },
  {
    slug: "northern-new-jersey",
    name: "Northern New Jersey",
    shortName: "Northern NJ",
    region: "New Jersey",
    tier: "core",
    seoTitle: "Window Treatments in Northern New Jersey | ModuShade",
    seoDescription:
      "Custom motorized shades, blinds and drapery across Northern New Jersey. In-home consultation, precise measuring and professional installation from Cresskill, NJ.",
    h1: "Custom window treatments across Northern New Jersey",
    lead: "Bergen, Hudson, Essex and the towns in between — one point of contact from the first consultation through to the final adjustment.",
    heroImage: "/images/hillside-homes.jpg",
    heroAlt: "Hillside homes in a Northern New Jersey neighborhood",
    context: [
      "Northern New Jersey is unusually varied for a small area: riverfront high-rises in Hudson County, established suburbs in Bergen, and older city housing in Essex. Practically, that means we plan every project around the building rather than a product range.",
      "High-rise apartments usually need shallow-depth solutions, careful bracket choices and treatments that work with existing window frames. Suburban homes give us more freedom to layer a shade with drapery, or to hardwire motors during a renovation.",
      "Across all of it the process is the same — an in-home visit with samples, honest recommendations, on-site measuring and installation by our own team.",
    ],
    needs: [
      {
        title: "Mixed housing stock",
        body: "From condo windows with shallow recesses to suburban bays, each opening gets specified individually.",
      },
      {
        title: "Renovation timing",
        body: "If walls are open, hardwired motors and recessed drapery pockets are far easier to plan now than later.",
      },
      {
        title: "Whole-home consistency",
        body: "Coordinated fabrics and hardware across rooms make a house feel considered rather than assembled.",
      },
      {
        title: "Sun-exposed elevations",
        body: "West-facing rooms often need solar screen fabrics or exterior shades rather than heavier interior treatments.",
      },
    ],
    focusServices: ["motorized-shades", "roller-shades", "custom-drapery", "cellular-shades", "custom-blinds"],
    covers: ["Bergen County", "Hudson County", "Essex County", "Passaic County (selected towns)"],
    faqs: [
      {
        q: "How far into New Jersey do you travel?",
        a: "We regularly work across Bergen, Hudson and Essex counties and into selected Passaic County towns. Contact us with your address and we will confirm coverage.",
      },
    ],
  },
  {
    slug: "hudson-county-nj",
    name: "Hudson County, NJ",
    shortName: "Hudson County",
    region: "New Jersey",
    tier: "core",
    seoTitle: "Window Treatments in Hudson County, NJ | ModuShade",
    seoDescription:
      "Motorized shades, zebra shades and custom drapery for Hudson County condos and homes. Free consultation, measuring and installation across Jersey City, Hoboken and the waterfront.",
    h1: "Window treatments for Hudson County homes and condos",
    lead: "Waterfront glass, skyline views and close neighbours — Hudson County windows need light control that does not cost you the view.",
    heroImage: "/images/waterfront-highrise.jpg",
    heroAlt: "Waterfront high-rise apartment with floor-to-ceiling glass",
    context: [
      "Hudson County is dominated by apartment and condo living, much of it with large expanses of glass facing either the Manhattan skyline or a building fifty feet away. Both situations call for the same approach: keep what is worth keeping and screen what is not.",
      "For view-facing rooms we usually specify solar screen or zebra shades that cut glare and heat while leaving the outlook intact. For rooms facing another building, a light filtering or blackout layer does the work, often with an outside mount because condo recesses are shallow.",
      "Buildings also have rules. We work with the existing frames and mounting conditions and keep everything reversible where a lease or building policy requires it.",
    ],
    needs: [
      {
        title: "Skyline views worth keeping",
        body: "Solar screen fabrics and zebra shades cut glare without blocking the outlook.",
      },
      {
        title: "Shallow condo recesses",
        body: "Slim brackets, cassettes and outside mounts fit where a deep headrail will not.",
      },
      {
        title: "Wide sliders to balconies",
        body: "Vertical blinds or a single wide roller keep the door usable.",
      },
      {
        title: "Bedrooms with city light",
        body: "Blackout fabrics with side channels handle street and building light at night.",
      },
    ],
    focusServices: ["zebra-shades", "roller-shades", "motorized-shades", "blackout-shades", "motorized-curtains"],
    covers: ["Jersey City", "Hoboken", "Weehawken", "Union City", "West New York", "Bayonne", "Secaucus"],
    faqs: [
      {
        q: "Do you work in high-rise buildings?",
        a: "Yes, regularly. We plan around building access, existing frames and any mounting restrictions, and we can keep installations reversible where required.",
      },
      {
        q: "What works best on a skyline-facing window?",
        a: "Usually a solar screen roller shade or a zebra shade — both cut glare and heat while preserving the view. We compare openness factors on site.",
      },
    ],
  },
  {
    slug: "manhattan-ny",
    name: "Manhattan, New York, NY",
    shortName: "Manhattan",
    region: "New York",
    tier: "core",
    seoTitle: "Custom Window Treatments in Manhattan, NY | ModuShade",
    seoDescription:
      "Motorized shades, zebra shades and custom drapery for Manhattan apartments. Careful measuring, building-friendly installation and one point of contact throughout.",
    h1: "Custom window treatments for Manhattan apartments",
    lead: "Pre-war apartments and new towers both come with their own constraints. We measure around them instead of forcing a standard product to fit.",
    heroImage: "/images/nyc-apartment.jpg",
    heroAlt: "Manhattan apartment living room with tall windows",
    context: [
      "Manhattan windows are rarely straightforward. Pre-war apartments bring out-of-square openings, radiators under the sill and thick plaster reveals; newer towers bring floor-to-ceiling glass, minimal mounting depth and window walls too wide for a single manual shade.",
      "Privacy is usually the driving requirement, because the building opposite is close. Zebra and light filtering shades handle that during the day while keeping the room bright; drapery or a blackout layer takes over in bedrooms at night.",
      "We plan installation around building realities — service elevators, certificates of insurance where required, and treatments that can be removed cleanly at the end of a lease.",
    ],
    needs: [
      {
        title: "Close-building privacy",
        body: "Daytime privacy without going dark, using opacity rather than shutting the window down.",
      },
      {
        title: "Minimal mounting depth",
        body: "Slim cassettes and bracket solutions for curtain-wall glass and shallow reveals.",
      },
      {
        title: "Wide window walls",
        body: "Grouped motorized shades so a whole wall moves level, on one control.",
      },
      {
        title: "Radiators and obstructions",
        body: "Older apartments need the sill, radiator and reveal checked before anything is ordered.",
      },
    ],
    focusServices: ["motorized-shades", "zebra-shades", "custom-drapery", "roller-shades", "motorized-curtains"],
    covers: [
      "Upper West Side",
      "Upper East Side",
      "Midtown",
      "Chelsea",
      "Tribeca",
      "Financial District",
      "Battery Park City",
    ],
    faqs: [
      {
        q: "Can you work with my building's requirements?",
        a: "Yes. Tell us what your building asks for — insurance certificates, service elevator times, or reversible installation — and we plan around it.",
      },
      {
        q: "Do you cover the whole of Manhattan?",
        a: "We work across Manhattan and in selected neighborhoods of the other boroughs. Contact us with the address to confirm.",
      },
    ],
  },
  {
    slug: "fort-lee-nj",
    name: "Fort Lee, NJ",
    shortName: "Fort Lee",
    region: "New Jersey",
    tier: "core",
    seoTitle: "Window Treatments & Motorized Shades in Fort Lee, NJ | ModuShade",
    seoDescription:
      "Custom motorized shades, zebra shades and blackout shades for Fort Lee apartments and homes. Free in-home consultation and professional installation, minutes away in Cresskill.",
    h1: "Window treatments in Fort Lee, NJ",
    lead: "High-rise glass with Hudson and skyline views, plus quiet residential streets — two very different window briefs in one town, ten minutes from us.",
    heroImage: "/images/nyc-apartment.jpg",
    heroAlt: "High-rise apartment window overlooking the Hudson from Fort Lee",
    context: [
      "Fort Lee is one of the most apartment-dense towns in Bergen County, and much of that housing looks east over the Hudson toward Manhattan. Those windows get strong morning sun and a view worth protecting, which usually points to solar screen or zebra shades rather than anything heavy.",
      "The residential streets away from the towers are a different job entirely — single-family homes where bedrooms want blackout shades and living rooms often layer a roller shade with drapery.",
      "We are based in Cresskill, so Fort Lee visits, re-measures and installation adjustments are straightforward to schedule.",
    ],
    needs: [
      {
        title: "East-facing morning sun",
        body: "Solar screen fabrics take the glare off breakfast rooms without blocking the river view.",
      },
      {
        title: "High-rise mounting depth",
        body: "Slim brackets and cassettes for curtain-wall and shallow-recess windows.",
      },
      {
        title: "Bedroom light at night",
        body: "Blackout shades with side channels handle bridge and street lighting.",
      },
      {
        title: "Wide balcony sliders",
        body: "A single wide roller or verticals keep the door clear and usable.",
      },
    ],
    focusServices: ["motorized-shades", "zebra-shades", "blackout-shades", "roller-shades"],
    covers: ["Fort Lee 07024", "Cliffside Park", "Edgewater", "Palisades Park", "Leonia"],
    faqs: [
      {
        q: "Do you install in Fort Lee apartment buildings?",
        a: "Yes, frequently. Let us know any building requirements for access or insurance and we will work around them.",
      },
    ],
  },
  {
    slug: "englewood-nj",
    name: "Englewood, NJ",
    shortName: "Englewood",
    region: "New Jersey",
    tier: "secondary",
    seoTitle: "Custom Window Treatments in Englewood, NJ | ModuShade",
    seoDescription:
      "Custom shades, blinds and drapery for Englewood homes — motorized options for tall windows, blackout shades for bedrooms. Free consultation and local installation.",
    h1: "Window treatments in Englewood, NJ",
    lead: "Older character homes, generous windows and renovations in progress — Englewood projects usually reward a proper measuring visit.",
    heroImage: "/images/colonial-interior.jpg",
    heroAlt: "Interior of a traditional Englewood-area home with tall windows",
    context: [
      "Englewood has a lot of older housing with the window details that come with it: tall double-hung sashes, deep reveals, transoms and openings that are rarely perfectly square. Ready-made sizes tend to look wrong in these homes, which is why made-to-measure matters here more than usual.",
      "We also see a steady stream of renovation projects, and those are the best moment to plan hardwired motors, recessed drapery tracks and blackout channels while the walls are still open.",
      "Bedrooms are the other recurring brief — Englewood streets carry more light than people expect, so blackout shades with a proper mount make a noticeable difference.",
    ],
    needs: [
      {
        title: "Tall double-hung windows",
        body: "Roman shades and drapery suit the proportions better than short, wide products.",
      },
      {
        title: "Out-of-square openings",
        body: "Each opening measured at several points so the finished treatment sits square.",
      },
      {
        title: "Renovation planning",
        body: "The right time to specify hardwired motors and concealed tracks.",
      },
      {
        title: "Bedroom darkness",
        body: "Blackout shades with side channels or a generous outside mount.",
      },
    ],
    focusServices: ["roman-shades", "custom-drapery", "blackout-shades", "motorized-shades"],
    covers: ["Englewood 07631", "Englewood Cliffs", "Tenafly", "Teaneck"],
    faqs: [
      {
        q: "Can you match treatments across a whole house?",
        a: "Yes. We plan fabrics, opacities and hardware finishes room by room so the house reads consistently while each room still gets what it needs.",
      },
    ],
  },
  {
    slug: "edgewater-nj",
    name: "Edgewater, NJ",
    shortName: "Edgewater",
    region: "New Jersey",
    tier: "secondary",
    seoTitle: "Window Treatments in Edgewater, NJ | Motorized Shades | ModuShade",
    seoDescription:
      "Motorized and zebra shades for Edgewater waterfront condos and townhomes. Free in-home consultation, careful measuring and professional installation.",
    h1: "Window treatments in Edgewater, NJ",
    lead: "Waterfront condos and townhomes with large west and east glass — glare control that keeps the river and skyline in view.",
    heroImage: "/images/waterfront-highrise.jpg",
    heroAlt: "Edgewater waterfront residential building with large windows",
    context: [
      "Edgewater living is defined by the waterfront: wide glass, strong reflected light off the river, and views most homeowners are not willing to trade away. Solar screen rollers and zebra shades handle exactly that combination.",
      "Many of the buildings and townhomes here also have tall or grouped windows, which is where motorization stops being a luxury and becomes the practical way to operate a whole wall of glass evenly.",
      "Balcony sliders are the other constant. We keep the door fully usable, either with a wide roller or verticals that draw completely clear.",
    ],
    needs: [
      {
        title: "Reflected river glare",
        body: "Low-openness solar fabrics cut glare that comes off the water as well as from the sky.",
      },
      {
        title: "Grouped tall windows",
        body: "Motorized shades keep a whole wall aligned on one control.",
      },
      {
        title: "Balcony access",
        body: "Treatments that clear the slider so the door stays easy to use.",
      },
      {
        title: "Heat gain",
        body: "Screen fabrics reduce solar heat before it reaches the room.",
      },
    ],
    focusServices: ["motorized-shades", "zebra-shades", "roller-shades", "motorized-curtains"],
    covers: ["Edgewater 07020", "Cliffside Park", "Fort Lee", "North Bergen"],
    faqs: [
      {
        q: "Will a solar shade still let me see the view?",
        a: "Yes — that is the point of them. A 3% or 5% openness screen keeps a clear outward view during the day while cutting glare and heat. We compare openness levels against your actual window.",
      },
    ],
  },
  {
    slug: "essex-county-nj",
    name: "Essex County, NJ",
    shortName: "Essex County",
    region: "New Jersey",
    tier: "secondary",
    seoTitle: "Custom Window Treatments in Essex County, NJ | ModuShade",
    seoDescription:
      "Custom shades, blinds and drapery for Essex County homes — including period properties with tall, oversized and out-of-square windows.",
    h1: "Window treatments in Essex County, NJ",
    lead: "Period homes with beautiful, complicated windows — and modern rooms that simply need glare under control.",
    heroImage: "/images/victorian-home.jpg",
    heroAlt: "Period home exterior in Essex County, New Jersey",
    context: [
      "Essex County has some of the most characterful housing in the state, from Victorian and Tudor homes to mid-century builds. Those homes also have the most demanding windows: arched heads, bays, stained-glass transoms and openings that were never square to begin with.",
      "Custom-made treatments are usually the only sensible answer. We measure each opening individually, decide where a shade should be inside or outside mounted, and choose fabrics that respect the age of the room.",
      "Newer Essex County homes and apartments generally need something simpler — a good roller or cellular shade correctly specified for the exposure.",
    ],
    needs: [
      {
        title: "Arched and bay windows",
        body: "Made-to-measure treatments planned around the actual shape of the opening.",
      },
      {
        title: "Period-appropriate fabrics",
        body: "Drapery and roman shades that suit the age and proportions of the room.",
      },
      {
        title: "Draughty original glass",
        body: "Cellular shades add insulation without replacing the windows.",
      },
      {
        title: "Whole-house projects",
        body: "A consistent plan across many rooms and window types.",
      },
    ],
    focusServices: ["custom-drapery", "roman-shades", "cellular-shades", "custom-blinds"],
    covers: ["Montclair", "Glen Ridge", "West Orange", "South Orange", "Millburn", "Livingston"],
    faqs: [
      {
        q: "Can you cover an arched or oversized window?",
        a: "Usually yes. Some shapes take a custom shade, others are better handled with drapery or a treatment mounted above the arch. We look at the window and tell you what will actually work.",
      },
    ],
  },
  {
    slug: "brooklyn-ny",
    name: "Brooklyn, NY",
    shortName: "Brooklyn",
    region: "New York",
    tier: "secondary",
    seoTitle: "Custom Window Treatments in Brooklyn, NY | ModuShade",
    seoDescription:
      "Custom shades, motorized options and drapery for Brooklyn brownstones and apartments. Careful measuring and building-friendly installation.",
    h1: "Window treatments in Brooklyn, NY",
    lead: "Brownstone proportions and new-build glass, handled with the same measured, no-pressure process.",
    heroImage: "/images/brownstone.jpg",
    heroAlt: "Brooklyn brownstone facade with tall parlor windows",
    context: [
      "Brownstone windows are tall, narrow and often original, with deep reveals and shutters or mouldings to work around. Full-height drapery and roman shades tend to suit these rooms far better than short, wide products.",
      "Parlour floors also sit close to the street, so daytime privacy without losing light is a constant request — light filtering and zebra shades do that job well.",
      "New-build Brooklyn apartments are closer to a Hudson County brief: wide glass, shallow depth and a strong case for motorization on grouped windows.",
    ],
    needs: [
      {
        title: "Tall parlour windows",
        body: "Drapery and roman shades that respect the height of the room.",
      },
      {
        title: "Street-level privacy",
        body: "Light filtering or zebra shades, or a top-down bottom-up cellular shade.",
      },
      {
        title: "Original mouldings",
        body: "Mounting planned so the trim stays visible and undamaged.",
      },
      {
        title: "New-build window walls",
        body: "Motorized rollers grouped for even operation.",
      },
    ],
    focusServices: ["custom-drapery", "roman-shades", "zebra-shades", "motorized-shades"],
    covers: ["Brooklyn Heights", "Park Slope", "Williamsburg", "Cobble Hill", "Fort Greene", "DUMBO"],
    faqs: [
      {
        q: "Do you travel to Brooklyn for a consultation?",
        a: "We cover selected New York neighborhoods including parts of Brooklyn. Contact us with your address and we will confirm before scheduling.",
      },
    ],
  },
  {
    slug: "yonkers-ny",
    name: "Yonkers, NY",
    shortName: "Yonkers",
    region: "New York",
    tier: "secondary",
    seoTitle: "Custom Window Treatments in Yonkers, NY | ModuShade",
    seoDescription:
      "Custom shades, blinds and drapery for Yonkers homes and apartments, including motorized options for tall and hard-to-reach windows.",
    h1: "Window treatments in Yonkers, NY",
    lead: "River-facing apartments and hillside houses — two exposures that both benefit from getting the fabric choice right.",
    heroImage: "/images/hillside-homes.jpg",
    heroAlt: "Hillside homes above the Hudson in Yonkers, New York",
    context: [
      "Yonkers sits on a slope above the Hudson, which means a lot of homes get long, low afternoon light and reflected glare off the water. Solar screen and light filtering fabrics handle that better than heavier treatments.",
      "The housing itself is mixed: older single-family homes with traditional windows, plus apartment buildings where mounting depth and building access shape the specification.",
      "Hillside houses also tend to have stairwell and gable windows that nobody can reach — the clearest case for motorization we see anywhere.",
    ],
    needs: [
      {
        title: "Low afternoon sun",
        body: "Solar screens and light filtering fabrics reduce glare without darkening the room.",
      },
      {
        title: "Unreachable stairwell glass",
        body: "Motorized shades operated from the landing or by remote.",
      },
      {
        title: "Older window frames",
        body: "Measured on site so brackets land where they should.",
      },
      {
        title: "Bedroom privacy",
        body: "Blackout or room-darkening fabrics on street-facing rooms.",
      },
    ],
    focusServices: ["motorized-shades", "light-filtering-shades", "roller-shades", "custom-blinds"],
    covers: ["Yonkers", "Bronxville (selected)", "Riverdale (selected)"],
    faqs: [
      {
        q: "Do you cover Westchester?",
        a: "We serve selected New York markets including Yonkers. Contact us with your address and we will confirm coverage before booking a visit.",
      },
    ],
  },
];

export const coreLocations = locations.filter((l) => l.tier === "core");
export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
