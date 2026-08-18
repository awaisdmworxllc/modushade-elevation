/**
 * Central business + brand configuration.
 * Everything visitor-facing (phone, email, service areas) reads from here so
 * there is a single place to update business information.
 */

/**
 * HERO BACKGROUND VIDEO
 * ---------------------
 * Served from /public so ANY host (Vercel, Netlify, Lovable) serves it as a
 * plain static file with the correct video/mp4 MIME type. Do not move these
 * back to a host-specific CDN pointer.
 */
export const HERO_VIDEO_URL: string = "/video/hero-window-treatments.mp4";

/** Optional secondary source (WebM/VP9) for browsers that prefer it. */
export const HERO_VIDEO_URL_WEBM = "/video/hero-window-treatments.webm";


/**
 * Poster / fallback image shown before the video plays, while it loads, on
 * reduced-motion devices, and whenever HERO_VIDEO_URL is empty.
 * Replace with your own image any time.
 */
export const HERO_POSTER_URL = "/images/shades-hero.jpg";

export const site = {
  name: "ModuShade",
  legalName: "Modu Shade",
  tagline: "Premium Custom Window Treatments. Without the Premium Price.",
  founder: "Leo",
  domain: "https://modu-shade.com",
  phone: "(201) 846-6181",
  phoneHref: "tel:+12018466181",
  email: "info@modu-shade.com",
  emailHref: "mailto:info@modu-shade.com",
  whatsapp:
    "https://wa.me/12018466181?text=Hi%20Leo%2C%20I%27m%20interested%20in%20custom%20window%20treatments%20and%20would%20like%20to%20schedule%20a%20free%20consultation.",
  address: {
    locality: "Cresskill",
    region: "NJ",
    postalCode: "07626",
    country: "US",
  },
  serviceAreaSummary:
    "Bergen County, Northern New Jersey, Hudson County, Manhattan and selected NYC areas",
  serviceAreaShort: "Bergen County · Northern NJ · Hudson County · Manhattan",
  areasServed: [
    "Bergen County, NJ",
    "Northern New Jersey",
    "Hudson County, NJ",
    "Manhattan, New York, NY",
    "Selected NYC areas",
  ],
} as const;

/**
 * Free installation offer — confirmed wording. Use these constants everywhere
 * so the promise reads identically across the site.
 */
export const installationOffer = {
  short: "Free professional installation",
  full: "Free professional installation — measured, installed and adjusted by our own team",
} as const;

export const trustPoints = [
  {
    title: "Honest recommendations",
    body: "The right fit for the room — not the highest priced option on the page.",
  },
  {
    title: "Samples at your home",
    body: "See fabrics, opacities and colors in your own light before you decide.",
  },
  {
    title: installationOffer.short,
    body: "Measured, installed and adjusted by our own team — one team from the first consultation to the final adjustment.",
  },
  {
    title: "Clean, finished work",
    body: "Installed, programmed, tested and the space left spotless.",
  },
] as const;


export const processSteps = [
  {
    step: "01",
    title: "Free in-home consultation",
    body: "We visit, look at the actual rooms, and listen to how each space is used before recommending anything.",
  },
  {
    step: "02",
    title: "Clear recommendations",
    body: "A focused set of fabrics, opacities and control options, with the trade-offs explained in plain language.",
  },
  {
    step: "03",
    title: "Precision measuring",
    body: "Every opening measured on site — depth, obstructions, mounting and power confirmed before ordering.",
  },
  {
    step: "04",
    title: "Professional installation",
    body: "We install, program motors and remotes, test each treatment with you, and leave the space clean.",
  },
] as const;
