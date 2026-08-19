/**
 * Service architecture.
 *
 * One page per distinct search intent — no near-duplicate "custom window
 * treatments / coverings / solutions" pages (those legacy URLs redirect into
 * this structure, see src/data/redirects.ts).
 *
 * Adding a new service = adding one object here. Route, navigation, sitemap,
 * internal links and structured data all read from this file.
 */

export type ServiceOption = { name: string; body: string };
export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  /** Short label used in navigation */
  navLabel: string;
  group: "Shades" | "Motorization" | "Drapery & Blinds";
  eyebrow: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  lead: string;
  heroImage: string;
  heroAlt: string;
  intro: string[];
  options: ServiceOption[];
  benefits: ServiceOption[];
  applications: string[];
  customization: string[];
  faqs: ServiceFaq[];
  related: string[];
  featured?: boolean;
};

const commonInstall =
  "Every project is measured on site, ordered to your exact openings, installed by our own team, and tested with you before we leave.";

export const services: Service[] = [
  {
    slug: "motorized-shades",
    name: "Motorized Shades",
    navLabel: "Motorized Shades",
    group: "Motorization",
    eyebrow: "Motorized Shades",
    h1: "Motorized shades, quietly done right",
    seoTitle: "Motorized Shades in Bergen County & Northern NJ | ModuShade",
    seoDescription:
      "Custom motorized shades with remote, wall, app and smart-home control — measured, installed and programmed across Bergen County, Northern NJ and Manhattan.",
    lead: "Premium motorized roller and blackout shades for large, high or hard-to-reach windows — measured, battery or hardwired, programmed and installed by ModuShade.",
    heroImage: "/images/gen/motorized-shades-hero.jpg",
    heroAlt: "Motorized roller shades lowered across a wall of living room glass",
    intro: [
      "Motorization makes sense when a window is large, high, behind furniture, or simply used every single day. Instead of choosing a shade and then adding a motor, we specify the fabric, the motor and the control method together, so the finished system feels effortless rather than bolted on.",
      "During the consultation we tell you honestly which windows are worth motorizing and which are not. A bedroom blackout shade or a two-storey stairwell window usually earns its motor immediately; a small bathroom window rarely does.",
      commonInstall,
    ],
    options: [
      {
        name: "Motorized roller shades",
        body: "Clean roller shades in light filtering or solar fabrics, sized for wide spans and tall glass. Ideal for living rooms, kitchens and open-plan spaces.",
      },
      {
        name: "Blackout motorized shades",
        body: "Room-darkening fabrics with side channels where needed, so bedrooms, nurseries and media rooms go dark at the touch of a button.",
      },
      {
        name: "Motorized drapery & layered systems",
        body: "Motorized track drapery, or a shade paired with drapery, for rooms that need softness during the day and full darkness at night.",
      },
      {
        name: "Handheld remote control",
        body: "The simplest option: single shades or grouped windows on one remote, with no network or app required.",
      },
      {
        name: "Wall control",
        body: "A fixed control by the entry or bedside, so the shades behave like a light switch for everyone in the house.",
      },
      {
        name: "App control & schedules",
        body: "Where the chosen hardware supports it, control from your phone and set open and close schedules room by room.",
      },
      {
        name: "Smart-home integration",
        body: "Compatible motors can be linked to a smart-home hub or voice assistant. We confirm compatibility before anything is ordered.",
      },
      {
        name: "Battery or hardwired power",
        body: "Rechargeable battery motors install exactly like a manual shade with no new wiring; hardwired motors suit new construction and renovations.",
      },
    ],
    benefits: [
      {
        name: "Windows you can finally reach",
        body: "Tall living-room glass, stairwell windows and shades behind a sink or counter operate from where you are standing.",
      },
      {
        name: "Whole walls that move together",
        body: "Grouped windows travel in unison and stop level, instead of being adjusted one shade at a time.",
      },
      {
        name: "Real light and glare control",
        body: "Schedules and one-touch scenes keep afternoon glare off screens without anyone thinking about it.",
      },
      {
        name: "Cordless safety",
        body: "No cords or chains at the window, which matters in children's rooms and behind furniture.",
      },
      {
        name: "Quiet, premium hardware",
        body: "Motors are sized to the shade so they run smoothly and quietly rather than straining against the fabric.",
      },
    ],
    applications: [
      "Tall or oversized living-room glass",
      "Stairwell and clerestory windows that cannot be reached safely",
      "Bedrooms where blackout shades should close without getting out of bed",
      "Kitchens with shades behind a sink or counter",
      "Home offices where glare shifts through the day",
      "Apartments and condos with wide window walls",
    ],
    customization: [
      "Light filtering, solar screen or blackout fabrics",
      "Side channels to reduce light gaps around blackout shades",
      "Fascia, cassette or exposed roll finishes",
      "Grouped channels so a room or wall moves as one",
      "Battery, plug-in or hardwired power",
      "Remote, wall control, app or smart-home hub",
    ],
    faqs: [
      {
        q: "Do motorized shades need new wiring?",
        a: "Not necessarily. Many motorized shades run on rechargeable battery motors that install exactly like a manual shade. Hardwired motors are a better fit during construction or renovation, and we tell you which route makes sense for your windows during the visit.",
      },
      {
        q: "Can motorized shades be controlled from a phone?",
        a: "Where the chosen hardware supports it, yes — app control and schedules are available, and compatible systems can connect to a smart-home hub. We confirm exactly what a given motor supports before anything is ordered.",
      },
      {
        q: "Are motorized shades available in blackout fabrics?",
        a: "Yes. Blackout and room-darkening fabrics are available on motorized rollers, and side channels can be added where you want to reduce light gaps around the edges.",
      },
      {
        q: "Do you install and program everything?",
        a: "Yes. We measure, install, set the upper and lower limits, pair the remotes or wall controls, and test every shade with you before leaving.",
      },
    ],
    related: ["blackout-shades", "roller-shades", "motorized-curtains", "outdoor-motorized-shades"],
    featured: true,
  },
  {
    slug: "roller-shades",
    name: "Roller Shades",
    navLabel: "Roller Shades",
    group: "Shades",
    eyebrow: "Roller Shades",
    h1: "Roller shades with one clean line at the window",
    seoTitle: "Custom Roller Shades | Bergen County & Northern NJ | ModuShade",
    seoDescription:
      "Custom roller shades in light filtering, solar and room-darkening fabrics. Measured and installed for homes across Bergen County, Northern NJ, Hudson County and Manhattan.",
    lead: "A single panel of fabric, chosen at the right opacity, that reads as part of the wall rather than an object hung in front of it.",
    heroImage: "/images/custom-shades.jpg",
    heroAlt: "Roller shades half lowered in a bright modern living room",
    intro: [
      "Roller shades are the most versatile treatment we install. Because there are no slats or stacked hardware, the window keeps a calm, uninterrupted line — which is exactly why they suit modern interiors and smaller rooms that shouldn't feel busy.",
      "Everything comes down to fabric. An open weave keeps the view and still cuts glare, a tighter weave gives privacy while daylight comes through, and a lined fabric closes the room down. We bring samples so you can compare opacities against your own light before choosing.",
      commonInstall,
    ],
    options: [
      {
        name: "Solar / screen fabrics",
        body: "Openness factors from 1% to 10% cut glare and UV while keeping the outward view — ideal for west-facing glass.",
      },
      {
        name: "Light filtering fabrics",
        body: "Diffuse daylight softly and keep the room bright without a direct view in during the day.",
      },
      {
        name: "Room darkening & blackout fabrics",
        body: "Lined fabrics for bedrooms and media rooms, with optional side channels for a tighter seal.",
      },
      {
        name: "Cordless, chain or motorized lift",
        body: "Choose a continuous chain, a cordless spring lift or a quiet motor with remote and app control.",
      },
      {
        name: "Cassette, fascia or exposed roll",
        body: "Finish the headrail to match the room — a squared fascia for a built-in look or a simple exposed roll.",
      },
      {
        name: "Dual roller systems",
        body: "A solar shade and a blackout shade on one bracket, so a single window handles daytime glare and nighttime privacy.",
      },
    ],
    benefits: [
      {
        name: "A calmer window line",
        body: "No slats and no stacked hardware — just one continuous surface.",
      },
      {
        name: "Precise glare control",
        body: "Lower the shade only as far as the sun reaches and keep the rest of the view.",
      },
      {
        name: "Easy to live with",
        body: "Cordless and motorized lifts remove dangling cords and operate with one hand.",
      },
      {
        name: "Layer friendly",
        body: "Roller shades sit close to the glass, so drapery can be added later without crowding the opening.",
      },
      {
        name: "Excellent value",
        body: "Custom-made to your opening at a price that stays sensible across a whole house.",
      },
    ],
    applications: [
      "Living rooms and open-plan spaces",
      "Home offices with screen glare",
      "Kitchens and dining areas",
      "Apartments with wide window walls",
      "Rooms where drapery will be layered on later",
    ],
    customization: [
      "Openness factor selected per room orientation",
      "Inside or outside mount",
      "Fascia, cassette or exposed roll",
      "Cordless, chain or motorized operation",
      "Coordinated fabrics across rooms",
    ],
    faqs: [
      {
        q: "What is the difference between solar and light filtering roller shades?",
        a: "A solar shade is an open-weave screen that cuts glare and UV while keeping the outward view; a light filtering fabric is tighter, diffuses the light and removes the clear view. Rooms that face harsh afternoon sun often use solar shades, while street-facing rooms usually prefer light filtering.",
      },
      {
        q: "Can roller shades be motorized later?",
        a: "It is far cheaper to specify the motor with the shade than to retrofit one. If motorization is a possibility, tell us at the consultation and we will price both options.",
      },
      {
        q: "Will there be light gaps at the edges?",
        a: "Every roller shade has a small side gap. Where full darkness matters we use an outside mount or add side channels, and we explain the trade-off before ordering.",
      },
    ],
    related: ["motorized-shades", "blackout-shades", "light-filtering-shades", "zebra-shades"],
    featured: true,
  },
  {
    slug: "blackout-shades",
    name: "Blackout Shades",
    navLabel: "Blackout Shades",
    group: "Shades",
    eyebrow: "Blackout Shades",
    h1: "Blackout shades for rooms that need real darkness",
    seoTitle: "Blackout Shades for Bedrooms & Nurseries | ModuShade NJ & NYC",
    seoDescription:
      "Custom blackout shades with side channels and motorized options for bedrooms, nurseries and media rooms across Bergen County, Northern NJ, Hudson County and Manhattan.",
    lead: "Room-darkening fabric, an honest conversation about light gaps, and the mounting detail that decides whether a bedroom actually goes dark.",
    heroImage: "/images/bedroom-blackout.jpg",
    heroAlt: "Bedroom with blackout shades lowered over a large window",
    intro: [
      "Most disappointing blackout installations are not a fabric problem — they are a mounting problem. Light escapes around the edges, not through the material. We look at depth, brackets and the wall around the opening first, then choose the fabric.",
      "For nurseries, shift workers and media rooms we usually recommend an outside mount or side channels, and we say plainly when a window cannot be made completely dark.",
      commonInstall,
    ],
    options: [
      {
        name: "Blackout roller shades",
        body: "The cleanest option, with an optional cassette and side channels for the tightest seal.",
      },
      {
        name: "Blackout cellular shades",
        body: "Honeycomb construction that darkens the room and adds insulation at the glass.",
      },
      {
        name: "Blackout roman shades",
        body: "Lined fabric folds for bedrooms that should still feel soft and tailored.",
      },
      {
        name: "Motorized blackout shades",
        body: "Close the room from bed or on a schedule — the most requested motorized application we install.",
      },
      {
        name: "Side channels & light-blocking details",
        body: "Aluminium channels, closed cassettes and generous outside mounts to control edge light.",
      },
    ],
    benefits: [
      { name: "Better sleep", body: "Consistent darkness for early risers, shift workers and children." },
      { name: "Screen and media rooms", body: "Kill reflections on TVs and projectors during the day." },
      { name: "Thermal comfort", body: "Lined and cellular fabrics reduce heat gain and cold radiating off the glass." },
      { name: "Privacy after dark", body: "Full opacity means no silhouettes when the lights are on inside." },
    ],
    applications: [
      "Primary bedrooms",
      "Nurseries and children's rooms",
      "Media and screening rooms",
      "Street-facing apartments",
      "Rooms used for daytime sleep",
    ],
    customization: [
      "Inside mount, outside mount or channel system",
      "Cassette headrail to close the top gap",
      "Manual or motorized operation",
      "Paired with a daytime solar or light filtering shade",
    ],
    faqs: [
      {
        q: "Will a blackout shade make the room completely dark?",
        a: "The fabric blocks the light; the edges decide the result. With an outside mount, a cassette and side channels a room can get very close to complete darkness. We tell you honestly what a specific window can achieve before you order.",
      },
      {
        q: "Are blackout shades available motorized?",
        a: "Yes — blackout fabrics are one of the most common motorized applications, especially in bedrooms. See our motorized shades page for the control options.",
      },
      {
        q: "Can I keep some daylight during the day?",
        a: "A dual roller pairs a solar or light filtering shade with a blackout shade on the same window, so you can choose the level of light at any time.",
      },
    ],
    related: ["motorized-shades", "roller-shades", "cellular-shades", "roman-shades"],
    featured: true,
  },
  {
    slug: "light-filtering-shades",
    name: "Light Filtering Shades",
    navLabel: "Light Filtering Shades",
    group: "Shades",
    eyebrow: "Light Filtering Shades",
    h1: "Light filtering shades that soften the day",
    seoTitle: "Light Filtering Shades | Soft Daylight & Privacy | ModuShade",
    seoDescription:
      "Custom light filtering shades that diffuse daylight, reduce glare and keep rooms bright and private. Installed across Bergen County, Northern NJ, Hudson County and Manhattan.",
    lead: "Keep the room bright and connected to the outside, without the glare, the fading or the feeling of living in a display window.",
    heroImage: "/images/light-filtering.jpg",
    heroAlt: "Sunlight diffused through light filtering shades in a living room",
    intro: [
      "Light filtering fabrics are the default choice for the rooms you use during the day. They take the hard edge off direct sun, protect furniture and floors from constant UV, and give daytime privacy while daylight still comes through.",
      "The right weave depends on the direction the window faces and how close the neighbours are. We compare two or three opacities in the actual room rather than choosing from a catalogue.",
      commonInstall,
    ],
    options: [
      { name: "Roller light filtering shades", body: "The cleanest line, in a wide range of textures and neutrals." },
      { name: "Light filtering cellular shades", body: "Diffused light plus insulation, with a top-down bottom-up option." },
      { name: "Zebra / dual shades", body: "Alternating sheer and solid bands so you can tune the light through the day." },
      { name: "Light filtering roman shades", body: "Soft fabric folds where a room needs warmth as well as light control." },
    ],
    benefits: [
      { name: "Bright but comfortable", body: "Daylight without hot spots, harsh contrast or screen glare." },
      { name: "Daytime privacy", body: "The view in is broken up while you keep a sense of the outside." },
      { name: "Fabric protection", body: "Reduces the UV that fades rugs, artwork and upholstery." },
      { name: "Works in every room", body: "The most flexible opacity for living rooms, kitchens and offices." },
    ],
    applications: [
      "Living rooms and family rooms",
      "Kitchens and breakfast areas",
      "Home offices",
      "Dining rooms and hallways",
    ],
    customization: [
      "Opacity chosen per window orientation",
      "Textured, linen-look or crisp screen fabrics",
      "Cordless or motorized operation",
      "Coordinated with blackout shades in bedrooms",
    ],
    faqs: [
      {
        q: "Do light filtering shades give privacy at night?",
        a: "Not fully. With interior lights on, silhouettes can be visible. Rooms that need evening privacy usually pair a light filtering shade with drapery or use a room-darkening fabric.",
      },
      {
        q: "How do they compare with sheer shades?",
        a: "Sheer shades have adjustable vanes between two layers of fabric, which gives more control at the cost of a deeper stack. Light filtering rollers are simpler and sit tighter to the glass.",
      },
    ],
    related: ["roller-shades", "zebra-shades", "sheer-shades", "cellular-shades"],
  },
  {
    slug: "zebra-shades",
    name: "Zebra Shades",
    navLabel: "Zebra Shades",
    group: "Shades",
    eyebrow: "Zebra Shades",
    h1: "Zebra shades — light and privacy on one roller",
    seoTitle: "Zebra Shades (Dual Sheer Shades) | ModuShade NJ & NYC",
    seoDescription:
      "Custom zebra shades with alternating sheer and solid bands for adjustable light and privacy. Measured and installed across Bergen County, Northern NJ, Hudson County and Manhattan.",
    lead: "Alternating sheer and solid bands that align for privacy or overlap for a clear, filtered view — one shade, two very different rooms.",
    heroImage: "/images/privacy-window.jpg",
    heroAlt: "Zebra shades with alternating sheer and solid bands on an apartment window",
    intro: [
      "Zebra shades (also called dual or banded shades) roll like a standard roller shade, but the fabric alternates between sheer and opaque stripes. Line the solid bands up and the room closes down; offset them and daylight filters through evenly.",
      "They are especially popular in apartments and condos where one window has to handle a bright view during the day and a close neighbour in the evening.",
      commonInstall,
    ],
    options: [
      { name: "Standard zebra shades", body: "Classic banded fabric in neutral, textured and darker tones." },
      { name: "Blackout zebra shades", body: "Room-darkening solid bands for bedrooms that still want a daytime sheer setting." },
      { name: "Cassette headrail", body: "A closed valance that hides the roll and finishes the top edge cleanly." },
      { name: "Motorized zebra shades", body: "Quiet motors with remote, wall or app control for tall or grouped windows." },
    ],
    benefits: [
      { name: "Two modes, one product", body: "Privacy and filtered daylight without adding a second treatment." },
      { name: "Modern, architectural look", body: "The banded texture suits contemporary interiors and high-rise glass." },
      { name: "Keeps the view", body: "In the open position you still see out clearly." },
      { name: "Simple to operate", body: "Chain, cordless or motorized — the adjustment takes a second." },
    ],
    applications: [
      "High-rise apartments and condos",
      "Living rooms facing a close neighbour",
      "Bedrooms that need both a bright and a dark setting",
      "Home offices with variable glare",
    ],
    customization: [
      "Band width and fabric texture",
      "Light filtering or blackout solid bands",
      "Open or cassette headrail",
      "Manual or motorized operation",
    ],
    faqs: [
      {
        q: "Are zebra shades private at night?",
        a: "In the closed position they behave like a light filtering or blackout shade depending on the fabric chosen. If evening privacy is the priority, we recommend the room-darkening band option.",
      },
      {
        q: "Can zebra shades be motorized?",
        a: "Yes. Zebra shades motorize the same way as standard rollers, which is worth considering for tall or grouped windows.",
      },
    ],
    related: ["roller-shades", "motorized-shades", "light-filtering-shades", "sheer-shades"],
    featured: true,
  },
  {
    slug: "cellular-shades",
    name: "Cellular & Honeycomb Shades",
    navLabel: "Cellular / Honeycomb",
    group: "Shades",
    eyebrow: "Cellular & Honeycomb Shades",
    h1: "Cellular shades for comfort at the glass",
    seoTitle: "Cellular & Honeycomb Shades | Insulating Window Shades | ModuShade",
    seoDescription:
      "Custom cellular and honeycomb shades with single or double cells, top-down bottom-up and blackout options. Installed across Bergen County, Northern NJ, Hudson County and Manhattan.",
    lead: "Honeycomb cells trap air at the window, so the room stays warmer in January and cooler in July — with a neat, compact stack.",
    heroImage: "/images/privacy.jpg",
    heroAlt: "Cellular honeycomb shades in a window with soft daylight",
    intro: [
      "Cellular shades are the practical choice for older homes and rooms with cold or draughty glass. The honeycomb structure creates an insulating pocket of air, which measurably reduces the chill you feel sitting beside a window in winter.",
      "They also stack very compactly, so more of the glass stays clear when the shade is raised — useful on shorter windows and above kitchen counters.",
      commonInstall,
    ],
    options: [
      { name: "Single cell", body: "A slim profile that suits standard windows and tighter recesses." },
      { name: "Double cell", body: "Extra insulation for exposed windows and rooms with heating or cooling issues." },
      { name: "Top-down bottom-up", body: "Lower the top for daylight while keeping the lower half private." },
      { name: "Blackout cellular", body: "Room-darkening liners for bedrooms that also need insulation." },
      { name: "Cordless & motorized lifts", body: "Child-safe cordless operation or quiet motorization." },
    ],
    benefits: [
      { name: "Warmer in winter", body: "The air pocket slows heat loss through the glass." },
      { name: "Cooler in summer", body: "Reduces solar heat gain on south and west exposures." },
      { name: "Compact stack", body: "More clear glass when the shade is fully raised." },
      { name: "Quieter rooms", body: "The cell structure softens outside noise slightly." },
    ],
    applications: [
      "Older homes with single-glazed or draughty windows",
      "Bedrooms that need insulation and darkness",
      "North-facing rooms that feel cold",
      "Windows above kitchen counters",
    ],
    customization: [
      "Single or double cell",
      "Light filtering or blackout liner",
      "Top-down bottom-up operation",
      "Cordless or motorized lift",
    ],
    faqs: [
      {
        q: "Do cellular shades really help with energy bills?",
        a: "They reduce heat transfer at the window, which is most noticeable on older glass and exposed elevations. We treat it as a comfort improvement first rather than promising a specific saving.",
      },
      {
        q: "What is top-down bottom-up?",
        a: "The shade can be lowered from the top as well as raised from the bottom, so you can let daylight in at the top of the window while keeping the lower half private — popular in street-facing bedrooms.",
      },
    ],
    related: ["blackout-shades", "light-filtering-shades", "roller-shades", "roman-shades"],
  },
  {
    slug: "roman-shades",
    name: "Roman Shades",
    navLabel: "Roman Shades",
    group: "Shades",
    eyebrow: "Roman Shades",
    h1: "Roman shades with the softness of fabric",
    seoTitle: "Custom Roman Shades | Tailored Fabric Shades | ModuShade NJ",
    seoDescription:
      "Custom roman shades in flat, relaxed and hobbled folds, lined or blackout. Made to measure and installed across Bergen County, Northern NJ, Hudson County and Manhattan.",
    lead: "The warmth and texture of drapery in the compact footprint of a shade — tailored, lined and made to your exact opening.",
    heroImage: "/images/gen/roman-shades-hero.jpg",
    heroAlt: "Fabric samples for custom roman shades",
    intro: [
      "Roman shades are where a window starts to feel designed rather than covered. Because the fabric stacks in folds, the treatment brings pattern, texture and softness into a room without the width that drapery panels need.",
      "Fold style and lining do most of the work: a flat fold reads modern and architectural, a relaxed fold is softer, and a blackout lining turns the same fabric into a bedroom treatment.",
      commonInstall,
    ],
    options: [
      { name: "Flat fold", body: "Clean, tailored panels — the most contemporary of the roman styles." },
      { name: "Relaxed fold", body: "A gentle curve along the bottom edge for a softer, more casual room." },
      { name: "Hobbled fold", body: "Continuous cascading folds with more depth and traditional detail." },
      { name: "Lining & interlining", body: "Privacy, blackout or thermal linings selected to match the room's job." },
      { name: "Cordless & motorized lifts", body: "Child-safe operation, or a motor for tall and hard-to-reach windows." },
    ],
    benefits: [
      { name: "Texture and warmth", body: "Real fabric softens hard architectural rooms." },
      { name: "Design flexibility", body: "Pattern, trim and fold style can be coordinated across rooms." },
      { name: "Compact stack", body: "Takes far less wall space than full drapery panels." },
      { name: "Made to measure", body: "Cut and sewn to the exact opening for a clean, square fit." },
    ],
    applications: [
      "Living rooms and dining rooms",
      "Primary bedrooms",
      "Kitchens with a decorative window",
      "Rooms where drapery would be too heavy",
    ],
    customization: [
      "Fold style and fabric selection",
      "Privacy, blackout or thermal lining",
      "Trim, banding and hardware finish",
      "Manual or motorized lift",
    ],
    faqs: [
      {
        q: "Can roman shades be blackout?",
        a: "Yes. A blackout lining is added behind the face fabric, and an outside mount helps control edge light in bedrooms.",
      },
      {
        q: "Are roman shades suitable for wide windows?",
        a: "Up to a point. Very wide openings are often better as two shades side by side so the fabric lifts evenly — we confirm this at measurement.",
      },
    ],
    related: ["custom-drapery", "blackout-shades", "cellular-shades", "light-filtering-shades"],
  },
  {
    slug: "sheer-shades",
    name: "Sheer & Shangri-La Shades",
    navLabel: "Sheer / Shangri-La",
    group: "Shades",
    eyebrow: "Sheer & Shangri-La Shades",
    h1: "Sheer shades with adjustable fabric vanes",
    seoTitle: "Sheer & Shangri-La Shades | Adjustable Vane Shades | ModuShade",
    seoDescription:
      "Custom sheer shades with soft adjustable vanes between sheer facings for diffused light and privacy. Installed across Bergen County, Northern NJ, Hudson County and Manhattan.",
    lead: "Soft horizontal vanes floating between two sheer facings — tilt them for view and daylight, close them for privacy.",
    heroImage: "/images/gen/sheer-shades-hero.jpg",
    heroAlt: "Sheer shades with soft fabric vanes filtering daylight",
    intro: [
      "Sheer shades combine the light control of a blind with the softness of a shade. The vanes tilt like slats, but they are fabric, so the light that reaches the room is diffused rather than striped.",
      "They are a strong choice for formal living and dining rooms where the window should look refined and the daylight should feel even.",
      commonInstall,
    ],
    options: [
      { name: "Light filtering vanes", body: "The standard configuration: soft daylight with an adjustable view." },
      { name: "Room-darkening vanes", body: "Denser vanes for bedrooms that still want the sheer look during the day." },
      { name: "Vane size options", body: "Narrower vanes for smaller windows, deeper vanes for tall glass." },
      { name: "Motorized tilt & lift", body: "Motorized operation for grouped or high windows." },
    ],
    benefits: [
      { name: "Even, diffused light", body: "No hard slat lines across the floor or furniture." },
      { name: "Adjustable privacy", body: "Tilt to keep the view or close for a soft, private room." },
      { name: "Refined appearance", body: "A high-end look that suits formal rooms and tall windows." },
      { name: "UV reduction", body: "The sheer facings help protect furnishings from direct sun." },
    ],
    applications: [
      "Formal living and dining rooms",
      "Tall windows and feature glass",
      "Rooms where drapery would feel too heavy",
      "Apartments with an outlook worth keeping",
    ],
    customization: [
      "Vane depth and opacity",
      "Sheer facing color and texture",
      "Manual or motorized operation",
      "Coordinated with drapery panels",
    ],
    faqs: [
      {
        q: "How are sheer shades different from zebra shades?",
        a: "Zebra shades roll flat with alternating bands; sheer shades have three-dimensional fabric vanes that tilt. Sheer shades feel softer and more formal, zebra shades sit tighter to the glass and are usually more economical.",
      },
      {
        q: "Do they stack out of the way?",
        a: "Yes, they raise fully into the headrail, though the stack is deeper than a roller shade. We check the headroom during measurement.",
      },
    ],
    related: ["light-filtering-shades", "roman-shades", "custom-drapery", "zebra-shades"],
  },
  {
    slug: "custom-drapery",
    name: "Custom Drapery & Curtains",
    navLabel: "Custom Drapery & Curtains",
    group: "Drapery & Blinds",
    eyebrow: "Custom Drapery & Curtains",
    h1: "Custom drapery, measured and made for your rooms",
    seoTitle: "Custom Drapery & Curtains | Made to Measure | ModuShade NJ & NYC",
    seoDescription:
      "Custom drapery and curtains made to your measurements — pleat styles, linings, hardware and motorized tracks. Serving Bergen County, Northern NJ, Hudson County and Manhattan.",
    lead: "Fabric panels cut, lined and hung to your window — the finishing layer that makes a room feel considered rather than furnished.",
    heroImage: "/images/drapery.jpg",
    heroAlt: "Floor-length custom drapery panels beside a tall window",
    intro: [
      "Drapery does two jobs at once: it softens the hard lines of a room and it gives you a second layer of light and sound control over a shade. Done well, panels break just at the floor, the pleats stay crisp, and the rod extends beyond the opening so the glass is never covered when the panels are open.",
      "We plan the fullness, pleat style, lining and hardware together, and we measure the drop from the rod position rather than the window — which is why made-to-measure panels hang differently from ready-made ones.",
      commonInstall,
    ],
    options: [
      { name: "Pinch, euro and ripple-fold pleats", body: "Classic tailored pleats or a modern continuous wave on a track." },
      { name: "Sheer panels", body: "Light, airy layers for daytime privacy and softness." },
      { name: "Blackout and thermal linings", body: "Add darkness, insulation and body to the panel." },
      { name: "Drapery hardware", body: "Rods, finials, brackets and concealed tracks in coordinated finishes." },
      { name: "Layered shade + drapery", body: "A functional shade at the glass with decorative panels either side." },
      { name: "Motorized drapery tracks", body: "Quiet motorized tracks for tall or wide runs — see motorized curtains." },
    ],
    benefits: [
      { name: "Softness and scale", body: "Panels add height and warmth that a shade alone cannot." },
      { name: "Better acoustics", body: "Fabric reduces echo in rooms with hard floors and large glass." },
      { name: "Full light control", body: "Layered over a shade, drapery closes the last of the light gaps." },
      { name: "Coordinated interiors", body: "Fabrics can be repeated across rooms for a consistent look." },
    ],
    applications: [
      "Living and dining rooms",
      "Primary bedrooms",
      "Tall windows and sliding doors",
      "Rooms with hard floors and echo",
    ],
    customization: [
      "Pleat style and fullness",
      "Lining, interlining and blackout",
      "Rod, track or motorized track",
      "Trim, banding and hem detail",
    ],
    faqs: [
      {
        q: "Should drapery touch the floor?",
        a: "In most rooms we aim for a slight break or a clean kiss at the floor. Panels in high-traffic or pet-heavy spaces are often finished just above it. We confirm the drop at measurement.",
      },
      {
        q: "Can drapery be layered over shades?",
        a: "Yes, and it is the most common request. The shade handles daily light control and the drapery finishes the room; roller and roman shades both layer well.",
      },
    ],
    related: ["motorized-curtains", "roman-shades", "sheer-shades", "motorized-shades"],
    featured: true,
  },
  {
    slug: "motorized-curtains",
    name: "Motorized Curtains",
    navLabel: "Motorized Curtains",
    group: "Motorization",
    eyebrow: "Motorized Curtains",
    h1: "Motorized curtains on quiet, precise tracks",
    seoTitle: "Motorized Curtains & Drapery Tracks | ModuShade NJ & NYC",
    seoDescription:
      "Motorized curtain and drapery tracks with remote, app and smart-home control for wide spans and tall windows. Installed across Bergen County, Northern NJ, Hudson County and Manhattan.",
    lead: "Wide spans of drapery that open and close evenly at the touch of a button — without anyone walking the panels across by hand.",
    heroImage: "/images/gen/motorized-curtains-hero.jpg",
    heroAlt: "Floor-to-ceiling motorized curtains in a high-rise living room",
    intro: [
      "Motorized tracks make the most sense exactly where drapery is hardest to use: floor-to-ceiling glass, sliding doors, corner windows and rooms where the panels sit behind furniture. The motor keeps the leading edges aligned and the ripple even every single time.",
      "We size the track to the run, hide it in a recess or behind a fascia where the ceiling allows, and set the open and closed positions during installation.",
      commonInstall,
    ],
    options: [
      { name: "Ripple-fold motorized tracks", body: "A continuous, even wave that suits modern interiors." },
      { name: "Center-open or single-draw", body: "Panels that meet in the middle or stack to one side." },
      { name: "Recessed and ceiling-mounted tracks", body: "Concealed in a pocket or fixed to the ceiling for a built-in look." },
      { name: "Remote, wall, app and hub control", body: "The same control options as our motorized shades." },
      { name: "Curtain + shade combinations", body: "Motorized drapery over a motorized shade, grouped on one control." },
    ],
    benefits: [
      { name: "Even, effortless movement", body: "No dragging panels, no uneven stacking." },
      { name: "Made for wide runs", body: "Ideal for sliding doors and window walls." },
      { name: "Fabric protection", body: "Less handling means less wear on the leading edges." },
      { name: "Scheduling", body: "Open in the morning and close at dusk automatically where supported." },
    ],
    applications: [
      "Floor-to-ceiling window walls",
      "Sliding and balcony doors",
      "High-rise apartments",
      "Primary bedrooms with wide glass",
    ],
    customization: [
      "Track length, curves and draw direction",
      "Recessed pocket, ceiling or wall mount",
      "Fabric, pleat and lining selection",
      "Control method and grouping",
    ],
    faqs: [
      {
        q: "How quiet are motorized curtain tracks?",
        a: "Quality tracks are noticeably quieter than a motorized shade because the load is spread along the run. We size the motor to the weight of the fabric so it never strains.",
      },
      {
        q: "Do motorized curtains need power at the window?",
        a: "Battery-powered tracks exist for lighter panels, but most drapery runs are best hardwired. We confirm the power route before ordering.",
      },
    ],
    related: ["custom-drapery", "motorized-shades", "outdoor-motorized-shades", "roman-shades"],
  },
  {
    slug: "outdoor-motorized-shades",
    name: "Outdoor Motorized Shades",
    navLabel: "Outdoor Motorized Shades",
    group: "Motorization",
    eyebrow: "Outdoor Motorized Shades",
    h1: "Outdoor motorized shades for patios and terraces",
    seoTitle: "Outdoor Motorized Shades for Patios & Terraces | ModuShade NJ",
    seoDescription:
      "Motorized exterior shades for patios, porches, terraces and pergolas — sun, glare and privacy control with remote and app operation. Serving Bergen County and Northern NJ.",
    lead: "Screen the sun before it reaches the glass, and turn a west-facing patio into usable space through the whole afternoon.",
    heroImage: "/images/gen/outdoor-motorized-shades-hero.jpg",
    heroAlt: "Home exterior with a covered patio suited to outdoor motorized shades",
    intro: [
      "Exterior shades work on a simple principle: it is far more effective to stop solar heat outside the window than to manage it inside. On patios, porches and pergolas they also cut wind-driven glare and give a screened, private outdoor room.",
      "Because these systems are exposed to weather, specification matters — fabric openness, side guides, wind sensors and the mounting substrate all get checked on site before anything is ordered.",
      commonInstall,
    ],
    options: [
      { name: "Motorized patio screens", body: "Solar mesh fabrics that cut heat and glare while keeping the view." },
      { name: "Privacy exterior fabrics", body: "Denser fabrics for a fully screened outdoor room." },
      { name: "Side-guided systems", body: "Cable or track guides that keep the shade stable in wind." },
      { name: "Remote, app and sensor control", body: "Operate from inside, on a schedule, or with wind and sun sensors where supported." },
    ],
    benefits: [
      { name: "Cooler interiors", body: "Heat is stopped before it passes through the glass." },
      { name: "Usable outdoor space", body: "Patios stay comfortable through the hottest part of the day." },
      { name: "Glare and insect screening", body: "Depending on fabric, shades also reduce insects and wind." },
      { name: "Protected furniture", body: "Less UV on outdoor cushions and decking." },
    ],
    applications: [
      "Covered patios and porches",
      "Pergolas and terraces",
      "West-facing decks",
      "Balconies in low-rise buildings",
    ],
    customization: [
      "Fabric openness and color",
      "Side guides or free-hanging",
      "Recessed, face or soffit mount",
      "Remote, app or sensor control",
    ],
    faqs: [
      {
        q: "Can outdoor shades stay down in wind?",
        a: "Only within the system's rated wind range. Side-guided systems handle more, and wind sensors can retract the shade automatically where supported. We size the system to the exposure of the space.",
      },
      {
        q: "Are outdoor shades suitable for winter?",
        a: "They are typically retracted and can be left in place year-round, though some homeowners prefer to remove fabrics on very exposed sites. We cover the maintenance during the consultation.",
      },
    ],
    related: ["motorized-shades", "roller-shades", "motorized-curtains", "custom-blinds"],
  },
  {
    slug: "custom-blinds",
    name: "Custom Blinds",
    navLabel: "Custom Blinds",
    group: "Drapery & Blinds",
    eyebrow: "Custom Blinds",
    h1: "Custom blinds in wood, faux wood and vertical",
    seoTitle: "Custom Blinds — Wood, Faux Wood & Vertical | ModuShade NJ & NYC",
    seoDescription:
      "Custom wood, faux wood and vertical blinds sized to your openings for exact light and privacy. Installed across Bergen County, Northern NJ and Manhattan.",
    lead: "Slatted treatments you can tilt through the day — warm real wood, moisture-resistant faux wood, or verticals for wide sliding doors.",
    heroImage: "/images/custom-blinds.jpg",
    heroAlt: "Custom wood blinds tilted open in a bright room",
    intro: [
      "A blind gives you something a shade cannot: the ability to keep the window covered and still let light in, simply by changing the slat angle. That makes blinds a natural fit for rooms where the light changes constantly through the day.",
      "Material choice comes down to the room. Real wood brings warmth to living spaces, faux wood handles bathrooms, kitchens and basements without warping, and verticals remain the most practical treatment for sliding doors and very wide openings.",
      commonInstall,
    ],
    options: [
      { name: "Wood blinds", body: "Warm, natural slats in a range of stains and widths for living areas and bedrooms." },
      { name: "Faux wood blinds", body: "Moisture and warp resistant — the right call for bathrooms, kitchens and basements." },
      { name: "Vertical blinds", body: "Wide sliding doors and tall windows, with slats that draw fully to one side." },
      { name: "Aluminium & mini blinds", body: "A slim, economical option for utility spaces and rentals." },
      { name: "Cordless & motorized tilt", body: "Child-safe wands and cordless lifts, or motorized tilt on larger installations." },
    ],
    benefits: [
      { name: "Precise light control", body: "Tilt the slats instead of choosing between fully open and fully closed." },
      { name: "Durable and easy to clean", body: "Wipeable surfaces that hold up in busy family rooms." },
      { name: "Sized to the opening", body: "Custom widths handle out-of-square, deep and awkward recesses." },
      { name: "Sensible value", body: "A strong choice when covering many windows at once." },
    ],
    applications: [
      "Sliding patio doors (vertical blinds)",
      "Kitchens, bathrooms and basements (faux wood)",
      "Living rooms and bedrooms (real wood)",
      "Home offices needing quick glare adjustment",
    ],
    customization: [
      "Slat width and material",
      "Stain, paint and tape options",
      "Inside or outside mount",
      "Cordless wand or motorized tilt",
    ],
    faqs: [
      {
        q: "Wood or faux wood?",
        a: "Real wood is lighter and warmer looking, which matters on wide windows. Faux wood costs less and will not warp in humidity, so it wins in bathrooms, kitchens, basements and anywhere with steam.",
      },
      {
        q: "What works best on a sliding door?",
        a: "Vertical blinds or a wide roller shade. Verticals draw fully clear of the door, while a roller keeps a cleaner line — we look at how the door is used before recommending one.",
      },
    ],
    related: ["roller-shades", "custom-drapery", "light-filtering-shades", "outdoor-motorized-shades"],
  },
];

export const serviceGroups: { title: Service["group"]; blurb: string }[] = [
  {
    title: "Motorization",
    blurb: "Motorized shades, curtains and exterior systems, programmed and installed.",
  },
  {
    title: "Shades",
    blurb: "Roller, blackout, light filtering, zebra, cellular, roman and sheer shades.",
  },
  {
    title: "Drapery & Blinds",
    blurb: "Made-to-measure drapery panels and custom wood, faux wood and vertical blinds.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const featuredServices = services.filter((s) => s.featured);
export const servicesByGroup = (group: Service["group"]) =>
  services.filter((s) => s.group === group);
