/* ============================================================
   Booking Page — Diamond Cutz Lawn and Landscaping
   Design: "Tributary Roots" — multi-step booking with calendar
   Steps: 1. Select Service → 2. Choose Date & Time → 3. Your Info → 4. Confirm
   ============================================================ */

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import {
  Scissors, Leaf, Sprout, Droplets, Sun, Layers,
  Flower2, Shovel, Lightbulb, CheckCircle2, ChevronRight,
  ChevronLeft, Clock, Phone, Mail, User, Home, ArrowRight,
  CalendarDays, Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  { id: "mowing", icon: Scissors, title: "Lawn Mowing & Edging", duration: "1–2 hrs", popular: true },
  { id: "landscape", icon: Leaf, title: "Landscape Design & Install", duration: "Consultation", popular: false },
  { id: "fertilization", icon: Sprout, title: "Fertilization & Weed Control", duration: "1–1.5 hrs", popular: false },
  { id: "sod", icon: Layers, title: "Sod Installation", duration: "Half/Full Day", popular: false },
  { id: "irrigation", icon: Droplets, title: "Irrigation Services", duration: "2–4 hrs", popular: false },
  { id: "cleanup", icon: Sun, title: "Seasonal Clean-Up", duration: "2–4 hrs", popular: false },
  { id: "shrubs", icon: Flower2, title: "Shrub & Hedge Trimming", duration: "1–2 hrs", popular: false },
  { id: "mulching", icon: Shovel, title: "Mulching & Bed Care", duration: "2–3 hrs", popular: false },
  { id: "lighting", icon: Lightbulb, title: "Landscape Lighting", duration: "Half Day", popular: false },
];

const timeSlots = [
  "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM",
  "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM",
];

const STEPS = ["Service", "Date & Time", "Your Info", "Confirm"];

type BookingState = {
  service: string;
  date: Date | undefined;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
};

