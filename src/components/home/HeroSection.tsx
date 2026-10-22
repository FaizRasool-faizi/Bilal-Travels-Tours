"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Plane,
  Sparkles,
  MapPin,
} from "lucide-react";

interface HeroSlide {
  id: string;
  image: string;
  country: string;
  flag: string;
  categoryBadge: string;
  headlineMain: string;
  headlineAccent: string;
  subtitle: string;
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
    flag: "🇸🇦",
    categoryBadge: "SACRED PILGRIMAGE | 5-STAR CLOCK TOWER | MAKKAH",
    headlineMain: "Sacred Steps Before",
    headlineAccent: "The Holy Kaaba",
    subtitle:
      "Perform your Umrah with divine tranquility. Zero-meter Haram proximity luxury stays, personalized guidance, and official Saudi visa processing.",
    primaryCtaText: "View Umrah Packages",
    primaryCtaHref: "/umrah",
    secondaryCtaText: "Plan Sacred Journey",
    secondaryCtaHref: "/contact?intent=umrah",
  },
  {
    id: "madina",
    image: "/images/Madina_shareef.jpeg",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    categoryBadge: "ZIYARAT & DEVOTION | ROZA-E-RASOOL (PBUH) | MADINAH",
    headlineMain: "The Blessed City of",
    headlineAccent: "Peace & Solace",
    subtitle:
      "Experience heartfelt serenity at the Prophet's Mosque. Luxury hotels steps from Bab as-Salam with escorted historical Islamic Ziyarat tours.",
    primaryCtaText: "Madinah Ziyarat Tours",
    primaryCtaHref: "/umrah",
    secondaryCtaText: "Book Pilgrimage",
    secondaryCtaHref: "/contact?intent=umrah",
  },
  {
    id: "dubai",
    image: "/images/dest-dubai.jpg",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    categoryBadge: "FUTURISTIC LUXURY | BURJ KHALIFA & MARINA | DUBAI",
    headlineMain: "Dream Bigger,",
    headlineAccent: "Travel Further",
    subtitle:
      "Marvel at architectural wonders, thrilling desert safaris, and luxury yacht cruises along Dubai Marina. Fast 24-hour e-Visa processing.",
    primaryCtaText: "Explore Dubai Tours",
    primaryCtaHref: "/tours?destination=dubai",
    secondaryCtaText: "Instant Visa Help",
    secondaryCtaHref: "/visa",
  },
  {
    id: "switzerland",
    image: "/images/dest-switzerland.jpg",
    country: "Switzerland",
    flag: "🇨🇭",
    categoryBadge: "ALPINE MAJESTY | SWISS ALPS & LAKES | SWITZERLAND",
    headlineMain: "Timeless Beauty in",
    headlineAccent: "The Swiss Alps",
    subtitle:
      "Journey aboard the Glacier Express across scenic viaducts, cruise pristine emerald lakes, and explore snowcapped peaks of Jungfraujoch and Titlis.",
    primaryCtaText: "Explore Swiss Holidays",
    primaryCtaHref: "/tours?destination=switzerland",
    secondaryCtaText: "Schengen Visa",
    secondaryCtaHref: "/visa",
  },
  {
    id: "paris",
    image: "/images/hero-paris.jpg",
    country: "France",
    flag: "🇫🇷",
    categoryBadge: "EUROPEAN ROMANCE | EIFFEL TOWER & SEINE | PARIS",
    headlineMain: "City of Lights &",
    headlineAccent: "Unrivaled Elegance",
    subtitle:
      "Cruise along the Seine at sunset, marvel at the illuminated Eiffel Tower, and stroll the historic Champs-Élysées with curated luxury itineraries.",
    primaryCtaText: "Paris Vacation Packages",
    primaryCtaHref: "/tours?destination=paris",
    secondaryCtaText: "Plan European Tour",
    secondaryCtaHref: "/contact?intent=plan-trip",
  },
  {
    id: "london",
    image: "/images/hero-london.jpg",
    country: "United Kingdom",
    flag: "🇬🇧",
    categoryBadge: "ROYAL HERITAGE | BIG BEN & THAMES | LONDON",
    headlineMain: "Timeless Charm Along",
    headlineAccent: "The River Thames",
    subtitle:
      "Explore iconic landmarks from Big Ben to the Tower of London, world-class West End shows, and charming English countryside excursions.",
    primaryCtaText: "UK Tour Packages",
    primaryCtaHref: "/tours?destination=uk",
    secondaryCtaText: "UK Visa Consultancy",
    secondaryCtaHref: "/visa",
  },
  {
    id: "istanbul",
    image: "/images/hero-istanbul-sunset.jpg",
    country: "Türkiye",
    flag: "🇹🇷",
    categoryBadge: "CROSSROADS OF CIVILIZATION | BOSPHORUS | TÜRKİYE",
    headlineMain: "Where Continents &",
    headlineAccent: "Centuries Meet",
    subtitle:
      "Discover Hagia Sophia, cruise the sparkling Bosphorus, and fly over magical fairy chimneys in Cappadocia with all-inclusive guided packages.",
    primaryCtaText: "Explore Türkiye Tours",
    primaryCtaHref: "/tours?destination=turkey",
    secondaryCtaText: "Custom Itinerary",
    secondaryCtaHref: "/contact?intent=plan-trip",
  },
  {
    id: "baku",
    image: "/images/hero-baku.jpg",
    country: "Azerbaijan",
    flag: "🇦🇿",
    categoryBadge: "CASPIAN PEARL | FLAME TOWERS & SILK ROAD | AZERBAIJAN",
    headlineMain: "Modern Wonder on",
    headlineAccent: "The Caspian Sea",
    subtitle:
      "Walk the ancient stone streets of Old City Baku, witness the dazzling Flame Towers, and take scenic mountain rides to the green valleys of Gabala.",
    primaryCtaText: "Baku & Gabala Deals",
    primaryCtaHref: "/tours?destination=azerbaijan",
    secondaryCtaText: "Easy e-Visa in 3 Days",
    secondaryCtaHref: "/visa",
  },
  {
    id: "malaysia",
    image: "/images/seeview_malysia.jpeg",
    country: "Malaysia",
    flag: "🇲🇾",
    categoryBadge: "TROPICAL ESCAPE | ISLANDS & RAINFORESTS | MALAYSIA",
    headlineMain: "Emerald Waters,",
    headlineAccent: "Tropical Bliss",
    subtitle:
      "Unwind on the pristine white-sand shores of Langkawi, take the panoramic SkyCab cable car, and explore the bustling skyline of Kuala Lumpur.",
    primaryCtaText: "Malaysia Family Tours",
    primaryCtaHref: "/tours?destination=malaysia",
    secondaryCtaText: "Plan Honeymoon",
    secondaryCtaHref: "/contact?intent=plan-trip",
  },
];

