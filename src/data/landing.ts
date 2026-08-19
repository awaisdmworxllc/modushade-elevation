/**
 * Google Search Ads landing pages.
 *
 * These are standalone, conversion-focused pages served at their own clean
 * URLs. They are deliberately NOT part of the main website's information
 * architecture: they are not in the header, footer, services menu, homepage or
 * sitemap, and they render without the main site chrome.
 *
 * To add another paid landing page later (Blackout Shades, Roller Shades, …)
 * add one entry here plus a one-line route file — no new components needed.
 */

export type LandingImage = { src: string; alt: string };

export type LandingProduct = {
  name: string;
  body: string;
  image: LandingImage;
};

export type LandingConfig = {
  /** Route path, also used as the analytics page key. */
  path: string;
  /** <title> + meta description for the paid page. */
  title: string;
  description: string;
  /** Hero */
  eyebrow: string;
  /** H1 rendered in white, with `headlineAccent` in ModuShade red beneath. */
  headline: string;
  headlineAccent: string;
  lead: string;
  heroPoints: string[];
  heroImage: LandingImage;
  /** Use the site hero video behind the hero (motorization pages). */
  heroVideo?: boolean;
  /** Trust / value proposition strip */
  trust: { title: string; body: string }[];
  /** Relevant products only */
  productsEyebrow: string;
  productsTitle: string;
  productsBody: string;
  products: LandingProduct[];
  /** Real ModuShade photography (files from /images/work) */
  workTitle: string;
  workBody: string;
  work: LandingImage[];
  /** Why ModuShade */
  whyTitle: string;
  why: { title: string; body: string }[];
  /** Lead form */
  formTitle: string;
  formImage: LandingImage;
  interestOptions: string[];
  faqs: { q: string; a: string }[];
  /** Seasonal promotion shown in the hero and once again above the form. */
  promo: LandingPromo;
};

/**
 * Seasonal promotion. Copy is deliberately "up to 25% on select …" — no
 * invented end dates, coupon codes, minimums or countdowns.
 */
export type LandingPromo = {
  /** Pill text, e.g. "SUMMER PROMOTION • SAVE UP TO 25%". */
  badge: string;
  /** Short headline for the promo highlight, e.g. "Save Up to 25%". */
  highlight: string;
  /** Supporting offer sentence, page specific. */
  support: string;
  /** Primary promo CTA label. */
  cta: string;
  /** Reinforcement strip above the consultation form. */
  stripTitle: string;
  /** Form heading used when arriving via the promo. */
  formTitle: string;
};

const work = (file: string, alt: string): LandingImage => ({
  src: `/images/work/${file}.jpg`,
  alt,
});

const measurement = {
  title: "Professional measurement",
  body: "Every opening measured on site — depth, obstructions, mounting and power confirmed before anything is ordered.",
};
const installation = {
  title: "Professional installation",
  body: "Installed, adjusted and tested by our own team, with the space left clean.",
};
const pricing = {
  title: "Premium value, fair pricing",
  body: "Custom-made products and honest recommendations — the right fit for the room, not the highest priced option.",
};
const personal = {
  title: "Personal service",
  body: "You deal with the same person from the first consultation to the final adjustment.",
};
const local = {
  title: "Local NJ & NY service",
  body: "Bergen County, Northern New Jersey, Hudson County, Manhattan and selected NYC areas.",
};
const consultation = {
  title: "Free in-home consultation",
  body: "We bring samples to your home so you can see fabrics and opacities in your own light.",
};

/* ------------------------- custom window treatments ----------------------- */

