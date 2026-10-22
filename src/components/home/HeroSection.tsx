"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle2,
} from "lucide-react";

interface HeroSlide {
  id: string;
  image: string;
  country: string;
  code: string;
  flag: string;
  categoryBadge: string;
  headlineMain: string;
  headlineAccent: string;
  subtitle: string;
  highlightSpot: string;
  quickPerk: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "mecca",
    image: "/images/Mecca.jpeg",
    country: "Saudi Arabia",
    code: "SA",
    flag: "🇸🇦",
    categoryBadge: "SACRED PILGRIMAGE | 5-STAR CLOCK TOWER | MAKKAH",
    headlineMain: "Sacred Steps Before",
    headlineAccent: "The Holy Kaaba",
    subtitle:
      "Perform your Umrah with divine tranquility. Zero-meter Haram proximity luxury stays, personalized guidance, and official Saudi visa processing.",
    highlightSpot: "Zero-Meter Clock Tower & Kaaba View",
    quickPerk: "VIP 5-Star Guided Umrah",
    primaryCtaText: "View Umrah Packages",
    primaryCtaHref: "/umrah",
    secondaryCtaText: "Plan Sacred Journey",
    secondaryCtaHref: "/contact?intent=umrah",
  },
  {
    id: "madina",
    image: "/images/Madina_shareef.jpeg",
    country: "Saudi Arabia",
    code: "SA",
    flag: "🇸🇦",
    categoryBadge: "ZIYARAT & DEVOTION | ROZA-E-RASOOL (PBUH) | MADINAH",
    headlineMain: "The Blessed City of",
    headlineAccent: "Peace & Solace",
    subtitle:
      "Experience heartfelt serenity at the Prophet's Mosque. Luxury hotels steps from Bab as-Salam with escorted historical Islamic Ziyarat tours.",
    highlightSpot: "Roza-e-Rasool (PBUH) & Sacred Ziyarat",
    quickPerk: "Escorted Historical Tours",
    primaryCtaText: "Madinah Ziyarat Tours",
    primaryCtaHref: "/umrah",
    secondaryCtaText: "Book Pilgrimage",
    secondaryCtaHref: "/contact?intent=umrah",
  },
  {
    id: "dubai",
    image: "/images/dest-dubai.jpg",
    country: "United Arab Emirates",
    code: "AE",
    flag: "🇦🇪",
    categoryBadge: "FUTURISTIC LUXURY | BURJ KHALIFA & MARINA | DUBAI",
    headlineMain: "Dream Bigger,",
    headlineAccent: "Travel Further",
    subtitle:
      "Marvel at architectural wonders, thrilling desert safaris, and luxury yacht cruises along Dubai Marina. Fast 24-hour e-Visa processing.",
    highlightSpot: "Burj Khalifa & Marina Yacht Sunset",
    quickPerk: "24-48h Express Visit Visa Filing",
    primaryCtaText: "Explore Dubai Tours",
    primaryCtaHref: "/tours?destination=dubai",
    secondaryCtaText: "Instant Visa Help",
    secondaryCtaHref: "/visa",
  },
  {
    id: "switzerland",
    image: "/images/dest-switzerland.jpg",
    country: "Switzerland",
    code: "CH",
    flag: "🇨🇭",
    categoryBadge: "ALPINE MAJESTY | SWISS ALPS & LAKES | SWITZERLAND",
    headlineMain: "Timeless Beauty in",
    headlineAccent: "The Swiss Alps",
    subtitle:
      "Journey aboard the Glacier Express across scenic viaducts, cruise pristine emerald lakes, and explore snowcapped peaks of Jungfraujoch and Titlis.",
    highlightSpot: "Glacier Express & Jungfraujoch Peak",
    quickPerk: "Swiss Travel Pass Itinerary",
    primaryCtaText: "Explore Swiss Holidays",
    primaryCtaHref: "/tours?destination=switzerland",
    secondaryCtaText: "Schengen Visa",
    secondaryCtaHref: "/visa",
  },
  {
    id: "paris",
    image: "/images/hero-paris.jpg",
    country: "France",
    code: "FR",
    flag: "🇫🇷",
    categoryBadge: "EUROPEAN ROMANCE | EIFFEL TOWER & SEINE | PARIS",
    headlineMain: "City of Lights &",
    headlineAccent: "Unrivaled Elegance",
    subtitle:
      "Cruise along the Seine at sunset, marvel at the illuminated Eiffel Tower, and stroll the historic Champs-Élysées with curated luxury itineraries.",
    highlightSpot: "Eiffel Tower Sunset & Seine River Cruise",
    quickPerk: "Curated Luxury Honeymoons",
    primaryCtaText: "Paris Vacation Packages",
    primaryCtaHref: "/tours?destination=paris",
    secondaryCtaText: "Plan European Tour",
    secondaryCtaHref: "/contact?intent=plan-trip",
  },
  {
    id: "london",
    image: "/images/hero-london.jpg",
    country: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    categoryBadge: "ROYAL HERITAGE | BIG BEN & THAMES | LONDON",
    headlineMain: "Timeless Charm Along",
    headlineAccent: "The River Thames",
    subtitle:
      "Explore iconic landmarks from Big Ben to the Tower of London, world-class West End shows, and charming English countryside excursions.",
    highlightSpot: "Big Ben, Westminster & Tower Bridge",
    quickPerk: "6 Months Multiple Standard Visitor",
    primaryCtaText: "UK Tour Packages",
    primaryCtaHref: "/tours?destination=uk",
    secondaryCtaText: "UK Visa Consultancy",
    secondaryCtaHref: "/visa",
  },
  {
    id: "istanbul",
    image: "/images/hero-istanbul-sunset.jpg",
    country: "Türkiye",
    code: "TR",
    flag: "🇹🇷",
    categoryBadge: "CROSSROADS OF CIVILIZATION | BOSPHORUS | TÜRKİYE",
    headlineMain: "Where Continents &",
    headlineAccent: "Centuries Meet",
    subtitle:
      "Discover Hagia Sophia, cruise the sparkling Bosphorus, and fly over magical fairy chimneys in Cappadocia with all-inclusive guided packages.",
    highlightSpot: "Bosphorus Cruise & Cappadocia Valleys",
    quickPerk: "Urdu Speaking VIP Tour Guides",
    primaryCtaText: "Explore Türkiye Tours",
    primaryCtaHref: "/tours?destination=turkey",
    secondaryCtaText: "Custom Itinerary",
    secondaryCtaHref: "/contact?intent=plan-trip",
  },
  {
    id: "baku",
    image: "/images/hero-baku.jpg",
    country: "Azerbaijan",
    code: "AZ",
    flag: "🇦🇿",
    categoryBadge: "CASPIAN PEARL | FLAME TOWERS & SILK ROAD | AZERBAIJAN",
    headlineMain: "Modern Wonder on",
    headlineAccent: "The Caspian Sea",
    subtitle:
      "Walk the ancient stone streets of Old City Baku, witness the dazzling Flame Towers, and take scenic mountain rides to the green valleys of Gabala.",
    highlightSpot: "Flame Towers & Gabala Mountain Cable Car",
    quickPerk: "3-5 Days Express e-Visa Filing",
    primaryCtaText: "Baku & Gabala Deals",
    primaryCtaHref: "/tours?destination=azerbaijan",
    secondaryCtaText: "Easy e-Visa in 3 Days",
    secondaryCtaHref: "/visa",
  },
  {
    id: "malaysia",
    image: "/images/seeview_malysia.jpeg",
    country: "Malaysia",
    code: "MY",
    flag: "🇲🇾",
    categoryBadge: "TROPICAL ESCAPE | ISLANDS & RAINFORESTS | MALAYSIA",
    headlineMain: "Emerald Waters,",
    headlineAccent: "Tropical Bliss",
    subtitle:
      "Unwind on the pristine white-sand shores of Langkawi, take the panoramic SkyCab cable car, and explore the bustling skyline of Kuala Lumpur.",
    highlightSpot: "Petronas Twin Towers & Langkawi SkyCab",
    quickPerk: "All-Inclusive Family Holidays",
    primaryCtaText: "Malaysia Family Tours",
    primaryCtaHref: "/tours?destination=malaysia",
    secondaryCtaText: "Plan Honeymoon",
    secondaryCtaHref: "/contact?intent=plan-trip",
  },
];

