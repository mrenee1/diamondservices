/* ============================================================
   Home Page — Diamond Home Services LLC
   Theme: Diamond Standard — Navy + Field Green + Gold + White
   Hero: full-width image at top, text in navy band below (no overlap)
   Service area: Nassau County, rooted in the Tributary community
   Phone: 856-371-3971 (Mike) | 856-981-0930 (Lydine)
   ============================================================ */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  Phone, Mail, MapPin, ArrowRight, CheckCircle2,
  Scissors, Sparkles, Wrench, Star, ChevronRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DIAMOND_CUTZ_LOGO = "/manus-storage/pasted_file_MwGanH_image_7f7a812c.png";
const DIAMOND_GIRL_LOGO = "/manus-storage/diamond-girl-logo_26e7435d.png";
const HERO_IMAGE = "/manus-storage/diamond-home-hero_15ba2efb.png";
const LAWN_IMAGE = "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80";
const CLEAN_IMAGE = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80";

// Brand colors from hero image
const NAVY      = "oklch(0.22 0.08 255)";
const NAVY_DARK = "oklch(0.14 0.06 255)";
const NAVY_MID  = "oklch(0.28 0.08 255)";
const GREEN     = "oklch(0.45 0.14 145)";
const GREEN_DK  = "oklch(0.30 0.12 145)";
const GOLD      = "oklch(0.75 0.16 75)";
const GOLD_LT   = "oklch(0.85 0.13 80)";
const WHITE     = "oklch(1 0 0)";
const OFFWHITE  = "oklch(0.97 0.01 255)";
const CHARCOAL  = "oklch(0.18 0.02 255)";

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; } },
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
    description: "Professional lawn mowing, edging, landscape design, fertilization, sod installation, and more. Mike keeps your outdoor spaces looking resort-ready year-round throughout Nassau County.",
    href: "/diamond-cutz",
    logo: DIAMOND_CUTZ_LOGO,
    phone: "856-371-3971",
    phoneHref: "tel:+18563713971",
    image: LAWN_IMAGE,
    accent: GREEN,
    accentDark: GREEN_DK,
  },
  {
    icon: Sparkles,
    title: "A Diamond Girl",
    subtitle: "Home Cleaning Service",
    description: "Lydine delivers a diamond-level deep clean every time. From top-to-bottom deep cleans to move-in/move-out services — she makes every home shine like new.",
    href: "/diamond-girl",
    logo: DIAMOND_GIRL_LOGO,
    phone: "856-981-0930",
    phoneHref: "tel:+18569810930",
    image: CLEAN_IMAGE,
    accent: "oklch(0.45 0.15 340)",
    accentDark: "oklch(0.30 0.12 340)",
  },
];

