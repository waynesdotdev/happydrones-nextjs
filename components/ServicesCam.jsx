"use client";
/* Services page: the sticky camera view. As you scroll, it switches picture
   and the altitude readout flies to that service's typical height.
   It also highlights the matching button in the service menu bar. */
import { useEffect, useRef, useState } from "react";
import ServiceArt from "./ServiceArt";
import { SERVICE_PAGES } from "@/lib/site";

export default function ServicesCam() {
  const [active, setActive] = useState(SERVICE_PAGES[0]);
  const altRef = useRef(null);
  const current = useRef(SERVICE_PAGES[0].alt);

  // Which chapter is on screen?
  useEffect(() => {
    const chapters = SERVICE_PAGES.map((s) => document.getElementById(s.id)).filter(Boolean);
    const pick = () => {
      const line = innerHeight * 0.4;
      let best = chapters[0];
      chapters.forEach((ch) => { if (ch.getBoundingClientRect().top < line) best = ch; });
      const svc = SERVICE_PAGES.find((s) => s.id === best?.id);
      if (svc) setActive((prev) => (prev.id === svc.id ? prev : svc));
    };
    pick();
    addEventListener("scroll", pick, { passive: true });
    return () => removeEventListener("scroll", pick);
  }, []);

  // Animate the altitude number and update the menu bar
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf;
    const tick = () => {
      current.current += (active.alt - current.current) * 0.15;
      if (Math.abs(active.alt - current.current) < 0.5) current.current = active.alt;
      if (altRef.current) altRef.current.textContent = Math.round(current.current);
      if (current.current !== active.alt) raf = requestAnimationFrame(tick);
    };
    if (reduce) { current.current = active.alt; if (altRef.current) altRef.current.textContent = active.alt; }
    else tick();

    document.querySelectorAll(".chapter-nav a").forEach((a) => {
      const on = a.getAttribute("href") === "#" + active.id;
      a.classList.toggle("is-active", on);
      if (on) a.scrollIntoView({ block: "nearest", inline: "center", behavior: reduce ? "auto" : "smooth" });
    });
    return () => cancelAnimationFrame(raf);
  }, [active]);

  return (
    <div className="cam" aria-hidden="true">
      <div className="cam-screen">
        {SERVICE_PAGES.map((s) => (
          <div key={s.id} className={`cam-art${s.art === active.art ? " is-on" : ""}`}>
            <ServiceArt name={s.art} />
          </div>
        ))}
        <span className="corner tl"></span><span className="corner tr"></span>
        <span className="corner bl"></span><span className="corner br"></span>
        <span className="cam-rec"><i></i> REC</span>
        <span className="cam-label">{active.label}</span>
        <span className="cam-alt"><small>ALT</small> <b ref={altRef}>{SERVICE_PAGES[0].alt}</b> <small>m</small></span>
      </div>
      <p className="cam-note">Typical flying height for this job</p>
    </div>
  );
}
