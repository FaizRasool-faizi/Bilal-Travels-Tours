"use client";

import React, { useState } from "react";
import {
  FileText,
  Plane,
  Briefcase,
  Laptop,
  Building,
  ArrowRight,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const POPULAR_DESTINATIONS = [
  "Azerbaijan (Baku)",
  "Bahrain",
  "Cambodia",
  "Indonesia (Bali)",
  "Jordan",
  "Kenya",
  "Malaysia",
  "Oman",
  "Saudi Arabia (Umrah / Business)",
  "Singapore",
  "Sri Lanka",
  "Thailand",
  "United Arab Emirates (Dubai)",
  "Vietnam",
  "Schengen Europe",
  "United Kingdom",
];

const SERVICE_TYPES = [
  { id: "visit", label: "Visit / Tourist Visa", icon: Plane },
  { id: "work", label: "Work / Employment Visa", icon: Briefcase },
  { id: "freelance", label: "Freelancer / Nomad Visa", icon: Laptop },
  { id: "business", label: "Multiple Business Visa", icon: Building },
  { id: "umrah", label: "Umrah & Ziyarat Package", icon: FileText },
];

export default function QuickAssessmentSection() {
  const [selectedCountry, setSelectedCountry] = useState("United Arab Emirates (Dubai)");
  const [selectedService, setSelectedService] = useState("visit");
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("Lahore");
  const [travelDate, setTravelDate] = useState("");

  const handleWhatsAppInquiry = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedServiceLabel =
      SERVICE_TYPES.find((s) => s.id === selectedService)?.label || selectedService;

    const message =
      `*Assalam-o-Alaikum Bilal Travels & Tours Team,*\n\n` +
      `I would like to get a *Free Visa / Tour Assessment* from your website:\n\n` +
      `👤 *Name:* ${fullName || "Interested Traveller"}\n` +
      `📍 *City:* ${city}\n` +
      `🌍 *Destination Country:* ${selectedCountry}\n` +
      `📋 *Visa / Service Type:* ${selectedServiceLabel}\n` +
      (travelDate ? `📅 *Target Travel Date:* ${travelDate}\n` : "") +
      `\nPlease advise on the required documents, processing time, and official quotation. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/923065602040?text=${encoded}`, "_blank");
  };

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 -mt-2 mb-10">
      <div className="bg-gradient-to-br from-navy-950 via-[#102D4F] to-navy-900 rounded-3xl p-6 sm:p-10 border border-gold-500/30 shadow-[0_20px_60px_rgba(16,45,79,0.2)] text-white relative overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 text-[11px] font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Instant Client Assessment Tool</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-tight">
                Get Your Free Visa Eligibility &amp; Custom Quote
              </h3>
              <p className="text-ivory-200/80 text-xs sm:text-sm max-w-2xl">
                Select your intended destination and service category. Connect directly with our
                certified Lahore visa desk on WhatsApp for instant guidance.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs text-gold-400 font-semibold flex-shrink-0">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Free Consultation • No Obligation</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleWhatsAppInquiry} className="space-y-6">
            {/* Service Type Pills */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-gold-300">
                1. Select Visa / Travel Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {SERVICE_TYPES.map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedService === type.id;
                  return (
                    <button
                      type="button"
                      key={type.id}
                      onClick={() => setSelectedService(type.id)}
                      className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all border text-left ${
                        isSelected
                          ? "bg-gold-500 text-navy-950 border-gold-400 font-bold shadow-soft"
                          : "bg-white/10 text-ivory-100 border-white/10 hover:bg-white/15"
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${isSelected ? "text-navy-950" : "text-gold-400"}`} />
                      <span className="truncate">{type.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input Row: Country, Name, City, Travel Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Destination Country */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300">
                  2. Destination Country
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400 focus:bg-navy-950 transition-colors"
                >
                  {POPULAR_DESTINATIONS.map((country) => (
                    <option key={country} value={country} className="bg-navy-950 text-white">
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              {/* Your Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300">
                  3. Your Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Muhammad Bilal"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:bg-navy-950 transition-colors"
                />
              </div>

              {/* Departure City */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300">
                  4. Your City in Pakistan
                </label>
                <input
                  type="text"
                  placeholder="e.g. Lahore / Islamabad / Karachi"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:bg-navy-950 transition-colors"
                />
              </div>

              {/* Preferred Date */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300">
                  5. Planned Travel Month
                </label>
                <input
                  type="text"
                  placeholder="e.g. Next Month / Urgent"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:bg-navy-950 transition-colors"
                />
              </div>
            </div>

            {/* Bottom Row: Trust highlights & Action Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Official Embassy Verified
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Documentation File Support
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Direct Hotline: 0306 5602040
                </span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs sm:text-sm px-7 py-3 rounded-xl shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-navy-950 fill-navy-950" />
                <span>Get Instant WhatsApp Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
