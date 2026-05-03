/* ============================================================
   Gallery Page — Diamond Home Services LLC
   Before/After photo placeholders for Diamond Cutz & A Diamond Girl
   ============================================================ */

import { useState } from "react";
import { Camera, Scissors, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Category = "all" | "lawn" | "cleaning";

const DIAMOND_CUTZ_LOGO = "/manus-storage/diamond-cutz-logo_7523a9b6.png";
const DIAMOND_GIRL_LOGO = "/manus-storage/diamond-girl-logo_26e7435d.png";

// Placeholder gallery items — replace src values with real photos
const galleryItems = [
  // Diamond Cutz — Lawn
  { id: 1, category: "lawn" as Category, label: "Lawn Mowing", location: "Tributary, Yulee FL", beforeSrc: null, afterSrc: null },
  { id: 2, category: "lawn" as Category, label: "Landscape Design", location: "Amelia Island, FL", beforeSrc: null, afterSrc: null },
  { id: 3, category: "lawn" as Category, label: "Sod Installation", location: "Yulee, FL", beforeSrc: null, afterSrc: null },
  { id: 4, category: "lawn" as Category, label: "Mulching & Bed Care", location: "Fernandina Beach, FL", beforeSrc: null, afterSrc: null },
  { id: 5, category: "lawn" as Category, label: "Shrub Trimming", location: "Tributary, Yulee FL", beforeSrc: null, afterSrc: null },
  { id: 6, category: "lawn" as Category, label: "Seasonal Clean-Up", location: "Yulee, FL", beforeSrc: null, afterSrc: null },
  // A Diamond Girl — Cleaning
  { id: 7, category: "cleaning" as Category, label: "Deep Clean", location: "Tributary, Yulee FL", beforeSrc: null, afterSrc: null },
  { id: 8, category: "cleaning" as Category, label: "Kitchen Cleaning", location: "Amelia Island, FL", beforeSrc: null, afterSrc: null },
  { id: 9, category: "cleaning" as Category, label: "Bathroom Cleaning", location: "Yulee, FL", beforeSrc: null, afterSrc: null },
  { id: 10, category: "cleaning" as Category, label: "Move-In Clean", location: "Fernandina Beach, FL", beforeSrc: null, afterSrc: null },
  { id: 11, category: "cleaning" as Category, label: "Living Room Clean", location: "Tributary, Yulee FL", beforeSrc: null, afterSrc: null },
  { id: 12, category: "cleaning" as Category, label: "Post-Construction", location: "Yulee, FL", beforeSrc: null, afterSrc: null },
];

function PlaceholderImage({ label, type, category }: { label: string; type: "before" | "after"; category: Category }) {
  const isLawn = category === "lawn";
  const bg = type === "before"
    ? "oklch(0.88 0.03 85)"
    : isLawn ? "oklch(0.88 0.05 145)" : "oklch(0.92 0.04 340)";
  const iconColor = type === "before"
    ? "oklch(0.60 0.03 80)"
    : isLawn ? "oklch(0.35 0.10 145)" : "oklch(0.45 0.15 340)";

  return (
    <div
      className="w-full h-44 rounded-xl flex flex-col items-center justify-center gap-2 border-2 border-dashed"
      style={{ backgroundColor: bg, borderColor: iconColor + "60" }}
    >
      <Camera className="w-8 h-8" style={{ color: iconColor }} />
      <span className="text-xs font-bold uppercase tracking-wide" style={{ color: iconColor, fontFamily: "'Nunito Sans', sans-serif" }}>
        {type === "before" ? "Before Photo" : "After Photo"}
      </span>
      <span className="text-xs" style={{ color: iconColor + "99", fontFamily: "'Nunito Sans', sans-serif" }}>
        {label}
      </span>
    </div>
  );
}

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? galleryItems : galleryItems.filter((g) => g.category === active);

  const tabs: { key: Category; label: string; icon: typeof Scissors }[] = [
    { key: "all", label: "All Work", icon: Camera },
    { key: "lawn", label: "Diamond Cutz", icon: Scissors },
    { key: "cleaning", label: "A Diamond Girl", icon: Sparkles },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(0.97 0.02 90)" }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16" style={{ backgroundColor: "oklch(0.22 0.08 145)" }}>
        <div className="container text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full" style={{ backgroundColor: "oklch(0.72 0.15 75 / 0.2)", color: "oklch(0.82 0.12 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Our Work
          </span>
          <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Before & After Gallery
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "oklch(0.85 0.04 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
            See the Diamond difference. Real results from real jobs across Yulee, Amelia Island, and surrounding Northeast Florida communities.
          </p>
        </div>
      </section>

      {/* Logos */}
      <section className="py-10" style={{ backgroundColor: "oklch(0.93 0.03 85)" }}>
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <img src={DIAMOND_CUTZ_LOGO} alt="Diamond Cutz" className="h-14 w-auto object-contain" />
              <div>
                <p className="font-bold text-sm" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}>Diamond Cutz</p>
                <p className="text-xs" style={{ color: "oklch(0.45 0.03 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Lawn & Landscaping</p>
              </div>
            </div>
            <div className="w-px h-10 hidden sm:block" style={{ backgroundColor: "oklch(0.80 0.03 85)" }} />
            <div className="flex items-center gap-3">
              <img src={DIAMOND_GIRL_LOGO} alt="A Diamond Girl" className="h-14 w-auto object-contain" />
              <div>
                <p className="font-bold text-sm" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}>A Diamond Girl</p>
                <p className="text-xs" style={{ color: "oklch(0.45 0.03 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Home Cleaning Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-10">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = active === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200"
                  style={{
                    backgroundColor: isActive ? "oklch(0.35 0.10 145)" : "white",
                    color: isActive ? "white" : "oklch(0.35 0.04 70)",
                    border: `2px solid ${isActive ? "oklch(0.35 0.10 145)" : "oklch(0.88 0.03 85)"}`,
                    fontFamily: "'Nunito Sans', sans-serif",
                    boxShadow: isActive ? "0 4px 12px oklch(0.35 0.10 145 / 0.25)" : "none",
                  }}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-base" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}>{item.label}</h3>
                      <p className="text-xs" style={{ color: "oklch(0.55 0.03 80)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.location}</p>
                    </div>
                    <span
                      className="text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide"
                      style={{
                        backgroundColor: item.category === "lawn" ? "oklch(0.35 0.10 145 / 0.1)" : "oklch(0.45 0.15 340 / 0.1)",
                        color: item.category === "lawn" ? "oklch(0.35 0.10 145)" : "oklch(0.45 0.15 340)",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      {item.category === "lawn" ? "Lawn" : "Cleaning"}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide mb-1.5 text-center" style={{ color: "oklch(0.55 0.03 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Before</p>
                      {item.beforeSrc ? (
                        <img src={item.beforeSrc} alt={`Before - ${item.label}`} className="w-full h-44 object-cover rounded-xl" />
                      ) : (
                        <PlaceholderImage label={item.label} type="before" category={item.category} />
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide mb-1.5 text-center" style={{ color: "oklch(0.55 0.03 80)", fontFamily: "'Nunito Sans', sans-serif" }}>After</p>
                      {item.afterSrc ? (
                        <img src={item.afterSrc} alt={`After - ${item.label}`} className="w-full h-44 object-cover rounded-xl" />
                      ) : (
                        <PlaceholderImage label={item.label} type="after" category={item.category} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Upload CTA */}
          <div className="mt-16 text-center">
            <div
              className="inline-block rounded-2xl px-8 py-6 max-w-lg"
              style={{ backgroundColor: "oklch(0.35 0.10 145 / 0.08)", border: "2px dashed oklch(0.35 0.10 145 / 0.3)" }}
            >
              <Camera className="w-10 h-10 mx-auto mb-3" style={{ color: "oklch(0.35 0.10 145)" }} />
              <h3 className="font-bold text-lg mb-2" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}>
                Photos Coming Soon
              </h3>
              <p className="text-sm" style={{ color: "oklch(0.45 0.03 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
                We're building our gallery with real before & after photos from jobs across Yulee, Amelia Island, and surrounding areas. Check back soon!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
