/* HOMEPAGE — the sales page. Each section is its own component in /components. */
import Hero from "@/components/Hero";
import Promises from "@/components/Promises";
import AudienceTabs from "@/components/AudienceTabs";
import Fleet from "@/components/Fleet";
import FpvRoute from "@/components/FpvRoute";
import QuoteBuilder from "@/components/QuoteBuilder";
import ContactSection from "@/components/ContactSection";
import Follow from "@/components/Follow";
import PostCard from "@/components/PostCard";
import JsonLd from "@/components/JsonLd";
import { QuoteProvider } from "@/components/QuoteContext";
import { Showreel, HowItWorks, Reviews, Faq, faqSchema } from "@/components/HomeSections";
import { getPostSummaries } from "@/lib/posts";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const latest = getPostSummaries().slice(0, 3);

  return (
    <QuoteProvider>
      <JsonLd data={faqSchema()} />
      <Hero />
      <Promises />
      <AudienceTabs />
      <Fleet />
      <FpvRoute />
      <QuoteBuilder />
      <Showreel />
      <HowItWorks />
      <Reviews />

      {latest.length > 0 && (
        <section className="latest" aria-labelledby="latest-title">
          <div className="wrap">
            <div className="latest-head">
              <h2 id="latest-title" className="section-title">Fresh from the flight log</h2>
              <Link className="text-link" href="/journal/">See every post</Link>
            </div>
            <div className="cards">{latest.map((p) => <PostCard key={p.slug} post={p} />)}</div>
          </div>
        </section>
      )}

      <Follow />
      <Faq />
      <ContactSection />
    </QuoteProvider>
  );
}
