/* ================================================================
   About Us — Diamond Home Services LLC
   Design System: Parent palette — Navy #081838 / #0F2244 / #18305C + Gold #C8A24A / #EBD08A
   Patterns: diamond-grid (hero), chalk-baseline (body), gold-ribbon (dividers)
   Fonts: Anton (display), Oswald (labels), Manrope (body), Playfair Display (italic accent)
   Owners: Mike & Lydine Petrutz | Nassau County, FL
   Email: diamondhomeservicesofflorida@gmail.com
   ================================================================ */

import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Heart, Star, ArrowRight, Users } from "lucide-react";

const COUPLE_PHOTO = "/manus-storage/couple-photo_d3dad383.webp";
const DIAMOND_CUTZ_LOGO = "/manus-storage/diamond-cutz-logo_7523a9b6.png";
const DIAMOND_GIRL_LOGO = "/manus-storage/diamond-girl-logo-clean_4f2c96f8.png";

const values = [
  { icon: Heart, title: "Family First", desc: "We started this business to build something our son could be proud of. Every job we take, we treat like it's our own home." },
  { icon: Star, title: "Diamond Standard", desc: "We don't do average. Whether it's a lawn or a living room, we hold ourselves to the highest standard — every single time." },
  { icon: Users, title: "Community Roots", desc: "We live in the Tributary community. Our neighbors are our customers. That accountability drives everything we do." },
];

