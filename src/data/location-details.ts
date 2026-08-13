import type { LocationDetail } from "./detail-types";

export const locationDetails: LocationDetail[] = [
  {
    slug: "bergen-county-nj",
    sections: [
      {
        id: "what-we-see",
        kind: "split",
        eyebrow: "On the ground",
        title: "What most Bergen County consultations turn into",
        body: [
          "Because we're based in Cresskill, a large share of our week is Bergen County appointments, and a pattern shows up quickly: homeowners either want one or two problem rooms solved (a great room that overheats, a bedroom that's too bright at 6am) or they're doing the whole house at once during a move-in.",
          "Both are easy to plan for on a single visit — we bring enough sample range to spec a full house the same afternoon if that's what's needed, or to solve one window properly without upselling the rest of the home.",
        ],
        image: { src: "/images/nj-home.jpg", alt: "Suburban New Jersey home exterior with multiple window styles" },
        imageSide: "right",
      },
      {
        id: "the-visit",
        kind: "steps",
        title: "How a Bergen County appointment usually runs",
        items: [
          { name: "Same-week visit", body: "Given the short drive, we can usually get a consultation on the calendar within days, not weeks." },
          { name: "On-site measuring", body: "Every opening is measured in person — nominal sizes from a floor plan aren't good enough for older colonials." },
          { name: "Local fabrication check-in", body: "If a detail needs confirming once shades are in production, we can swing back by without it becoming a scheduling problem." },
          { name: "Install and walkthrough", body: "Our own installers hang and program everything, then walk the controls with you room by room." },
        ],
      },
      {
        id: "seasonal-light",
        kind: "checklist",
        title: "Seasonal light: what changes room to room",
        bullets: [
          "South and west-facing family rooms get harsh summer glare — solar screen fabrics are the usual fix",
          "North-facing bedrooms in older homes lose heat fast in winter — cellular shades add a real insulating layer",
          "Sunrooms and additions often have skylights or transoms that need their own separate control",
          "New-construction stairwells frequently have windows two storeys up that only make sense motorized",
        ],
      },
      {
        id: "choices",
        kind: "compare",
        title: "What Bergen County homeowners tend to choose",
        items: [
          { name: "Split-levels & colonials", body: "Roman shades or a shade-plus-drapery layer, sized to the deep original recess." },
          { name: "New construction", body: "Motorized roller shades on great-room glass and stairwell windows, grouped to one app or remote." },
        ],
      },
      {
        id: "nearby",
        kind: "prose",
        title: "Also serving the towns around Cresskill",
        body: [
          "Beyond the towns listed on this page, we regularly work in the surrounding Bergen County area and can confirm coverage for any specific address before you commit to a visit.",
        ],
      },
    ],
    extraFaqs: [
      { q: "Can you handle a whole-house project in one visit?", a: "Often, yes. If you know you want every room specified, tell us in advance and we'll bring a full sample range so we can plan the whole house on one appointment." },
      { q: "Do you offer evening or weekend consultations in Bergen County?", a: "We try to work around your schedule. Ask when you contact us and we'll see what's available." },
      { q: "What if I only need one room done, not the whole house?", a: "That's most of our work. There's no minimum project size — a single bedroom shade gets the same measuring and installation care as a full house." },
    ],
    cta: {
      title: "Let's look at your Bergen County windows",
      body: "We're a short drive from almost anywhere in the county. Reach out and we'll set up a free in-home consultation.",
      buttonLabel: "Book a Bergen County consultation",
    },
  },
  {
    slug: "northern-new-jersey",
    sections: [
      {
        id: "one-team",
        kind: "prose",
        title: "One installer, three very different housing types",
        body: [
          "A single week for us might mean a hardwired motor install during a Bergen County renovation, a shallow-mount roller shade in a Jersey City high-rise, and a period roman shade in an Essex County Victorian. Rather than treating that as three separate businesses, we keep one process — measure on site, recommend honestly, install ourselves — and let the product selection do the adapting.",
          "That consistency matters most when a project spans towns, such as a family furnishing a primary home in Bergen County and a rental unit in Hudson County at the same time.",
        ],
      },
      {
        id: "regional-considerations",
        kind: "cards",
        title: "What changes as you cross the region",
        items: [
          { name: "Bergen County suburbs", body: "More freedom to layer drapery, hardwire motors during renovation, and work with deep window recesses." },
          { name: "Hudson County waterfront", body: "Shallow mounting depth, building access rules and glare off the river or skyline glass." },
          { name: "Essex County period homes", body: "Arched, bayed and out-of-square openings that need individual measuring." },
        ],
      },
      {
        id: "process",
        kind: "steps",
        title: "How we plan a multi-town or multi-property project",
        items: [
          { name: "One point of contact", body: "You deal with the same person from first call through final adjustment, regardless of which town the property is in." },
          { name: "Consultations scheduled around your calendar", body: "We coordinate visits to multiple properties efficiently if that's useful to you." },
          { name: "Consistent fabrication and installation standards", body: "The same measuring and installation approach applies whether the address is in Ridgewood or Jersey City." },
        ],
      },
      {
        id: "coverage-map",
        kind: "checklist",
        title: "Where 'Northern New Jersey' means for us",
        bullets: [
          "All of Bergen County, from our Cresskill base",
          "Hudson County waterfront towns and inland neighborhoods",
          "Essex County suburbs and city neighborhoods",
          "Selected towns in Passaic County — ask us to confirm your address",
        ],
      },
    ],
    extraFaqs: [
      { q: "Can you handle properties in two different counties for the same client?", a: "Yes, this comes up often — a primary home and an investment or family property in different towns. We coordinate scheduling so it's one project, not two." },
      { q: "Do product recommendations differ much by town?", a: "The underlying process doesn't change, but the right product often does — a high-rise condo and a Bergen County colonial rarely call for the same shade." },
      { q: "Is Passaic County definitely covered?", a: "We work in selected Passaic County towns. Give us the address and we'll confirm before scheduling." },
      { q: "Do you charge travel fees for towns further out in Northern New Jersey?", a: "No. The consultation and measuring visit are free anywhere we serve, and travel is never added to your quote." },
      { q: "Which Northern NJ towns get motorized shades most often?", a: "Newer construction in Bergen and Hudson with tall glass leads by a wide margin, but we motorize stairwell and high-transom windows in older towns just as often." },
    ],
    cta: {
      title: "One project, several towns — no problem",
      body: "Tell us where your windows are and we'll confirm coverage and get a consultation scheduled.",
      buttonLabel: "Check coverage for your address",
    },
  },
  {
    slug: "hudson-county-nj",
    sections: [
      {
        id: "building-access",
        kind: "checklist",
        eyebrow: "Building logistics",
        title: "What we plan for before install day",
        bullets: [
          "Certificate of insurance requirements — most Hudson County buildings expect one before work is scheduled",
          "Service elevator reservations and delivery windows set by building management",
          "Concierge sign-in and any move-in/move-out style restrictions on tools or materials",
          "Whether the lease or condo association requires installations to be fully reversible",
        ],
      },
      {
        id: "typical-projects",
        kind: "compare",
        title: "Two common Hudson County briefs",
        items: [
          { name: "Skyline-facing living room", body: "Low-openness solar screen roller shades that cut glare and heat while keeping the Manhattan view intact." },
          { name: "Bedroom facing another building", body: "A blackout roller or cellular shade on an outside mount, since condo recesses rarely have depth for an inside mount." },
        ],
      },
      {
        id: "loft-conversions",
        kind: "split",
        title: "Converted lofts and newer towers",
        body: [
          "Jersey City and Hoboken both have a steady supply of converted industrial buildings alongside brand-new towers. The older conversions often have exposed brick, large steel-frame windows and no drapery hardware anywhere — those get outside-mounted rollers or zebra shades that don't depend on drilling into masonry.",
          "The newer towers bring floor-to-ceiling glass and minimal frame to mount to at all, which is where slim cassette headrails and motorization earn their keep.",
        ],
        image: { src: "/images/waterfront-highrise.jpg", alt: "Modern Hudson County waterfront tower with floor-to-ceiling windows" },
        imageSide: "left",
      },
      {
        id: "who-we-serve",
        kind: "prose",
        title: "Renters, owners and building managers",
        body: [
          "We work directly with individual condo owners and tenants as often as we work with a building manager coordinating several units at once. Either way, we keep the same paperwork and access planning so building requirements aren't a surprise on install day.",
        ],
      },
    ],
    extraFaqs: [
      { q: "Do you provide a certificate of insurance for building management?", a: "Yes, this is routine for us in Hudson County buildings — just let us know what your building requires when you book." },
      { q: "Can installation happen if I'm renting, not owning?", a: "Yes. We regularly install for tenants and can keep the work reversible if your lease requires it." },
      { q: "What if my building only allows installs during weekday business hours?", a: "That's typical, and we plan around it — tell us the building's access window and we'll schedule accordingly." },
    ],
    cta: {
      title: "Waterfront glass, handled properly",
      body: "Send us your address and any building requirements, and we'll set up a free consultation.",
      buttonLabel: "Schedule a Hudson County visit",
    },
  },
  {
    slug: "manhattan-ny",
    sections: [
      {
        id: "building-realities",
        kind: "checklist",
        eyebrow: "Before we schedule install",
        title: "Manhattan building logistics we plan around",
        bullets: [
          "Service elevator booking windows, often limited to a couple of hours a day",
          "Certificate of insurance naming the building — standard for most co-ops and condos",
          "Move-in and installation rules that can restrict what days or hours we're allowed on site",
          "Whether the board or landlord requires treatments to be removable without wall damage",
        ],
      },
      {
        id: "co-op-vs-tower",
        kind: "compare",
        title: "Pre-war co-op vs. new tower",
        items: [
          { name: "Pre-war co-op", body: "Out-of-square openings, radiator covers under the sill, and plaster reveals that need careful bracket placement." },
          { name: "New glass tower", body: "Floor-to-ceiling curtain-wall glass with almost no mounting depth, calling for slim cassettes or fascia-mounted shades." },
        ],
      },
      {
        id: "privacy-first",
        kind: "split",
        title: "Privacy is usually the starting question",
        body: [
          "In most Manhattan apartments the building across the street is close enough that daytime privacy matters more than anything else, but nobody wants to sit in the dark all day. Zebra shades and light filtering fabrics answer that directly — sheer enough to hold onto daylight, opaque enough to break up sightlines.",
          "Bedrooms flip the priority at night: a blackout layer, often paired with side channels, deals with hallway light, street light and early sunrise through thin curtain-wall glass.",
        ],
        image: { src: "/images/privacy-window.jpg", alt: "Zebra shade providing daytime privacy in a Manhattan apartment window" },
        imageSide: "right",
      },
      {
        id: "process",
        kind: "steps",
        title: "How a Manhattan project runs",
        items: [
          { name: "Consultation", body: "We bring samples to the apartment and talk through what the building will and won't allow." },
          { name: "Measuring", body: "Every window measured individually — pre-war openings are rarely uniform even within the same room." },
          { name: "Building coordination", body: "We handle insurance paperwork and elevator scheduling ahead of the install date." },
          { name: "Installation", body: "Completed by our own installers, with cleanup and a walkthrough of the controls." },
        ],
      },
    ],
    extraFaqs: [
      { q: "Will you deal directly with my building's management office?", a: "Yes. We're used to coordinating certificates of insurance and elevator bookings directly with building staff." },
      { q: "Can treatments be removed without damaging the wall when I move out?", a: "In most cases yes — we can specify mounting hardware that comes down cleanly if that's a requirement." },
      { q: "My windows aren't square — is that a problem?", a: "It's common in pre-war buildings and doesn't stop us; we measure at multiple points on each opening and fabricate to what's actually there." },
    ],
    cta: {
      title: "We'll work with your building, not around it",
      body: "Tell us about your apartment and any building rules, and we'll set up a consultation.",
      buttonLabel: "Book a Manhattan consultation",
    },
  },
  {
    slug: "fort-lee-nj",
    sections: [
      {
        id: "two-briefs",
        kind: "compare",
        eyebrow: "One town, two window types",
        title: "Towers vs. residential streets",
        items: [
          { name: "High-rise river-view units", body: "Strong east light off the Hudson, shallow mounting depth, and a view most owners won't give up." },
          { name: "Single-family streets", body: "More conventional double-hung and slider windows, with bedrooms wanting real blackout." },
        ],
      },
      {
        id: "morning-sun",
        kind: "prose",
        title: "Dealing with the morning glare",
        body: [
          "Fort Lee's towers face east across the river toward Manhattan, which means breakfast rooms and east-facing bedrooms get direct sun early. Rather than blocking it out entirely, we usually spec a low-openness solar screen fabric that cuts the glare and heat while keeping the skyline visible — the view is a big part of why people live there.",
        ],
      },
      {
        id: "close-by",
        kind: "split",
        title: "Ten minutes from our Cresskill base",
        body: [
          "Fort Lee sits just down the road from us, which is useful in ways that don't show up on a spec sheet: a re-measure doesn't need to wait weeks, and if a motor limit needs adjusting after install, we can usually get back out quickly.",
        ],
        image: { src: "/images/consultation.jpg", alt: "In-home consultation with fabric samples for a Fort Lee window project" },
        imageSide: "left",
      },
      {
        id: "checklist",
        kind: "checklist",
        title: "What we check on a Fort Lee high-rise visit",
        bullets: [
          "Whether the building requires a certificate of insurance before installation",
          "Actual mounting depth at the window — often shallower than the frame suggests",
          "Direction the unit faces and how much direct sun hits which rooms",
          "Whether the balcony slider needs to remain fully clear for daily use",
        ],
      },
    ],
    extraFaqs: [
      { q: "Do Fort Lee high-rises usually need a certificate of insurance?", a: "Many do — let us know your building and we'll have the paperwork ready before your install date." },
      { q: "Can you match a solar shade to my river-view unit without blocking the view?", a: "Yes, that's the usual ask — a low-openness screen fabric cuts glare and heat while keeping the outlook clear." },
      { q: "How fast can you get back out if something needs adjusting after install?", a: "Being nearby in Cresskill, we can typically turn around a follow-up visit quickly." },
      { q: "Do you install in Fort Lee's older garden apartments as well as the towers?", a: "Yes — the low-rise buildings along the Palisades are a regular part of our work, and mounting is usually simpler there." },
      { q: "Can you coordinate an install around building move-in windows?", a: "Yes. Tell us the building's reserved elevator or move-in slot and we schedule the install inside it." },
    ],
    cta: {
      title: "Right down the road in Fort Lee",
      body: "Whether it's a high-rise unit or a house on a residential street, we'll come measure and bring samples.",
      buttonLabel: "Book a Fort Lee consultation",
    },
  },
  {
    slug: "englewood-nj",
    sections: [
      {
        id: "period-details",
        kind: "prose",
        eyebrow: "Older housing stock",
        title: "Why ready-made sizes rarely work here",
        body: [
          "A lot of Englewood's housing predates standardized window sizing altogether. Tall double-hung sashes, deep plaster reveals, transoms above the main window and openings that shift by half an inch from top to bottom are all normal here, not exceptions — which is exactly why a proper on-site measuring visit matters more in Englewood than in a newer development.",
        ],
      },
      {
        id: "renovation-window",
        kind: "steps",
        title: "If you're mid-renovation",
        items: [
          { name: "Plan before drywall closes", body: "Hardwired motor lines and recessed drapery pockets are far easier to add while walls are open." },
          { name: "Coordinate with your contractor", body: "We can work directly with your GP or electrician on rough-in locations." },
          { name: "Order once trim is set", body: "Final measuring happens after finish carpentry so the numbers are exact." },
          { name: "Install on your renovation timeline", body: "We schedule around your project rather than asking you to work around ours." },
        ],
      },
      {
        id: "bedroom-brief",
        kind: "split",
        title: "Bedrooms need more darkness than people expect",
        body: [
          "Englewood's residential streets carry more ambient light at night than homeowners tend to assume — streetlights, neighboring porch lights, and cars turning at a nearby corner. A properly mounted blackout shade, sized generously with side channels or a deep outside mount, solves this in a way an off-the-shelf shade usually can't.",
        ],
        image: { src: "/images/colonial-interior.jpg", alt: "Bedroom with tall double-hung window in an older Englewood home" },
        imageSide: "right",
      },
      {
        id: "coverage",
        kind: "checklist",
        title: "Also serving nearby",
        bullets: ["Englewood Cliffs", "Tenafly", "Teaneck", "Surrounding Bergen County towns — ask us to confirm your address"],
      },
    ],
    extraFaqs: [
      { q: "We're mid-renovation — when should we call?", a: "As soon as walls are open, so we can plan hardwired motors or recessed pockets before drywall goes up." },
      { q: "Do you handle transom windows above the main sash?", a: "Yes, transoms are common in Englewood's older homes and we measure and treat them as their own opening." },
      { q: "My double-hung windows are tall and narrow — what usually suits them?", a: "Roman shades or full-length drapery generally suit the proportions better than a short, wide product." },
      { q: "Do you work on Englewood's larger East Hill homes?", a: "Regularly — those projects are usually whole-house, and we plan them room by room over one or two visits." },
      { q: "Can you match new treatments to existing woodwork stain?", a: "We can specify wood blinds and hardware finishes to sit alongside existing trim, and we bring physical samples so you can hold them against the wood." },
    ],
    cta: {
      title: "Character homes deserve a proper measure",
      body: "Whether you're renovating or just tackling a bedroom, we'll come out with samples and take real measurements.",
      buttonLabel: "Book an Englewood consultation",
    },
  },
  {
    slug: "edgewater-nj",
    sections: [
      {
        id: "waterfront-glare",
        kind: "prose",
        eyebrow: "River light",
        title: "Glare comes from two directions here",
        body: [
          "Edgewater's waterfront position means glare hits from the sky and reflects up off the river at the same time, especially in units facing west toward late afternoon sun. A single low-openness solar fabric addresses both, which is usually simpler and more effective than trying to layer multiple treatments.",
        ],
      },
      {
        id: "condo-vs-townhome",
        kind: "compare",
        title: "Condo towers vs. townhomes",
        items: [
          { name: "Waterfront condo towers", body: "Grouped floor-to-ceiling glass, often best handled with motorized shades on one control per room." },
          { name: "Riverfront townhomes", body: "Taller individual windows with a bit more mounting depth, giving room for layered shade-and-drapery treatments." },
        ],
      },
      {
        id: "balcony",
        kind: "checklist",
        title: "Keeping the balcony slider usable",
        bullets: [
          "A single wide roller shade that stacks cleanly to one side",
          "Vertical blinds that draw fully clear of the door track",
          "Motorized options where the slider is too wide to operate by hand comfortably",
        ],
      },
      {
        id: "hoa-notes",
        kind: "split",
        title: "Building and HOA practicalities",
        body: [
          "Several Edgewater buildings have exterior-appearance guidelines that affect what can be visible from outside — typically requiring a neutral backing or liner on street- and river-facing shades. We check this during the consultation so nothing needs to be reordered later.",
        ],
        image: { src: "/images/waterfront-highrise.jpg", alt: "Edgewater riverfront residential building facade" },
        imageSide: "left",
      },
    ],
    extraFaqs: [
      { q: "Does my building require a specific shade color or liner facing outward?", a: "Some Edgewater buildings do have exterior-appearance guidelines — we check this during the consultation so the order is right the first time." },
      { q: "Can one shade handle both sky glare and river reflection?", a: "Usually yes — a properly specified low-openness solar screen addresses both without needing a second layer." },
      { q: "Is motorization worth it for a townhome, or just the towers?", a: "It depends on the window — tall grouped townhome windows can benefit just as much as condo glass, especially if they're hard to reach." },
      { q: "Do you install in Edgewater's waterfront high-rises with concierge access?", a: "Yes. We book access through the front desk in advance so the crew and materials arrive in one trip." },
      { q: "Are floor-to-ceiling sliders a problem to cover?", a: "No — wide sliders are routine here. We usually run one wide shade or a matched pair so the panel stack stays clear of the door handle." },
    ],
    cta: {
      title: "Keep the water view, lose the glare",
      body: "We'll bring solar screen samples to your Edgewater home and measure on site.",
      buttonLabel: "Book an Edgewater consultation",
    },
  },
  {
    slug: "essex-county-nj",
    sections: [
      {
        id: "period-shapes",
        kind: "cards",
        eyebrow: "Period architecture",
        title: "Window shapes that need individual planning",
        items: [
          { name: "Arched heads", body: "Treated with a shade mounted above the curve, or left visible and paired with drapery below." },
          { name: "Bay windows", body: "Each pane measured and treated separately so the shades stack and operate cleanly at the angles." },
          { name: "Stained-glass transoms", body: "Usually left untreated and celebrated, with the working sash below given its own shade." },
        ],
      },
      {
        id: "fabric-choice",
        kind: "split",
        title: "Choosing fabrics that suit the room's age",
        body: [
          "A Victorian parlor or Tudor dining room reads differently with a crisp, modern roller shade than it does with a roman shade or drapery in a fabric that respects the room's proportions and trim. We bring physical samples so you can see how a fabric behaves against your actual moulding and light, not a photo.",
        ],
        image: { src: "/images/victorian-home.jpg", alt: "Victorian home living room with period trim and tall windows" },
        imageSide: "right",
      },
      {
        id: "insulation",
        kind: "prose",
        title: "Original glass and winter draughts",
        body: [
          "A lot of Essex County's period homes still have their original single-pane glass, which nobody wants to replace on a house with real architectural character. Cellular shades won't fix a draughty sash, but they do add a genuine layer of insulation at the window, and homeowners usually notice the difference by the first cold snap.",
        ],
      },
      {
        id: "whole-house",
        kind: "steps",
        title: "Planning a whole-house project",
        items: [
          { name: "Walk the house room by room", body: "We note window shape, exposure and existing trim before recommending anything." },
          { name: "Group by priority", body: "Bedrooms and street-facing rooms usually get scheduled first." },
          { name: "Fabricate and install in phases if needed", body: "Large homes don't need to be done all at once." },
        ],
      },
    ],
    extraFaqs: [
      { q: "Can you treat a bay window without ruining the shape?", a: "Yes — each pane is measured and treated as its own unit so the bay's angles still read clearly." },
      { q: "Should stained-glass transoms be covered?", a: "Usually not — we typically leave them as-is and treat only the operable window beneath." },
      { q: "Will cellular shades actually help with drafty original windows?", a: "They add a real insulating layer at the glass, though they won't replace the window itself if the sash has failed." },
      { q: "Do you cover Montclair, Millburn and South Orange?", a: "Yes, these are among the Essex County towns we work in most often." },
      { q: "Can you treat leaded or arched windows in older Essex County homes?", a: "Arched openings can be treated with a fabricated arch or an inside-mount shade below the curve; we confirm which is right once we see the opening." },
    ],
    cta: {
      title: "Period homes deserve period-appropriate treatments",
      body: "Bring us your window shapes and we'll bring fabric samples that suit the house.",
      buttonLabel: "Book an Essex County consultation",
    },
  },
  {
    slug: "brooklyn-ny",
    sections: [
      {
        id: "brownstone-brief",
        kind: "prose",
        eyebrow: "Brownstone windows",
        title: "Tall, narrow and original — the defining brief",
        body: [
          "Brooklyn's classic brownstone parlor windows are usually taller and narrower than people expect once actually measured, with deep reveals and original mouldings or shutters that shouldn't get covered up. Full-height drapery or a roman shade sized to the true proportion of the opening tends to look right in a way a standard-width shade never quite does.",
        ],
      },
      {
        id: "mounting-around-trim",
        kind: "checklist",
        title: "Mounting around original trim",
        bullets: [
          "Brackets positioned to clear existing mouldings and shutters",
          "Inside mounts used only where the reveal is deep and square enough",
          "Outside mounts specified with a finish that reads intentionally, not as an afterthought",
          "Landlord or co-op board approval confirmed before drilling, where applicable",
        ],
      },
      {
        id: "parlor-privacy",
        kind: "split",
        title: "Parlor floors sit close to the sidewalk",
        body: [
          "Brownstone parlor floors are often just a few steps above street level, so daytime privacy comes up in nearly every consultation. Light filtering or zebra shades keep the room bright while breaking up the sightline from the sidewalk; a top-down bottom-up cellular shade is another common answer, since it can cover just the lower half of a tall window.",
        ],
        image: { src: "/images/brownstone.jpg", alt: "Brooklyn brownstone parlor window at street level" },
        imageSide: "left",
      },
      {
        id: "new-build",
        kind: "compare",
        title: "Brownstones vs. new Brooklyn towers",
        items: [
          { name: "Brownstone parlor & upper floors", body: "Tall narrow drapery and roman shades planned around original trim." },
          { name: "New-build apartments", body: "Wide glass with shallow depth, closer to a Hudson County brief — motorized rollers grouped for even operation." },
        ],
      },
    ],
    extraFaqs: [
      { q: "Will you drill into original brownstone trim?", a: "We avoid it wherever possible and plan brackets around existing mouldings; where drilling is unavoidable we discuss it with you first." },
      { q: "Can a shade cover just the bottom half of a tall parlor window for privacy?", a: "Yes — a top-down bottom-up cellular shade is a common solution for exactly that." },
      { q: "Do I need co-op board approval before you install?", a: "If your building requires it, let us know and we'll work around that approval process." },
      { q: "Do you work in Brooklyn brownstones with no elevator?", a: "Yes. Walk-ups are normal for us here and we plan material handling for the stairs." },
      { q: "Which Brooklyn neighborhoods do you cover?", a: "We work in selected Brooklyn neighborhoods — send us the address and we'll confirm before booking." },
    ],
    cta: {
      title: "Brownstone windows, treated with the right proportions",
      body: "Send us a few photos of your windows and we'll set up a consultation.",
      buttonLabel: "Book a Brooklyn consultation",
    },
  },
  {
    slug: "yonkers-ny",
    sections: [
      {
        id: "hillside-light",
        kind: "prose",
        eyebrow: "Hillside exposure",
        title: "Long afternoon light off the Hudson",
        body: [
          "Yonkers' hillside position above the river means a lot of homes catch long, low-angle afternoon sun along with glare reflected off the water below. That combination is harsher on the eyes than direct overhead sun, and it's usually better solved with a solar screen or light filtering fabric than by closing a heavier shade and losing the light altogether.",
        ],
      },
      {
        id: "unreachable-windows",
        kind: "split",
        title: "The stairwell and gable windows nobody can reach",
        body: [
          "Hillside houses built into a slope often have a stairwell window two flights up or a gable window at the peak of a vaulted ceiling — openings that were never meant to be operated by hand. These are some of the clearest, least debatable cases for motorization we come across anywhere: a remote or app control instead of a window nobody has touched in years.",
        ],
        image: { src: "/images/hillside-homes.jpg", alt: "Hillside home in Yonkers with a tall stairwell window" },
        imageSide: "right",
      },
      {
        id: "housing-mix",
        kind: "compare",
        title: "Two housing types, two approaches",
        items: [
          { name: "1920s single-family homes", body: "Older wood-frame windows measured individually on site, often paired with light filtering fabrics for the front-facing rooms." },
          { name: "Apartment buildings", body: "Mounting depth and building access shape the spec, similar to condo work elsewhere in the region." },
        ],
      },
      {
        id: "coverage",
        kind: "checklist",
        title: "Areas we serve near Yonkers",
        bullets: ["Yonkers proper", "Selected parts of Bronxville", "Selected parts of Riverdale"],
      },
    ],
    extraFaqs: [
      { q: "Can you motorize a stairwell window that's two storeys up?", a: "Yes — this is one of the most common motorization requests we get in hillside Yonkers homes." },
      { q: "Do you serve Bronxville and Riverdale too?", a: "Selected areas of both — contact us with your address and we'll confirm coverage." },
      { q: "What helps most with glare reflecting off the Hudson in the afternoon?", a: "A solar screen or light filtering fabric usually handles it better than a heavier blackout treatment, since it cuts glare without losing the light entirely." },
      { q: "Do you install in Yonkers co-ops and rental buildings?", a: "Yes, both. If your building requires a certificate of insurance we provide it before the install date." },
      { q: "Are battery motors practical in an older Yonkers home with no new wiring?", a: "Yes — rechargeable battery motors are the usual answer where we can't run low-voltage cable without opening walls." },
    ],
    cta: {
      title: "From riverfront glare to unreachable stairwells",
      body: "Tell us about your Yonkers home and we'll schedule a free in-home consultation.",
      buttonLabel: "Book a Yonkers consultation",
    },
  },
];
