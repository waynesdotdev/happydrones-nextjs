/* =========================================================
   HAPPY DRONES — SITE SETTINGS
   Most day-to-day changes happen in this one file.
   Save it, and the dev server (npm run dev) updates instantly.
   ========================================================= */

export const SITE = {
  name: "Happy Drones",

  // Your live web address, no slash at the end. Used for SEO, sitemap and sharing.
  url: "https://www.yourdomain.co.uk",

  description:
    "Aerial photos, 4K video and FPV fly-through tours for homes, businesses and events. Get an instant quote in under a minute.",

  /* ---- Contact ---- */
  email: "hello@yourdomain.co.uk",
  phone: "+447700900123",       // international format, used for Call buttons
  phoneDisplay: "07700 900123", // how the number is shown
  whatsapp: "447700900123",     // digits only, country code first. "" hides WhatsApp

  /* ---- Where you work ---- */
  areaShort: "across your area",                      // e.g. "across Teesside"
  area: "Aerial photo and video, serving your area.",  // footer line
  areaServed: "Your area",                            // for Google, e.g. "Teesside"

  /* ---- Insurance & credentials (shown across the site) ---- */
  insurance: {
    publicLiability: "£10m",
    professionalIndemnity: "£50k",
  },
  credentials: [
    "CAA Flyer ID",
    "CAA Operator ID",
    "Risk assessment for every job",
    "Airspace and permission checks",
  ],

  /* ---- Socials (set url to "" to hide a platform everywhere) ---- */
  socials: [
    { id: "youtube", name: "YouTube", handle: "@happydrones", url: "https://www.youtube.com/@happydrones", blurb: "Full fly-throughs, showreels and behind the scenes" },
    { id: "tiktok", name: "TikTok", handle: "@happydrones", url: "https://www.tiktok.com/@happydrones", blurb: "Short clips from recent flights" },
    { id: "facebook", name: "Facebook", handle: "Happy Drones", url: "https://www.facebook.com/happydrones", blurb: "Jobs, reviews and local news" },
    { id: "x", name: "X", handle: "@happydrones", url: "https://x.com/happydrones", blurb: "Flight updates and quick tips" },
  ],

  /* ---- Homepage showreel: YouTube link or ID. null hides the section ---- */
  showreel: null,

  /* ---- Reviews: add real ones and the section appears by itself ----
     { text: "…", name: "Sarah", detail: "Sold her home in Yarm" }        */
  reviews: [],
};


/* =========================================================
   QUOTE BUILDER PRICES  (EXAMPLES — change to your own)
   "From £…" prices everywhere on the site come from here.
   ========================================================= */
export const PRICING = {
  currency: "£",
  services: [
    { id: "home", name: "Property", desc: "Houses, flats and land", base: 149, sizeTitle: "What kind of property?",
      sizes: [{ name: "Flat or terrace", add: 0 }, { name: "Semi or detached", add: 50 }, { name: "Large home or land", add: 120 }] },
    { id: "business", name: "Business", desc: "Shops, gyms and venues", base: 199, sizeTitle: "How many locations?",
      sizes: [{ name: "One location", add: 0 }, { name: "Two locations", add: 120 }, { name: "Three or more", add: 220 }] },
    { id: "event", name: "Event", desc: "Weddings, parties and shows", base: 249, sizeTitle: "How long is the event?",
      sizes: [{ name: "Up to 2 hours", add: 0 }, { name: "Half day", add: 150 }, { name: "Full day", add: 350 }] },
    { id: "roof", name: "Roof check", desc: "Tiles, chimneys and gutters", base: 99, sizeTitle: "How many buildings?",
      sizes: [{ name: "One building", add: 0 }, { name: "Two or three", add: 60 }] },
    { id: "fpv", name: "FPV fly-through", desc: "One-take indoor tour", base: 249, sizeTitle: "How big is the space?",
      sizes: [{ name: "Up to 4 rooms", add: 0 }, { name: "5 to 8 rooms", add: 80 }, { name: "Large venue", add: 180 }] },
    { id: "construction", name: "Construction", desc: "Site progress and overviews", base: 179, sizeTitle: "How often?",
      sizes: [{ name: "One visit", add: 0 }, { name: "Three visits", add: 320 }, { name: "Monthly for six months", add: 760 }] },
  ],
  extras: [
    { id: "vertical", name: "Vertical social clips", desc: "Three short clips for TikTok, Reels and Shorts", price: 49, hideFor: ["roof"] },
    { id: "fpvadd", name: "Add an FPV fly-through", desc: "One continuous indoor tour", price: 149, hideFor: ["fpv", "roof", "construction"] },
    { id: "golden", name: "Golden hour shoot", desc: "Filmed near sunset for warm, glowing light", price: 59, hideFor: ["roof", "construction"] },
    { id: "rush", name: "Next-day delivery", desc: "Edited photos within 24 hours", price: 49, hideFor: [] },
    { id: "raw", name: "All original files", desc: "Every unedited photo and clip", price: 29, hideFor: [] },
  ],
};

