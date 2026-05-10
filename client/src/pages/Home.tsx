/* ============================================================
   Home Page — Diamond Home Services LLC
   Design: "BUILT FOR THE BIG LEAGUES" — stadium navy hero
   Hero: deep navy bg, SVG diamond right, grass curve, gold headline
   Palette: Parent navy+gold (#081830, #0F2244, #C8A24A, #E8D08A)
   Cutz accent: #2E8B3D | Girl accent: #C21B6B
   ============================================================ */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  Phone, Mail, MapPin, ArrowRight, CheckCircle2,
  Scissors, Sparkles, Wrench, Star, ChevronRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DIAMOND_CUTZ_LOGO = "/manus-storage/diamond-cutz-logo_7523a9b6.png";
const DIAMOND_GIRL_LOGO = "/manus-storage/diamond-girl-logo_26e7435d.png";
const LAWN_IMAGE = "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80";
const CLEAN_IMAGE = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80";

// Design system hex tokens — Parent palette
const NAVY_900  = "#081830";
const NAVY_800  = "#0F2244";
const NAVY_700  = "#18305C";
const GOLD_500  = "#C8A24A";
const GOLD_300  = "#E8D08A";
const WHITE     = "#FFFFFF";
const OFFWHITE  = "#F5F3EE";
const CHARCOAL  = "#1A1F2E";

// Cutz + Girl accents
const GREEN_500 = "#2E8B3D";
const GREEN_700 = "#185E2C";
const WINE_700  = "#7A1B42";
const MAGENTA   = "#C21B6B";

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.12 }
    );
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const services = [
  {
    icon: Scissors,
    title: "Diamond Cutz",
    subtitle: "Lawn & Landscaping",
    description:
      "Professional lawn mowing, edging, landscape design, fertilization, sod installation, and more. Mike keeps your outdoor spaces looking resort-ready year-round throughout Nassau County.",
    href: "/diamond-cutz",
    logo: DIAMOND_CUTZ_LOGO,
    phone: "856-371-3971",
    phoneHref: "tel:+18563713971",
    image: LAWN_IMAGE,
    accent: GREEN_500,
    accentDark: GREEN_700,
  },
  {
    icon: Sparkles,
    title: "A Diamond Girl",
    subtitle: "Home Cleaning Service",
    description:
      "Lydine delivers a diamond-level deep clean every time. From top-to-bottom deep cleans to move-in/move-out services — she makes every home shine like new.",
    href: "/diamond-girl",
    logo: DIAMOND_GIRL_LOGO,
    phone: "856-981-0930",
    phoneHref: "tel:+18569810930",
    image: CLEAN_IMAGE,
    accent: MAGENTA,
    accentDark: WINE_700,
  },
];

