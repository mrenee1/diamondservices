/* ============================================================
   Testimonials Page — Diamond Home Services LLC
   Palette: Parent navy+gold, Cutz green, Girl magenta
   Mock reviews for Diamond Cutz (lawn) & A Diamond Girl (cleaning)
   Nassau County, FL — Tributary community focus
   ============================================================ */

import { Link } from "wouter";
import { Star, Quote, Phone, Scissors, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DIAMOND_CUTZ_LOGO = "/manus-storage/diamond-cutz-logo_7523a9b6.png";
const DIAMOND_GIRL_LOGO = "/manus-storage/diamond-girl-logo_26e7435d.png";

// Design system hex tokens
const NAVY_900  = "#081830";
const NAVY_800  = "#0F2244";
const GOLD_500  = "#C8A24A";
const GOLD_300  = "#E8D08A";
const GREEN_500 = "#2E8B3D";
const MAGENTA   = "#C21B6B";
const WHITE     = "#FFFFFF";
const OFFWHITE  = "#F5F3EE";
const CHARCOAL  = "#1A1F2E";

type Category = "all" | "lawn" | "cleaning";

const testimonials = [
  // ── Diamond Cutz ──
  {
    id: 1, category: "lawn" as Category, name: "James R.", location: "Tributary, Yulee FL", rating: 5,
    text: "Mike does an absolutely incredible job on our lawn. We've had other services before, but nobody comes close to the level of detail and care he puts into every visit. Our yard has never looked better — the neighbors keep asking who does our lawn!",
    service: "Weekly Lawn Maintenance", business: "Diamond Cutz",
  },
  {
    id: 2, category: "lawn" as Category, name: "Sandra & Tom K.", location: "Yulee, FL", rating: 5,
    text: "We hired Diamond Cutz for a full landscape redesign and couldn't be happier. Mike listened to exactly what we wanted, gave us a fair price, and the result was stunning. Our curb appeal went through the roof. Highly recommend!",
    service: "Landscape Design", business: "Diamond Cutz",
  },
  {
    id: 3, category: "lawn" as Category, name: "David M.", location: "Fernandina Beach, FL", rating: 5,
    text: "Reliable, professional, and the quality is consistently top-notch. Mike shows up when he says he will and always goes the extra mile. He noticed my irrigation system had an issue and flagged it before it became a bigger problem. That's the kind of service you can't put a price on.",
    service: "Lawn Care & Irrigation", business: "Diamond Cutz",
  },
  {
    id: 4, category: "lawn" as Category, name: "Patricia L.", location: "Tributary, Yulee FL", rating: 5,
    text: "I've been using Diamond Cutz since they first started in the Tributary community. Watching this family business grow has been so inspiring. Mike is honest, hardworking, and genuinely cares about doing a great job. My lawn is the envy of the street!",
    service: "Bi-Weekly Lawn Maintenance", business: "Diamond Cutz",
  },
  {
    id: 5, category: "lawn" as Category, name: "Robert & Angela T.", location: "Callahan, FL", rating: 5,
    text: "We had sod installed and Mike's team did a flawless job. They prepped the ground properly, laid it perfectly, and even came back to check on it a week later. The lawn looks like it's been there for years. Absolutely worth every penny.",
    service: "Sod Installation", business: "Diamond Cutz",
  },
  {
    id: 6, category: "lawn" as Category, name: "Kevin B.", location: "Nassau County, FL", rating: 5,
    text: "Best lawn service in Nassau County, hands down. Mike is a true professional who takes pride in his craft. He transformed my overgrown mess into a beautiful, well-maintained yard. I get compliments from my neighbors every week now.",
    service: "Lawn Restoration", business: "Diamond Cutz",
  },
  // ── A Diamond Girl ──
  {
    id: 7, category: "cleaning" as Category, name: "Michelle W.", location: "Tributary, Yulee FL", rating: 5,
    text: "Lydine is an absolute gem! She did a deep clean on our home before we moved in and I was blown away. Every corner, every cabinet, every surface — spotless. She has an eye for detail that I've never seen from any cleaning service before. Diamond-level is the perfect name for it.",
    service: "Move-In Deep Clean", business: "A Diamond Girl",
  },
  {
    id: 8, category: "cleaning" as Category, name: "Ashley P.", location: "Yulee, FL", rating: 5,
    text: "I've tried several cleaning services over the years and nobody compares to A Diamond Girl. Lydine is thorough, trustworthy, and my house literally sparkles after she's done. I don't know how she does it, but I'm never going back to anyone else.",
    service: "Recurring Bi-Weekly Clean", business: "A Diamond Girl",
  },
  {
    id: 9, category: "cleaning" as Category, name: "Jennifer & Mark S.", location: "Fernandina Beach, FL", rating: 5,
    text: "We hired Lydine for a post-renovation clean after our kitchen remodel and she was phenomenal. Construction dust gets everywhere and she got it all. The kitchen looked brand new when she was done. We've since signed up for monthly service and couldn't be happier.",
    service: "Post-Construction Clean", business: "A Diamond Girl",
  },
  {
    id: 10, category: "cleaning" as Category, name: "Carol H.", location: "Tributary, Yulee FL", rating: 5,
    text: "Lydine is the real deal. She's prompt, professional, and incredibly detail-oriented. I've been using A Diamond Girl for six months now and every single time she leaves my home looking and smelling absolutely amazing. Worth every dollar — I can't recommend her enough.",
    service: "Monthly Deep Clean", business: "A Diamond Girl",
  },
  {
    id: 11, category: "cleaning" as Category, name: "Nancy G.", location: "Nassau County, FL", rating: 5,
    text: "I hired Lydine to clean before a big holiday gathering and she made my home look better than it ever has. My guests kept asking who cleaned my house! She's reliable, kind, and does exceptional work. I've already booked her for the next three months.",
    service: "Special Occasion Clean", business: "A Diamond Girl",
  },
  {
    id: 12, category: "cleaning" as Category, name: "Lisa & Tom F.", location: "Callahan, FL", rating: 5,
    text: "We needed a move-out clean on a tight timeline and Lydine came through for us perfectly. She was flexible with scheduling, incredibly thorough, and left the property in better shape than when we moved in. Our landlord was impressed. Highly recommend!",
    service: "Move-Out Clean", business: "A Diamond Girl",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" style={{ color: GOLD_500 }} />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: OFFWHITE }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="pt-28 pb-16"
        style={{ background: `linear-gradient(160deg, ${NAVY_900} 0%, ${NAVY_800} 100%)` }}
      >
        <div className="container text-center">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1"
            style={{
              backgroundColor: `${GOLD_500}22`,
              color: GOLD_300,
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: "0.15em",
            }}
          >
            Customer Reviews
          </span>
          <h1
            className="text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            What Our Customers Say
          </h1>
          <p
            className="text-lg max-w-xl mx-auto mb-6"
            style={{ color: "rgba(255,255,255,0.78)", fontFamily: "'Manrope', sans-serif" }}
          >
            Don't just take our word for it. Here's what Nassau County homeowners and families are saying about Diamond Home Services.
          </p>
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-10 mt-8">
            {[
              { value: "5.0",          label: "Average Rating" },
              { value: "100+",         label: "Happy Customers" },
              { value: "Nassau County", label: "Service Area" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-3xl font-bold"
                  style={{ color: GOLD_300, fontFamily: "'Oswald', sans-serif" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.60)", fontFamily: "'Manrope', sans-serif" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOGOS BANNER ── */}
      <section className="py-8" style={{ backgroundColor: "#EDEAE2" }}>
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <img src={DIAMOND_CUTZ_LOGO} alt="Diamond Cutz" className="h-12 w-auto object-contain" />
              <div>
                <p
                  className="font-bold text-sm"
                  style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
                >
                  Diamond Cutz
                </p>
                <p
                  className="text-xs"
                  style={{ color: "#6B7280", fontFamily: "'Manrope', sans-serif" }}
                >
                  Lawn & Landscaping
                </p>
              </div>
            </div>
            <div className="w-px h-10 hidden sm:block" style={{ backgroundColor: GOLD_500 }} />
            <div className="flex items-center gap-3">
              <img src={DIAMOND_GIRL_LOGO} alt="A Diamond Girl" className="h-12 w-auto object-contain" />
              <div>
                <p
                  className="font-bold text-sm"
                  style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
                >
                  A Diamond Girl
                </p>
                <p
                  className="text-xs"
                  style={{ color: "#6B7280", fontFamily: "'Manrope', sans-serif" }}
                >
                  Home Cleaning Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS GRID ── */}
      <section className="py-16">
        <div className="container">
          {/* Lawn Section */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: GREEN_500 }}
              >
                <Scissors className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2
                  className="text-2xl font-bold"
                  style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
                >
                  Diamond Cutz Reviews
                </h2>
                <p
                  className="text-sm"
                  style={{ color: "#6B7280", fontFamily: "'Manrope', sans-serif" }}
                >
                  Lawn & Landscaping · Call Mike: 856-371-3971
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.filter((t) => t.category === "lawn").map((t) => (
                <div
                  key={t.id}
                  className="bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
                  style={{ border: `1px solid #E2DDD4` }}
                >
                  <Quote className="w-8 h-8 mb-3 opacity-20" style={{ color: GREEN_500 }} />
                  <p
                    className="text-sm leading-relaxed flex-1 mb-5"
                    style={{ color: "#4A5568", fontFamily: "'Manrope', sans-serif" }}
                  >
                    "{t.text}"
                  </p>
                  <div className="pt-4" style={{ borderTop: "1px solid #E2DDD4" }}>
                    <StarRating count={t.rating} />
                    <p
                      className="font-bold text-sm mt-2"
                      style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "#6B7280", fontFamily: "'Manrope', sans-serif" }}
                    >
                      {t.location}
                    </p>
                    <span
                      className="inline-block mt-2 text-xs font-bold px-2.5 py-0.5"
                      style={{
                        backgroundColor: `${GREEN_500}18`,
                        color: GREEN_500,
                        fontFamily: "'Oswald', sans-serif",
                      }}
                    >
                      {t.service}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cleaning Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: MAGENTA }}
              >
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2
                  className="text-2xl font-bold"
                  style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
                >
                  A Diamond Girl Reviews
                </h2>
                <p
                  className="text-sm"
                  style={{ color: "#6B7280", fontFamily: "'Manrope', sans-serif" }}
                >
                  Home Cleaning Service · Call Lydine: 856-981-0930
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.filter((t) => t.category === "cleaning").map((t) => (
                <div
                  key={t.id}
                  className="bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
                  style={{ border: `1px solid #E2DDD4` }}
                >
                  <Quote className="w-8 h-8 mb-3 opacity-20" style={{ color: MAGENTA }} />
                  <p
                    className="text-sm leading-relaxed flex-1 mb-5"
                    style={{ color: "#4A5568", fontFamily: "'Manrope', sans-serif" }}
                  >
                    "{t.text}"
                  </p>
                  <div className="pt-4" style={{ borderTop: "1px solid #E2DDD4" }}>
                    <StarRating count={t.rating} />
                    <p
                      className="font-bold text-sm mt-2"
                      style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "#6B7280", fontFamily: "'Manrope', sans-serif" }}
                    >
                      {t.location}
                    </p>
                    <span
                      className="inline-block mt-2 text-xs font-bold px-2.5 py-0.5"
                      style={{
                        backgroundColor: `${MAGENTA}18`,
                        color: MAGENTA,
                        fontFamily: "'Oswald', sans-serif",
                      }}
                    >
                      {t.service}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section
        className="py-16"
        style={{ background: `linear-gradient(135deg, ${NAVY_900} 0%, ${NAVY_800} 100%)` }}
      >
        <div className="container text-center">
          <h2
            className="text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Ready to Experience the Diamond Difference?
          </h2>
          <p
            className="text-base mb-8"
            style={{ color: "rgba(255,255,255,0.78)", fontFamily: "'Manrope', sans-serif" }}
          >
            Join hundreds of happy Nassau County homeowners. Call or text for a free estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+18563713971"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              style={{
                backgroundColor: GOLD_500,
                color: CHARCOAL,
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.06em",
              }}
            >
              <Phone className="w-4 h-4" />
              Lawn: 856-371-3971
            </a>
            <a
              href="tel:+18569810930"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: "rgba(255,255,255,0.12)",
                color: WHITE,
                border: "1px solid rgba(255,255,255,0.30)",
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.06em",
              }}
            >
              <Phone className="w-4 h-4" />
              Cleaning: 856-981-0930
            </a>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: "rgba(255,255,255,0.12)",
                color: WHITE,
                border: "1px solid rgba(255,255,255,0.30)",
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.06em",
              }}
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
