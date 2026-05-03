/* ============================================================
   A Diamond Girl Page — Home Cleaning Service
   Owner: Lidone | Phone: 856-981-0930
   Deep cleaning focus — catchy diamond-themed phrases
   Employment contact: email Lidone
   ============================================================ */

import { Link } from "wouter";
import {
  Sparkles, Home, Star, Shield, Clock, Heart,
  CheckCircle2, Phone, Mail, ArrowRight, Briefcase, Gem, Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DIAMOND_GIRL_LOGO = "/manus-storage/diamond-girl-logo_26e7435d.png";
const HERO_IMAGE = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80";

const services = [
  {
    icon: Sparkles,
    title: "The Diamond Deep Clean",
    tagline: "When good enough isn't good enough.",
    description: "Our signature service. A thorough, top-to-bottom deep clean that reaches every surface, every corner, every forgotten spot. We don't just clean — we restore your home to its absolute best.",
    includes: ["Inside appliances & cabinets", "Baseboards & window sills", "Behind & under furniture", "Full bathroom deep scrub", "Ceiling fans & light fixtures", "Detailed kitchen degreasing"],
    frequency: "One-Time / Seasonal",
    badge: "Signature Service",
  },
  {
    icon: Home,
    title: "Recurring Diamond Shine",
    tagline: "Keep your home sparkling, always.",
    description: "Maintain that just-deep-cleaned feeling all year long. Lidone works around your schedule to keep your home consistently spotless — so you never have to worry about it.",
    includes: ["Full kitchen & bathroom cleaning", "Vacuuming & mopping all floors", "Dusting all surfaces & décor", "Sanitizing high-touch areas", "Customized checklist for your home"],
    frequency: "Weekly / Bi-Weekly / Monthly",
    badge: "Most Popular",
  },
  {
    icon: Star,
    title: "Move-In / Move-Out Clean",
    tagline: "Start fresh. Leave spotless.",
    description: "Moving is stressful enough. Let Lidone handle the clean so you can focus on the move. We leave every inch of the property sparkling — whether you're arriving or departing.",
    includes: ["Full property deep clean", "Inside all cabinets & drawers", "All appliances cleaned inside & out", "Bathrooms scrubbed & sanitized", "Windows & window sills"],
    frequency: "One-Time",
    badge: null,
  },
  {
    icon: Gem,
    title: "Diamond-Level Kitchen Clean",
    tagline: "The heart of your home, treated like a gem.",
    description: "A dedicated, intensive kitchen cleaning service. We degrease, sanitize, and polish every surface until your kitchen truly shines. From the stovetop to the backsplash to inside the fridge.",
    includes: ["Full appliance degreasing & cleaning", "Cabinet fronts & hardware", "Backsplash & countertop polish", "Sink & faucet deep scrub", "Inside refrigerator & oven"],
    frequency: "One-Time / Add-On",
    badge: null,
  },
  {
    icon: Shield,
    title: "Post-Construction Clean",
    tagline: "Built beautiful. Now let's make it spotless.",
    description: "Construction and renovation leave behind dust, debris, and residue that requires specialized cleaning. Lidone gets your newly renovated space truly ready to enjoy.",
    includes: ["Construction dust removal", "Surface & floor deep cleaning", "Window & fixture cleaning", "Debris removal", "Final polish & inspection"],
    frequency: "One-Time",
    badge: null,
  },
  {
    icon: Zap,
    title: "Special Occasion Shine",
    tagline: "Because your guests deserve diamond clean.",
    description: "Hosting a gathering, holiday party, or special event? We'll get your home guest-ready before the occasion and clean up after — so you can enjoy every moment without lifting a finger.",
    includes: ["Pre-event deep clean", "Post-event cleanup", "Kitchen & bathroom focus", "Quick turnaround available", "Customized to your event needs"],
    frequency: "As Needed",
    badge: null,
  },
];

const catchphrases = [
  { text: "Diamond Shine, Every Time", icon: Gem },
  { text: "We Don't Just Clean — We Transform", icon: Sparkles },
  { text: "Your Home Deserves Diamond-Level Care", icon: Star },
  { text: "Deep Clean. Spotless. Guaranteed.", icon: Shield },
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
          <h1 className="text-5xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>
            Diamond-Level Home Cleaning
          </h1>
          <p className="text-xl font-semibold mb-4" style={{ color: "oklch(0.82 0.12 80)", fontFamily: "'Lora', serif", fontStyle: "italic" }}>
            "We Don't Just Clean — We Transform."
          </p>
          <p className="text-base max-w-xl mx-auto mb-6" style={{ color: "oklch(0.90 0.04 340)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Lidone delivers a deep, thorough clean that goes far beyond the surface. Serving Nassau County homeowners and businesses with pride, right from the Tributary community.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+18569810930"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-base transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
              style={{ backgroundColor: "oklch(0.72 0.15 75)", color: "oklch(0.18 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <Phone className="w-4 h-4" />
              Call or Text Lidone: 856-981-0930
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

      {/* Catchphrases Banner */}
      <section className="py-8 overflow-hidden" style={{ backgroundColor: "oklch(0.72 0.15 75)" }}>
        <div className="container">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {catchphrases.map((phrase) => {
              const Icon = phrase.icon;
              return (
                <div key={phrase.text} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.28 0.12 340)" }} />
                  <span className="text-sm font-bold uppercase tracking-wide" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    {phrase.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full" style={{ backgroundColor: "oklch(0.45 0.15 340 / 0.1)", color: "oklch(0.45 0.15 340)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Our Services
            </span>
            <h2 className="text-4xl font-bold" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}>
              The Diamond Clean Difference
            </h2>
            <p className="text-base mt-3 max-w-lg mx-auto" style={{ color: "oklch(0.40 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Every service Lidone offers is built around one standard: diamond-level results. No shortcuts. No skipped corners. Just a spotlessly clean home.
            </p>
          </div>

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
                    <h3 className="text-xl font-bold mb-1" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}>{service.title}</h3>
                    <p className="text-xs font-semibold italic mb-3" style={{ color: "oklch(0.45 0.15 340)", fontFamily: "'Lora', serif" }}>{service.tagline}</p>
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
                      Call Lidone for a Quote
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Don't Do Note */}
      <section className="py-10" style={{ backgroundColor: "oklch(0.93 0.03 85)" }}>
        <div className="container max-w-2xl text-center">
          <div className="bg-white rounded-2xl p-7 shadow-sm border border-border">
            <Gem className="w-8 h-8 mx-auto mb-3" style={{ color: "oklch(0.45 0.15 340)" }} />
            <h3 className="text-xl font-bold mb-2" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}>
              Specialized Deep Cleaning — Not Household Chores
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}>
              A Diamond Girl specializes in <strong>professional deep cleaning services</strong> — not basic household tasks like laundry or dishes. Our focus is delivering a thorough, detailed clean that transforms your home from top to bottom. Have questions about what's included? Just call or text Lidone!
            </p>
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
              Want to Join the Diamond Team?
            </h3>
            <p className="text-base mb-6" style={{ color: "oklch(0.88 0.04 340)", fontFamily: "'Nunito Sans', sans-serif" }}>
              We're always looking for reliable, detail-oriented people who take pride in their work. If you're interested in joining the A Diamond Girl family, reach out to Lidone directly by email.
            </p>
            <a
              href="mailto:lidone@adiamondhomeservices.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md font-bold text-base transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
              style={{ backgroundColor: "oklch(0.72 0.15 75)", color: "oklch(0.18 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <Mail className="w-4 h-4" />
              Email Lidone to Apply
            </a>
            <p className="text-xs mt-3" style={{ color: "oklch(0.75 0.05 340)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Nassau County, FL · Flexible scheduling available
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.97 0.02 90)" }}>
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}>
            Ready for a Diamond-Level Clean?
          </h2>
          <p className="text-lg mb-8 max-w-lg mx-auto" style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Call or text Lidone to schedule your first cleaning. Free estimates always available throughout Nassau County.
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
              href="/testimonials"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "white", color: "oklch(0.45 0.15 340)", border: "1px solid oklch(0.45 0.15 340)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              See What Customers Say <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
