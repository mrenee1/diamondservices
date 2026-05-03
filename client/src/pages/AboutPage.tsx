/* ============================================================
   About Us Page — Diamond Home Services LLC
   Family story: Mike & wife, South Jersey to Yulee FL
   Phone: 856-371-3971 | Email: mpetrutz@yahoo.com
   ============================================================ */

import { Link } from "wouter";
import { Phone, Mail, MapPin, Heart, Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DIAMOND_CUTZ_LOGO = "/manus-storage/diamond-cutz-logo_7523a9b6.png";
const DIAMOND_GIRL_LOGO = "/manus-storage/diamond-girl-logo_26e7435d.png";
const HERO_IMAGE = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80";

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(0.97 0.02 90)" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: "oklch(0.22 0.08 145)" }}>
        <div className="absolute inset-0 opacity-20">
          <img src={HERO_IMAGE} alt="Family home" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, oklch(0.22 0.08 145 / 0.92), oklch(0.22 0.08 145 / 0.97))" }} />
        <div className="container relative z-10 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full" style={{ backgroundColor: "oklch(0.72 0.15 75 / 0.2)", color: "oklch(0.82 0.12 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Our Story
          </span>
          <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            About Diamond Home Services
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "oklch(0.85 0.04 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
            A family who bet on themselves — and built something beautiful in Northeast Florida.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.97 0.02 90)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.35 0.10 145)" }}>
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "oklch(0.35 0.10 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
                The American Dream
              </span>
            </div>

            <h2 className="text-4xl font-bold mb-8 leading-tight" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}>
              From South Jersey to Yulee, Florida — Built from the Ground Up
            </h2>

            <div className="space-y-6 text-base leading-relaxed" style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <p>
                We're a hardworking husband-and-wife team who made a bold decision: to pack up our lives in South Jersey and move our family down to the Yulee, Florida area with one goal in mind — to give our youngest son a better opportunity for his future.
              </p>
              <p>
                What started on a whim, with just a lawnmower and a single house to clean, quickly turned into something much bigger than we ever imagined. Through hard work, word of mouth, and a genuine commitment to doing every job right, our small start has grown rapidly throughout the Tributary community and the greater Yulee and Amelia Island area.
              </p>
              <p>
                Mike handles the outdoors — lawn mowing, landscaping, fertilization, and everything in between — under the <strong style={{ color: "oklch(0.25 0.08 145)" }}>Diamond Cutz</strong> brand. His wife handles the indoors — thorough, reliable home cleaning services — under <strong style={{ color: "oklch(0.40 0.15 340)" }}>A Diamond Girl</strong>. Together, we cover it all.
              </p>
              <p>
                We truly enjoy helping our neighbors and take pride in making our community a cleaner, more beautiful place to live. Every lawn we mow, every home we clean — it means something to us. This has been a true American Dream, and we're just getting started.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              {[
                { icon: Star, title: "Quality First", desc: "We don't cut corners. Every job gets our full attention and effort, every single time." },
                { icon: Heart, title: "Community Driven", desc: "We live here too. Your neighborhood is our neighborhood, and we take that seriously." },
                { icon: MapPin, title: "Locally Rooted", desc: "Family-owned and operated right here in Yulee, FL — not a franchise, not a corporation." },
              ].map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: "oklch(0.35 0.10 145 / 0.1)" }}>
                      <Icon className="w-5 h-5" style={{ color: "oklch(0.35 0.10 145)" }} />
                    </div>
                    <h4 className="font-bold text-base mb-1" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}>{v.title}</h4>
                    <p className="text-sm" style={{ color: "oklch(0.45 0.03 80)", fontFamily: "'Nunito Sans', sans-serif" }}>{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Businesses */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.93 0.03 85)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}>Our Two Businesses</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border text-center hover:shadow-lg transition-all duration-300">
              <img src={DIAMOND_CUTZ_LOGO} alt="Diamond Cutz" className="h-24 w-auto object-contain mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}>Diamond Cutz</h3>
              <p className="text-sm mb-4" style={{ color: "oklch(0.45 0.03 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Lawn & Landscaping Services</p>
              <a href="tel:+18563713971" className="flex items-center justify-center gap-2 font-bold text-sm mb-4" style={{ color: "oklch(0.35 0.10 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone className="w-4 h-4" /> 856-371-3971
              </a>
              <Link href="/diamond-cutz" className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: "oklch(0.35 0.10 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
                View Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border text-center hover:shadow-lg transition-all duration-300">
              <img src={DIAMOND_GIRL_LOGO} alt="A Diamond Girl" className="h-24 w-auto object-contain mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}>A Diamond Girl</h3>
              <p className="text-sm mb-4" style={{ color: "oklch(0.45 0.03 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Home Cleaning Service</p>
              <a href="tel:+18569810930" className="flex items-center justify-center gap-2 font-bold text-sm mb-4" style={{ color: "oklch(0.45 0.15 340)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone className="w-4 h-4" /> 856-981-0930
              </a>
              <Link href="/diamond-girl" className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: "oklch(0.45 0.15 340)", fontFamily: "'Nunito Sans', sans-serif" }}>
                View Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20" style={{ backgroundColor: "oklch(0.97 0.02 90)" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full" style={{ backgroundColor: "oklch(0.35 0.10 145 / 0.1)", color: "oklch(0.35 0.10 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get In Touch
              </span>
              <h2 className="text-4xl font-bold" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}>Contact Us</h2>
              <p className="text-base mt-3" style={{ color: "oklch(0.40 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Have questions or ready to get started? Reach out and we'll get back to you promptly. Free estimates always available.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.35 0.10 145)" }}>
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: "oklch(0.50 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Lawn & Landscaping (Mike)</p>
                    <a href="tel:+18563713971" className="font-bold text-lg" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>856-371-3971</a>
                    <p className="text-xs mt-0.5" style={{ color: "oklch(0.55 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Call or text for a free estimate</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.45 0.15 340)" }}>
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: "oklch(0.50 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Home Cleaning</p>
                    <a href="tel:+18569810930" className="font-bold text-lg" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>856-981-0930</a>
                    <p className="text-xs mt-0.5" style={{ color: "oklch(0.55 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Call or text to schedule a cleaning</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.35 0.10 145)" }}>
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: "oklch(0.50 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Email</p>
                    <a href="mailto:mpetrutz@yahoo.com" className="font-bold text-lg" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>mpetrutz@yahoo.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.35 0.10 145)" }}>
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: "oklch(0.50 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Location</p>
                    <p className="font-bold text-base" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      75307 Plumbago Trace<br />Yulee, FL 32097
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "oklch(0.50 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Business Hours</p>
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
