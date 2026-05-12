/* ============================================================
   About Us Page — Diamond Home Services LLC
   Family story: Mike & Lydine, South Jersey to Yulee FL
   Nassau County service area — no home address
   Mock family/team photos included
   ============================================================ */

import { Link } from "wouter";
import { Phone, Mail, MapPin, Heart, Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DIAMOND_CUTZ_LOGO = "/manus-storage/diamond-cutz-logo_7523a9b6.png";
const DIAMOND_GIRL_LOGO = "/manus-storage/diamond-girl-logo_26e7435d.png";
const COUPLE_PHOTO = "/manus-storage/mike-lydine-couple_d892a85f.png";

// Family/team photos
const familyPhotos = [
  {
    src: COUPLE_PHOTO,
    alt: "Mike and Lydine Petrutz — Diamond Home Services LLC",
    caption: "Mike & Lydine — The Team Behind It All",
  },
  {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    alt: "Beautiful home in Florida neighborhood",
    caption: "Proud to call Nassau County home",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "Perfectly manicured lawn",
    caption: "Mike's Diamond Cutz craftsmanship",
  },
  {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    alt: "Sparkling clean home interior",
    caption: "Lydine's Diamond-level clean",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    alt: "Beautiful Florida home exterior",
    caption: "Serving the Tributary community",
  },
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    alt: "Lush green lawn care",
    caption: "Every yard treated with pride",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(0.97 0.01 255)" }}>
      <Navbar />

      {/* Hero — full-design About Us image */}
      <section className="w-full pt-16" style={{ backgroundColor: "oklch(0.14 0.06 255)" }}>
        <img
          src="/manus-storage/E30554CE-B3FB-49F8-9E75-515FEE6A95BB_09584a32.png"
          alt="About Us — Mike & Lydine, Diamond Home Services LLC — Family. Pride. Diamond Standard."
          className="w-full block"
        />
      </section>

      {/* Story Section */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.97 0.01 255)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Story Text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.45 0.14 145)" }}>
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "oklch(0.45 0.14 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  The American Dream
                </span>
              </div>

              <h2 className="text-4xl font-bold mb-8 leading-tight" style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Lora', serif" }}>
                From South Jersey to Nassau County — Built from the Ground Up
              </h2>

              <div className="space-y-6 text-base leading-relaxed" style={{ color: "oklch(0.35 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <p>
                  We're a hardworking husband-and-wife team who made a bold decision: to pack up our lives in South Jersey and move our family down to the Yulee, Florida area with one goal in mind — to give our youngest son a better opportunity for his future.
                </p>
                <p>
                  What started on a whim, with just a lawnmower and a single house to clean, quickly turned into something much bigger than we ever imagined. Through hard work, word of mouth, and a genuine commitment to doing every job right, our small start has grown rapidly throughout the Tributary community and the greater Nassau County area.
                </p>
                <p>
                  Mike handles the outdoors — lawn mowing, landscaping, fertilization, and everything in between — under the <strong style={{ color: "oklch(0.25 0.08 145)" }}>Diamond Cutz</strong> brand. Lydine handles the indoors — thorough, professional deep cleaning services — under <strong style={{ color: "oklch(0.40 0.15 340)" }}>A Diamond Girl</strong>. Together, we cover it all.
                </p>
                <p>
                  We truly enjoy helping our neighbors and take pride in making our community a cleaner, more beautiful place to live. Every lawn Mike mows, every home Lydine deep cleans — it means something to us. This has been a true American Dream, and we're just getting started.
                </p>
              </div>

              {/* Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
                {[
                  { icon: Star, title: "Quality First", desc: "We don't cut corners. Every job gets our full attention and effort, every single time." },
                  { icon: Heart, title: "Community Driven", desc: "We live here too. Your neighborhood is our neighborhood, and we take that seriously." },
                  { icon: MapPin, title: "Locally Rooted", desc: "Family-owned and operated right here in Nassau County — not a franchise, not a corporation." },
                ].map((v) => {
                  const Icon = v.icon;
                  return (
                    <div key={v.title} className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: "oklch(0.35 0.10 145 / 0.1)" }}>
                        <Icon className="w-5 h-5" style={{ color: "oklch(0.45 0.14 145)" }} />
                      </div>
                      <h4 className="font-bold text-base mb-1" style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Lora', serif" }}>{v.title}</h4>
                      <p className="text-sm" style={{ color: "oklch(0.45 0.03 255)", fontFamily: "'Nunito Sans', sans-serif" }}>{v.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Couple Photo */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={COUPLE_PHOTO}
                  alt="Mike and Lydine Petrutz — Diamond Home Services LLC"
                  className="w-full object-cover object-top"
                />
                <div className="bg-white px-4 py-3 border-t border-border">
                  <p className="font-bold text-sm" style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Lora', serif" }}>Mike &amp; Lydine Petrutz</p>
                  <p className="text-xs" style={{ color: "oklch(0.45 0.03 255)", fontFamily: "'Nunito Sans', sans-serif" }}>Founders · Diamond Home Services LLC · Nassau County, FL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Businesses */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.93 0.02 255)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold" style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Lora', serif" }}>Our Two Businesses</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border text-center hover:shadow-lg transition-all duration-300">
              <img src={DIAMOND_CUTZ_LOGO} alt="Diamond Cutz" className="h-24 w-auto object-contain mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-1" style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Lora', serif" }}>Diamond Cutz</h3>
              <p className="text-sm mb-1" style={{ color: "oklch(0.45 0.03 255)", fontFamily: "'Nunito Sans', sans-serif" }}>Lawn & Landscaping Services</p>
              <p className="text-xs font-semibold mb-4" style={{ color: "oklch(0.45 0.14 145)", fontFamily: "'Nunito Sans', sans-serif" }}>Owner: Mike Petrutz</p>
              <a href="tel:+18563713971" className="flex items-center justify-center gap-2 font-bold text-sm mb-4" style={{ color: "oklch(0.45 0.14 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone className="w-4 h-4" /> 856-371-3971
              </a>
              <Link href="/diamond-cutz" className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: "oklch(0.45 0.14 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
                View Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border text-center hover:shadow-lg transition-all duration-300">
              <img src={DIAMOND_GIRL_LOGO} alt="A Diamond Girl" className="h-24 w-auto object-contain mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-1" style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Lora', serif" }}>A Diamond Girl</h3>
              <p className="text-sm mb-1" style={{ color: "oklch(0.45 0.03 255)", fontFamily: "'Nunito Sans', sans-serif" }}>Home Cleaning Service</p>
              <p className="text-xs font-semibold mb-4" style={{ color: "oklch(0.45 0.15 340)", fontFamily: "'Nunito Sans', sans-serif" }}>Owner: Lydine Petrutz</p>
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
      <section id="contact" className="py-20" style={{ backgroundColor: "oklch(0.97 0.01 255)" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full" style={{ backgroundColor: "oklch(0.35 0.10 145 / 0.1)", color: "oklch(0.45 0.14 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get In Touch
              </span>
              <h2 className="text-4xl font-bold" style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Lora', serif" }}>Contact Us</h2>
              <p className="text-base mt-3" style={{ color: "oklch(0.40 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Have questions or ready to get started? Reach out and we'll get back to you promptly. Free estimates always available throughout Nassau County.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.45 0.14 145)" }}>
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: "oklch(0.50 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>Lawn & Landscaping (Mike)</p>
                    <a href="tel:+18563713971" className="font-bold text-lg" style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Nunito Sans', sans-serif" }}>856-371-3971</a>
                    <p className="text-xs mt-0.5" style={{ color: "oklch(0.55 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Call or text for a free estimate</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.45 0.15 340)" }}>
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: "oklch(0.50 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>Home Cleaning (Lydine)</p>
                    <a href="tel:+18569810930" className="font-bold text-lg" style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Nunito Sans', sans-serif" }}>856-981-0930</a>
                    <p className="text-xs mt-0.5" style={{ color: "oklch(0.55 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Call or text to schedule a cleaning</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.45 0.14 145)" }}>
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: "oklch(0.50 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>Email</p>
                    <a href="mailto:diamondhomeservicesofflorida@gmail.com" className="font-bold text-lg" style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Nunito Sans', sans-serif" }}>diamondhomeservicesofflorida@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.45 0.14 145)" }}>
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: "oklch(0.50 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>Service Area</p>
                    <p className="font-bold text-base" style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      Nassau County, FL<br />
                      <span className="text-sm font-normal" style={{ color: "oklch(0.45 0.03 255)" }}>Rooted in the Tributary Community, Yulee</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "oklch(0.50 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>Business Hours</p>
                <p className="text-sm" style={{ color: "oklch(0.35 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>
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
