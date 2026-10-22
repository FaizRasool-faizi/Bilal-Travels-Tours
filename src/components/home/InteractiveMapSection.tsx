"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Compass,
  MapPin,
  Plus,
  Minus,
  RotateCcw,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Clock,
  Calendar,
  CheckCircle2,
  Globe2,
  Layers,
  Star,
} from "lucide-react";

export interface MapDestination {
  id: string;
  name: string;
  code: string;
  flag: string;
  region: "Middle East" | "Asia" | "Europe" | "Africa";
  tagline: string;
  image: string;
  x: number; // SVG coordinate (0 - 1000)
  y: number; // SVG coordinate (0 - 500)
  visaType: string;
  processingTime: string;
  validity: string;
  tourSlug?: string;
  visaSlug?: string;
  highlights: string[];
}

export const MAP_DESTINATIONS: MapDestination[] = [
  {
    id: "uae",
    name: "United Arab Emirates",
    code: "AE",
    flag: "🇦🇪",
    region: "Middle East",
    tagline: "Burj Khalifa, Desert Safari & Luxury Dubai",
    image: "/images/dest-dubai.jpg",
    x: 653,
    y: 180,
    visaType: "30 & 60 Days E.Visa",
    processingTime: "24–48 Hours",
    validity: "60 Days Validity",
    tourSlug: "/tours?destination=dubai",
    visaSlug: "#visa-hub",
    highlights: ["Burj Khalifa", "Dubai Marina", "Desert Safari"],
  },
  {
    id: "saudi",
    name: "Saudi Arabia",
    code: "SA",
    flag: "🇸🇦",
    region: "Middle East",
    tagline: "Sacred Makkah & Holy Madinah (Umrah / Visit)",
    image: "/images/Mecca.jpeg",
    x: 623,
    y: 182,
    visaType: "1 Yr Multiple / Umrah",
    processingTime: "24–48 Hours",
    validity: "365 Days Multiple",
    tourSlug: "/umrah",
    visaSlug: "#visa-hub",
    highlights: ["Masjid al-Haram", "Clock Tower", "Masjid an-Nabawi"],
  },
  {
    id: "switzerland",
    name: "Switzerland",
    code: "CH",
    flag: "🇨🇭",
    region: "Europe",
    tagline: "Glacier Express, Alps & Lake Lucerne",
    image: "/images/dest-switzerland.jpg",
    x: 523,
    y: 118,
    visaType: "Schengen Visa Type C",
    processingTime: "15–21 Work. Days",
    validity: "90 Days Stay",
    tourSlug: "/tours?destination=switzerland",
    visaSlug: "#visa-hub",
    highlights: ["Jungfraujoch", "Mount Titlis", "Glacier Express"],
  },
  {
    id: "malaysia",
    name: "Malaysia",
    code: "MY",
    flag: "🇲🇾",
    region: "Asia",
    tagline: "Petronas Twin Towers & Langkawi Island",
    image: "/images/seeview_malysia.jpeg",
    x: 782,
    y: 241,
    visaType: "30 Days E.Visa",
    processingTime: "3 Work. Days",
    validity: "30–180 Days",
    tourSlug: "/tours?destination=malaysia",
    visaSlug: "#visa-hub",
    highlights: ["Twin Towers", "Langkawi SkyCab", "Batu Caves"],
  },
  {
    id: "azerbaijan",
    name: "Azerbaijan",
    code: "AZ",
    flag: "🇦🇿",
    region: "Asia",
    tagline: "Baku Flame Towers & Gabala Mountains",
    image: "/images/hero-baku.jpg",
    x: 638,
    y: 138,
    visaType: "Instant E.Visa",
    processingTime: "3–5 Work. Days",
    validity: "30 Days",
    tourSlug: "/tours?destination=azerbaijan",
    visaSlug: "#visa-hub",
    highlights: ["Flame Towers", "Old City Baku", "Gabala Cable Car"],
  },
  {
    id: "turkey",
    name: "Türkiye",
    code: "TR",
    flag: "🇹🇷",
    region: "Europe",
    tagline: "Bosphorus Sunset, Hagia Sophia & Cappadocia",
    image: "/images/dest-istanbul.jpg",
    x: 580,
    y: 136,
    visaType: "Sticker & E.Visa",
    processingTime: "10–15 Work. Days",
    validity: "90 Days Validity",
    tourSlug: "/tours?destination=turkey",
    visaSlug: "#visa-hub",
    highlights: ["Hagia Sophia", "Cappadocia Balloons", "Bosphorus"],
  },
  {
    id: "thailand",
    name: "Thailand",
    code: "TH",
    flag: "🇹🇭",
    region: "Asia",
    tagline: "Bangkok Temples, Phuket & Tropical Isles",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop",
    x: 779,
    y: 212,
    visaType: "Sticker & DTV Nomad",
    processingTime: "7–10 Work. Days",
    validity: "30–60 Days",
    tourSlug: "/tours",
    visaSlug: "#visa-hub",
    highlights: ["Wat Arun", "Phi Phi Islands", "Grand Palace"],
  },
  {
    id: "indonesia",
    name: "Indonesia (Bali)",
    code: "ID",
    flag: "🇮🇩",
    region: "Asia",
    tagline: "Bali Temples, Beaches & Digital Nomad Hub",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    x: 796,
    y: 267,
    visaType: "60 Days E.Visa",
    processingTime: "7–15 Work. Days",
    validity: "60 Days / 1 Yr Mul",
    tourSlug: "/tours",
    visaSlug: "#visa-hub",
    highlights: ["Ubud Rice Terraces", "Uluwatu Temple", "Nusa Penida"],
  },
  {
    id: "singapore",
    name: "Singapore",
    code: "SG",
    flag: "🇸🇬",
    region: "Asia",
    tagline: "Marina Bay Sands & Gardens by the Bay",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop",
    x: 788,
    y: 246,
    visaType: "Paperless E.Visa",
    processingTime: "4–5 Work. Days",
    validity: "30 Days Stay",
    tourSlug: "/tours",
    visaSlug: "#visa-hub",
    highlights: ["Marina Bay Sands", "Supertree Grove", "Sentosa Island"],
  },
  {
    id: "uk",
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    region: "Europe",
    tagline: "London Big Ben, Edinburgh & Thames River",
    image: "/images/hero-london.jpg",
    x: 500,
    y: 107,
    visaType: "Standard Visitor Visa",
    processingTime: "15–20 Work. Days",
    validity: "6 Months Multiple",
    tourSlug: "/tours?destination=uk",
    visaSlug: "#visa-hub",
    highlights: ["Big Ben", "Tower Bridge", "Westminster Abbey"],
  },
  {
    id: "france",
    name: "France (Paris)",
    code: "FR",
    flag: "🇫🇷",
    region: "Europe",
    tagline: "Eiffel Tower, Seine Sunset & Louvre Museum",
    image: "/images/hero-paris.jpg",
    x: 506,
    y: 114,
    visaType: "Schengen Visa Type C",
    processingTime: "15–25 Work. Days",
    validity: "90 Days Stay",
    tourSlug: "/tours",
    visaSlug: "#visa-hub",
    highlights: ["Eiffel Tower", "Louvre Museum", "Champs-Élysées"],
  },
  {
    id: "jordan",
    name: "Jordan",
    code: "JO",
    flag: "🇯🇴",
    region: "Middle East",
    tagline: "Ancient Wonders of Petra & Dead Sea",
    image: "https://images.unsplash.com/photo-1544971587-b842c27f8e14?q=80&w=800&auto=format&fit=crop",
    x: 600,
    y: 161,
    visaType: "Express E.Visa",
    processingTime: "3–5 Work. Days",
    validity: "30 Days Stay",
    tourSlug: "/tours",
    visaSlug: "#visa-hub",
    highlights: ["Petra Treasury", "Dead Sea Floating", "Wadi Rum"],
  },
  {
    id: "bahrain",
    name: "Bahrain",
    code: "BH",
    flag: "🇧🇭",
    region: "Middle East",
    tagline: "Manama Modern Skyline & World Trade Centre",
    image: "https://images.unsplash.com/photo-1549944850-84e00be4203b?q=80&w=800&auto=format&fit=crop",
    x: 640,
    y: 177,
    visaType: "Fast E.Visa / 365 Days",
    processingTime: "7–10 Work. Days",
    validity: "14–365 Days",
    tourSlug: "/tours",
    visaSlug: "#visa-hub",
    highlights: ["Bahrain Fort", "Manama Souq", "World Trade Centre"],
  },
  {
    id: "oman",
    name: "Oman",
    code: "OM",
    flag: "🇴🇲",
    region: "Middle East",
    tagline: "Sultan Qaboos Grand Mosque & Muscat Coast",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop",
    x: 662,
    y: 184,
    visaType: "90 Days E.Visa",
    processingTime: "8–10 Work. Days",
    validity: "90 Days Stay",
    tourSlug: "/tours",
    visaSlug: "#visa-hub",
    highlights: ["Grand Mosque Muscat", "Mutrah Corniche", "Wadi Shab"],
  },
  {
    id: "kenya",
    name: "Kenya",
    code: "KE",
    flag: "🇰🇪",
    region: "Africa",
    tagline: "Maasai Mara Safari & African Great Migration",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop",
    x: 602,
    y: 253,
    visaType: "Electronic Travel ETA",
    processingTime: "10–15 Work. Days",
    validity: "30 Days Stay",
    tourSlug: "/tours",
    visaSlug: "#visa-hub",
    highlights: ["Maasai Mara", "Amboseli Safari", "Great Rift Valley"],
  },
  {
    id: "sri-lanka",
    name: "Sri Lanka",
    code: "LK",
    flag: "🇱🇰",
    region: "Asia",
    tagline: "Sigiriya Lion Rock & Emerald Ceylon Hills",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800&auto=format&fit=crop",
    x: 721,
    y: 230,
    visaType: "Tourist ETA",
    processingTime: "5–15 Work. Days",
    validity: "30 Days Stay",
    tourSlug: "/tours",
    visaSlug: "#visa-hub",
    highlights: ["Sigiriya Fortress", "Kandy Temple", "Ella Train Ride"],
  },
  {
    id: "cambodia",
    name: "Cambodia",
    code: "KH",
    flag: "🇰🇭",
    region: "Asia",
    tagline: "Angkor Wat Temple & Ancient Khmer Heritage",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=800&auto=format&fit=crop",
    x: 791,
    y: 218,
    visaType: "Instant 30d E.Visa",
    processingTime: "7–10 Work. Days",
    validity: "30 Days Stay",
    tourSlug: "/tours",
    visaSlug: "#visa-hub",
    highlights: ["Angkor Wat", "Bayon Temple", "Siem Reap"],
  },
  {
    id: "vietnam",
    name: "Vietnam",
    code: "VN",
    flag: "🇻🇳",
    region: "Asia",
    tagline: "Ha Long Bay Emerald Waters & Hanoi Old Town",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop",
    x: 794,
    y: 191,
    visaType: "30 Days E.Visa",
    processingTime: "7–10 Work. Days",
    validity: "30 Days Stay",
    tourSlug: "/tours",
    visaSlug: "#visa-hub",
    highlights: ["Ha Long Bay", "Hanoi Old Quarter", "Golden Bridge"],
  },
  {
    id: "japan",
    name: "Japan",
    code: "JP",
    flag: "🇯🇵",
    region: "Asia",
    tagline: "Tokyo Skyline, Mount Fuji & Kyoto Shrines",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
    x: 848,
    y: 152,
    visaType: "Tourist Visa",
    processingTime: "10–14 Work. Days",
    validity: "90 Days Validity",
    tourSlug: "/tours",
    visaSlug: "#visa-hub",
    highlights: ["Mount Fuji", "Kyoto Fushimi Inari", "Tokyo Shibuya"],
  },
  {
    id: "qatar",
    name: "Qatar",
    code: "QA",
    flag: "🇶🇦",
    region: "Middle East",
    tagline: "Doha Corniche, Museum of Islamic Art & Luxury Pearl",
    image: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?q=80&w=800&auto=format&fit=crop",
    x: 647,
    y: 178,
    visaType: "Visa On Arrival / Hayya",
    processingTime: "Instant / 24h",
    validity: "30–90 Days",
    tourSlug: "/tours",
    visaSlug: "#visa-hub",
    highlights: ["Souq Waqif", "The Pearl Qatar", "Doha Corniche"],
  },
  {
    id: "china",
    name: "China",
    code: "CN",
    flag: "🇨🇳",
    region: "Asia",
    tagline: "The Great Wall, Forbidden City & Shanghai Bund",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=800&auto=format&fit=crop",
    x: 785,
    y: 156,
    visaType: "Business & Tourist L",
    processingTime: "7–10 Work. Days",
    validity: "30–90 Days",
    tourSlug: "/tours",
    visaSlug: "#visa-hub",
    highlights: ["Great Wall", "Forbidden City", "Shanghai Skyline"],
  },
  {
    id: "egypt",
    name: "Egypt",
    code: "EG",
    flag: "🇪🇬",
    region: "Africa",
    tagline: "Giza Pyramids, Nile River Cruises & Red Sea Resorts",
    image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=800&auto=format&fit=crop",
    x: 582,
    y: 175,
    visaType: "Instant E.Visa / Sticker",
    processingTime: "5–7 Work. Days",
    validity: "30 Days Single/Mul",
    tourSlug: "/tours",
    visaSlug: "#visa-hub",
    highlights: ["Pyramids of Giza", "Nile River Cruise", "Sharm El-Sheikh"],
  },
  {
    id: "nepal",
    name: "Nepal",
    code: "NP",
    flag: "🇳🇵",
    region: "Asia",
    tagline: "Himalayas, Mount Everest & Kathmandu Valley",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
    x: 718,
    y: 178,
    visaType: "On Arrival / Online ETA",
    processingTime: "Instant / 48h",
    validity: "15–90 Days",
    tourSlug: "/tours",
    visaSlug: "#visa-hub",
    highlights: ["Pokhara", "Kathmandu Durbar", "Everest View"],
  },
];

