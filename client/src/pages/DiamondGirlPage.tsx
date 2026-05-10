import { Link } from "wouter";
import {
  Sparkles, Home, Star, Shield, Clock, Heart,
  CheckCircle2, Phone, Mail, ArrowRight, Briefcase, Gem, Zap
} from "lucide-react";
import Footer from "@/components/Footer";

const DIAMOND_GIRL_LOGO_FULL = "/manus-storage/diamond-girl-logo_26e7435d.png";
const MASCOT_IMG = "/manus-storage/diamond-girl-mascot_2e738c0a.png";

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
    description: "Our signature service. A thorough, top-to-bottom deep clean that reaches every surface, every corner, every detail.",
    includes: ["Inside appliances & cabinets", "Baseboards & window sills", "Behind & under furniture", "All fixtures polished"],
    frequency: "One-Time / Seasonal",
    badge: "Signature Service",
  },
  {
    icon: Home,
    title: "Recurring Diamond Shine",
    tagline: "Keep your home sparkling, always.",
    description: "Maintain that just-deep-cleaned feeling all year long. Lydine works around your schedule to keep your home guest-ready.",
    includes: ["Full kitchen & bathroom cleaning", "Vacuuming & mopping all floors", "Dusting all surfaces & decor", "Sanitizing high-touch areas"],
    frequency: "Weekly / Bi-Weekly / Monthly",
    badge: "Most Popular",
  },
  {
    icon: Star,
    title: "Move-In / Move-Out Clean",
    tagline: "Start fresh. Leave spotless.",
    description: "Moving is stressful enough. Let Lydine handle the clean so you can focus on the move.",
    includes: ["Full property deep clean", "Inside all cabinets & drawers", "All appliances cleaned inside & out", "Walls & baseboards wiped"],
    frequency: "One-Time",
    badge: null,
  },
  {
    icon: Gem,
    title: "Diamond-Level Kitchen Clean",
    tagline: "The heart of your home, treated like a gem.",
    description: "A dedicated, intensive kitchen cleaning service. We degrease, sanitize, and polish every surface.",
    includes: ["Full appliance degreasing & cleaning", "Cabinet fronts & hardware", "Backsplash & countertops", "Sink & fixtures polished"],
    frequency: "One-Time / Add-On",
    badge: null,
  },
  {
    icon: Shield,
    title: "Post-Construction Clean",
    tagline: "Built beautiful. Now let's make it spotless.",
    description: "Construction and renovation leave behind dust, debris, and residue that requires specialized cleaning.",
    includes: ["Construction dust removal", "Surface & floor deep cleaning", "Window & fixture cleaning", "Final detail wipe-down"],
    frequency: "One-Time",
    badge: null,
  },
  {
    icon: Zap,
    title: "Special Occasion Shine",
    tagline: "Because your guests deserve diamond clean.",
    description: "Hosting a gathering, holiday party, or special event? We'll get your home guest-ready before and after.",
    includes: ["Pre-event deep clean", "Post-event cleanup", "Kitchen & bathroom focus", "Quick turnaround available"],
    frequency: "As Needed",
    badge: null,
  },
];

const catchphrases = [
  { text: "Diamond Shine, Every Time", icon: Gem },
  { text: "We Don't Just Clean -- We Transform", icon: Sparkles },
  { text: "Your Home Deserves Diamond-Level Care", icon: Star },
  { text: "Deep Clean. Spotless. Guaranteed.", icon: Shield },
];

const sparkDots = [
  { top: "15%", left: "8%",  size: 8,  opacity: 0.45 },
  { top: "40%", left: "5%",  size: 5,  opacity: 0.35 },
  { top: "80%", left: "15%", size: 6,  opacity: 0.3  },
  { top: "12%", left: "42%", size: 5,  opacity: 0.3  },
  { top: "72%", left: "38%", size: 7,  opacity: 0.35 },
  { top: "90%", left: "55%", size: 4,  opacity: 0.4  },
  { top: "5%",  left: "72%", size: 10, opacity: 0.25 },
  { top: "25%", left: "88%", size: 6,  opacity: 0.3  },
  { top: "55%", left: "95%", size: 8,  opacity: 0.35 },
  { top: "85%", left: "82%", size: 5,  opacity: 0.4  },
];

const sparkStars = [
  { top: "22%", left: "6%"   },
  { top: "48%", left: "12%"  },
  { top: "70%", left: "28%"  },
  { top: "14%", left: "55%"  },
  { top: "30%", right: "6%"  },
  { top: "62%", right: "4%"  },
  { top: "82%", right: "18%" },
  { top: "10%", right: "28%" },
];

