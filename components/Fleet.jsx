/* "Two drones. Two very different shots." */
export default function Fleet() {
  return (
    <section className="fleet" id="fleet" aria-labelledby="fleet-title">
      <div className="wrap fleet-grid">
        <div>
          <h2 id="fleet-title" className="section-title">Two drones. Two very different shots.</h2>
          <p className="section-sub">Most jobs use both: one for the big, calm picture, one for the shot that puts the viewer inside it.</p>
        </div>

        <div className="drone">
          <div className="drone-head">
            <svg viewBox="0 0 64 40" aria-hidden="true"><path d="M22 20H6M42 20h16M22 26L8 34M42 26l14 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><ellipse cx="6" cy="18" rx="7" ry="2" fill="#FF6B35" /><ellipse cx="58" cy="18" rx="7" ry="2" fill="#FF6B35" /><ellipse cx="8" cy="33" rx="7" ry="2" fill="#FF6B35" /><ellipse cx="56" cy="33" rx="7" ry="2" fill="#FF6B35" /><rect x="20" y="13" width="24" height="16" rx="6" fill="currentColor" /></svg>
            <div>
              <h3>DJI Mini 4 Pro</h3>
              <p className="drone-role">The steady one</p>
            </div>
          </div>
          <p>Smooth, wide aerial photos and 4K HDR video. It&apos;s under 250 g, light enough to fly in places heavier drones can&apos;t go.</p>
          <p className="drone-use">Best for: property, landscapes, roofs, sites</p>
        </div>

        <div className="drone">
          <div className="drone-head">
            <svg viewBox="0 0 64 40" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="3"><ellipse cx="14" cy="12" rx="10" ry="5" /><ellipse cx="50" cy="12" rx="10" ry="5" /><ellipse cx="14" cy="30" rx="10" ry="5" /><ellipse cx="50" cy="30" rx="10" ry="5" /></g><rect x="24" y="11" width="16" height="20" rx="6" fill="currentColor" /><circle cx="32" cy="27" r="3" fill="#FF6B35" /></svg>
            <div>
              <h3>DJI Avata 2</h3>
              <p className="drone-role">The daring one</p>
            </div>
          </div>
          <p>First-person flight in one continuous take: through doorways, down hallways and out over the garden. Guarded propellers make it safe to fly indoors.</p>
          <p className="drone-use">Best for: fly-through tours, venues, gyms, shops</p>
        </div>
      </div>
    </section>
  );
}
