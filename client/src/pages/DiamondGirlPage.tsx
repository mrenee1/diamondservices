/* ============================================================
   A Diamond Girl Page — Home Cleaning Service
   Palette: Girl wine+pink (#5C1432, #7A1B42, #C21B6B, #EC4B99, #FCE4EC, #7FD7E8)
   Owner: Lydine | Phone: 856-981-0930
   Deep cleaning focus — diamond-themed phrases
   Employment contact: diamondhomeservicesofflorida@gmail.com
   ============================================================ */

import { Link } from "wouter";
import {
  Sparkles, Home, Star, Shield, Clock, Heart,
  CheckCircle2, Phone, Mail, ArrowRight, Briefcase, Gem, Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DIAMOND_GIRL_LOGO = "/manus-storage/diamond-girl-logo-clean_faeff1d8.png";
const DIAMOND_GIRL_LOGO_FULL = "/manus-storage/diamond-girl-logo_26e7435d.png";

// Girl palette hex tokens
const WINE_800   = "#5C1432";
const WINE_700   = "#7A1B42";
const MAGENTA    = "#C21B6B";
const PINK_400   = "#EC4B99";
const BLUSH_100  = "#FCE4EC";
const AQUA_300   = "#7FD7E8";
const GOLD_500   = "#C8A24A";
const NAVY_900   = "#081830";
const WHITE      = "#FFFFFF";
const OFFWHITE   = "#F5F3EE";
const CHARCOAL   = "#1A1F2E";

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
    description: "Maintain that just-deep-cleaned feeling all year long. Lydine works around your schedule to keep your home consistently spotless — so you never have to worry about it.",
    includes: ["Full kitchen & bathroom cleaning", "Vacuuming & mopping all floors", "Dusting all surfaces & décor", "Sanitizing high-touch areas", "Customized checklist for your home"],
    frequency: "Weekly / Bi-Weekly / Monthly",
    badge: "Most Popular",
  },
  {
    icon: Star,
    title: "Move-In / Move-Out Clean",
    tagline: "Start fresh. Leave spotless.",
    description: "Moving is stressful enough. Let Lydine handle the clean so you can focus on the move. We leave every inch of the property sparkling — whether you're arriving or departing.",
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
    description: "Construction and renovation leave behind dust, debris, and residue that requires specialized cleaning. Lydine gets your newly renovated space truly ready to enjoy.",
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
    <div className="min-h-screen" style={{ backgroundColor: OFFWHITE }}>
      <Navbar />

      {/* ── HERO — Sparkle Pink Split Layout ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "#F9A8C9",
          minHeight: 520,
          paddingTop: 80,
        }}
      >
        {/* Sparkle dots pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          {[
            { top: "8%",  left: "5%",  size: 6,  opacity: 0.5 },
            { top: "18%", left: "18%", size: 4,  opacity: 0.4 },
            { top: "35%", left: "8%",  size: 8,  opacity: 0.35 },
            { top: "60%", left: "3%",  size: 5,  opacity: 0.45 },
            { top: "80%", left: "15%", size: 6,  opacity: 0.3 },
            { top: "12%", left: "42%", size: 5,  opacity: 0.3 },
            { top: "72%", left: "38%", size: 7,  opacity: 0.35 },
            { top: "90%", left: "55%", size: 4,  opacity: 0.4 },
            { top: "5%",  left: "72%", size: 10, opacity: 0.25 },
            { top: "25%", left: "88%", size: 6,  opacity: 0.3 },
            { top: "55%", left: "95%", size: 8,  opacity: 0.35 },
            { top: "85%", left: "82%", size: 5,  opacity: 0.4 },
          ].map((dot, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                top: dot.top,
                left: dot.left,
                width: dot.size,
                height: dot.size,
                backgroundColor: `rgba(255,255,255,${dot.opacity})`,
              }}
            />
          ))}
          {/* 4-point sparkle stars */}
          {[
            { top: "15%", left: "30%" },
            { top: "45%", left: "50%" },
            { top: "70%", left: "25%" },
            { top: "20%", right: "15%" },
            { top: "65%", right: "8%" },
          ].map((pos, i) => (
            <div
              key={`star-${i}`}
              className="absolute"
              style={{ ...pos, fontSize: 18, color: "rgba(255,255,255,0.55)", lineHeight: 1 }}
            >
              ✦
            </div>
          ))}
        </div>

        <div className="container relative" style={{ zIndex: 1 }}>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
            {/* Left: Text */}
            <div className="flex-1 py-10 lg:py-16 lg:pr-8">
              <img
                src={DIAMOND_GIRL_LOGO_FULL}
                alt="A Diamond Girl Home Cleaning Service"
                className="h-20 w-auto object-contain mb-6 drop-shadow-lg"
              />
              <p
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: WINE_800, fontFamily: "'Oswald', sans-serif", letterSpacing: "0.18em" }}
              >
                Home Cleaning &nbsp;·&nbsp; Deep Clean &nbsp;·&nbsp; Move-Out
              </p>
              <div style={{ fontFamily: "'Anton', sans-serif", lineHeight: 1.05 }}>
                <div
                  className="text-5xl md:text-6xl font-black uppercase"
                  style={{ color: "#3D0A1E" }}
                >
                  EVERY HOME
                </div>
                <div
                  className="text-4xl md:text-5xl font-black italic"
                  style={{ color: MAGENTA, fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
                >
                  deserves to
                </div>
                <div
                  className="text-5xl md:text-6xl font-black uppercase"
                  style={{ color: "#3D0A1E" }}
                >
                  SPARKLE.
                </div>
              </div>
              <p
                className="mt-5 text-base max-w-md"
                style={{ color: WINE_800, fontFamily: "'Manrope', sans-serif", lineHeight: 1.65 }}
              >
                Deep cleans, move-in/move-out, and recurring maintenance — done by a small team you'll actually recognize.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <a
                  href="tel:+18569810930"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-bold text-sm uppercase tracking-wide transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                  style={{
                    backgroundColor: WINE_700,
                    color: WHITE,
                    fontFamily: "'Oswald', sans-serif",
                    letterSpacing: "0.06em",
                  }}
                >
                  <Phone className="w-4 h-4" />
                  Call Lydine: 856-981-0930
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-bold text-sm uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "transparent",
                    color: WINE_800,
                    border: `2px solid ${WINE_700}`,
                    fontFamily: "'Oswald', sans-serif",
                    letterSpacing: "0.06em",
                  }}
                >
                  Our Services →
                </a>
              </div>
            </div>

            {/* Right: Logo in pink circle */}
            <div
              className="flex-shrink-0 flex items-end justify-center"
              style={{ width: 380, maxWidth: "100%" }}
            >
              <div
                className="relative flex items-center justify-center"
                style={{
                  width: 340,
                  height: 340,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, #F4C2D8 60%, #E991B8 100%)",
                  border: `4px solid ${MAGENTA}`,
                  boxShadow: "0 8px 40px rgba(194,27,107,0.25)",
                  overflow: "hidden",
                }}
              >
                <img
                  src={DIAMOND_GIRL_LOGO_FULL}
                  alt="A Diamond Girl mascot"
                  className="w-full h-full object-contain"
                  style={{ transform: "scale(1.15) translateY(8%)", objectPosition: "center top" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Catchphrases Banner ── */}
      <section className="py-8 overflow-hidden" style={{ backgroundColor: GOLD_500 }}>
        <div className="container">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {catchphrases.map((phrase) => {
              const Icon = phrase.icon;
              return (
                <div key={phrase.text} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 flex-shrink-0" style={{ color: WINE_800 }} />
                  <span
                    className="text-sm font-bold uppercase tracking-wide"
                    style={{ color: NAVY_900, fontFamily: "'Oswald', sans-serif" }}
                  >
                    {phrase.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1"
              style={{
                backgroundColor: `${MAGENTA}18`,
                color: MAGENTA,
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.15em",
              }}
            >
              Our Services
            </span>
            <h2
              className="text-4xl font-bold"
              style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
            >
              The Diamond Clean Difference
            </h2>
            <p
              className="text-base mt-3 max-w-lg mx-auto"
              style={{ color: "#4A5568", fontFamily: "'Manrope', sans-serif" }}
            >
              Every service Lydine offers is built around one standard: diamond-level results. No shortcuts. No skipped corners. Just a spotlessly clean home.
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
                        style={{ backgroundColor: `${MAGENTA}15` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: MAGENTA }} />
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
                      className="text-xl font-bold mb-1"
                      style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-xs font-semibold italic mb-3"
                      style={{ color: MAGENTA, fontFamily: "'Playfair Display', serif" }}
                    >
                      {service.tagline}
                    </p>
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "#4A5568", fontFamily: "'Manrope', sans-serif" }}
                    >
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {service.includes.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: MAGENTA }} />
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
                        backgroundColor: `${PINK_400}18`,
                        color: WINE_700,
                        fontFamily: "'Oswald', sans-serif",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {service.frequency}
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <a
                      href="tel:+18569810930"
                      className="w-full flex items-center justify-center gap-2 py-2.5 font-bold text-sm transition-all duration-200 hover:shadow-md"
                      style={{
                        backgroundColor: MAGENTA,
                        color: WHITE,
                        fontFamily: "'Oswald', sans-serif",
                        letterSpacing: "0.06em",
                      }}
                    >
                      <Phone className="w-4 h-4" />
                      Call Lydine for a Quote
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What We Don't Do Note ── */}
      <section className="py-10" style={{ backgroundColor: BLUSH_100 }}>
        <div className="container max-w-2xl text-center">
          <div className="bg-white p-7 shadow-sm" style={{ border: `1px solid #F0C8D8` }}>
            <Gem className="w-8 h-8 mx-auto mb-3" style={{ color: MAGENTA }} />
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
            >
              Specialized Deep Cleaning — Not Household Chores
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#4A5568", fontFamily: "'Manrope', sans-serif" }}
            >
              A Diamond Girl specializes in <strong>professional deep cleaning services</strong> — not basic household tasks like laundry or dishes. Our focus is delivering a thorough, detailed clean that transforms your home from top to bottom. Have questions about what's included? Just call or text Lydine!
            </p>
          </div>
        </div>
      </section>

      {/* ── EMPLOYMENT CALLOUT ── */}
      <section
        className="py-16"
        style={{ background: `linear-gradient(135deg, ${WINE_800} 0%, ${WINE_700} 100%)` }}
      >
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div
              className="w-16 h-16 flex items-center justify-center mx-auto mb-5"
              style={{ backgroundColor: GOLD_500 }}
            >
              <Briefcase className="w-8 h-8" style={{ color: NAVY_900 }} />
            </div>
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1"
              style={{
                backgroundColor: `${GOLD_500}22`,
                color: GOLD_500,
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.15em",
              }}
            >
              Now Hiring
            </span>
            <h3
              className="text-3xl font-bold text-white mb-3"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Want to Join the Diamond Team?
            </h3>
            <p
              className="text-base mb-6"
              style={{ color: "rgba(255,255,255,0.80)", fontFamily: "'Manrope', sans-serif" }}
            >
              We're always looking for reliable, detail-oriented people who take pride in their work. If you're interested in joining the A Diamond Girl family, reach out to Lydine directly by email.
            </p>
            <a
              href="mailto:diamondhomeservicesofflorida@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold text-base transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
              style={{
                backgroundColor: GOLD_500,
                color: NAVY_900,
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.06em",
              }}
            >
              <Mail className="w-4 h-4" />
              Email Lydine to Apply
            </a>
            <p
              className="text-xs mt-3"
              style={{ color: "rgba(255,255,255,0.50)", fontFamily: "'Manrope', sans-serif" }}
            >
              Nassau County, FL · Flexible scheduling available
            </p>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-16" style={{ backgroundColor: OFFWHITE }}>
        <div className="container text-center">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
          >
            Ready for a Diamond-Level Clean?
          </h2>
          <p
            className="text-lg mb-8 max-w-lg mx-auto"
            style={{ color: "#4A5568", fontFamily: "'Manrope', sans-serif" }}
          >
            Call or text Lydine to schedule your first cleaning. Free estimates always available throughout Nassau County.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+18569810930"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-bold text-base transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              style={{
                backgroundColor: MAGENTA,
                color: WHITE,
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.06em",
              }}
            >
              <Phone className="w-4 h-4" />
              Call or Text: 856-981-0930
            </a>
            <Link
              href="/testimonials"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: WHITE,
                color: MAGENTA,
                border: `1px solid ${MAGENTA}`,
                fontFamily: "'Manrope', sans-serif",
              }}
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