const customWindowTreatments: LandingConfig = {
  path: "/custom-window-treatments",
  title: "Custom Window Treatments in NJ & NYC | Free In-Home Consultation",
  description:
    "Custom shades, blinds and drapery — professionally measured and installed across Bergen County, Northern NJ, Hudson County and Manhattan. Book a free in-home consultation.",
  eyebrow: "Custom shades · blinds · drapery",
  headline: "Premium Custom Window Treatments.",
  headlineAccent: "Without the Premium Price.",
  lead:
    "Custom-made shades, blinds and drapery for homes across Bergen County, Northern New Jersey, Hudson County and Manhattan — professionally measured and professionally installed.",
  heroPoints: [
    "Professionally measured & installed",
    "Free in-home consultation with samples",
    "Motorization available on every product",
  ],
  heroImage: {
    src: "/images/custom-hero.jpg",
    alt: "Custom shades fitted across a wall of living room windows in a bright modern home",
  },
  trust: [pricing, measurement, installation, consultation],
  productsEyebrow: "Choose your treatment",
  productsTitle: "Every window, one team.",
  productsBody:
    "We fit the product to the room and the way you use it — then show you fabrics and opacities in your own light before you decide.",
  products: [
    {
      name: "Roller Shades",
      body: "The cleanest line in solar, light filtering and room-darkening fabrics, with cassette or exposed roll.",
      image: {
        src: "/images/gen/roller-shades-feature.jpg",
        alt: "Roller shades lowered across tall living room windows in a neutral fabric",
      },
    },
    {
      name: "Blackout Shades",
      body: "Real darkness for bedrooms, nurseries and media rooms — with side channels where light leak matters.",
      image: {
        src: "/images/gen/blackout-shades-feature.jpg",
        alt: "Blackout shade fully lowered over a bedroom window keeping the room dark",
      },
    },
    {
      name: "Zebra Shades",
      body: "Alternating sheer and solid bands so one shade gives you daytime privacy and filtered light.",
      image: work(
        "zebra-shade-wide-window",
        "Wide zebra shade lowered across a bedroom window with alternating sheer and solid bands",
      ),
    },
    {
      name: "Cellular Shades",
      body: "Honeycomb fabric that insulates the glass, with top-down bottom-up and blackout options.",
      image: {
        src: "/images/gen/cellular-shades-feature.jpg",
        alt: "Cellular honeycomb shades fitted in a light bedroom window",
      },
    },
    {
      name: "Roman Shades",
      body: "Soft fabric folds for rooms that want warmth as well as light control, lined or blackout.",
      image: {
        src: "/images/gen/roman-shades-feature.jpg",
        alt: "Roman shade in soft folds above a window seat in a warm living room",
      },
    },
    {
      name: "Custom Drapery",
      body: "Made-to-measure panels, sheers and ripple fold on custom tracks — on their own or layered.",
      image: {
        src: "/images/gen/custom-drapery-feature.jpg",
        alt: "Full-length custom drapery panels framing a tall living room window",
      },
    },
    {
      name: "Motorized Shades",
      body: "Battery or hardwired motors with remote, wall or app control for tall and hard-to-reach windows.",
      image: {
        src: "/images/gen/motorized-shades-feature.jpg",
        alt: "Homeowner using a handheld remote as motorized roller shades lower across living room glass",
      },
    },
  ],
  workTitle: "Real ModuShade installations.",
  workBody:
    "Photographs from our own completed jobs across New Jersey and New York — no stock photography.",
  work: [
    work(
      "roller-shade-kitchen-window",
      "Roller shade fitted above a kitchen sink window in a family home",
    ),
    work(
      "zebra-shades-vaulted-bedroom",
      "Two zebra shades fitted side by side under the vaulted ceiling of a finished attic bedroom",
    ),
    work(
      "sheer-shades-bay-window",
      "Sheer shades filtering daylight across a bay window in a living room",
    ),
  ],
  whyTitle: "Why homeowners choose ModuShade.",
  why: [pricing, measurement, installation, personal, local, consultation],
  formTitle: "Tell us about your windows",
  formImage: {
    src: "/images/gen/consultation-samples.jpg",
    alt: "Fabric samples laid out on a table during an in-home window treatment consultation",
  },
  interestOptions: [
    "Roller shades",
    "Blackout shades",
    "Zebra shades",
    "Cellular shades",
    "Roman shades",
    "Custom drapery",
    "Motorized shades",
    "Not sure yet — please advise",
  ],
  faqs: [
    {
      q: "How much do custom window treatments cost?",
      a: "It depends on the size of the openings, the fabric and whether you motorize. We measure and quote at the consultation so the price you see is for your actual windows — and installation is included.",
    },
    {
      q: "Do you bring samples to the house?",
      a: "Yes. Fabric and opacity look completely different in your own light, so we bring samples and hold them up at the window before anything is ordered.",
    },
    {
      q: "Is installation included?",
      a: "Yes — professional installation is free. The same team that measures installs, programs and adjusts everything.",
    },
    {
      q: "Which areas do you cover?",
      a: "Bergen County, Northern New Jersey, Hudson County, Manhattan and selected NYC areas.",
    },
  ],
};