export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [booking, setBooking] = useState<BookingState>({
    service: "",
    date: undefined,
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const selectedService = services.find((s) => s.id === booking.service);

  const canProceed = () => {
    if (step === 0) return !!booking.service;
    if (step === 1) return !!booking.date && !!booking.time;
    if (step === 2) return !!booking.firstName && !!booking.lastName && !!booking.email && !!booking.phone;
    return true;
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  // Disable past dates and Sundays
  const disabledDays = [
    { before: new Date() },
    { dayOfWeek: [0] }, // Sunday
  ];

  if (submitted) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: "oklch(0.97 0.02 90)" }}>
        <Navbar />
        <div className="container pt-32 pb-20 flex flex-col items-center text-center">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
            style={{ backgroundColor: "oklch(0.35 0.10 145 / 0.1)" }}
          >
            <CheckCircle2 className="w-10 h-10" style={{ color: "oklch(0.35 0.10 145)" }} />
          </div>
          <h1
            className="text-4xl font-bold mb-4"
            style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}
          >
            Booking Confirmed!
          </h1>
          <p
            className="text-lg mb-2 max-w-md"
            style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Thank you, {booking.firstName}! Your{" "}
            <strong>{selectedService?.title}</strong> has been scheduled for{" "}
            <strong>
              {booking.date?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
            </strong>{" "}
            at <strong>{booking.time}</strong>.
          </p>
          <p
            className="text-base mb-8"
            style={{ color: "oklch(0.50 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}
          >
            A confirmation will be sent to <strong>{booking.email}</strong>. We'll also call you at {booking.phone} to confirm.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-base transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              style={{
                backgroundColor: "oklch(0.35 0.10 145)",
                color: "oklch(0.97 0.02 90)",
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              Back to Home
            </a>
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(0);
                setBooking({
                  service: "", date: undefined, time: "",
                  firstName: "", lastName: "", email: "", phone: "", address: "", notes: "",
                });
              }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: "white",
                color: "oklch(0.35 0.10 145)",
                border: "1px solid oklch(0.35 0.10 145)",
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              Book Another Service
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(0.97 0.02 90)" }}>
      <Navbar />

      {/* Page Header */}
      <section
        className="pt-24 pb-10"
        style={{ backgroundColor: "oklch(0.25 0.10 145)" }}
      >
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <CalendarDays className="w-5 h-5" style={{ color: "oklch(0.82 0.12 80)" }} />
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "oklch(0.82 0.12 80)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Online Booking
            </span>
          </div>
          <h1
            className="text-4xl font-bold text-white mb-3"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Book a Service
          </h1>
          <p
            className="text-base"
            style={{ color: "oklch(0.85 0.04 145)", fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Schedule your lawn care service in just a few steps.
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="sticky top-16 z-30 bg-white border-b border-border shadow-sm">
        <div className="container py-3">
          <div className="flex items-center justify-center gap-0">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center">
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                    style={{
                      backgroundColor: i <= step ? "oklch(0.35 0.10 145)" : "oklch(0.88 0.03 85)",
                      color: i <= step ? "white" : "oklch(0.55 0.04 80)",
                      fontFamily: "'Nunito Sans', sans-serif",
                    }}
                  >
                    {i < step ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                  </div>
                  <span
                    className="text-xs font-semibold hidden sm:block"
                    style={{
                      color: i <= step ? "oklch(0.35 0.10 145)" : "oklch(0.55 0.04 80)",
                      fontFamily: "'Nunito Sans', sans-serif",
                    }}
                  >
                    {s}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className="w-8 sm:w-16 h-0.5 mx-2"
                    style={{ backgroundColor: i < step ? "oklch(0.35 0.10 145)" : "oklch(0.88 0.03 85)" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">

          {/* Step 0: Select Service */}
          {step === 0 && (
            <div>
              <h2
                className="text-2xl font-bold mb-2"
                style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}
              >
                What service do you need?
              </h2>
              <p
                className="text-sm mb-6"
                style={{ color: "oklch(0.50 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Select the service you'd like to schedule. Not sure? Choose "Landscape Design & Install" for a free consultation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => {
                  const Icon = service.icon;
                  const isSelected = booking.service === service.id;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setBooking({ ...booking, service: service.id })}
                      className="relative p-4 rounded-xl border-2 text-left transition-all duration-200 hover:shadow-md"
                      style={{
                        borderColor: isSelected ? "oklch(0.35 0.10 145)" : "oklch(0.88 0.03 85)",
                        backgroundColor: isSelected ? "oklch(0.35 0.10 145 / 0.06)" : "white",
                      }}
                    >
                      {service.popular && (
                        <span
                          className="absolute top-2 right-2 text-xs font-bold px-1.5 py-0.5 rounded-full"
                          style={{
                            backgroundColor: "oklch(0.72 0.15 75)",
                            color: "oklch(0.18 0.01 60)",
                            fontFamily: "'Nunito Sans', sans-serif",
                          }}
                        >
                          Popular
                        </span>
                      )}
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                        style={{ backgroundColor: isSelected ? "oklch(0.35 0.10 145 / 0.15)" : "oklch(0.93 0.03 85)" }}
                      >
                        <Icon className="w-5 h-5" style={{ color: "oklch(0.35 0.10 145)" }} />
                      </div>
                      <p
                        className="font-700 text-sm mb-1"
                        style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        {service.title}
                      </p>
                      <p
                        className="text-xs flex items-center gap-1"
                        style={{ color: "oklch(0.55 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        <Clock className="w-3 h-3" />
                        {service.duration}
                      </p>
                      {isSelected && (
                        <div
                          className="absolute top-2 left-2 w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "oklch(0.35 0.10 145)" }}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 1: Date & Time */}
          {step === 1 && (
            <div>
              <h2
                className="text-2xl font-bold mb-2"
                style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}
              >
                Choose Your Date & Time
              </h2>
              <p
                className="text-sm mb-6"
                style={{ color: "oklch(0.50 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                We're available Monday through Saturday. Select your preferred date and time slot.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Calendar */}
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-wide mb-3"
                    style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    Select Date
                  </p>
                  <div
                    className="bg-white rounded-xl border border-border p-4 shadow-sm"
                    style={{ "--rdp-accent-color": "oklch(0.35 0.10 145)", "--rdp-accent-background-color": "oklch(0.35 0.10 145 / 0.1)" } as React.CSSProperties}
                  >
                    <DayPicker
                      mode="single"
                      selected={booking.date}
                      onSelect={(date) => setBooking({ ...booking, date })}
                      disabled={disabledDays}
                      fromDate={new Date()}
                      styles={{
                        root: { fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.875rem" },
                        day: { borderRadius: "8px" },
                      }}
                      modifiersStyles={{
                        selected: {
                          backgroundColor: "oklch(0.35 0.10 145)",
                          color: "white",
                          borderRadius: "8px",
                        },
                        today: {
                          fontWeight: "800",
                          color: "oklch(0.35 0.10 145)",
                        },
                      }}
                    />
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-wide mb-3"
                    style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    Select Time
                  </p>
                  {booking.date ? (
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((slot) => {
                        const isSelected = booking.time === slot;
                        return (
                          <button
                            key={slot}
                            onClick={() => setBooking({ ...booking, time: slot })}
                            className="py-3 px-4 rounded-xl border-2 text-sm font-bold transition-all duration-200 hover:shadow-sm"
                            style={{
                              borderColor: isSelected ? "oklch(0.35 0.10 145)" : "oklch(0.88 0.03 85)",
                              backgroundColor: isSelected ? "oklch(0.35 0.10 145)" : "white",
                              color: isSelected ? "white" : "oklch(0.18 0.01 60)",
                              fontFamily: "'Nunito Sans', sans-serif",
                            }}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div
                      className="bg-white rounded-xl border border-border p-8 text-center"
                    >
                      <CalendarDays className="w-10 h-10 mx-auto mb-3" style={{ color: "oklch(0.75 0.04 80)" }} />
                      <p
                        className="text-sm"
                        style={{ color: "oklch(0.55 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        Please select a date first
                      </p>
                    </div>
                  )}

                  {booking.date && (
                    <div
                      className="mt-4 p-3 rounded-lg"
                      style={{ backgroundColor: "oklch(0.35 0.10 145 / 0.08)" }}
                    >
                      <p
                        className="text-xs font-semibold"
                        style={{ color: "oklch(0.35 0.10 145)", fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        📅 {booking.date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
                        {booking.time && ` · ⏰ ${booking.time}`}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Contact Info */}
          {step === 2 && (
            <div>
              <h2
                className="text-2xl font-bold mb-2"
                style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}
              >
                Your Contact Information
              </h2>
              <p
                className="text-sm mb-6"
                style={{ color: "oklch(0.50 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                We'll use this to confirm your booking and send reminders.
              </p>

              <div className="bg-white rounded-2xl border border-border p-6 shadow-sm space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      <User className="w-3.5 h-3.5" /> First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={booking.firstName}
                      onChange={(e) => setBooking({ ...booking, firstName: e.target.value })}
                      placeholder="John"
                      className="w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      style={{ borderColor: "oklch(0.88 0.03 85)", fontFamily: "'Nunito Sans', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={booking.lastName}
                      onChange={(e) => setBooking({ ...booking, lastName: e.target.value })}
                      placeholder="Smith"
                      className="w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      style={{ borderColor: "oklch(0.88 0.03 85)", fontFamily: "'Nunito Sans', sans-serif" }}
                    />
                  </div>
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <Mail className="w-3.5 h-3.5" /> Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={booking.email}
                    onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    style={{ borderColor: "oklch(0.88 0.03 85)", fontFamily: "'Nunito Sans', sans-serif" }}
                  />
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <Phone className="w-3.5 h-3.5" /> Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={booking.phone}
                    onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                    placeholder="(856) 000-0000"
                    className="w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    style={{ borderColor: "oklch(0.88 0.03 85)", fontFamily: "'Nunito Sans', sans-serif" }}
                  />
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <Home className="w-3.5 h-3.5" /> Property Address (Tributary)
                  </label>
                  <input
                    type="text"
                    value={booking.address}
                    onChange={(e) => setBooking({ ...booking, address: e.target.value })}
                    placeholder="123 Tributary Drive, Yulee, FL 32097"
                    className="w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    style={{ borderColor: "oklch(0.88 0.03 85)", fontFamily: "'Nunito Sans', sans-serif" }}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wide mb-1.5 block" style={{ color: "oklch(0.35 0.04 70)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Special Notes or Requests (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={booking.notes}
                    onChange={(e) => setBooking({ ...booking, notes: e.target.value })}
                    placeholder="Gate code, specific areas to focus on, pet info, etc."
                    className="w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    style={{ borderColor: "oklch(0.88 0.03 85)", fontFamily: "'Nunito Sans', sans-serif" }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Confirm */}
          {step === 3 && (
            <div>
              <h2
                className="text-2xl font-bold mb-2"
                style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}
              >
                Review & Confirm
              </h2>
              <p
                className="text-sm mb-6"
                style={{ color: "oklch(0.50 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Please review your booking details before confirming.
              </p>

              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden mb-6">
                {/* Service Summary */}
                <div className="p-6 border-b border-border">
                  <div className="flex items-center gap-3 mb-1">
                    <Sparkles className="w-5 h-5" style={{ color: "oklch(0.72 0.15 75)" }} />
                    <h3 className="font-700 text-sm uppercase tracking-wide" style={{ color: "oklch(0.50 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Service</h3>
                  </div>
                  <p className="text-lg font-bold" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}>
                    {selectedService?.title}
                  </p>
                  <p className="text-sm" style={{ color: "oklch(0.50 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Estimated duration: {selectedService?.duration}
                  </p>
                </div>

                {/* Date/Time */}
                <div className="p-6 border-b border-border">
                  <div className="flex items-center gap-3 mb-1">
                    <CalendarDays className="w-5 h-5" style={{ color: "oklch(0.72 0.15 75)" }} />
                    <h3 className="font-700 text-sm uppercase tracking-wide" style={{ color: "oklch(0.50 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Date & Time</h3>
                  </div>
                  <p className="text-lg font-bold" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Lora', serif" }}>
                    {booking.date?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
                  </p>
                  <p className="text-sm" style={{ color: "oklch(0.50 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    {booking.time}
                  </p>
                </div>

                {/* Contact */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <User className="w-5 h-5" style={{ color: "oklch(0.72 0.15 75)" }} />
                    <h3 className="font-700 text-sm uppercase tracking-wide" style={{ color: "oklch(0.50 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Contact Info</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wide block mb-0.5" style={{ color: "oklch(0.55 0.04 80)" }}>Name</span>
                      <span style={{ color: "oklch(0.18 0.01 60)" }}>{booking.firstName} {booking.lastName}</span>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wide block mb-0.5" style={{ color: "oklch(0.55 0.04 80)" }}>Phone</span>
                      <span style={{ color: "oklch(0.18 0.01 60)" }}>{booking.phone}</span>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wide block mb-0.5" style={{ color: "oklch(0.55 0.04 80)" }}>Email</span>
                      <span style={{ color: "oklch(0.18 0.01 60)" }}>{booking.email}</span>
                    </div>
                    {booking.address && (
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wide block mb-0.5" style={{ color: "oklch(0.55 0.04 80)" }}>Address</span>
                        <span style={{ color: "oklch(0.18 0.01 60)" }}>{booking.address}</span>
                      </div>
                    )}
                  </div>
                  {booking.notes && (
                    <div className="mt-3">
                      <span className="text-xs font-bold uppercase tracking-wide block mb-0.5" style={{ color: "oklch(0.55 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>Notes</span>
                      <span className="text-sm" style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{booking.notes}</span>
                    </div>
                  )}
                </div>
              </div>

              <div
                className="p-4 rounded-xl mb-6"
                style={{ backgroundColor: "oklch(0.35 0.10 145 / 0.08)" }}
              >
                <p
                  className="text-sm"
                  style={{ color: "oklch(0.30 0.08 145)", fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  <strong>Free Estimate:</strong> This booking is a request for service. We'll confirm availability and provide a quote within 24 hours via phone or email. No payment required at this time.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            <button
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-bold text-sm transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-sm"
              style={{
                backgroundColor: "white",
                color: "oklch(0.35 0.10 145)",
                border: "1px solid oklch(0.35 0.10 145)",
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>

            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md font-bold text-sm transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-md hover:-translate-y-0.5"
                style={{
                  backgroundColor: canProceed() ? "oklch(0.35 0.10 145)" : "oklch(0.75 0.04 145)",
                  color: "oklch(0.97 0.02 90)",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                Continue
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="inline-flex items-center gap-2 px-7 py-2.5 rounded-md font-bold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  backgroundColor: "oklch(0.72 0.15 75)",
                  color: "oklch(0.18 0.01 60)",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                Confirm Booking
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
