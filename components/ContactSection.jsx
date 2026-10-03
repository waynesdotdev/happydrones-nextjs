"use client";
/* "Ready to fly?" contact section and enquiry form.
   Uses Netlify Forms: the matching hidden form lives in public/__forms.html.
   If you add or rename a field here, add/rename it there too. */
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SITE, whatsappLink } from "@/lib/site";
import { useQuote } from "./QuoteContext";

export default function ContactSection() {
  const { plan, setPlan } = useQuote();
  const router = useRouter();
  const nameRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | error
  const [minDate, setMinDate] = useState("");

  useEffect(() => setMinDate(new Date().toISOString().split("T")[0]), []);
  useEffect(() => {
    if (plan) setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 600);
  }, [plan]);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      setPlan(null);
      router.push("/thanks/");
    } catch {
      setStatus("error");
    }
  }

  const wa = whatsappLink();

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div className="contact-copy">
          <h2 id="contact-title" className="section-title">Ready to fly?</h2>
          <p>Tell me what you&apos;d like filmed and I&apos;ll reply within a day with a fixed price and available dates.</p>
          <div className="direct">
            {wa && (
              <a className="direct-link" href={wa} target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2z" /></svg>
                <span><b>WhatsApp</b><small>Quickest reply</small></span>
              </a>
            )}
            {SITE.phone && (
              <a className="direct-link" href={`tel:${SITE.phone}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>
                <span><b>Call</b><small>{SITE.phoneDisplay}</small></span>
              </a>
            )}
            {SITE.email && (
              <a className="direct-link" href={`mailto:${SITE.email}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
                <span><b>Email</b><small>{SITE.email}</small></span>
              </a>
            )}
          </div>
        </div>

        <form className="form" name="quote" onSubmit={onSubmit}>
          <input type="hidden" name="form-name" value="quote" />
          <input type="hidden" name="quote-summary" value={plan?.summary || ""} />
          <input type="hidden" name="quote-total" value={plan?.total || ""} />
          <p className="bot"><label>Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>

          {plan && (
            <div className="attached">
              <span>Your flight plan is attached: <b>{plan.summary} ({plan.total})</b></span>
              <button type="button" onClick={() => setPlan(null)}>Remove</button>
            </div>
          )}

          <label className="field"><span>Name</span><input name="name" autoComplete="name" required ref={nameRef} /></label>
          <div className="field-pair">
            <label className="field"><span>Email</span><input type="email" name="email" autoComplete="email" required /></label>
            <label className="field"><span>Phone</span><input type="tel" name="phone" autoComplete="tel" /></label>
          </div>
          <div className="field-pair">
            <label className="field"><span>Postcode</span><input name="postcode" autoComplete="postal-code" /></label>
            <label className="field"><span>Preferred date</span><input type="date" name="date" min={minDate || undefined} /></label>
          </div>
          <label className="field"><span>Anything I should know?</span><textarea name="message" rows={4}></textarea></label>

          {status === "error" && (
            <p className="form-error" role="alert">
              Your enquiry didn&apos;t send. Check your connection and try again, or message me on WhatsApp.
            </p>
          )}
          <button className="btn btn-orange btn-block" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send my enquiry"}
          </button>
          <p className="form-note">I&apos;ll only use your details to reply. <Link href="/privacy/">Privacy policy</Link></p>
        </form>
      </div>
    </section>
  );
}
