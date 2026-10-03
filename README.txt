HAPPY DRONES WEBSITE (Next.js)
==============================

Every folder has its own README.txt explaining what's inside and what's
safe to change. Start here, then read the one for the folder you're in.


QUICK START
-----------
1. Install Node.js 20.9 or newer (nodejs.org, pick "LTS").
2. Open this folder in VS Code, then open the terminal (Ctrl + `).
3. Run once:            npm install
4. Run while editing:   npm run dev
   Open http://localhost:3000. Save any file and the page updates.
5. Check it builds:     npm run build
   This creates the "out" folder, the finished website.

Stop the dev server with Ctrl + C.


WHERE THINGS LIVE
-----------------
lib/site.js        <- 90% of changes: contact details, insurance, socials,
                      prices, services text, FAQ, tabs, "how it works"
content/posts/     <- Flight log posts (one Markdown file per post)
public/            <- Images and files served as they are (logo, photos)
app/               <- The pages and the site-wide styles (globals.css)
components/        <- The building blocks each page is made from
out/               <- Created by "npm run build". Never edit; it's rebuilt each time.
node_modules/      <- Created by "npm install". Never edit or upload.


THE SAFE WAY TO MAKE ANY CHANGE
-------------------------------
1. Run "npm run dev" and make your change.
2. Check the page in the browser at phone and desktop widths.
3. Run "npm run build". If it finishes with no red errors, it's safe.
4. Publish:
     git add .
     git commit -m "Describe what you changed"
     git push
   Netlify rebuilds and publishes automatically.

If something breaks and you can't see why, undo your last change with
Ctrl + Z in the file, or in the terminal run:  git checkout -- path/to/file


NETLIFY SETUP (once)
--------------------
netlify.toml already tells Netlify to run "npm run build" and publish "out".
- In Netlify: Project configuration > Build & deploy: the publish directory
  should say "out". If it says ".next", change it to "out".
- Forms: Netlify > Forms > Enable form detection. Submissions from the
  contact form then appear there. Turn on email alerts in
  Project configuration > Notifications.
- Change SITE.url in lib/site.js to your real domain. Google, the sitemap
  and social sharing all use it.


SEO: WHAT'S ALREADY DONE FOR YOU
--------------------------------
- Every page and every post is real HTML, so Google reads it all.
- Each post gets its own title, description, share image and web address.
- /sitemap.xml and /robots.txt are built automatically.
- Google "structured data" for your business, services, FAQ and posts.
After launch, add your site to Google Search Console and submit
https://www.yourdomain.co.uk/sitemap.xml