/* ---------------------------- motorized shades ---------------------------- */

const motorizedShades: LandingConfig = {
  path: "/motorized-shades",
  title: "Motorized Shades in NJ & NYC | Remote & App Control | ModuShade",
  description:
    "Custom motorized shades measured and installed across Bergen County, Northern NJ, Hudson County and Manhattan. Battery or hardwired, remote, wall and app control. Free consultation.",
  eyebrow: "Motorized · electric · smart shades",
  headline: "Premium Motorized Shades.",
  headlineAccent: "Without the Premium Price.",
  lead:
    "Custom measured, professionally installed motorized shades with remote, wall and app control — including tall windows, wide walls of glass and openings you can no longer reach.",
  heroPoints: [
    "Custom measured • professionally installed",
    "Remote, wall and app control options",
    "Battery-powered or hardwired",
  ],
  heroImage: {
    src: "/images/gen/motorized-shades-hero.jpg",
    alt: "Motorized roller shades lowering together across a wall of floor-to-ceiling windows",
  },
  heroVideo: true,
  trust: [
    {
      title: "Motorization is what we do",
      body: "Motors, power, grouping and programming planned before the order — not improvised on installation day.",
    },
    measurement,
    installation,
    consultation,
  ],
  productsEyebrow: "How it works",
  productsTitle: "Power, control and fabric — decided properly.",
  productsBody:
    "There are only a few real decisions to make. We walk through them at the consultation and confirm what each window can actually support.",
  products: [
    {
      name: "Battery-powered motors",
      body: "Rechargeable motors mount inside the headrail with no wiring, so existing rooms need no electrical work.",
      image: {
        src: "/images/gen/motorized-shades-feature.jpg",
        alt: "Handheld remote raising a battery-powered motorized roller shade in a living room",
      },
    },
    {
      name: "Hardwired motors",
      body: "For new build, renovation or grouped windows where you would rather never think about charging.",
      image: work(
        "installers-arched-window",
        "ModuShade installers fitting a shade at a tall arched window from a ladder",
      ),
    },
    {
      name: "Remote, wall & app control",
      body: "Handheld remotes, wall controls and app control with schedules — set up and tested with you before we leave.",
      image: {
        src: "/images/gen/motorized-curtains-feature.jpg",
        alt: "Motorized drapery panels moving along a ceiling track in a modern living room",
      },
    },
    {
      name: "Smart-home options",
      body: "Where the motor system supports it we set up integration with your smart-home hub — we confirm what is possible for your shades first.",
      image: {
        src: "/images/gen/motorized-shades-cta.jpg",
        alt: "Installer mounting a motorized shade headrail bracket at a tall great-room window",
      },
    },
    {
      name: "Blackout motorized shades",
      body: "Room-darkening fabric on a motor for bedrooms and media rooms, with side channels where light leak matters.",
      image: {
        src: "/images/gen/blackout-shades-cta.jpg",
        alt: "Motorized blackout shade lowered over a bedroom window in a darkened room",
      },
    },
    {
      name: "Large & hard-to-reach windows",
      body: "Wide spans, stairwell glass, vaulted openings and whole walls that move together on one command.",
      image: work(
        "roller-shade-sliding-window",
        "One wide roller shade covering a sliding glass door opening in a living space",
      ),
    },
  ],
  workTitle: "Motorized work we have installed.",
  workBody:
    "Real ModuShade jobs — measuring, mounting and programming handled by the same team.",
  work: [
    work(
      "measuring-window-tape",
      "Installer measuring a window opening with a tape measure before ordering motorized shades",
    ),
    work(
      "restaurant-interior-shade",
      "Large shade lowered across the glass frontage of a restaurant interior",
    ),
    work(
      "roller-shade-bedroom-office",
      "Roller shade half raised above a desk in a bedroom used as a home office",
    ),
  ],
  whyTitle: "Why motorize with ModuShade.",
  why: [
    {
      title: "Motorization expertise",
      body: "Power source, motor type, grouping and controls specified for your actual windows.",
    },
    pricing,
    measurement,
    installation,
    personal,
    local,
  ],
  formTitle: "Get a motorized shade quote",
  formImage: {
    src: "/images/gen/measuring-team.jpg",
    alt: "ModuShade team measuring a tall window during a free in-home consultation",
  },
  interestOptions: [
    "Motorized roller shades",
    "Motorized blackout shades",
    "Motorized zebra shades",
    "Motorized curtains / drapery",
    "Outdoor motorized shades",
    "Not sure yet — please advise",
  ],
  faqs: [
    {
      q: "Do motorized shades need wiring?",
      a: "Not necessarily. Battery-powered motors fit inside the headrail and need no electrical work, which is what most existing homes use. Hardwired motors are a good choice for new build, renovation or large grouped windows.",
    },
    {
      q: "How are motorized shades controlled?",
      a: "Handheld remote, wall control or app depending on the system you choose. We program the remotes and groups and test everything with you at installation.",
    },
    {
      q: "Can motorized shades be blackout?",
      a: "Yes. Blackout fabric works on a motor, and side channels can be added where light leaking around the edges matters.",
    },
    {
      q: "Are they good for tall or hard-to-reach windows?",
      a: "That is one of the best reasons to motorize — stairwell glass, vaulted openings and windows above furniture become usable every day instead of left permanently at one height.",
    },
    {
      q: "Do you install and program them?",
      a: "Yes. Professional installation is free: we mount, program, group, test and adjust, then leave the space clean.",
    },
  ],
};

