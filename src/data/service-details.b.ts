import type { ServiceDetail } from "./detail-types";

/**
 * Second layer of page content for six specific services. Appended below the
 * standard intro/options/benefits blocks from src/data/services.ts, and the
 * FAQs here are appended to the base FAQ list on each page.
 */
export const serviceDetailsB: ServiceDetail[] = [
  {
    slug: "roman-shades",
    sections: [
      {
        id: "designer-interiors",
        kind: "split",
        eyebrow: "Design",
        title: "Why designers reach for roman shades first",
        intro:
          "Roman shades introduce pattern and texture the way a rug or a piece of upholstery does, which is why they show up so often in curated, designer-led rooms.",
        body: [
          "A printed linen or a woven texture on a roman shade reads as a considered design choice, not just a window covering. Because the fabric stacks rather than gathers, bold patterns stay legible instead of disappearing into folds.",
        ],
        bullets: [
          "Pattern and color anchor a room's palette",
          "Trim and banding pick up other finishes nearby",
          "Works as the single decorative element in a minimal room",
        ],
        image: { src: "/images/fabrics.jpg", alt: "Designer fabric swatches used for custom roman shades" },
        imageSide: "right",
        tone: "paper",
      },
      {
        id: "light-filtering-vs-lined",
        kind: "compare",
        eyebrow: "Fabric performance",
        title: "Light filtering face fabric vs. fully lined",
        intro: "The same face fabric behaves very differently once a lining is added behind it.",
        items: [
          {
            name: "Light filtering, unlined",
            body: "Daylight glows through the weave, colors stay true from outside, and the room keeps a soft, bright feel. Best for living and dining rooms during the day.",
          },
          {
            name: "Lined or blackout",
            body: "A lining is sewn behind the face fabric to add privacy, block light, or protect the fabric from sun. The front pattern looks identical from inside; the back reads as a uniform color from the street.",
          },
        ],
        tone: "sand",
      },
      {
        id: "fold-comparison",
        kind: "cards",
        eyebrow: "Fold styles",
        title: "Matching a fold style to the room",
        items: [
          { name: "Flat fold", body: "Crisp, architectural lines that suit contemporary kitchens and offices." },
          { name: "Relaxed fold", body: "A soft, gently curved hem for casual living rooms and bedrooms." },
          { name: "Hobbled fold", body: "Deep, cascading folds even when the shade is fully lowered — a traditional, layered look." },
        ],
        tone: "ink",
      },
      {
        id: "measuring",
        kind: "steps",
        eyebrow: "Measuring & fit",
        title: "Getting a roman shade to hang square",
        body: [
          "Because the fabric is cut and sewn flat before it is mounted, an accurate measurement matters more here than on almost any other treatment.",
        ],
        items: [
          { name: "Confirm mount type", body: "Inside mount for a tailored, recessed look; outside mount where depth is shallow or blackout is needed." },
          { name: "Measure width and drop at three points", body: "Openings are rarely perfectly square, so we record the narrowest width and account for it in the cut." },
          { name: "Check the stack height", body: "The folded shade needs headroom above the glass — we confirm there is enough clearance before ordering." },
          { name: "Cut, sew and mount to that opening", body: "Each shade is made to the specific window it will hang in, not a standard size." },
        ],
        tone: "paper",
      },
      {
        id: "care",
        kind: "checklist",
        eyebrow: "Living with roman shades",
        title: "Care and everyday use",
        bullets: [
          "Dust folds gently with a soft brush attachment rather than a damp cloth",
          "Raise fully now and then so folds don't set a permanent crease in one position",
          "Keep lined shades away from direct radiator heat, which can shorten fabric life",
          "Spot-clean face fabric per the manufacturer's care code — most are not machine washable once sewn",
        ],
        tone: "sand",
      },
    ],
    extraFaqs: [
      {
        q: "How long does a custom roman shade take from order to install?",
        a: "Because each shade is cut and sewn to your exact opening, expect a fabrication lead time before installation. We give you a specific window for your order at the consultation.",
      },
      {
        q: "Can a patterned fabric be used on a wide roman shade?",
        a: "Yes, though very wide openings are often split into two shades so the pattern lifts and folds evenly rather than distorting across one oversized panel.",
      },
      {
        q: "Do roman shades work well over a radiator or deep sill?",
        a: "Yes — because the stack sits at the top of the window, the sill and any hardware below stay clear when the shade is raised.",
      },
    ],
    cta: {
      title: "Bring us a fabric, or let us bring the samples",
      body: "Whether you already have a fabric in mind or want to compare fold styles and linings in your own light, we'll measure, cut and hang your roman shades to fit.",
    },
  },

  {
    slug: "sheer-shades",
    sections: [
      {
        id: "how-vanes-work",
        kind: "steps",
        eyebrow: "How it works",
        title: "How a sheer shade's vanes control light",
        body: [
          "A sheer shade is built from two sheer fabric facings with soft horizontal vanes suspended between them. Tilting the vanes changes how much light and view pass through.",
        ],
        items: [
          { name: "Vanes open flat", body: "Maximum daylight and an almost unobstructed view through the sheer facings." },
          { name: "Vanes tilted partway", body: "Light is broken up and diffused, with the outside view softened rather than blocked." },
          { name: "Vanes closed", body: "The fabric vanes overlap for privacy while still glowing with diffused daylight, unlike a solid shade." },
          { name: "Fully raised", body: "The whole system stacks into the headrail, clearing the glass completely." },
        ],
        tone: "ink",
      },
      {
        id: "room-by-room",
        kind: "cards",
        eyebrow: "Where they belong",
        title: "Rooms where sheer shades earn their place",
        items: [
          { name: "Formal living rooms", body: "The refined, layered look reads as finished without adding drapery." },
          { name: "Dining rooms", body: "Diffused light avoids the harsh glare and shadow lines a hard slat blind can create over a table." },
          { name: "Tall or feature windows", body: "The vane structure keeps proportion on glass that would look bare with a plain roller shade." },
          { name: "Home offices with screen glare", body: "Vanes cut direct sun without darkening the whole room." },
        ],
        tone: "paper",
      },
      {
        id: "view-through-vs-privacy",
        kind: "split",
        eyebrow: "Softness and view",
        title: "Softness without giving up the view",
        intro:
          "Most window treatments force a choice between keeping the view and getting privacy. Sheer shades let you dial between the two.",
        body: [
          "Because the vanes are fabric, not vinyl or aluminum, the light that comes through even when they're closed is diffused rather than blocked in hard stripes. That soft glow is the main reason clients choose sheer shades over a horizontal blind for formal rooms.",
        ],
        image: { src: "/images/layered-coverings.jpg", alt: "Sheer shade vanes filtering soft daylight in a formal room" },
        imageSide: "left",
        tone: "sand",
      },
      {
        id: "layering",
        kind: "prose",
        eyebrow: "Layering",
        title: "Pairing sheer shades with drapery",
        body: [
          "Because sheer shades already have a refined, layered look, many rooms stop there. Where a client wants more warmth or full blackout at night, we hang drapery panels outside the shade rather than in front of it, so the vanes stay fully visible and functional and the drapery does the job of closing the room down completely after dark.",
        ],
        tone: "paper",
      },
      {
        id: "maintenance",
        kind: "checklist",
        eyebrow: "Care",
        title: "Keeping vanes looking crisp",
        bullets: [
          "Dust regularly with a soft brush or vacuum attachment on a low setting",
          "Avoid pulling or twisting the vanes by hand — use the wand or motor control",
          "Keep out of direct contact with sharp furniture edges near the stack",
          "Have vanes re-leveled by our team if one side begins to sit unevenly",
        ],
        tone: "ink",
      },
    ],
    extraFaqs: [
      {
        q: "Do sheer shade vanes sag or stretch over time?",
        a: "Quality vane fabric holds its shape well with normal use. If a vane does sit unevenly, it's a quick adjustment rather than a replacement — let us know and we'll check it.",
      },
      {
        q: "Can sheer shades be motorized on tall windows?",
        a: "Yes. Motorized tilt and lift are common on tall or grouped sheer shades where reaching a wand isn't practical.",
      },
      {
        q: "Do sheer shades reduce heat the way solar screens do?",
        a: "They cut some glare and UV thanks to the sheer facings, but they're chosen mainly for their look and light quality rather than as a heat-blocking product — a solar roller shade is the better tool for that job.",
      },
    ],
    cta: {
      title: "See sheer shades tilt in your own light",
      body: "The effect is best judged in person — we bring vane samples to your windows so you can see exactly how the light changes as they tilt.",
    },
  },

  {
    slug: "custom-drapery",
    sections: [
      {
        id: "pleat-styles",
        kind: "compare",
        eyebrow: "Pleat styles",
        title: "Choosing a pleat style",
        items: [
          { name: "Pinch pleat", body: "Tailored, gathered pleats on a traditional rod — a classic, formal look that suits period and colonial interiors." },
          { name: "Euro pleat", body: "A flatter, tailored pleat at the top with fuller fabric below, giving crisp verticals on rings or hooks." },
          { name: "Ripple fold", body: "A continuous, even wave on a track, with no visible pleat — the standard for modern and minimal rooms." },
        ],
        tone: "paper",
      },
      {
        id: "hardware-tracks",
        kind: "split",
        eyebrow: "Hardware",
        title: "Rods, tracks and the hardware that disappears",
        intro: "Drapery hardware is either the finishing detail or invisible — rarely both by accident.",
        body: [
          "A decorative rod with finials becomes part of the room's design and suits pinch or euro pleats. A track is built to be concealed — in a recessed pocket, behind a fascia, or simply painted to match the ceiling — and is the right choice for ripple fold or any run that needs to disappear.",
          "We choose the hardware and the pleat style together, since some pleats only work correctly on one or the other.",
        ],
        image: { src: "/images/drapery.jpg", alt: "Drapery hardware and pleated panels on a rod beside a window" },
        imageSide: "right",
        tone: "sand",
      },
      {
        id: "ceiling-height",
        kind: "prose",
        eyebrow: "Proportion",
        title: "Ceiling height and where the rod goes",
        body: [
          "Mounting the rod higher than the window frame and extending it beyond the opening does more for a room's proportions than almost any other single decision. It makes the ceiling feel taller and the window feel larger, and it means the glass is never covered by fabric when the panels are pulled open.",
          "In rooms with standard ceiling heights we still push the rod up as far as trim and crown molding allow. In taller rooms with generous ceiling height, drapery can run nearly floor to ceiling for a more dramatic scale.",
        ],
        tone: "ink",
      },
      {
        id: "measuring-install",
        kind: "steps",
        eyebrow: "Made to measure",
        title: "From measurement to installed panels",
        items: [
          { name: "Set the rod or track position first", body: "We decide hardware height and width before measuring the drop, since the drop is taken from the rod, not the window frame." },
          { name: "Measure the drop and fullness", body: "Panels are cut with enough fabric fullness to fold and hang correctly, not just to cover the width of the glass." },
          { name: "Fabricate to that exact drop", body: "Panels are sewn and hemmed to your rod height, which is why made-to-measure hangs differently than ready-made panels bought to a standard length." },
          { name: "Install and dress the panels", body: "Hardware goes up, panels are hung, and folds are dressed by hand so they train correctly from day one." },
        ],
        tone: "paper",
      },
      {
        id: "layering-shades",
        kind: "checklist",
        eyebrow: "Layering",
        title: "Layering drapery with a shade at the glass",
        bullets: [
          "A roller or roman shade handles daily light and privacy at the glass",
          "Drapery panels frame the window and stay open most of the time",
          "Closing both at night adds the last of the light and sound control a single treatment can't provide",
          "The shade and drapery fabrics are chosen together so the layers read as one design",
        ],
        tone: "sand",
      },
    ],
    extraFaqs: [
      {
        q: "How much fullness should drapery panels have?",
        a: "Most rooms look best at roughly two to two-and-a-half times the width of the rod in fabric, so the panels fold with real body rather than hanging flat. We recommend fullness based on the pleat style and fabric weight.",
      },
      {
        q: "Can existing rods be reused with new panels?",
        a: "Sometimes, if the rod is the right length, height and finish for the new pleat style. We check this at the consultation rather than assuming a rod needs replacing.",
      },
      {
        q: "Do you install drapery on ceilings without crown molding?",
        a: "Yes — track and rod mounting adapts to plain ceilings, drywall returns and recessed pockets. We confirm the mounting surface during measurement.",
      },
      {
        q: "How long is the lead time for custom drapery?",
        a: "Made-to-measure panels take longer than off-the-shelf fabric, since they're cut, sewn and hemmed to your specific drop after hardware is placed. We give you a firm timeframe once the order is placed.",
      },
    ],
    cta: {
      title: "Plan drapery and hardware together",
      body: "Rod height, pleat style and fabric all depend on each other — we work through them in one visit so the finished panels hang exactly as planned.",
    },
  },

  {
    slug: "motorized-curtains",
    sections: [
      {
        id: "hotel-scenes",
        kind: "prose",
        eyebrow: "The hotel-style effect",
        title: "The scene most clients are actually asking for",
        body: [
          "When clients describe what they want, they're often describing a hotel room: panels that glide open evenly across a wide wall of glass at the touch of one button, with no dragging, no uneven stacking, and no one crossing the room to do it by hand.",
          "That effect comes from the track, not the fabric. A motor sized correctly to the run keeps the leading edge straight and the ripple even every time the curtains move, which is very difficult to achieve by hand on a wide span.",
        ],
        tone: "ink",
      },
      {
        id: "wide-spans",
        kind: "split",
        eyebrow: "Wide spans",
        title: "Built for window walls, not standard windows",
        intro: "Motorized tracks solve a problem that only shows up once drapery gets wide, tall or awkward to reach.",
        body: [
          "Floor-to-ceiling glass, corner windows and sliding doors are exactly where hand-drawn panels start to fail — the fabric drags, the leading edge falls behind, or the window is simply too wide to reach without walking its length. A motorized track spans the full run in one continuous piece of hardware and moves the whole width evenly.",
        ],
        image: { src: "/images/waterfront-highrise.jpg", alt: "Wide span of motorized curtains across floor-to-ceiling glass" },
        imageSide: "left",
        tone: "sand",
      },
      {
        id: "track-options",
        kind: "cards",
        eyebrow: "Track configuration",
        title: "Track configurations we install",
        items: [
          { name: "Center-open", body: "Two panels meet in the middle — the standard configuration for a symmetrical wall of glass." },
          { name: "Single-draw", body: "One panel stacks fully to one side, useful next to a door or a fixed piece of furniture." },
          { name: "Recessed pocket", body: "The track disappears into a ceiling recess so only the fabric is visible." },
          { name: "Curved track", body: "Follows a bay window or a corner run without a visible break in the curtain line." },
        ],
        tone: "paper",
      },
      {
        id: "wiring-options",
        kind: "compare",
        eyebrow: "Power",
        title: "Battery vs. hardwired motors",
        items: [
          { name: "Battery / rechargeable", body: "Installs without new wiring, in almost any existing home, and recharges on a schedule you control." },
          { name: "Hardwired", body: "The better fit during new construction or a renovation, with no batteries to manage on a heavy, frequently used track." },
        ],
        tone: "ink",
      },
      {
        id: "control-scenes",
        kind: "checklist",
        eyebrow: "Control",
        title: "Setting up scenes and schedules",
        bullets: [
          "Group multiple tracks so an entire wall of glass opens and closes together",
          "Pair with motorized shades on one remote or app for a single \"morning\" or \"movie\" scene",
          "Set a schedule so curtains open at sunrise and close at dusk where the hardware supports it",
          "Confirm smart-home hub compatibility before ordering if that's part of the plan",
        ],
        tone: "sand",
      },
    ],
    extraFaqs: [
      {
        q: "Can motorized curtain tracks curve around a bay window?",
        a: "Yes, curved tracks are available and are measured to the specific radius of your bay or corner window.",
      },
      {
        q: "Will a motorized track work with heavy, lined drapery?",
        a: "Yes, but the motor needs to be sized to the actual weight of the fabric — heavier lined or interlined panels need a stronger motor than a light sheer. We confirm fabric weight before specifying the track.",
      },
      {
        q: "Can I still open motorized curtains by hand if needed?",
        a: "Most tracks allow a gentle manual override, though repeated hand-pulling can strain the mechanism over time. We'll explain the correct manual procedure for your specific track.",
      },
    ],
    cta: {
      title: "Get the wide-span glass moving on its own",
      body: "If your drapery spans a window wall, sliding door or corner run, a motorized track is worth pricing alongside a standard rod. We'll measure the run and recommend the right hardware.",
    },
  },

  {
    slug: "outdoor-motorized-shades",
    sections: [
      {
        id: "before-the-glass",
        kind: "prose",
        eyebrow: "How it works",
        title: "Stopping heat before it reaches the glass",
        body: [
          "An interior shade blocks light after the sun's heat has already passed through the window and into the room. An exterior shade stops the sun before it ever reaches the glass, which is the more effective way to keep a patio, porch or sunroom comfortable through the hottest part of the day.",
          "The same principle works for wind-driven glare and for turning an open patio into a screened, usable outdoor room.",
        ],
        tone: "sand",
      },
      {
        id: "room-by-room-outdoor",
        kind: "cards",
        eyebrow: "Where they go",
        title: "Patios, porches and pergolas",
        items: [
          { name: "Covered patios", body: "Screens the low afternoon sun that a roof overhang doesn't block, extending usable hours outside." },
          { name: "Porches", body: "Adds privacy from the street or neighboring property without walling the porch in." },
          { name: "Pergolas", body: "Fills the open sides with a retractable screen, turning a shade structure into a fully usable room." },
          { name: "West-facing decks", body: "Cuts the harshest part of the day's sun and glare off outdoor furniture." },
        ],
        tone: "paper",
      },
      {
        id: "exterior-fabric-guide",
        kind: "split",
        eyebrow: "Fabric",
        title: "Exterior fabrics built for weather",
        intro: "Fabric exposed to sun, rain and wind needs a different specification than anything used indoors.",
        body: [
          "Exterior mesh fabrics are built to resist UV breakdown, shed water and hold their tension outdoors season after season. Openness factor controls how much heat, glare and insect activity the fabric screens versus how much view and airflow it keeps — a decision we make based on the exposure of your specific patio or porch.",
        ],
        image: { src: "/images/nj-home.jpg", alt: "Home patio suited to an exterior motorized shade" },
        imageSide: "right",
        tone: "ink",
      },
      {
        id: "wind-and-weather",
        kind: "checklist",
        eyebrow: "Weather considerations",
        title: "What we check before ordering an exterior shade",
        bullets: [
          "Exposure and typical wind conditions at the mounting location",
          "Whether side guides or cables are needed to keep the shade stable in wind",
          "The wind rating of the system relative to that exposure",
          "Whether a wind sensor is worth adding to retract the shade automatically, where supported",
          "The mounting substrate — fascia, soffit or wall — and whether it can carry the hardware",
        ],
        tone: "sand",
      },
      {
        id: "seasonal-care",
        kind: "prose",
        eyebrow: "Care & seasons",
        title: "Living with an exterior shade year-round",
        body: [
          "Most exterior shades are simply retracted and can stay mounted through the winter. On very exposed sites, some homeowners choose to have the fabric removed for the season — we cover what makes sense for your specific location during the consultation, rather than applying one rule to every installation.",
        ],
        tone: "paper",
      },
    ],
    extraFaqs: [
      {
        q: "Do exterior shades help with insects as well as sun?",
        a: "A denser privacy-weight fabric does reduce insects entering a covered patio, though openness factor is chosen primarily around sun and glare — we'll flag the trade-off if insect screening is a priority.",
      },
      {
        q: "Can outdoor motorized shades be controlled from inside the house?",
        a: "Yes — remote, app and, where supported, wind or sun sensor control are all available, the same as our interior motorized shades.",
      },
      {
        q: "Will an exterior shade fade or degrade in direct sun?",
        a: "Exterior-grade mesh fabrics are made to resist UV breakdown outdoors, which is why they're a different material than an interior solar screen fabric.",
      },
      {
        q: "What mounting surfaces work for exterior shades?",
        a: "Fascia boards, soffits and exterior walls can all work, provided they can carry the hardware load — we check the specific structure on site before ordering.",
      },
    ],
    cta: {
      title: "Turn your patio into three-season space",
      body: "We evaluate the sun exposure and wind conditions at your patio, porch or pergola before recommending a fabric and mounting system.",
    },
  },

  {
    slug: "custom-blinds",
    sections: [
      {
        id: "wood-vs-faux",
        kind: "compare",
        eyebrow: "Material",
        title: "Real wood vs. faux wood",
        items: [
          { name: "Real wood", body: "Warm, natural grain and lighter weight, which matters on wide windows. The right choice for living rooms and bedrooms away from moisture." },
          { name: "Faux wood", body: "Resists warping, cracking and fading in humidity, making it the practical choice for bathrooms, kitchens and basements." },
        ],
        tone: "paper",
      },
      {
        id: "slat-sizes",
        kind: "cards",
        eyebrow: "Slat width",
        title: "Choosing a slat size",
        items: [
          { name: "1 inch slats", body: "A finer, more detailed look suited to smaller windows." },
          { name: "2 inch slats", body: "The most common width — a balance of view-through and a clean stacked look when open." },
          { name: "2.5 inch slats", body: "Wider slats for larger windows, giving a bolder line and a faster tilt from open to closed." },
        ],
        tone: "sand",
      },
      {
        id: "valances-tilt",
        kind: "split",
        eyebrow: "Finishing details",
        title: "Valances and tilt options that finish the look",
        intro: "The headrail and tilt mechanism are as much a part of the finished look as the slats themselves.",
        body: [
          "A fabric-wrapped or matching wood valance conceals the headrail and lifting mechanism for a built-in appearance. Tilt can be run by a traditional wand, a cordless mechanism for a cleaner look and child safety, or a motor on larger or hard-to-reach installations.",
        ],
        image: { src: "/images/wood-blinds.jpg", alt: "Wood blinds with a matching valance finishing the headrail" },
        imageSide: "left",
        tone: "ink",
      },
      {
        id: "moisture-rooms",
        kind: "prose",
        eyebrow: "Moisture & durability",
        title: "Specifying for kitchens, bathrooms and basements",
        body: [
          "Steam, condensation and humidity will warp and discolor real wood over time, which is why we steer these rooms toward faux wood rather than compromising on a wood blind that won't hold up. Faux wood also cleans easily, which matters in rooms that see grease, splashes or regular condensation on the glass.",
        ],
        tone: "sand",
      },
      {
        id: "vertical-sliding-doors",
        kind: "steps",
        eyebrow: "Sliding doors",
        title: "Specifying vertical blinds for a sliding door",
        items: [
          { name: "Measure the full door width and stack area", body: "Verticals need clearance on one or both sides to stack completely clear of the doorway." },
          { name: "Choose fabric or PVC vanes", body: "Fabric vanes suit living areas; PVC vanes handle moisture near a patio or pool door." },
          { name: "Set the draw direction", body: "One-way draw to a single side, or a center draw for a wider opening." },
          { name: "Confirm bottom chain or weighted hem", body: "Keeps vanes hanging straight and controls movement from drafts near the door." },
        ],
        tone: "paper",
      },
    ],
    extraFaqs: [
      {
        q: "Do faux wood blinds look as good as real wood?",
        a: "Modern faux wood has a convincing wood-grain finish at a normal viewing distance. The clearest visual difference is weight — faux wood is heavier, which is one reason we still recommend real wood on very wide windows.",
      },
      {
        q: "Can custom blinds be motorized?",
        a: "Yes, both tilt and lift can be motorized on wood, faux wood and vertical blinds, which is worth considering on larger windows or hard-to-reach installations.",
      },
      {
        q: "How do valances attach to the headrail?",
        a: "Valances clip onto the same headrail the blind lifts from, so they can be color-matched or fabric-wrapped without altering how the blind operates.",
      },
      {
        q: "Are cordless blinds available in every slat size?",
        a: "Cordless lift is available across most slat widths and materials; we'll confirm the option for your specific size and mount at the consultation.",
      },
    ],
    cta: {
      title: "Match the material to the room, not just the look",
      body: "Wood, faux wood and vertical blinds each solve a different problem — we help you choose based on where the window actually is, not just how it should look.",
    },
  },
];
