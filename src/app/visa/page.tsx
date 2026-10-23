"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Send,
  AlertCircle,
  Phone,
  Plane,
  Sparkles,
  ArrowRight,
  ExternalLink,
  MapPin,
  HelpCircle,
  Award,
  Check,
  ChevronRight,
  Building2,
  CreditCard,
  UserCheck,
  Briefcase,
  Globe2,
} from "lucide-react";
import Card3D from "@/components/ui/Card3D";
import { VISA_SERVICES, VisaService } from "@/lib/data";

export default function VisaPage() {
  const [selectedVisa, setSelectedVisa] = useState<VisaService>(VISA_SERVICES[0]);
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Lahore",
    travellerCount: "1",
    employmentType: "Employed",
    destination: VISA_SERVICES[0].country,
  });

  const toggleDoc = (docIndex: number) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [`${selectedVisa.id}-${docIndex}`]: !prev[`${selectedVisa.id}-${docIndex}`],
    }));
  };

  const currentRequirements = selectedVisa.requirements;
  const completedCount = currentRequirements.filter(
    (_, idx) => !!checkedDocs[`${selectedVisa.id}-${idx}`]
  ).length;
  const readinessPercent = Math.round((completedCount / currentRequirements.length) * 100);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // WhatsApp quick trigger
  const whatsappUrl = `https://wa.me/923065602040?text=${encodeURIComponent(
    `Assalam-o-Alaikum Bilal Travels, I need visa consultancy for ${selectedVisa.country}. My name is ${
      formData.name || "Customer"
    }, Phone: ${formData.phone || "N/A"}, City: ${formData.city}, Profession: ${formData.employmentType}.`
  )}`;

  return (
    <div className="bg-[#FAF8F3] min-h-screen py-8 sm:py-14 overflow-hidden">
      {/* =========================================================================
          1. HERO HEADER WITH 3D METRICS
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-12 sm:mb-16">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-600 mb-3">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-navy-950 font-bold">Visa Consultancy</span>
        </div>

        <div className="relative rounded-3xl bg-gradient-to-br from-navy-950 via-[#0F2036] to-navy-900 text-white p-8 sm:p-12 lg:p-14 border border-gold-400/30 shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/15 border border-gold-400/40 text-gold-300 text-xs font-bold tracking-widest uppercase">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>Verified Pakistani Passport Visa Processing</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
                Global Visa Consultancy &amp;{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200">
                  Embassy Assistance
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-light">
                Navigating complex visa requirements with 100% transparency. Over 12+ years of proven
                excellence in tourist, visit, corporate, and sacred Umrah visas with direct embassy
                liaison in Lahore &amp; Islamabad.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="tel:+923065602040"
                  className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-7 py-3.5 rounded-full text-xs sm:text-sm shadow-card transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Visa Desk: 0306 5602040</span>
                </a>

                <a
                  href="https://wa.me/923065602040?text=Assalam-o-Alaikum%20Bilal%20Travels,%20I%20need%20visa%20guidance."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-3.5 rounded-full text-xs sm:text-sm transition-all flex items-center gap-2"
                >
                  <span>WhatsApp File Pre-Check</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
                </a>
              </div>
            </div>

            {/* Right: Floating 3D Trust Hologram Card */}
            <div className="lg:col-span-4">
              <Card3D
                maxTilt={12}
                glareOpacity={0.3}
                glareColor="gold"
                className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-gold-400/40 shadow-2xl text-center space-y-4"
              >
                <div className="inline-flex p-3 rounded-2xl bg-gold-400/20 text-gold-300 border border-gold-400/30 mb-1">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">Government Accredited</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Licensed by Dept of Tourist Services (Govt of Pakistan) &amp; TAAP Member.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 text-center border-t border-white/10">
                  <div className="p-2.5 rounded-xl bg-navy-900/60">
                    <span className="font-serif text-2xl font-bold text-gold-400">14k+</span>
                    <span className="text-[10px] text-slate-300 block">Visas Processed</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-navy-900/60">
                    <span className="font-serif text-2xl font-bold text-gold-400">99.2%</span>
                    <span className="text-[10px] text-slate-300 block">Approval Ratio</span>
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. COUNTRY SELECTOR PILLS CAROUSEL
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-navy-950 font-bold">
              Select Your Travel Destination
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Browse requirements, processing times, and eligibility for top international countries.
            </p>
          </div>
          <span className="text-xs font-mono text-gold-700 font-bold hidden sm:block">
            {VISA_SERVICES.length} Countries Available
          </span>
        </div>

        {/* Scrollable Country Pills */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 pt-1 scrollbar-none">
          {VISA_SERVICES.map((v) => {
            const isSelected = selectedVisa.id === v.id;
            return (
              <button
                key={v.id}
                onClick={() => {
                  setSelectedVisa(v);
                  setFormData((prev) => ({ ...prev, destination: v.country }));
                }}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl text-xs sm:text-sm transition-all whitespace-nowrap border font-sans cursor-pointer flex-shrink-0 ${
                  isSelected
                    ? "bg-navy-950 text-white border-gold-400 shadow-[0_10px_25px_rgba(15,32,54,0.3)] scale-[1.03]"
                    : "bg-white text-navy-900 hover:bg-gold-50/50 border-border-muted hover:border-gold-300 shadow-sm"
                }`}
              >
                <span className="text-2xl">{v.flag}</span>
                <div className="text-left">
                  <span className="font-bold block leading-tight">{v.country}</span>
                  <span
                    className={`text-[10px] font-mono block ${
                      isSelected ? "text-gold-300" : "text-slate-400"
                    }`}
                  >
                    {v.processingTime.split(" ")[0]} {v.processingTime.split(" ")[1] || ""}
                  </span>
                </div>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse ml-1" />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          3. MAIN SHOWCASE: 3D VISA DETAIL PASS + VIP ELIGIBILITY FORM
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: 3D Visa Detail Pass & Interactive Checklist (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* 3D Holographic Passport / Visa Header */}
            <Card3D
              maxTilt={6}
              glareOpacity={0.2}
              glareColor="gold"
              className="bg-white rounded-3xl p-6 sm:p-9 border border-border-muted hover:border-gold-400 shadow-card transition-all space-y-6"
            >
              {/* Header Ribbon */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border-muted">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-950 to-navy-900 border-2 border-gold-400/50 flex items-center justify-center text-3xl shadow-md">
                    {selectedVisa.flag}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-gold-600 font-mono">
                        {selectedVisa.visaType}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-navy-950 font-bold">
                      {selectedVisa.country} Visa Assistance
                    </h3>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-navy-950 to-navy-900 text-white px-5 py-3 rounded-2xl border border-gold-400/40 text-right self-start sm:self-auto shadow-sm">
                  <span className="text-[10px] text-gold-400 uppercase tracking-widest font-mono block">
                    Consultancy Tariff
                  </span>
                  <span className="font-serif text-lg font-bold text-white">
                    {selectedVisa.pricePKR ? `PKR ${selectedVisa.pricePKR}` : "Quote On Request"}
                  </span>
                </div>
              </div>

              {/* 3 Key Metrics Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-ivory-50 border border-border-muted flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-600 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block uppercase font-mono tracking-wider">
                      Processing Time
                    </span>
                    <span className="font-bold text-navy-950 text-xs sm:text-sm">
                      {selectedVisa.processingTime}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-ivory-50 border border-border-muted flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-600 flex-shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block uppercase font-mono tracking-wider">
                      Visa Validity
                    </span>
                    <span className="font-bold text-navy-950 text-xs sm:text-sm">
                      {selectedVisa.validity}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-ivory-50 border border-border-muted flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block uppercase font-mono tracking-wider">
                      Entry Permitted
                    </span>
                    <span className="font-bold text-navy-950 text-xs sm:text-sm">
                      {selectedVisa.entryType}
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive File Readiness Tracker */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-navy-950 to-[#10243C] text-white border border-gold-400/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gold-400" />
                    <span className="font-bold text-xs uppercase tracking-wider text-gold-300">
                      Interactive Document Readiness Checklist
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Click each required document you currently possess to check your application score.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="font-serif text-2xl font-bold text-gold-400">
                      {readinessPercent}%
                    </span>
                    <span className="text-[10px] text-slate-300 block">
                      {completedCount} of {currentRequirements.length} Ready
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-gold-400/40 flex items-center justify-center bg-white/10">
                    <FileText className="w-5 h-5 text-gold-400" />
                  </div>
                </div>
              </div>

              {/* Mandatory Documents Checklist */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-xl text-navy-950 font-bold">
                    Mandatory Documents Required
                  </h4>
                  <span className="text-xs text-slate-500 font-mono">
                    Pakistani Passport Applicants
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {currentRequirements.map((req, idx) => {
                    const isChecked = !!checkedDocs[`${selectedVisa.id}-${idx}`];
                    return (
                      <div
                        key={idx}
                        onClick={() => toggleDoc(idx)}
                        className={`flex items-start gap-3.5 p-4 rounded-2xl border transition-all cursor-pointer select-none ${
                          isChecked
                            ? "bg-emerald-50/70 border-emerald-400 shadow-sm"
                            : "bg-ivory-50/60 hover:bg-white border-border-muted hover:border-gold-300"
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                            isChecked
                              ? "bg-emerald-600 text-white"
                              : "border border-slate-300 text-transparent hover:border-gold-500"
                          }`}
                        >
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>

                        <div className="flex-1">
                          <span
                            className={`text-xs sm:text-sm leading-relaxed ${
                              isChecked
                                ? "text-emerald-950 font-semibold"
                                : "text-navy-900"
                            }`}
                          >
                            {req}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* What Bilal Travels Handles */}
              <div className="space-y-3 pt-6 border-t border-border-muted">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-900">
                  <CheckCircle2 className="w-4 h-4 text-gold-600" />
                  <span>Included in Our Professional Consultancy</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedVisa.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-ivory-50 border border-border-muted text-xs font-medium text-navy-900"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fee Notice */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-950">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Official Embassy Fee Notice:</strong> {selectedVisa.embassyFeeNote}. Exchange
                  rates &amp; embassy revisions are calculated at the time of file submission.
                </p>
              </div>
            </Card3D>
          </div>

          {/* Right Column: Sticky VIP Visa Eligibility Form (4 cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-gradient-to-br from-navy-950 via-[#0F2036] to-navy-900 text-white rounded-3xl p-6 sm:p-8 border border-gold-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.35)] space-y-5">
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-gold-400 font-bold block font-mono">
                  Express Evaluation
                </span>
                <h3 className="font-serif text-2xl text-white font-bold">
                  Check Your Visa Eligibility
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Submit your details for verification by our Senior Visa Consultant within 2 hours.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-emerald-950/70 border border-emerald-500/50 rounded-2xl p-6 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg text-white font-bold">Inquiry Registered!</h4>
                  <p className="text-xs text-emerald-200 leading-relaxed">
                    Thank you, {formData.name}. Our visa officer is reviewing your profile and will
                    call you shortly at {formData.phone}.
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
                  >
                    <span>Instant WhatsApp Connect</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-gold-400 underline hover:text-gold-300 block mx-auto pt-1 cursor-pointer"
                  >
                    Submit another destination inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Selected Destination</label>
                    <input
                      type="text"
                      readOnly
                      value={selectedVisa.country}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-navy-900/80 border border-gold-400/30 text-gold-400 font-bold text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Bilal"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-navy-900 border border-navy-700 text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-navy-900 border border-navy-700 text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-300 mb-1 font-medium">City</label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-navy-900 border border-navy-700 text-white focus:outline-none focus:border-gold-500 text-xs"
                      >
                        <option value="Lahore">Lahore</option>
                        <option value="Islamabad / Rawalpindi">Islamabad / RWP</option>
                        <option value="Karachi">Karachi</option>
                        <option value="Faisalabad">Faisalabad</option>
                        <option value="Multan">Multan</option>
                        <option value="Other">Other City</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-300 mb-1 font-medium">Applicants</label>
                      <select
                        value={formData.travellerCount}
                        onChange={(e) =>
                          setFormData({ ...formData, travellerCount: e.target.value })
                        }
                        className="w-full px-3 py-2.5 rounded-xl bg-navy-900 border border-navy-700 text-white focus:outline-none focus:border-gold-500 text-xs"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 (Couple)</option>
                        <option value="Family (3-5)">Family (3-5)</option>
                        <option value="Group 6+">Group 6+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">
                      Employment / Profession
                    </label>
                    <select
                      value={formData.employmentType}
                      onChange={(e) =>
                        setFormData({ ...formData, employmentType: e.target.value })
                      }
                      className="w-full px-3 py-2.5 rounded-xl bg-navy-900 border border-navy-700 text-white focus:outline-none focus:border-gold-500 text-xs"
                    >
                      <option value="Employed">Salaried Employee</option>
                      <option value="Business Owner">Business Owner / Partner</option>
                      <option value="Freelancer">IT Freelancer / Remote</option>
                      <option value="Student">Student / Dependent</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold py-3.5 rounded-2xl text-xs shadow-card transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Request File Evaluation</span>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10 text-[11px] flex items-center justify-center gap-1.5 transition-colors block text-center"
                  >
                    <span>Or Chat on WhatsApp</span>
                    <ExternalLink className="w-3 h-3 text-gold-400" />
                  </a>
                </form>
              )}
            </div>

            {/* Helpline Assistance Card */}
            <div className="p-5 rounded-3xl bg-white border border-border-muted shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-navy-900 uppercase tracking-wider">
                <Phone className="w-4 h-4 text-gold-600" />
                <span>Lahore Visa Helpline</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Need urgent file evaluation or have an upcoming appointment? Call our Visa Officers
                directly:
              </p>
              <div className="space-y-1.5 pt-1 text-xs">
                <a
                  href="tel:+923065602040"
                  className="block font-bold text-navy-950 hover:text-gold-600"
                >
                  📞 0306 5602040 (Abbas Ahmad Saifi)
                </a>
                <a
                  href="tel:+923144310865"
                  className="block font-bold text-navy-950 hover:text-gold-600"
                >
                  📞 0314 4310865 (Waqar Ahmad)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. 4-STEP 3D VISA APPLICATION ROADMAP
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20 sm:mb-28">
        <div className="text-center space-y-2 mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Transparent Workflow
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy-950 font-bold">
            How Our Visa Consultancy Works
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            From initial document scrutiny to biometric appointment and final approval.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {[
            {
              step: "01",
              title: "Free Profile Assessment",
              desc: "Our consultant checks your passport validity, previous travel history, and bank statement requirements.",
              icon: UserCheck,
            },
            {
              step: "02",
              title: "Document File Preparation",
              desc: "We build your file: compliant hotel bookings, flight itineraries, insurance policies, and cover letters.",
              icon: FileText,
            },
            {
              step: "03",
              title: "Embassy / VFS Biometrics",
              desc: "We secure your appointment slot and brief you on any interview or document presentation guidelines.",
              icon: Building2,
            },
            {
              step: "04",
              title: "Visa Delivery & Travel",
              desc: "Receive your approved visa / passport stamp and embark on your international journey with peace of mind.",
              icon: Plane,
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Card3D
                key={item.step}
                maxTilt={12}
                glareOpacity={0.25}
                glareColor="gold"
                className="bg-white rounded-3xl p-7 border border-border-muted hover:border-gold-400 shadow-card space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl font-bold text-gold-500/30 group-hover:text-gold-500 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-600 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="font-serif font-bold text-navy-950 text-xl group-hover:text-gold-700 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-gold-600">
                  <span>Verified Step</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </Card3D>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          5. SENIOR VISA OFFICERS DIRECT ASSISTANCE BANNER
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        <div className="bg-gradient-to-br from-navy-950 via-[#0F2036] to-navy-900 rounded-3xl p-8 sm:p-12 border border-gold-400/40 shadow-xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-gold-300 text-xs font-bold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5 text-gold-400" />
                <span>Senior Visa Desk Officers</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                Need In-Person Document Scrutiny in Lahore?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl font-light">
                Bring your passport and bank statements to our office. Our Office Coordinator{" "}
                <strong className="text-white font-semibold">Abbas Ahmad Saifi</strong> and Operations
                Officer <strong className="text-white font-semibold">Waqar Ahmad</strong> will review
                your file on the spot and provide instant eligibility feedback.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span>1 Minar wali Masjid, Kacha Jail road, Chungi Amar Sidhu Lahore</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold-400" />
                  <span>Mon – Sat: 10:00 AM – 7:00 PM</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=1+Minar+wali+Masjid+Kacha+Jail+road+Chungi+Amar+Sidhu+Lahore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold py-3.5 px-6 rounded-2xl text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-2 shadow-card"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Directions to Lahore Office</span>
              </a>

              <Link
                href="/about"
                className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-6 rounded-2xl text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-2 border border-white/20"
              >
                <span>Meet Our Leadership Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