export default function Home() {
  const s1 = useFadeUp();
  const s2 = useFadeUp();
  const s3 = useFadeUp();
  const s4 = useFadeUp();
  const s5 = useFadeUp();

  return (
    <div className="min-h-screen" style={{ backgroundColor: OFFWHITE }}>
      <Navbar />

      {/* ── HERO — full-width stadium photo with the official logo centered on top ── */}
      <section className="relative w-full pt-16 overflow-hidden" style={{ backgroundColor: NAVY_DARK }}>
        {/* Stadium scene background */}
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          className="w-full block"
          style={{ maxHeight: "640px", objectFit: "cover", objectPosition: "center top" }}
        />
        {/* Soft dark vignette so the logo pops */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 60% at center, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.45) 100%)",
          }}
        />
        {/* Centered official Diamond Home Services logo */}
        <div className="absolute inset-0 flex items-center justify-center px-6" style={{ paddingTop: "4rem" }}>
          <img
            src="/manus-storage/pasted_file_MwGanH_image_7f7a812c.png"
            alt="Diamond Home Services LLC"
            className="h-auto object-contain"
            style={{
              width: "clamp(280px, 55vw, 720px)",
              filter: "drop-shadow(0 12px 40px rgba(0,0,0,0.55))",
            }}
          />
        </div>
      </section>

      {/* ── HERO TEXT BAND — navy bar below image ── */}
      <section style={{ backgroundColor: NAVY }}>
        <div className="container py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{ backgroundColor: `${GOLD}22`, color: GOLD_LT, border: `1px solid ${GOLD}44`, fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <MapPin className="w-3.5 h-3.5" />
                Nassau County · Rooted in the Tributary Community
              </div>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3"
                style={{ color: WHITE, fontFamily: "'Lora', serif" }}
              >
                Diamond{" "}
                <span style={{ color: GOLD }}>Home</span>{" "}
                Services LLC
              </h1>
              <p
                className="text-base md:text-lg max-w-xl"
                style={{ color: "oklch(0.82 0.03 255)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Your trusted family-owned home services team. From a perfectly manicured lawn to a spotlessly clean home — Mike and Lydine handle it all with pride, right here in Nassau County, Florida.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <Link
                href="/diamond-cutz"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-base transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
                style={{ backgroundColor: GREEN, color: WHITE, fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Lawn & Landscaping
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/diamond-girl"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-base transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
                style={{ backgroundColor: GOLD, color: CHARCOAL, fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Home Cleaning
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mt-6 pt-6" style={{ borderTop: `1px solid oklch(1 0 0 / 0.12)` }}>
            {["Licensed & Insured", "Free Estimates", "Family Owned", "Satisfaction Guaranteed"].map((b) => (
              <div key={b} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" style={{ color: GOLD }} />
                <span className="text-sm font-semibold" style={{ color: "oklch(0.88 0.02 255)", fontFamily: "'Nunito Sans', sans-serif" }}>{b}</span>
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
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
              style={{ backgroundColor: `${GREEN}18`, color: GREEN, fontFamily: "'Nunito Sans', sans-serif" }}
            >
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: CHARCOAL, fontFamily: "'Lora', serif" }}>
              Two Businesses, One Family
            </h2>
            <p className="text-base mt-3 max-w-xl mx-auto" style={{ color: "oklch(0.40 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>
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
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  style={{ border: `1px solid oklch(0.88 0.02 255)` }}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${svc.accentDark} 0%, transparent 60%)` }} />
                    <div className="absolute bottom-4 left-5">
                      <img src={svc.logo} alt={svc.title} className="h-16 w-auto object-contain drop-shadow-lg" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5" style={{ color: svc.accent }} />
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: svc.accent, fontFamily: "'Nunito Sans', sans-serif" }}>{svc.subtitle}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: CHARCOAL, fontFamily: "'Lora', serif" }}>{svc.title}</h3>
                    <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "oklch(0.40 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>{svc.description}</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={svc.href}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md font-bold text-sm transition-all duration-200 hover:shadow-md"
                        style={{ backgroundColor: svc.accent, color: WHITE, fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        Learn More <ChevronRight className="w-4 h-4" />
                      </Link>
                      <a
                        href={svc.phoneHref}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md font-bold text-sm transition-all duration-200"
                        style={{ backgroundColor: "oklch(0.93 0.02 255)", color: CHARCOAL, fontFamily: "'Nunito Sans', sans-serif" }}
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
      <section className="py-16" style={{ backgroundColor: NAVY }}>
        <div className="container">
          <div ref={s4} className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: GOLD }}>
              <Wrench className="w-8 h-8" style={{ color: CHARCOAL }} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-2 px-3 py-1 rounded-full"
                style={{ backgroundColor: `${GOLD}22`, color: GOLD_LT, fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Commercial Services
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Lora', serif" }}>
                We Also Work With Businesses
              </h3>
              <p className="text-base" style={{ color: "oklch(0.80 0.03 255)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Offices, retail spaces, commercial properties, and more throughout Nassau County. Whether it's regular lawn maintenance or recurring cleaning contracts — we'd love to partner with your business. Call or text us for a custom quote.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col gap-3">
              <a
                href="tel:+18563713971"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-md font-bold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
                style={{ backgroundColor: GOLD, color: CHARCOAL, fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <Phone className="w-4 h-4" />
                Call or Text for a Quote
              </a>
              <a
                href="mailto:diamondhomeservicesofflorida@gmail.com"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-md font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
                style={{ backgroundColor: "oklch(1 0 0 / 0.10)", color: WHITE, border: "1px solid oklch(1 0 0 / 0.25)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <Mail className="w-4 h-4" />
                diamondhomeservicesofflorida@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.93 0.02 255)" }}>
        <div className="container">
          <div ref={s5} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{ backgroundColor: `${GREEN}18`, color: GREEN, fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Where We Serve
              </span>
              <h2 className="text-4xl font-bold mb-5 leading-tight" style={{ color: CHARCOAL, fontFamily: "'Lora', serif" }}>
                Proudly Serving Nassau County, Florida
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "oklch(0.35 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Based right here in the Tributary community of Yulee, Mike and Lydine serve homeowners and businesses throughout Nassau County. If you're not sure whether we cover your area, just give us a call — we're always happy to help.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Tributary Community", "Yulee, FL 32097", "Fernandina Beach", "Callahan", "Nassau County", "Surrounding Areas"].map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: GREEN }} />
                    <span className="text-sm font-semibold" style={{ color: "oklch(0.25 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8" style={{ border: `1px solid oklch(0.88 0.02 255)` }}>
              <h3 className="text-2xl font-bold mb-5" style={{ color: CHARCOAL, fontFamily: "'Lora', serif" }}>Get in Touch</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: GREEN }}>
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: "oklch(0.50 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>Lawn & Landscaping (Mike)</p>
                    <a href="tel:+18563713971" className="font-bold text-base" style={{ color: CHARCOAL, fontFamily: "'Nunito Sans', sans-serif" }}>856-371-3971</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.45 0.15 340)" }}>
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: "oklch(0.50 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>Home Cleaning (Lydine)</p>
                    <a href="tel:+18569810930" className="font-bold text-base" style={{ color: CHARCOAL, fontFamily: "'Nunito Sans', sans-serif" }}>856-981-0930</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: NAVY }}>
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: "oklch(0.50 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>Email</p>
                    <a href="mailto:diamondhomeservicesofflorida@gmail.com" className="font-bold text-base" style={{ color: CHARCOAL, fontFamily: "'Nunito Sans', sans-serif" }}>diamondhomeservicesofflorida@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: NAVY }}>
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: "oklch(0.50 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>Service Area</p>
                    <p className="font-bold text-base" style={{ color: CHARCOAL, fontFamily: "'Nunito Sans', sans-serif" }}>Nassau County, FL<br />Rooted in Tributary, Yulee</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: "oklch(0.50 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>Hours</p>
                <p className="text-sm" style={{ color: "oklch(0.35 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Mon–Fri: 7:00 AM – 6:00 PM &nbsp;|&nbsp; Sat: 8:00 AM – 4:00 PM &nbsp;|&nbsp; Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STAR RATINGS STRIP ── */}
      <section className="py-8" style={{ backgroundColor: NAVY_DARK }}>
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" style={{ color: GOLD }} />)}
              <span className="ml-2 font-bold text-white text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>5.0 Average Rating · 100+ Happy Customers</span>
            </div>
            <Link
              href="/testimonials"
              className="text-sm font-bold transition-colors hover:underline"
              style={{ color: GOLD_LT, fontFamily: "'Nunito Sans', sans-serif" }}
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
