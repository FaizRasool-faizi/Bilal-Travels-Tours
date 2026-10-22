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
} from "lucide-react";
import { FLYER_VISA_COUNTRIES, FlyerVisaCountry } from "@/lib/data";

type VisaCategoryFilter = "all" | "visit" | "work" | "freelance" | "business";
type ViewMode = "cards" | "table";

export default function VisaHubSection() {
  const [selectedCategory, setSelectedCategory] = useState<VisaCategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("cards");

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

  // Separate multi-option (>= 3 options) and compact (<= 2 options) for balanced row layouts
  const majorHubCountries = useMemo(() => {
    return filteredCountries.filter((c) => c.options.length >= 3);
  }, [filteredCountries]);

  const expressCountries = useMemo(() => {
    return filteredCountries.filter((c) => c.options.length < 3);
  }, [filteredCountries]);

  const renderCountryCard = (item: FlyerVisaCountry, isCompact = false) => {
    return (
      <div
        key={item.slug}
        className="group relative bg-white rounded-3xl border border-slate-200/80 hover:border-gold-400 hover:shadow-[0_20px_50px_rgba(16,45,79,0.12)] transition-all duration-500 overflow-hidden flex flex-col justify-between h-full"
      >
        {/* -------------------------------------------------------------
            TOP DESTINATION PHOTO BANNER WITH SCENIC BACKGROUND
        ------------------------------------------------------------- */}
        <div className="relative h-44 sm:h-48 w-full overflow-hidden flex-shrink-0">
          {/* Scenic destination image */}
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-out"
            style={{ backgroundImage: `url('${item.image}')` }}
          />

          {/* Gradient overlay for perfect legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/20" />

          {/* Top Floating Bar: Country Code with real flag & S.No. from Flyer */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <div className="inline-flex items-center gap-2 bg-navy-950/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-md">
              {/* Flag image using flagcdn with fallback to emoji */}
              <img
                src={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png`}
                alt={item.country}
                className="w-5 h-3.5 object-cover rounded shadow-xs"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <span className="text-xs font-black text-white tracking-wider">
                {item.code}
              </span>
            </div>

            <div className="inline-flex items-center gap-1 bg-gold-500 text-navy-950 font-mono text-xs font-black px-2.5 py-1 rounded-full shadow-md border border-gold-300">
              <span>#{item.serialNo < 10 ? `0${item.serialNo}` : item.serialNo}</span>
            </div>
          </div>

          {/* Bottom Header: Country Name & Tagline */}
          <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
            <h3 className="font-serif font-black text-white text-2xl drop-shadow-md group-hover:text-gold-300 transition-colors">
              {item.country}
            </h3>
            <p className="text-xs text-ivory-200/90 font-normal line-clamp-1 drop-shadow-sm">
              {item.tagline}
            </p>

            {/* Category pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {item.categories.map((cat) => (
                <span
                  key={cat}
                  className="text-[9px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-white border border-white/10"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
            OPTIONS BODY (FROM FLYER: TIME REQUIRED, DURATION, TYPE)
        ------------------------------------------------------------- */}
        <div className="p-4 sm:p-5 space-y-2.5 flex-1 bg-gradient-to-b from-white to-ivory-50/50 flex flex-col justify-between">
          <div className="space-y-2.5">
            {item.options.map((opt, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl bg-ivory-100/70 hover:bg-gold-50/60 border border-border-muted/70 hover:border-gold-300/60 transition-all space-y-1.5 shadow-xs"
              >
                {/* Duration & Visa Type Badge */}
                <div className="flex items-center justify-between text-xs font-bold text-navy-950">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                    <span className="line-clamp-1">{opt.duration}</span>
                  </span>

                  <span
                    className={`text-[9px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider flex-shrink-0 ${
                      opt.type === "E.Visa"
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                        : "bg-blue-100 text-blue-800 border border-blue-300"
                    }`}
                  >
                    {opt.type}
                  </span>
                </div>

                {/* Processing Time & Category */}
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-200/60">
                  <span className="flex items-center gap-1 font-medium text-slate-600">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>Processing: {opt.timeRequired}</span>
                  </span>
                  <span className="font-semibold text-gold-700 capitalize text-[10px]">
                    {opt.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* If compact card, provide quick assurance perks so the card looks rich and complete */}
          {isCompact && (
            <div className="mt-3 p-3 rounded-2xl bg-emerald-50/50 border border-emerald-200/60 text-[11px] text-emerald-950 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Fast-Track Embassy Submission</span>
              </div>
              <p className="text-[10px] text-emerald-800/80 leading-relaxed pl-5">
                Minimal paperwork required. Hassle-free electronic processing with full consultant guidance.
              </p>
            </div>
          )}
        </div>

        {/* -------------------------------------------------------------
            CARD FOOTER: HIGH-CONVERTING WHATSAPP ACTION
        ------------------------------------------------------------- */}
        <div className="p-4 pt-0 bg-ivory-50/50">
          <a
            href={`https://wa.me/923065602040?text=${encodeURIComponent(
              `Hello Bilal Travels & Tours, I am interested in applying for ${item.country} Visa (${item.options
                .map((o) => o.duration)
                .slice(0, 2)
                .join(", ")}). Please share current requirements and fee details.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-navy-950 to-navy-900 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold text-xs transition-all duration-300 shadow-md group/btn"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 group-hover/btn:scale-110 transition-transform" />
            <span>Inquire for {item.country}</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold-400 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <section id="visa-hub" className="py-16 sm:py-24 bg-gradient-to-b from-ivory-50 via-white to-ivory-100 border-b border-border-muted relative overflow-hidden">
      {/* Decorative background flight path curve */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-gradient-to-b from-gold-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* =========================================================================
            1. POSTER SIGNATURE HERO HEADER ("Explore the World With Us")
        ========================================================================= */}
        <div className="relative rounded-3xl bg-gradient-to-br from-navy-950 via-[#0d233e] to-navy-900 text-white p-8 sm:p-12 border border-gold-500/20 shadow-2xl overflow-hidden">
          {/* Background Landmark Silhouette & Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_50%)] pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content Column */}
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              {/* Script tagline from Poster */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-300 text-xs font-bold tracking-widest uppercase">
                <Compass className="w-3.5 h-3.5 text-gold-400 animate-spin-slow" />
                <span>B Travel &amp; Tours • Your Journey Our Priority</span>
              </div>

              <div className="space-y-2">
                <p className="font-serif italic text-gold-400 text-xl sm:text-2xl drop-shadow-sm font-normal">
                  Explore the World With Us
                </p>
                <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-extrabold tracking-tight leading-tight">
                  VISIT VISA
                </h2>
                <p className="text-sm sm:text-lg text-ivory-200 font-medium tracking-wide">
                  YOUR DREAM DESTINATION IS JUST A VISA AWAY!
                </p>
              </div>

              {/* Official Stamp Badge from Poster */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <div className="inline-flex items-center gap-2 bg-gold-500 text-navy-950 font-black text-xs uppercase px-4 py-2 rounded-xl shadow-md border-2 border-gold-300 tracking-wider">
                  <CheckCircle2 className="w-4 h-4 fill-navy-950 text-gold-400" />
                  <span>Trusted • Professional • Hassle Free</span>
                </div>
                <span className="text-xs text-slate-300 font-medium">
                  Official Embassy Visa Processing &amp; File Preparation
                </span>
              </div>
            </div>

            {/* Right: 3 Polaroid Memory Cards (From Flyer: Dubai, Makkah, Thailand) */}
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
            2. FILTER CONTROLS + VIEW SWITCHER (CARDS VS OFFICIAL TABLE)
        ========================================================================= */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-border-muted shadow-sm space-y-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-1 sm:pb-0 scrollbar-none">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === "all"
                    ? "bg-navy-950 text-white shadow-md ring-2 ring-navy-950/20"
                    : "bg-ivory-50 text-navy-900 hover:bg-ivory-200 border border-border-muted"
                }`}
              >
                <span>All Countries (14+ Official)</span>
              </button>

              <button
                onClick={() => setSelectedCategory("visit")}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === "visit"
                    ? "bg-navy-950 text-white shadow-md ring-2 ring-navy-950/20"
                    : "bg-ivory-50 text-navy-900 hover:bg-ivory-200 border border-border-muted"
                }`}
              >
                <Plane className="w-3.5 h-3.5 text-gold-500" />
                <span>Visit &amp; Tourist Visa</span>
              </button>

              <button
                onClick={() => setSelectedCategory("work")}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === "work"
                    ? "bg-navy-950 text-white shadow-md ring-2 ring-navy-950/20"
                    : "bg-ivory-50 text-navy-900 hover:bg-ivory-200 border border-border-muted"
                }`}
              >
                <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
                <span>Work &amp; Employment</span>
              </button>

              <button
                onClick={() => setSelectedCategory("freelance")}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === "freelance"
                    ? "bg-navy-950 text-white shadow-md ring-2 ring-navy-950/20"
                    : "bg-ivory-50 text-navy-900 hover:bg-ivory-200 border border-border-muted"
                }`}
              >
                <Laptop className="w-3.5 h-3.5 text-blue-600" />
                <span>Freelance &amp; Nomad</span>
              </button>

              <button
                onClick={() => setSelectedCategory("business")}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === "business"
                    ? "bg-navy-950 text-white shadow-md ring-2 ring-navy-950/20"
                    : "bg-ivory-50 text-navy-900 hover:bg-ivory-200 border border-border-muted"
                }`}
              >
                <Building className="w-3.5 h-3.5 text-amber-600" />
                <span>Business / Multiple</span>
              </button>
            </div>

            {/* View Switcher & Search Bar */}
            <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
              {/* View Switcher Toggle */}
              <div className="inline-flex p-1 bg-ivory-100 rounded-full border border-border-muted">
                <button
                  onClick={() => setViewMode("cards")}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    viewMode === "cards"
                      ? "bg-navy-950 text-white shadow-sm"
                      : "text-slate-600 hover:text-navy-950"
                  }`}
                  title="Grid Cards with destination background photos"
                >
                  <LayoutGrid className="w-3.5 h-3.5 text-gold-400" />
                  <span>Cards View</span>
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    viewMode === "table"
                      ? "bg-navy-950 text-white shadow-sm"
                      : "text-slate-600 hover:text-navy-950"
                  }`}
                  title="Official Flyer Matrix Table format"
                >
                  <TableIcon className="w-3.5 h-3.5 text-gold-400" />
                  <span>Poster Table</span>
                </button>
              </div>

              {/* Live Search Input */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search UAE, Malaysia, Schengen..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-full border border-border-muted bg-ivory-50 text-xs font-medium text-navy-900 focus:outline-none focus:border-gold-500 focus:bg-white shadow-sm transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            3. CARDS VIEW: ORGANIZED BY ROWS (MULTI-OPTION ROW + COMPACT ROW)
        ========================================================================= */}
        {viewMode === "cards" && (
          <div className="space-y-12">
            {/* -----------------------------------------------------------------
                ROW GROUP 1: MAJOR MULTI-CATEGORY VISA HUBS (>= 3 Options)
                (UAE, Malaysia, Indonesia, Bahrain, Saudi Arabia, Thailand)
            ----------------------------------------------------------------- */}
            {majorHubCountries.length > 0 && (
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-gold-400/40">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-7 rounded-full bg-gold-500 shadow-xs" />
                    <div>
                      <h3 className="font-serif font-black text-xl sm:text-2xl text-navy-950 tracking-tight">
                        Major Multi-Option Visa Hubs
                      </h3>
                      <p className="text-xs text-slate-500">
                        Destinations offering multiple stay durations, digital nomad freelance, &amp; overseas employment
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-[11px] font-bold self-start sm:self-auto">
                    <Sparkles className="w-3 h-3 text-gold-600" />
                    <span>{majorHubCountries.length} Comprehensive Hubs</span>
                  </span>
                </div>

                {/* 3-Column Grid for Major Hubs: All cards are tall & balanced */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
                  {majorHubCountries.map((item) => renderCountryCard(item, false))}
                </div>
              </div>
            )}

            {/* -----------------------------------------------------------------
                ROW GROUP 2: EXPRESS & FAST-TRACK E-VISAS (< 3 Options)
                (Jordan, Kenya, Cambodia, Sri Lanka, Azerbaijan, Singapore, Vietnam, Schengen, UK)
            ----------------------------------------------------------------- */}
            {expressCountries.length > 0 && (
              <div className="space-y-5 pt-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-7 rounded-full bg-emerald-600 shadow-xs" />
                    <div>
                      <h3 className="font-serif font-black text-xl sm:text-2xl text-navy-950 tracking-tight">
                        Express &amp; Fast-Track E-Visas
                      </h3>
                      <p className="text-xs text-slate-500">
                        Rapid turnaround tourist entries with streamlined paperless documentation
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 text-[11px] font-bold self-start sm:self-auto">
                    <Zap className="w-3 h-3 text-emerald-600" />
                    <span>{expressCountries.length} Fast-Track Entries</span>
                  </span>
                </div>

                {/* 3-Column Grid for Express Visas: All cards are uniformly compact & balanced */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
                  {expressCountries.map((item) => renderCountryCard(item, true))}
                </div>
              </div>
            )}

            {filteredCountries.length === 0 && (
              <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300 space-y-3">
                <Search className="w-10 h-10 text-slate-400 mx-auto" />
                <h4 className="font-serif font-bold text-navy-900 text-lg">No destinations matched your search</h4>
                <p className="text-xs text-slate-500">Try searching for a different country name or reset your category filters.</p>
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
            {/* Table Header Strip */}
            <div className="bg-gradient-to-r from-gold-500 via-amber-400 to-gold-500 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-navy-950">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 font-bold" />
                <h3 className="font-serif font-black text-lg tracking-wide uppercase">
                  Visa Details — Master Schedule &amp; Processing Matrix
                </h3>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider bg-navy-950 text-gold-400 px-3 py-1 rounded-full">
                14+ Official Destinations
              </span>
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gold-50/80 text-navy-950 text-xs font-black uppercase tracking-wider border-b border-gold-200">
                    <th className="py-3.5 px-4 text-center w-16">S.No.</th>
                    <th className="py-3.5 px-4 min-w-[180px]">Country</th>
                    <th className="py-3.5 px-4 min-w-[160px]">Time Required</th>
                    <th className="py-3.5 px-4 min-w-[220px]">Visa Duration</th>
                    <th className="py-3.5 px-4 min-w-[120px]">Type</th>
                    <th className="py-3.5 px-4 text-right min-w-[150px]">Quick Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs text-navy-900">
                  {filteredCountries.map((country) =>
                    country.options.map((opt, optIdx) => (
                      <tr
                        key={`${country.slug}-${optIdx}`}
                        className={`hover:bg-gold-50/40 transition-colors ${
                          country.serialNo % 2 === 0 ? "bg-ivory-50/40" : "bg-white"
                        }`}
                      >
                        {/* S.No. (Only on first option row) */}
                        {optIdx === 0 ? (
                          <td
                            rowSpan={country.options.length}
                            className="py-3.5 px-4 text-center font-mono font-bold text-navy-950 border-r border-slate-100 align-middle bg-ivory-100/30"
                          >
                            <span className="w-7 h-7 rounded-full bg-navy-950 text-gold-400 inline-flex items-center justify-center text-xs font-bold shadow-xs">
                              {country.serialNo}
                            </span>
                          </td>
                        ) : null}

                        {/* Country & Flag (Only on first option row) */}
                        {optIdx === 0 ? (
                          <td
                            rowSpan={country.options.length}
                            className="py-3.5 px-4 border-r border-slate-100 align-middle"
                          >
                            <div className="flex items-center gap-2.5">
                              <img
                                src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                                alt={country.country}
                                className="w-6 h-4 object-cover rounded shadow-xs"
                                onError={(e) => {
                                  (e.target as HTMLElement).style.display = "none";
                                }}
                              />
                              <div>
                                <p className="font-serif font-black text-sm text-navy-950">
                                  {country.country}
                                </p>
                                <p className="text-[10px] text-slate-500 font-normal">
                                  {country.code} • {country.tagline}
                                </p>
                              </div>
                            </div>
                          </td>
                        ) : null}

                        {/* Time Required */}
                        <td className="py-3.5 px-4 font-semibold text-slate-700">
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-gold-600" />
                            <span>{opt.timeRequired}</span>
                          </span>
                        </td>

                        {/* Visa Duration */}
                        <td className="py-3.5 px-4 font-bold text-navy-950">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-navy-700" />
                            <span>{opt.duration}</span>
                          </span>
                        </td>

                        {/* Visa Type */}
                        <td className="py-3.5 px-4">
                          <span
                            className={`text-[10px] px-2.5 py-1 rounded-full font-black uppercase tracking-wider inline-flex items-center gap-1 ${
                              opt.type === "E.Visa"
                                ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                                : "bg-blue-100 text-blue-800 border border-blue-300"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-current" />
                            <span>{opt.type}</span>
                          </span>
                        </td>

                        {/* Action CTA */}
                        <td className="py-3.5 px-4 text-right">
                          <a
                            href={`https://wa.me/923065602040?text=${encodeURIComponent(
                              `Hello Bilal Travels, I want to inquire about ${country.country} (${opt.duration} - ${opt.type}) visa processing.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-navy-950 hover:bg-emerald-700 text-white font-bold text-[11px] px-3 py-1.5 rounded-lg transition-colors shadow-xs"
                          >
                            <MessageCircle className="w-3 h-3 text-emerald-400" />
                            <span>Apply</span>
                          </a>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Table Footer Summary Note */}
            <div className="bg-ivory-100/80 px-6 py-3 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="font-medium">
                ⚡ Express 24–48 hours processing available for UAE &amp; Saudi Arabia
              </span>
              <span className="text-[11px] text-slate-500">
                Official prices &amp; requirements are subject to respective embassy terms.
              </span>
            </div>
          </div>
        )}

        {/* =========================================================================
            5. THE 5 OFFICIAL POSTER TRUST PILLARS
        ========================================================================= */}
        <div className="pt-6">
          <div className="text-center mb-6">
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-gold-600">
              Why 10,000+ Travellers Choose Bilal Travels
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {/* Badge 1 */}
            <div className="p-4 rounded-2xl bg-white border border-border-muted/80 text-center space-y-2 flex flex-col items-center shadow-xs hover:border-gold-400 transition-colors">
              <div className="w-12 h-12 rounded-full bg-gold-50 text-gold-700 flex items-center justify-center shadow-xs border border-gold-200">
                <ShieldCheck className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h4 className="font-serif font-bold text-navy-950 text-xs sm:text-sm">
                Trusted &amp; Reliable
              </h4>
              <p className="text-[11px] text-slate-500 leading-snug">
                100% verified legal submissions
              </p>
            </div>

            {/* Badge 2 */}
            <div className="p-4 rounded-2xl bg-white border border-border-muted/80 text-center space-y-2 flex flex-col items-center shadow-xs hover:border-gold-400 transition-colors">
              <div className="w-12 h-12 rounded-full bg-gold-50 text-gold-700 flex items-center justify-center shadow-xs border border-gold-200">
                <Zap className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h4 className="font-serif font-bold text-navy-950 text-xs sm:text-sm">
                Fast &amp; Hassle Free
              </h4>
              <p className="text-[11px] text-slate-500 leading-snug">
                Express processing on done base
              </p>
            </div>

            {/* Badge 3 */}
            <div className="p-4 rounded-2xl bg-white border border-border-muted/80 text-center space-y-2 flex flex-col items-center shadow-xs hover:border-gold-400 transition-colors">
              <div className="w-12 h-12 rounded-full bg-gold-50 text-gold-700 flex items-center justify-center shadow-xs border border-gold-200">
                <FileText className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h4 className="font-serif font-bold text-navy-950 text-xs sm:text-sm">
                Complete Documents
              </h4>
              <p className="text-[11px] text-slate-500 leading-snug">
                Vouchers, itinerary &amp; bank support
              </p>
            </div>

            {/* Badge 4 */}
            <div className="p-4 rounded-2xl bg-white border border-border-muted/80 text-center space-y-2 flex flex-col items-center shadow-xs hover:border-gold-400 transition-colors">
              <div className="w-12 h-12 rounded-full bg-gold-50 text-gold-700 flex items-center justify-center shadow-xs border border-gold-200">
                <Users className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h4 className="font-serif font-bold text-navy-950 text-xs sm:text-sm">
                Experienced Team
              </h4>
              <p className="text-[11px] text-slate-500 leading-snug">
                12+ years licensed specialists
              </p>
            </div>

            {/* Badge 5 */}
            <div className="col-span-2 md:col-span-1 p-4 rounded-2xl bg-gradient-to-br from-gold-500 to-amber-500 text-navy-950 text-center space-y-2 flex flex-col items-center shadow-md">
              <div className="w-12 h-12 rounded-full bg-navy-950 text-gold-400 flex items-center justify-center shadow-sm">
                <Headphones className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h4 className="font-serif font-black text-navy-950 text-xs sm:text-sm">
                24/7 Customer Support
              </h4>
              <p className="text-[11px] font-bold text-navy-950 leading-snug">
                Hotline: 0306 5602040
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            6. POSTER BOTTOM CONVERSION BANNER ("Travel More Worry Less")
        ========================================================================= */}
        <div className="relative rounded-3xl bg-gradient-to-r from-navy-950 via-[#102d4f] to-navy-900 text-white p-6 sm:p-10 shadow-2xl border-2 border-gold-500/30 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 text-gold-400 text-xs uppercase tracking-widest font-bold">
              <Plane className="w-3.5 h-3.5 text-gold-400" />
              <span>Travel More Worry Less • Your Visa Partner</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl text-white font-extrabold tracking-tight">
              Ready to Apply? Contact Us Now!
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Get free file scrutiny, embassy requirements check, and fast-track processing assistance
              with Bilal Travels &amp; Tours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 flex-shrink-0 z-10 w-full sm:w-auto">
            {/* Phone Call CTA matching poster */}
            <a
              href="tel:+923065602040"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold-500 to-amber-400 hover:from-gold-400 hover:to-amber-300 text-navy-950 font-black text-sm px-7 py-3.5 rounded-full shadow-lg transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 fill-navy-950" />
              <span className="text-base tracking-wide font-mono">0306 5602040</span>
            </a>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/923065602040?text=Hi%20Bilal%20Travels,%20I%20saw%20your%20Visa%20Details%20flyer%20and%20want%20to%20apply."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
