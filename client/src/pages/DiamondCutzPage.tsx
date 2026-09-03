/* ============================================================
   Diamond Cutz Page — Lawn & Landscaping
   Phone: 856-371-3971 | Owner: Mike Petrutz
   Service area: Yulee, Amelia Island & surrounding areas
   ============================================================ */

import { Link } from "wouter";
import {
  Scissors, Leaf, Sprout, Droplets, Layers,
  Flower2, Shovel, Wrench, ArrowRight, CheckCircle2, Phone, MessageCircle, Mail
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DiamondCutzHero } from "@/components/ServiceHeroes";
import { CONTACT } from "@/lib/contact";
import { handleImageError } from "@/lib/imageFallback";
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
    title: "Seasonal Fertilization",
    description: "Seasonal fertilization programs formulated for North Florida's climate and soil conditions.",
    includes: ["Soil analysis", "Seasonal fertilization program", "Custom treatment schedule", "Lawn health monitoring"],
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
    description: "Fresh mulch transforms the look of your landscape while protecting plant roots and retaining moisture. We refresh beds, define borders, and keep everything looking polished.",
    includes: ["Bed edging & definition", "Old mulch removal", "Fresh mulch installation", "Root moisture retention"],
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

      <DiamondCutzHero />

      {/* Services Grid */}
      <section id="services" className="scroll-mt-20 py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="service-card-brand service-card-brand--cutz service-card-brand--no-hover bg-white rounded-2xl shadow-sm flex flex-col"
                >
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "oklch(0.35 0.10 145 / 0.1)" }}>
                        <Icon className="w-6 h-6" style={{ color: "oklch(0.45 0.14 145)" }} />
                      </div>
                      {service.badge && (
                        <span
                          className="text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide"
                          style={{ backgroundColor: "oklch(0.73 0.11 65)", color: "oklch(0.18 0.02 255)", fontFamily: "'Nunito Sans', sans-serif" }}
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
                    <div className="flex gap-2">
                      <a href={CONTACT.mike.tel} className="btn-brand-primary flex-1 py-2.5 text-sm justify-center">
                        <Phone className="w-4 h-4" />
                        Call
                      </a>
                      <a href={CONTACT.mike.sms} className="btn-brand-primary flex-1 py-2.5 text-sm justify-center">
                        <MessageCircle className="w-4 h-4" />
                        Text
                      </a>
                    </div>
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
            <a href={CONTACT.mike.tel} className="btn-brand-primary px-7 py-3.5 text-base justify-center">
              <Phone className="w-4 h-4" />
              Call: {CONTACT.mike.display}
            </a>
            <a href={CONTACT.mike.sms} className="btn-brand-outline px-7 py-3.5 text-base justify-center">
              <MessageCircle className="w-4 h-4" />
              Text: {CONTACT.mike.display}
            </a>
            <Link href="/about" className="btn-brand-outline px-7 py-3.5 text-base">
              Learn About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
