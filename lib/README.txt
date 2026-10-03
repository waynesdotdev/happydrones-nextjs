lib/  -  SETTINGS AND HELPERS
=============================

site.js   <- EDIT THIS ONE. Everything about the business:
  SITE           name, web address, contact details, WhatsApp, area,
                 insurance (£10m / £50k), credentials, socials,
                 homepage showreel, reviews
  PRICING        quote builder services, sizes, extras and prices.
                 Every "From £..." on the site comes from here.
  AUDIENCES      homepage "What are you filming?" tabs
  SERVICE_PAGES  everything on the services page
  HOW_STEPS      homepage "From message to footage"
  FAQ            homepage questions. {PL} and {PI} insert your
                 insurance amounts automatically.

  Rules for editing site.js safely:
  - Keep the quote marks around text: "like this"
  - Keep the comma at the end of each line/entry
  - Lists use [ ]  and entries use { }. Keep them in pairs.
  - If "npm run dev" shows a red error after an edit, it will name the
    line. Usually it's a missing comma or quote mark.

  Reviews appear automatically once you add one:
    reviews: [
      { text: "Brilliant photos, sold in a week.", name: "Sarah", detail: "Sold her home in Yarm" },
    ],

DON'T EDIT (they work on their own)
  posts.js     reads content/posts/ and builds the post pages
  flyover.js   draws the homepage aerial town animation
  youtube.js   turns YouTube links into video IDs
