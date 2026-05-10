/* ================================================================
   A Diamond Girl — Home Cleaning Service
   Design System: Girl palette
     Wine 800 #5C1432 | Wine 700 #7A1B42 | Magenta 500 #C21B6B
     Pink 400 #EC4B99 | Blush 100 #FCE4EC | Aqua 300 #7FD7E8
   Patterns: sparkle-dots (hero), bubble-float (sections)
   Fonts: Anton (display), Oswald (labels), Manrope (body)
   Owner: Lydine | Phone: 856-981-0930
   Email: diamondhomeservicesofflorida@gmail.com
   ================================================================ */

import { Sparkles, Star, Home, Wind, Layers, Brush, CheckCircle2, Phone, Mail, ArrowRight, Gem, Shield, Zap } from "lucide-react";

const DIAMOND_GIRL_LOGO = "/manus-storage/diamond-girl-logo-clean_4f2c96f8.png";

const services = [
  {
    icon: Sparkles,
    title: "The Diamond Deep Clean",
    tagline: "When good enough isn't good enough.",
    desc: "Our signature service. Top-to-bottom deep cleaning that reaches every surface, every corner, every forgotten spot. We don't just clean — we restore.",
    includes: ["Inside appliances & cabinets", "Baseboards & window sills", "Behind & under furniture", "Full bathroom deep scrub", "Ceiling fans & light fixtures"],
  },
  {
    icon: Home,
    title: "Recurring Diamond Shine",
    tagline: "Keep your home sparkling, always.",
    desc: "Maintain that just-deep-cleaned feeling all year long. Weekly, bi-weekly, or monthly — customized to your home and schedule.",
    includes: ["Full kitchen & bathroom clean", "Vacuuming & mopping", "Dusting all surfaces", "Sanitizing high-touch areas", "Custom checklist"],
  },
  {
    icon: Star,
    title: "Move-In / Move-Out",
    tagline: "Start fresh. Leave spotless.",
    desc: "Moving is stressful enough. Let Lydine handle the clean so you can focus on the move. Deposit-back guaranteed.",
    includes: ["Full property deep clean", "Inside all cabinets & drawers", "All appliances inside & out", "Bathrooms scrubbed & sanitized", "Windows & sills"],
  },
  {
    icon: Wind,
    title: "Airbnb Turnover",
    tagline: "Guest-Ready in 90 Minutes.",
    desc: "Linens restocked, surfaces wiped, photo-ready staging. We make your rental shine between guests — fast.",
    includes: ["Linen change & restock", "Full clean & sanitize", "Photo-ready staging", "Trash removal"],
  },
  {
    icon: Shield,
    title: "Post-Construction Clean",
    tagline: "From Dust to Diamond.",
    desc: "After renovations or new builds, we remove all construction dust, debris, and residue for a move-in ready finish.",
    includes: ["Dust & debris removal", "Surface polish", "Floor cleaning", "Window & fixture wipe"],
  },
  {
    icon: Gem,
    title: "Special Occasion Shine",
    tagline: "Because your guests deserve diamond clean.",
    desc: "Hosting a gathering or holiday party? We'll get your home guest-ready before and clean up after.",
    includes: ["Pre-event deep clean", "Post-event cleanup", "Kitchen & bathroom focus", "Quick turnaround available"],
  },
];

