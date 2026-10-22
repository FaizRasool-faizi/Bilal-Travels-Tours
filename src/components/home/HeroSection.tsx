"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Hologram3DPass from "@/components/ui/Hologram3DPass";

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
  animType: "zoom-in" | "zoom-out" | "pan-left" | "pan-right" | "pan-up";
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
    animType: "zoom-in",
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
    animType: "pan-left",
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
    animType: "zoom-out",
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
    animType: "pan-up",
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
    animType: "pan-right",
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
    animType: "zoom-in",
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
    animType: "pan-left",
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
    animType: "pan-up",
  },
  {
    id: "malaysia",
    image: "/images/seeview_malysia.jpeg",
    country: "Malaysia",
    code: "MY",
    flag: "🇲🇾",
    categoryBadge: "TROPICAL SPLENDOR | PETRONAS & LANGKAWI | MALAYSIA",
    headlineMain: "Tropical Wonder in",
    headlineAccent: "Enchanting Malaysia",
    subtitle:
      "Unwind on the pristine white-sand shores of Langkawi, take the panoramic SkyCab cable car, and explore the bustling skyline of Kuala Lumpur.",
    highlightSpot: "Petronas Twin Towers & Langkawi SkyCab",
    quickPerk: "All-Inclusive Family Holidays",
    primaryCtaText: "Malaysia Family Tours",
    primaryCtaHref: "/tours?destination=malaysia",
    secondaryCtaText: "Plan Honeymoon",
    secondaryCtaHref: "/contact?intent=plan-trip",
    animType: "zoom-out",
  },
];

// Helper to calculate distinct animation variants for each slide
function getSlideAnimationVariants(animType: HeroSlide["animType"]) {
  switch (animType) {
    case "zoom-in":
      return {
        initial: { opacity: 0, scale: 1.0 },
        animate: { opacity: 1, scale: 1.07 },
        exit: { opacity: 0, scale: 1.1 },
        transition: { duration: 1.2, ease: "easeInOut" as const },
      };
    case "zoom-out":
      return {
        initial: { opacity: 0, scale: 1.1 },
        animate: { opacity: 1, scale: 1.0 },
        exit: { opacity: 0, scale: 0.96 },
        transition: { duration: 1.2, ease: "easeInOut" as const },
      };
    case "pan-left":
      return {
        initial: { opacity: 0, x: 45, scale: 1.04 },
        animate: { opacity: 1, x: 0, scale: 1.0 },
        exit: { opacity: 0, x: -35, scale: 1.04 },
        transition: { duration: 1.2, ease: "easeOut" as const },
      };
    case "pan-right":
      return {
        initial: { opacity: 0, x: -45, scale: 1.04 },
        animate: { opacity: 1, x: 0, scale: 1.0 },
        exit: { opacity: 0, x: 35, scale: 1.04 },
        transition: { duration: 1.2, ease: "easeOut" as const },
      };
    case "pan-up":
      return {
        initial: { opacity: 0, y: 35, scale: 1.03 },
        animate: { opacity: 1, y: 0, scale: 1.0 },
        exit: { opacity: 0, y: -25, scale: 1.05 },
        transition: { duration: 1.2, ease: "easeOut" as const },
      };
  }
}

export default function HeroSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const SLIDE_DURATION_MS = 5500; // 5.5s smooth rotation

  const handleNext = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, SLIDE_DURATION_MS);

    return () => clearInterval(timer);
  }, [handleNext, currentSlideIndex]);

  const currentSlide = HERO_SLIDES[currentSlideIndex];
  const slideAnimation = getSlideAnimationVariants(currentSlide.animType);

  return (
    <section className="relative min-h-[520px] lg:min-h-[580px] flex items-center bg-[#FAF8F3] overflow-hidden">
      {/* Right Background Slideshow with Distinct Framer Motion Animation Variants */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[65%] select-none overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={slideAnimation.initial}
            animate={slideAnimation.animate}
            exit={slideAnimation.exit}
            transition={slideAnimation.transition}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${currentSlide.image}')` }}
          />
        </AnimatePresence>

        {/* Ambient Gradient Overlays for Seamless Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F3] via-[#FAF8F3]/80 to-transparent lg:via-[#FAF8F3]/30 pointer-events-none z-10" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#FAF8F3]/80 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FAF8F3] via-[#FAF8F3]/85 to-transparent pointer-events-none z-10" />

        {/* Top Right Certified Guidance Pill */}
        <div className="absolute top-6 right-6 z-20 hidden md:flex items-center gap-2.5 bg-navy-950/85 backdrop-blur-md px-4 py-2 rounded-full border border-gold-400/30 text-white shadow-xl animate-float-slow">
          <div className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-gold-400" />
          </div>
          <div className="text-left text-xs">
            <span className="font-bold text-white tracking-wide">Certified Guidance</span>
            <span className="text-gold-300 text-[10px] block font-mono">DTS Licensed Travel Desk</span>
          </div>
        </div>

        {/* Floating Interactive 3D Hologram Travel Pass */}
        <div className="absolute bottom-10 right-6 z-20 hidden lg:block animate-float-3d">
          <Hologram3DPass
            currentSlideCountry={currentSlide.country}
            destinationCode={
              currentSlide.id === "mecca" || currentSlide.id === "madina"
                ? "JED"
                : currentSlide.id === "dubai"
                ? "DXB"
                : currentSlide.id === "switzerland"
                ? "ZRH"
                : currentSlide.id === "paris"
                ? "CDG"
                : currentSlide.id === "london"
                ? "LHR"
                : currentSlide.id === "istanbul"
                ? "IST"
                : currentSlide.id === "baku"
                ? "GYD"
                : "KUL"
            }
          />
        </div>
      </div>

      {/* Hero Content (Left Column with Framer Motion text reveal) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-4"
            >
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-gold-400/50 shadow-sm text-gold-700 text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-shimmer-pulse" />
                <span>{currentSlide.categoryBadge}</span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-navy-900 tracking-tight leading-[1.14]">
                {currentSlide.headlineMain} <br />
                <span className="text-gold-600 font-serif">{currentSlide.headlineAccent}</span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-lg min-h-[48px]">
                {currentSlide.subtitle}
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
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
            </motion.div>
          </AnimatePresence>

          {/* Destination Quick Selector Pills - Clean Flex Wrap with No Scrollbar */}
          <div className="pt-8 flex flex-wrap items-center gap-2 max-w-xl">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                  idx === currentSlideIndex
                    ? "bg-navy-950 text-white shadow-md border border-gold-400/40 scale-105"
                    : "bg-white/90 text-slate-600 hover:text-navy-950 border border-slate-200/80 hover:border-gold-400 shadow-xs"
                }`}
              >
                <span>{slide.flag}</span>
                <span className="text-[11px] font-medium">{slide.country.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
