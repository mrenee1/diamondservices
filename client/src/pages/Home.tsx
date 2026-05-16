/* ============================================================
   Home Page — Diamond Home Services LLC
   Theme: Diamond Standard — Navy + Gold (+ green Cutz hint only)
   ============================================================ */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Scissors,
  Sparkles,
  Wrench,
  Star,
  ChevronRight,
  Shield,
  Heart,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroImage from "@/components/HeroImage";
import BrandShineCard from "@/components/BrandShineCard";
import BorderGlow from "@/components/BorderGlow";
import { BRAND } from "@/lib/brand";
import { CONTACT } from "@/lib/contact";
import { ContactPhone } from "@/components/ContactPhone";
import ContactEmail from "@/components/ContactEmail";

/** Approximate hex for hero BorderGlow card backgrounds (matches BRAND navy / gold) */
const NAVY_HEX = "#1b2845";
const GOLD_HEX = "#c4a035";

const HERO_IMAGE = "/manus-storage/514ED805-30BB-4F65-B28C-DBEDD694640B_59fc3e61.png";
const CUTZ_HERO = "/manus-storage/diamond-cutz-hero-cropped_728f233e.png";
const GIRL_HERO = "/manus-storage/1FF4FDBD-00A7-477C-89BC-36C8611DB049_3ec7f2e3.png";
const COUPLE_PHOTO = "/manus-storage/mike-lydine-couple_d892a85f.png";

const {
  navy: NAVY,
  navyDark: NAVY_DARK,
  cutzAccent: CUTZ,
  girlPink: GIRL_PINK,
  girlTeal: GIRL_TEAL,
  gold: GOLD,
  goldLight: GOLD_LT,
  white: WHITE,
  offwhite: OFFWHITE,
  charcoal: CHARCOAL,
  bodyMuted: BODY_MUTED,
  sectionGray: SECTION_GRAY,
} = BRAND;

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
    tagline: "Beautiful Lawns. Diamond Standard.",
    description:
      "Professional lawn mowing, edging, landscape design, fertilization, sod installation, and more. Mike keeps your outdoor spaces looking resort-ready year-round throughout Nassau County.",
    href: "/diamond-cutz",
    image: CUTZ_HERO,
    contact: CONTACT.mike,
    phoneLabel: "Call Mike",
    cardClass: "service-card-brand service-card-brand--cutz",
    shineVariant: "cutz" as const,
    iconColor: CUTZ,
    subtitleColor: CUTZ,
    taglineColor: CUTZ,
    checkColor: CUTZ,
    learnClass: "btn-brand-primary",
    phoneClass: "btn-brand-outline",
    highlights: [
      "Lawn mowing & edging",
      "Landscape design & install",
      "Fertilization & weed control",
      "Sod installation",
    ],
  },
  {
    icon: Sparkles,
    title: "A Diamond Girl",
    subtitle: "Home Cleaning Service",
    tagline: "Diamond Clean. Sparkling Results.",
    description:
      "Lydine delivers a diamond-level deep clean every time. From top-to-bottom deep cleans to move-in/move-out services — she makes every home shine like new.",
    href: "/diamond-girl",
    image: GIRL_HERO,
    contact: CONTACT.lydine,
    phoneLabel: "Call Lydine",
    cardClass: "service-card-brand service-card-brand--girl",
    shineVariant: "girl" as const,
    iconColor: GIRL_PINK,
    subtitleColor: GIRL_PINK,
    taglineColor: GIRL_TEAL,
    checkColor: GIRL_PINK,
    learnClass: "btn-brand-girl",
    phoneClass: "btn-brand-girl-outline",
    highlights: [
      "Diamond Deep Clean",
      "Recurring Diamond Shine",
      "Move-in / move-out cleans",
      "Post-construction cleaning",
    ],
  },
];

const whyUs = [
  { icon: Heart, title: "Family Owned", text: "Mike and Lydine built this business with pride — personal service on every job." },
  { icon: Shield, title: "Licensed & Insured", text: "Professional, reliable crews you can trust at your home or business." },
  { icon: MapPin, title: "Nassau County Local", text: "Rooted in the Tributary community of Yulee — we know this area." },
];

