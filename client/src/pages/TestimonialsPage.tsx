/* ================================================================
   Testimonials — Diamond Home Services LLC
   Design System: Parent navy+gold hero, Cutz green cards, Girl pink cards
   Fonts: Anton (display), Oswald (labels), Manrope (body)
   ================================================================ */

import { Link } from "wouter";
import { Star, Quote, Phone, Scissors, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DIAMOND_CUTZ_LOGO = "/manus-storage/diamond-cutz-logo_7523a9b6.png";
const DIAMOND_GIRL_LOGO = "/manus-storage/diamond-girl-logo-clean_4f2c96f8.png";

type Category = "all" | "lawn" | "cleaning";

const testimonials = [
  // ── Diamond Cutz ──
  {
    id: 1, category: "lawn" as Category,
    name: "James R.", location: "Tributary, Yulee FL", rating: 5,
    text: "Mike does an absolutely incredible job on our lawn. We've had other services before, but nobody comes close to the level of detail and care he puts into every visit. Our yard has never looked better — the neighbors keep asking who does our lawn!",
    service: "Weekly Lawn Maintenance", business: "Diamond Cutz",
  },
  {
    id: 2, category: "lawn" as Category,
    name: "Sandra & Tom K.", location: "Yulee, FL", rating: 5,
    text: "We hired Diamond Cutz for a full landscape redesign and couldn't be happier. Mike listened to exactly what we wanted, gave us a fair price, and the result was stunning. Our curb appeal went through the roof. Highly recommend!",
    service: "Landscape Design", business: "Diamond Cutz",
  },
  {
    id: 3, category: "lawn" as Category,
    name: "David M.", location: "Fernandina Beach, FL", rating: 5,
    text: "Reliable, professional, and the quality is consistently top-notch. Mike shows up when he says he will and always goes the extra mile. He noticed my irrigation system had an issue and flagged it before it became a bigger problem. That's the kind of service you can't put a price on.",
    service: "Lawn Care & Irrigation", business: "Diamond Cutz",
  },
  {
    id: 4, category: "lawn" as Category,
    name: "Patricia L.", location: "Tributary, Yulee FL", rating: 5,
    text: "I've been using Diamond Cutz since they first started in the Tributary community. Watching this family business grow has been so inspiring. Mike is honest, hardworking, and genuinely cares about doing a great job. My lawn is the envy of the street!",
    service: "Bi-Weekly Lawn Maintenance", business: "Diamond Cutz",
  },
  {
    id: 5, category: "lawn" as Category,
    name: "Robert & Angela T.", location: "Callahan, FL", rating: 5,
    text: "We had sod installed and Mike's team did a flawless job. They prepped the ground properly, laid it perfectly, and even came back to check on it a week later. The lawn looks like it's been there for years. Absolutely worth every penny.",
    service: "Sod Installation", business: "Diamond Cutz",
  },
  {
    id: 6, category: "lawn" as Category,
    name: "Kevin B.", location: "Nassau County, FL", rating: 5,
    text: "Best lawn service in Nassau County, hands down. Mike is a true professional who takes pride in his craft. He transformed my overgrown mess into a beautiful, well-maintained yard. I get compliments from my neighbors every week now.",
    service: "Lawn Restoration", business: "Diamond Cutz",
  },
  // ── A Diamond Girl ──
  {
    id: 7, category: "cleaning" as Category,
    name: "Michelle W.", location: "Tributary, Yulee FL", rating: 5,
    text: "Lydine is an absolute gem! She did a deep clean on our home before we moved in and I was blown away. Every corner, every cabinet, every surface — spotless. She has an eye for detail that I've never seen from any cleaning service before. Diamond-level is the perfect name for it.",
    service: "Move-In Deep Clean", business: "A Diamond Girl",
  },
  {
    id: 8, category: "cleaning" as Category,
    name: "Ashley P.", location: "Yulee, FL", rating: 5,
    text: "I've tried several cleaning services over the years and nobody compares to A Diamond Girl. Lydine is thorough, trustworthy, and my house literally sparkles after she's done. I don't know how she does it, but I'm never going back to anyone else.",
    service: "Recurring Bi-Weekly Clean", business: "A Diamond Girl",
  },
  {
    id: 9, category: "cleaning" as Category,
    name: "Jennifer & Mark S.", location: "Fernandina Beach, FL", rating: 5,
    text: "We hired Lydine for a post-renovation clean after our kitchen remodel and she was phenomenal. Construction dust gets everywhere and she got it all. The kitchen looked brand new when she was done. We've since signed up for monthly service and couldn't be happier.",
    service: "Post-Construction Clean", business: "A Diamond Girl",
  },
  {
    id: 10, category: "cleaning" as Category,
    name: "Carol H.", location: "Tributary, Yulee FL", rating: 5,
    text: "Lydine is the real deal. She's prompt, professional, and incredibly detail-oriented. I've been using A Diamond Girl for six months now and every single time she leaves my home looking and smelling absolutely amazing. Worth every dollar — I can't recommend her enough.",
    service: "Monthly Deep Clean", business: "A Diamond Girl",
  },
  {
    id: 11, category: "cleaning" as Category,
    name: "Nancy G.", location: "Nassau County, FL", rating: 5,
    text: "I hired Lydine to clean before a big holiday gathering and she made my home look better than it ever has. My guests kept asking who cleaned my house! She's reliable, kind, and does exceptional work. I've already booked her for the next three months.",
    service: "Special Occasion Clean", business: "A Diamond Girl",
  },
  {
    id: 12, category: "cleaning" as Category,
    name: "Lisa & Tom F.", location: "Callahan, FL", rating: 5,
    text: "We needed a move-out clean on a tight timeline and Lydine came through for us perfectly. She was flexible with scheduling, incredibly thorough, and left the property in better shape than when we moved in. Our landlord was impressed. Highly recommend!",
    service: "Move-Out Clean", business: "A Diamond Girl",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} style={{ color: "#C8A24A", fill: "#C8A24A" }} />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  const lawnReviews = testimonials.filter(t => t.category === "lawn");
  const cleaningReviews = testimonials.filter(t => t.category === "cleaning");

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif", backgroundColor: "#F5F3EE" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{
        background: "#081838",
        backgroundImage: "linear-gradient(rgba(200,162,74,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(200,162,74,0.08) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        paddingTop: 100,
        paddingBottom: 64,
        position: "relative",
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #081838, #C8A24A, #EBD08A, #C8A24A, #081838)" }} />
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C8A24A", marginBottom: 16 }}>
            Customer Reviews · Nassau County, FL
          </p>
          <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(40px, 6vw, 72px)", lineHeight: 0.95, color: "#fff", margin: "0 0 16px" }}>
            WHAT OUR CUSTOMERS
          </h1>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(20px, 3vw, 36px)", color: "#C8A24A", margin: "0 0 24px" }}>
            are saying.
          </p>
          {/* Stats */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 40, marginTop: 16 }}>
            {[
              { value: "5.0 ★", label: "Average Rating" },
              { value: "100+", label: "Happy Customers" },
              { value: "Nassau County", label: "Service Area" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 28, color: "#C8A24A", margin: "0 0 4px" }}>{stat.value}</p>
                <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", margin: 0 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold ribbon */}
      <div style={{ height: 5, background: "linear-gradient(90deg, #081838, #C8A24A, #EBD08A, #C8A24A, #081838)" }} />

      {/* Logos bar */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(8,24,56,0.08)", padding: "16px 0" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src={DIAMOND_CUTZ_LOGO} alt="Diamond Cutz" style={{ height: 44, width: "auto", objectFit: "contain" }} />
            <div>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 13, color: "#0E3A1C", margin: 0 }}>Diamond Cutz</p>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 11, color: "#666", margin: 0 }}>Lawn & Landscaping</p>
            </div>
          </div>
          <div style={{ width: 1, height: 36, background: "rgba(200,162,74,0.4)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src={DIAMOND_GIRL_LOGO} alt="A Diamond Girl" style={{ height: 44, width: "auto", objectFit: "contain" }} />
            <div>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 13, color: "#5C1432", margin: 0 }}>A Diamond Girl</p>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 11, color: "#666", margin: 0 }}>Home Cleaning Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIAMOND CUTZ REVIEWS ── */}
      <section style={{ padding: "56px 0 48px", background: "#F5F3EE" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
            <div style={{ width: 4, height: 40, background: "#2E8B10", borderRadius: 2 }} />
            <div>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2E8B10", margin: "0 0 4px" }}>Crew · Outdoors</p>
              <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(24px, 3vw, 36px)", color: "#0E3A1C", margin: 0, letterSpacing: "0.02em" }}>DIAMOND CUTZ REVIEWS</h2>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
              <Scissors size={16} style={{ color: "#2E8B10" }} />
              <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 12, color: "#2E8B10", letterSpacing: "0.1em" }}>856-371-3971</span>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {lawnReviews.map((t) => (
              <div key={t.id} style={{
                background: "#fff",
                borderRadius: 4,
                padding: "24px",
                boxShadow: "0 2px 12px rgba(8,24,56,0.07)",
                border: "1px solid rgba(46,139,16,0.12)",
                borderTop: "3px solid #2E8B10",
                display: "flex", flexDirection: "column",
              }}>
                <Quote size={24} style={{ color: "#2E8B10", opacity: 0.2, marginBottom: 12 }} />
                <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, lineHeight: 1.7, color: "#333", flex: 1, marginBottom: 16 }}>
                  "{t.text}"
                </p>
                <div style={{ borderTop: "1px solid rgba(46,139,16,0.12)", paddingTop: 14 }}>
                  <StarRating count={t.rating} />
                  <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 14, color: "#081838", margin: "8px 0 2px" }}>{t.name}</p>
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 11, color: "#888", margin: "0 0 8px" }}>{t.location}</p>
                  <span style={{
                    background: "rgba(46,139,16,0.1)", color: "#0E3A1C",
                    padding: "3px 10px", borderRadius: 2,
                    fontFamily: "'Oswald', sans-serif", fontSize: 9,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                  }}>
                    {t.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold ribbon divider */}
      <div style={{ height: 3, background: "linear-gradient(90deg, transparent, #C8A24A, transparent)" }} />

      {/* ── A DIAMOND GIRL REVIEWS ── */}
      <section style={{ padding: "48px 0 56px", background: "#FFF0F5" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
            <div style={{ width: 4, height: 40, background: "#C21B6B", borderRadius: 2 }} />
            <div>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C21B6B", margin: "0 0 4px" }}>Crew · Indoors</p>
              <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(24px, 3vw, 36px)", color: "#5C1432", margin: 0, letterSpacing: "0.02em" }}>A DIAMOND GIRL REVIEWS</h2>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
              <Sparkles size={16} style={{ color: "#C21B6B" }} />
              <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 12, color: "#C21B6B", letterSpacing: "0.1em" }}>856-981-0930</span>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {cleaningReviews.map((t) => (
              <div key={t.id} style={{
                background: "#fff",
                borderRadius: 4,
                padding: "24px",
                boxShadow: "0 2px 12px rgba(92,20,50,0.07)",
                border: "1px solid rgba(194,27,107,0.12)",
                borderTop: "3px solid #C21B6B",
                display: "flex", flexDirection: "column",
              }}>
                <Quote size={24} style={{ color: "#C21B6B", opacity: 0.2, marginBottom: 12 }} />
                <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, lineHeight: 1.7, color: "#333", flex: 1, marginBottom: 16 }}>
                  "{t.text}"
                </p>
                <div style={{ borderTop: "1px solid rgba(194,27,107,0.12)", paddingTop: 14 }}>
                  <StarRating count={t.rating} />
                  <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 14, color: "#081838", margin: "8px 0 2px" }}>{t.name}</p>
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 11, color: "#888", margin: "0 0 8px" }}>{t.location}</p>
                  <span style={{
                    background: "rgba(194,27,107,0.1)", color: "#5C1432",
                    padding: "3px 10px", borderRadius: 2,
                    fontFamily: "'Oswald', sans-serif", fontSize: 9,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                  }}>
                    {t.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: "#0F2244",
        backgroundImage: "repeating-linear-gradient(45deg, rgba(200,162,74,0.04) 0px, rgba(200,162,74,0.04) 1px, transparent 1px, transparent 50%)",
        backgroundSize: "20px 20px",
        padding: "56px 0",
        textAlign: "center",
      }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(28px, 4vw, 48px)", color: "#fff", margin: "0 0 12px" }}>
            READY TO EXPERIENCE THE DIAMOND DIFFERENCE?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, margin: "0 0 28px" }}>
            Join hundreds of happy Nassau County homeowners. Call or text for a free estimate today.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+18563713971" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#2E8B10", color: "#fff", padding: "13px 24px", borderRadius: 3,
              fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none",
            }}>
              <Scissors size={14} /> Lawn: 856-371-3971
            </a>
            <a href="tel:+18569810930" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#C21B6B", color: "#fff", padding: "13px 24px", borderRadius: 3,
              fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none",
            }}>
              <Sparkles size={14} /> Cleaning: 856-981-0930
            </a>
            <Link href="/gallery" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.1)", color: "#EBD08A", padding: "13px 24px", borderRadius: 3,
              fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none",
              border: "1px solid rgba(200,162,74,0.4)",
            }}>
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