type RegionFilter = "all" | "Middle East" | "Asia" | "Europe" | "Africa";

export default function InteractiveMapSection() {
  const [selectedRegion, setSelectedRegion] = useState<RegionFilter>("all");
  const [activeDestination, setActiveDestination] = useState<MapDestination>(MAP_DESTINATIONS[0]);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [hoveredDestination, setHoveredDestination] = useState<MapDestination | null>(null);

  const displayedDestinations = useMemo(() => {
    const list =
      selectedRegion === "all"
        ? MAP_DESTINATIONS
        : MAP_DESTINATIONS.filter((d) => d.region === selectedRegion);
    // Organise alphabetically by name like the reference image
    return [...list].sort((a, b) => a.name.localeCompare(b.name));
  }, [selectedRegion]);

  const currentFocus = hoveredDestination || activeDestination;

  // Zoom controls
  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.0));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.85));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F3] border-b border-border-muted relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* =========================================================================
            1. SECTION HEADER (MATCHING USER REFERENCE MOTTO)
        ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gold-400/40 text-gold-700 text-xs font-bold tracking-widest uppercase shadow-xs">
            <Compass className="w-3.5 h-3.5 text-gold-600 animate-spin-slow" />
            <span>Interactive World &amp; Regional Atlas</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[46px] text-navy-950 tracking-tight leading-tight">
            Explore Destinations by Map &amp; Region
          </h2>

          <p className="text-slate-600 font-serif italic text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover sides of the world you never knew existed, revealed by experts who know every facet.
          </p>
        </div>

        {/* =========================================================================
            2. REGION TABS (Middle East, Asia, Europe, Africa)
        ========================================================================= */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedRegion("all")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-xs ${
              selectedRegion === "all"
                ? "bg-navy-950 text-white shadow-md ring-2 ring-navy-950/20"
                : "bg-white text-navy-900 hover:bg-ivory-200 border border-border-muted"
            }`}
          >
            <span>All Destinations (18+)</span>
          </button>

          <button
            onClick={() => setSelectedRegion("Middle East")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-xs ${
              selectedRegion === "Middle East"
                ? "bg-navy-950 text-white shadow-md ring-2 ring-navy-950/20"
                : "bg-white text-navy-900 hover:bg-ivory-200 border border-border-muted"
            }`}
          >
            <span>Middle East &amp; Umrah</span>
          </button>

          <button
            onClick={() => setSelectedRegion("Asia")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-xs ${
              selectedRegion === "Asia"
                ? "bg-navy-950 text-white shadow-md ring-2 ring-navy-950/20"
                : "bg-white text-navy-900 hover:bg-ivory-200 border border-border-muted"
            }`}
          >
            <span>Asia &amp; Far East</span>
          </button>

          <button
            onClick={() => setSelectedRegion("Europe")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-xs ${
              selectedRegion === "Europe"
                ? "bg-navy-950 text-white shadow-md ring-2 ring-navy-950/20"
                : "bg-white text-navy-900 hover:bg-ivory-200 border border-border-muted"
            }`}
          >
            <span>Europe &amp; UK</span>
          </button>

          <button
            onClick={() => setSelectedRegion("Africa")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-xs ${
              selectedRegion === "Africa"
                ? "bg-navy-950 text-white shadow-md ring-2 ring-navy-950/20"
                : "bg-white text-navy-900 hover:bg-ivory-200 border border-border-muted"
            }`}
          >
            <span>Africa (Safari)</span>
          </button>
        </div>

        {/* =========================================================================
            3. MAIN INTERACTIVE MAP & DIRECTORY SPLIT (MATCHING REFERENCE IMAGE)
        ========================================================================= */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
          {/* -----------------------------------------------------------------------
              LEFT: INTERACTIVE VECTOR MAP WITH ZOOM CONTROLS (COL-SPAN 7)
          ----------------------------------------------------------------------- */}
          <div className="lg:col-span-7 relative bg-gradient-to-br from-slate-50 via-white to-ivory-50 p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200 overflow-hidden min-h-[420px] sm:min-h-[500px]">
            {/* Map Controls: Home, Zoom In (+), Zoom Out (-) */}
            <div className="absolute top-5 left-5 z-20 flex flex-col gap-1.5 bg-white/95 backdrop-blur-md p-1.5 rounded-xl border border-slate-200 shadow-md">
              <button
                onClick={handleResetZoom}
                className="w-8 h-8 rounded-lg hover:bg-ivory-100 flex items-center justify-center text-navy-950 transition-colors"
                title="Reset View"
                aria-label="Reset Map"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <div className="h-px bg-slate-200 mx-1" />
              <button
                onClick={handleZoomIn}
                className="w-8 h-8 rounded-lg hover:bg-ivory-100 flex items-center justify-center text-navy-950 font-bold text-base transition-colors"
                title="Zoom In"
                aria-label="Zoom In"
              >
                <Plus className="w-4 h-4" />
              </button>
              <button
                onClick={handleZoomOut}
                className="w-8 h-8 rounded-lg hover:bg-ivory-100 flex items-center justify-center text-navy-950 font-bold text-base transition-colors"
                title="Zoom Out"
                aria-label="Zoom Out"
              >
                <Minus className="w-4 h-4" />
              </button>
            </div>

            {/* Region Label Pill (Top Right on Map) */}
            <div className="absolute top-5 right-5 z-20 hidden sm:flex items-center gap-2 bg-navy-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white shadow-md">
              <Globe2 className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-xs font-bold tracking-wide capitalize">
                {selectedRegion === "all" ? "Worldwide Network" : `${selectedRegion} Focus`}
              </span>
            </div>

            {/* SVG Interactive Map Container */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden py-4">
              <div
                className="w-full h-full max-w-[850px] transition-transform duration-500 ease-out origin-center"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <svg
                  viewBox="380 70 500 240"
                  className="w-full h-full select-none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient id="beaconGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#102D4F" />
                      <stop offset="100%" stopColor="#0B1E36" />
                    </linearGradient>
                    <linearGradient id="inactiveLand" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E2E8F0" />
                      <stop offset="100%" stopColor="#CBD5E1" />
                    </linearGradient>
                  </defs>

                  {/* World Background Grid / Latitude Longitude Lines */}
                  <g opacity="0.25" stroke="#CBD5E1" strokeWidth="0.5" strokeDasharray="3 3">
                    <line x1="380" y1="120" x2="880" y2="120" />
                    <line x1="380" y1="180" x2="880" y2="180" />
                    <line x1="380" y1="240" x2="880" y2="240" />
                    <line x1="500" y1="70" x2="500" y2="310" />
                    <line x1="620" y1="70" x2="620" y2="310" />
                    <line x1="740" y1="70" x2="740" y2="310" />
                  </g>

                  {/* Stylized Continent Silhouettes (Europe, Middle East, Asia, East Africa) */}
                  {/* Western Europe & UK */}
                  <path
                    d="M 480 85 L 515 88 L 525 105 L 518 118 L 532 125 L 515 140 L 490 145 L 475 130 L 465 110 Z"
                    fill="url(#landGradient)"
                    opacity="0.95"
                    stroke="#1E3E66"
                    strokeWidth="0.8"
                  />
                  {/* British Isles */}
                  <path
                    d="M 495 95 L 508 97 L 505 112 L 492 110 Z"
                    fill="url(#landGradient)"
                    stroke="#D4AF37"
                    strokeWidth="0.5"
                  />
                  {/* Central & Eastern Europe */}
                  <path
                    d="M 525 105 L 575 102 L 590 120 L 570 138 L 532 125 Z"
                    fill="url(#landGradient)"
                    opacity="0.92"
                    stroke="#1E3E66"
                    strokeWidth="0.8"
                  />
                  {/* Türkiye & Caucasus */}
                  <path
                    d="M 565 130 L 610 128 L 642 135 L 635 152 L 595 150 L 570 138 Z"
                    fill="url(#landGradient)"
                    opacity="0.95"
                    stroke="#D4AF37"
                    strokeWidth="0.6"
                  />
                  {/* Middle East & Arabian Peninsula */}
                  <path
                    d="M 595 150 L 635 152 L 670 175 L 665 205 L 620 215 L 590 185 Z"
                    fill="url(#landGradient)"
                    opacity="0.98"
                    stroke="#D4AF37"
                    strokeWidth="0.8"
                  />
                  {/* Central Asia & Russia (Background) */}
                  <path
                    d="M 590 100 L 720 90 L 820 95 L 850 130 L 780 145 L 680 140 L 642 135 Z"
                    fill="url(#landGradient)"
                    opacity="0.85"
                    stroke="#1E3E66"
                    strokeWidth="0.8"
                  />
                  {/* South Asia (Pakistan & India) */}
                  <path
                    d="M 670 155 L 725 160 L 745 205 L 730 240 L 685 205 L 665 175 Z"
                    fill="url(#landGradient)"
                    opacity="0.9"
                    stroke="#1E3E66"
                    strokeWidth="0.8"
                  />
                  {/* East Asia & China */}
                  <path
                    d="M 725 130 L 830 125 L 855 165 L 810 190 L 760 180 L 725 160 Z"
                    fill="url(#landGradient)"
                    opacity="0.92"
                    stroke="#1E3E66"
                    strokeWidth="0.8"
                  />
                  {/* Southeast Asia (Thailand, Vietnam, Malaysia, Indonesia) */}
                  <path
                    d="M 760 180 L 810 190 L 805 230 L 775 250 L 765 210 Z"
                    fill="url(#landGradient)"
                    opacity="0.95"
                    stroke="#D4AF37"
                    strokeWidth="0.8"
                  />
                  {/* Indonesian Archipelago & Bali */}
                  <path
                    d="M 765 255 L 845 260 L 840 275 L 760 270 Z"
                    fill="url(#landGradient)"
                    opacity="0.95"
                    stroke="#D4AF37"
                    strokeWidth="0.6"
                  />
                  {/* East Africa (Kenya) */}
                  <path
                    d="M 570 190 L 610 205 L 615 270 L 585 275 L 565 220 Z"
                    fill="url(#landGradient)"
                    opacity="0.88"
                    stroke="#1E3E66"
                    strokeWidth="0.8"
                  />

                  {/* Flight Route Curves connecting Lahore Hub (approx 695, 170) to destinations */}
                  <g opacity="0.3" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3">
                    <path d="M 695 170 Q 675 175 653 180" /> {/* UAE */}
                    <path d="M 695 170 Q 660 176 623 182" /> {/* Saudi */}
                    <path d="M 695 170 Q 600 135 523 118" /> {/* Switzerland */}
                    <path d="M 695 170 Q 585 130 500 107" /> {/* UK */}
                    <path d="M 695 170 Q 740 210 782 241" /> {/* Malaysia */}
                    <path d="M 695 170 Q 745 235 796 267" /> {/* Bali */}
                  </g>

                  {/* Interactive Destination Hotspots / Pins */}
                  {displayedDestinations.map((dest) => {
                    const isSelected = activeDestination.id === dest.id;
                    const isHovered = hoveredDestination?.id === dest.id;
                    const isHighlighted = isSelected || isHovered;

                    return (
                      <g
                        key={dest.id}
                        className="cursor-pointer transition-all duration-300"
                        onMouseEnter={() => setHoveredDestination(dest)}
                        onMouseLeave={() => setHoveredDestination(null)}
                        onClick={() => setActiveDestination(dest)}
                      >
                        {/* Golden pulsating radar ripple for active pin */}
                        {isHighlighted && (
                          <>
                            <circle
                              cx={dest.x}
                              cy={dest.y}
                              r="16"
                              fill="url(#beaconGlow)"
                              className="animate-ping"
                            />
                            <circle
                              cx={dest.x}
                              cy={dest.y}
                              r="10"
                              stroke="#D4AF37"
                              strokeWidth="1.5"
                              fill="none"
                              opacity="0.8"
                            />
                          </>
                        )}

                        {/* Outer Glow Pin Ring */}
                        <circle
                          cx={dest.x}
                          cy={dest.y}
                          r={isHighlighted ? "6.5" : "4.5"}
                          fill={isHighlighted ? "#D4AF37" : "#FFFFFF"}
                          stroke="#102D4F"
                          strokeWidth={isHighlighted ? "2" : "1.5"}
                          filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
                          className="transition-all duration-300"
                        />

                        {/* Center Dot */}
                        <circle
                          cx={dest.x}
                          cy={dest.y}
                          r={isHighlighted ? "2.5" : "1.8"}
                          fill={isHighlighted ? "#102D4F" : "#D4AF37"}
                        />

                        {/* Country Label Tag when highlighted */}
                        {isHighlighted && (
                          <g transform={`translate(${dest.x}, ${dest.y - 14})`}>
                            <rect
                              x="-38"
                              y="-16"
                              width="76"
                              height="18"
                              rx="9"
                              fill="#102D4F"
                              stroke="#D4AF37"
                              strokeWidth="0.8"
                              filter="drop-shadow(0 2px 6px rgba(0,0,0,0.4))"
                            />
                            <text
                              x="0"
                              y="-4"
                              fill="#FFFFFF"
                              fontSize="8"
                              fontWeight="bold"
                              textAnchor="middle"
                              letterSpacing="0.5"
                            >
                              {dest.code} • {dest.name.split(" ")[0]}
                            </text>
                          </g>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Bottom Floating Quick Card on Map */}
            <div className="relative z-20 mt-2 p-3 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-xs flex-shrink-0 bg-slate-900">
                  <img
                    src={currentFocus.image}
                    alt={currentFocus.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <img
                      src={`https://flagcdn.com/w40/${currentFocus.code.toLowerCase()}.png`}
                      alt={currentFocus.name}
                      className="w-4 h-3 object-cover rounded shadow-2xs"
                    />
                    <h4 className="font-serif font-black text-navy-950 text-sm">
                      {currentFocus.name}
                    </h4>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      {currentFocus.visaType}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                    {currentFocus.tagline}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <a
                  href={`https://wa.me/923065602040?text=${encodeURIComponent(
                    `Hello Bilal Travels, I am interested in traveling to ${currentFocus.name}. Please share visa & tour package details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire Now</span>
                </a>
                <a
                  href="#visa-hub"
                  className="inline-flex items-center gap-1 bg-navy-950 hover:bg-navy-900 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-xs"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3 text-gold-400" />
                </a>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              RIGHT: COUNTRY DIRECTORY LIST (MATCHING USER REFERENCE SCREENSHOT)
          ----------------------------------------------------------------------- */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-white flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-gold-600" />
                  <h3 className="font-serif font-black text-lg text-navy-950 uppercase tracking-wide">
                    Country Directory
                  </h3>
                </div>
                <span className="text-[11px] font-mono font-bold text-slate-500 bg-ivory-100 px-2.5 py-1 rounded-full">
                  {displayedDestinations.length} Countries
                </span>
              </div>

              {/* 2-Column Alphabetical Country Directory */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin">
                {displayedDestinations.map((dest) => {
                  const isSelected = activeDestination.id === dest.id;
                  const isHovered = hoveredDestination?.id === dest.id;
                  const isHighlighted = isSelected || isHovered;

                  return (
                    <button
                      key={dest.id}
                      onClick={() => setActiveDestination(dest)}
                      onMouseEnter={() => setHoveredDestination(dest)}
                      onMouseLeave={() => setHoveredDestination(null)}
                      className={`group w-full text-left px-3 py-2 rounded-xl transition-all flex items-center justify-between text-xs font-bold ${
                        isHighlighted
                          ? "bg-navy-950 text-white shadow-sm"
                          : "text-slate-800 hover:bg-gold-50/70 hover:text-navy-950"
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <img
                          src={`https://flagcdn.com/w40/${dest.code.toLowerCase()}.png`}
                          alt={dest.name}
                          className="w-4 h-3 object-cover rounded flex-shrink-0"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                        <span className="uppercase tracking-wider text-[11px] truncate">
                          {dest.name}
                        </span>
                      </div>

                      <span
                        className={`text-[9px] px-1.5 py-0.5 rounded-md font-mono ${
                          isHighlighted
                            ? "bg-gold-500 text-navy-950 font-black"
                            : "text-slate-400 group-hover:text-gold-700 font-medium"
                        }`}
                      >
                        {dest.processingTime.replace("Working Days", "d").replace("Work. Days", "d")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Destination Quick Highlight Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-ivory-100 via-ivory-50 to-white border border-gold-300/60 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-700">
                  Featured Overview
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-navy-950">
                  <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                  <span>Top Choice</span>
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="font-serif font-black text-navy-950 text-base">
                  {currentFocus.name}
                </h4>
                <p className="text-xs text-slate-600 leading-snug">
                  {currentFocus.tagline}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-200/60 text-[11px]">
                <div className="flex items-center gap-1.5 text-slate-600">
                  <Clock className="w-3.5 h-3.5 text-gold-600" />
                  <span>Time: <b>{currentFocus.processingTime}</b></span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Type: <b>{currentFocus.visaType}</b></span>
                </div>
              </div>

              <div className="pt-1">
                <Link
                  href={currentFocus.tourSlug || "/tours"}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-navy-950 hover:bg-gold-500 hover:text-navy-950 text-white font-bold text-xs transition-all shadow-xs group"
                >
                  <span>Explore {currentFocus.name} Tours</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-400 group-hover:text-navy-950 group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
