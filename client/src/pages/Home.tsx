/* ============================================================
   Home Page — Diamond Home Services LLC
   Umbrella brand: lawn + cleaning services
   Service area: Nassau County, rooted in the Tributary community
   Phone: 856-371-3971 | Email: mpetrutz@yahoo.com
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
const HERO_IMAGE = "/manus-storage/diamond-home-hero_15ba2efb.png";
const LAWN_IMAGE = "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80";
const CLEAN_IMAGE = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80";

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
    accent: "oklch(0.35 0.10 145)",
  },
  {
    icon: Sparkles,
    title: "A Diamond Girl",
    subtitle: "Home Cleaning Service",
    description: "Lidone delivers a diamond-level deep clean every time. From top-to-bottom deep cleans to move-in/move-out services — she makes every home shine like new.",
    href: "/diamond-girl",
    logo: DIAMOND_GIRL_LOGO,
    phone: "856-981-0930",
    phoneHref: "tel:+18569810930",
    image: CLEAN_IMAGE,
    accent: "oklch(0.45 0.15 340)",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const s1 = useFadeUp();
  const s2 = useFadeUp();
  const s3 = useFadeUp();
  const s4 = useFadeUp();
  const s5 = useFadeUp();

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onScroll = () => { el.style.transform = `translateY(${window.scrollY * 0.3}px)`; };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(0.97 0.02 90)" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div ref={heroRef} className="absolute inset-0 will-change-transform">
          <img src={HERO_IMAGE} alt="Diamond Home Services LLC" className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.10 0.06 145 / 0.82) 0%, oklch(0.10 0.06 145 / 0.55) 55%, oklch(0.05 0.03 145 / 0.15) 100%)" }} />

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6 px-4 py-1.5 rounded-full"
              style={{ backgroundColor: "oklch(0.72 0.15 75 / 0.2)", color: "oklch(0.88 0.12 80)", fontFamily: "'Nunito Sans', sans-serif", border: "1px solid oklch(0.72 0.15 75 / 0.3)" }}
            >
              <MapPin className="w-3.5 h-3.5" />
              Nassau County · Rooted in the Tributary Community
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Diamond{" "}
              <span style={{ color: "oklch(0.82 0.12 80)" }}>Home</span>
              <br />Services LLC
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
              style={{ color: "oklch(0.88 0.03 90)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Your trusted family-owned home services team. From a perfectly manicured lawn to a spotlessly clean home — Mike and Lidone handle it all with pride, right here in Nassau County, Florida.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/diamond-cutz"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-base transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                style={{ backgroundColor: "oklch(0.72 0.15 75)", color: "oklch(0.18 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Lawn & Landscaping
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/diamond-girl"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: "oklch(1 0 0 / 0.12)", color: "white", border: "1px solid oklch(1 0 0 / 0.3)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Home Cleaning
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-5">
              {["Licensed & Insured", "Free Estimates", "Family Owned", "Satisfaction Guaranteed"].map((b) => (
                <div key={b} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" style={{ color: "oklch(0.72 0.15 75)" }} />
                  <span className="text-sm font-semibold text-white" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR SERVICES ── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.97 0.02 90)" }}>
        <div className="container">
          <div ref={s1} className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full" style={{ backgroundColor: "oklch(0.35 0.10 145 / 0.1)", color: "oklch(0.35 0.10 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}>
              Two Businesses, One Family
            </h2>
            <p className="text-base mt-3 max-w-xl mx-auto" style={{ color: "oklch(0.40 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Mike handles the outdoors. Lidone handles the indoors. Together, they've built something special for the Nassau County community.
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
                >
                  <div className="relative h-52 overflow-hidden">
                    <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${svc.accent} 0%, transparent 60%)` }} />
                    <div className="absolute bottom-4 left-5">
                      <img src={svc.logo} alt={svc.title} className="h-16 w-auto object-contain drop-shadow-lg" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5" style={{ color: svc.accent }} />
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: svc.accent, fontFamily: "'Nunito Sans', sans-serif" }}>{svc.subtitle}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}>{svc.title}</h3>
                    <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "oklch(0.40 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}>{svc.description}</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={svc.href}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md font-bold text-sm transition-all duration-200 hover:shadow-md"
                        style={{ backgroundColor: svc.accent, color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        Learn More <ChevronRight className="w-4 h-4" />
                      </Link>
                      <a
                        href={svc.phoneHref}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md font-bold text-sm transition-all duration-200"
                        style={{ backgroundColor: "oklch(0.94 0.02 85)", color: "oklch(0.25 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}
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
      <section className="py-16" style={{ backgroundColor: "oklch(0.25 0.10 145)" }}>
        <div className="container">
          <div ref={s4} className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "oklch(0.72 0.15 75)" }}>
              <Wrench className="w-8 h-8" style={{ color: "oklch(0.18 0.01 60)" }} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block text-xs font-bold uppercase tracking-widest mb-2 px-3 py-1 rounded-full" style={{ backgroundColor: "oklch(0.72 0.15 75 / 0.2)", color: "oklch(0.82 0.12 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Commercial Services
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Lora', serif" }}>
                We Also Work With Businesses
              </h3>
              <p className="text-base" style={{ color: "oklch(0.82 0.05 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Offices, retail spaces, commercial properties, and more throughout Nassau County. Whether it's regular lawn maintenance or recurring cleaning contracts — we'd love to partner with your business. Call or text us for a custom quote.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col gap-3">
              <a
                href="tel:+18563713971"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-md font-bold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
                style={{ backgroundColor: "oklch(0.72 0.15 75)", color: "oklch(0.18 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <Phone className="w-4 h-4" />
                Call or Text for a Quote
              </a>
              <a
                href="mailto:mpetrutz@yahoo.com"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-md font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
                style={{ backgroundColor: "oklch(1 0 0 / 0.10)", color: "white", border: "1px solid oklch(1 0 0 / 0.25)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <Mail className="w-4 h-4" />
                mpetrutz@yahoo.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.93 0.03 85)" }}>
        <div className="container">
          <div ref={s5} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full" style={{ backgroundColor: "oklch(0.35 0.10 145 / 0.1)", color: "oklch(0.35 0.10 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Where We Serve
              </span>
              <h2 className="text-4xl font-bold mb-5 leading-tight" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}>
                Proudly Serving Nassau County, Florida
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Based right here in the Tributary community of Yulee, Mike and Lidone serve homeowners and businesses throughout Nassau County. If you're not sure whether we cover your area, just give us a call — we're always happy to help.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Tributary Community", "Yulee, FL 32097", "Fernandina Beach", "Callahan", "Nassau County", "Surrounding Areas"].map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.35 0.10 145)" }} />
                    <span className="text-sm font-semibold" style={{ color: "oklch(0.25 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}>{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-5" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}>Get in Touch</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.35 0.10 145)" }}>
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: "oklch(0.50 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Lawn & Landscaping (Mike)</p>
                    <a href="tel:+18563713971" className="font-bold text-base" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>856-371-3971</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.45 0.15 340)" }}>
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: "oklch(0.50 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Home Cleaning (Lidone)</p>
                    <a href="tel:+18569810930" className="font-bold text-base" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>856-981-0930</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.35 0.10 145)" }}>
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: "oklch(0.50 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Email</p>
                    <a href="mailto:mpetrutz@yahoo.com" className="font-bold text-base" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>mpetrutz@yahoo.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.35 0.10 145)" }}>
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: "oklch(0.50 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Service Area</p>
                    <p className="font-bold text-base" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Nassau County, FL<br />Rooted in Tributary, Yulee</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: "oklch(0.50 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Hours</p>
                <p className="text-sm" style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Mon–Fri: 7:00 AM – 6:00 PM &nbsp;|&nbsp; Sat: 8:00 AM – 4:00 PM &nbsp;|&nbsp; Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
