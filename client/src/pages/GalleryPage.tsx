/* ================================================================
   Gallery — Diamond Home Services LLC
   Design System: Parent navy+gold hero, Cutz green section, Girl pink section
   Fonts: Anton (display), Oswald (labels), Manrope (body)
   ================================================================ */

import { useState } from "react";
import { Camera, Scissors, Sparkles, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Category = "all" | "lawn" | "cleaning";

const DIAMOND_CUTZ_LOGO = "/manus-storage/diamond-cutz-logo_7523a9b6.png";
const DIAMOND_GIRL_LOGO = "/manus-storage/diamond-girl-logo-clean_4f2c96f8.png";

const galleryItems = [
  // ── Diamond Cutz — Lawn ──
  {
    id: 1, category: "lawn" as Category, label: "Lawn Mowing & Edging", location: "Tributary, Yulee FL",
    beforeSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75",
    afterSrc: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=75",
  },
  {
    id: 2, category: "lawn" as Category, label: "Landscape Design", location: "Yulee, FL",
    beforeSrc: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=75",
    afterSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=75",
  },
  {
    id: 3, category: "lawn" as Category, label: "Sod Installation", location: "Nassau County, FL",
    beforeSrc: "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=600&q=75",
    afterSrc: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&q=75",
  },
  {
    id: 4, category: "lawn" as Category, label: "Mulching & Bed Care", location: "Fernandina Beach, FL",
    beforeSrc: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&q=75",
    afterSrc: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=75",
  },
  {
    id: 5, category: "lawn" as Category, label: "Shrub Trimming", location: "Tributary, Yulee FL",
    beforeSrc: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=75",
    afterSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75",
  },
  {
    id: 6, category: "lawn" as Category, label: "Seasonal Clean-Up", location: "Callahan, FL",
    beforeSrc: "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=600&q=75",
    afterSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=75",
  },
  // ── A Diamond Girl — Cleaning ──
  {
    id: 7, category: "cleaning" as Category, label: "Diamond Deep Clean — Kitchen", location: "Tributary, Yulee FL",
    beforeSrc: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=75",
    afterSrc: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=75",
  },
  {
    id: 8, category: "cleaning" as Category, label: "Bathroom Deep Scrub", location: "Nassau County, FL",
    beforeSrc: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=75",
    afterSrc: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=75",
  },
  {
    id: 9, category: "cleaning" as Category, label: "Move-In Clean", location: "Yulee, FL",
    beforeSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75",
    afterSrc: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=75",
  },
  {
    id: 10, category: "cleaning" as Category, label: "Living Room Refresh", location: "Fernandina Beach, FL",
    beforeSrc: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=75",
    afterSrc: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=75",
  },
  {
    id: 11, category: "cleaning" as Category, label: "Post-Construction Clean", location: "Tributary, Yulee FL",
    beforeSrc: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75",
    afterSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=75",
  },
  {
    id: 12, category: "cleaning" as Category, label: "Full Home Diamond Shine", location: "Nassau County, FL",
    beforeSrc: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=75",
    afterSrc: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=75",
  },
];

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? galleryItems : galleryItems.filter((g) => g.category === active);

  const tabs: { key: Category; label: string; icon: typeof Scissors; color: string; activeBg: string }[] = [
    { key: "all", label: "All Work", icon: Camera, color: "#C8A24A", activeBg: "#081838" },
    { key: "lawn", label: "Diamond Cutz", icon: Scissors, color: "#2E8B10", activeBg: "#0E3A1C" },
    { key: "cleaning", label: "A Diamond Girl", icon: Sparkles, color: "#C21B6B", activeBg: "#5C1432" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F3EE", fontFamily: "'Manrope', sans-serif" }}>
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
            Before & After · Nassau County, FL
          </p>
          <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(40px, 6vw, 72px)", lineHeight: 0.95, color: "#fff", margin: "0 0 16px" }}>
            OUR WORK
          </h1>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(20px, 3vw, 32px)", color: "#C8A24A", margin: "0 0 16px" }}>
            speaks for itself.
          </p>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, maxWidth: 480, margin: "0 auto" }}>
            Real jobs. Real results. See the Diamond difference across Nassau County, Florida.
          </p>
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

      {/* ── FILTER TABS + GRID ── */}
      <section style={{ padding: "48px 0 80px" }}>
        <div className="container">
          {/* Filter tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginBottom: 40 }}>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = active === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 7,
                    padding: "10px 20px", borderRadius: 3, cursor: "pointer",
                    fontFamily: "'Oswald', sans-serif", fontWeight: 600,
                    fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase",
                    border: `2px solid ${isActive ? tab.color : "rgba(8,24,56,0.2)"}`,
                    background: isActive ? tab.activeBg : "transparent",
                    color: isActive ? (tab.key === "all" ? "#C8A24A" : "#fff") : "#081838",
                    transition: "all 0.2s",
                  }}
                >
                  <Icon size={14} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
            {filtered.map((item) => {
              const isCutz = item.category === "lawn";
              const accentColor = isCutz ? "#2E8B10" : "#C21B6B";
              const badgeBg = isCutz ? "#0E3A1C" : "#5C1432";
              return (
                <div
                  key={item.id}
                  style={{
                    background: "#fff",
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(8,24,56,0.08)",
                    border: `1px solid ${isCutz ? "rgba(46,139,16,0.12)" : "rgba(194,27,107,0.12)"}`,
                    borderTop: `3px solid ${accentColor}`,
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                >
                  <div style={{ padding: "16px 16px 12px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, marginBottom: 12 }}>
                      <div>
                        <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 14, color: "#081838", margin: "0 0 3px", letterSpacing: "0.04em" }}>
                          {item.label}
                        </h3>
                        <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 11, color: "#666", margin: 0 }}>
                          {item.location}
                        </p>
                      </div>
                      <span style={{
                        background: badgeBg, color: "#fff",
                        padding: "3px 8px", borderRadius: 2,
                        fontFamily: "'Oswald', sans-serif", fontSize: 9,
                        letterSpacing: "0.12em", textTransform: "uppercase", flexShrink: 0,
                      }}>
                        {isCutz ? "Lawn" : "Cleaning"}
                      </span>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                      <div>
                        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "#999", textAlign: "center", marginBottom: 6 }}>Before</p>
                        <img
                          src={item.beforeSrc}
                          alt={`Before — ${item.label}`}
                          style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 3 }}
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: accentColor, textAlign: "center", marginBottom: 6 }}>After</p>
                        <img
                          src={item.afterSrc}
                          alt={`After — ${item.label}`}
                          style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 3 }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Placeholder note */}
          <div style={{
            marginTop: 48, padding: "20px 28px",
            background: "#081838", borderRadius: 4,
            borderLeft: "4px solid #C8A24A",
            display: "flex", alignItems: "flex-start", gap: 16,
          }}>
            <Camera size={20} style={{ color: "#C8A24A", flexShrink: 0, marginTop: 2 }} />
            <div>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 13, color: "#EBD08A", margin: "0 0 6px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                More Photos Coming Soon
              </p>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, margin: 0, lineHeight: 1.6 }}>
                These are placeholder images while we build out our real job photo library. Real before-and-after photos from Nassau County jobs will be added soon. Want to see our work in person? Call or text us for a free estimate.
              </p>
            </div>
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
            READY FOR YOUR TRANSFORMATION?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, margin: "0 0 28px" }}>
            Call or text for a free quote — no pressure, no obligation.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+18563713971" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#2E8B10", color: "#fff", padding: "13px 24px", borderRadius: 3,
              fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none",
            }}>
              <Scissors size={14} /> Diamond Cutz: 856-371-3971
            </a>
            <a href="tel:+18569810930" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#C21B6B", color: "#fff", padding: "13px 24px", borderRadius: 3,
              fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none",
            }}>
              <Sparkles size={14} /> A Diamond Girl: 856-981-0930
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
