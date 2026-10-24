"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users,
  Search,
  Plane,
  Calendar,
  MapPin,
  FileText,
  CheckCircle2,
  Filter,
  ShieldCheck,
  Eye,
  ExternalLink,
  Phone,
  Building,
  ArrowRight,
  X,
  Sparkles,
} from "lucide-react";
import Card3D from "@/components/ui/Card3D";

export interface TravellerRecord {
  id: string;
  name: string;
  gender: "male" | "female";
  image?: string;
  passportNumber: string;
  departureCity: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  flightDetails: string;
  address: string;
  tripCategory: string;
  status: "Completed" | "Traveling Now" | "Upcoming";
  notes?: string;
  visaImage?: string;
  visaType?: string;
  visaNumber?: string;
  visaExpiryDate?: string;
  createdAt?: string;
}

// Mask passport number for public web security
function maskPassport(passport: string): string {
  if (!passport) return "PK-•••••";
  const clean = passport.trim();
  if (clean.length <= 4) return `${clean.slice(0, 2)}••••`;
  return `${clean.slice(0, 4)}••••${clean.slice(-2)}`;
}

export default function TravellersPage() {
  const [travellers, setTravellers] = useState<TravellerRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  // Visa Lightbox Modal State
  const [selectedVisaModal, setSelectedVisaModal] = useState<TravellerRecord | null>(null);

  useEffect(() => {
    async function loadTravellers() {
      try {
        const res = await fetch("/api/travellers");
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          setTravellers(json.data);
        }
      } catch (err) {
        console.error("Failed to load travellers:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadTravellers();
  }, []);

  const categories = ["All", "Umrah", "International Tour", "Family Holiday", "Work Visa & Employment"];
  const statuses = ["All", "Traveling Now", "Upcoming", "Completed"];

  // Filtered List
  const filtered = travellers.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.departureCity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.flightDetails.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.visaType && item.visaType.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      selectedCategory === "All" || item.tripCategory === selectedCategory;

    const matchesStatus = selectedStatus === "All" || item.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="bg-[#FAF8F3] min-h-screen py-8 sm:py-14 overflow-hidden">
      {/* =========================================================================
          1. HERO HEADER WITH LIVE REGISTRY STATUS
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-12 sm:mb-16">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-600 mb-3">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-navy-950 font-bold">Our Travellers</span>
        </div>

        <div className="relative rounded-3xl bg-gradient-to-br from-navy-950 via-[#0F2036] to-navy-900 text-white p-8 sm:p-12 border border-gold-400/30 shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/15 border border-gold-400/40 text-gold-300 text-xs font-bold tracking-widest uppercase">
                <Users className="w-4 h-4 text-gold-400" />
                <span>Verified Client Travel Registry</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
                Our Valued{" "}
                <span className="text-gold-400">Travellers</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Authentic records of families, honeymooners, and Umrah pilgrims across Pakistan
                who traveled through Bilal Travels &amp; Tours with confirmed flights, verified
                hotel stays, and issued visas.
              </p>
            </div>

            {/* Live Stats Pill */}
            <div className="flex flex-wrap items-center gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
                <span className="font-serif text-3xl font-bold text-gold-400 block">
                  {travellers.length || "14k+"}
                </span>
                <span className="text-xs text-slate-300">Registered Journeys</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
                <span className="font-serif text-3xl font-bold text-emerald-400 block">100%</span>
                <span className="text-xs text-slate-300">Verified Flights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SEARCH & FILTER CONTROLS
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        <div className="bg-white p-5 rounded-3xl border border-border-muted shadow-card flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search traveller by name, origin city, destination, or flight..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border-muted text-xs focus:outline-none focus:border-gold-500 bg-ivory-50 text-navy-950"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3.5 py-2.5 rounded-xl border border-border-muted text-xs bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500 font-medium"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c === "All" ? "All Categories" : c}
                </option>
              ))}
            </select>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3.5 py-2.5 rounded-xl border border-border-muted text-xs bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500 font-medium"
            >
              {statuses.map((s) => (
                <option key={s} value={s}>
                  {s === "All" ? "All Statuses" : s}
                </option>
              ))}
            </select>
          </div>

          <div className="text-xs text-slate-500 font-mono text-right">
            Showing <strong className="text-navy-950">{filtered.length}</strong> verified travellers
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. TRAVELLERS SHOWCASE (3D TILT CARDS WITH GENDER MODESTY RULE)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        {isLoading ? (
          <div className="bg-white rounded-3xl p-16 text-center border border-border-muted shadow-card space-y-3">
            <div className="w-10 h-10 border-4 border-gold-400 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs text-slate-500">Loading verified traveller records...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center border border-border-muted shadow-card space-y-3">
            <Users className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="font-serif text-xl text-navy-950 font-bold">No Travellers Found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              No matching records for your current search criteria. Try clearing the search or
              filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 perspective-1000 items-stretch">
            {filtered.map((traveller) => {
              const isFemale = traveller.gender === "female";

              return (
                <Card3D
                  key={traveller.id}
                  maxTilt={8}
                  glareOpacity={0.2}
                  glareColor="gold"
                  className="bg-white rounded-3xl border border-border-muted hover:border-gold-400 shadow-card hover:shadow-[0_20px_50px_rgba(15,32,54,0.12)] transition-all duration-500 overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Ribbon & Photo Area */}
                    <div className="relative bg-gradient-to-br from-navy-950 via-[#10243C] to-navy-900 p-6 text-white flex items-center gap-5 border-b border-gold-400/20">
                      {/* Photo / Modest Avatar Placeholder */}
                      <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden border-2 border-gold-400/50 shadow-lg flex-shrink-0 bg-navy-900 flex items-center justify-center">
                        {isFemale ? (
                          /* LADIES MODEST PLACEHOLDER RULE: NEVER DISPLAY REAL PHOTO */
                          <div className="w-full h-full bg-gradient-to-b from-[#1C2C46] to-[#0A1728] flex flex-col items-center justify-center p-2 text-center relative overflow-hidden">
                            <div className="w-12 h-12 rounded-full bg-gold-400/20 border border-gold-400/40 flex items-center justify-center mb-1 text-2xl shadow-inner">
                              🧕
                            </div>
                            <span className="text-[9px] font-mono uppercase tracking-wider text-gold-300 font-bold block leading-tight">
                              Pilgrim
                            </span>
                            <span className="text-[8px] text-slate-300 font-light block">
                              Identity Protected
                            </span>
                          </div>
                        ) : traveller.image ? (
                          /* GENTS: DISPLAY REAL PHOTO */
                          <img
                            src={traveller.image}
                            alt={traveller.name}
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
                            <span className="text-3xl">👨</span>
                            <span className="text-[9px] text-gold-400 font-mono mt-1">Traveller</span>
                          </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Header Info */}
                      <div className="space-y-1.5 flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${
                              traveller.status === "Traveling Now"
                                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                                : traveller.status === "Upcoming"
                                ? "bg-blue-500/20 text-blue-300 border-blue-500/40"
                                : "bg-white/10 text-slate-300 border-white/20"
                            }`}
                          >
                            {traveller.status}
                          </span>
                        </div>

                        <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight truncate">
                          {traveller.name}
                        </h3>

                        <p className="text-xs text-gold-400 font-mono flex items-center gap-1">
                          <MapPin className="w-3 h-3 flex-shrink-0" />
                          <span>Origin: {traveller.departureCity}</span>
                        </p>

                        <div className="pt-1">
                          <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/10 text-[10px] font-mono text-slate-200 border border-white/10">
                            Passport: {maskPassport(traveller.passportNumber)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-4">
                      {/* Destination Header */}
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-slate-600 block">
                          Travel Destination
                        </span>
                        <h4 className="font-serif font-bold text-navy-950 text-base">
                          {traveller.destination}
                        </h4>
                      </div>

                      {/* Flight Details & Dates */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-ivory-50 border border-border-muted">
                          <span className="text-[10px] text-slate-500 font-mono uppercase block">
                            Flight Details
                          </span>
                          <span className="font-bold text-navy-950 text-[11px] block mt-0.5 truncate">
                            ✈️ {traveller.flightDetails}
                          </span>
                        </div>

                        <div className="p-3 rounded-xl bg-ivory-50 border border-border-muted">
                          <span className="text-[10px] text-slate-500 font-mono uppercase block">
                            Trip Category
                          </span>
                          <span className="font-bold text-navy-950 text-[11px] block mt-0.5">
                            {traveller.tripCategory}
                          </span>
                        </div>
                      </div>

                      {/* Travel & Return Dates */}
                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px]">
                        <div>
                          <span className="text-slate-500 block text-[10px]">Departure Date:</span>
                          <strong className="text-navy-950 font-mono">{traveller.departureDate}</strong>
                        </div>
                        {traveller.returnDate && (
                          <div className="text-right">
                            <span className="text-slate-500 block text-[10px]">Return Date:</span>
                            <strong className="text-navy-950 font-mono">{traveller.returnDate}</strong>
                          </div>
                        )}
                      </div>

                      {/* Pakistan Address */}
                      {traveller.address && (
                        <div className="text-[11px] text-slate-600 flex items-start gap-1.5 pt-1">
                          <Building className="w-3.5 h-3.5 text-gold-600 mt-0.5 flex-shrink-0" />
                          <span className="truncate">Home: {traveller.address}</span>
                        </div>
                      )}

                      {/* Verified Visa Badge & View Action */}
                      {traveller.visaImage && (
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 border border-emerald-200/90 text-[11px]">
                          <div className="flex items-center gap-1.5 text-emerald-900 font-semibold truncate">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span className="truncate">{traveller.visaType || "Official Visa Copy"}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setSelectedVisaModal(traveller)}
                            className="px-2.5 py-1 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[10px] flex items-center gap-1 shadow-xs transition-colors flex-shrink-0 cursor-pointer"
                          >
                            <Eye className="w-3 h-3" />
                            <span>View Visa</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Sub-Footer */}
                  <div className="px-6 py-3.5 bg-ivory-50 border-t border-border-muted flex items-center justify-between text-xs">
                    <span className="text-emerald-700 font-semibold flex items-center gap-1 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Client File</span>
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      Bilal Travels Lahore
                    </span>
                  </div>
                </Card3D>
              );
            })}
          </div>
        )}
      </section>

      {/* =========================================================================
          4. FRONTEND VISA DOCUMENT PREVIEW LIGHTBOX MODAL
      ========================================================================= */}
      {selectedVisaModal && (
        <div className="fixed inset-0 z-50 bg-navy-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-emerald-400/40 space-y-4 relative">
            <div className="flex items-center justify-between pb-3 border-b border-border-muted">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block mb-1 border border-emerald-300">
                  {selectedVisaModal.visaType || "Verified Travel Visa"}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-950">
                  {selectedVisaModal.name}&apos;s Official Visa Copy
                </h3>
                <p className="text-xs font-mono text-slate-500">
                  Verified by Bilal Travels &amp; Tours • {selectedVisaModal.destination}
                </p>
              </div>
              <button
                onClick={() => setSelectedVisaModal(null)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-navy-950 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Visa Document Image Container */}
            <div className="max-h-[65vh] overflow-auto rounded-2xl border border-border-muted bg-slate-900 flex items-center justify-center p-2 shadow-inner">
              <img
                src={selectedVisaModal.visaImage}
                alt={`${selectedVisaModal.name} Visa`}
                className="max-w-full max-h-[60vh] object-contain rounded-xl"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <span className="text-xs text-slate-500">
                Official document processed through Lahore Consulate / E-Visa Portal.
              </span>
              <button
                onClick={() => setSelectedVisaModal(null)}
                className="w-full sm:w-auto px-5 py-2 rounded-xl bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 font-bold text-xs transition-colors cursor-pointer"
              >
                Close Document
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          5. ADMIN DISPATCH CTA STRIP
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        <div className="rounded-3xl bg-gradient-to-r from-navy-950 via-[#0F2036] to-navy-900 text-white p-8 sm:p-12 border border-gold-400/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-gold-300 text-xs font-bold uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              <span>Have an Upcoming Tour or Umrah Departure?</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Want Your Journey Handled with 100% Reliability?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Connect directly with our Lahore Head Office. We verify all documents, secure confirmed
              flight seats, and issue official e-visas with zero delay.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href="https://wa.me/923065602040?text=Assalam-o-Alaikum%20Bilal%20Travels,%20I%20want%20to%20plan%20my%20next%20journey."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold py-3.5 px-6 rounded-2xl text-xs text-center transition-all shadow-card flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Visa &amp; Tour Desk</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-6 rounded-2xl text-xs text-center border border-white/20 transition-colors"
            >
              <span>Visit Lahore Branch</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