export default function HeroSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const SLIDE_DURATION_MS = 7500; // 7.5 seconds smooth rotation

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION_MS);

    return () => clearInterval(timer);
  }, [isPaused]);

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  return (
    <section
      className="relative min-h-[490px] lg:min-h-[550px] flex items-center bg-[#FAF8F3] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =========================================================================
          SLIDE DURATION PROGRESS BAR (TOP HAIRLINE INDICATOR)
      ========================================================================= */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gold-400/20 z-30 overflow-hidden">
        <div
          key={`progress-${currentSlideIndex}`}
          className={`h-full bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 shadow-[0_0_10px_rgba(200,163,94,0.8)] ${
            isPaused ? "w-full opacity-60" : "animate-slide-progress"
          }`}
        ></div>
      </div>

      {/* =========================================================================
          RIGHT-SIDE BACKGROUND SLIDESHOW WITH CINEMATIC ZOOM & CROSS-FADE
      ========================================================================= */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[65%] select-none overflow-hidden">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlideIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <div
                className={`w-full h-full bg-cover bg-center bg-no-repeat ${
                  isActive ? "animate-ken-burns" : ""
                }`}
                style={{
                  backgroundImage: `url('${slide.image}')`,
                }}
              ></div>
            </div>
          );
        })}

        {/* Left Gradient Fade: Seamless transition into Warm Ivory base */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F3] via-[#FAF8F3]/75 to-transparent lg:via-[#FAF8F3]/30 pointer-events-none z-20"></div>
        {/* Top subtle fade */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FAF8F3]/80 to-transparent pointer-events-none z-20"></div>
        {/* Bottom subtle fade into the pill bar area */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FAF8F3] via-[#FAF8F3]/80 to-transparent pointer-events-none z-20"></div>

        {/* =========================================================================
            ANIMATED FLOATING GLASS CARDS (REPLACED THE AWKWARD WIRES & PLANE)
        ========================================================================= */}
        
        {/* Floating Glass Pill 1: Top Right (Certified Guidance & Dossier Review) */}
        <div className="absolute top-6 right-6 z-20 hidden md:flex items-center gap-2.5 bg-navy-950/85 backdrop-blur-md px-4 py-2 rounded-full border border-gold-400/30 text-white shadow-xl animate-float-slow">
          <div className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-gold-400" />
          </div>
          <div className="text-left text-xs">
            <span className="font-bold text-white tracking-wide">Certified Guidance</span>
            <span className="text-gold-300 text-[10px] block font-mono">Verified File Preparation</span>
          </div>
        </div>

        {/* Floating Spotlight Card 2: Lower Right Destination Spotlight */}
        <div className="absolute bottom-6 right-6 z-20 hidden sm:flex flex-col gap-2 bg-navy-950/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-white shadow-2xl max-w-xs animate-float-reverse">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <img
                src={`https://flagcdn.com/w40/${currentSlide.code.toLowerCase()}.png`}
                alt={currentSlide.country}
                className="w-5 h-3.5 object-cover rounded shadow-xs"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <span className="text-xs font-black text-white tracking-wide">
                {currentSlide.country}
              </span>
            </div>

            <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live Feature</span>
            </span>
          </div>

          <p className="text-[11px] text-ivory-200 font-medium line-clamp-1">
            📍 {currentSlide.highlightSpot}
          </p>

          <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[10px] text-slate-300">
            <span className="text-gold-300 font-bold flex items-center gap-1">
              <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
              <span>4.9/5 Rating</span>
            </span>
            <span className="font-mono text-slate-400">
              {currentSlideIndex + 1}/{HERO_SLIDES.length}
            </span>
          </div>
        </div>

      </div>

      {/* =========================================================================
          HERO CONTENT (CLEAN LEFT COLUMN WITH TYPOGRAPHY & ANIMATIONS)
      ========================================================================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-10 lg:py-12 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          {/* DYNAMIC TEXT CONTENT WITH SMOOTH SLIDE ENTRANCE ANIMATION */}
          <div
            key={`content-${currentSlide.id}`}
            className="space-y-4 animate-fade-in-up"
          >
            {/* Top Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-gold-400/50 shadow-sm text-gold-700 text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-shimmer-pulse" />
              <span>{currentSlide.categoryBadge}</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-navy-900 tracking-tight leading-[1.15]">
              {currentSlide.headlineMain} <br />
              <span className="text-navy-900 font-serif">{currentSlide.headlineAccent}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-lg min-h-[48px]">
              {currentSlide.subtitle}
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href={currentSlide.primaryCtaHref}
                className="inline-flex items-center justify-center gap-2.5 bg-navy-950 hover:bg-navy-900 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full border border-gold-400/40 shadow-card hover:shadow-hover hover:border-gold-400 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-gold-600 to-amber-300 text-navy-950 flex items-center justify-center shadow-sm flex-shrink-0 group-hover:rotate-12 transition-transform">
                  <ArrowRight className="w-3 h-3 text-navy-950" />
                </div>
                <span>{currentSlide.primaryCtaText}</span>
              </Link>

              <Link
                href={currentSlide.secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-ivory-50 text-navy-900 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full border border-border-muted hover:border-gold-400 shadow-sm transition-all duration-300"
              >
                <span>{currentSlide.secondaryCtaText}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
