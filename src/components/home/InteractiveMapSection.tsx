"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Compass,
  MapPin,
  Plus,
  Minus,
  RotateCcw,
  ArrowRight,
  MessageCircle,
  Clock,
  CheckCircle2,
  Globe2,
  Layers,
  Star,
  Plane,
} from "lucide-react";

export interface MapDestination {
  id: string;
  name: string;
  code: string;
  flag: string;
  region: "Middle East" | "Asia" | "Europe" | "Africa";
  tagline: string;
  image: string;
  x: number; // SVG coordinate in world.svg (0 - 2000)
  y: number; // SVG coordinate in world.svg (0 - 857)
  visaType: string;
  processingTime: string;
  validity: string;
  tourSlug?: string;
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
    x: 1296,
    y: 340,
    visaType: "30 & 60 Days E.Visa",
    processingTime: "24–48 Hours",
    validity: "60 Days Validity",
    tourSlug: "/tours?destination=dubai",
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
    x: 1245,
    y: 350,
    visaType: "1 Yr Multiple / Umrah",
    processingTime: "24–48 Hours",
    validity: "365 Days Multiple",
    tourSlug: "/umrah",
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
    x: 1040,
    y: 205,
    visaType: "Schengen Visa Type C",
    processingTime: "15–21 Work. Days",
    validity: "90 Days Stay",
    tourSlug: "/tours?destination=switzerland",
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
    x: 1585,
    y: 460,
    visaType: "30 Days E.Visa",
    processingTime: "3 Work. Days",
    validity: "30–180 Days",
    tourSlug: "/tours?destination=malaysia",
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
    x: 1235,
    y: 245,
    visaType: "Instant E.Visa",
    processingTime: "3–5 Work. Days",
    validity: "30 Days",
    tourSlug: "/tours?destination=azerbaijan",
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
    x: 1165,
    y: 245,
    visaType: "Sticker & E.Visa",
    processingTime: "10–15 Work. Days",
    validity: "90 Days Validity",
    tourSlug: "/tours?destination=turkey",
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
    x: 1565,
    y: 395,
    visaType: "Sticker & DTV Nomad",
    processingTime: "7–10 Work. Days",
    validity: "30–60 Days",
    tourSlug: "/tours",
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
    x: 1640,
    y: 555,
    visaType: "60 Days E.Visa",
    processingTime: "7–15 Work. Days",
    validity: "60 Days / 1 Yr Mul",
    tourSlug: "/tours",
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
    x: 1590,
    y: 472,
    visaType: "Paperless E.Visa",
    processingTime: "4–5 Work. Days",
    validity: "30 Days Stay",
    tourSlug: "/tours",
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
    x: 980,
    y: 175,
    visaType: "Standard Visitor Visa",
    processingTime: "15–20 Work. Days",
    validity: "6 Months Multiple",
    tourSlug: "/tours?destination=uk",
    highlights: ["Big Ben", "Tower Bridge", "Westminster Abbey"],
  },
  {
    id: "france",
    name: "France",
    code: "FR",
    flag: "🇫🇷",
    region: "Europe",
    tagline: "Eiffel Tower, Seine Sunset & Louvre Museum",
    image: "/images/hero-paris.jpg",
    x: 1005,
    y: 215,
    visaType: "Schengen Visa Type C",
    processingTime: "15–25 Work. Days",
    validity: "90 Days Stay",
    tourSlug: "/tours",
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
    x: 1198,
    y: 295,
    visaType: "Express E.Visa",
    processingTime: "3–5 Work. Days",
    validity: "30 Days Stay",
    tourSlug: "/tours",
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
    x: 1285,
    y: 335,
    visaType: "Fast E.Visa / 365 Days",
    processingTime: "7–10 Work. Days",
    validity: "14–365 Days",
    tourSlug: "/tours",
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
    x: 1305,
    y: 360,
    visaType: "90 Days E.Visa",
    processingTime: "8–10 Work. Days",
    validity: "90 Days Stay",
    tourSlug: "/tours",
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
    x: 1223,
    y: 480,
    visaType: "Electronic Travel ETA",
    processingTime: "10–15 Work. Days",
    validity: "30 Days Stay",
    tourSlug: "/tours",
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
    x: 1445,
    y: 445,
    visaType: "Tourist ETA",
    processingTime: "5–15 Work. Days",
    validity: "30 Days Stay",
    tourSlug: "/tours",
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
    x: 1585,
    y: 410,
    visaType: "Instant 30d E.Visa",
    processingTime: "7–10 Work. Days",
    validity: "30 Days Stay",
    tourSlug: "/tours",
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
    x: 1586,
    y: 380,
    visaType: "30 Days E.Visa",
    processingTime: "7–10 Work. Days",
    validity: "30 Days Stay",
    tourSlug: "/tours",
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
    x: 1720,
    y: 260,
    visaType: "Tourist Visa",
    processingTime: "10–14 Work. Days",
    validity: "90 Days Validity",
    tourSlug: "/tours",
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
    x: 1270,
    y: 344,
    visaType: "Visa On Arrival / Hayya",
    processingTime: "Instant / 24h",
    validity: "30–90 Days",
    tourSlug: "/tours",
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
    x: 1580,
    y: 270,
    visaType: "Business & Tourist L",
    processingTime: "7–10 Work. Days",
    validity: "30–90 Days",
    tourSlug: "/tours",
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
    x: 1180,
    y: 330,
    visaType: "Instant E.Visa / Sticker",
    processingTime: "5–7 Work. Days",
    validity: "30 Days Single/Mul",
    tourSlug: "/tours",
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
    x: 1450,
    y: 320,
    visaType: "On Arrival / Online ETA",
    processingTime: "Instant / 48h",
    validity: "15–90 Days",
    tourSlug: "/tours",
    highlights: ["Pokhara", "Kathmandu Durbar", "Everest View"],
  },
];