/* ------------------------- custom drapery & curtains ---------------------- */

const customDrapery: LandingConfig = {
  path: "/custom-drapery",
  title: "Custom Drapery & Curtains in NJ & NYC | Made to Measure | ModuShade",
  description:
    "Custom-made drapery and curtains — sheers, blackout linings, ripple fold, custom tracks and motorized curtains. Measured and installed across NJ and NYC. Free in-home consultation.",
  eyebrow: "Custom drapery · curtains · sheers",
  headline: "Custom Drapery & Curtains,",
  headlineAccent: "Made to Measure for Your Windows.",
  lead:
    "Fabric, style, heading, lining and hardware chosen together — then made to your measurements and hung by the same team that measured.",
  heroPoints: [
    "Fabric & style selection at home",
    "Sheer, lined and blackout options",
    "Ripple fold, custom tracks & motorized curtains",
  ],
  heroImage: {
    src: "/images/gen/custom-drapery-cta.jpg",
    alt: "Floor-length custom drapery panels stacked beside a tall window in an elegant room",
  },
  trust: [
    {
      title: "Made to measure, not off the shelf",
      body: "Panel width, fullness, hem length and heading all worked out for your window — nothing is trimmed to fit on the day.",
    },
    measurement,
    installation,
    consultation,
  ],
  productsEyebrow: "Drapery options",
  productsTitle: "Fabric, style and hardware.",
  productsBody:
    "Drapery is a set of decisions, not one product. We narrow them down in your own rooms, with the fabric held up at the window.",
  products: [
    {
      name: "Ripple fold drapery",
      body: "Even, continuous waves on a track — the cleanest contemporary heading and our most requested style.",
      image: {
        src: "/images/gen/custom-drapery-feature.jpg",
        alt: "Ripple fold drapery hanging in even waves across a wide living room window",
      },
    },
    {
      name: "Sheer panels",
      body: "Soft daylight and daytime privacy while keeping a sense of the view — beautiful on their own or as a layer.",
      image: work(
        "sheer-drapery-bedroom",
        "Sheer drapery panels filtering daylight across a bedroom window",
      ),
    },
    {
      name: "Blackout lined drapery",
      body: "Blackout or dim-out lining for bedrooms and media rooms, with the weight and drape of proper drapery.",
      image: {
        src: "/images/gen/roman-shades-hero.jpg",
        alt: "Lined floor-length drapery panels drawn beside a dark bedroom window",
      },
    },
    {
      name: "Custom tracks & hardware",
      body: "Ceiling or wall tracks, recessed tracks and decorative rods, specified for the ceiling and the stack you want.",
      image: work(
        "installer-bay-window-shades",
        "Installer fitting hardware above a bay window during a ModuShade installation",
      ),
    },
    {
      name: "Motorized curtains",
      body: "Quiet motorized tracks with remote, wall or app control — ideal for wide spans and tall openings.",
      image: {
        src: "/images/gen/motorized-curtains-hero.jpg",
        alt: "Motorized curtains opening along a ceiling track across a wall of glass",
      },
    },
    {
      name: "Layered with shades",
      body: "Drapery over a roller or sheer shade so you can tune privacy and darkness independently.",
      image: work(
        "sheer-curtains-living-room",
        "Sheer curtains layered across living room windows with seating in front",
      ),
    },
  ],
  workTitle: "Drapery we have made and hung.",
  workBody: "Real ModuShade installations photographed after the final adjustment.",
  work: [
    {
      src: "/images/drapery.jpg",
      alt: "Full-length drapery panels framing a living room window with soft daylight",
    },
    {
      src: "/images/fabrics.jpg",
      alt: "Drapery fabric samples in neutral tones ready for an in-home selection",
    },
    {
      src: "/images/gen/motorized-curtains-cta.jpg",
      alt: "Motorized drapery panels drawn across a tall window in a modern interior",
    },
  ],
  whyTitle: "Why choose ModuShade for drapery.",
  why: [
    {
      title: "Fabric and style guidance",
      body: "Honest advice on fullness, heading, length and lining — what will actually hang well in your room.",
    },
    pricing,
    measurement,
    installation,
    personal,
    consultation,
  ],
  formTitle: "Start your custom drapery",
  formImage: {
    src: "/images/consultation.jpg",
    alt: "In-home consultation with drapery fabric samples spread out beside a window",
  },
  interestOptions: [
    "Ripple fold drapery",
    "Sheer panels",
    "Blackout lined drapery",
    "Motorized curtains",
    "Custom tracks & hardware",
    "Drapery layered with shades",
    "Not sure yet — please advise",
  ],
  faqs: [
    {
      q: "How long does custom drapery take?",
      a: "Because every panel is made to your measurements, drapery takes longer than a stock curtain. We confirm the current lead time for your fabric at the consultation before you commit.",
    },
    {
      q: "Can I see fabric before ordering?",
      a: "Yes — we bring fabric samples to your home so you can see colour, weight and how much light passes through in your own rooms.",
    },
    {
      q: "Can drapery be blackout?",
      a: "Yes. A blackout or dim-out lining gives you real darkness while keeping the look and drape of fabric panels.",
    },
    {
      q: "Do you motorize curtains as well as shades?",
      a: "We do. Motorized tracks are especially worthwhile on wide spans and tall openings, with remote, wall or app control.",
    },
    {
      q: "Do you install the tracks and hardware?",
      a: "Yes. Professional installation is included: we fit the track or rod, hang and dress the panels, and leave the space clean.",
    },
  ],
};

export const landingPages = [customWindowTreatments, motorizedShades, customDrapery];

/** Paths where the main site header/footer are replaced by landing chrome. */
export const landingPaths = landingPages.map((p) => p.path);

export { customWindowTreatments, motorizedShades, customDrapery };
