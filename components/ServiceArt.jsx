/* =========================================================
 Illustrations used on the homepage tabs and the services page.
 Each one is a simple drawing in brand colours (320 x 240).
 Use: <ServiceArt name="home" />
 Names: home, business, event, roof, fpv, construction
 ========================================================= */

const ARTS = {
  home: (
    <svg viewBox="0 0 320 240" aria-hidden="true" focusable="false">
                    <rect width="320" height="240" fill="#0B3E6B"/>
                    <path d="M0 180h320v26H0z" fill="#002A54"/><path d="M0 193h320" stroke="#3D6E9E" strokeWidth="2" strokeDasharray="12 10"/>
                    <rect x="90" y="40" width="140" height="110" fill="#165089"/>
                    <rect x="112" y="64" width="96" height="58" fill="#4D7FB0"/><path d="M112 93h96" stroke="#2F6293" strokeWidth="3"/><rect x="112" y="64" width="96" height="29" fill="#5A8CBD"/>
                    <circle cx="60" cy="70" r="22" fill="#0A3560"/><circle cx="54" cy="64" r="9" fill="#165089"/>
                    <circle cx="262" cy="110" r="26" fill="#0A3560"/><circle cx="255" cy="102" r="10" fill="#165089"/>
                    <g fill="none" stroke="#FF6B35" strokeWidth="4"><path d="M98 58v-14h14M222 58v-14h-14M98 128v14h14M222 128v14h-14"/></g>
                  </svg>
  ),
  business: (
    <svg viewBox="0 0 320 240" aria-hidden="true" focusable="false">
                    <rect width="320" height="240" fill="#0B3E6B"/>
                    <rect x="40" y="30" width="240" height="120" fill="#4D7FB0"/><rect x="40" y="30" width="240" height="40" fill="#5A8CBD"/>
                    <g fill="#002A54"><rect x="40" y="160" width="240" height="60"/></g>
                    <g fill="#C9D8E8"><rect x="60" y="172" width="22" height="12"/><rect x="96" y="172" width="22" height="12"/><rect x="132" y="196" width="22" height="12"/><rect x="200" y="172" width="22" height="12"/></g>
                    <rect x="210" y="20" width="58" height="104" rx="9" fill="none" stroke="#FF6B35" strokeWidth="4"/>
                    <circle cx="239" cy="112" r="4" fill="#FF6B35"/>
                  </svg>
  ),
  event: (
    <svg viewBox="0 0 320 240" aria-hidden="true" focusable="false">
                    <rect width="320" height="240" fill="#0B3E6B"/>
                    <rect x="70" y="40" width="180" height="70" rx="6" fill="#5A8CBD"/><path d="M70 75h180" stroke="#4D7FB0" strokeWidth="3"/>
                    <g fill="#C9D8E8">
                      <circle cx="90" cy="150" r="6"/><circle cx="110" cy="160" r="6"/><circle cx="130" cy="148" r="6"/><circle cx="150" cy="162" r="6"/><circle cx="170" cy="150" r="6"/><circle cx="190" cy="160" r="6"/><circle cx="210" cy="148" r="6"/><circle cx="230" cy="158" r="6"/>
                      <circle cx="100" cy="180" r="6"/><circle cx="120" cy="190" r="6"/><circle cx="140" cy="178" r="6"/><circle cx="160" cy="190" r="6"/><circle cx="180" cy="180" r="6"/><circle cx="200" cy="190" r="6"/><circle cx="220" cy="180" r="6"/>
                    </g>
                    <circle cx="160" cy="170" r="7" fill="#FF6B35"/><circle cx="174" cy="170" r="7" fill="#FF6B35"/>
                  </svg>
  ),
  roof: (
    <svg viewBox="0 0 320 240" aria-hidden="true" focusable="false">
                    <rect width="320" height="240" fill="#0B3E6B"/>
                    <path d="M40 60h240v120H40z" fill="#4D7FB0"/><path d="M40 60h240v60H40z" fill="#5A8CBD"/><path d="M40 120h240" stroke="#2F6293" strokeWidth="4"/>
                    <g stroke="#3F72A3" strokeWidth="2"><path d="M40 80h240M40 100h240M40 140h240M40 160h240"/></g>
                    <rect x="200" y="36" width="34" height="34" fill="#2F6293"/>
                    <circle cx="132" cy="92" r="22" fill="none" stroke="#FF6B35" strokeWidth="4"/>
                    <path d="M126 86l12 12M138 86l-12 12" stroke="#FF6B35" strokeWidth="3"/>
                  </svg>
  ),
  fpv: (
    <svg viewBox="0 0 320 240" aria-hidden="true" focusable="false">
      <rect width="320" height="240" fill="#0B3E6B"/>
      <rect x="40" y="40" width="240" height="160" fill="#002A54" stroke="#5A8CBD" strokeWidth="5"/>
      <path d="M40 120h110M150 40v160M150 130h130" stroke="#5A8CBD" strokeWidth="4" fill="none"/>
      <path d="M85 200h30M150 70v30M190 130h30M70 120h30" stroke="#002A54" strokeWidth="7"/>
      <path d="M100 236V170c0-20 20-25 40-25h40c25 0 30-15 25-30l-20-20c-10-10-30-15-50-20L100 60V10" fill="none" stroke="#FF6B35" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="100" cy="60" r="9" fill="#FF6B35" stroke="#fff" strokeWidth="3"/>
    </svg>
  ),
  construction: (
    <svg viewBox="0 0 320 240" aria-hidden="true" focusable="false">
      <rect width="320" height="240" fill="#0B3E6B"/>
      <rect x="30" y="30" width="260" height="180" fill="#0F477A" stroke="#3D6E9E" strokeWidth="3" strokeDasharray="10 8"/>
      <rect x="60" y="60" width="120" height="90" fill="#4D7FB0"/>
      <g stroke="#2F6293" strokeWidth="3"><path d="M60 90h120M60 120h120M100 60v90M140 60v90"/></g>
      <rect x="200" y="140" width="60" height="40" fill="#1B5486"/>
      <g fill="#C9D8E8"><rect x="208" y="70" width="14" height="24"/><rect x="232" y="70" width="14" height="24"/></g>
      <circle cx="230" cy="110" r="10" fill="#FF6B35"/>
      <path d="M230 110L90 40" stroke="#FF6B35" strokeWidth="7" strokeLinecap="round"/>
      <path d="M230 110l40 18" stroke="#FF6B35" strokeWidth="7" strokeLinecap="round"/>
      <rect x="84" y="40" width="4" height="40" fill="#C9D8E8"/>
    </svg>
  ),
};

export default function ServiceArt({ name }) {
  return ARTS[name] || null;
}
