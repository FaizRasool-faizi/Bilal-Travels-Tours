"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Send,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  Phone,
} from "lucide-react";
import { VISA_SERVICES, VisaService } from "@/lib/data";

export default function VisaPage() {
  const [selectedVisa, setSelectedVisa] = useState<VisaService>(VISA_SERVICES[0]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Lahore",
    travellerCount: "1",
    employmentType: "Employed",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-ivory-100 min-h-screen py-12">
      {/* Top Breadcrumb & Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-600 mb-3">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-navy-900">Visa Consultancy</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border-muted">
          <div className="space-y-3 max-w-2xl">
            <h1 className="font-serif text-4xl sm:text-5xl text-navy-900 tracking-tight leading-tight">
              Global Visa Consultancy &amp; Assistance
            </h1>
            <p className="text-slate-600 text-base sm:text-lg">
              Navigating complex visa regulations with absolute clarity. Over 10+ years of proven
              excellence in tourist, visit, and Umrah visas for Pakistani passport holders.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+923065602040"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3 rounded-full text-sm shadow-soft transition-all"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Call Visa Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Visa Selector & Detail Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        {/* Country Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 scrollbar-none mb-8">
          {VISA_SERVICES.map((v) => {
            const isSelected = selectedVisa.id === v.id;
            return (
              <button
                key={v.id}
                onClick={() => setSelectedVisa(v)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-serif text-sm transition-all whitespace-nowrap border ${
                  isSelected
                    ? "bg-navy-900 text-white border-navy-900 shadow-soft"
                    : "bg-white text-navy-900 hover:bg-ivory-200 border-border-muted"
                }`}
              >
                <span className="text-lg">{v.flag}</span>
                <span className="font-sans font-bold">{v.country}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Visa Detailed Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Requirements & Inclusions (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border-muted shadow-card space-y-6">
              {/* Header Box */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-ivory-200">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-600">
                    <span>{selectedVisa.flag}</span>
                    <span>{selectedVisa.visaType}</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-navy-900">
                    {selectedVisa.country} Visa Assistance
                  </h2>
                </div>

                <div className="bg-ivory-50 border border-border-muted px-4 py-2 rounded-2xl text-right self-start sm:self-auto">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block">
                    Consultancy Fee
                  </span>
                  <span className="font-serif text-lg font-bold text-gold-700">
                    Quote On Request
                  </span>
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-ivory-50 border border-border-muted flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-500 block">Processing Time</span>
                    <span className="font-bold text-navy-900 text-xs sm:text-sm">
                      {selectedVisa.processingTime}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-ivory-50 border border-border-muted flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-gold-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-500 block">Visa Validity</span>
                    <span className="font-bold text-navy-900 text-xs sm:text-sm">
                      {selectedVisa.validity}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-ivory-50 border border-border-muted flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-500 block">Entry Permitted</span>
                    <span className="font-bold text-navy-900 text-xs sm:text-sm">
                      {selectedVisa.entryType}
                    </span>
                  </div>
                </div>
              </div>

              {/* Document Requirements Checklist */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl text-navy-900">
                    Mandatory Documents Required
                  </h3>
                  <span className="text-xs text-slate-400">Pakistani Passport Applicants</span>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {selectedVisa.requirements.map((req, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-ivory-50 border border-border-muted/60 text-xs sm:text-sm text-charcoal-900"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What Bilal Travels Manages */}
              <div className="space-y-3 pt-4 border-t border-ivory-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Included in Our Professional Consultancy
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedVisa.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs font-medium text-navy-900"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fee Note Notice */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Fee Note:</strong> {selectedVisa.embassyFeeNote}. Exchange rates &amp;
                  embassy revisions are calculated at the time of file submission.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Free Visa Assessment Form (4 cols) */}
          <div className="lg:col-span-4">
            <div className="bg-navy-950 text-white rounded-3xl p-6 sm:p-8 border border-navy-800 shadow-hover sticky top-28 space-y-5">
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-gold-400 font-bold block">
                  Free Assessment
                </span>
                <h3 className="font-serif text-2xl text-white">Check Your Visa Eligibility</h3>
                <p className="text-slate-400 text-xs">
                  Fill in your details and our senior visa advisor will verify your profile within 2
                  business hours.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg text-white">Inquiry Received!</h4>
                  <p className="text-xs text-emerald-200">
                    Thank you, {formData.name}. Our visa officer is reviewing your profile and will
                    call you shortly at {formData.phone}.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-gold-400 underline hover:text-gold-300"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
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
                    className="w-full bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold py-3 rounded-full text-xs shadow-soft transition-all flex items-center justify-center gap-2 mt-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Request File Evaluation</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Visa Application Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        <div className="text-center space-y-2 mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Transparent Workflow
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy-900">
            How Our Visa Consultancy Works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Free Profile Assessment",
              desc: "Our consultant checks your passport validity, previous travel history, and bank statement requirements.",
            },
            {
              step: "02",
              title: "Document File Preparation",
              desc: "We build your file: compliant hotel bookings, flight itineraries, insurance policies, and cover letters.",
            },
            {
              step: "03",
              title: "Embassy / VFS Biometrics",
              desc: "We secure your appointment slot and brief you on any interview or document presentation guidelines.",
            },
            {
              step: "04",
              title: "Visa Delivery & Travel",
              desc: "Receive your approved visa / passport stamp and embark on your international journey with peace of mind.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-6 border border-border-muted shadow-soft space-y-3 relative group hover:border-gold-400 transition-all"
            >
              <span className="font-serif text-3xl font-bold text-gold-500/40 group-hover:text-gold-500 transition-colors">
                {item.step}
              </span>
              <h4 className="font-serif font-bold text-navy-900 text-lg">{item.title}</h4>
              <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
