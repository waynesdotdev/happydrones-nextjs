components/  -  THE BUILDING BLOCKS
===================================

Pages are made by stacking these. Most of them read their words from
lib/site.js, so you rarely need to open these files.

"use client" at the top means it runs in the browser (it reacts to
scrolling, tapping or typing). Everything else is built once into HTML.

SHARED ON EVERY PAGE
  Header.jsx         top bar + phone menu. Menu links: the NAV list at the top.
  Footer.jsx         footer columns (reads lib/site.js)
  Dock.jsx           Call / WhatsApp / Quote bar on phones
  JsonLd.jsx         Google structured data helper (don't edit)
  SocialIcon.jsx     the outline icons for each platform

HOMEPAGE
  Hero.jsx           headline, buttons and the camera display
                     (the flyover drawing itself is lib/flyover.js)
  Promises.jsx       navy strip: weather, insurance, delivery
  AudienceTabs.jsx   "What are you filming?"  -> AUDIENCES in lib/site.js
  Fleet.jsx          the two drones (words are in this file)
  FpvRoute.jsx       scroll-driven floor plan. Step wording: STEPS at the top.
  QuoteBuilder.jsx   quote builder + ticket   -> PRICING in lib/site.js
  ContactSection.jsx enquiry form. If you change form fields, ALSO change
                     public/__forms.html or Netlify won't save them.
  QuoteContext.jsx   lets tabs, quote and form share the choice (don't edit)
  HomeSections.jsx   showreel, how it works, reviews, FAQ
  Follow.jsx         "Follow the flights" cards (homepage, journal, posts)

SERVICES PAGE
  ServicesCam.jsx    sticky camera view with the altitude readout
  ServiceArt.jsx     the six illustrations (home, business, event,
                     roof, fpv, construction)

FLIGHT LOG
  JournalBrowser.jsx filter buttons + search
  PostCard.jsx       one post in a grid
  PostCover.jsx      automatic map-style cover when a post has no photo
  VideoEmbed.jsx     YouTube player that loads only when tapped
  ShareButtons.jsx   WhatsApp / Facebook / X / copy link

SAFE: changing words in Fleet.jsx, FpvRoute.jsx STEPS, Header.jsx NAV.
CAREFUL: class names (className="...") are tied to app/globals.css.
