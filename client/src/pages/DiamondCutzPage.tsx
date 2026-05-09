/* ================================================================
   Diamond Cutz — Lawn & Landscaping
   Design System: Cutz palette
     Green 900 #0E3A1C | Green 700 #185E2C | Green 500 #2E8B10
     Green 300 #7FB342 | Earth 700 #6B4A28 | Earth 500 #A87A48
   Patterns: field-stripes (hero), grass-mesh (sections), earth-bands (CTA)
   Fonts: Anton (display), Oswald (labels/subheads), Manrope (body)
   ================================================================ */

import { Link } from "wouter";
import {
  Phone, Scissors, Leaf, Sprout, Layers,
  Droplets, Flower2, Shovel, Wrench, CheckCircle2, ArrowRight
} from "lucide-react";

const DIAMOND_CUTZ_LOGO = "/manus-storage/diamond-cutz-logo_7523a9b6.png";

const services = [
  {
    icon: Scissors,
    title: "Weekly Mowing",
    desc: "Edged, blown, bagged or mulched. Consistent cuts every week so your lawn always looks sharp.",
    includes: ["Mow & edge", "Blow clippings", "Bag or mulch", "Trim borders"],
  },
  {
    icon: Sprout,
    title: "Mulch & Beds",
    desc: "Hardwood mulch, dyed black or brown. Bed edging and fresh mulch installation per yard.",
    includes: ["Bed edging", "Weed removal", "Mulch install", "Clean borders"],
  },
  {
    icon: Flower2,
    title: "Hedge & Trim",
    desc: "Quarterly shaping for shrubs and ornamentals. Keeps your landscaping looking intentional.",
    includes: ["Shrub shaping", "Ornamental trim", "Debris removal", "Clean finish"],
  },
  {
    icon: Leaf,
    title: "Leaf Cleanup",
    desc: "Fall and spring full-property clears. We haul everything away and leave it spotless.",
    includes: ["Full property clear", "Haul away", "Bed cleanup", "Gutter clear"],
  },
  {
    icon: Wrench,
    title: "Seasonal Cleanup",
    desc: "Pre-season and post-season property prep. Fertilization, aeration, and overseed packages.",
    includes: ["Fertilization", "Aeration", "Overseed", "Seasonal prep"],
  },
  {
    icon: Layers,
    title: "Landscape Design",
    desc: "Full landscape design and installation. From concept to curb appeal — we build it right.",
    includes: ["Design consult", "Plant selection", "Installation", "Irrigation check"],
  },
  {
    icon: Droplets,
    title: "Irrigation Services",
    desc: "Install, repair, and adjust irrigation systems for efficient, even coverage without waste.",
    includes: ["System install", "Head adjustment", "Timer programming", "Leak detection"],
  },
  {
    icon: Shovel,
    title: "Sod Installation",
    desc: "Fresh sod laid and watered in. We prep the ground, lay the sod, and walk you through care.",
    includes: ["Ground prep", "Sod layout", "Initial water", "Care instructions"],
  },
];