export const money = (n) => `${PRICING.currency}${Number(n).toLocaleString("en-GB")}`;
export const priceFrom = (id) => {
  const s = PRICING.services.find((x) => x.id === id);
  return s ? money(s.base) : "";
};


/* =========================================================
   HOMEPAGE — "What are you filming?" tabs
   art: home | business | event | roof | fpv | construction
   ========================================================= */
export const AUDIENCES = [
  {
    tab: "Selling a home", quote: "home", art: "home", details: "property",
    title: "Make your listing the one people stop on.",
    text: "Buyers scroll past dozens of front-door photos. Aerial shots show the plot, the garden, the street and what's nearby in one frame, which is what people actually want to know.",
    ticks: ["15–25 edited aerial photos of the house, garden and area", "A 60-second 4K video, ready for Rightmove, Zoopla and social", "Optional FPV fly-through from the front door to the back garden"],
    cta: "Price my property",
  },
  {
    tab: "Promoting a business", quote: "business", art: "business", details: "business",
    title: "Content that gets your business noticed locally.",
    text: "Short, eye-catching clips of your shop, gym, farm, car lot or site, cut for the platforms your customers already use. One morning of filming gives you weeks of posts.",
    ticks: ["Vertical clips for TikTok, Reels and Shorts", "Wide 4K footage for your website and Google profile", "Indoor FPV fly-through to show people round before they visit"],
    cta: "Price my content",
  },
  {
    tab: "Planning an event", quote: "event", art: "event", details: "events",
    title: "The shot nobody else at the event can get.",
    text: "Weddings, festivals, car meets, sports days and grand openings, filmed from above so you see the whole crowd, the venue and the moment together.",
    ticks: ["Big group photo from above, everyone in one frame", "Edited highlights video with music", "Venue arrival shots and golden-hour footage"],
    cta: "Price my event",
  },
  {
    tab: "Checking a roof", quote: "roof", art: "roof", details: "roofs",
    title: "See your roof without a ladder or scaffolding.",
    text: "Close-up photos of tiles, chimneys, flashing and gutters, so you or your roofer can see the problem before paying for access equipment.",
    ticks: ["High-resolution close-ups of every side of the roof", "Problem areas marked up on the photos", "Usually done in under an hour, no access needed inside"],
    cta: "Price my roof check",
  },
];


/* =========================================================
   SERVICES PAGE — one entry per service, in page order
   id     the #link on the page (services/#property)
   quote  which quote-builder service "Price this" opens
   alt    typical flying height shown on the camera view (metres)
   cat    Journal category for "See examples" ("" hides the link)
   ========================================================= */
