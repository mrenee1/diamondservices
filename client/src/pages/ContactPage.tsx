/* ============================================================
   Contact Page — Diamond Home Services LLC
   Design: "LET'S TALK." split-panel
     Left panel: stadium navy (#081830) — headline, phones, email, hours
     Right panel: chalk cream (#F5F3EE) — "Tell Us About the Job" quote form
   Palette: Parent navy+gold (#081830, #0F2244, #C8A24A, #E8D08A)
   ============================================================ */

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Scissors, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Parent palette hex tokens
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
const MAGENTA   = "#C21B6B";

type ServiceType = "lawn" | "cleaning" | "both" | "";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "" as ServiceType,
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleService(val: ServiceType) {
    setForm((prev) => ({ ...prev, service: val }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Static site — open mailto with form data
    const subject = encodeURIComponent(
      `Quote Request — ${form.service === "lawn" ? "Diamond Cutz" : form.service === "cleaning" ? "A Diamond Girl" : "Both Services"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\n\nNotes:\n${form.notes}`
    );
    window.location.href = `mailto:diamondhomeservicesofflorida@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: OFFWHITE }}>
      <Navbar />

      {/* ══════════════════════════════════════════════════════
          SPLIT PANEL — full-height below navbar
      ══════════════════════════════════════════════════════ */}
      <div className="pt-16 min-h-screen flex flex-col lg:flex-row">

        {/* ── LEFT PANEL — Navy ── */}
        <div
          className="flex-shrink-0 lg:w-[42%] xl:w-[38%] flex flex-col justify-center px-8 md:px-14 py-16"
          style={{
            background: `linear-gradient(160deg, ${NAVY_900} 0%, ${NAVY_800} 100%)`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background diamond grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(45deg, rgba(200,162,74,0.07) 25%, transparent 25%),
                linear-gradient(-45deg, rgba(200,162,74,0.07) 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, rgba(200,162,74,0.07) 75%),
                linear-gradient(-45deg, transparent 75%, rgba(200,162,74,0.07) 75%)
              `,
              backgroundSize: "24px 24px",
              backgroundPosition: "0 0, 0 12px, 12px -12px, -12px 0px",
            }}
          />

          <div className="relative z-10 max-w-md">
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6 px-3 py-1"
              style={{
                backgroundColor: `${GOLD_500}22`,
                color: GOLD_300,
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.18em",
                border: `1px solid ${GOLD_500}33`,
              }}
            >
              Nassau County, FL · Family-Owned
            </div>

            {/* Headline */}
            <h1
              className="font-black leading-none mb-4"
              style={{
                fontFamily: "'Anton', 'Oswald', sans-serif",
                fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
                color: WHITE,
              }}
            >
              LET'S
              <br />
              <span style={{ color: GOLD_500 }}>TALK.</span>
            </h1>

            <p
              className="text-base mb-10 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'Manrope', sans-serif" }}
            >
              Ready to get a free estimate? Fill out the form or reach out directly — Mike and Lydine will get back to you fast.
            </p>

            {/* Gold divider */}
            <div
              className="mb-8"
              style={{
                height: "3px",
                width: "60px",
                background: `linear-gradient(90deg, ${GOLD_500}, ${GOLD_300})`,
              }}
            />

            {/* Contact details */}
            <div className="space-y-6">
              {/* Mike — Lawn */}
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: GREEN_500 }}
                >
                  <Scissors className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-wide mb-0.5"
                    style={{ color: GOLD_300, fontFamily: "'Oswald', sans-serif", letterSpacing: "0.12em" }}
                  >
                    Diamond Cutz — Lawn & Landscaping
                  </p>
                  <p
                    className="text-sm mb-0.5"
                    style={{ color: "rgba(255,255,255,0.60)", fontFamily: "'Manrope', sans-serif" }}
                  >
                    Mike Petrutz
                  </p>
                  <a
                    href="tel:+18563713971"
                    className="text-lg font-bold hover:underline"
                    style={{ color: WHITE, fontFamily: "'Manrope', sans-serif" }}
                  >
                    856-371-3971
                  </a>
                </div>
              </div>

              {/* Lydine — Cleaning */}
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: MAGENTA }}
                >
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-wide mb-0.5"
                    style={{ color: GOLD_300, fontFamily: "'Oswald', sans-serif", letterSpacing: "0.12em" }}
                  >
                    A Diamond Girl — Home Cleaning
                  </p>
                  <p
                    className="text-sm mb-0.5"
                    style={{ color: "rgba(255,255,255,0.60)", fontFamily: "'Manrope', sans-serif" }}
                  >
                    Lydine Petrutz
                  </p>
                  <a
                    href="tel:+18569810930"
                    className="text-lg font-bold hover:underline"
                    style={{ color: WHITE, fontFamily: "'Manrope', sans-serif" }}
                  >
                    856-981-0930
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: NAVY_700 }}
                >
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-wide mb-0.5"
                    style={{ color: GOLD_300, fontFamily: "'Oswald', sans-serif", letterSpacing: "0.12em" }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:diamondhomeservicesofflorida@gmail.com"
                    className="text-sm font-semibold hover:underline"
                    style={{ color: WHITE, fontFamily: "'Manrope', sans-serif" }}
                  >
                    diamondhomeservicesofflorida@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: NAVY_700 }}
                >
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-wide mb-0.5"
                    style={{ color: GOLD_300, fontFamily: "'Oswald', sans-serif", letterSpacing: "0.12em" }}
                  >
                    Service Area
                  </p>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: WHITE, fontFamily: "'Manrope', sans-serif" }}
                  >
                    Nassau County, FL
                    <br />
                    <span style={{ color: "rgba(255,255,255,0.60)" }}>
                      Rooted in Tributary, Yulee FL 32097
                    </span>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: NAVY_700 }}
                >
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-wide mb-1"
                    style={{ color: GOLD_300, fontFamily: "'Oswald', sans-serif", letterSpacing: "0.12em" }}
                  >
                    Hours
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'Manrope', sans-serif", lineHeight: 1.7 }}
                  >
                    Mon–Fri: 7:00 AM – 6:00 PM
                    <br />
                    Sat: 8:00 AM – 4:00 PM
                    <br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL — Cream / Chalk ── */}
        <div
          className="flex-1 flex flex-col justify-center px-8 md:px-14 py-16"
          style={{ backgroundColor: OFFWHITE }}
        >
          <div className="max-w-xl w-full mx-auto">
            {/* Section label */}
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1"
              style={{
                backgroundColor: `${GOLD_500}18`,
                color: GOLD_500,
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.15em",
              }}
            >
              Free Estimate
            </span>

            <h2
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
            >
              Tell Us About the Job
            </h2>
            <p
              className="text-sm mb-8"
              style={{ color: "#6B7280", fontFamily: "'Manrope', sans-serif" }}
            >
              Fill out the form below and we'll reach out within one business day with a free, no-obligation estimate.
            </p>

            {submitted ? (
              /* ── Success state ── */
              <div
                className="flex flex-col items-center justify-center py-16 text-center"
                style={{ border: `2px solid ${GOLD_500}`, backgroundColor: `${GOLD_500}0A` }}
              >
                <CheckCircle2 className="w-14 h-14 mb-4" style={{ color: GREEN_500 }} />
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
                >
                  Message Sent!
                </h3>
                <p
                  className="text-sm max-w-xs"
                  style={{ color: "#4A5568", fontFamily: "'Manrope', sans-serif" }}
                >
                  Your email client should have opened. If not, email us directly at{" "}
                  <a
                    href="mailto:diamondhomeservicesofflorida@gmail.com"
                    className="font-semibold underline"
                    style={{ color: NAVY_800 }}
                  >
                    diamondhomeservicesofflorida@gmail.com
                  </a>
                </p>
              </div>
            ) : (
              /* ── Quote Form ── */
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold uppercase tracking-wide mb-1.5"
                    style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
                  >
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="First and Last Name"
                    className="w-full px-4 py-3 text-sm outline-none transition-all"
                    style={{
                      border: `1.5px solid #D4CDB8`,
                      backgroundColor: WHITE,
                      color: CHARCOAL,
                      fontFamily: "'Manrope', sans-serif",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = GOLD_500)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#D4CDB8")}
                  />
                </div>

                {/* Phone + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold uppercase tracking-wide mb-1.5"
                      style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
                    >
                      Phone *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(000) 000-0000"
                      className="w-full px-4 py-3 text-sm outline-none transition-all"
                      style={{
                        border: `1.5px solid #D4CDB8`,
                        backgroundColor: WHITE,
                        color: CHARCOAL,
                        fontFamily: "'Manrope', sans-serif",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = GOLD_500)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#D4CDB8")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wide mb-1.5"
                      style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 text-sm outline-none transition-all"
                      style={{
                        border: `1.5px solid #D4CDB8`,
                        backgroundColor: WHITE,
                        color: CHARCOAL,
                        fontFamily: "'Manrope', sans-serif",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = GOLD_500)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#D4CDB8")}
                    />
                  </div>
                </div>

                {/* Service type */}
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-wide mb-2.5"
                    style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
                  >
                    Service Needed *
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { val: "lawn" as ServiceType,     label: "Lawn & Landscaping",  icon: Scissors,  color: GREEN_500 },
                      { val: "cleaning" as ServiceType, label: "Home Cleaning",        icon: Sparkles,  color: MAGENTA },
                      { val: "both" as ServiceType,     label: "Both Services",        icon: CheckCircle2, color: GOLD_500 },
                    ].map(({ val, label, icon: Icon, color }) => {
                      const selected = form.service === val;
                      return (
                        <button
                          key={val}
                          type="button"
                          onClick={() => handleService(val)}
                          className="flex flex-col items-center gap-2 py-4 px-3 text-center transition-all duration-150 font-bold text-xs uppercase tracking-wide"
                          style={{
                            border: selected ? `2px solid ${color}` : `1.5px solid #D4CDB8`,
                            backgroundColor: selected ? `${color}12` : WHITE,
                            color: selected ? color : "#6B7280",
                            fontFamily: "'Oswald', sans-serif",
                            letterSpacing: "0.08em",
                          }}
                        >
                          <Icon className="w-5 h-5" />
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label
                    htmlFor="notes"
                    className="block text-xs font-bold uppercase tracking-wide mb-1.5"
                    style={{ color: CHARCOAL, fontFamily: "'Oswald', sans-serif" }}
                  >
                    Tell Us More
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="Describe your property, what you need, any special requests, or questions..."
                    className="w-full px-4 py-3 text-sm outline-none transition-all resize-none"
                    style={{
                      border: `1.5px solid #D4CDB8`,
                      backgroundColor: WHITE,
                      color: CHARCOAL,
                      fontFamily: "'Manrope', sans-serif",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = GOLD_500)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#D4CDB8")}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 font-bold text-sm uppercase tracking-wide transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                  style={{
                    backgroundColor: NAVY_900,
                    color: GOLD_500,
                    fontFamily: "'Oswald', sans-serif",
                    letterSpacing: "0.12em",
                    fontSize: "0.95rem",
                  }}
                >
                  Send My Quote Request →
                </button>

                <p
                  className="text-xs text-center"
                  style={{ color: "#9CA3AF", fontFamily: "'Manrope', sans-serif" }}
                >
                  This will open your email client. Prefer to call?{" "}
                  <a href="tel:+18563713971" className="underline" style={{ color: GREEN_500 }}>
                    Mike: 856-371-3971
                  </a>{" "}
                  ·{" "}
                  <a href="tel:+18569810930" className="underline" style={{ color: MAGENTA }}>
                    Lydine: 856-981-0930
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