/* ── SVG Diamond — matches the wireframe diamond in the mockup ── */
function DiamondGraphic() {
  return (
    <svg
      viewBox="0 0 340 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Outer glow */}
      <defs>
        <radialGradient id="dg" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#B8D4F0" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#081830" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="facetTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D8E8F8" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#9BBBD8" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="facetLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A8C4DC" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#6090B0" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="facetRight" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C8DCF0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#7AAAC8" stopOpacity="0.65" />
        </linearGradient>
        <linearGradient id="facetBottom" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#8AAEC8" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#4878A0" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Glow circle */}
      <ellipse cx="170" cy="175" rx="155" ry="155" fill="url(#dg)" />

      {/* Diamond outline — top crown */}
      {/* Crown top edge */}
      <polygon
        points="170,30 260,130 170,155 80,130"
        fill="url(#facetTop)"
        stroke="#C8DCF0"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />
      {/* Left crown facet */}
      <polygon
        points="80,130 170,155 120,210"
        fill="url(#facetLeft)"
        stroke="#A0C0D8"
        strokeWidth="1.2"
        strokeOpacity="0.5"
      />
      {/* Right crown facet */}
      <polygon
        points="260,130 220,210 170,155"
        fill="url(#facetRight)"
        stroke="#B8D0E8"
        strokeWidth="1.2"
        strokeOpacity="0.5"
      />
      {/* Center crown facet */}
      <polygon
        points="170,155 120,210 220,210"
        fill="url(#facetTop)"
        stroke="#C0D8EC"
        strokeWidth="1.2"
        strokeOpacity="0.5"
      />
      {/* Pavilion left */}
      <polygon
        points="120,210 170,340 80,130"
        fill="url(#facetLeft)"
        stroke="#90B8D0"
        strokeWidth="1.2"
        strokeOpacity="0.4"
      />
      {/* Pavilion right */}
      <polygon
        points="220,210 260,130 170,340"
        fill="url(#facetRight)"
        stroke="#A8C8E0"
        strokeWidth="1.2"
        strokeOpacity="0.4"
      />
      {/* Pavilion center */}
      <polygon
        points="120,210 220,210 170,340"
        fill="url(#facetBottom)"
        stroke="#80A8C8"
        strokeWidth="1.2"
        strokeOpacity="0.4"
      />

      {/* Inner structure lines */}
      <line x1="170" y1="30" x2="170" y2="155" stroke="#D0E4F4" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="80" y1="130" x2="220" y2="210" stroke="#C0D8EC" strokeWidth="0.8" strokeOpacity="0.4" />
      <line x1="260" y1="130" x2="120" y2="210" stroke="#C0D8EC" strokeWidth="0.8" strokeOpacity="0.4" />

      {/* Sparkle dots */}
      <circle cx="290" cy="60" r="3" fill="#E8D08A" opacity="0.9" />
      <circle cx="50" cy="90" r="2" fill="#E8D08A" opacity="0.7" />
      <circle cx="310" cy="200" r="2.5" fill="#FFFFFF" opacity="0.6" />
      <circle cx="30" cy="250" r="2" fill="#FFFFFF" opacity="0.5" />
      <circle cx="270" cy="310" r="1.5" fill="#C8A24A" opacity="0.6" />
    </svg>
  );
}