export default function HeroSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const SLIDE_DURATION_MS = 30000; // 30 seconds auto-advance

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION_MS);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  return (
    <section className="relative min-h-[460px] lg:min-h-[520px] flex items-center bg-[#FAF8F3] overflow-hidden">
      {/* =========================================================================
          30-SECOND SLIDE DURATION PROGRESS BAR (TOP HAIRLINE INDICATOR)
      ========================================================================= */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gold-400/20 z-30 overflow-hidden">
        <div
          key={`progress-${currentSlideIndex}`}
          className="h-full bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 animate-slide-progress shadow-[0_0_8px_rgba(200,163,94,0.7)]"
        ></div>
      </div>

      {/* =========================================================================
          RIGHT-SIDE BACKGROUND SLIDESHOW WITH KEN BURNS MOTION & CROSS-FADE (30 SECONDS)
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
        <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#FAF8F3]/80 to-transparent pointer-events-none z-20"></div>
        {/* Bottom subtle fade into the pill bar area */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAF8F3] via-[#FAF8F3]/80 to-transparent pointer-events-none z-20"></div>

        {/* Golden Orbital Flight Arc & Meridian Lines Overlay with Smooth Airplane Flight */}
        <div className="absolute inset-0 pointer-events-none hidden md:block z-20">
          <svg
            className="absolute right-6 top-6 w-[420px] h-[420px] lg:w-[540px] lg:h-[540px] opacity-35 text-gold-400"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="250" cy="250" r="210" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />
            <ellipse cx="250" cy="250" rx="140" ry="210" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
            <ellipse cx="250" cy="250" rx="70" ry="210" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <line x1="40" y1="250" x2="460" y2="250" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
            <path
              d="M 50 420 Q 240 80 430 70"
              stroke="#B58B45"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              filter="drop-shadow(0 0 8px rgba(181,139,69,0.8))"
            />
          </svg>

          {/* Animated Airplane floating smoothly along flight path */}
          <div className="absolute right-14 top-14 lg:right-24 lg:top-16 text-white drop-shadow-[0_4px_10px_rgba(16,45,79,0.5)] animate-flight-glide">
            <Plane className="w-7 h-7 fill-white text-navy-900" />
          </div>
        </div>

        {/* Current Destination Micro-Badge (Bottom Right) */}
        <div className="absolute bottom-5 right-6 z-30 hidden sm:flex items-center gap-2 bg-navy-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-white shadow-card">
          <span className="text-sm">{currentSlide.flag}</span>
          <span className="text-xs font-semibold text-ivory-100 tracking-wide">
            {currentSlide.country}
          </span>
          <span className="text-gold-400 text-xs font-mono">
            {currentSlideIndex + 1}/{HERO_SLIDES.length}
          </span>
        </div>
      </div>

      {/* =========================================================================
          HERO CONTENT (COMPACT, PURE & CLEAN LEFT COLUMN - NO WATERMARK FLAG)
      ========================================================================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-10 lg:py-12 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          {/* DYNAMIC TEXT CONTENT WITH SILKY SMOOTH SLIDE ENTRANCE ANIMATION */}
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
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-navy-900 tracking-tight leading-[1.15]">
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
                className="inline-flex items-center justify-center gap-2.5 bg-navy-950 hover:bg-navy-900 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full border border-gold-400/40 shadow-card hover:shadow-hover hover:border-gold-400 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-gold-600 to-amber-300 text-navy-950 flex items-center justify-center shadow-sm flex-shrink-0 group-hover:rotate-12 transition-transform">
                  <ArrowRight className="w-3 h-3 text-navy-950" />
                </div>
                <span>{currentSlide.primaryCtaText}</span>
              </Link>

              <Link
                href={currentSlide.secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white text-navy-900 font-semibold text-xs sm:text-sm px-6 py-3 rounded-full border border-border-muted hover:border-gold-400 shadow-sm transition-all duration-300"
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
