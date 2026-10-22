import React from "react";
import Link from "next/link";
import {
  Globe,
  FileText,
  ArrowRight,
  ShieldCheck,
  Compass,
  Headphones,
  HeartHandshake,
  MapPin,
  Plane,
  Phone,
  Sparkles,
} from "lucide-react";

import HeroSection from "@/components/home/HeroSection";
import ServicesOverviewSection from "@/components/home/ServicesOverviewSection";
import QuickAssessmentSection from "@/components/home/QuickAssessmentSection";
import VisaHubSection from "@/components/home/VisaHubSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FeaturedToursSection from "@/components/home/FeaturedToursSection";
import InteractiveMapSection from "@/components/home/InteractiveMapSection";
import UmrahShowcaseSection from "@/components/home/UmrahShowcaseSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import HomeReviewsSection from "@/components/home/HomeReviewsSection";
import HomeFaqSection from "@/components/home/HomeFaqSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export default function HomePage() {
  const POPULAR_DESTINATIONS = [
    {
      city: "Istanbul & Cappadocia",
      country: "TÜRKİYE",
      tagline: "Where history meets modern charm & Bosphorus sunsets",
      visaInfo: "Easy Sticker / E-Visa",
      image: "/images/dest-istanbul.jpg",
      href: "/tours?destination=turkey",
    },
    {
      city: "Dubai & Abu Dhabi",
      country: "UAE",
      tagline: "Dream bigger: futuristic skyline, desert dunes & yacht cruises",
      visaInfo: "24-48h E-Visa",
      image: "/images/dest-dubai.jpg",
      href: "/tours?destination=dubai",
    },
    {
      city: "Interlaken & Zurich",
      country: "SWITZERLAND",
      tagline: "Alpine majesty, snowcapped peaks & scenic glacier trains",
      visaInfo: "Schengen Visa Dossier",
      image: "/images/dest-switzerland.jpg",
      href: "/tours?destination=switzerland",
    },
    {
      city: "Baku & Gabala",
      country: "AZERBAIJAN",
      tagline: "Caspian Sea breezes, Old City cobblestones & mountain cable cars",
      visaInfo: "3-5 Days E-Visa",
      image: "/images/hero-baku.jpg",
      href: "/tours?destination=azerbaijan",
    },
    {
      city: "London & Countryside",
      country: "UNITED KINGDOM",
      tagline: "Big Ben, West End theatres & quintessential English heritage",
      visaInfo: "Standard Visitor Visa",
      image: "/images/hero-london.jpg",
      href: "/tours?destination=uk",
    },
    {
      city: "Kuala Lumpur & Langkawi",
      country: "MALAYSIA",
      tagline: "Pristine white beaches, tropical rainforests & Petronas Towers",
      visaInfo: "Official eVisa / MDAC",
      image: "/images/seeview_malysia.jpeg",
      href: "/tours?destination=malaysia",
    },
  ];

  return (
    <div className="bg-ivory-100 overflow-hidden">
      {/* =========================================================================
          1. DYNAMIC HERO SECTION (Cinematic Destination Showcase)
      ========================================================================= */}
      <HeroSection />

      {/* =========================================================================
          2. COMPACT SERVICES OVERVIEW (4 VISUALLY COHESIVE PILLARS)
      ========================================================================= */}
      <ServicesOverviewSection />

      {/* =========================================================================
          3. INSTANT CLIENT VISA & TOUR ASSESSMENT TOOL (HIGH-CONVERTING LEADS)
      ========================================================================= */}
      <QuickAssessmentSection />

      {/* =========================================================================
          4. CURATED POPULAR DESTINATIONS SPOTLIGHT (6 ICONIC DESTINATION CARDS)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold-400/60"></span>
              <p className="text-xs uppercase tracking-[0.25em] font-bold text-gold-600">
                Curated Destinations
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-navy-900 tracking-tight">
              Journeys Worth Remembering
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-xs font-bold text-gold-700 hover:text-gold-800 uppercase tracking-wider"
            >
              <span>View All Destinations (12+)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 6 Curated Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {POPULAR_DESTINATIONS.map((dest, idx) => (
            <div
              key={idx}
              className="group relative h-[360px] sm:h-[390px] rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500"
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage: `url('${dest.image}')`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>

              {/* Top Country Tag */}
              <div className="absolute top-5 left-5 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 bg-navy-950/80 backdrop-blur-md text-white text-[11px] font-bold tracking-wider px-3.5 py-1.5 rounded-full border border-white/10 uppercase">
                  <MapPin className="w-3 h-3 text-gold-400" />
                  {dest.country}
                </span>
                <span className="bg-gold-500/90 text-navy-950 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {dest.visaInfo}
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="space-y-1 max-w-[80%]">
                  <h3 className="font-serif text-2xl sm:text-2xl text-white">
                    {dest.city}
                  </h3>
                  <p className="text-xs text-ivory-200/90 font-normal line-clamp-1">
                    {dest.tagline}
                  </p>
                </div>
                <Link
                  href={dest.href}
                  className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-gold-500 group-hover:text-navy-950 group-hover:border-gold-500 transition-all duration-300 flex-shrink-0"
                  aria-label={`View ${dest.city} tours`}
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          5. OFFICIAL VISA HUB (14+ COUNTRIES: VISIT, WORK, FREELANCE)
      ========================================================================= */}
      <VisaHubSection />

      {/* =========================================================================
          6. INTERACTIVE WORLD & REGIONAL DESTINATION MAP & DIRECTORY
      ========================================================================= */}
      <InteractiveMapSection />

      {/* =========================================================================
          7. SACRED UMRAH & ZIYARAT SHOWCASE (VIP CLOCK TOWER, EXECUTIVE, ECONOMY)
      ========================================================================= */}
      <UmrahShowcaseSection />

      {/* =========================================================================
          8. HOW IT WORKS: 4-STEP STREAMLINED VISA ROADMAP
      ========================================================================= */}
      <HowItWorksSection />

      {/* =========================================================================
          9. FEATURED INTERNATIONAL TOUR PACKAGES WITH ITINERARY MODAL
      ========================================================================= */}
      <FeaturedToursSection />

      {/* =========================================================================
          10. WHY CHOOSE BILAL TRAVELS (CREDENTIALS & IMPACT NUMBERS)
      ========================================================================= */}
      <WhyChooseUsSection />

      {/* =========================================================================
          11. VERIFIED CUSTOMER REVIEWS & STORIES
      ========================================================================= */}
      <HomeReviewsSection />

      {/* =========================================================================
          12. FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION)
      ========================================================================= */}
      <HomeFaqSection />

      {/* =========================================================================
          13. FINAL CONSULTATION CALL-TO-ACTION (WHATSAPP & HOTLINE)
      ========================================================================= */}
      <FinalCtaSection />

      {/* =========================================================================
          14. OFFICIAL SUB-FOOTER BRAND STRIP WITH DIRECT HOTLINE
      ========================================================================= */}
      <section className="bg-navy-950 py-6 border-b border-navy-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-ivory-200 uppercase">
              Pakistan&apos;s Trusted Partner for International Travel &amp; Umrah
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold text-gold-400">
            <a
              href="tel:+923065602040"
              className="hover:underline flex items-center gap-1.5 text-white"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Direct Hotline: 0306 5602040</span>
            </a>
            <span className="text-slate-500">|</span>
            <Link href="/contact" className="hover:text-gold-300 underline">
              Gulberg III, Lahore Office
            </Link>
          </div>
        </div>

        <div className="absolute right-4 -bottom-10 opacity-10 pointer-events-none text-gold-400">
          <Globe className="w-32 h-32" />
        </div>
      </section>
    </div>
  );
}
