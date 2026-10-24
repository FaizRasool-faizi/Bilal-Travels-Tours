"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Users,
  Plane,
  Building,
  Sparkles,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Navigation,
  Globe2,
} from "lucide-react";
import Card3D from "@/components/ui/Card3D";

export default function ContactUsPage() {
  const [inquiryType, setInquiryType] = useState<"umrah" | "visa" | "tour" | "flight">("umrah");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Lahore",
    departureDate: "",
    travellersCount: "2",
    destination: "Makkah & Madinah (Umrah)",
    requirements: "",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Assalam-o-Alaikum Bilal Travels & Tours,\nI would like to inquire about:\n- Category: ${inquiryType.toUpperCase()}\n- Name: ${
        formData.name || "Client"
      }\n- City: ${formData.city}\n- Details: ${formData.requirements || "Custom Tour & Visa Consultation"}`
    );
    window.open(`https://wa.me/923065602040?text=${text}`, "_blank");
  };

  const faqs = [
    {
      q: "Where is the Bilal Travels & Tours Head Office located in Lahore?",
      a: "Our registered corporate office is located at 1 Minar wali Masjid, Kacha Jail Road, Chungi Amar Sidhu, Lahore. Clients and families are welcome to visit during office hours for one-on-one visa consultation and itinerary planning.",
    },
    {
      q: "How fast can an Umrah E-Visa or Dubai Tourist Visa be processed?",
      a: "Saudi Umrah e-visas and UAE tourist visas are typically processed and issued within 24 to 48 working hours through our direct consulate accreditation. Fast-track emergency applications can also be accommodated.",
    },
    {
      q: "Can I customize our family Umrah or International Tour package?",
      a: "Yes, 100%! All our packages are fully tailor-made. You choose your preferred airline (Saudia, PIA, Turkish, Emirates, Flydubai), hotel tier (3-star, 4-star, or 5-star Swissôtel Clock Tower), private vehicle transfers, and Ziyarat guides.",
    },
    {
      q: "What payment methods are accepted at your Lahore office?",
      a: "We accept official crossed company cheques, direct online bank transfers (IBFT) to our verified corporate bank accounts, and in-person payments with stamped official receipts at our Lahore Head Office.",
    },
  ];

  return (
    <div className="bg-[#FAF8F3] min-h-screen text-navy-950 overflow-hidden">
      {/* =========================================================================
          1. HERO HEADER WITH LUXURY GLASSMORPHISM
      ========================================================================= */}
      <section className="relative pt-10 pb-16 sm:pb-24 overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-gold-400/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-600 mb-3">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span className="text-navy-950 font-bold">Contact Us</span>
          </div>

          <div className="relative rounded-3xl bg-gradient-to-br from-navy-950 via-[#0F2036] to-navy-900 text-white p-8 sm:p-14 border border-gold-400/30 shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-400/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/15 border border-gold-400/40 text-gold-300 text-xs font-bold tracking-widest uppercase">
                  <Sparkles className="w-4 h-4 text-gold-400" />
                  <span>Lahore Head Office • Dedicated Travel Desk</span>
                </div>

                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
                  Get In Touch with{" "}
                  <span className="text-gold-400">Bilal Travels</span>
                </h1>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  Whether you are planning a sacred Umrah pilgrimage, applying for international
                  visas, or booking customized family holidays — our certified travel consultants
                  in Lahore are available 24/7 to assist you.
                </p>
              </div>

              {/* Status Pill */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="https://wa.me/923065602040?text=Assalam-o-Alaikum%20Bilal%20Travels,%20I%20need%20assistance%20with%20travel%20booking."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-lg hover:shadow-emerald-500/25"
                >
                  <MessageCircle className="w-4 h-4 fill-navy-950" />
                  <span>Instant WhatsApp Desk</span>
                </a>

                <a
                  href="tel:+923065602040"
                  className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs text-center transition-all"
                >
                  Call: 0306 5602040
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. 3D QUICK CONTACT CARDS (4 CHANNELS)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {/* Card 1: WhatsApp Helpline */}
          <Card3D
            maxTilt={10}
            glareOpacity={0.2}
            glareColor="gold"
            className="bg-white rounded-3xl p-6 border border-border-muted hover:border-gold-400 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-emerald-700">
                  Direct WhatsApp Desk
                </span>
                <h3 className="font-serif text-lg font-bold text-navy-950">
                  0306 5602040
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Instant quotes, visa requirements, and confirmed e-ticket delivery on WhatsApp.
              </p>
            </div>
            <a
              href="https://wa.me/923065602040?text=Assalam-o-Alaikum%20Bilal%20Travels"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-emerald-700 flex items-center justify-between group-hover:text-emerald-800"
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Card3D>

          {/* Card 2: Operations Support */}
          <Card3D
            maxTilt={10}
            glareOpacity={0.2}
            glareColor="gold"
            className="bg-white rounded-3xl p-6 border border-border-muted hover:border-gold-400 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-blue-700">
                  Operations &amp; Booking
                </span>
                <h3 className="font-serif text-lg font-bold text-navy-950">
                  0314 4310865
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Direct phone consultation with Malik Bilal Abbas Saifi &amp; operations desk.
              </p>
            </div>
            <a
              href="tel:+923144310865"
              className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-blue-700 flex items-center justify-between group-hover:text-blue-800"
            >
              <span>Call Operations Desk</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Card3D>

          {/* Card 3: Lahore Head Office */}
          <Card3D
            maxTilt={10}
            glareOpacity={0.2}
            glareColor="gold"
            className="bg-white rounded-3xl p-6 border border-border-muted hover:border-gold-400 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-gold-50 border border-gold-300 text-gold-700 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-gold-700">
                  Registered Lahore Office
                </span>
                <h3 className="font-serif text-base font-bold text-navy-950 leading-tight">
                  1 Minar wali Masjid, Lahore
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Kacha Jail Road, Chungi Amar Sidhu, Lahore, Punjab, Pakistan.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Kacha+Jail+Road+Chungi+Amar+Sidhu+Lahore"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-gold-700 flex items-center justify-between group-hover:text-gold-900"
            >
              <span>Get Driving Directions</span>
              <Navigation className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Card3D>

          {/* Card 4: Operating Hours */}
          <Card3D
            maxTilt={10}
            glareOpacity={0.2}
            glareColor="gold"
            className="bg-white rounded-3xl p-6 border border-border-muted hover:border-gold-400 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 text-purple-700 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-purple-700">
                  Office Working Hours
                </span>
                <h3 className="font-serif text-base font-bold text-navy-950">
                  Mon – Sat: 9am – 9pm
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Emergency travel support &amp; flight monitoring remains active 24/7 for traveling passengers.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-purple-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>24/7 Airport Support Active</span>
            </div>
          </Card3D>
        </div>
      </section>

      {/* =========================================================================
          3. MAIN SECTION: INTERACTIVE INQUIRY BUILDER & CORPORATE DESK
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Form: 7 Columns */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-border-muted shadow-card space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-widest text-gold-600 font-bold block font-mono">
                Direct Travel Inquiry Desk
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
                Plan Your Journey with Our Specialists
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Select your service category below to receive confirmed quotes and official visa requirements.
              </p>
            </div>

            {/* Category Switcher Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-ivory-50 border border-border-muted">
              {[
                { id: "umrah", label: "🕌 Umrah", full: "Sacred Umrah" },
                { id: "visa", label: "🛂 Visa Desk", full: "Visa Consultancy" },
                { id: "tour", label: "✈️ Holidays", full: "Holiday Tours" },
                { id: "flight", label: "🎫 Flights", full: "Air Tickets" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setInquiryType(tab.id as any);
                    if (tab.id === "umrah") setFormData((f) => ({ ...f, destination: "Makkah & Madinah (Umrah)" }));
                    if (tab.id === "visa") setFormData((f) => ({ ...f, destination: "Turkey / Dubai / Schengen Visa" }));
                    if (tab.id === "tour") setFormData((f) => ({ ...f, destination: "Istanbul / Baku / Dubai Tour" }));
                    if (tab.id === "flight") setFormData((f) => ({ ...f, destination: "International Flights (PIA, Saudia, Emirates)" }));
                  }}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                    inquiryType === tab.id
                      ? "bg-navy-950 text-white shadow-md border border-gold-400/40"
                      : "text-slate-600 hover:text-navy-950 hover:bg-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-300 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-navy-950">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    JazakAllah Khair <strong className="text-navy-950">{formData.name}</strong>. Our senior consultant from the Lahore Head Office will contact you shortly on{" "}
                    <strong className="text-emerald-700">{formData.phone}</strong>.
                  </p>
                </div>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppInquiry}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp Immediately</span>
                  </button>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-white"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-navy-900 font-bold mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Farooq"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border-muted bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-navy-900 font-bold mb-1">WhatsApp / Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border-muted bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500 font-mono"
                    />
                  </div>
                </div>

                {/* Email & City in Pakistan */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-navy-900 font-bold mb-1">City in Pakistan *</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border-muted bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500"
                    >
                      <option value="Lahore">Lahore (Head Office)</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Islamabad / Rawalpindi">Islamabad / Rawalpindi</option>
                      <option value="Faisalabad">Faisalabad</option>
                      <option value="Multan">Multan</option>
                      <option value="Sahiwal">Sahiwal</option>
                      <option value="Narowal / Shakargarh">Narowal / Shakargarh</option>
                      <option value="Peshawar">Peshawar</option>
                      <option value="Other City">Other City across Pakistan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-navy-900 font-bold mb-1">Email Address (Optional)</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border-muted bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                {/* Destination & Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-navy-900 font-bold mb-1">Travel Destination / Service *</label>
                    <input
                      type="text"
                      required
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border-muted bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-navy-900 font-bold mb-1">Expected Departure Date</label>
                    <input
                      type="date"
                      value={formData.departureDate}
                      onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border-muted bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                {/* Specific Requirements / Notes */}
                <div>
                  <label className="block text-navy-900 font-bold mb-1">
                    Specific Travel Requirements &amp; Queries
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about preferred hotel proximity to Haram, room type (Quad/Double), flight preference, or specific visa inquiry..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-muted bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500 text-xs"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-navy-950 hover:bg-gold-500 hover:text-navy-950 text-white font-bold transition-all shadow-card flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Sending to Lahore Office...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Travel Inquiry</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppInquiry}
                    className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send on WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Lahore Head Office & Executive Leadership (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Office Profile Card */}
            <div className="bg-gradient-to-br from-navy-950 via-[#10243C] to-navy-900 text-white rounded-3xl p-6 sm:p-8 border border-gold-400/30 shadow-xl space-y-5">
              <div className="space-y-1 border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block font-bold">
                  Corporate Headquarters
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Bilal Travels &amp; Tours
                </h3>
                <p className="text-xs text-slate-300">
                  Government of Pakistan Licensed Travel &amp; Tour Operator
                </p>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Head Office Address:</strong>
                    <span className="text-slate-300 leading-relaxed block">
                      1 Minar wali Masjid, Kacha Jail road, Chungi Amar Sidhu, Lahore, Pakistan.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Direct Phone Helplines:</strong>
                    <div className="space-y-0.5 text-gold-300 font-mono">
                      <a href="tel:+923065602040" className="hover:underline block">
                        0306 5602040 (WhatsApp &amp; Calls)
                      </a>
                      <a href="tel:+923144310865" className="hover:underline block">
                        0314 4310865 (Support Line)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">In-Person Consultation:</strong>
                    <span className="text-slate-300 block">
                      Monday to Saturday: 9:00 AM – 9:00 PM
                    </span>
                    <span className="text-emerald-400 font-semibold block text-[11px] mt-0.5">
                      Sunday: Available by appointment
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Kacha+Jail+Road+Chungi+Amar+Sidhu+Lahore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Leadership Contacts Strip */}
            <div className="bg-white rounded-3xl p-6 border border-border-muted shadow-card space-y-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-bold block">
                Executive Leadership
              </span>

              <div className="space-y-3 divide-y divide-slate-100 text-xs">
                <div className="pt-1 flex items-center justify-between">
                  <div>
                    <strong className="text-navy-950 block">Malik Ahmad Ali</strong>
                    <span className="text-gold-700 text-[11px]">Chairperson</span>
                  </div>
                  <span className="text-[10px] bg-gold-100 text-gold-900 px-2 py-0.5 rounded-full font-semibold">
                    Governance
                  </span>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <strong className="text-navy-950 block">Malik Bilal Abbas Saifi</strong>
                    <span className="text-gold-700 text-[11px]">Chief Executive Officer (CEO)</span>
                  </div>
                  <span className="text-[10px] bg-navy-100 text-navy-900 px-2 py-0.5 rounded-full font-semibold">
                    Executive
                  </span>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <strong className="text-navy-950 block">Abbas Ahmad Saifi &amp; Waqar Ahmad</strong>
                    <span className="text-slate-500 text-[11px]">Office Administration &amp; Coordination</span>
                  </div>
                  <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-semibold">
                    Operations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. INTERACTIVE GOOGLE MAP EMBED (LAHORE LOCATION)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border-muted shadow-card space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-gold-600 font-bold font-mono block">
                Find Us on Map
              </span>
              <h3 className="font-serif text-2xl font-bold text-navy-950">
                Lahore Office Location &amp; Parking
              </h3>
              <p className="text-xs text-slate-500">
                Conveniently accessible from Ferozepur Road, Lahore Ring Road, and Walton Road.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Kacha+Jail+Road+Chungi+Amar+Sidhu+Lahore"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl border border-gold-500/40 text-navy-950 font-bold text-xs hover:bg-gold-50 transition-colors flex items-center gap-2 self-start"
            >
              <Navigation className="w-3.5 h-3.5 text-gold-600" />
              <span>Full Screen Map</span>
            </a>
          </div>

          {/* Map Frame */}
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-border-muted shadow-inner relative">
            <iframe
              title="Bilal Travels and Tours Lahore Head Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13615.15877869687!2d74.3497887!3d31.4475451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905ea5db247d5%3A0x633513a0279c676c!2sChungi%20Amar%20Sidhu%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[10%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. FREQUENTLY ASKED QUESTIONS (ACCORDION)
      ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 mb-20 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-[11px] uppercase tracking-widest text-gold-600 font-bold font-mono">
            Client Assistance
          </span>
          <h2 className="font-serif text-3xl font-bold text-navy-950">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Got questions before visiting our office or booking your itinerary? Here are quick answers.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-border-muted shadow-soft overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-navy-950 text-sm hover:text-gold-700 transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                    openFaq === idx ? "rotate-180 text-gold-600" : ""
                  }`}
                />
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-50 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
