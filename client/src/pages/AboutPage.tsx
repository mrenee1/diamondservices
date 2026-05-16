/* ============================================================
   About Us Page — Diamond Home Services LLC
   Family story: Mike & Lydine, South Jersey to Yulee FL
   ============================================================ */

import { Link } from "wouter";
import { Phone, Mail, MapPin, Heart, Star, ArrowRight, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroImage from "@/components/HeroImage";
import FamilyPhotoGallery, { type FamilyPhoto } from "@/components/FamilyPhotoGallery";
import { ContactPhone } from "@/components/ContactPhone";
import ContactEmail from "@/components/ContactEmail";
import { BRAND } from "@/lib/brand";
import { CONTACT } from "@/lib/contact";

const DIAMOND_CUTZ_LOGO = "/logos/diamond-cutz.png";
const DIAMOND_GIRL_LOGO = "/manus-storage/diamond-girl-logo_26e7435d.png";
const COUPLE_PHOTO = "/manus-storage/mike-lydine-couple_d892a85f.png";

const { gold: GOLD } = BRAND;

const familyPhotos: FamilyPhoto[] = [
  {
    src: COUPLE_PHOTO,
    alt: "Mike and Lydine Petrutz, founders of Diamond Home Services LLC",
    caption: "Mike & Lydine, founders",
  },
  {
    src: "/family/gage-formal.png",
    alt: "Mike and Lydine with their youngest son Gage",
    caption: "Our youngest, Gage",
  },
  {
    src: "/family/petrutz-family.png",
    alt: "The Petrutz family with their sons and dog",
    caption: "The whole crew (yes, the dog too)",
    featured: true,
  },
  {
    src: "/family/mikayla-austin.png",
    alt: "Mikayla Petrutz and her fiancé Austin",
    caption: "Our daughter Mikayla and fiancé Austin",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(0.97 0.01 255)" }}>
      <Navbar />

      <section className="w-full pt-16" style={{ backgroundColor: "oklch(0.14 0.06 255)" }}>
        <HeroImage
          src="/manus-storage/E30554CE-B3FB-49F8-9E75-515FEE6A95BB_09584a32.png"
          alt="About Us — Mike & Lydine, Diamond Home Services LLC — Family. Pride. Diamond Standard."
        />
      </section>

      {/* Story */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "oklch(0.97 0.01 255)" }}>
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "oklch(0.45 0.14 145)" }}
            >
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "oklch(0.45 0.14 145)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Our story
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
            style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Lora', serif" }}
          >
            From South Jersey to Nassau County, built from the ground up
          </h2>

          <div
            className="space-y-5 text-base md:text-lg leading-relaxed"
            style={{ color: "oklch(0.35 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}
          >
            <p>
              We&apos;re Mike and Lydine. A few years ago we packed up our family, left South Jersey, and moved to the
              Yulee area. We did it for our kids, especially our youngest son <strong>Gage</strong>, because we wanted
              him to have a real shot at building a good life here in Florida.
            </p>
            <p>
              It started small. Mike had a lawnmower. Lydine said yes to cleaning one home, the right way, top to bottom.
              Neighbors talked. Word spread through the Tributary community, and pretty soon we were busy all over Nassau
              County.
            </p>
            <p>
              Mike runs <strong style={{ color: "oklch(0.25 0.08 145)" }}>Diamond Cutz</strong> (lawns, landscaping, and
              everything outdoors). Lydine runs <strong style={{ color: "oklch(0.66 0.10 62)" }}>A Diamond Girl</strong>{" "}
              (deep cleaning that actually feels deep). Two businesses, one family, same standard on every job.
            </p>
            <p>
              Our daughter <strong>Mikayla</strong> and her fiancé <strong>Austin</strong> still cheer us on from back
              home. Gage and our boys are with us in spirit every day we show up to work. When you call us, you&apos;re
              talking to your neighbors, not a franchise hotline.
            </p>
            <p>
              We genuinely love helping people here. Every yard Mike mows and every home Lydine cleans matters to us
              personally. We&apos;re grateful we get to do this, and we&apos;re not done growing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
            {[
              {
                icon: Star,
                title: "Quality First",
                desc: "We don't cut corners. You get our full attention every time we're on your property.",
              },
              {
                icon: Heart,
                title: "Community Driven",
                desc: "We live here with our family. Your neighborhood is our neighborhood.",
              },
              {
                icon: MapPin,
                title: "Locally Rooted",
                desc: "Family-owned in Nassau County. Not a franchise, not a corporation.",
              },
            ].map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: "oklch(0.35 0.10 145 / 0.1)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "oklch(0.45 0.14 145)" }} />
                  </div>
                  <h4
                    className="font-bold text-base mb-1"
                    style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Lora', serif" }}
                  >
                    {v.title}
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: "oklch(0.45 0.03 255)", fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Family gallery — all photos visible */}
      <section className="about-family-section py-16 md:py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <div
              className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full"
              style={{ backgroundColor: `${GOLD}22`, border: `1px solid ${GOLD}44` }}
            >
              <Users className="w-4 h-4" style={{ color: GOLD }} />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: GOLD, fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Meet the family
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Lora', serif" }}
            >
              The Petrutz Family
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "oklch(0.82 0.03 255)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              This business runs on heart. These are the people behind Diamond Home Services, the ones who show up at
              your door, and the family that keeps us going.
            </p>
          </div>

          <FamilyPhotoGallery photos={familyPhotos} />
        </div>
      </section>

      {/* Our Businesses */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.93 0.02 255)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold" style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Lora', serif" }}>
              Our Two Businesses
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border text-center hover:shadow-lg transition-all duration-300">
              <img src={DIAMOND_CUTZ_LOGO} alt="Diamond Cutz" className="h-24 w-auto object-contain mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-1" style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Lora', serif" }}>
                Diamond Cutz
              </h3>
              <p className="text-sm mb-1" style={{ color: "oklch(0.45 0.03 255)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Lawn & Landscaping Services
              </p>
              <p className="text-xs font-semibold mb-4" style={{ color: "oklch(0.45 0.14 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Owner: Mike Petrutz
              </p>
              <ContactPhone
                contact={CONTACT.mike}
                className="justify-center mb-4"
                linkClassName="font-bold text-sm hover:underline"
                style={{ color: "oklch(0.45 0.14 145)", fontFamily: "'Nunito Sans', sans-serif" }}
              />
              <Link
                href="/diamond-cutz"
                className="inline-flex items-center gap-1.5 text-sm font-bold"
                style={{ color: "oklch(0.45 0.14 145)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                View Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border text-center hover:shadow-lg transition-all duration-300">
              <img src={DIAMOND_GIRL_LOGO} alt="A Diamond Girl" className="h-24 w-auto object-contain mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-1" style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Lora', serif" }}>
                A Diamond Girl
              </h3>
              <p className="text-sm mb-1" style={{ color: "oklch(0.45 0.03 255)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Home Cleaning Service
              </p>
              <p className="text-xs font-semibold mb-4" style={{ color: "oklch(0.73 0.11 65)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Owner: Lydine Petrutz
              </p>
              <ContactPhone
                contact={CONTACT.lydine}
                className="justify-center mb-4"
                linkClassName="font-bold text-sm hover:underline"
                style={{ color: "oklch(0.73 0.11 65)", fontFamily: "'Nunito Sans', sans-serif" }}
              />
              <Link
                href="/diamond-girl"
                className="inline-flex items-center gap-1.5 text-sm font-bold"
                style={{ color: "oklch(0.73 0.11 65)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
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
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{
                  backgroundColor: "oklch(0.35 0.10 145 / 0.1)",
                  color: "oklch(0.45 0.14 145)",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                Get In Touch
              </span>
              <h2 className="text-4xl font-bold" style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Lora', serif" }}>
                Contact Us
              </h2>
              <p
                className="text-base mt-3"
                style={{ color: "oklch(0.40 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Questions or ready to get started? Reach out anytime. Free estimates throughout Nassau County.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.45 0.14 145)" }}
                  >
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-wide mb-1"
                      style={{ color: "oklch(0.50 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      Lawn & Landscaping (Mike)
                    </p>
                    <ContactPhone
                      contact={CONTACT.mike}
                      linkClassName="font-bold text-lg hover:underline"
                      style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Nunito Sans', sans-serif" }}
                    />
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "oklch(0.55 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      Call or text for a free estimate
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.22 0.08 255)" }}
                  >
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-wide mb-1"
                      style={{ color: "oklch(0.50 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      Home Cleaning (Lydine)
                    </p>
                    <ContactPhone
                      contact={CONTACT.lydine}
                      linkClassName="font-bold text-lg hover:underline"
                      style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Nunito Sans', sans-serif" }}
                    />
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "oklch(0.55 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      Call or text to schedule a cleaning
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.45 0.14 145)" }}
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-wide mb-1"
                      style={{ color: "oklch(0.50 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      Email
                    </p>
                    <ContactEmail
                      className="font-bold text-lg hover:underline break-all"
                      style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Nunito Sans', sans-serif" }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.45 0.14 145)" }}
                  >
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-wide mb-1"
                      style={{ color: "oklch(0.50 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      Service Area
                    </p>
                    <p
                      className="font-bold text-base"
                      style={{ color: "oklch(0.18 0.02 255)", fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      Nassau County, FL
                      <br />
                      <span className="text-sm font-normal" style={{ color: "oklch(0.45 0.03 255)" }}>
                        Rooted in the Tributary Community, Yulee
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-border">
                <p
                  className="text-xs font-bold uppercase tracking-wide mb-2"
                  style={{ color: "oklch(0.50 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Business Hours
                </p>
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