export default function DiamondCutzPage() {
  return (
    <div style={{ fontFamily: "'Manrope', sans-serif", backgroundColor: "#F5F3EE" }}>

      {/* ── HERO: field-stripes pattern ── */}
      <section style={{
        background: "repeating-linear-gradient(160deg, #0E3A1C 0px, #0E3A1C 40px, #185E2C 40px, #185E2C 80px)",
        paddingTop: 80,
        paddingBottom: 64,
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Subtle vignette overlay */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.35) 100%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, alignItems: "center" }}>
            <div>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#7FB342", marginBottom: 14 }}>
                Lawn · Landscaping · Nassau County
              </p>
              <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(52px, 8vw, 88px)", lineHeight: 0.92, color: "#fff", letterSpacing: "-0.01em", margin: "0 0 20px" }}>
                SHARPER<br />
                <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.72em", color: "#7FB342" }}>cuts,</span><br />
                BIGGER YARDS.
              </h1>
              <p style={{ color: "rgba(255,255,255,0.80)", fontSize: 15, lineHeight: 1.75, maxWidth: 460, margin: "0 0 28px" }}>
                Weekly mows, full-service landscaping, and seasonal lawn care plans across Nassau County. Mike and his crew deliver diamond-standard results every visit.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="tel:+18563713971" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#2E8B10", color: "#fff",
                  padding: "12px 24px", borderRadius: 3,
                  fontFamily: "'Oswald', sans-serif", fontWeight: 600,
                  fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase",
                  textDecoration: "none", transition: "background 0.2s",
                }}>
                  <Phone size={15} /> Book Mowing
                </a>
                <a href="tel:+18563713971" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "transparent", color: "#7FB342",
                  padding: "12px 24px", borderRadius: 3,
                  fontFamily: "'Oswald', sans-serif", fontWeight: 600,
                  fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase",
                  textDecoration: "none", border: "1.5px solid #7FB342",
                }}>
                  Get an Estimate →
                </a>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
                {["Licensed", "Insured", "Nassau County"].map(tag => (
                  <span key={tag} style={{
                    background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)",
                    padding: "4px 12px", borderRadius: 20,
                    fontFamily: "'Oswald', sans-serif", fontSize: 11,
                    fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase",
                  }}>{tag}</span>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={DIAMOND_CUTZ_LOGO} alt="Diamond Cutz Lawn and Landscaping"
                style={{ width: "min(300px, 100%)", height: "auto", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── GREEN RIBBON DIVIDER ── */}
      <div style={{ height: 5, background: "linear-gradient(90deg, #0E3A1C, #2E8B10, #7FB342, #2E8B10, #0E3A1C)" }} />

      {/* ── SERVICES GRID: chalk/cream background ── */}
      <section style={{
        background: "#F5F3EE",
        backgroundImage: "linear-gradient(rgba(14,58,28,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(14,58,28,0.04) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        padding: "80px 0",
      }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#2E8B10", marginBottom: 12 }}>
              Full Service Menu · Crew Outdoors
            </p>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 60px)", color: "#081838", margin: 0, lineHeight: 1 }}>
              EVERYTHING WE DO
            </h2>
            <p style={{ color: "#5A6070", fontSize: 15, maxWidth: 500, margin: "16px auto 0", lineHeight: 1.7 }}>
              One number, one crew. Bundle lawn care with cleaning and save 10% off the smaller invoice.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 22 }}>
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} style={{
                  background: "#fff",
                  border: "1px solid rgba(14,58,28,0.1)",
                  borderRadius: 4,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}>
                  <div style={{ width: 44, height: 44, borderRadius: 6, background: "#F0F7EC", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                    <Icon size={22} style={{ color: "#185E2C" }} />
                  </div>
                  <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 17, letterSpacing: "0.06em", textTransform: "uppercase", color: "#0E3A1C", margin: "0 0 8px" }}>
                    {service.title}
                  </h3>
                  <p style={{ color: "#5A6070", fontSize: 13.5, lineHeight: 1.65, margin: "0 0 14px", flex: 1 }}>
                    {service.desc}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px", display: "flex", flexDirection: "column", gap: 5 }}>
                    {service.includes.map(item => (
                      <li key={item} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12.5, color: "#3A4A3A" }}>
                        <CheckCircle2 size={13} style={{ color: "#2E8B10", flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="tel:+18563713971" style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    background: "#F0F7EC", color: "#185E2C",
                    padding: "9px 14px", borderRadius: 3,
                    fontFamily: "'Oswald', sans-serif", fontWeight: 600,
                    fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
                    textDecoration: "none",
                  }}>
                    <span>Call for Pricing</span>
                    <Phone size={13} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── EARTH BANDS CTA ── */}
      <section style={{
        background: "repeating-linear-gradient(135deg, #6B4A28 0px, #6B4A28 30px, #5A3D20 30px, #5A3D20 60px)",
        padding: "64px 0",
      }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#A87A48", marginBottom: 14 }}>
            Ready to Get Started?
          </p>
          <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 60px)", color: "#fff", margin: "0 0 16px", lineHeight: 1 }}>
            CALL MIKE TODAY
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, maxWidth: 460, margin: "0 auto 28px", lineHeight: 1.7 }}>
            Free estimates, no pressure. We serve the Tributary community and all of Nassau County.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+18563713971" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#2E8B10", color: "#fff",
              padding: "13px 28px", borderRadius: 3,
              fontFamily: "'Oswald', sans-serif", fontWeight: 600,
              fontSize: 14, letterSpacing: "0.14em", textTransform: "uppercase",
              textDecoration: "none",
            }}>
              <Phone size={15} /> 856-371-3971
            </a>
            <a href="mailto:diamondhomeservicesofflorida@gmail.com" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "transparent", color: "#A87A48",
              padding: "13px 28px", borderRadius: 3,
              fontFamily: "'Oswald', sans-serif", fontWeight: 600,
              fontSize: 14, letterSpacing: "0.14em", textTransform: "uppercase",
              textDecoration: "none", border: "1.5px solid #A87A48",
            }}>
              Email Us <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
