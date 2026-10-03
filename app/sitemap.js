/* Builds /sitemap.xml automatically: every page plus every journal post. */
import { getAllPosts } from "@/lib/posts";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap() {
  const pages = ["", "/services/", "/journal/", "/privacy/"].map((p) => ({
    url: `${SITE.url}${p || "/"}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
  const posts = getAllPosts().map((p) => ({
    url: `${SITE.url}/journal/${p.slug}/`,
    lastModified: p.date,
    changeFrequency: "yearly",
    priority: 0.6,
  }));
  return [...pages, ...posts];
}
