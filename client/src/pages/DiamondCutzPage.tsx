/* ============================================================
   Diamond Cutz Page — Lawn & Landscaping
   Phone: 856-371-3971 | Owner: Mike Petrutz
   Service area: Yulee, Amelia Island & surrounding areas
   ============================================================ */

import { Link } from "wouter";
import {
  Scissors, Leaf, Sprout, Droplets, Layers,
  Flower2, Shovel, Wrench, ArrowRight, CheckCircle2, Phone, Mail
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DIAMOND_CUTZ_LOGO = "/manus-storage/diamond-cutz-logo_7523a9b6.png";
const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663246754363/VwfaAMsNXt8Vvu7ShFAiqw/diamond-cutz-stadium-hero-4U3PSApXsKwdBUGn4mRwdt.webp";

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
    <div className="min-h-screen" style={{ backgroundColor: "oklch(0.97 0.01 255)" }}>
      <Navbar />

      {/* HERO IMAGE — full width, matching home page format */}
      <section className="w-full pt-16" style={{ backgroundColor: "oklch(0.18 0.08 145)" }}>
        <img
          src={HERO_IMAGE}
          alt="Diamond Cutz Lawn & Landscaping — professional lawn care in Northeast Florida"
          className="w-full block"
          style={{ maxHeight: "640px", objectFit: "cover", objectPosition: "center top" }}
        />
      </section>

      {/* HERO TEXT BAND — green bar below image, matching home page structure */}
      <section style={{ backgroundColor: "oklch(0.22 0.10 145)" }}>
        <div className="container py-10">
          <div className="flex flex-col items-center text-center">
            <img
              src={DIAMOND_CUTZ_LOGO}
              alt="Diamond Cutz Lawn & Landscaping"
              className="h-28 md:h-36 w-auto object-contain mb-5 drop-shadow-2xl"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>
              Lawn & Landscaping Services
            </h1>
            <p className="text-lg md:text-xl font-semibold mb-4" style={{ color: "oklch(0.85 0.13 80)", fontFamily: "'Lora', serif", fontStyle: "italic" }}>
              "Crisp Cuts. Healthy Lawns. Diamond Standard."
            </p>
            <p className="text-base max-w-2xl mb-6" style={{ color: "oklch(0.92 0.03 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Professional outdoor services for homeowners and businesses throughout Yulee, Amelia Island, and surrounding Northeast Florida communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+18563713971"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-base transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                style={{ backgroundColor: "oklch(0.75 0.16 75)", color: "oklch(0.18 0.02 255)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <Phone className="w-4 h-4" />
                Call or Text Mike: 856-371-3971
              </a>
              <a
                href="mailto:diamondhomeservicesofflorida@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: "oklch(1 0 0 / 0.12)", color: "white", border: "1px solid oklch(1 0 0 / 0.3)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <Mail className="w-4 h-4" />
                diamondhomeservicesofflorida@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "oklch(0.35 0.10 145 / 0.1)" }}>
                        <Icon className="w-6 h-6" style={{ color: "oklch(0.45 0.14 145)" }} />
                      </div>
                      {service.badge && (
                        <span
                          className="text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide"
                          style={{ backgroundColor: "oklch(0.75 0.16 75)", color: "oklch(0.18 0.02 255)", fontFamily: "'Nunito Sans', sans-serif" }}
                        >
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Lora', serif" }}>{service.title}</h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.45 0.03 255)", fontFamily: "'Nunito Sans', sans-serif" }}>{service.description}</p>
                    <div className="space-y-2 mb-4">
                      {service.includes.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.45 0.14 145)" }} />
                          <span className="text-xs font-semibold" style={{ color: "oklch(0.35 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: "oklch(0.35 0.10 145 / 0.08)", color: "oklch(0.45 0.14 145)", fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {service.frequency}
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <a
                      href="tel:+18563713971"
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md font-bold text-sm transition-all duration-200 hover:shadow-md"
                      style={{ backgroundColor: "oklch(0.45 0.14 145)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
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

      {/* Business CTA */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.93 0.02 255)" }}>
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Lora', serif" }}>
            Not Sure What You Need?
          </h2>
          <p className="text-lg mb-8 max-w-lg mx-auto" style={{ color: "oklch(0.35 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Call or text us for a free estimate. We'll assess your property and recommend the best services for your budget and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+18563713971"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-base transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: "oklch(0.45 0.14 145)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <Phone className="w-4 h-4" />
              Call or Text: 856-371-3971
            </a>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "white", color: "oklch(0.45 0.14 145)", border: "1px solid oklch(0.45 0.14 145)", fontFamily: "'Nunito Sans', sans-serif" }}
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
