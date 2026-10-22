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
} from "lucide-react";

import HeroSection from "@/components/home/HeroSection";
import QuickAssessmentSection from "@/components/home/QuickAssessmentSection";
import VisaHubSection from "@/components/home/VisaHubSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FeaturedToursSection from "@/components/home/FeaturedToursSection";
import UmrahShowcaseSection from "@/components/home/UmrahShowcaseSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import HomeReviewsSection from "@/components/home/HomeReviewsSection";
import HomeFaqSection from "@/components/home/HomeFaqSection";

export default function HomePage() {
  return (
    <div className="bg-ivory-100 overflow-hidden">
      {/* =========================================================================
          1. DYNAMIC HERO SECTION (30-Sec Slideshow of World Famous Destinations)
      ========================================================================= */}
      <HeroSection />

      {/* =========================================================================
          2. FLOATING CATEGORY SHORTCUT PILL BAR
      ========================================================================= */}
      <section className="relative z-20 -mt-7 sm:-mt-8 max-w-4xl mx-auto px-4 mb-8">
        <div className="bg-white rounded-full p-2 border border-border-muted shadow-[0_12px_40px_rgba(16,45,79,0.08)] flex flex-col sm:flex-row items-center justify-between gap-1.5">
          {/* Pill 1: International Tours */}
          <Link
            href="/tours"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 py-3 px-6 rounded-full bg-navy-900 text-white font-medium text-sm hover:bg-navy-800 transition-all shadow-sm group"
          >
            <Globe className="w-4 h-4 text-gold-400" />
            <span>International Tours</span>
            <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Pill 2: Visa Consultancy */}
          <a
            href="#visa-hub"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 py-3 px-6 rounded-full text-charcoal-900 font-medium text-sm hover:bg-ivory-100 transition-all group"
          >
            <FileText className="w-4 h-4 text-globe-600" />
            <span>Visa Consultancy (14+ Countries)</span>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Pill 3: Umrah */}
          <Link
            href="/umrah"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 py-3 px-6 rounded-full text-navy-900 font-medium text-sm hover:bg-ivory-100 transition-all group"
          >
            <span className="w-4 h-4 text-gold-500 font-bold flex items-center justify-center text-xs">
              🕌
            </span>
            <span>Umrah &amp; Ziyarat</span>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          3. INSTANT CLIENT VISA & TOUR ASSESSMENT TOOL (HIGH-CONVERTING LEADS)
      ========================================================================= */}
      <QuickAssessmentSection />

      {/* =========================================================================
          4. OFFICIAL CLIENT FLYER VISA HUB (14+ COUNTRIES: VISIT, WORK, FREELANCE)
      ========================================================================= */}
      <VisaHubSection />

      {/* =========================================================================
          5. HOW IT WORKS: 4-STEP STREAMLINED VISA ROADMAP
      ========================================================================= */}
      <HowItWorksSection />

      {/* =========================================================================
          6. POPULAR DESTINATIONS SPOTLIGHT (3 Iconic Cards)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 sm:pt-20 pb-16 space-y-10">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold-400/60"></span>
            <p className="text-xs uppercase tracking-[0.25em] font-bold text-gold-600">
              Popular Destinations
            </p>
            <span className="h-px w-8 bg-gold-400/60"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-navy-900 tracking-tight">
            Journeys Worth Remembering
          </h2>
        </div>

        {/* 3 Destination Cards Grid (Istanbul, Dubai, Switzerland) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Istanbul */}
          <div className="group relative h-[360px] sm:h-[400px] rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500">
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage: "url('/images/dest-istanbul.jpg')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent"></div>

            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center gap-1.5 bg-navy-950/70 backdrop-blur-md text-white text-[11px] font-bold tracking-wider px-3.5 py-1.5 rounded-full border border-white/10 uppercase">
                <MapPin className="w-3 h-3 text-gold-400" />
                TÜRKİYE
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white">Istanbul</h3>
                <p className="text-xs text-ivory-200/90 mt-1 font-normal">
                  Where history meets modern charm
                </p>
              </div>
              <Link
                href="/tours?destination=turkey"
                className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-gold-500 group-hover:text-navy-950 group-hover:border-gold-500 transition-all duration-300 flex-shrink-0"
                aria-label="View Istanbul tours"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Dubai */}
          <div className="group relative h-[360px] sm:h-[400px] rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500">
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage: "url('/images/dest-dubai.jpg')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent"></div>

            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center gap-1.5 bg-navy-950/70 backdrop-blur-md text-white text-[11px] font-bold tracking-wider px-3.5 py-1.5 rounded-full border border-white/10 uppercase">
                <MapPin className="w-3 h-3 text-gold-400" />
                UAE
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white">Dubai</h3>
                <p className="text-xs text-ivory-200/90 mt-1 font-normal">
                  Dream bigger, travel further.
                </p>
              </div>
              <Link
                href="/tours?destination=dubai"
                className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-gold-500 group-hover:text-navy-950 group-hover:border-gold-500 transition-all duration-300 flex-shrink-0"
                aria-label="View Dubai tours"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 3: Switzerland */}
          <div className="group relative h-[360px] sm:h-[400px] rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500">
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage: "url('/images/dest-switzerland.jpg')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent"></div>

            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center gap-1.5 bg-navy-950/70 backdrop-blur-md text-white text-[11px] font-bold tracking-wider px-3.5 py-1.5 rounded-full border border-white/10 uppercase">
                <MapPin className="w-3 h-3 text-gold-400" />
                SWITZERLAND
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white">Switzerland</h3>
                <p className="text-xs text-ivory-200/90 mt-1 font-normal">
                  Alpine beauty, timeless memories.
                </p>
              </div>
              <Link
                href="/tours?destination=switzerland"
                className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-gold-500 group-hover:text-navy-950 group-hover:border-gold-500 transition-all duration-300 flex-shrink-0"
                aria-label="View Switzerland tours"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. FEATURED INTERNATIONAL TOUR PACKAGES WITH ITINERARY MODAL
      ========================================================================= */}
      <FeaturedToursSection />

      {/* =========================================================================
          8. SACRED UMRAH & ZIYARAT SHOWCASE (VIP CLOCK TOWER, EXECUTIVE, ECONOMY)
      ========================================================================= */}
      <UmrahShowcaseSection />

      {/* =========================================================================
          9. WHY CHOOSE BILAL TRAVELS (CREDENTIALS & IMPACT NUMBERS)
      ========================================================================= */}
      <WhyChooseUsSection />

      {/* =========================================================================
          10. VERIFIED CUSTOMER REVIEWS & STORIES
      ========================================================================= */}
      <HomeReviewsSection />

      {/* =========================================================================
          11. FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION)
      ========================================================================= */}
      <HomeFaqSection />

      {/* =========================================================================
          12. OFFICIAL SUB-FOOTER BRAND STRIP WITH DIRECT HOTLINE
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

