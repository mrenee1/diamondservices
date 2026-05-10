/* ============================================================
   About Us Page — Diamond Home Services LLC
   Palette: Parent navy+gold, Cutz green, Girl magenta
   Family story: Mike & Lydine, South Jersey to Yulee FL
   Nassau County service area — no home address
   ============================================================ */

import { Link } from "wouter";
import { Phone, Mail, MapPin, Heart, Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DIAMOND_CUTZ_LOGO = "/manus-storage/diamond-cutz-logo_7523a9b6.png";
const DIAMOND_GIRL_LOGO = "/manus-storage/diamond-girl-logo_26e7435d.png";
const COUPLE_PHOTO      = "/manus-storage/mike-lydine-couple_d892a85f.png";

// Design system hex tokens
const NAVY_900  = "#081830";
const NAVY_800  = "#0F2244";
const NAVY_700  = "#18305C";
const GOLD_500  = "#C8A24A";
const GOLD_300  = "#E8D08A";
const GREEN_500 = "#2E8B3D";
const GREEN_700 = "#185E2C";
const MAGENTA   = "#C21B6B";
const WHITE     = "#FFFFFF";
const OFFWHITE  = "#F5F3EE";
const CHARCOAL  = "#1A1F2E";

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: OFFWHITE }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${NAVY_900} 0%, ${NAVY_800} 100%)` }}
      >
        {/* Diamond grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(200,162,74,0.5) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(200,162,74,0.5) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(200,162,74,0.5) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(200,162,74,0.5) 75%)
            `,
            backgroundSize: "24px 24px",
            backgroundPosition: "0 0, 0 12px, 12px -12px, -12px 0px",
          }}
        />
        <div className="container relative z-10 text-center">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1"
            style={{
              backgroundColor: `${GOLD_500}22`,
              color: GOLD_300,
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: "0.15em",
            }}
          >
            Our Story
          </span>
          <h1
            className="text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            About Diamond Home Services
          </h1>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.78)", fontFamily: "'Manrope', sans-serif" }}
          >
            A family who bet on themselves — and built something beautiful in Nassau County, Florida.
          </p>
        </div>
      </section>

      {/* ── STORY SECTION ── */}
      <section className="py-20" style={{ backgroundColor: OFFWHITE }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Story Text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: GREEN_500 }}
                >
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: GREEN_500, fontFamily: "'Oswald', sans-serif", letterSpacing: "0.15em" }}
                >
                  The American Dream
                </span>
              </div>

              <h2
                className="text-4xl font-bold mb-8 leading-tight"
                style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
              >
                From South Jersey to Nassau County — Built from the Ground Up
              </h2>

              <div
                className="space-y-6 text-base leading-relaxed"
                style={{ color: "#4A5568", fontFamily: "'Manrope', sans-serif" }}
              >
                <p>
                  We're a hardworking husband-and-wife team who made a bold decision: to pack up our lives in South Jersey and move our family down to the Yulee, Florida area with one goal in mind — to give our youngest son a better opportunity for his future.
                </p>
                <p>
                  What started on a whim, with just a lawnmower and a single house to clean, quickly turned into something much bigger than we ever imagined. Through hard work, word of mouth, and a genuine commitment to doing every job right, our small start has grown rapidly throughout the Tributary community and the greater Nassau County area.
                </p>
                <p>
                  Mike handles the outdoors — lawn mowing, landscaping, fertilization, and everything in between — under the{" "}
                  <strong style={{ color: GREEN_700 }}>Diamond Cutz</strong> brand. Lydine handles the indoors — thorough, professional deep cleaning services — under{" "}
                  <strong style={{ color: MAGENTA }}>A Diamond Girl</strong>. Together, we cover it all.
                </p>
                <p>
                  We truly enjoy helping our neighbors and take pride in making our community a cleaner, more beautiful place to live. Every lawn Mike mows, every home Lydine deep cleans — it means something to us. This has been a true American Dream, and we're just getting started.
                </p>
              </div>

              {/* Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
                {[
                  { icon: Star,    title: "Quality First",    desc: "We don't cut corners. Every job gets our full attention and effort, every single time." },
                  { icon: Heart,   title: "Community Driven", desc: "We live here too. Your neighborhood is our neighborhood, and we take that seriously." },
                  { icon: MapPin,  title: "Locally Rooted",   desc: "Family-owned and operated right here in Nassau County — not a franchise, not a corporation." },
                ].map((v) => {
                  const Icon = v.icon;
                  return (
                    <div
                      key={v.title}
                      className="bg-white p-5 shadow-sm"
                      style={{ border: `1px solid #E2DDD4` }}
                    >
                      <div
                        className="w-10 h-10 flex items-center justify-center mb-3"
                        style={{ backgroundColor: `${GREEN_500}18` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: GREEN_500 }} />
                      </div>
                      <h4
                        className="font-bold text-base mb-1"
                        style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
                      >
                        {v.title}
                      </h4>
                      <p
                        className="text-sm"
                        style={{ color: "#4A5568", fontFamily: "'Manrope', sans-serif" }}
                      >
                        {v.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Couple Photo */}
            <div>
              <div className="overflow-hidden shadow-lg" style={{ border: `1px solid #E2DDD4` }}>
                <img
                  src={COUPLE_PHOTO}
                  alt="Mike and Lydine Petrutz — Diamond Home Services LLC"
                  className="w-full object-cover object-top"
                />
                <div className="bg-white px-4 py-3" style={{ borderTop: `1px solid #E2DDD4` }}>
                  <p
                    className="font-bold text-sm"
                    style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
                  >
                    Mike &amp; Lydine Petrutz
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "#6B7280", fontFamily: "'Manrope', sans-serif" }}
                  >
                    Founders · Diamond Home Services LLC · Nassau County, FL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR TWO BUSINESSES ── */}
      <section className="py-16" style={{ backgroundColor: "#EDEAE2" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold"
              style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
            >
              Our Two Businesses
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Diamond Cutz */}
            <div
              className="bg-white p-8 shadow-sm text-center hover:shadow-lg transition-all duration-300"
              style={{ border: `1px solid #E2DDD4` }}
            >
              <img
                src={DIAMOND_CUTZ_LOGO}
                alt="Diamond Cutz"
                className="h-24 w-auto object-contain mx-auto mb-4"
              />
              <h3
                className="text-xl font-bold mb-1"
                style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
              >
                Diamond Cutz
              </h3>
              <p
                className="text-sm mb-1"
                style={{ color: "#4A5568", fontFamily: "'Manrope', sans-serif" }}
              >
                Lawn & Landscaping Services
              </p>
              <p
                className="text-xs font-semibold mb-4"
                style={{ color: GREEN_500, fontFamily: "'Oswald', sans-serif" }}
              >
                Owner: Mike Petrutz
              </p>
              <a
                href="tel:+18563713971"
                className="flex items-center justify-center gap-2 font-bold text-sm mb-4"
                style={{ color: GREEN_500, fontFamily: "'Manrope', sans-serif" }}
              >
                <Phone className="w-4 h-4" /> 856-371-3971
              </a>
              <Link
                href="/diamond-cutz"
                className="inline-flex items-center gap-1.5 text-sm font-bold"
                style={{ color: GREEN_500, fontFamily: "'Oswald', sans-serif" }}
              >
                View Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* A Diamond Girl */}
            <div
              className="bg-white p-8 shadow-sm text-center hover:shadow-lg transition-all duration-300"
              style={{ border: `1px solid #E2DDD4` }}
            >
              <img
                src={DIAMOND_GIRL_LOGO}
                alt="A Diamond Girl"
                className="h-24 w-auto object-contain mx-auto mb-4"
              />
              <h3
                className="text-xl font-bold mb-1"
                style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
              >
                A Diamond Girl
              </h3>
              <p
                className="text-sm mb-1"
                style={{ color: "#4A5568", fontFamily: "'Manrope', sans-serif" }}
              >
                Home Cleaning Service
              </p>
              <p
                className="text-xs font-semibold mb-4"
                style={{ color: MAGENTA, fontFamily: "'Oswald', sans-serif" }}
              >
                Owner: Lydine Petrutz
              </p>
              <a
                href="tel:+18569810930"
                className="flex items-center justify-center gap-2 font-bold text-sm mb-4"
                style={{ color: MAGENTA, fontFamily: "'Manrope', sans-serif" }}
              >
                <Phone className="w-4 h-4" /> 856-981-0930
              </a>
              <Link
                href="/diamond-girl"
                className="inline-flex items-center gap-1.5 text-sm font-bold"
                style={{ color: MAGENTA, fontFamily: "'Oswald', sans-serif" }}
              >
                View Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20" style={{ backgroundColor: OFFWHITE }}>
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1"
                style={{
                  backgroundColor: `${GREEN_500}18`,
                  color: GREEN_500,
                  fontFamily: "'Oswald', sans-serif",
                  letterSpacing: "0.15em",
                }}
              >
                Get In Touch
              </span>
              <h2
                className="text-4xl font-bold"
                style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
              >
                Contact Us
              </h2>
              <p
                className="text-base mt-3"
                style={{ color: "#4A5568", fontFamily: "'Manrope', sans-serif" }}
              >
                Have questions or ready to get started? Reach out and we'll get back to you promptly. Free estimates always available throughout Nassau County.
              </p>
            </div>

            <div
              className="bg-white shadow-lg p-8"
              style={{ border: `1px solid #E2DDD4` }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: GREEN_500 }}
                  >
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-wide mb-1"
                      style={{ color: "#6B7280", fontFamily: "'Oswald', sans-serif" }}
                    >
                      Lawn & Landscaping (Mike)
                    </p>
                    <a
                      href="tel:+18563713971"
                      className="font-bold text-lg"
                      style={{ color: CHARCOAL, fontFamily: "'Manrope', sans-serif" }}
                    >
                      856-371-3971
                    </a>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "#9CA3AF", fontFamily: "'Manrope', sans-serif" }}
                    >
                      Call or text for a free estimate
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: MAGENTA }}
                  >
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-wide mb-1"
                      style={{ color: "#6B7280", fontFamily: "'Oswald', sans-serif" }}
                    >
                      Home Cleaning (Lydine)
                    </p>
                    <a
                      href="tel:+18569810930"
                      className="font-bold text-lg"
                      style={{ color: CHARCOAL, fontFamily: "'Manrope', sans-serif" }}
                    >
                      856-981-0930
                    </a>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "#9CA3AF", fontFamily: "'Manrope', sans-serif" }}
                    >
                      Call or text to schedule a cleaning
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: NAVY_800 }}
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-wide mb-1"
                      style={{ color: "#6B7280", fontFamily: "'Oswald', sans-serif" }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:diamondhomeservicesofflorida@gmail.com"
                      className="font-bold text-base"
                      style={{ color: CHARCOAL, fontFamily: "'Manrope', sans-serif" }}
                    >
                      diamondhomeservicesofflorida@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: NAVY_800 }}
                  >
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-wide mb-1"
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
                      <span
                        className="text-sm font-normal"
                        style={{ color: "#4A5568" }}
                      >
                        Rooted in the Tributary Community, Yulee
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-5" style={{ borderTop: "1px solid #E2DDD4" }}>
                <p
                  className="text-xs font-bold uppercase tracking-wide mb-2"
                  style={{ color: "#6B7280", fontFamily: "'Oswald', sans-serif" }}
                >
                  Business Hours
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

      <Footer />
    </div>
  );
}