/* ── Starfield dots scattered across the hero ── */
function Starfield() {
  const stars = [
    { x: "8%",  y: "15%", r: 1.5, o: 0.6 },
    { x: "15%", y: "60%", r: 1,   o: 0.4 },
    { x: "22%", y: "30%", r: 2,   o: 0.5 },
    { x: "35%", y: "10%", r: 1,   o: 0.7 },
    { x: "42%", y: "50%", r: 1.5, o: 0.4 },
    { x: "55%", y: "20%", r: 1,   o: 0.6 },
    { x: "60%", y: "70%", r: 2,   o: 0.3 },
    { x: "68%", y: "12%", r: 1.5, o: 0.5 },
    { x: "75%", y: "40%", r: 1,   o: 0.6 },
    { x: "85%", y: "25%", r: 2,   o: 0.4 },
    { x: "90%", y: "65%", r: 1.5, o: 0.5 },
    { x: "95%", y: "10%", r: 1,   o: 0.7 },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: s.x,
            top: s.y,
            width: s.r * 2,
            height: s.r * 2,
            opacity: s.o,
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const s1 = useFadeUp();
  const s2 = useFadeUp();
  const s3 = useFadeUp();
  const s4 = useFadeUp();
  const s5 = useFadeUp();

  return (
    <div className="min-h-screen" style={{ backgroundColor: OFFWHITE }}>
      <Navbar />

      {/* ══════════════════════════════════════════════════════
          HERO — "BUILT FOR THE BIG LEAGUES"
          Stadium navy bg · diamond SVG right · grass curve
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden pt-16"
        style={{
          background: `linear-gradient(160deg, ${NAVY_900} 0%, ${NAVY_800} 55%, #0A2040 100%)`,
          minHeight: "580px",
        }}
      >
        <Starfield />

        {/* Grass curve at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          aria-hidden="true"
          style={{ height: "140px" }}
        >
          <svg
            viewBox="0 0 1440 140"
            preserveAspectRatio="none"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,140 L0,90 Q180,30 360,70 Q540,110 720,60 Q900,10 1080,55 Q1260,100 1440,50 L1440,140 Z"
              fill="#185E2C"
            />
            <path
              d="M0,140 L0,105 Q200,55 400,85 Q600,115 800,75 Q1000,35 1200,70 Q1350,95 1440,65 L1440,140 Z"
              fill="#2E8B3D"
              opacity="0.7"
            />
          </svg>
        </div>

        {/* Content grid */}
        <div className="relative z-10 container">
          <div className="flex flex-col lg:flex-row items-center min-h-[520px]">

            {/* LEFT — text */}
            <div className="flex-1 py-16 lg:py-20 pr-0 lg:pr-8">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-5"
                style={{
                  color: GOLD_300,
                  fontFamily: "'Oswald', sans-serif",
                  letterSpacing: "0.18em",
                }}
              >
                South Jersey · Family-Owned · Est. 2019
              </div>

              {/* Headline */}
              <h1
                className="font-black leading-none mb-6"
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: "clamp(3.4rem, 8vw, 6.2rem)",
                  letterSpacing: "-0.01em",
                  lineHeight: 0.92,
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{
                    display: "block",
                    color: WHITE,
                    textShadow: "0 2px 12px rgba(0,0,0,0.35)",
                  }}
                >
                  BUILT FOR THE
                </span>
                <span
                  style={{
                    display: "block",
                    color: GOLD_500,
                    textShadow: "0 2px 16px rgba(200,162,74,0.4)",
                  }}
                >
                  BIG LEAGUES.
                </span>
              </h1>

              {/* Subtext */}
              <p
                className="text-base md:text-lg leading-relaxed mb-8 max-w-md"
                style={{
                  color: "rgba(255,255,255,0.78)",
                  fontFamily: "'Manrope', sans-serif",
                }}
              >
                Two specialist crews, one trusted name. Diamond Cutz keeps your yard sharp. A Diamond Girl makes your home shine. Book either — or both.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-bold text-sm uppercase tracking-wide transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                  style={{
                    backgroundColor: GOLD_500,
                    color: NAVY_900,
                    fontFamily: "'Oswald', sans-serif",
                    letterSpacing: "0.08em",
                  }}
                >
                  GET A FREE QUOTE
                </Link>
                <Link
                  href="/diamond-cutz"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-bold text-sm uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "transparent",
                    color: WHITE,
                    border: `2px solid rgba(255,255,255,0.55)`,
                    fontFamily: "'Oswald', sans-serif",
                    letterSpacing: "0.08em",
                  }}
                >
                  SEE OUR SERVICES <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* Licensed · Insured · Bonded */}
              <p
                className="text-xs uppercase tracking-widest"
                style={{
                  color: "rgba(255,255,255,0.38)",
                  fontFamily: "'Oswald', sans-serif",
                  letterSpacing: "0.2em",
                }}
              >
                Licensed · Insured · Bonded
              </p>
            </div>

            {/* RIGHT — Diamond graphic */}
            <div
              className="flex-shrink-0 w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] relative"
              style={{ marginBottom: "60px" }}
            >
              <DiamondGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BADGES STRIP ── */}
      <section style={{ backgroundColor: NAVY_900 }}>
        <div className="container py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {["Licensed & Insured", "Free Estimates", "Family Owned & Operated", "Satisfaction Guaranteed", "Nassau County, FL"].map((b) => (
              <div key={b} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: GOLD_500 }} />
                <span
                  className="text-sm font-semibold"
                  style={{ color: "rgba(255,255,255,0.82)", fontFamily: "'Manrope', sans-serif" }}
                >
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR SERVICES ── */}
      <section className="py-20" style={{ backgroundColor: OFFWHITE }}>
        <div className="container">
          <div ref={s1} className="text-center mb-14">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1"
              style={{
                backgroundColor: `${GREEN_500}18`,
                color: GREEN_500,
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.15em",
              }}
            >
              What We Do
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
            >
              Two Businesses, One Family
            </h2>
            <p
              className="text-base mt-3 max-w-xl mx-auto"
              style={{ color: "#4A5568", fontFamily: "'Manrope', sans-serif" }}
            >
              Mike handles the outdoors. Lydine handles the indoors. Together, they've built something special for the Nassau County community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  ref={i === 0 ? s2 : s3}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  style={{ border: `1px solid #E2DDD4` }}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(to top, ${svc.accentDark} 0%, transparent 60%)` }}
                    />
                    <div className="absolute bottom-4 left-5">
                      <img src={svc.logo} alt={svc.title} className="h-14 w-auto object-contain drop-shadow-lg" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5" style={{ color: svc.accent }} />
                      <span
                        className="text-xs font-bold uppercase tracking-widest"
                        style={{ color: svc.accent, fontFamily: "'Oswald', sans-serif" }}
                      >
                        {svc.subtitle}
                      </span>
                    </div>
                    <h3
                      className="text-2xl font-bold mb-3"
                      style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
                    >
                      {svc.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-5 flex-1"
                      style={{ color: "#4A5568", fontFamily: "'Manrope', sans-serif" }}
                    >
                      {svc.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={svc.href}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 font-bold text-sm transition-all duration-200 hover:shadow-md"
                        style={{
                          backgroundColor: svc.accent,
                          color: WHITE,
                          fontFamily: "'Oswald', sans-serif",
                          letterSpacing: "0.06em",
                        }}
                      >
                        Learn More <ChevronRight className="w-4 h-4" />
                      </Link>
                      <a
                        href={svc.phoneHref}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 font-bold text-sm transition-all duration-200"
                        style={{
                          backgroundColor: "#F0EDE6",
                          color: CHARCOAL,
                          fontFamily: "'Manrope', sans-serif",
                        }}
                      >
                        <Phone className="w-4 h-4" /> {svc.phone}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BUSINESS CLIENT CALLOUT ── */}
      <section className="py-16" style={{ backgroundColor: NAVY_800 }}>
        <div className="container">
          <div
            ref={s4}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            <div
              className="flex-shrink-0 w-16 h-16 flex items-center justify-center"
              style={{ backgroundColor: GOLD_500 }}
            >
              <Wrench className="w-8 h-8" style={{ color: NAVY_900 }} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-2 px-3 py-1"
                style={{
                  backgroundColor: `${GOLD_500}22`,
                  color: GOLD_300,
                  fontFamily: "'Oswald', sans-serif",
                  letterSpacing: "0.15em",
                }}
              >
                Commercial Services
              </span>
              <h3
                className="text-2xl md:text-3xl font-bold text-white mb-2"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                We Also Work With Businesses
              </h3>
              <p
                className="text-base"
                style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'Manrope', sans-serif" }}
              >
                Offices, retail spaces, commercial properties, and more throughout Nassau County. Whether it's regular lawn maintenance or recurring cleaning contracts — we'd love to partner with your business. Call or text us for a custom quote.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col gap-3">
              <a
                href="tel:+18563713971"
                className="flex items-center justify-center gap-2 px-6 py-3 font-bold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
                style={{
                  backgroundColor: GOLD_500,
                  color: NAVY_900,
                  fontFamily: "'Oswald', sans-serif",
                  letterSpacing: "0.06em",
                }}
              >
                <Phone className="w-4 h-4" />
                Call or Text for a Quote
              </a>
              <a
                href="mailto:diamondhomeservicesofflorida@gmail.com"
                className="flex items-center justify-center gap-2 px-6 py-3 font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
                style={{
                  backgroundColor: "rgba(255,255,255,0.10)",
                  color: WHITE,
                  border: "1px solid rgba(255,255,255,0.25)",
                  fontFamily: "'Manrope', sans-serif",
                }}
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className="py-20" style={{ backgroundColor: "#EDEAE2" }}>
        <div className="container">
          <div
            ref={s5}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1"
                style={{
                  backgroundColor: `${GREEN_500}18`,
                  color: GREEN_500,
                  fontFamily: "'Oswald', sans-serif",
                  letterSpacing: "0.15em",
                }}
              >
                Where We Serve
              </span>
              <h2
                className="text-4xl font-bold mb-5 leading-tight"
                style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
              >
                Proudly Serving Nassau County, Florida
              </h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "#4A5568", fontFamily: "'Manrope', sans-serif" }}
              >
                Based right here in the Tributary community of Yulee, Mike and Lydine serve homeowners and businesses throughout Nassau County. If you're not sure whether we cover your area, just give us a call — we're always happy to help.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Tributary Community",
                  "Yulee, FL 32097",
                  "Fernandina Beach",
                  "Callahan",
                  "Nassau County",
                  "Surrounding Areas",
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: GREEN_500 }} />
                    <span
                      className="text-sm font-semibold"
                      style={{ color: CHARCOAL, fontFamily: "'Manrope', sans-serif" }}
                    >
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="bg-white rounded-xl shadow-lg p-8"
              style={{ border: `1px solid #DDD9D0` }}
            >
              <h3
                className="text-2xl font-bold mb-5"
                style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
              >
                Get in Touch
              </h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: GREEN_500 }}
                  >
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-wide mb-0.5"
                      style={{ color: "#6B7280", fontFamily: "'Oswald', sans-serif" }}
                    >
                      Lawn & Landscaping (Mike)
                    </p>
                    <a
                      href="tel:+18563713971"
                      className="font-bold text-base"
                      style={{ color: CHARCOAL, fontFamily: "'Manrope', sans-serif" }}
                    >
                      856-371-3971
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: MAGENTA }}
                  >
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-wide mb-0.5"
                      style={{ color: "#6B7280", fontFamily: "'Oswald', sans-serif" }}
                    >
                      Home Cleaning (Lydine)
                    </p>
                    <a
                      href="tel:+18569810930"
                      className="font-bold text-base"
                      style={{ color: CHARCOAL, fontFamily: "'Manrope', sans-serif" }}
                    >
                      856-981-0930
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: NAVY_800 }}
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-wide mb-0.5"
                      style={{ color: "#6B7280", fontFamily: "'Oswald', sans-serif" }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:diamondhomeservicesofflorida@gmail.com"
                      className="font-bold text-sm"
                      style={{ color: CHARCOAL, fontFamily: "'Manrope', sans-serif" }}
                    >
                      diamondhomeservicesofflorida@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: NAVY_800 }}
                  >
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-wide mb-0.5"
                      style={{ color: "#6B7280", fontFamily: "'Oswald', sans-serif" }}
                    >
                      Service Area
                    </p>
                    <p
                      className="font-bold text-base"
                      style={{ color: CHARCOAL, fontFamily: "'Manrope', sans-serif" }}
                    >
                      Nassau County, FL
                      <br />
                      Rooted in Tributary, Yulee
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-5" style={{ borderTop: "1px solid #E2DDD4" }}>
                <p
                  className="text-xs font-bold uppercase tracking-wide mb-1"
                  style={{ color: "#6B7280", fontFamily: "'Oswald', sans-serif" }}
                >
                  Hours
                </p>
                <p
                  className="text-sm"
                  style={{ color: "#4A5568", fontFamily: "'Manrope', sans-serif" }}
                >
                  Mon–Fri: 7:00 AM – 6:00 PM &nbsp;|&nbsp; Sat: 8:00 AM – 4:00 PM &nbsp;|&nbsp; Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STAR RATINGS STRIP ── */}
      <section className="py-8" style={{ backgroundColor: NAVY_900 }}>
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-current" style={{ color: GOLD_500 }} />
              ))}
              <span
                className="ml-2 font-bold text-white text-sm"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                5.0 Average Rating · 100+ Happy Customers
              </span>
            </div>
            <Link
              href="/testimonials"
              className="text-sm font-bold transition-colors hover:underline"
              style={{ color: GOLD_300, fontFamily: "'Manrope', sans-serif" }}
            >
              Read Our Reviews →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
