"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  Search,
  CheckCircle2,
  Clock,
  FileText,
  Download,
  ShieldCheck,
  Calendar,
  MapPin,
  Plane,
  Phone,
  AlertCircle,
} from "lucide-react";

export default function MyJourneyPage() {
  const [bookingRef, setBookingRef] = useState("BT-89241");
  const [hasSearched, setHasSearched] = useState(true);

  // Mock Journey details for the demo booking ref
  const journey = {
    ref: "BT-89241",
    travellerName: "Dr. Tariq Mehmood & Family",
    tripTitle: "7 Days Classic Istanbul & Cappadocia Explorer",
    destination: "Istanbul & Cappadocia, Türkiye",
    departureDate: "15 November 2026",
    returnDate: "22 November 2026",
    airline: "Turkish Airlines (TK-715 Direct)",
    hotel: "Radisson Blu Hotel Istanbul Pera (4-Star)",
    visaStatus: "Approved & Stamped",
    steps: [
      {
        id: 1,
        title: "Application & Deposit Received",
        date: "12 Oct 2026",
        status: "completed",
        desc: "Booking record initialized and assigned to Senior Travel Consultant Hamza.",
      },
      {
        id: 2,
        title: "Document Verification & File Creation",
        date: "16 Oct 2026",
        status: "completed",
        desc: "Bank statements, photographs, and passport validity verified for Anatolia Centre submission.",
      },
      {
        id: 3,
        title: "Türkiye Visa Approved",
        date: "20 Oct 2026",
        status: "completed",
        desc: "Official Turkish sticker visa issued and verified with Anatolia tracking.",
      },
      {
        id: 4,
        title: "Flight Tickets & Hotel Vouchers",
        date: "In Progress (Estimated 24 Oct)",
        status: "active",
        desc: "Issuing Turkish Airlines PNR and luxury cave hotel confirmation vouchers.",
      },
      {
        id: 5,
        title: "Ready for Departure & VIP Airport Pickup",
        date: "Pending",
        status: "pending",
        desc: "Final briefing pack and Istanbul airport ground coordinator contact details will be shared.",
      },
    ],
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
  };

  return (
    <div className="bg-ivory-100 min-h-screen py-12">
      {/* Top Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-600 mb-3">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-navy-900">Track My Journey</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border-muted">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-globe-50 border border-globe-200 text-globe-700 text-xs font-bold tracking-wider uppercase">
              <span>✈️ Real-Time Traveller Portal</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-navy-900 tracking-tight leading-tight">
              Track Your Travel Milestones
            </h1>
            <p className="text-slate-600 text-base sm:text-lg">
              Enter your booking reference or passport number to monitor live visa status, hotel
              confirmations, and download verified journey vouchers.
            </p>
          </div>
        </div>

        {/* Search Reference Form */}
        <div className="mt-8 bg-white p-6 rounded-3xl border border-border-muted shadow-soft max-w-2xl">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="Enter Booking Ref (e.g. BT-89241)"
                value={bookingRef}
                onChange={(e) => setBookingRef(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-ivory-50 border border-border-muted text-navy-900 font-mono font-bold text-sm focus:outline-none focus:border-gold-500 uppercase"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white font-bold px-8 py-3.5 rounded-2xl text-xs sm:text-sm transition-all shadow-soft"
            >
              Track Status
            </button>
          </form>
          <p className="text-[11px] text-slate-400 mt-2">
            💡 Demo Reference active: <strong>BT-89241</strong> (Try tracking it above!)
          </p>
        </div>
      </section>

      {/* Main Tracking Details */}
      {hasSearched && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20 space-y-8 animate-in fade-in duration-300">
          {/* Trip Summary Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-border-muted shadow-card">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-ivory-200">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold bg-navy-900 text-gold-400 px-3 py-1 rounded-full">
                    {journey.ref}
                  </span>
                  <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
                    ✓ Visa {journey.visaStatus}
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-navy-900 mt-2">
                  {journey.tripTitle}
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm">
                  Primary Passenger: <strong>{journey.travellerName}</strong>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:+923000000000"
                  className="inline-flex items-center gap-2 border border-border-muted hover:border-gold-400 text-navy-900 px-4 py-2.5 rounded-full text-xs font-semibold transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-600" />
                  <span>Call Travel Officer</span>
                </a>
              </div>
            </div>

            {/* Quick Trip Metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
              <div className="p-4 rounded-2xl bg-ivory-50 border border-border-muted/60">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                  Destination
                </span>
                <span className="font-serif font-bold text-navy-900 text-sm mt-1 block">
                  {journey.destination}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-ivory-50 border border-border-muted/60">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                  Travel Dates
                </span>
                <span className="font-serif font-bold text-navy-900 text-sm mt-1 block">
                  {journey.departureDate} – {journey.returnDate}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-ivory-50 border border-border-muted/60">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                  Confirmed Airline
                </span>
                <span className="font-serif font-bold text-navy-900 text-sm mt-1 block">
                  {journey.airline}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-ivory-50 border border-border-muted/60">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                  Hotel Accommodation
                </span>
                <span className="font-serif font-bold text-navy-900 text-sm mt-1 block">
                  {journey.hotel}
                </span>
              </div>
            </div>
          </div>

          {/* Sequential Milestone Stepper (Visual Progress) */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-border-muted shadow-card space-y-6">
            <h3 className="font-serif text-2xl text-navy-900">Live Journey Milestone Stepper</h3>

            <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3.5 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-border-muted">
              {journey.steps.map((step) => {
                const isCompleted = step.status === "completed";
                const isActive = step.status === "active";

                return (
                  <div key={step.id} className="relative flex items-start gap-4 sm:gap-6 group">
                    {/* Step Icon Indicator */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 -ml-[30px] sm:-ml-[34px] z-10 ${
                        isCompleted
                          ? "bg-emerald-600 text-white shadow-sm ring-4 ring-white"
                          : isActive
                          ? "bg-gold-500 text-navy-950 ring-4 ring-gold-100 animate-pulse"
                          : "bg-ivory-200 text-slate-400 border border-border-muted"
                      }`}
                    >
                      {isCompleted ? "✓" : step.id}
                    </div>

                    {/* Step Content */}
                    <div className="space-y-1 bg-ivory-50/70 p-4 rounded-2xl border border-border-muted/60 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4
                          className={`font-serif font-bold text-base ${
                            isCompleted || isActive ? "text-navy-900" : "text-slate-400"
                          }`}
                        >
                          {step.title}
                        </h4>
                        <span className="text-xs text-slate-500 font-medium">{step.date}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Downloadable Verified Document Vault */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-border-muted shadow-card space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-2xl text-navy-900">Your Document Vault</h3>
                <p className="text-slate-500 text-xs sm:text-sm">
                  Verified electronic travel documents associated with this booking.
                </p>
              </div>
              <ShieldCheck className="w-8 h-8 text-emerald-600" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-ivory-50 border border-border-muted flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-gold-600" />
                  <div>
                    <h5 className="font-bold text-xs text-navy-900">Approved Visa Copy</h5>
                    <span className="text-[10px] text-slate-400">PDF • Verified</span>
                  </div>
                </div>
                <button
                  onClick={() => alert("Approved Visa PDF download initialized for demo booking.")}
                  className="p-2 rounded-xl bg-white hover:bg-gold-500 hover:text-navy-950 text-navy-900 border border-border-muted transition-colors"
                  title="Download"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-ivory-50 border border-border-muted flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-gold-600" />
                  <div>
                    <h5 className="font-bold text-xs text-navy-900">Hotel Voucher</h5>
                    <span className="text-[10px] text-slate-400">PDF • Confirmed</span>
                  </div>
                </div>
                <button
                  onClick={() => alert("Hotel Voucher PDF download initialized.")}
                  className="p-2 rounded-xl bg-white hover:bg-gold-500 hover:text-navy-950 text-navy-900 border border-border-muted transition-colors"
                  title="Download"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-ivory-50 border border-border-muted flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-gold-600" />
                  <div>
                    <h5 className="font-bold text-xs text-navy-900">Day-by-Day Itinerary</h5>
                    <span className="text-[10px] text-slate-400">PDF • Official Guide</span>
                  </div>
                </div>
                <button
                  onClick={() => alert("Tour Itinerary PDF download initialized.")}
                  className="p-2 rounded-xl bg-white hover:bg-gold-500 hover:text-navy-950 text-navy-900 border border-border-muted transition-colors"
                  title="Download"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