export default function AboutPage() {
  return (
    <div style={{ fontFamily: "'Manrope', sans-serif", backgroundColor: "#F5F3EE" }}>

      {/* ── HERO: diamond grid navy ── */}
      <section style={{
        background: "#081838",
        backgroundImage: "linear-gradient(rgba(200,162,74,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(200,162,74,0.08) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        paddingTop: 80,
        paddingBottom: 64,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #081838, #C8A24A, #EBD08A, #C8A24A, #081838)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C8A24A", marginBottom: 16 }}>
            Our Story · Nassau County, Florida
          </p>
          <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(48px, 7vw, 84px)", lineHeight: 0.92, color: "#fff", letterSpacing: "-0.01em", margin: "0 0 16px" }}>
            BUILT FROM
          </h1>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(32px, 5vw, 58px)", color: "#C8A24A", margin: "0 0 20px", lineHeight: 1.1 }}>
            the ground up.
          </p>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, maxWidth: 560, margin: "0 auto 32px", lineHeight: 1.75 }}>
            A husband-and-wife team from South Jersey who packed up everything, moved to Yulee, Florida, and built two businesses from scratch — one lawn at a time, one home at a time.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+18563713971" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#C8A24A", color: "#081838",
              padding: "12px 24px", borderRadius: 3,
              fontFamily: "'Oswald', sans-serif", fontWeight: 700,
              fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase",
              textDecoration: "none",
            }}>
              <Phone size={14} /> Get a Free Quote
            </a>
            <a href="mailto:diamondhomeservicesofflorida@gmail.com" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "transparent", color: "#C8A24A",
              padding: "12px 24px", borderRadius: 3,
              fontFamily: "'Oswald', sans-serif", fontWeight: 600,
              fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase",
              textDecoration: "none", border: "1.5px solid #C8A24A",
            }}>
              Email Us →
            </a>
          </div>
        </div>
      </section>

      {/* ── GOLD RIBBON DIVIDER ── */}
      <div style={{ height: 5, background: "linear-gradient(90deg, #081838, #C8A24A, #EBD08A, #C8A24A, #081838)" }} />

      {/* ── COUPLE PHOTO + STORY ── */}
      <section style={{ background: "#F5F3EE", padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 56, alignItems: "center" }}>

            {/* Couple Photo */}
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", top: -12, left: -12, right: 12, bottom: 12,
                border: "2px solid #C8A24A", borderRadius: 4, zIndex: 0,
              }} />
              <img
                src={COUPLE_PHOTO}
                alt="Mike and Lydine Petrutz — Diamond Home Services"
                style={{
                  width: "100%", height: "auto", borderRadius: 4,
                  position: "relative", zIndex: 1,
                  boxShadow: "0 20px 48px rgba(8,24,56,0.18)", display: "block",
                }}
              />
              <div style={{
                position: "absolute", bottom: 20, left: 20, zIndex: 2,
                background: "#081838", padding: "10px 18px", borderRadius: 3,
                borderLeft: "3px solid #C8A24A",
              }}>
                <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 14, color: "#fff", margin: 0, letterSpacing: "0.08em" }}>
                  MIKE & LYDINE PETRUTZ
                </p>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 11, color: "#C8A24A", margin: "2px 0 0", letterSpacing: "0.06em" }}>
                  Founders · Diamond Home Services LLC
                </p>
              </div>
            </div>

            {/* Story Text */}
            <div>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C8A24A", marginBottom: 14 }}>
                Our Story
              </p>
              <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", color: "#081838", margin: "0 0 24px", lineHeight: 1 }}>
                FROM SOUTH JERSEY TO NASSAU COUNTY
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <p style={{ color: "#3A4A5A", fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                  Mike and Lydine Petrutz spent years building their lives in South Jersey before making the leap — packing up everything and moving to Yulee, Florida to give their family a fresh start and a better future.
                </p>
                <p style={{ color: "#3A4A5A", fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                  They arrived with a dream, a work ethic, and one lawnmower. Mike started cutting grass in the Tributary community, and word spread fast. Neighbors told neighbors. One yard became ten. Ten became a full schedule.
                </p>
                <p style={{ color: "#3A4A5A", fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                  Lydine built her own business alongside him — A Diamond Girl Home Cleaning Service — bringing the same diamond-standard care indoors. Together, they cover your entire home: outside and in.
                </p>
                <p style={{ color: "#3A4A5A", fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                  Today, Diamond Home Services LLC is a family-owned operation rooted in the Tributary community, serving all of Nassau County. They're not just your service providers — they're your neighbors.
                </p>
              </div>
              <div style={{ marginTop: 28, padding: "20px 24px", background: "#081838", borderRadius: 4, borderLeft: "4px solid #C8A24A" }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 17, color: "#EBD08A", margin: 0, lineHeight: 1.6 }}>
                  "We started with one lawnmower and one house. We built everything else through hard work, honesty, and treating every customer like a neighbor — because they are."
                </p>
                <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.6)", margin: "12px 0 0", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  — Mike & Lydine Petrutz
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{
        background: "#0F2244",
        backgroundImage: "linear-gradient(rgba(200,162,74,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(200,162,74,0.06) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        padding: "72px 0",
      }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C8A24A", marginBottom: 12 }}>
              What Drives Us
            </p>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", color: "#fff", margin: 0, lineHeight: 1 }}>
              OUR VALUES
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} style={{
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(200,162,74,0.2)",
                  borderRadius: 4, padding: 28, borderTop: "3px solid #C8A24A",
                }}>
                  <div style={{ width: 44, height: 44, borderRadius: 6, background: "rgba(200,162,74,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <Icon size={22} style={{ color: "#C8A24A" }} />
                  </div>
                  <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: "0.08em", textTransform: "uppercase", color: "#EBD08A", margin: "0 0 10px" }}>
                    {value.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TWO BUSINESSES ── */}
      <section style={{ background: "#F5F3EE", padding: "72px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C8A24A", marginBottom: 12 }}>
              Two Crews. One Family.
            </p>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", color: "#081838", margin: 0, lineHeight: 1 }}>
              OUR BUSINESSES
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
            <div style={{ background: "#fff", border: "1px solid rgba(14,58,28,0.12)", borderRadius: 4, padding: 32, borderTop: "4px solid #2E8B10" }}>
              <img src={DIAMOND_CUTZ_LOGO} alt="Diamond Cutz" style={{ height: 80, width: "auto", marginBottom: 20, objectFit: "contain" }} />
              <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2E8B10", marginBottom: 8 }}>
                Crew · Outdoors
              </p>
              <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: 28, color: "#0E3A1C", margin: "0 0 12px", lineHeight: 1 }}>DIAMOND CUTZ</h3>
              <p style={{ color: "#3A4A3A", fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}>
                Lawn mowing, landscaping, mulching, hedge trimming, sod installation, and seasonal cleanup. Mike and his crew keep Nassau County yards looking sharp.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                <a href="tel:+18563713971" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#0E3A1C", color: "#fff", padding: "10px 20px", borderRadius: 3,
                  fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 12,
                  letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none",
                }}>
                  <Phone size={13} /> 856-371-3971
                </a>
                <Link href="/diamond-cutz" style={{
                  display: "inline-flex", alignItems: "center", gap: 6, color: "#2E8B10",
                  fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 12,
                  letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none",
                }}>
                  View Services <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            <div style={{ background: "#fff", border: "1px solid rgba(194,27,107,0.12)", borderRadius: 4, padding: 32, borderTop: "4px solid #C21B6B" }}>
              <img src={DIAMOND_GIRL_LOGO} alt="A Diamond Girl" style={{ height: 80, width: "auto", marginBottom: 20, objectFit: "contain" }} />
              <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C21B6B", marginBottom: 8 }}>
                Crew · Indoors
              </p>
              <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: 28, color: "#5C1432", margin: "0 0 12px", lineHeight: 1 }}>A DIAMOND GIRL</h3>
              <p style={{ color: "#6B3050", fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}>
                Deep cleaning, move-in/move-out, recurring maintenance, and Airbnb turnover. Lydine and her team bring diamond-level care to every home they touch.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                <a href="tel:+18569810930" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#5C1432", color: "#fff", padding: "10px 20px", borderRadius: 3,
                  fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 12,
                  letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none",
                }}>
                  <Phone size={13} /> 856-981-0930
                </a>
                <Link href="/diamond-girl" style={{
                  display: "inline-flex", alignItems: "center", gap: 6, color: "#C21B6B",
                  fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 12,
                  letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none",
                }}>
                  View Services <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT INFO ── */}
      <section style={{
        background: "#081838",
        backgroundImage: "repeating-linear-gradient(45deg, rgba(200,162,74,0.04) 0px, rgba(200,162,74,0.04) 1px, transparent 1px, transparent 50%)",
        backgroundSize: "20px 20px",
        padding: "72px 0",
      }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", color: "#fff", margin: 0, lineHeight: 1 }}>
              GET IN TOUCH
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32, textAlign: "center" }}>
            <div>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(200,162,74,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <Phone size={20} style={{ color: "#C8A24A" }} />
              </div>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C8A24A", marginBottom: 8 }}>Call or Text</p>
              <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 18, color: "#fff", margin: "0 0 4px" }}>856-371-3971</p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, margin: "0 0 12px" }}>Diamond Cutz (Mike)</p>
              <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 18, color: "#fff", margin: "0 0 4px" }}>856-981-0930</p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, margin: 0 }}>A Diamond Girl (Lydine)</p>
            </div>
            <div>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(200,162,74,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <Mail size={20} style={{ color: "#C8A24A" }} />
              </div>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C8A24A", marginBottom: 8 }}>Email</p>
              <a href="mailto:diamondhomeservicesofflorida@gmail.com" style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, color: "#EBD08A", textDecoration: "none", wordBreak: "break-all", lineHeight: 1.6 }}>
                diamondhomeservicesofflorida@gmail.com
              </a>
            </div>
            <div>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(200,162,74,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <MapPin size={20} style={{ color: "#C8A24A" }} />
              </div>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C8A24A", marginBottom: 8 }}>Service Area</p>
              <p style={{ color: "#fff", fontSize: 15, margin: "0 0 4px" }}>Nassau County, Florida</p>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, margin: 0 }}>Rooted in the Tributary Community · Yulee, FL 32097</p>
            </div>
            <div>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(200,162,74,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <Clock size={20} style={{ color: "#C8A24A" }} />
              </div>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C8A24A", marginBottom: 8 }}>Hours</p>
              <p style={{ color: "#fff", fontSize: 15, margin: "0 0 4px" }}>Mon – Sat: 7:00 AM – 6:00 PM</p>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, margin: 0 }}>Sunday: By Appointment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
