/* ================================================================
   Footer — Diamond Home Services LLC
   Design System: Parent palette — Navy #081838 + Gold #C8A24A
   Fonts: Anton (display), Oswald (labels), Manrope (body)
   Email: diamondhomeservicesofflorida@gmail.com
   ================================================================ */

import { Phone, Mail, MapPin, Clock, Gem, Star } from "lucide-react";
import { Link } from "wouter";

const DIAMOND_CUTZ_LOGO = "/manus-storage/diamond-cutz-logo_7523a9b6.png";
const DIAMOND_GIRL_LOGO = "/manus-storage/diamond-girl-logo-clean_4f2c96f8.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: "#081838",
      backgroundImage: "linear-gradient(rgba(200,162,74,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(200,162,74,0.06) 1px, transparent 1px)",
      backgroundSize: "48px 48px",
      fontFamily: "'Manrope', sans-serif",
    }}>
      {/* Gold ribbon top */}
      <div style={{ height: 4, background: "linear-gradient(90deg, #081838, #C8A24A, #EBD08A, #C8A24A, #081838)" }} />

      <div className="container" style={{ paddingTop: 56, paddingBottom: 40 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40 }}>

          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <Gem size={18} style={{ color: "#C8A24A" }} />
              <div>
                <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 14, color: "#fff", margin: 0, letterSpacing: "0.04em" }}>DIAMOND HOME SERVICES</p>
                <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 9, color: "#C8A24A", margin: 0, letterSpacing: "0.2em", textTransform: "uppercase" }}>Nassau County · Licensed & Insured</p>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.7, margin: "0 0 20px", maxWidth: 220 }}>
              A family-owned operation running two specialist crews across Nassau County, FL — rooted in the Tributary community.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a href="tel:+18563713971" style={{ display: "flex", alignItems: "center", gap: 8, color: "#EBD08A", fontSize: 13, textDecoration: "none" }}>
                <Phone size={13} style={{ color: "#C8A24A", flexShrink: 0 }} /> 856-371-3971 (Lawn)
              </a>
              <a href="tel:+18569810930" style={{ display: "flex", alignItems: "center", gap: 8, color: "#EBD08A", fontSize: 13, textDecoration: "none" }}>
                <Phone size={13} style={{ color: "#C21B6B", flexShrink: 0 }} /> 856-981-0930 (Cleaning)
              </a>
              <a href="mailto:diamondhomeservicesofflorida@gmail.com" style={{ display: "flex", alignItems: "flex-start", gap: 8, color: "#EBD08A", fontSize: 12, textDecoration: "none", wordBreak: "break-all" }}>
                <Mail size={13} style={{ color: "#C8A24A", flexShrink: 0, marginTop: 2 }} /> diamondhomeservicesofflorida@gmail.com
              </a>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 8, color: "rgba(255,255,255,0.5)", fontSize: 12 }}>
                <MapPin size={13} style={{ color: "#C8A24A", flexShrink: 0, marginTop: 2 }} /> Nassau County, FL · Yulee 32097
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.5)", fontSize: 12 }}>
                <Clock size={13} style={{ color: "#C8A24A", flexShrink: 0 }} /> Mon–Sat 7AM–6PM
              </div>
            </div>
          </div>

          {/* Diamond Cutz column */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <img src={DIAMOND_CUTZ_LOGO} alt="Diamond Cutz" style={{ height: 40, width: "auto", objectFit: "contain" }} />
            </div>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2E8B10", marginBottom: 12 }}>
              Lawn & Landscaping
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {["Lawn Mowing & Edging", "Landscaping Design", "Mulch & Beds", "Hedge & Trim", "Sod Installation", "Seasonal Cleanup"].map(item => (
                <Link key={item} href="/diamond-cutz" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none" }}>
                  {item}
                </Link>
              ))}
            </div>
            <a href="tel:+18563713971" style={{
              display: "inline-flex", alignItems: "center", gap: 6, marginTop: 16,
              background: "#0E3A1C", color: "#fff", padding: "8px 14px", borderRadius: 3,
              fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 11,
              letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none",
            }}>
              <Phone size={11} /> Call Mike
            </a>
          </div>

          {/* A Diamond Girl column */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <img src={DIAMOND_GIRL_LOGO} alt="A Diamond Girl" style={{ height: 40, width: "auto", objectFit: "contain" }} />
            </div>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C21B6B", marginBottom: 12 }}>
              Home Cleaning Service
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {["Diamond Deep Clean", "Recurring Shine", "Move-In / Move-Out", "Airbnb Turnover", "Post-Construction", "Special Occasion"].map(item => (
                <Link key={item} href="/diamond-girl" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none" }}>
                  {item}
                </Link>
              ))}
            </div>
            <a href="tel:+18569810930" style={{
              display: "inline-flex", alignItems: "center", gap: 6, marginTop: 16,
              background: "#5C1432", color: "#fff", padding: "8px 14px", borderRadius: 3,
              fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 11,
              letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none",
            }}>
              <Phone size={11} /> Call Lydine
            </a>
          </div>

          {/* Company column */}
          <div>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C8A24A", marginBottom: 16 }}>
              Company
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {[
                { label: "Home", href: "/" },
                { label: "Diamond Cutz", href: "/diamond-cutz" },
                { label: "A Diamond Girl", href: "/diamond-girl" },
                { label: "About Us", href: "/about" },
                { label: "Gallery", href: "/gallery" },
                { label: "Testimonials", href: "/testimonials" },
              ].map(link => (
                <Link key={link.href} href={link.href} style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none" }}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div style={{ marginTop: 20, padding: "14px 16px", background: "rgba(200,162,74,0.1)", borderRadius: 3, border: "1px solid rgba(200,162,74,0.2)" }}>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#C8A24A", margin: "0 0 6px" }}>
                Business Inquiries
              </p>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, margin: 0, lineHeight: 1.6 }}>
                We work with businesses too. Call or text for a custom quote.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: 40, paddingTop: 20, borderTop: "1px solid rgba(200,162,74,0.15)", display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, margin: 0 }}>
            © {year} Diamond Home Services LLC. All rights reserved. · Yulee, FL 32097
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={12} style={{ color: "#C8A24A", fill: "#C8A24A" }} />
            ))}
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, marginLeft: 6 }}>Licensed & Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