export const SERVICE_PAGES = [
  {
    id: "property", quote: "home", art: "home", alt: 60, label: "Property", cat: "Guides",
    nav: "Property", title: "Property and estate agents",
    lede: "Aerial photos and video that show the whole picture: the house, the plot, the garden and what's nearby. It's what buyers actually want to know.",
    gets: ["15–25 edited aerial photos of the house, garden and area", "A 60–90 second 4K video with music", "A hero shot with the plot outlined", "Photos sized for Rightmove, Zoopla and social media"],
    facts: [["Time on site", "About 1 hour"], ["Delivered", "Photos in 48 hours"], ["Drone", "Mini 4 Pro"]],
    know: "I can work directly with your estate agent. Cars off the drive and bins out of sight makes a big difference.",
    knowLink: { text: "Here's a quick guide", href: "/journal/get-your-home-ready-for-drone-photos/" },
  },
  {
    id: "business", quote: "business", art: "business", alt: 30, label: "Business", cat: "Guides",
    nav: "Business content", title: "Content for local businesses",
    lede: "Scroll-stopping footage of your premises, team and work, cut for every platform you use. One morning of filming gives you weeks of posts.",
    gets: ["3–5 vertical clips for TikTok, Reels and Shorts", "A 60-second film for your website", "15+ photos for your Google profile and socials", "Optional indoor FPV tour of your space"],
    facts: [["Time on site", "1–2 hours"], ["Delivered", "Within 5 working days"], ["Drones", "Both"]],
    know: "I plan filming around your opening hours so business carries on as normal. Early mornings are usually quietest and have the best light.",
  },
  {
    id: "events", quote: "event", art: "event", alt: 40, label: "Events", cat: "Showreels",
    nav: "Events", title: "Weddings and events",
    lede: "Weddings, festivals, car meets, sports days and grand openings, filmed from the one place nobody else can stand.",
    gets: ["A group photo from above with everyone in one frame", "A 2–3 minute highlights film with music", "Venue, arrival and golden-hour shots", "Short clips to share on the night"],
    facts: [["Time on site", "2 hours to a full day"], ["Delivered", "Highlights in 7 days"], ["Drones", "Both"]],
    know: "Some venues and large crowds need extra permission. Book early and I'll handle the checks with the venue and organiser.",
  },
  {
    id: "roofs", quote: "roof", art: "roof", alt: 15, label: "Roof check", cat: "",
    nav: "Roof checks", title: "Roof and building checks",
    lede: "Close-up photos of tiles, chimneys, flashing and gutters, without ladders, cherry pickers or scaffolding.",
    gets: ["High-resolution photos of every side of the roof", "Problem areas marked up on the photos", "A short video along the roof line", "Photos ready to send to a roofer or insurer"],
    facts: [["Time on site", "Under 1 hour"], ["Delivered", "Within 48 hours"], ["Drone", "Mini 4 Pro"]],
    know: "I'm not a roofer, so I don't diagnose faults. The photos make it easy for a roofer to quote accurately before anyone goes up.",
  },
  {
    id: "fpv", quote: "fpv", art: "fpv", alt: 2, label: "FPV tour", cat: "Fly-throughs",
    nav: "FPV fly-throughs", title: "FPV fly-throughs",
    lede: "One unbroken flight through your space: in the front door, through every room that matters, and out over the garden.",
    gets: ["A 45–90 second single-take tour", "A route walked and rehearsed with you first", "Colour grading and music", "A vertical cut for social media"],
    facts: [["Time on site", "About 90 minutes"], ["Delivered", "Within 5 working days"], ["Drone", "Avata 2"]],
    know: "The Avata 2 has guarded propellers built for flying indoors.",
    knowLink: { text: "Read how I plan a tour", href: "/journal/planning-a-one-take-fpv-house-tour/" },
  },
  {
    id: "construction", quote: "construction", art: "construction", alt: 100, label: "Construction", cat: "",
    nav: "Construction", title: "Construction progress", fromLabel: "From, per visit",
    lede: "Regular overhead updates that show how a build is moving, for clients, investors and your own records.",
    gets: ["Photos from the same positions every visit", "A short site overview video", "Top-down overview shots of the whole site", "A shared folder for each project"],
    facts: [["Time on site", "About 1 hour"], ["Delivered", "Within 48 hours"], ["Drone", "Mini 4 Pro"]],
    know: "These are visual progress records, not measured surveys. Shooting from the same spots each visit makes before-and-after comparisons easy.",
  },
];


/* =========================================================
   HOMEPAGE — "From message to footage" steps
   ========================================================= */
export const HOW_STEPS = [
  { title: "Send your quote", text: "Use the quote builder or message me. I reply within a day with a fixed price." },
  { title: "I plan the flight", text: "I check airspace, permissions and the forecast, then book a date that suits you." },
  { title: "Fly and film", text: "Most jobs take under two hours on site. You don't need to do anything." },
  { title: "Download and post", text: "Edited photos in 48 hours, video within five working days, ready to share." },
];


/* =========================================================
   HOMEPAGE — FAQ. Use {PL} and {PI} to insert your insurance amounts.
   ========================================================= */
export const FAQ = [
  { q: "Are you insured?", a: "Yes. I carry {PL} public liability and {PI} professional indemnity insurance, and I'm happy to send certificates before any job." },
  { q: "Is it legal to fly near my property?", a: "In most places, yes. I hold a CAA Flyer ID and Operator ID and check the airspace before every job. Areas near airports, prisons or large events need extra permission, and I'll tell you straight away if that applies." },
  { q: "What if the weather's bad on the day?", a: "Drones can't fly safely in rain or strong wind. If the forecast is poor, we move your flight to the next good day at no extra cost." },
  { q: "Will you film my neighbours?", a: "I plan every flight to keep the focus on your property and avoid filming people who aren't part of the job. Any neighbours who come into frame are blurred or cut." },
  { q: "Can I use the footage in adverts and on social media?", a: "Yes. Everything I deliver is yours to use for your listing, business or event." },
  { q: "Do you fly indoors?", a: "Yes, with the Avata 2. Its guarded propellers are built for indoor fly-throughs of homes, shops, gyms and venues." },
  { q: "How do I pay?", a: "A small deposit secures your date, and the rest is due when your photos and video are delivered. Bank transfer or card." },
];

export const fillInsurance = (text) =>
  text.replace("{PL}", SITE.insurance.publicLiability).replace("{PI}", SITE.insurance.professionalIndemnity);

export const liveSocials = () => SITE.socials.filter((s) => s.url);

export const whatsappLink = () =>
  SITE.whatsapp
    ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Happy Drones, I'd like a quote for some drone filming.")}`
    : "";
