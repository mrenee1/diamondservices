/* ============================================================
   Diamond Cutz Page — Lawn & Landscaping
   Palette: Cutz greens+earth (#0E3A1C, #185E2C, #2E8B3D, #7FB342, #6B4A28, #A87A4B)
   Phone: 856-371-3971 | Owner: Mike Petrutz
   Service area: Nassau County, rooted in Tributary community
   ============================================================ */

import { Link } from "wouter";
import {
  Scissors, Leaf, Sprout, Droplets, Layers,
  Flower2, Shovel, Wrench, ArrowRight, CheckCircle2, Phone, Mail
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DIAMOND_CUTZ_LOGO = "/manus-storage/diamond-cutz-logo_7523a9b6.png";
const HERO_IMAGE = "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=80";

// Cutz palette hex tokens
const GREEN_900 = "#0E3A1C";
const GREEN_700 = "#185E2C";
const GREEN_500 = "#2E8B3D";
const GREEN_300 = "#7FB342";
const EARTH_700 = "#6B4A28";
const EARTH_500 = "#A87A4B";
const GOLD_500  = "#C8A24A";
const NAVY_900  = "#081830";
const WHITE     = "#FFFFFF";
const OFFWHITE  = "#F5F3EE";
const CHARCOAL  = "#1A1F2E";

const services = [
  {
    icon: Scissors,
    title: "Lawn Mowing & Edging",
    description: "Precision cutting at the ideal height for Florida grass varieties, crisp edging along all borders and driveways, trimming around obstacles, and a thorough blow-off of all hard surfaces.",
    includes: ["Mow, edge, trim & blow", "St. Augustine & Zoysia specialists", "Driveway & sidewalk edging", "Debris cleanup"],
    frequency: "Weekly or Bi-Weekly",
    badge: "Most Popular",
  },
  {
    icon: Leaf,
    title: "Landscape Design & Installation",
    description: "Transform your outdoor space with a custom Florida-friendly landscape design using native plants, tropical accents, and thoughtful design principles suited to Northeast Florida.",
    includes: ["Custom design consultation", "Plant selection & sourcing", "Full installation", "Post-install care instructions"],
    frequency: "One-Time / Seasonal",
    badge: null,
  },
  {
    icon: Sprout,
    title: "Fertilization & Weed Control",
    description: "Seasonal fertilization programs formulated for North Florida's climate and soil conditions, paired with targeted pre- and post-emergent weed control.",
    includes: ["Soil analysis", "Seasonal fertilization program", "Pre & post-emergent weed control", "Lawn health monitoring"],
    frequency: "Seasonal Program",
    badge: null,
  },
  {
    icon: Layers,
    title: "Sod Installation",
    description: "Get the lush, instant lawn you deserve with professional sod installation. We source premium St. Augustine, Zoysia, and Bahia sod and handle everything from ground prep to final installation.",
    includes: ["Site preparation & grading", "Premium sod sourcing", "Professional installation", "Watering & care instructions"],
    frequency: "One-Time",
    badge: null,
  },
  {
    icon: Droplets,
    title: "Irrigation Services",
    description: "Proper watering is essential in Florida's climate. We install, repair, and adjust irrigation systems to ensure efficient, even coverage without waste.",
    includes: ["System installation & repair", "Head adjustment & replacement", "Timer programming", "Leak detection"],
    frequency: "As Needed",
    badge: null,
  },
  {
    icon: Flower2,
    title: "Shrub & Hedge Trimming",
    description: "Keep your shrubs, hedges, and ornamental plants looking sharp and healthy with professional trimming and shaping tailored to each plant's natural growth pattern.",
    includes: ["Precise shaping & trimming", "Overgrowth removal", "Plant health assessment", "Debris cleanup"],
    frequency: "Monthly / Seasonal",
    badge: null,
  },
  {
    icon: Shovel,
    title: "Mulching & Bed Care",
    description: "Fresh mulch transforms the look of your landscape while protecting plant roots and suppressing weeds. We refresh beds, define borders, and keep everything looking polished.",
    includes: ["Bed edging & definition", "Old mulch removal", "Fresh mulch installation", "Weed barrier placement"],
    frequency: "Seasonal",
    badge: null,
  },
  {
    icon: Wrench,
    title: "Seasonal Clean-Up",
    description: "After storm season or heading into spring, a thorough clean-up makes all the difference. We remove debris, trim back overgrowth, and get your yard ready for the season ahead.",
    includes: ["Debris & leaf removal", "Storm damage cleanup", "Overgrowth trimming", "Haul-away available"],
    frequency: "Seasonal",
    badge: null,
  },
];

export default function DiamondCutzPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: OFFWHITE }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{ backgroundColor: GREEN_900 }}
      >
        {/* Background image overlay */}
        <div className="absolute inset-0 opacity-20">
          <img src={HERO_IMAGE} alt="Lawn care" className="w-full h-full object-cover" />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${GREEN_900}EB, ${GREEN_900}F8)`,
          }}
        />

        {/* Diagonal stripe pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(135deg, ${GREEN_500} 0px, ${GREEN_500} 1px, transparent 1px, transparent 40px)`,
          }}
        />

        <div className="container relative z-10 text-center">
          <img
            src={DIAMOND_CUTZ_LOGO}
            alt="Diamond Cutz"
            className="h-28 md:h-36 w-auto object-contain mx-auto mb-6 drop-shadow-2xl"
          />
          <h1
            className="text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Lawn & Landscaping Services
          </h1>
          <p
            className="text-lg max-w-xl mx-auto mb-8"
            style={{ color: "rgba(255,255,255,0.82)", fontFamily: "'Manrope', sans-serif" }}
          >
            Professional outdoor services for homeowners and businesses throughout Nassau County — rooted right here in the Tributary community of Yulee, FL.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+18563713971"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-bold text-base transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
              style={{
                backgroundColor: GOLD_500,
                color: NAVY_900,
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.06em",
              }}
            >
              <Phone className="w-4 h-4" />
              Call or Text: 856-371-3971
            </a>
            <a
              href="mailto:diamondhomeservicesofflorida@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: "rgba(255,255,255,0.10)",
                color: WHITE,
                border: "1px solid rgba(255,255,255,0.30)",
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Gold divider ── */}
      <div style={{ background: `linear-gradient(90deg, ${GOLD_500}, #E8D08A, ${GOLD_500})`, height: "4px" }} />

      {/* ── SERVICES GRID ── */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1"
              style={{
                backgroundColor: `${GREEN_500}18`,
                color: GREEN_500,
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.15em",
              }}
            >
              Our Services
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
            >
              Everything Your Lawn Needs
            </h2>
            <p
              className="text-base mt-3 max-w-xl mx-auto"
              style={{ color: "#4A5568", fontFamily: "'Manrope', sans-serif" }}
            >
              From weekly maintenance to full landscape transformations — Mike handles it all with precision and pride.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  style={{ border: `1px solid #E2DDD4` }}
                >
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-12 h-12 flex items-center justify-center"
                        style={{ backgroundColor: `${GREEN_500}18` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: GREEN_500 }} />
                      </div>
                      {service.badge && (
                        <span
                          className="text-xs font-bold px-2.5 py-0.5 uppercase tracking-wide"
                          style={{
                            backgroundColor: GOLD_500,
                            color: NAVY_900,
                            fontFamily: "'Oswald', sans-serif",
                          }}
                        >
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "#4A5568", fontFamily: "'Manrope', sans-serif" }}
                    >
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {service.includes.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle2
                            className="w-4 h-4 flex-shrink-0"
                            style={{ color: GREEN_500 }}
                          />
                          <span
                            className="text-xs font-semibold"
                            style={{ color: "#374151", fontFamily: "'Manrope', sans-serif" }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1"
                      style={{
                        backgroundColor: `${EARTH_500}18`,
                        color: EARTH_700,
                        fontFamily: "'Oswald', sans-serif",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {service.frequency}
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <a
                      href="tel:+18563713971"
                      className="w-full flex items-center justify-center gap-2 py-2.5 font-bold text-sm transition-all duration-200 hover:shadow-md"
                      style={{
                        backgroundColor: GREEN_500,
                        color: WHITE,
                        fontFamily: "'Oswald', sans-serif",
                        letterSpacing: "0.06em",
                      }}
                    >
                      <Phone className="w-4 h-4" />
                      Call for a Quote
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section
        className="py-16"
        style={{
          background: `linear-gradient(135deg, ${GREEN_900} 0%, ${GREEN_700} 100%)`,
        }}
      >
        <div className="container text-center">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1"
            style={{
              backgroundColor: `${GOLD_500}22`,
              color: GOLD_500,
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: "0.15em",
            }}
          >
            Free Estimates
          </span>
          <h2
            className="text-4xl font-bold mb-4 text-white"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Not Sure What You Need?
          </h2>
          <p
            className="text-lg mb-8 max-w-lg mx-auto"
            style={{ color: "rgba(255,255,255,0.78)", fontFamily: "'Manrope', sans-serif" }}
          >
            Call or text Mike for a free estimate. He'll assess your property and recommend the best services for your budget and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+18563713971"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-bold text-base transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              style={{
                backgroundColor: GOLD_500,
                color: NAVY_900,
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.06em",
              }}
            >
              <Phone className="w-4 h-4" />
              Call or Text: 856-371-3971
            </a>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: "rgba(255,255,255,0.12)",
                color: WHITE,
                border: "1px solid rgba(255,255,255,0.30)",
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              Learn About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
