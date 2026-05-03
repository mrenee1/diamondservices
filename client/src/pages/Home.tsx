/* ============================================================
   Home Page — Diamond Cutz Lawn and Landscaping
   Design: "Tributary Roots" — asymmetric hero, editorial layout
   Real business: Mike Petrutz | 856-371-3971 | mpetrutz@yahoo.com
   Address: 75307 Plumbago Trace, Yulee, FL 32097
   ============================================================ */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  Scissors, Leaf, Sprout, Droplets, Sun, Layers,
  Star, Phone, Mail, MapPin, ChevronRight, CheckCircle2,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663246754363/VwfaAMsNXt8Vvu7ShFAiqw/hero-lawn-oWPLhYgsz7kkDamj7TpWbK.webp";
const LANDSCAPING_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663246754363/VwfaAMsNXt8Vvu7ShFAiqw/landscaping-service-mCZNgGDiBiqQtAsGgkGgTo.webp";
const GARDEN_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663246754363/VwfaAMsNXt8Vvu7ShFAiqw/garden-design-fNaQRmt8Z5byScefT7HNRr.webp";
const AERIAL_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663246754363/VwfaAMsNXt8Vvu7ShFAiqw/community-aerial-niK7kr7YWMewt9c5crhdWz.webp";
const MOWING_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663246754363/VwfaAMsNXt8Vvu7ShFAiqw/lawn-mowing-dXitqnYLewkAYowYncrsbg.webp";

