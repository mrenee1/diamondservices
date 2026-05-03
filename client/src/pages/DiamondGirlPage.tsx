/* ============================================================
   A Diamond Girl Page — Home Cleaning Service
   Phone: 856-981-0930
   Employment contact: email Lidone
   ============================================================ */

import { Link } from "wouter";
import {
  Sparkles, Home, Star, Shield, Clock, Heart,
  CheckCircle2, Phone, Mail, ArrowRight, Briefcase
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DIAMOND_GIRL_LOGO = "/manus-storage/diamond-girl-logo_26e7435d.png";
const HERO_IMAGE = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80";

const services = [
  {
    icon: Home,
    title: "Standard Home Cleaning",
    description: "Our signature cleaning covers all the essentials — kitchens, bathrooms, living areas, and bedrooms. Dusting, vacuuming, mopping, and surface sanitizing throughout your home.",
    includes: ["Kitchen surfaces & appliances", "Bathroom scrub & sanitize", "Vacuuming & mopping", "Dusting all surfaces"],
    frequency: "Weekly or Bi-Weekly",
    badge: "Most Popular",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "A thorough top-to-bottom clean that reaches every corner. Perfect for move-ins, move-outs, post-renovation, or when your home needs a serious reset.",
    includes: ["Inside appliances & cabinets", "Baseboards & window sills", "Behind & under furniture", "Full bathroom deep scrub"],
    frequency: "One-Time / Seasonal",
    badge: null,
  },
  {
    icon: Star,
    title: "Move-In / Move-Out Cleaning",
    description: "Starting fresh in a new home or leaving one spotless for the next residents. We handle the full clean so you can focus on the move.",
    includes: ["Full property cleaning", "Inside all cabinets & drawers", "Appliance cleaning", "Window cleaning"],
    frequency: "One-Time",
    badge: null,
  },
  {
    icon: Clock,
    title: "Recurring Maintenance Cleans",
    description: "Keep your home consistently clean with a scheduled maintenance plan. We work around your schedule — weekly, bi-weekly, or monthly.",
    includes: ["Customized cleaning checklist", "Same trusted cleaner", "Flexible scheduling", "Discounted recurring rates"],
    frequency: "Weekly / Bi-Weekly / Monthly",
    badge: null,
  },
  {
    icon: Shield,
    title: "Post-Construction Cleaning",
    description: "Construction and renovation leave behind dust, debris, and residue that requires specialized cleaning. We get your newly renovated space truly ready to enjoy.",
    includes: ["Dust & debris removal", "Surface & floor cleaning", "Window & fixture cleaning", "Final polish & inspection"],
    frequency: "One-Time",
    badge: null,
  },
  {
    icon: Heart,
    title: "Special Occasion Cleaning",
    description: "Hosting a party, family gathering, or special event? We'll get your home guest-ready before the occasion and clean up after — so you can enjoy every moment.",
    includes: ["Pre-event deep clean", "Post-event cleanup", "Kitchen & bathroom focus", "Quick turnaround available"],
    frequency: "As Needed",
    badge: null,
  },
];

export default function DiamondGirlPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(0.97 0.02 90)" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: "oklch(0.28 0.12 340)" }}>
        <div className="absolute inset-0 opacity-20">
          <img src={HERO_IMAGE} alt="Home cleaning" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, oklch(0.28 0.12 340 / 0.92), oklch(0.28 0.12 340 / 0.97))" }} />
        <div className="container relative z-10 text-center">
          <img src={DIAMOND_GIRL_LOGO} alt="A Diamond Girl Home Cleaning Service" className="h-28 md:h-36 w-auto object-contain mx-auto mb-6 drop-shadow-2xl" />
          <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Home Cleaning Services
          </h1>
          <p className="text-lg max-w-xl mx-auto mb-6" style={{ color: "oklch(0.90 0.04 340)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Reliable, thorough, and trustworthy home cleaning for homeowners throughout Yulee, Amelia Island, and surrounding Northeast Florida communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+18569810930"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-base transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
              style={{ backgroundColor: "oklch(0.72 0.15 75)", color: "oklch(0.18 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <Phone className="w-4 h-4" />
              Call or Text: 856-981-0930
            </a>
            <a
              href="mailto:mpetrutz@yahoo.com"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "oklch(1 0 0 / 0.12)", color: "white", border: "1px solid oklch(1 0 0 / 0.3)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <Mail className="w-4 h-4" />
              mpetrutz@yahoo.com
            </a>
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
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "oklch(0.45 0.15 340 / 0.1)" }}>
                        <Icon className="w-6 h-6" style={{ color: "oklch(0.45 0.15 340)" }} />
                      </div>
                      {service.badge && (
                        <span
                          className="text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide"
                          style={{ backgroundColor: "oklch(0.72 0.15 75)", color: "oklch(0.18 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
                        >
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}>{service.title}</h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.45 0.03 80)", fontFamily: "'Nunito Sans', sans-serif" }}>{service.description}</p>
                    <div className="space-y-2 mb-4">
                      {service.includes.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.45 0.15 340)" }} />
                          <span className="text-xs font-semibold" style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: "oklch(0.45 0.15 340 / 0.08)", color: "oklch(0.45 0.15 340)", fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {service.frequency}
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <a
                      href="tel:+18569810930"
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md font-bold text-sm transition-all duration-200 hover:shadow-md"
                      style={{ backgroundColor: "oklch(0.45 0.15 340)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
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

      {/* Employment Callout */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.28 0.12 340)" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "oklch(0.72 0.15 75)" }}>
              <Briefcase className="w-8 h-8" style={{ color: "oklch(0.18 0.01 60)" }} />
            </div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full" style={{ backgroundColor: "oklch(0.72 0.15 75 / 0.2)", color: "oklch(0.88 0.12 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Now Hiring
            </span>
            <h3 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>
              Interested in Joining Our Team?
            </h3>
            <p className="text-base mb-6" style={{ color: "oklch(0.88 0.04 340)", fontFamily: "'Nunito Sans', sans-serif" }}>
              We're always looking for reliable, hardworking people to join the A Diamond Girl family. If you're interested in working with us, reach out to Lidone directly by email.
            </p>
            <a
              href="mailto:lidone@diamondgirl.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md font-bold text-base transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
              style={{ backgroundColor: "oklch(0.72 0.15 75)", color: "oklch(0.18 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <Mail className="w-4 h-4" />
              Email Lidone to Apply
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.93 0.03 85)" }}>
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}>
            Ready for a Cleaner Home?
          </h2>
          <p className="text-lg mb-8 max-w-lg mx-auto" style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Call or text us to schedule your first cleaning. Free estimates always available.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+18569810930"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-base transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: "oklch(0.45 0.15 340)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <Phone className="w-4 h-4" />
              Call or Text: 856-981-0930
            </a>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "white", color: "oklch(0.45 0.15 340)", border: "1px solid oklch(0.45 0.15 340)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