export default function DiamondGirlPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: OFFWHITE }}>

      {/* ===== HERO ===== */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#F4A7C3", minHeight: 560 }}
      >
        {/* Own navbar row */}
        <div
          className="relative flex items-center justify-between px-8 pt-5 pb-2"
          style={{ zIndex: 10 }}
        >
          <Link href="/">
            <img
              src={DIAMOND_GIRL_LOGO_FULL}
              alt="A Diamond Girl Home Cleaning Service"
              className="h-16 w-auto object-contain drop-shadow-md"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {["SERVICES", "PLANS", "REVIEWS"].map((label) => (
              <a
                key={label}
                href={label === "SERVICES" ? "#services" : label === "REVIEWS" ? "/testimonials" : "#pricing"}
                className="text-sm font-bold tracking-widest transition-colors hover:opacity-70"
                style={{ color: WINE_800, fontFamily: "'Oswald', sans-serif", letterSpacing: "0.14em" }}
              >
                {label}
              </a>
            ))}
            <a
              href="tel:+18569810930"
              className="px-5 py-2 font-bold text-sm tracking-wide transition-all hover:opacity-90"
              style={{
                backgroundColor: WINE_800,
                color: WHITE,
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.08em",
                borderRadius: 4,
              }}
            >
              856-981-0930
            </a>
          </div>
        </div>

        {/* Sparkle dots */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          {sparkDots.map((dot, i) => (
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
          {sparkStars.map((pos, i) => (
            <div
              key={`star-${i}`}
              className="absolute"
              style={{ ...pos, fontSize: i % 2 === 0 ? 22 : 14, color: "rgba(255,255,255,0.60)", lineHeight: 1 }}
            >
              *
            </div>
          ))}
        </div>

        {/* Hero content: left text + right mascot */}
        <div
          className="relative flex flex-col lg:flex-row items-center"
          style={{ zIndex: 1, minHeight: 440, padding: "0 2rem 2rem" }}
        >
          {/* Left: copy */}
          <div className="flex-1 pt-4 pb-8 lg:pb-0 max-w-lg">
            <p
              className="text-xs font-bold uppercase mb-4 tracking-widest"
              style={{ color: WINE_800, fontFamily: "'Oswald', sans-serif", letterSpacing: "0.18em" }}
            >
              Home Cleaning &middot; Move-Out &middot; Airbnb Turnover
            </p>
            <div style={{ lineHeight: 1.05 }}>
              <div
                className="text-5xl md:text-6xl font-black uppercase"
                style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
              >
                EVERY HOME
              </div>
              <div
                className="text-4xl md:text-5xl italic font-bold"
                style={{ color: WINE_800, fontFamily: "'Playfair Display', serif" }}
              >
                deserves to
              </div>
              <div
                className="text-5xl md:text-6xl font-black uppercase"
                style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
              >
                SPARKLE.
              </div>
            </div>
            <p
              className="mt-5 text-base leading-relaxed max-w-sm"
              style={{ color: WINE_800, fontFamily: "'Manrope', sans-serif" }}
            >
              Move-in ready cleans, weekly maintenance, and detailed deep-cleans -- done by a small team you'll actually recognize.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href="tel:+18569810930"
                className="px-6 py-3 font-bold text-sm tracking-wide transition-all hover:opacity-90"
                style={{
                  backgroundColor: WINE_800,
                  color: WHITE,
                  fontFamily: "'Oswald', sans-serif",
                  letterSpacing: "0.08em",
                  borderRadius: 4,
                }}
              >
                BOOK A CLEAN
              </a>
              <a
                href="#pricing"
                className="px-6 py-3 font-bold text-sm tracking-wide transition-all hover:bg-white/20"
                style={{
                  border: `2px solid ${WINE_700}`,
                  color: WINE_700,
                  fontFamily: "'Oswald', sans-serif",
                  letterSpacing: "0.06em",
                  borderRadius: 4,
                }}
              >
                PRICING &rarr;
              </a>
            </div>
          </div>

          {/* Right: mascot in pink circle */}
          <div className="flex-1 flex items-end justify-center lg:justify-end" style={{ minHeight: 380 }}>
            <div
              className="relative flex items-end justify-center"
              style={{
                width: 380,
                height: 380,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.25)",
                border: `4px solid ${WINE_700}`,
                overflow: "hidden",
              }}
            >
              <img
                src={MASCOT_IMG}
                alt="A Diamond Girl cleaning mascot"
                className="w-full h-auto object-contain drop-shadow-2xl"
                style={{ maxHeight: 480, marginBottom: "-4px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATCHPHRASES BANNER ===== */}
      <section className="py-8 overflow-hidden" style={{ backgroundColor: GOLD_500 }}>
        <div className="container">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {catchphrases.map((phrase) => {
              const Icon = phrase.icon;
              return (
                <div key={phrase.text} className="flex items-center gap-2">
                  <Icon size={16} color={WINE_800} />
                  <span
                    className="text-sm font-bold uppercase tracking-widest"
                    style={{ color: WINE_800, fontFamily: "'Oswald', sans-serif" }}
                  >
                    {phrase.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section id="services" className="py-20" style={{ backgroundColor: OFFWHITE }}>
        <div className="container">
          <div className="text-center mb-14">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: MAGENTA, fontFamily: "'Oswald', sans-serif" }}
            >
              What We Offer
            </p>
            <h2
              className="text-4xl md:text-5xl font-black uppercase"
              style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
            >
              Diamond-Level Services
            </h2>
            <p
              className="mt-4 text-base max-w-xl mx-auto"
              style={{ color: "#4A5568", fontFamily: "'Manrope', sans-serif" }}
            >
              Every clean is performed with care, attention to detail, and a commitment to making your home truly sparkle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="relative rounded-lg p-6 flex flex-col gap-3 transition-shadow hover:shadow-lg"
                  style={{ backgroundColor: WHITE, border: `1px solid #F0E0E8` }}
                >
                  {service.badge && (
                    <span
                      className="absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded"
                      style={{ backgroundColor: MAGENTA, color: WHITE, fontFamily: "'Oswald', sans-serif" }}
                    >
                      {service.badge}
                    </span>
                  )}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: BLUSH_100 }}
                  >
                    <Icon size={20} color={MAGENTA} />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-black uppercase"
                      style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-xs italic mt-0.5"
                      style={{ color: MAGENTA, fontFamily: "'Playfair Display', serif" }}
                    >
                      {service.tagline}
                    </p>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#4A5568", fontFamily: "'Manrope', sans-serif" }}
                  >
                    {service.description}
                  </p>
                  <ul className="flex flex-col gap-1.5 mt-1">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs" style={{ color: "#4A5568" }}>
                        <CheckCircle2 size={13} color={MAGENTA} className="mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="mt-auto pt-3 text-xs font-bold uppercase tracking-wide"
                    style={{ color: WINE_800, fontFamily: "'Oswald', sans-serif", borderTop: `1px solid #F0E0E8` }}
                  >
                    <Clock size={11} className="inline mr-1" />
                    {service.frequency}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== WHY DIAMOND GIRL ===== */}
      <section className="py-10" style={{ backgroundColor: BLUSH_100 }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <Sparkles size={28} color={MAGENTA} className="mx-auto mb-4" />
            <h3
              className="text-2xl font-black uppercase mb-3"
              style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
            >
              Specialized Deep Cleaning -- Not Household Chores
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#4A5568", fontFamily: "'Manrope', sans-serif" }}
            >
              A Diamond Girl specializes in professional deep cleaning services -- not basic household tasks like laundry or dishes. Our focus is delivering a thorough, detailed clean that transforms your home from top to bottom. Have questions about what's included? Just call or text Lydine!
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section
        className="py-16"
        style={{ background: `linear-gradient(135deg, ${WINE_800} 0%, ${WINE_700} 100%)` }}
      >
        <div className="container text-center">
          <h2
            className="text-3xl md:text-4xl font-black uppercase mb-4"
            style={{ color: WHITE, fontFamily: "'Oswald', sans-serif" }}
          >
            Ready for a Diamond-Clean Home?
          </h2>
          <p
            className="text-base mb-8 max-w-md mx-auto opacity-90"
            style={{ color: WHITE, fontFamily: "'Manrope', sans-serif" }}
          >
            Call or text Lydine directly to schedule your first clean. No contracts, no hassle -- just results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+18569810930"
              className="flex items-center gap-2 px-8 py-3 font-bold text-sm tracking-wide transition-all hover:opacity-90"
              style={{
                backgroundColor: GOLD_500,
                color: WINE_800,
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.08em",
                borderRadius: 4,
              }}
            >
              <Phone size={16} />
              856-981-0930
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-3 font-bold text-sm tracking-wide transition-all hover:bg-white/10"
              style={{
                border: `2px solid ${WHITE}`,
                color: WHITE,
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.08em",
                borderRadius: 4,
              }}
            >
              GET A FREE QUOTE
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TRUST BADGES ===== */}
      <section className="py-16" style={{ backgroundColor: OFFWHITE }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield,    label: "Fully Insured",          sub: "Peace of mind guaranteed"       },
              { icon: Heart,     label: "Family-Owned",           sub: "South Jersey, Est. 2019"         },
              { icon: Star,      label: "5-Star Rated",           sub: "Trusted by 100+ homeowners"      },
              { icon: Briefcase, label: "Flexible Scheduling",    sub: "We work around your life"        },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex flex-col items-center text-center gap-2 p-5 rounded-lg" style={{ backgroundColor: WHITE }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: BLUSH_100 }}>
                    <Icon size={20} color={MAGENTA} />
                  </div>
                  <p className="text-sm font-black uppercase" style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}>{item.label}</p>
                  <p className="text-xs" style={{ color: "#6B7280", fontFamily: "'Manrope', sans-serif" }}>{item.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREA ===== */}
      <section className="py-8" style={{ backgroundColor: BLUSH_100 }}>
        <div className="container text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: MAGENTA, fontFamily: "'Oswald', sans-serif" }}>
            Service Area
          </p>
          <p className="text-sm" style={{ color: "#4A5568", fontFamily: "'Manrope', sans-serif" }}>
            Nassau County, FL &middot; Flexible scheduling available
          </p>
          <p className="text-xs mt-2" style={{ color: "#6B7280", fontFamily: "'Manrope', sans-serif" }}>
            Owner: Lydine &middot; <a href="tel:+18569810930" style={{ color: MAGENTA }}>856-981-0930</a> &middot; <a href="mailto:diamondhomeservicesofflorida@gmail.com" style={{ color: MAGENTA }}>diamondhomeservicesofflorida@gmail.com</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