const services = [
  {
    icon: Scissors,
    title: "Lawn Mowing & Edging",
    desc: "Precise mowing, crisp edging, and clean blow-off for a perfectly groomed lawn every visit.",
    badge: "Most Popular",
  },
  {
    icon: Leaf,
    title: "Landscape Design & Install",
    desc: "Custom Florida-friendly landscape designs with tropical plants, shrubs, and colorful accents.",
    badge: null,
  },
  {
    icon: Sprout,
    title: "Fertilization & Weed Control",
    desc: "Targeted fertilization programs and weed control to keep your lawn thick, green, and healthy.",
    badge: null,
  },
  {
    icon: Layers,
    title: "Sod Installation",
    desc: "Fresh St. Augustine or Zoysia sod installation for a lush, instant lawn transformation.",
    badge: null,
  },
  {
    icon: Droplets,
    title: "Irrigation Services",
    desc: "Sprinkler system installation, repair, and maintenance to keep your landscape hydrated efficiently.",
    badge: null,
  },
  {
    icon: Sun,
    title: "Seasonal Clean-Up",
    desc: "Spring and fall clean-up services including leaf removal, bed prep, and mulch refreshing.",
    badge: null,
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Tributary, Yulee FL",
    rating: 5,
    text: "Absolutely love coming home to a perfectly manicured lawn. The crew is always on time, professional, and the results speak for themselves. Best lawn service in Tributary!",
  },
  {
    name: "James & Linda T.",
    location: "Tributary, Yulee FL",
    rating: 5,
    text: "They transformed our backyard into a tropical paradise. The landscape design exceeded our expectations and the installation was flawless. Highly recommend!",
  },
  {
    name: "Robert K.",
    location: "Tributary, Yulee FL",
    rating: 5,
    text: "Reliable, affordable, and they actually care about the quality of their work. Our lawn has never looked better since we switched to Tributary Lawn & Landscape.",
  },
  {
    name: "Michelle D.",
    location: "Tributary, Yulee FL",
    rating: 5,
    text: "The online booking system is so convenient. I booked my first service in minutes and they showed up right on schedule. Great communication throughout.",
  },
];

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = ref.current?.querySelectorAll(".fade-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function Home() {
  const sectionRef = useScrollAnimation();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(0.97 0.02 90)" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: "oklch(0.18 0.01 60)",
        }}
      >
        {/* Hero background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Beautiful Florida lawn in Tributary community"
            className="w-full h-full object-cover opacity-60"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(105deg, oklch(0.18 0.08 145 / 0.85) 40%, oklch(0.18 0.01 60 / 0.3) 100%)",
            }}
          />
        </div>

        {/* Hero content */}
        <div className="container relative z-10 pt-24 pb-20">
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{
                backgroundColor: "oklch(0.72 0.15 75 / 0.2)",
                color: "oklch(0.82 0.12 80)",
                border: "1px solid oklch(0.72 0.15 75 / 0.4)",
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              <Leaf className="w-3.5 h-3.5" />
              Serving Tributary · Yulee, FL 32097
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Diamond Cutz{" "}
              <span style={{ color: "oklch(0.82 0.12 80)" }}>
                Lawn & Landscaping
              </span>
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
              style={{ color: "oklch(0.88 0.03 90)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Professional lawn care and landscaping tailored for the Tributary community. From weekly mowing to complete landscape transformations — we keep your home looking resort-ready. Family-owned and operated by Mike & his wife, right here in Yulee, FL.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-base transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                style={{
                  backgroundColor: "oklch(0.72 0.15 75)",
                  color: "oklch(0.18 0.01 60)",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                Book a Service
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+18563713971"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "oklch(1 0 0 / 0.12)",
                  color: "white",
                  border: "1px solid oklch(1 0 0 / 0.3)",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                <Phone className="w-4 h-4" />
                856-371-3971
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-8">
              {["Licensed & Insured", "Free Estimates", "Satisfaction Guaranteed", "Locally Owned"].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" style={{ color: "oklch(0.72 0.15 75)" }} />
                  <span className="text-sm" style={{ color: "oklch(0.88 0.03 90)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Diagonal bottom clip */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{
            background: "oklch(0.97 0.02 90)",
            clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
          }}
        />
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ backgroundColor: "oklch(0.35 0.10 145)" }} className="py-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "500+", label: "Lawns Served" },
              { num: "5★", label: "Average Rating" },
              { num: "3+", label: "Years in Tributary" },
              { num: "100%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-3xl md:text-4xl font-bold mb-1"
                  style={{ color: "oklch(0.82 0.12 80)", fontFamily: "'Lora', serif" }}
                >
                  {stat.num}
                </p>
                <p
                  className="text-sm font-semibold uppercase tracking-wide"
                  style={{ color: "oklch(0.80 0.04 145)", fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-20" ref={sectionRef}>
        <div className="container">
          <div className="text-center mb-14 fade-up">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
              style={{
                backgroundColor: "oklch(0.35 0.10 145 / 0.1)",
                color: "oklch(0.35 0.10 145)",
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              What We Do
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}
            >
              Complete Lawn & Landscape Care
            </h2>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: "oklch(0.45 0.03 80)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              From routine maintenance to full landscape transformations, we handle every aspect of your outdoor space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="card-service p-6 fade-up"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "oklch(0.35 0.10 145 / 0.1)" }}
                    >
                      <Icon className="w-6 h-6" style={{ color: "oklch(0.35 0.10 145)" }} />
                    </div>
                    {service.badge && (
                      <span className="badge-amber">{service.badge}</span>
                    )}
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "oklch(0.45 0.03 80)", fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {service.desc}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-sm font-bold transition-colors"
                    style={{ color: "oklch(0.35 0.10 145)", fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    Learn more <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10 fade-up">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-bold text-base transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              style={{
                backgroundColor: "oklch(0.35 0.10 145)",
                color: "oklch(0.97 0.02 90)",
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT / COMMUNITY ── */}
      <section
        id="about"
        className="py-20"
        style={{ backgroundColor: "oklch(0.93 0.03 85)" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <div className="relative fade-up">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={AERIAL_IMAGE}
                  alt="Tributary community aerial view"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 w-48 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden md:block"
              >
                <img
                  src={LANDSCAPING_IMAGE}
                  alt="Professional landscaping service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="fade-up">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{
                  backgroundColor: "oklch(0.35 0.10 145 / 0.1)",
                  color: "oklch(0.35 0.10 145)",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                About Us
              </span>
              <h2
                className="text-4xl font-bold mb-5 leading-tight"
                style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}
              >
                Built from the Ground Up — Right Here in Yulee
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                We're a hardworking husband-and-wife team who brought our family from South Jersey down to the Yulee, Florida area with one goal in mind: to give our youngest son a better opportunity for his future. What started on a whim with just a lawnmower and a single house to clean quickly turned into something much bigger than we ever imagined.
              </p>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Through dedication, word of mouth, and a commitment to doing every job right, our small start has grown rapidly throughout the Tributary community. We truly enjoy helping our neighbors and take pride in making our community a cleaner, more beautiful place to live. This has been a true American Dream!
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Family-owned & operated by Mike & his wife",
                  "Serving the Tributary community in Yulee, FL",
                  "Every budget — tailored to the individual homeowner",
                  "Flexible weekly, bi-weekly & monthly plans",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "oklch(0.35 0.10 145)" }} />
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "oklch(0.25 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-bold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  backgroundColor: "oklch(0.72 0.15 75)",
                  color: "oklch(0.18 0.01 60)",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                Get a Free Estimate
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY STRIP ── */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.97 0.02 90)" }}>
        <div className="container">
          <div className="text-center mb-10 fade-up">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}
            >
              Our Work in Tributary
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 fade-up">
            <div className="rounded-xl overflow-hidden shadow-md h-56 md:h-72">
              <img src={MOWING_IMAGE} alt="Lawn mowing service" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md h-56 md:h-72">
              <img src={GARDEN_IMAGE} alt="Garden design" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md h-56 md:h-72">
              <img src={LANDSCAPING_IMAGE} alt="Landscaping service" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        id="testimonials"
        className="py-20"
        style={{ backgroundColor: "oklch(0.35 0.10 145)" }}
      >
        <div className="container">
          <div className="text-center mb-14 fade-up">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
              style={{
                backgroundColor: "oklch(0.72 0.15 75 / 0.2)",
                color: "oklch(0.82 0.12 80)",
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              Customer Reviews
            </span>
            <h2
              className="text-4xl font-bold text-white"
              style={{ fontFamily: "'Lora', serif" }}
            >
              What Tributary Residents Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 fade-up"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" style={{ color: "oklch(0.82 0.12 80)" }} />
                  ))}
                </div>
                <p
                  className="text-base leading-relaxed mb-4 italic"
                  style={{ color: "oklch(0.92 0.02 90)", fontFamily: "'Lora', serif" }}
                >
                  "{t.text}"
                </p>
                <div>
                  <p className="font-bold text-white text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "oklch(0.75 0.04 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOK CTA ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "oklch(0.97 0.02 90)" }}
      >
        <div className="container relative z-10">
          <div
            className="rounded-2xl p-10 md:p-14 text-center"
            style={{
              background: "linear-gradient(135deg, oklch(0.25 0.10 145) 0%, oklch(0.35 0.10 145) 100%)",
            }}
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
              style={{
                backgroundColor: "oklch(0.72 0.15 75 / 0.2)",
                color: "oklch(0.82 0.12 80)",
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              Easy Online Booking
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Ready for a Beautiful Lawn?
            </h2>
            <p
              className="text-lg mb-8 max-w-lg mx-auto"
              style={{ color: "oklch(0.85 0.04 145)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Book your service online in minutes. Choose your date, select your services, and we'll take care of the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold text-base transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                style={{
                  backgroundColor: "oklch(0.72 0.15 75)",
                  color: "oklch(0.18 0.01 60)",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                Book Online Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+18563713971"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "oklch(1 0 0 / 0.12)",
                  color: "white",
                  border: "1px solid oklch(1 0 0 / 0.3)",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                <Phone className="w-5 h-5" />
                Call Us Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className="py-20"
        style={{ backgroundColor: "oklch(0.93 0.03 85)" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="fade-up">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{
                  backgroundColor: "oklch(0.35 0.10 145 / 0.1)",
                  color: "oklch(0.35 0.10 145)",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                Get In Touch
              </span>
              <h2
                className="text-4xl font-bold mb-5"
                style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}
              >
                Let's Talk About Your Lawn
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Have questions or ready to get started? Reach out and we'll get back to you promptly. Free estimates always available for Tributary residents.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.35 0.10 145)" }}
                  >
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: "oklch(0.50 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Phone</p>
                    <a href="tel:+18563713971" className="font-bold text-base" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      856-371-3971
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.35 0.10 145)" }}
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: "oklch(0.50 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Email</p>
                    <a href="mailto:mpetrutz@yahoo.com" className="font-bold text-base" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      mpetrutz@yahoo.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.35 0.10 145)" }}
                  >
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: "oklch(0.50 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Service Area</p>
                    <p className="font-bold text-base" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      75307 Plumbago Trace, Yulee, FL 32097
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-up">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}
                >
                  Request a Free Estimate
                </h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you! We'll be in touch within 24 hours.");
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John"
                        className="w-full px-3 py-2.5 rounded-md border text-sm focus:outline-none focus:ring-2 transition-all"
                        style={{
                          borderColor: "oklch(0.88 0.03 85)",
                          fontFamily: "'Nunito Sans', sans-serif",
                          "--tw-ring-color": "oklch(0.35 0.10 145)",
                        } as React.CSSProperties}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Smith"
                        className="w-full px-3 py-2.5 rounded-md border text-sm focus:outline-none focus:ring-2 transition-all"
                        style={{ borderColor: "oklch(0.88 0.03 85)", fontFamily: "'Nunito Sans', sans-serif" }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-3 py-2.5 rounded-md border text-sm focus:outline-none focus:ring-2 transition-all"
                      style={{ borderColor: "oklch(0.88 0.03 85)", fontFamily: "'Nunito Sans', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="(856) 000-0000"
                      className="w-full px-3 py-2.5 rounded-md border text-sm focus:outline-none focus:ring-2 transition-all"
                      style={{ borderColor: "oklch(0.88 0.03 85)", fontFamily: "'Nunito Sans', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      Service Needed
                    </label>
                    <select
                      className="w-full px-3 py-2.5 rounded-md border text-sm focus:outline-none focus:ring-2 transition-all"
                      style={{ borderColor: "oklch(0.88 0.03 85)", fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      <option value="mowing">Lawn Mowing & Edging</option>
                      <option value="landscape">Landscape Design & Install</option>
                      <option value="fertilization">Fertilization & Weed Control</option>
                      <option value="sod">Sod Installation</option>
                      <option value="irrigation">Irrigation Services</option>
                      <option value="cleanup">Seasonal Clean-Up</option>
                      <option value="handyman">Handyman Services</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your lawn..."
                      className="w-full px-3 py-2.5 rounded-md border text-sm focus:outline-none focus:ring-2 transition-all resize-none"
                      style={{ borderColor: "oklch(0.88 0.03 85)", fontFamily: "'Nunito Sans', sans-serif" }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-md font-bold text-base transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                    style={{
                      backgroundColor: "oklch(0.35 0.10 145)",
                      color: "oklch(0.97 0.02 90)",
                      fontFamily: "'Nunito Sans', sans-serif",
                    }}
                  >
                    Send Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