export default function DiamondGirlPage() {
  return (
    <div style={{ fontFamily: "'Manrope', sans-serif", backgroundColor: "#FCE4EC" }}>

      {/* ── HERO: wine-to-magenta gradient with sparkle dots ── */}
      <section style={{
        background: "linear-gradient(135deg, #5C1432 0%, #7A1B42 40%, #C21B6B 100%)",
        paddingTop: 80,
        paddingBottom: 64,
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Sparkle dots */}
        {[
          { top: "10%", left: "7%", size: 7, opacity: 0.6 },
          { top: "28%", right: "5%", size: 11, opacity: 0.45 },
          { top: "58%", left: "14%", size: 5, opacity: 0.55 },
          { top: "78%", right: "18%", size: 9, opacity: 0.4 },
          { top: "42%", left: "44%", size: 4, opacity: 0.5 },
          { top: "18%", right: "28%", size: 13, opacity: 0.28 },
          { top: "88%", left: "58%", size: 6, opacity: 0.55 },
          { top: "52%", right: "7%", size: 5, opacity: 0.65 },
        ].map((dot, i) => (
          <div key={i} style={{
            position: "absolute",
            top: dot.top,
            left: (dot as any).left,
            right: (dot as any).right,
            width: dot.size,
            height: dot.size,
            borderRadius: "50%",
            background: "#FCE4EC",
            opacity: dot.opacity,
            pointerEvents: "none",
          }} />
        ))}

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, alignItems: "center" }}>
            <div>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#EC4B99", marginBottom: 14 }}>
                Home Cleaning · Move-Out · Deep Clean
              </p>
              <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(48px, 7vw, 84px)", lineHeight: 0.92, color: "#fff", letterSpacing: "-0.01em", margin: "0 0 8px" }}>
                EVERY HOME
              </h1>
              <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(32px, 5vw, 58px)", lineHeight: 1.1, color: "#EC4B99", margin: "0 0 8px" }}>
                deserves to
              </p>
              <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(48px, 7vw, 84px)", lineHeight: 0.92, color: "#fff", letterSpacing: "-0.01em", margin: "0 0 22px" }}>
                SPARKLE.
              </h1>
              <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 15, lineHeight: 1.75, maxWidth: 440, margin: "0 0 28px" }}>
                Move-in ready cleans, weekly maintenance, and detailed deep-cleans — done by a small team you'll actually recognize. Serving Nassau County from the Tributary community.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="tel:+18569810930" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#C21B6B", color: "#fff",
                  padding: "12px 24px", borderRadius: 3,
                  fontFamily: "'Oswald', sans-serif", fontWeight: 600,
                  fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase",
                  textDecoration: "none",
                }}>
                  <Phone size={14} /> Book a Clean
                </a>
                <a href="tel:+18569810930" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "transparent", color: "#EC4B99",
                  padding: "12px 24px", borderRadius: 3,
                  fontFamily: "'Oswald', sans-serif", fontWeight: 600,
                  fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase",
                  textDecoration: "none", border: "1.5px solid #EC4B99",
                }}>
                  Get a Quote →
                </a>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
                {["Insured", "Nassau County", "Deep Clean Specialists"].map(tag => (
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
              <div style={{
                width: "min(300px, 100%)",
                height: "min(300px, 100%)",
                borderRadius: "50%",
                background: "rgba(252,228,236,0.12)",
                border: "2px solid rgba(236,75,153,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
              }}>
                <img src={DIAMOND_GIRL_LOGO} alt="A Diamond Girl Home Cleaning Service"
                  style={{ width: "100%", height: "auto", filter: "drop-shadow(0 16px 32px rgba(0,0,0,0.3))" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PINK RIBBON DIVIDER ── */}
      <div style={{ height: 5, background: "linear-gradient(90deg, #5C1432, #C21B6B, #EC4B99, #C21B6B, #5C1432)" }} />

      {/* ── CATCHPHRASES BAND ── */}
      <div style={{ background: "#7A1B42", padding: "14px 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
            {["✦ Diamond Shine, Every Time.", "✦ We Don't Just Clean — We Transform.", "✦ Your Home Deserves to Sparkle.", "✦ From Dusty to Dazzling."].map((phrase, i) => (
              <span key={i} style={{
                fontFamily: "'Oswald', sans-serif", fontWeight: 600,
                fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase",
                color: i % 2 === 0 ? "#EC4B99" : "#FCE4EC",
              }}>{phrase}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES GRID: blush with sparkle dot pattern ── */}
      <section style={{
        background: "#FCE4EC",
        backgroundImage: "radial-gradient(circle, rgba(194,27,107,0.08) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        padding: "80px 0",
      }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C21B6B", marginBottom: 12 }}>
              Full Service Menu · Crew Indoors
            </p>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 60px)", color: "#5C1432", margin: 0, lineHeight: 1 }}>
              THE DIAMOND CLEAN DIFFERENCE
            </h2>
            <p style={{ color: "#7A1B42", fontSize: 15, maxWidth: 520, margin: "16px auto 0", lineHeight: 1.7 }}>
              We specialize in deep, thorough cleaning — not basic tidying. Every visit leaves your home genuinely transformed.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 22 }}>
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} style={{
                  background: "#fff",
                  border: "1px solid rgba(194,27,107,0.15)",
                  borderRadius: 4,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                }}>
                  <div style={{ width: 44, height: 44, borderRadius: 6, background: "#FCE4EC", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                    <Icon size={22} style={{ color: "#C21B6B" }} />
                  </div>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 12, color: "#EC4B99", margin: "0 0 4px" }}>
                    {service.tagline}
                  </p>
                  <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: "0.06em", textTransform: "uppercase", color: "#5C1432", margin: "0 0 8px" }}>
                    {service.title}
                  </h3>
                  <p style={{ color: "#6B3050", fontSize: 13.5, lineHeight: 1.65, margin: "0 0 14px", flex: 1 }}>
                    {service.desc}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px", display: "flex", flexDirection: "column", gap: 5 }}>
                    {service.includes.map(item => (
                      <li key={item} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12.5, color: "#5C1432" }}>
                        <CheckCircle2 size={13} style={{ color: "#C21B6B", flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="tel:+18569810930" style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    background: "#FCE4EC", color: "#C21B6B",
                    padding: "9px 14px", borderRadius: 3,
                    fontFamily: "'Oswald', sans-serif", fontWeight: 600,
                    fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
                    textDecoration: "none",
                  }}>
                    <span>Call Lydine for Pricing</span>
                    <Phone size={13} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── EMPLOYMENT CALLOUT: aqua accent on wine ── */}
      <section style={{
        background: "linear-gradient(135deg, #5C1432 0%, #7A1B42 100%)",
        padding: "60px 0",
        position: "relative",
        overflow: "hidden",
      }}>
        {[
          { top: "18%", left: "4%", size: 9 },
          { top: "72%", right: "7%", size: 13 },
          { top: "38%", right: "24%", size: 6 },
          { top: "60%", left: "30%", size: 8 },
        ].map((dot, i) => (
          <div key={i} style={{
            position: "absolute",
            top: dot.top,
            left: (dot as any).left,
            right: (dot as any).right,
            width: dot.size,
            height: dot.size,
            borderRadius: "50%",
            background: "#7FD7E8",
            opacity: 0.45,
            pointerEvents: "none",
          }} />
        ))}
        <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(127,215,232,0.15)", color: "#7FD7E8",
            padding: "6px 16px", borderRadius: 20,
            fontFamily: "'Oswald', sans-serif", fontSize: 11,
            fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase",
            marginBottom: 20,
          }}>
            <Sparkles size={12} /> Now Hiring
          </div>
          <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(32px, 5vw, 52px)", color: "#fff", margin: "0 0 14px", lineHeight: 1 }}>
            JOIN OUR TEAM
          </h2>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 15, maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.75 }}>
            Interested in working with A Diamond Girl Home Cleaning Service? We're always looking for reliable, detail-oriented cleaners who take pride in their work. Reach out to Lydine directly.
          </p>
          <a href="mailto:diamondhomeservicesofflorida@gmail.com" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#C21B6B", color: "#fff",
            padding: "13px 28px", borderRadius: 3,
            fontFamily: "'Oswald', sans-serif", fontWeight: 600,
            fontSize: 14, letterSpacing: "0.14em", textTransform: "uppercase",
            textDecoration: "none",
          }}>
            <Mail size={15} /> Email Lydine to Apply
          </a>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginTop: 12, fontFamily: "'Manrope', sans-serif" }}>
            diamondhomeservicesofflorida@gmail.com
          </p>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section style={{ background: "#fff", padding: "64px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C21B6B", marginBottom: 14 }}>
            Ready for a Diamond-Clean Home?
          </p>
          <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(32px, 5vw, 52px)", color: "#5C1432", margin: "0 0 16px", lineHeight: 1 }}>
            CALL LYDINE TODAY
          </h2>
          <p style={{ color: "#7A1B42", fontSize: 15, maxWidth: 440, margin: "0 auto 28px", lineHeight: 1.7 }}>
            Free estimates, no pressure. Serving Nassau County from the Tributary community.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+18569810930" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#C21B6B", color: "#fff",
              padding: "13px 28px", borderRadius: 3,
              fontFamily: "'Oswald', sans-serif", fontWeight: 600,
              fontSize: 14, letterSpacing: "0.14em", textTransform: "uppercase",
              textDecoration: "none",
            }}>
              <Phone size={15} /> 856-981-0930
            </a>
            <a href="mailto:diamondhomeservicesofflorida@gmail.com" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "transparent", color: "#C21B6B",
              padding: "13px 28px", borderRadius: 3,
              fontFamily: "'Oswald', sans-serif", fontWeight: 600,
              fontSize: 14, letterSpacing: "0.14em", textTransform: "uppercase",
              textDecoration: "none", border: "1.5px solid #C21B6B",
            }}>
              Email Us <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
