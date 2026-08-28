/* ============================================================
   Gallery Page — Diamond Home Services LLC
   Before/After mock photos for Diamond Cutz & A Diamond Girl
   ============================================================ */

import { useState } from "react";
import { Camera, Scissors, Sparkles, Phone, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONTACT } from "@/lib/contact";

type Category = "all" | "lawn" | "cleaning";

const DIAMOND_CUTZ_LOGO = "/logos/diamond-cutz.png";
const DIAMOND_GIRL_LOGO = "/manus-storage/diamond-girl-logo_26e7435d.png";

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

  const tabs: { key: Category; label: string; icon: typeof Scissors }[] = [
    { key: "all", label: "All Work", icon: Camera },
    { key: "lawn", label: "Diamond Cutz", icon: Scissors },
    { key: "cleaning", label: "A Diamond Girl", icon: Sparkles },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(0.97 0.01 255)" }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16" style={{ backgroundColor: "oklch(0.22 0.08 255)" }}>
        <div className="container text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full" style={{ backgroundColor: "oklch(0.77 0.14 70 / 0.2)", color: "oklch(0.86 0.08 68)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Our Work
          </span>
          <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Before & After Gallery
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "oklch(0.85 0.03 255)", fontFamily: "'Nunito Sans', sans-serif" }}>
            See the Diamond difference. Real results from real jobs across Nassau County, Florida — rooted in the Tributary community.
          </p>
        </div>
      </section>

      {/* Logos */}
      <section className="py-8" style={{ backgroundColor: "oklch(0.93 0.02 255)" }}>
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <img src={DIAMOND_CUTZ_LOGO} alt="Diamond Cutz" className="h-14 w-auto object-contain" />
              <div>
                <p className="font-bold text-sm" style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Lora', serif" }}>Diamond Cutz</p>
                <p className="text-xs" style={{ color: "oklch(0.45 0.03 255)", fontFamily: "'Nunito Sans', sans-serif" }}>Lawn & Landscaping</p>
              </div>
            </div>
            <div className="w-px h-10 hidden sm:block" style={{ backgroundColor: "oklch(0.80 0.03 85)" }} />
            <div className="flex items-center gap-3">
              <img src={DIAMOND_GIRL_LOGO} alt="A Diamond Girl" className="h-14 w-auto object-contain" />
              <div>
                <p className="font-bold text-sm" style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Lora', serif" }}>A Diamond Girl</p>
                <p className="text-xs" style={{ color: "oklch(0.45 0.03 255)", fontFamily: "'Nunito Sans', sans-serif" }}>Home Cleaning Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs + Grid */}
      <section className="py-14">
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
                    backgroundColor: isActive ? "oklch(0.45 0.14 145)" : "white",
                    color: isActive ? "white" : "oklch(0.35 0.04 255)",
                    border: `2px solid ${isActive ? "oklch(0.45 0.14 145)" : "oklch(0.88 0.02 255)"}`,
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-base" style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Lora', serif" }}>{item.label}</h3>
                      <p className="text-xs" style={{ color: "oklch(0.50 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.location}</p>
                    </div>
                    <span
                      className="text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide"
                      style={{
                        backgroundColor: item.category === "lawn" ? "oklch(0.35 0.10 145 / 0.1)" : "oklch(0.73 0.11 65 / 0.15)",
                        color: item.category === "lawn" ? "oklch(0.45 0.14 145)" : "oklch(0.73 0.11 65)",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      {item.category === "lawn" ? "Lawn" : "Cleaning"}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide mb-1.5 text-center" style={{ color: "oklch(0.50 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>Before</p>
                      <img
                        src={item.beforeSrc}
                        alt={`Before - ${item.label}`}
                        className="w-full h-40 object-cover rounded-xl"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide mb-1.5 text-center" style={{ color: "oklch(0.50 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>After</p>
                      <img
                        src={item.afterSrc}
                        alt={`After - ${item.label}`}
                        className="w-full h-40 object-cover rounded-xl"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ backgroundColor: "oklch(0.22 0.08 255)" }}>
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>
            Ready for Your Own Diamond Transformation?
          </h2>
          <p className="text-base mb-6" style={{ color: "oklch(0.82 0.03 255)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Call or text us today for a free estimate. Nassau County's trusted family home services team.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
            <a href={CONTACT.mike.tel} className="btn-brand-primary px-6 py-3 text-sm justify-center">
              <Phone className="w-4 h-4" />
              Call Lawn: {CONTACT.mike.display}
            </a>
            <a href={CONTACT.mike.sms} className="btn-brand-outline-light px-6 py-3 text-sm justify-center">
              <MessageCircle className="w-4 h-4" />
              Text Lawn
            </a>
            <a href={CONTACT.lydine.tel} className="btn-brand-primary px-6 py-3 text-sm justify-center">
              <Phone className="w-4 h-4" />
              Call Cleaning: {CONTACT.lydine.display}
            </a>
            <a href={CONTACT.lydine.sms} className="btn-brand-outline-light px-6 py-3 text-sm justify-center">
              <MessageCircle className="w-4 h-4" />
              Text Cleaning
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
