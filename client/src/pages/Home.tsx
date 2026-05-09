/* ================================================================
   Home — Diamond Home Services LLC
   Design System: Parent palette — Navy + Gold
   Background patterns: diamond-grid (navy sections), chalk (light sections), gold-ribbon (dividers)
   Fonts: Anton (display), Oswald (labels/nav), Manrope (body)
   ================================================================ */

import { Link } from "wouter";
import { Phone, Mail, MapPin, Star, Scissors, Sparkles, Wrench, ChevronRight, Shield, Award, Users } from "lucide-react";

const HERO_IMAGE = "/manus-storage/DiamondHomeServicesHero_2e0d0f0e.png";
const DIAMOND_CUTZ_LOGO = "/manus-storage/diamond-cutz-logo_7523a9b6.png";
const DIAMOND_GIRL_LOGO = "/manus-storage/diamond-girl-logo-clean_fcc55d40.png";

export default function Home() {
  return (
    <div style={{ fontFamily: "'Manrope', sans-serif", backgroundColor: "#F5F3EE" }}>

      {/* ── HERO: Full-width image, no text overlay ── */}
      <section style={{ paddingTop: 67 }}>
        <div style={{ position: "relative", width: "100%", lineHeight: 0 }}>
          <img
            src={HERO_IMAGE}
            alt="Diamond Home Services LLC — Nassau County, FL"
            style={{ width: "100%", height: "auto", display: "block", maxHeight: 620, objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
      </section>

      {/* ── HERO BAND: Text + CTAs below image ── */}
      <section className="pattern-diamond-grid" style={{ padding: "48px 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 20 }}>
            <div className="section-eyebrow" style={{ color: "#C8A24A" }}>
              Nassau County · Rooted in Tributary · Licensed &amp; Insured
            </div>
            <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 0.93, color: "#fff", letterSpacing: "-0.01em", margin: 0 }}>
              BUILT FOR THE{" "}
              <span style={{ background: "linear-gradient(180deg, #fff 0%, #C8A24A 50%, #8B7228 51%, #C8A24A 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                BIG LEAGUES.
              </span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.80)", fontSize: 18, lineHeight: 1.6, maxWidth: 600, margin: 0 }}>
              Two specialist crews, one trusted name. <strong style={{ color: "#C8A24A" }}>Diamond Cutz</strong> keeps your yard sharp.{" "}
              <strong style={{ color: "#EC4B99" }}>A Diamond Girl</strong> makes your home shine. Call either — or both.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 8 }}>
              <a href="tel:+18563713971" className="btn-parent-primary" style={{ textDecoration: "none" }}>
                Get a Free Quote
              </a>
              <Link href="/diamond-cutz" className="btn-parent-outline" style={{ textDecoration: "none" }}>
                See Our Services →
              </Link>
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", marginTop: 4 }}>
              <span className="tag-insured">Licensed</span>
              <span className="tag-insured">Insured</span>
              <span className="tag-featured">Nassau County</span>
              <span className="tag-insured">Family-Owned</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOLD RIBBON DIVIDER ── */}
      <div style={{ height: 6, background: "linear-gradient(90deg, #8B7228, #C8A24A, #EBD08A, #C8A24A, #8B7228)" }} />

      {/* ── STATS BAR ── */}
      <section style={{ backgroundColor: "#0F2244", padding: "28px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 24, textAlign: "center" }}>
            {[
              { value: "500+", label: "Homes Served" },
              { value: "2", label: "Specialist Crews" },
              { value: "5★", label: "Avg. Rating" },
              { value: "Nassau", label: "County, FL" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 36, color: "#C8A24A", lineHeight: 1 }}>{stat.value}</div>
                <div className="section-eyebrow" style={{ color: "rgba(255,255,255,0.60)", marginTop: 6 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOLD RIBBON DIVIDER ── */}
      <div style={{ height: 6, background: "linear-gradient(90deg, #8B7228, #C8A24A, #EBD08A, #C8A24A, #8B7228)" }} />

      {/* ── TWO CREW CARDS ── */}
      <section className="pattern-chalk" style={{ padding: "80px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-eyebrow" style={{ color: "#C8A24A", marginBottom: 12 }}>Our Two Crews</div>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 60px)", color: "#081838", margin: 0, lineHeight: 1 }}>
              ONE CALL. TWO SPECIALISTS.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
            {/* Diamond Cutz Card */}
            <div style={{ background: "#fff", borderRadius: 8, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", border: "1px solid #E8E4DC" }}>
              <div className="pattern-field-stripes" style={{ padding: "32px 28px 24px" }}>
                <img src={DIAMOND_CUTZ_LOGO} alt="Diamond Cutz" style={{ height: 72, width: "auto", objectFit: "contain", marginBottom: 16 }} />
                <div className="section-eyebrow" style={{ color: "#7FB342", marginBottom: 8 }}>Crew · Outdoors</div>
                <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: 36, color: "#fff", margin: 0, lineHeight: 1 }}>DIAMOND CUTZ</h3>
                <p style={{ color: "rgba(255,255,255,0.80)", fontSize: 14, marginTop: 10, lineHeight: 1.6 }}>
                  Lawn mowing, landscaping, mulch &amp; beds, hedge trimming, leaf cleanup, and seasonal lawn care plans.
                </p>
              </div>
              <div style={{ padding: "20px 28px 28px", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["Mowing", "Landscaping", "Mulch & Beds", "Hedge Trim", "Leaf Cleanup"].map(s => (
                    <span key={s} style={{ background: "#F0F7EC", color: "#185E2C", padding: "3px 10px", borderRadius: 20, fontSize: 12, fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em" }}>{s}</span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
                  <Link href="/diamond-cutz" className="btn-cutz-primary" style={{ textDecoration: "none", flex: 1, textAlign: "center" }}>
                    View Services
                  </Link>
                  <a href="tel:+18563713971" style={{ display: "flex", alignItems: "center", gap: 6, color: "#185E2C", fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: "0.12em", textDecoration: "none", border: "1.5px solid #185E2C", padding: "12px 16px", borderRadius: 4 }}>
                    <Phone className="w-4 h-4" /> Call Mike
                  </a>
                </div>
              </div>
            </div>

            {/* A Diamond Girl Card */}
            <div style={{ background: "#fff", borderRadius: 8, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", border: "1px solid #E8E4DC" }}>
              <div className="pattern-sparkle" style={{ padding: "32px 28px 24px" }}>
                <img src={DIAMOND_GIRL_LOGO} alt="A Diamond Girl" style={{ height: 72, width: "auto", objectFit: "contain", marginBottom: 16 }} />
                <div className="section-eyebrow" style={{ color: "#EC4B99", marginBottom: 8 }}>Crew · Indoors</div>
                <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: 36, color: "#5C1432", margin: 0, lineHeight: 1 }}>A DIAMOND GIRL</h3>
                <p style={{ color: "rgba(92,20,50,0.75)", fontSize: 14, marginTop: 10, lineHeight: 1.6 }}>
                  Deep cleaning, move-out cleans, window cleaning, and Airbnb turnover — done to diamond standards.
                </p>
              </div>
              <div style={{ padding: "20px 28px 28px", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["Deep Clean", "Move-Out", "Windows", "Airbnb", "Polish"].map(s => (
                    <span key={s} style={{ background: "#FCE4EC", color: "#7A1B42", padding: "3px 10px", borderRadius: 20, fontSize: 12, fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em" }}>{s}</span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
                  <Link href="/diamond-girl" className="btn-girl-primary" style={{ textDecoration: "none", flex: 1, textAlign: "center" }}>
                    View Services
                  </Link>
                  <a href="tel:+18569810930" style={{ display: "flex", alignItems: "center", gap: 6, color: "#7A1B42", fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: "0.12em", textDecoration: "none", border: "1.5px solid #7A1B42", padding: "12px 16px", borderRadius: 4 }}>
                    <Phone className="w-4 h-4" /> Call Lydine
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUNDLE PROMO RIBBON ── */}
      <section style={{ backgroundColor: "#C8A24A", padding: "20px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: "0.16em", textTransform: "uppercase", color: "#081838", margin: 0 }}>
            ✦ Bundle a clean with a mow and save 10% off the smaller invoice ✦
          </p>
        </div>
      </section>

      {/* ── BUSINESS CALLOUT ── */}
      <section style={{ backgroundColor: "#0F2244", padding: "64px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, alignItems: "center" }}>
            <div>
              <div className="section-eyebrow" style={{ color: "#C8A24A", marginBottom: 14 }}>Commercial &amp; Business Services</div>
              <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", color: "#fff", margin: "0 0 16px", lineHeight: 1 }}>
                WE ALSO WORK WITH BUSINESSES
              </h2>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, lineHeight: 1.7, margin: "0 0 24px" }}>
                From office parks and retail properties to HOA common areas and commercial landscaping — Diamond Home Services LLC serves businesses across Nassau County. Call or text for a custom quote.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="tel:+18563713971" className="btn-parent-primary" style={{ textDecoration: "none" }}>
                  Call for a Quote
                </a>
                <a href="sms:+18563713971" className="btn-parent-outline" style={{ textDecoration: "none" }}>
                  Text Us
                </a>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { icon: Shield, title: "Licensed & Insured", desc: "Full coverage for commercial properties" },
                { icon: Award, title: "Quality Guaranteed", desc: "We stand behind every job we do" },
                { icon: Users, title: "Reliable Crews", desc: "Same team, consistent results" },
                { icon: Wrench, title: "Flexible Scheduling", desc: "We work around your business hours" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 8, padding: "20px 16px", border: "1px solid rgba(200,162,74,0.15)" }}>
                  <Icon className="w-6 h-6" style={{ color: "#C8A24A", marginBottom: 10 }} />
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", marginBottom: 6 }}>{title}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className="pattern-chalk" style={{ padding: "64px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-eyebrow" style={{ color: "#C8A24A", marginBottom: 12 }}>Where We Work</div>
          <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", color: "#081838", margin: "0 0 16px", lineHeight: 1 }}>
            NASSAU COUNTY, FLORIDA
          </h2>
          <p style={{ color: "#5A6070", fontSize: 16, maxWidth: 560, margin: "0 auto 32px", lineHeight: 1.7 }}>
            Based in the Tributary community in Yulee, FL. We proudly serve our neighbors throughout Nassau County and surrounding areas.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            {["Tributary", "Yulee", "Fernandina Beach", "Callahan", "Hilliard", "Nassau County"].map(area => (
              <span key={area} style={{ background: "#081838", color: "#C8A24A", padding: "8px 18px", borderRadius: 4, fontFamily: "'Oswald', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }}>{area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS TEASER ── */}
      <section style={{ backgroundColor: "#081838", padding: "64px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="section-eyebrow" style={{ color: "#C8A24A", marginBottom: 12 }}>What Our Neighbors Say</div>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", color: "#fff", margin: 0, lineHeight: 1 }}>
              DIAMOND STANDARD RESULTS
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {[
              { name: "Sarah M.", area: "Tributary", service: "Diamond Cutz", text: "Mike transformed our yard completely. The mowing patterns are incredible and he's always on time. Best lawn in the neighborhood!" },
              { name: "James T.", area: "Yulee", service: "A Diamond Girl", text: "Lydine's team did our move-out clean and got our full deposit back. Absolutely spotless. Worth every penny." },
              { name: "Rachel K.", area: "Fernandina Beach", service: "Both Services", text: "We use both crews — lawn every week and cleaning twice a month. The bundle discount is a great deal. Highly recommend!" },
            ].map((t) => (
              <div key={t.name} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 8, padding: "28px 24px", border: "1px solid rgba(200,162,74,0.15)" }}>
                <div style={{ display: "flex", gap: 4, marginBottom: 14 }}>
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4" style={{ fill: "#C8A24A", color: "#C8A24A" }} />)}
                </div>
                <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 14, lineHeight: 1.7, margin: "0 0 16px", fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 13, color: "#C8A24A", letterSpacing: "0.1em" }}>{t.name}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>{t.area} · {t.service}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/testimonials" className="btn-parent-outline" style={{ textDecoration: "none" }}>
              Read All Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* ── GOLD RIBBON DIVIDER ── */}
      <div style={{ height: 6, background: "linear-gradient(90deg, #8B7228, #C8A24A, #EBD08A, #C8A24A, #8B7228)" }} />

      {/* ── CONTACT / QUOTE FORM ── */}
      <section className="pattern-chalk" style={{ padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 56, alignItems: "start" }}>
            {/* Left: Contact info */}
            <div>
              <div className="section-eyebrow" style={{ color: "#C8A24A", marginBottom: 14 }}>Get in Touch</div>
              <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 64px)", color: "#081838", margin: "0 0 20px", lineHeight: 0.95 }}>
                LET'S<br />TALK.
              </h2>
              <p style={{ color: "#5A6070", fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
                Free quotes, no pressure. Pick the crew you need or call the main line and we'll route you.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ borderLeft: "3px solid #2E8B10", paddingLeft: 16 }}>
                  <div className="section-eyebrow" style={{ color: "#185E2C", marginBottom: 4 }}>Lawn &amp; Landscaping</div>
                  <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 22, color: "#0F2244" }}>Diamond Cutz</div>
                  <a href="tel:+18563713971" style={{ color: "#185E2C", fontWeight: 700, fontSize: 18, textDecoration: "none", display: "block", marginTop: 4 }}>(856) 371-3971</a>
                </div>
                <div style={{ borderLeft: "3px solid #C2185B", paddingLeft: 16 }}>
                  <div className="section-eyebrow" style={{ color: "#7A1B42", marginBottom: 4 }}>Home Cleaning</div>
                  <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 22, color: "#0F2244" }}>A Diamond Girl</div>
                  <a href="tel:+18569810930" style={{ color: "#C2185B", fontWeight: 700, fontSize: 18, textDecoration: "none", display: "block", marginTop: 4 }}>(856) 981-0930</a>
                </div>
                <div>
                  <div className="section-eyebrow" style={{ color: "#5A6070", marginBottom: 4 }}>Email</div>
                  <a href="mailto:diamondhomeservicesofflorida@gmail.com" style={{ color: "#0F2244", fontSize: 14, textDecoration: "none" }}>diamondhomeservicesofflorida@gmail.com</a>
                </div>
                <div>
                  <div className="section-eyebrow" style={{ color: "#5A6070", marginBottom: 4 }}>Service Area</div>
                  <div style={{ color: "#0F2244", fontSize: 14 }}>Nassau County, FL · Tributary Community, Yulee</div>
                </div>
                <div>
                  <div className="section-eyebrow" style={{ color: "#5A6070", marginBottom: 4 }}>Hours</div>
                  <div style={{ color: "#0F2244", fontSize: 14 }}>Mon–Sat: 7:00 AM – 6:00 PM</div>
                </div>
              </div>
            </div>

            {/* Right: Quote form */}
            <div style={{ background: "#fff", borderRadius: 8, padding: "36px 32px", boxShadow: "0 8px 32px rgba(0,0,0,0.08)", border: "1px solid #E8E4DC" }}>
              <div className="section-eyebrow" style={{ color: "#C8A24A", marginBottom: 8 }}>Free Quote</div>
              <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: 28, color: "#081838", margin: "0 0 24px", lineHeight: 1 }}>TELL US ABOUT THE JOB</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll be in touch within 24 hours."); }} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label className="form-label">Your Name</label>
                  <input className="form-input" type="text" placeholder="Jane Smith" required />
                </div>
                <div>
                  <label className="form-label">Phone</label>
                  <input className="form-input" type="tel" placeholder="(904) 555-0100" required />
                </div>
                <div>
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="form-label">Service Type</label>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 4 }}>
                    {["Mowing", "Landscaping", "Deep Clean", "Move-Out", "Both", "Other"].map((s) => (
                      <label key={s} style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
                        <input type="radio" name="service" value={s} style={{ accentColor: "#C8A24A" }} />
                        <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0F2244" }}>{s}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="form-label">Notes</label>
                  <textarea className="form-input" rows={3} placeholder="Tell us about your home or yard..." style={{ resize: "vertical" }} />
                </div>
                <button type="submit" className="btn-parent-primary" style={{ width: "100%", marginTop: 4 }}>
                  Send Free Quote Request →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