type RegionFilter = "all" | "Middle East" | "Asia" | "Europe" | "Africa";

export default function InteractiveMapSection() {
  const [selectedRegion, setSelectedRegion] = useState<RegionFilter>("all");
  const [activeDestination, setActiveDestination] = useState<MapDestination>(MAP_DESTINATIONS[0]);
  const [hoveredDestination, setHoveredDestination] = useState<MapDestination | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [svgHtml, setSvgHtml] = useState<string>("");

  // Load the authentic world vector map
  useEffect(() => {
    let isMounted = true;
    fetch("/world.svg")
      .then((res) => res.text())
      .then((svgText) => {
        if (!isMounted) return;
        const cleanSvg = svgText
          .replace(/viewbox="[^"]*"/i, 'viewBox="880 70 970 480"')
          .replace(/<svg\b([^>]*)>/i, '<svg $1 class="real-world-svg w-full h-full select-none" preserveAspectRatio="xMidYMid meet">');
        setSvgHtml(cleanSvg);
      })
      .catch((err) => {
        console.error("Failed to load map vector:", err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const displayedDestinations = useMemo(() => {
    const list =
      selectedRegion === "all"
        ? MAP_DESTINATIONS
        : MAP_DESTINATIONS.filter((d) => d.region === selectedRegion);
    // Alphabetical order matching user reference image
    return [...list].sort((a, b) => a.name.localeCompare(b.name));
  }, [selectedRegion]);

  const currentFocus = hoveredDestination || activeDestination;

  // Zoom controls
  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.2));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.85));
  const handleResetZoom = () => setZoomLevel(1);

  // Map click interaction
  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest("path");
    if (!target) return;
    const code = target.getAttribute("id");
    const name = target.getAttribute("name");
    const className = target.getAttribute("class");
    const found = MAP_DESTINATIONS.find(
      (d) =>
        d.code === code ||
        (name && d.name.toLowerCase().includes(name.toLowerCase())) ||
        (className && d.name.toLowerCase().includes(className.toLowerCase()))
    );
    if (found) {
      setActiveDestination(found);
    }
  };

  return (
    <section id="interactive-map" className="py-20 sm:py-28 bg-[#FAFAF8] border-b border-border-muted relative overflow-hidden">
      {/* Global CSS for the authentic geographic map matching reference image */}
      <style jsx global>{`
        .real-world-svg {
          width: 100%;
          height: 100%;
          display: block;
        }
        /* Default subtle slate land */
        .real-world-svg path {
          fill: #dbe4ee;
          stroke: #ffffff;
          stroke-width: 0.4px;
          transition: fill 0.2s ease, filter 0.2s ease;
          cursor: pointer;
        }
        /* Deep luxury navy for entire Asia / Middle East landmass exactly matching user reference */
        .real-world-svg path[id="CN"],
        .real-world-svg path.China,
        .real-world-svg path[id="IN"],
        .real-world-svg path.India,
        .real-world-svg path[id="PK"],
        .real-world-svg path.Pakistan,
        .real-world-svg path[id="SA"],
        .real-world-svg path[class*="Saudi"],
        .real-world-svg path[id="AE"],
        .real-world-svg path[id="TR"],
        .real-world-svg path.Turkey,
        .real-world-svg path[id="TH"],
        .real-world-svg path.Thailand,
        .real-world-svg path[id="MY"],
        .real-world-svg path.Malaysia,
        .real-world-svg path[id="ID"],
        .real-world-svg path.Indonesia,
        .real-world-svg path[id="SG"],
        .real-world-svg path[id="JP"],
        .real-world-svg path.Japan,
        .real-world-svg path[id="AZ"],
        .real-world-svg path.Azerbaijan,
        .real-world-svg path[id="QA"],
        .real-world-svg path[id="OM"],
        .real-world-svg path.Oman,
        .real-world-svg path[id="EG"],
        .real-world-svg path[id="KE"],
        .real-world-svg path[id="VN"],
        .real-world-svg path[id="KH"],
        .real-world-svg path[id="LK"],
        .real-world-svg path[id="NP"],
        .real-world-svg path[id="JO"],
        .real-world-svg path[id="BH"],
        .real-world-svg path[id="BD"],
        .real-world-svg path[id="UZ"],
        .real-world-svg path[id="KZ"],
        .real-world-svg path[id="RU"],
        .real-world-svg path.Russia,
        .real-world-svg path[id="MN"],
        .real-world-svg path[id="AF"],
        .real-world-svg path[id="IR"],
        .real-world-svg path[id="IQ"],
        .real-world-svg path[id="SY"],
        .real-world-svg path[id="YE"],
        .real-world-svg path[id="TM"],
        .real-world-svg path[id="TJ"],
        .real-world-svg path[id="KG"],
        .real-world-svg path[id="MM"],
        .real-world-svg path[id="LA"],
        .real-world-svg path[id="PH"],
        .real-world-svg path.Philippines,
        .real-world-svg path[id="KP"],
        .real-world-svg path[id="KR"],
        .real-world-svg path[id="TW"],
        .real-world-svg path[id="BT"],
        .real-world-svg path[id="BN"],
        .real-world-svg path[id="GE"],
        .real-world-svg path.Georgia,
        .real-world-svg path[id="AM"],
        .real-world-svg path[id="GB"],
        .real-world-svg path[id="FR"],
        .real-world-svg path[id="CH"],
        .real-world-svg path[id="DE"],
        .real-world-svg path[id="IT"] {
          fill: #0F1F38;
          stroke: #1E3A5F;
          stroke-width: 0.5px;
        }
        /* Hovered country in gleaming gold */
        .real-world-svg path:hover {
          fill: #d4af37 !important;
          stroke: #b8860b !important;
          stroke-width: 0.8px !important;
          filter: drop-shadow(0 2px 6px rgba(212, 175, 55, 0.45));
        }
        /* Highlight currently active country */
        .real-world-svg path[id="${activeDestination.code}"],
        .real-world-svg path[class*="${activeDestination.name.split(' ')[0]}"] {
          fill: #d4af37 !important;
          stroke: #996515 !important;
          stroke-width: 1px !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10 sm:space-y-12">
        {/* =========================================================================
            1. SECTION HEADER (MATCHING USER REFERENCE SCREENSHOT)
        ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gold-400/40 text-gold-700 text-[11px] font-bold tracking-widest uppercase shadow-xs">
            <Compass className="w-3.5 h-3.5 text-gold-600 animate-spin-slow" />
            <span>Interactive World &amp; Regional Atlas</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-navy-950 tracking-tight leading-tight">
            Discover sides of the world you never knew existed,
            <span className="block font-serif italic text-gold-600 font-normal mt-1.5 text-2xl sm:text-3xl lg:text-[36px]">
              revealed by people who know every facet.
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Select any destination below or click on the interactive vector map to view visa processing timelines,
            entry requirements, and bespoke travel itineraries from Lahore.
          </p>
        </div>

        {/* =========================================================================
            2. REGION TABS (All, Middle East, Asia, Europe, Africa)
        ========================================================================= */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedRegion("all")}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-xs ${
              selectedRegion === "all"
                ? "bg-navy-950 text-white shadow-md ring-2 ring-navy-950/20"
                : "bg-white text-navy-900 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            All Destinations ({MAP_DESTINATIONS.length})
          </button>

          <button
            onClick={() => setSelectedRegion("Middle East")}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-xs ${
              selectedRegion === "Middle East"
                ? "bg-navy-950 text-white shadow-md ring-2 ring-navy-950/20"
                : "bg-white text-navy-900 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Middle East &amp; Umrah
          </button>

          <button
            onClick={() => setSelectedRegion("Asia")}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-xs ${
              selectedRegion === "Asia"
                ? "bg-navy-950 text-white shadow-md ring-2 ring-navy-950/20"
                : "bg-white text-navy-900 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Asia &amp; Far East
          </button>

          <button
            onClick={() => setSelectedRegion("Europe")}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-xs ${
              selectedRegion === "Europe"
                ? "bg-navy-950 text-white shadow-md ring-2 ring-navy-950/20"
                : "bg-white text-navy-900 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Europe &amp; UK
          </button>

          <button
            onClick={() => setSelectedRegion("Africa")}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-xs ${
              selectedRegion === "Africa"
                ? "bg-navy-950 text-white shadow-md ring-2 ring-navy-950/20"
                : "bg-white text-navy-900 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Africa (Safari &amp; Egypt)
          </button>
        </div>

        {/* =========================================================================
            3. MAIN INTERACTIVE MAP & DIRECTORY SPLIT (MATCHING REFERENCE IMAGE)
        ========================================================================= */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
          {/* -----------------------------------------------------------------------
              LEFT: REAL GEOGRAPHIC VECTOR MAP (COL-SPAN 7)
          ----------------------------------------------------------------------- */}
          <div className="lg:col-span-7 relative bg-[#F8FAFC] p-4 sm:p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200 overflow-hidden min-h-[440px] sm:min-h-[520px]">
            {/* Map Controls: Reset, Zoom In (+), Zoom Out (-) */}
            <div className="absolute top-5 left-5 z-30 flex flex-col gap-1.5 bg-white/95 backdrop-blur-md p-1.5 rounded-xl border border-slate-200 shadow-md">
              <button
                onClick={handleResetZoom}
                className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center text-navy-950 transition-colors"
                title="Reset View"
                aria-label="Reset Map"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <div className="h-px bg-slate-200 mx-1" />
              <button
                onClick={handleZoomIn}
                className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center text-navy-950 font-bold text-base transition-colors"
                title="Zoom In"
                aria-label="Zoom In"
              >
                <Plus className="w-4 h-4" />
              </button>
              <button
                onClick={handleZoomOut}
                className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center text-navy-950 font-bold text-base transition-colors"
                title="Zoom Out"
                aria-label="Zoom Out"
              >
                <Minus className="w-4 h-4" />
              </button>
            </div>

            {/* Region Label Pill (Top Right on Map) */}
            <div className="absolute top-5 right-5 z-30 hidden sm:flex items-center gap-2 bg-navy-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white shadow-md">
              <Globe2 className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-xs font-bold tracking-wide capitalize">
                {selectedRegion === "all" ? "Worldwide Network" : `${selectedRegion} Hub`}
              </span>
            </div>

            {/* SVG Interactive Map Container */}
            <div
              className="relative w-full h-full flex items-center justify-center overflow-hidden py-2"
              onClick={handleMapClick}
            >
              <div
                className="w-full h-full transition-transform duration-500 ease-out origin-center flex items-center justify-center relative"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                {/* 1. Underlying Real Geographic Country Vector Map */}
                {svgHtml ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: svgHtml }}
                    className="w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs font-mono">
                    Loading geographic map...
                  </div>
                )}

                {/* 2. Overlay Layer for Flight Route Arcs, Hubs & Glowing Radar Beacons */}
                <svg
                  viewBox="880 70 970 480"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient id="goldBeacon" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Flight Route Arcs connecting Lahore Hub (1370, 310) to active destinations */}
                  <g opacity="0.4" stroke="#D4AF37" strokeWidth="1.2" strokeDasharray="4 4">
                    <path d="M 1370 310 Q 1330 320 1296 340" /> {/* UAE */}
                    <path d="M 1370 310 Q 1300 320 1245 350" /> {/* Saudi Arabia */}
                    <path d="M 1370 310 Q 1240 260 1165 245" /> {/* Turkey */}
                    <path d="M 1370 310 Q 1180 230 1040 205" /> {/* Switzerland */}
                    <path d="M 1370 310 Q 1140 220 980 175" />  {/* UK */}
                    <path d="M 1370 310 Q 1500 380 1585 460" /> {/* Malaysia */}
                    <path d="M 1370 310 Q 1480 340 1565 395" /> {/* Thailand */}
                    <path d="M 1370 310 Q 1600 270 1720 260" /> {/* Japan */}
                    <path d="M 1370 310 Q 1550 450 1640 555" /> {/* Bali */}
                  </g>

                  {/* Lahore Hub Beacon Pin */}
                  <g transform="translate(1370, 310)">
                    <circle r="4.5" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5" />
                    <circle r="9" stroke="#10B981" strokeWidth="1.2" opacity="0.6" />
                    <text
                      y="-8"
                      fill="#10B981"
                      fontSize="9"
                      fontWeight="bold"
                      textAnchor="middle"
                      className="font-mono tracking-wider"
                    >
                      LAHORE
                    </text>
                  </g>

                  {/* Destination Beacon Pins */}
                  {displayedDestinations.map((dest) => {
                    const isSelected = activeDestination.id === dest.id;
                    const isHovered = hoveredDestination?.id === dest.id;
                    const isHighlighted = isSelected || isHovered;

                    return (
                      <g
                        key={dest.id}
                        transform={`translate(${dest.x}, ${dest.y})`}
                        className="pointer-events-auto cursor-pointer"
                        onMouseEnter={() => setHoveredDestination(dest)}
                        onMouseLeave={() => setHoveredDestination(null)}
                        onClick={() => setActiveDestination(dest)}
                      >
                        {/* Golden pulsating radar beacon on active pin */}
                        {isHighlighted && (
                          <>
                            <circle
                              r="20"
                              fill="url(#goldBeacon)"
                              className="animate-ping"
                            />
                            <circle
                              r="13"
                              stroke="#D4AF37"
                              strokeWidth="1.5"
                              fill="none"
                              opacity="0.8"
                            />
                          </>
                        )}

                        {/* Outer Pin */}
                        <circle
                          r={isHighlighted ? "7" : "4.5"}
                          fill={isHighlighted ? "#D4AF37" : "#FFFFFF"}
                          stroke="#0F1F38"
                          strokeWidth={isHighlighted ? "2" : "1.5"}
                          filter="drop-shadow(0 2px 4px rgba(0,0,0,0.4))"
                        />

                        {/* Inner Dot */}
                        <circle
                          r={isHighlighted ? "3" : "2"}
                          fill={isHighlighted ? "#0F1F38" : "#D4AF37"}
                        />

                        {/* Floating Country Code Tag when highlighted */}
                        {isHighlighted && (
                          <g transform="translate(0, -14)">
                            <rect
                              x="-38"
                              y="-16"
                              width="76"
                              height="18"
                              rx="9"
                              fill="#0F1F38"
                              stroke="#D4AF37"
                              strokeWidth="1"
                              filter="drop-shadow(0 2px 6px rgba(0,0,0,0.5))"
                            />
                            <text
                              x="0"
                              y="-4"
                              fill="#FFFFFF"
                              fontSize="8.5"
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
            <div className="relative z-30 mt-2 p-3 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
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
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
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
                <span className="text-[11px] font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  {displayedDestinations.length} Countries
                </span>
              </div>

              {/* 2-Column Alphabetical Country Directory matching Reference Image */}
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
                          : "text-slate-800 hover:bg-amber-50 hover:text-navy-950"
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
            <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 via-slate-50/50 to-white border border-gold-300/60 shadow-xs space-y-3">
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
