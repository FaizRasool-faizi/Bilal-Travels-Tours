"use client";

import React, { useState, useMemo } from "react";
import {
  FileText,
  Search,
  Clock,
  Calendar,
  ShieldCheck,
  Zap,
  Users,
  Headphones,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Briefcase,
  Laptop,
  Plane,
  Building,
  LayoutGrid,
  Table as TableIcon,
  Phone,
  Compass,
  Sparkles,
  X,
  Info,
  ExternalLink,
} from "lucide-react";
import { FLYER_VISA_COUNTRIES, FlyerVisaCountry } from "@/lib/data";

type VisaCategoryFilter = "all" | "visit" | "work" | "freelance" | "business";
type ViewMode = "cards" | "table";

export default function VisaHubSection() {
  const [selectedCategory, setSelectedCategory] = useState<VisaCategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("cards");
  const [activeModalCountry, setActiveModalCountry] = useState<FlyerVisaCountry | null>(null);

  const categoryCounts = useMemo(() => {
    return {
      all: FLYER_VISA_COUNTRIES.length,
      visit: FLYER_VISA_COUNTRIES.filter((c) => c.categories.includes("visit")).length,
      work: FLYER_VISA_COUNTRIES.filter((c) => c.categories.includes("work")).length,
      freelance: FLYER_VISA_COUNTRIES.filter((c) => c.categories.includes("freelance")).length,
      business: FLYER_VISA_COUNTRIES.filter((c) => c.categories.includes("business")).length,
    };
  }, []);

  const filteredCountries = useMemo(() => {
    return FLYER_VISA_COUNTRIES.filter((country) => {
      const matchesSearch =
        country.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.options.some((opt) =>
          opt.duration.toLowerCase().includes(searchQuery.toLowerCase()) ||
          opt.type.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "all" || country.categories.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section
      id="visa-hub"
      className="py-16 sm:py-24 bg-gradient-to-b from-ivory-50 via-white to-ivory-100 border-b border-border-muted relative overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-gradient-to-b from-gold-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        {/* =========================================================================
            1. POSTER SIGNATURE HERO HEADER ("Explore the World With Us")
        ========================================================================= */}
        <div className="relative rounded-3xl bg-gradient-to-br from-navy-950 via-[#0d233e] to-navy-900 text-white p-8 sm:p-12 border border-gold-500/20 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_50%)] pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content Column */}
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-300 text-xs font-bold tracking-widest uppercase">
                <Compass className="w-3.5 h-3.5 text-gold-400" />
                <span>Bilal Travels &amp; Tours • International Visa Desk</span>
              </div>

              <div className="space-y-2">
                <p className="font-serif italic text-gold-400 text-xl sm:text-2xl drop-shadow-sm font-normal">
                  Explore the World With Us
                </p>
                <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-extrabold tracking-tight leading-tight">
                  VISIT VISA CATALOG
                </h2>
                <p className="text-sm sm:text-lg text-ivory-200 font-medium tracking-wide">
                  YOUR DREAM DESTINATION IS JUST A VISA AWAY!
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <div className="inline-flex items-center gap-2 bg-gold-500 text-navy-950 font-black text-xs uppercase px-4 py-2 rounded-xl shadow-md border-2 border-gold-300 tracking-wider">
                  <CheckCircle2 className="w-4 h-4 fill-navy-950 text-gold-400" />
                  <span>Trusted • Professional • Hassle Free</span>
                </div>
                <span className="text-xs text-slate-300 font-medium">
                  Verified Embassy Submission &amp; Complete Dossier Preparation
                </span>
              </div>
            </div>

            {/* Right: 3 Polaroid Memory Cards */}
            <div className="relative flex items-center justify-center pt-4 lg:pt-0">
              <div className="relative w-72 sm:w-80 h-52">
                {/* Polaroid 1: Dubai */}
                <div className="absolute left-0 bottom-2 w-36 sm:w-40 bg-white p-2 pb-5 rounded-xl shadow-2xl -rotate-6 transform hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300 border border-slate-200">
                  <div className="relative h-24 sm:h-28 rounded-lg overflow-hidden bg-slate-900">
                    <img
                      src="/images/dest-dubai.jpg"
                      alt="Dubai Skyline"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 left-1.5 text-[9px] font-bold text-white bg-navy-950/80 px-1.5 py-0.5 rounded">
                      🇦🇪 Dubai
                    </span>
                  </div>
                  <p className="text-[10px] text-navy-950 font-bold text-center mt-1.5">
                    Burj Khalifa
                  </p>
                </div>

                {/* Polaroid 2: Makkah */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-36 sm:w-40 bg-white p-2 pb-5 rounded-xl shadow-2xl z-10 transform hover:scale-110 hover:z-30 transition-all duration-300 border border-gold-300">
                  <div className="relative h-24 sm:h-28 rounded-lg overflow-hidden bg-slate-900">
                    <img
                      src="/images/Mecca.jpeg"
                      alt="Makkah Holy Kaaba"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 left-1.5 text-[9px] font-bold text-white bg-navy-950/80 px-1.5 py-0.5 rounded">
                      🇸🇦 Makkah
                    </span>
                  </div>
                  <p className="text-[10px] text-navy-950 font-bold text-center mt-1.5">
                    Holy Kaaba
                  </p>
                </div>

                {/* Polaroid 3: Malaysia / Tropical */}
                <div className="absolute right-0 bottom-2 w-36 sm:w-40 bg-white p-2 pb-5 rounded-xl shadow-2xl rotate-6 transform hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300 border border-slate-200">
                  <div className="relative h-24 sm:h-28 rounded-lg overflow-hidden bg-slate-900">
                    <img
                      src="/images/seeview_malysia.jpeg"
                      alt="Malaysia Langkawi"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 left-1.5 text-[9px] font-bold text-white bg-navy-950/80 px-1.5 py-0.5 rounded">
                      🇲🇾 Malaysia
                    </span>
                  </div>
                  <p className="text-[10px] text-navy-950 font-bold text-center mt-1.5">
                    Twin Towers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. EXECUTIVE FILTER HUB (CLEAN TIERED ARCHITECTURE)
        ========================================================================= */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-sm space-y-4">
          {/* Top Tier: Clean Segmented Category Tabs with Count Chips */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === "all"
                  ? "bg-navy-950 text-white shadow-md ring-2 ring-navy-950/20"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80"
              }`}
            >
              <span>All Countries</span>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                  selectedCategory === "all"
                    ? "bg-gold-500 text-navy-950 font-black"
                    : "bg-slate-200 text-slate-700 font-bold"
                }`}
              >
                {categoryCounts.all}
              </span>
            </button>

            <button
              onClick={() => setSelectedCategory("visit")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === "visit"
                  ? "bg-navy-950 text-white shadow-md ring-2 ring-navy-950/20"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80"
              }`}
            >
              <Plane className="w-3.5 h-3.5 text-gold-500" />
              <span>Visit &amp; Tourist</span>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                  selectedCategory === "visit"
                    ? "bg-gold-500 text-navy-950 font-black"
                    : "bg-slate-200 text-slate-700 font-bold"
                }`}
              >
                {categoryCounts.visit}
              </span>
            </button>

            <button
              onClick={() => setSelectedCategory("work")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === "work"
                  ? "bg-navy-950 text-white shadow-md ring-2 ring-navy-950/20"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
              <span>Work &amp; Employment</span>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                  selectedCategory === "work"
                    ? "bg-gold-500 text-navy-950 font-black"
                    : "bg-slate-200 text-slate-700 font-bold"
                }`}
              >
                {categoryCounts.work}
              </span>
            </button>

            <button
              onClick={() => setSelectedCategory("freelance")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === "freelance"
                  ? "bg-navy-950 text-white shadow-md ring-2 ring-navy-950/20"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80"
              }`}
            >
              <Laptop className="w-3.5 h-3.5 text-blue-600" />
              <span>Freelance &amp; Nomad</span>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                  selectedCategory === "freelance"
                    ? "bg-gold-500 text-navy-950 font-black"
                    : "bg-slate-200 text-slate-700 font-bold"
                }`}
              >
                {categoryCounts.freelance}
              </span>
            </button>

            <button
              onClick={() => setSelectedCategory("business")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === "business"
                  ? "bg-navy-950 text-white shadow-md ring-2 ring-navy-950/20"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80"
              }`}
            >
              <Building className="w-3.5 h-3.5 text-amber-600" />
              <span>Business / Multiple</span>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                  selectedCategory === "business"
                    ? "bg-gold-500 text-navy-950 font-black"
                    : "bg-slate-200 text-slate-700 font-bold"
                }`}
              >
                {categoryCounts.business}
              </span>
            </button>
          </div>

          {/* Bottom Toolbar: Live Filter Status + Search + View Switcher */}
          <div className="pt-4 border-t border-slate-200/80 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                Showing <strong className="text-navy-950 font-bold">{filteredCountries.length}</strong> of {FLYER_VISA_COUNTRIES.length} Official Country Portfolios
              </span>
              {(selectedCategory !== "all" || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="ml-2 text-gold-700 hover:text-navy-950 underline font-bold text-[11px]"
                >
                  Reset Filters
                </button>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search country, visa type..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-8 py-2 text-xs text-navy-950 placeholder-slate-400 focus:outline-none focus:border-gold-500 focus:bg-white transition-all shadow-xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-navy-950"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 w-full sm:w-auto justify-center">
                <button
                  onClick={() => setViewMode("cards")}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    viewMode === "cards"
                      ? "bg-navy-950 text-white shadow-xs"
                      : "text-slate-600 hover:text-navy-950"
                  }`}
                  title="Grid Cards"
                >
                  <LayoutGrid className="w-3.5 h-3.5 text-gold-400" />
                  <span>Cards</span>
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    viewMode === "table"
                      ? "bg-navy-950 text-white shadow-xs"
                      : "text-slate-600 hover:text-navy-950"
                  }`}
                  title="Official Flyer Matrix Table format"
                >
                  <TableIcon className="w-3.5 h-3.5 text-gold-400" />
                  <span>Table Matrix</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            3. CARDS VIEW: 100% UNIFORM, ELEGANT & MODERN COUNTRY CARDS
        ========================================================================= */}
        {viewMode === "cards" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
              {filteredCountries.map((item) => {
                // Determine visa type tags (e.g. E-Visa vs Sticker)
                const hasEVisa = item.options.some((o) => o.type === "E.Visa");
                const hasSticker = item.options.some((o) => o.type === "Sticker Visa");
                const visaBadge =
                  hasEVisa && hasSticker
                    ? "E-VISA & STICKER"
                    : hasEVisa
                    ? "E-VISA"
                    : "STICKER VISA";

                // Fastest processing time
                const fastestTime = item.options[0]?.timeRequired || "3-7 Work. Days";

                // Unique duration strings for badges
                const uniqueDurations = Array.from(
                  new Set(item.options.map((o) => o.duration))
                );

                return (
                  <div
                    key={item.slug}
                    className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-gold-400 hover:shadow-[0_16px_40px_rgba(16,45,79,0.12)] transition-all duration-300 overflow-hidden flex flex-col justify-between"
                  >
                    {/* Top Image Banner */}
                    <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
                      <div
                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500 ease-out"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/45 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                        <div className="inline-flex items-center gap-1.5 bg-navy-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white text-xs font-bold shadow-sm">
                          <img
                            src={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png`}
                            alt={item.country}
                            className="w-4 h-3 object-cover rounded-xs"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = "none";
                            }}
                          />
                          <span>{item.code}</span>
                        </div>

                        <span
                          className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm ${
                            hasEVisa
                              ? "bg-emerald-500 text-white"
                              : "bg-gold-500 text-navy-950"
                          }`}
                        >
                          {visaBadge}
                        </span>
                      </div>

                      {/* Destination Name & Tagline */}
                      <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 space-y-0.5">
                        <h3 className="font-serif font-bold text-white text-2xl group-hover:text-gold-300 transition-colors drop-shadow-sm">
                          {item.country}
                        </h3>
                        <p className="text-xs text-ivory-200/90 font-normal line-clamp-1">
                          {item.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Uniform Card Body */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      {/* Specs Stack */}
                      <div className="space-y-3">
                        {/* Spec 1: Processing Speed */}
                        <div className="flex items-center justify-between text-xs pb-2 border-b border-ivory-200">
                          <span className="text-slate-500 font-medium flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                            <span>Processing Time</span>
                          </span>
                          <span className="font-bold text-navy-900 bg-ivory-100 px-2.5 py-0.5 rounded-md">
                            {fastestTime}
                          </span>
                        </div>

                        {/* Spec 2: Available Stays */}
                        <div className="space-y-1.5">
                          <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                            <span>Available Stays:</span>
                          </span>
                          <div className="flex flex-wrap items-center gap-1.5">
                            {uniqueDurations.slice(0, 3).map((dur, i) => (
                              <span
                                key={i}
                                className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/60"
                              >
                                {dur}
                              </span>
                            ))}
                            {uniqueDurations.length > 3 && (
                              <span className="text-[10px] font-bold text-gold-700 bg-gold-50 px-2 py-0.5 rounded-md border border-gold-200">
                                +{uniqueDurations.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Spec 3: Category Coverage */}
                        <div className="space-y-1.5">
                          <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5">
                            <Briefcase className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                            <span>Categories Supported:</span>
                          </span>
                          <div className="flex flex-wrap items-center gap-1.5">
                            {item.categories.map((cat) => (
                              <span
                                key={cat}
                                className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-navy-950/5 text-navy-900 border border-navy-950/10"
                              >
                                {cat}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Assurance Footer Note */}
                      <div className="pt-2.5 border-t border-ivory-200 flex items-center justify-between text-[11px]">
                        <span className="text-emerald-700 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Embassy Dossier Audit</span>
                        </span>
                        <span className="text-slate-400 font-mono text-[10px]">
                          {item.options.length} {item.options.length === 1 ? "Option" : "Options"}
                        </span>
                      </div>
                    </div>

                    {/* Uniform Action Buttons */}
                    <div className="p-4 pt-0 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setActiveModalCountry(item)}
                        className="py-2.5 px-3 rounded-xl bg-ivory-100 hover:bg-ivory-200 text-navy-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Info className="w-3.5 h-3.5 text-gold-600" />
                        <span>All Options</span>
                      </button>

                      <a
                        href={`https://wa.me/923065602040?text=${encodeURIComponent(
                          `Assalam-o-Alaikum Bilal Travels, I would like to inquire about ${item.country} Visa requirements and filing assistance.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-xl bg-navy-950 hover:bg-emerald-600 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Inquire</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredCountries.length === 0 && (
              <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300 space-y-3">
                <Search className="w-10 h-10 text-slate-400 mx-auto" />
                <h4 className="font-serif font-bold text-navy-900 text-lg">
                  No destinations matched your search
                </h4>
                <p className="text-xs text-slate-500">
                  Try searching for a different country name or reset your category filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="mt-2 text-xs font-bold text-gold-600 hover:underline"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            4. OFFICIAL FLYER TABLE VIEW (EXACT MATRIX FROM USER POSTER)
        ========================================================================= */}
        {viewMode === "table" && (
          <div className="bg-white rounded-3xl border border-gold-300/60 shadow-xl overflow-hidden">
            <div className="p-4 sm:p-6 bg-gradient-to-r from-navy-950 via-[#102D4F] to-navy-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <span className="text-gold-400 text-sm">📋</span>
                  <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">
                    Official Visa Matrix
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-bold">
                  Complete Country Visa Breakdown
                </h3>
              </div>

              <div className="flex items-center gap-3 text-xs text-ivory-200">
                <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-400/30 font-bold">
                  {filteredCountries.length} Countries Listed
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-navy-950 uppercase tracking-wider font-extrabold border-b border-slate-200">
                    <th className="py-3 px-4">#</th>
                    <th className="py-3 px-4">Country</th>
                    <th className="py-3 px-4">Categories</th>
                    <th className="py-3 px-4">Visa Type</th>
                    <th className="py-3 px-4">Available Durations</th>
                    <th className="py-3 px-4">Processing Time</th>
                    <th className="py-3 px-4 text-right">Inquiry</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {filteredCountries.map((country) => (
                    <tr
                      key={country.slug}
                      className="hover:bg-gold-50/40 transition-colors group cursor-pointer"
                      onClick={() => setActiveModalCountry(country)}
                    >
                      <td className="py-3 px-4 font-mono font-bold text-slate-400">
                        {country.serialNo < 10 ? `0${country.serialNo}` : country.serialNo}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2 font-bold text-navy-950 text-sm">
                          <span className="text-base">{country.flag}</span>
                          <span>{country.country}</span>
                        </div>
                        <span className="text-[11px] text-slate-400 block">{country.tagline}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1">
                          {country.categories.map((c) => (
                            <span
                              key={c}
                              className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="space-y-1">
                          {Array.from(new Set(country.options.map((o) => o.type))).map((t) => (
                            <span
                              key={t}
                              className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mr-1 ${
                                t === "E.Visa"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="space-y-1">
                          {country.options.map((opt, i) => (
                            <div key={i} className="text-xs font-medium text-navy-900">
                              • {opt.duration}
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="space-y-1 text-slate-600">
                          {country.options.map((opt, i) => (
                            <div key={i} className="text-[11px]">
                              {opt.timeRequired}
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <a
                          href={`https://wa.me/923065602040?text=${encodeURIComponent(
                            `Assalam-o-Alaikum Bilal Travels, I want to inquire about ${country.country} Visa.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-navy-950 hover:bg-emerald-600 text-white font-bold text-xs transition-colors shadow-xs"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                          <span>WhatsApp</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* =========================================================================
          5. INTERACTIVE COUNTRY DETAIL MODAL (FULL FLYER BREAKDOWN)
      ========================================================================= */}
      {activeModalCountry && (
        <div className="fixed inset-0 z-50 bg-navy-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-ivory-200">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{activeModalCountry.flag}</span>
                  <span className="text-xs font-mono font-bold text-gold-600 uppercase tracking-widest">
                    {activeModalCountry.code} • S.NO #{activeModalCountry.serialNo}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
                  {activeModalCountry.country}
                </h3>
                <p className="text-xs text-slate-500">{activeModalCountry.tagline}</p>
              </div>

              <button
                onClick={() => setActiveModalCountry(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Options List */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500">
                Official Visa Categories &amp; Durations ({activeModalCountry.options.length} Available)
              </h4>

              <div className="space-y-2.5">
                {activeModalCountry.options.map((opt, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-ivory-50 border border-slate-200 flex items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-navy-950 text-sm">{opt.duration}</span>
                        <span
                          className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            opt.type === "E.Visa"
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {opt.type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">
                        Category: <strong className="capitalize text-slate-700">{opt.category}</strong>
                      </p>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <span className="text-[10px] text-slate-400 block font-medium">Processing Time</span>
                      <span className="text-xs font-bold text-navy-900 bg-white px-2 py-0.5 rounded border border-slate-200">
                        {opt.timeRequired}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Document Guidance Checklist */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-1.5 font-bold text-navy-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>What We Provide For {activeModalCountry.country}:</span>
              </div>
              <ul className="space-y-1 pl-5 list-disc text-[11px] text-slate-600">
                <li>Complete visa application form evaluation &amp; dossier filing</li>
                <li>Verifiable hotel booking vouchers &amp; confirmed flight reservation</li>
                <li>Embassy fee guidance &amp; direct portal submission tracking</li>
              </ul>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`https://wa.me/923065602040?text=${encodeURIComponent(
                  `Assalam-o-Alaikum Bilal Travels, I want to apply for ${activeModalCountry.country} Visa (${activeModalCountry.options
                    .map((o) => o.duration)
                    .join(", ")}). Please share requirements and quotation.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </a>

              <button
                onClick={() => setActiveModalCountry(null)}
                className="w-full sm:w-auto py-3 px-5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