const featuredReviews = [
  {
    quote:
      "Mike does an absolutely incredible job on our lawn. Our yard has never looked better — the neighbors keep asking who does our lawn!",
    name: "James R.",
    location: "Tributary, Yulee FL",
    business: "Diamond Cutz",
  },
  {
    quote:
      "Lydine is thorough, trustworthy, and my house literally sparkles after she's done. Diamond-level is the perfect name for it.",
    name: "Ashley P.",
    location: "Yulee, FL",
    business: "A Diamond Girl",
  },
];

export default function Home() {
  const s1 = useFadeUp();
  const s2 = useFadeUp();
  const s3 = useFadeUp();
  const s4 = useFadeUp();
  const s5 = useFadeUp();
  const s6 = useFadeUp();
  const s7 = useFadeUp();
  const s8 = useFadeUp();

  return (
    <div className="min-h-screen" style={{ backgroundColor: OFFWHITE }}>
      <Navbar />

      <section className="w-full pt-16" style={{ backgroundColor: NAVY_DARK }}>
        <HeroImage
          src={HERO_IMAGE}
          alt="Diamond Home Services LLC — Built for the Big Leagues. Lawn & Landscaping and Home Cleaning."
          objectPosition="48% center"
        />
      </section>

      <section style={{ backgroundColor: NAVY }}>
        <div className="container py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div
                className="label-caps inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full"
                style={{ backgroundColor: `${GOLD}22`, color: GOLD_LT, border: `1px solid ${GOLD}44` }}
              >
                <MapPin className="w-3.5 h-3.5" />
                Nassau County · Rooted in the Tributary Community
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3" style={{ color: WHITE }}>
                Diamond <span style={{ color: GOLD }}>Home</span> Services LLC
              </h1>
              <p className="text-base md:text-lg max-w-xl" style={{ color: BODY_MUTED }}>
                Your trusted family-owned home services team. From a perfectly manicured lawn to a spotlessly clean home — Mike and Lydine handle it all with pride, right here in Nassau County, Florida.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0 w-full md:w-auto min-w-[240px]">
              <BorderGlow
                className="border-glow-hero-cta w-full"
                edgeSensitivity={22}
                glowColor="48 78 70"
                backgroundColor={GOLD_HEX}
                borderRadius={8}
                glowRadius={22}
                glowIntensity={1.05}
                coneSpread={26}
                colors={["#f0d78c", "#ffffff", "#a88428"]}
                fillOpacity={0.3}
              >
                <Link href="/diamond-cutz" className="btn-brand-primary border-glow-hero-btn text-base px-7 py-3.5">
                  Lawn & Landscaping
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </BorderGlow>
              <BorderGlow
                className="border-glow-hero-cta border-glow-hero-cta--outline w-full"
                edgeSensitivity={22}
                glowColor="48 78 72"
                backgroundColor={NAVY_HEX}
                borderRadius={8}
                glowRadius={26}
                glowIntensity={1.2}
                coneSpread={28}
                animated
                colors={["#e8c96a", "#ffffff", "#c4a035"]}
                fillOpacity={0.4}
              >
                <Link href="/diamond-girl" className="btn-brand-outline-light border-glow-hero-btn text-base px-7 py-3.5">
                  Home Cleaning
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </BorderGlow>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 mt-6 pt-6" style={{ borderTop: "1px solid oklch(1 0 0 / 0.12)" }}>
            {["Licensed & Insured", "Free Estimates", "Family Owned", "Satisfaction Guaranteed"].map((b) => (
              <div key={b} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" style={{ color: GOLD }} />
                <span className="text-sm font-semibold" style={{ color: BRAND.navText }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" style={{ backgroundColor: OFFWHITE }}>
        <div className="container">
          <div ref={s1} className="text-center mb-14">
            <span
              className="label-caps inline-block mb-3 px-3 py-1 rounded-full"
              style={{ backgroundColor: `${GOLD}18`, color: GOLD }}
            >
              What We Do
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: CHARCOAL }}>
              Two Businesses, One Family
            </h2>
            <p className="text-base mt-3 max-w-xl mx-auto text-muted-brand">
              Mike handles the outdoors. Lydine handles the indoors. Together, they've built something special for the Nassau County community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <BrandShineCard key={svc.title} variant={svc.shineVariant} className={svc.cardClass}>
                  <div ref={i === 0 ? s2 : s3} className="flex flex-col h-full">
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <img src={svc.image} alt={svc.title} className="w-full h-full object-cover object-center scale-[1.02]" />
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col min-h-[300px]">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-5 h-5" style={{ color: svc.iconColor }} />
                      <span className="label-caps" style={{ color: svc.subtitleColor }}>{svc.subtitle}</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-1" style={{ color: CHARCOAL }}>{svc.title}</h3>
                    <p className="text-sm font-semibold italic mb-3" style={{ color: svc.taglineColor }}>{svc.tagline}</p>
                    <p className="text-sm leading-relaxed mb-4 text-muted-brand">{svc.description}</p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {svc.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-brand">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: svc.checkColor }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href={svc.href} className={`${svc.learnClass} flex-1 py-2.5 text-sm`}>
                        Learn More <ChevronRight className="w-4 h-4" />
                      </Link>
                      <a href={svc.contact.tel} className={`${svc.phoneClass} flex-1 py-2.5 text-sm justify-center`}>
                        <Phone className="w-4 h-4" /> {svc.phoneLabel}
                      </a>
                      <a href={svc.contact.sms} className={`${svc.phoneClass} flex-1 py-2.5 text-sm justify-center`}>
                        <MessageCircle className="w-4 h-4" /> Text
                      </a>
                    </div>
                  </div>
                  </div>
                </BrandShineCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16" style={{ backgroundColor: NAVY }}>
        <div className="container">
          <div ref={s6} className="text-center mb-10">
            <span className="label-caps inline-block mb-3 px-3 py-1 rounded-full" style={{ backgroundColor: `${GOLD}22`, color: GOLD_LT }}>
              The Diamond Standard
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Why Diamond Home Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center md:text-left p-6 rounded-xl" style={{ backgroundColor: "oklch(1 0 0 / 0.06)" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto md:mx-0 mb-4" style={{ backgroundColor: GOLD }}>
                    <Icon className="w-6 h-6" style={{ color: CHARCOAL }} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm" style={{ color: BODY_MUTED }}>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet Mike & Lydine */}
      <section className="py-16" style={{ backgroundColor: OFFWHITE }}>
        <div className="container">
          <div ref={s7} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden border-2" style={{ borderColor: GOLD }}>
              <img src={COUPLE_PHOTO} alt="Mike and Lydine, owners of Diamond Home Services" className="w-full h-auto object-cover" />
            </div>
            <div>
              <span className="label-caps inline-block mb-3 px-3 py-1 rounded-full" style={{ backgroundColor: `${GOLD}18`, color: GOLD }}>
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: CHARCOAL }}>
                Meet Mike & Lydine
              </h2>
              <p className="text-base leading-relaxed mb-4 text-muted-brand">
                We're a hardworking husband-and-wife team serving Nassau County with pride. Mike leads Diamond Cutz lawn and landscaping; Lydine leads A Diamond Girl home cleaning. Two specialist crews, one family name you can trust.
              </p>
              <p className="text-base leading-relaxed mb-6 text-muted-brand">
                Rooted right here in the Tributary community of Yulee, we built this business to give our family a better future — and to bring diamond-level care to every home we serve.
              </p>
              <Link href="/about" className="btn-brand-secondary">
                Read Our Full Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16" style={{ backgroundColor: SECTION_GRAY }}>
        <div className="container">
          <div ref={s8} className="text-center mb-10">
            <span className="label-caps inline-block mb-3 px-3 py-1 rounded-full" style={{ backgroundColor: `${GOLD}18`, color: GOLD }}>
              Customer Love
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: CHARCOAL }}>
              What Neighbors Are Saying
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {featuredReviews.map((review) => (
              <blockquote
                key={review.name}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm"
                style={{ border: `2px solid ${GOLD}` }}
              >
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: GOLD }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4 italic text-muted-brand">"{review.quote}"</p>
                <footer className="text-sm">
                  <strong style={{ color: CHARCOAL }}>{review.name}</strong>
                  <span className="text-muted-brand"> · {review.location}</span>
                  <br />
                  <span className="label-caps mt-1 inline-block" style={{ color: GOLD }}>{review.business}</span>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="text-center">
            <Link href="/testimonials" className="btn-brand-primary">
              Read All Reviews <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Commercial */}
      <section className="py-16" style={{ backgroundColor: NAVY }}>
        <div className="container">
          <div ref={s4} className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: GOLD }}>
              <Wrench className="w-8 h-8" style={{ color: CHARCOAL }} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="label-caps inline-block mb-2 px-3 py-1 rounded-full" style={{ backgroundColor: `${GOLD}22`, color: GOLD_LT }}>
                Commercial Services
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">We Also Work With Businesses</h3>
              <p className="text-base" style={{ color: BODY_MUTED }}>
                Offices, retail spaces, commercial properties, and more throughout Nassau County. Whether it's regular lawn maintenance or recurring cleaning contracts — we'd love to partner with your business.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col gap-3">
              <a href={CONTACT.mike.tel} className="btn-brand-primary whitespace-nowrap justify-center">
                <Phone className="w-4 h-4" />
                Call for a Quote
              </a>
              <a href={CONTACT.mike.sms} className="btn-brand-outline-light whitespace-nowrap text-sm justify-center">
                <MessageCircle className="w-4 h-4" />
                Text for a Quote
              </a>
              <a href={CONTACT.mailto} className="btn-brand-outline-light whitespace-nowrap text-sm justify-center">
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-20" style={{ backgroundColor: SECTION_GRAY }}>
        <div className="container">
          <div ref={s5} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label-caps inline-block mb-3 px-3 py-1 rounded-full" style={{ backgroundColor: `${GOLD}18`, color: GOLD }}>
                Where We Serve
              </span>
              <h2 className="font-display text-4xl font-bold mb-5 leading-tight" style={{ color: CHARCOAL }}>
                Proudly Serving Nassau County, Florida
              </h2>
              <p className="text-base leading-relaxed mb-6 text-muted-brand">
                Based right here in the Tributary community of Yulee, Mike and Lydine serve homeowners and businesses throughout Nassau County.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Tributary Community", "Yulee, FL 32097", "Fernandina Beach", "Callahan", "Nassau County", "Surrounding Areas"].map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: GOLD }} />
                    <span className="text-sm font-semibold" style={{ color: CHARCOAL }}>{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8" style={{ border: `2px solid ${GOLD}` }}>
              <h3 className="font-display text-2xl font-bold mb-5" style={{ color: CHARCOAL }}>Get in Touch</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: NAVY }}>
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="label-caps mb-0.5" style={{ color: "oklch(0.50 0.04 255)" }}>Lawn & Landscaping (Mike)</p>
                    <ContactPhone contact={CONTACT.mike} linkClassName="font-bold text-base hover:underline" style={{ color: CHARCOAL }} />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: NAVY }}>
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="label-caps mb-0.5" style={{ color: "oklch(0.50 0.04 255)" }}>Home Cleaning (Lydine)</p>
                    <ContactPhone contact={CONTACT.lydine} linkClassName="font-bold text-base hover:underline" style={{ color: CHARCOAL }} />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: NAVY }}>
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="label-caps mb-0.5" style={{ color: "oklch(0.50 0.04 255)" }}>Email</p>
                    <ContactEmail className="font-bold text-base hover:underline break-all" style={{ color: CHARCOAL }} />
                  </div>
                </div>
              </div>
              <p className="text-sm mt-6 pt-5 border-t border-border text-muted-brand">
                Mon–Fri: 7:00 AM – 6:00 PM · Sat: 8:00 AM – 4:00 PM · Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8" style={{ backgroundColor: NAVY_DARK }}>
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-current" style={{ color: GOLD }} />
              ))}
              <span className="ml-2 font-bold text-white text-sm">5.0 Average Rating · 100+ Happy Customers</span>
            </div>
            <Link href="/testimonials" className="text-sm font-bold hover:underline" style={{ color: GOLD_LT }}>
              Read Our Reviews →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
