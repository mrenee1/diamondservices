/* ============================================================
   Services Page — Tributary Lawn & Landscape
   Design: "Tributary Roots" — detailed service cards with pricing
   ============================================================ */

import { Link } from "wouter";
import {
  Scissors, Leaf, Sprout, Droplets, Sun, Layers,
  Flower2, Shovel, Lightbulb, ArrowRight, CheckCircle2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GARDEN_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663246754363/VwfaAMsNXt8Vvu7ShFAiqw/garden-design-fNaQRmt8Z5byScefT7HNRr.webp";

const services = [
  {
    icon: Scissors,
    title: "Lawn Mowing & Edging",
    description: "Our signature mowing service includes precision cutting at the ideal height for Florida grass varieties, crisp edging along all borders and driveways, trimming around obstacles, and a thorough blow-off of all hard surfaces.",
    includes: ["Mow, edge, trim & blow", "Proper cutting height for St. Augustine & Zoysia", "Driveway & sidewalk edging", "Debris cleanup"],
    frequency: "Weekly or Bi-Weekly",
    badge: "Most Popular",
    color: "oklch(0.35 0.10 145)",
  },
  {
    icon: Leaf,
    title: "Landscape Design & Installation",
    description: "Transform your outdoor space with a custom Florida-friendly landscape design. We create beautiful, low-maintenance landscapes using native plants, tropical accents, and thoughtful design principles suited to the Tributary community aesthetic.",
    includes: ["Custom design consultation", "Plant selection & sourcing", "Full installation", "Post-install care instructions"],
    frequency: "One-Time / Seasonal",
    badge: null,
    color: "oklch(0.35 0.10 145)",
  },
  {
    icon: Sprout,
    title: "Fertilization & Weed Control",
    description: "A healthy lawn starts with the right nutrition. Our seasonal fertilization programs are specifically formulated for North Florida's climate and soil conditions, paired with targeted pre- and post-emergent weed control.",
    includes: ["Soil analysis", "Seasonal fertilization program", "Pre & post-emergent weed control", "Lawn health monitoring"],
    frequency: "Seasonal Program",
    badge: null,
    color: "oklch(0.35 0.10 145)",
  },
  {
    icon: Layers,
    title: "Sod Installation",
    description: "Get the lush, instant lawn you deserve with professional sod installation. We source premium St. Augustine, Zoysia, and Bahia sod and handle everything from ground prep to final installation and watering instructions.",
    includes: ["Site preparation & grading", "Premium sod sourcing", "Professional installation", "Watering & care instructions"],
    frequency: "One-Time",
    badge: null,
    color: "oklch(0.35 0.10 145)",
  },
  {
    icon: Droplets,
    title: "Irrigation Services",
    description: "Protect your lawn investment with a properly functioning irrigation system. We install, repair, and maintain sprinkler systems to ensure even coverage, water efficiency, and compliance with Nassau County watering restrictions.",
    includes: ["System installation & design", "Head repair & replacement", "Controller programming", "Seasonal adjustments"],
    frequency: "As Needed",
    badge: null,
    color: "oklch(0.35 0.10 145)",
  },
  {
    icon: Sun,
    title: "Seasonal Clean-Up",
    description: "Keep your property looking its best year-round with our comprehensive seasonal clean-up services. We handle leaf removal, bed cleanup, mulch refreshing, and preparation for the next growing season.",
    includes: ["Leaf & debris removal", "Bed edging & cleanup", "Fresh mulch installation", "Plant trimming & shaping"],
    frequency: "Spring & Fall",
    badge: null,
    color: "oklch(0.35 0.10 145)",
  },
  {
    icon: Flower2,
    title: "Shrub & Hedge Trimming",
    description: "Maintain the polished look of your landscape with professional shrub and hedge trimming. We shape and size all ornamental plants to keep your property looking neat and well-maintained.",
    includes: ["Ornamental shrub shaping", "Hedge trimming & sizing", "Palm frond removal", "Debris cleanup"],
    frequency: "Monthly or As Needed",
    badge: null,
    color: "oklch(0.35 0.10 145)",
  },
  {
    icon: Shovel,
    title: "Mulching & Bed Care",
    description: "Fresh mulch enhances curb appeal, retains moisture, and suppresses weeds. We install premium hardwood or pine bark mulch in all landscape beds, along with bed edging and plant care.",
    includes: ["Bed edging & prep", "Premium mulch installation", "Weed barrier installation", "Plant health check"],
    frequency: "Bi-Annual",
    badge: null,
    color: "oklch(0.35 0.10 145)",
  },
  {
    icon: Lightbulb,
    title: "Landscape Lighting",
    description: "Extend the beauty of your landscape into the evening with low-voltage landscape lighting. We design and install lighting systems that highlight your home's best features and improve safety.",
    includes: ["Custom lighting design", "Low-voltage LED installation", "Timer & smart control setup", "Annual maintenance"],
    frequency: "One-Time / Annual",
    badge: null,
    color: "oklch(0.35 0.10 145)",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(0.97 0.02 90)" }}>
      <Navbar />

      {/* Page Hero */}
      <section
        className="relative pt-28 pb-16 overflow-hidden"
        style={{ backgroundColor: "oklch(0.25 0.10 145)" }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${GARDEN_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, oklch(0.25 0.10 145 / 0.9), oklch(0.25 0.10 145 / 0.95))" }} />
        <div className="container relative z-10 text-center">
          <span
            className="inline-block text-xs font-body font-700 uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{
              backgroundColor: "oklch(0.72 0.15 75 / 0.2)",
              color: "oklch(0.82 0.12 80)",
              fontFamily: "'Nunito Sans', sans-serif",
            }}
          >
            Complete Lawn & Landscape Care
          </span>
          <h1
            className="text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Our Services
          </h1>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "oklch(0.85 0.04 145)", fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Everything your Tributary lawn and landscape needs — handled by local professionals who care about your community.
          </p>
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
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: "oklch(0.35 0.10 145 / 0.1)" }}
                      >
                        <Icon className="w-6 h-6" style={{ color: "oklch(0.35 0.10 145)" }} />
                      </div>
                      {service.badge && (
                        <span
                          className="text-xs font-body font-700 px-2.5 py-0.5 rounded-full uppercase tracking-wide"
                          style={{
                            backgroundColor: "oklch(0.72 0.15 75)",
                            color: "oklch(0.18 0.01 60)",
                            fontFamily: "'Nunito Sans', sans-serif",
                          }}
                        >
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "oklch(0.45 0.03 80)", fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {service.includes.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.35 0.10 145)" }} />
                          <span
                            className="text-xs font-600"
                            style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div
                      className="inline-flex items-center gap-1.5 text-xs font-700 px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: "oklch(0.35 0.10 145 / 0.08)",
                        color: "oklch(0.35 0.10 145)",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      {service.frequency}
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <Link
                      href="/book"
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md font-body font-700 text-sm transition-all duration-200 hover:shadow-md"
                      style={{
                        backgroundColor: "oklch(0.35 0.10 145)",
                        color: "oklch(0.97 0.02 90)",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      Book This Service
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.93 0.03 85)" }}>
        <div className="container text-center">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}
          >
            Not Sure What You Need?
          </h2>
          <p
            className="text-lg mb-8 max-w-lg mx-auto"
            style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Contact us for a free consultation and estimate. We'll assess your lawn and recommend the best services for your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-body font-700 text-base transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              style={{
                backgroundColor: "oklch(0.35 0.10 145)",
                color: "oklch(0.97 0.02 90)",
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              Book a Free Estimate
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+19045550123"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-body font-700 text-base transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: "white",
                color: "oklch(0.35 0.10 145)",
                border: "1px solid oklch(0.35 0.10 145)",
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              Call (904) 555-0123
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
