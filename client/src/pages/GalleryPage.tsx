/* ============================================================
   Gallery Page — Diamond Home Services LLC
   Palette: Parent navy+gold, Cutz green, Girl magenta
   Before/After mock photos for Diamond Cutz & A Diamond Girl
   ============================================================ */

import { useState } from "react";
import { Camera, Scissors, Sparkles, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Category = "all" | "lawn" | "cleaning";

const DIAMOND_CUTZ_LOGO = "/manus-storage/diamond-cutz-logo_7523a9b6.png";
const DIAMOND_GIRL_LOGO = "/manus-storage/diamond-girl-logo_26e7435d.png";

// Design system hex tokens
const NAVY_900  = "#081830";
const NAVY_800  = "#0F2244";
const GOLD_500  = "#C8A24A";
const GOLD_300  = "#E8D08A";
const GREEN_500 = "#2E8B3D";
const MAGENTA   = "#C21B6B";
const WHITE     = "#FFFFFF";
const OFFWHITE  = "#F5F3EE";
const CHARCOAL  = "#1A1F2E";

const galleryItems = [
  // ── Diamond Cutz — Lawn ──
  {
    id: 1, category: "lawn" as Category, label: "Lawn Mowing & Edging", location: "Tributary, Yulee FL",
    beforeSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75",
    afterSrc:  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=75",
  },
  {
    id: 2, category: "lawn" as Category, label: "Landscape Design", location: "Yulee, FL",
    beforeSrc: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=75",
    afterSrc:  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=75",
  },
  {
    id: 3, category: "lawn" as Category, label: "Sod Installation", location: "Nassau County, FL",
    beforeSrc: "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=600&q=75",
    afterSrc:  "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&q=75",
  },
  {
    id: 4, category: "lawn" as Category, label: "Mulching & Bed Care", location: "Fernandina Beach, FL",
    beforeSrc: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&q=75",
    afterSrc:  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=75",
  },
  {
    id: 5, category: "lawn" as Category, label: "Shrub Trimming", location: "Tributary, Yulee FL",
    beforeSrc: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=75",
    afterSrc:  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75",
  },
  {
    id: 6, category: "lawn" as Category, label: "Seasonal Clean-Up", location: "Callahan, FL",
    beforeSrc: "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=600&q=75",
    afterSrc:  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=75",
  },
  // ── A Diamond Girl — Cleaning ──
  {
    id: 7, category: "cleaning" as Category, label: "Diamond Deep Clean — Kitchen", location: "Tributary, Yulee FL",
    beforeSrc: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=75",
    afterSrc:  "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=75",
  },
  {
    id: 8, category: "cleaning" as Category, label: "Bathroom Deep Scrub", location: "Nassau County, FL",
    beforeSrc: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=75",
    afterSrc:  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=75",
  },
  {
    id: 9, category: "cleaning" as Category, label: "Move-In Clean", location: "Yulee, FL",
    beforeSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75",
    afterSrc:  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=75",
  },
  {
    id: 10, category: "cleaning" as Category, label: "Living Room Refresh", location: "Fernandina Beach, FL",
    beforeSrc: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=75",
    afterSrc:  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=75",
  },
  {
    id: 11, category: "cleaning" as Category, label: "Post-Construction Clean", location: "Tributary, Yulee FL",
    beforeSrc: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75",
    afterSrc:  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=75",
  },
  {
    id: 12, category: "cleaning" as Category, label: "Full Home Diamond Shine", location: "Nassau County, FL",
    beforeSrc: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=75",
    afterSrc:  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=75",
  },
];

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? galleryItems : galleryItems.filter((g) => g.category === active);

  const tabs: { key: Category; label: string; icon: typeof Scissors }[] = [
    { key: "all",      label: "All Work",       icon: Camera },
    { key: "lawn",     label: "Diamond Cutz",   icon: Scissors },
    { key: "cleaning", label: "A Diamond Girl", icon: Sparkles },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: OFFWHITE }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="pt-28 pb-16"
        style={{ background: `linear-gradient(160deg, ${NAVY_900} 0%, ${NAVY_800} 100%)` }}
      >
        <div className="container text-center">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1"
            style={{
              backgroundColor: `${GOLD_500}22`,
              color: GOLD_300,
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: "0.15em",
            }}
          >
            Our Work
          </span>
          <h1
            className="text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Before &amp; After Gallery
          </h1>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.78)", fontFamily: "'Manrope', sans-serif" }}
          >
            See the Diamond difference. Real results from real jobs across Nassau County, Florida — rooted in the Tributary community.
          </p>
        </div>
      </section>

      {/* ── LOGOS BANNER ── */}
      <section className="py-8" style={{ backgroundColor: "#EDEAE2" }}>
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <img src={DIAMOND_CUTZ_LOGO} alt="Diamond Cutz" className="h-14 w-auto object-contain" />
              <div>
                <p
                  className="font-bold text-sm"
                  style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
                >
                  Diamond Cutz
                </p>
                <p
                  className="text-xs"
                  style={{ color: "#6B7280", fontFamily: "'Manrope', sans-serif" }}
                >
                  Lawn & Landscaping
                </p>
              </div>
            </div>
            <div className="w-px h-10 hidden sm:block" style={{ backgroundColor: "#C8A24A" }} />
            <div className="flex items-center gap-3">
              <img src={DIAMOND_GIRL_LOGO} alt="A Diamond Girl" className="h-14 w-auto object-contain" />
              <div>
                <p
                  className="font-bold text-sm"
                  style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
                >
                  A Diamond Girl
                </p>
                <p
                  className="text-xs"
                  style={{ color: "#6B7280", fontFamily: "'Manrope', sans-serif" }}
                >
                  Home Cleaning Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER TABS + GRID ── */}
      <section className="py-14">
        <div className="container">
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = active === tab.key;
              const activeColor = tab.key === "cleaning" ? MAGENTA : GREEN_500;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className="flex items-center gap-2 px-5 py-2.5 font-bold text-sm transition-all duration-200"
                  style={{
                    backgroundColor: isActive ? (tab.key === "all" ? NAVY_800 : activeColor) : WHITE,
                    color: isActive ? WHITE : "#4A5568",
                    border: `2px solid ${isActive ? (tab.key === "all" ? NAVY_800 : activeColor) : "#D4CDB8"}`,
                    fontFamily: "'Oswald', sans-serif",
                    letterSpacing: "0.06em",
                  }}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => {
              const badgeColor = item.category === "lawn" ? GREEN_500 : MAGENTA;
              return (
                <div
                  key={item.id}
                  className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ border: `1px solid #E2DDD4` }}
                >
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3
                          className="font-bold text-base"
                          style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
                        >
                          {item.label}
                        </h3>
                        <p
                          className="text-xs"
                          style={{ color: "#6B7280", fontFamily: "'Manrope', sans-serif" }}
                        >
                          {item.location}
                        </p>
                      </div>
                      <span
                        className="text-xs font-bold px-2.5 py-0.5 uppercase tracking-wide"
                        style={{
                          backgroundColor: `${badgeColor}18`,
                          color: badgeColor,
                          fontFamily: "'Oswald', sans-serif",
                        }}
                      >
                        {item.category === "lawn" ? "Lawn" : "Cleaning"}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p
                          className="text-xs font-bold uppercase tracking-wide mb-1.5 text-center"
                          style={{ color: "#6B7280", fontFamily: "'Oswald', sans-serif" }}
                        >
                          Before
                        </p>
                        <img
                          src={item.beforeSrc}
                          alt={`Before - ${item.label}`}
                          className="w-full h-40 object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p
                          className="text-xs font-bold uppercase tracking-wide mb-1.5 text-center"
                          style={{ color: "#6B7280", fontFamily: "'Oswald', sans-serif" }}
                        >
                          After
                        </p>
                        <img
                          src={item.afterSrc}
                          alt={`After - ${item.label}`}
                          className="w-full h-40 object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section
        className="py-14"
        style={{ background: `linear-gradient(135deg, ${GREEN_500} 0%, #185E2C 100%)` }}
      >
        <div className="container text-center">
          <h2
            className="text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Ready for Your Own Diamond Transformation?
          </h2>
          <p
            className="text-base mb-6"
            style={{ color: "rgba(255,255,255,0.82)", fontFamily: "'Manrope', sans-serif" }}
          >
            Call or text us today for a free estimate. Nassau County's trusted family home services team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+18563713971"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              style={{
                backgroundColor: GOLD_500,
                color: CHARCOAL,
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.06em",
              }}
            >
              <Phone className="w-4 h-4" />
              Lawn: 856-371-3971
            </a>
            <a
              href="tel:+18569810930"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: "rgba(255,255,255,0.12)",
                color: WHITE,
                border: "1px solid rgba(255,255,255,0.30)",
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.06em",
              }}
            >
              <Phone className="w-4 h-4" />
              Cleaning: 856-981-0930
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
