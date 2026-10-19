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
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-ivory-100 overflow-hidden">
      {/* =========================================================================
          HERO SECTION (Pixel-matched with Provided UI Sample)
      ========================================================================= */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center bg-[#FAF8F3]">
        {/* Right Side: Panoramic Istanbul Sunset Background with Smooth Left Fade */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[65%] pointer-events-none select-none overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-right lg:bg-center"
            style={{
              backgroundImage: "url('/images/hero-istanbul-sunset.jpg')",
            }}
          ></div>

          {/* Left Gradient Fade: Seamless transition into Warm Ivory background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F3] via-[#FAF8F3]/70 to-transparent lg:via-[#FAF8F3]/30"></div>
          {/* Top subtle fade */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FAF8F3]/80 to-transparent"></div>
          {/* Bottom subtle fade into the pill bar area */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FAF8F3] via-[#FAF8F3]/80 to-transparent"></div>

          {/* Golden Orbital Flight Arc & Meridian Lines Overlay (As in Mockup) */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            {/* Orbital Globe Meridian Wireframe SVG */}
            <svg
              className="absolute right-6 top-8 w-[480px] h-[480px] lg:w-[620px] lg:h-[620px] opacity-40 text-gold-400"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Globe Circle */}
              <circle
                cx="250"
                cy="250"
                r="210"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />
              <ellipse
                cx="250"
                cy="250"
                rx="140"
                ry="210"
                stroke="currentColor"
                strokeWidth="0.8"
                opacity="0.6"
              />
              <ellipse
                cx="250"
                cy="250"
                rx="70"
                ry="210"
                stroke="currentColor"
                strokeWidth="0.8"
                opacity="0.4"
              />
              <line
                x1="40"
                y1="250"
                x2="460"
                y2="250"
                stroke="currentColor"
                strokeWidth="0.8"
                opacity="0.5"
              />
              <line
                x1="70"
                y1="160"
                x2="430"
                y2="160"
                stroke="currentColor"
                strokeWidth="0.6"
                opacity="0.4"
              />
              <line
                x1="70"
                y1="340"
                x2="430"
                y2="340"
                stroke="currentColor"
                strokeWidth="0.6"
                opacity="0.4"
              />

              {/* Glowing Golden Flight Trajectory Arc */}
              <path
                d="M 50 420 Q 240 80 430 70"
                stroke="#B58B45"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                filter="drop-shadow(0 0 8px rgba(181,139,69,0.8))"
              />
            </svg>

            {/* In-Flight Aeroplane Icon along the Golden Arc */}
            <div className="absolute right-16 top-16 lg:right-28 lg:top-20 text-white drop-shadow-[0_4px_10px_rgba(16,45,79,0.5)] transform rotate-[28deg]">
              <Plane className="w-8 h-8 fill-white text-navy-900" />
            </div>
          </div>
        </div>

        {/* Hero Content (Positioned on the Left over the Warm Ivory base) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16 lg:py-24 w-full">
          <div className="max-w-xl lg:max-w-2xl space-y-6">
            {/* Top Category Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-gold-300/60 shadow-sm text-gold-700 text-[11px] font-bold tracking-[0.18em] uppercase">
              <span>International Travel</span>
              <span className="text-gold-300 font-normal">|</span>
              <span>Tours</span>
              <span className="text-gold-300 font-normal">|</span>
              <span>Visa Consultancy</span>
              <span className="text-gold-300 font-normal">|</span>
              <span>Umrah</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[68px] text-navy-900 tracking-tight leading-[1.12]">
              Your Next Chapter, <br />
              <span className="text-navy-900 font-serif">Beyond Borders</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-lg">
              Discover the world with trusted guidance, seamless services and unforgettable
              journeys — from iconic destinations to sacred journeys.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/tours"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-soft hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Explore Journeys</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact?intent=plan-trip"
                className="inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-navy-900 font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full border border-border-muted hover:border-gold-400 shadow-sm transition-all duration-300"
              >
                <span>Plan a Trip</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FLOATING PILL CATEGORY SWITCHER (Exact Match with Mockup)
      ========================================================================= */}
      <section className="relative z-20 -mt-7 sm:-mt-8 max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-full p-2 border border-border-muted shadow-[0_12px_40px_rgba(16,45,79,0.08)] flex flex-col sm:flex-row items-center justify-between gap-1.5">
          {/* Pill 1: International Tours (Active Navy) */}
          <Link
            href="/tours"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 py-3 px-6 rounded-full bg-navy-900 text-white font-medium text-sm hover:bg-navy-800 transition-all shadow-sm group"
          >
            <Globe className="w-4 h-4 text-gold-400" />
            <span>International Tours</span>
            <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Pill 2: Visa Consultancy */}
          <Link
            href="/visa"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 py-3 px-6 rounded-full text-charcoal-900 font-medium text-sm hover:bg-ivory-100 transition-all group"
          >
            <FileText className="w-4 h-4 text-globe-600" />
            <span>Visa Consultancy</span>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Pill 3: Umrah */}
          <Link
            href="/umrah"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 py-3 px-6 rounded-full text-navy-900 font-medium text-sm hover:bg-ivory-100 transition-all group"
          >
            <span className="w-4 h-4 text-gold-500 font-bold flex items-center justify-center text-xs">
              🕌
            </span>
            <span>Umrah</span>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          POPULAR DESTINATIONS SECTION (Exact Match with Mockup)
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

            {/* Top Badge */}
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center gap-1.5 bg-navy-950/70 backdrop-blur-md text-white text-[11px] font-bold tracking-wider px-3.5 py-1.5 rounded-full border border-white/10 uppercase">
                <MapPin className="w-3 h-3 text-gold-400" />
                TÜRKİYE
              </span>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white">Istanbul</h3>
                <p className="text-xs text-ivory-200/90 mt-1 font-normal">
                  Where history meets modern charm
                </p>
              </div>
              <Link
                href="/tours?dest=istanbul"
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

            {/* Top Badge */}
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center gap-1.5 bg-navy-950/70 backdrop-blur-md text-white text-[11px] font-bold tracking-wider px-3.5 py-1.5 rounded-full border border-white/10 uppercase">
                <MapPin className="w-3 h-3 text-gold-400" />
                UAE
              </span>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white">Dubai</h3>
                <p className="text-xs text-ivory-200/90 mt-1 font-normal">
                  Dream bigger, travel further.
                </p>
              </div>
              <Link
                href="/tours?dest=dubai"
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

            {/* Top Badge */}
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center gap-1.5 bg-navy-950/70 backdrop-blur-md text-white text-[11px] font-bold tracking-wider px-3.5 py-1.5 rounded-full border border-white/10 uppercase">
                <MapPin className="w-3 h-3 text-gold-400" />
                SWITZERLAND
              </span>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white">Switzerland</h3>
                <p className="text-xs text-ivory-200/90 mt-1 font-normal">
                  Alpine beauty, timeless memories.
                </p>
              </div>
              <Link
                href="/tours?dest=switzerland"
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
          VALUE PROPOSITIONS ROW (Matching Mockup with Circular Gold Line Icons)
      ========================================================================= */}
      <section className="bg-white border-y border-border-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* 1: Trusted & Professional Guidance */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border border-gold-400/40 bg-gold-50 flex items-center justify-center text-gold-600 flex-shrink-0 shadow-sm">
                <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-navy-900 text-sm leading-snug">
                  Trusted &amp; Professional Guidance
                </h4>
                <p className="text-slate-500 text-xs mt-1">Your journey, our commitment</p>
              </div>
            </div>

            {/* 2: Personalised Travel Solutions */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border border-gold-400/40 bg-gold-50 flex items-center justify-center text-gold-600 flex-shrink-0 shadow-sm">
                <Compass className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-navy-900 text-sm leading-snug">
                  Personalised Travel Solutions
                </h4>
                <p className="text-slate-500 text-xs mt-1">Designed around your dreams</p>
              </div>
            </div>

            {/* 3: Global Network & Partnerships */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border border-gold-400/40 bg-gold-50 flex items-center justify-center text-gold-600 flex-shrink-0 shadow-sm">
                <Globe className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-navy-900 text-sm leading-snug">
                  Global Network &amp; Partnerships
                </h4>
                <p className="text-slate-500 text-xs mt-1">More destinations, better experiences</p>
              </div>
            </div>

            {/* 4: Dedicated Support */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border border-gold-400/40 bg-gold-50 flex items-center justify-center text-gold-600 flex-shrink-0 shadow-sm">
                <HeartHandshake className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-navy-900 text-sm leading-snug">
                  Dedicated Support
                </h4>
                <p className="text-slate-500 text-xs mt-1">Before, during and after your journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          NAVY BRAND BANNER STRIP (Matching Mockup Sub-footer)
      ========================================================================= */}
      <section className="bg-navy-950 py-5 border-b border-navy-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-center relative z-10">
          <div className="flex items-center gap-4 text-center">
            <span className="hidden sm:block h-px w-16 bg-gold-500/40"></span>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-ivory-200 uppercase">
              Pakistan&apos;s Trusted Partner for International Travel
            </p>
            <span className="hidden sm:block h-px w-16 bg-gold-500/40"></span>
          </div>
        </div>

        {/* Subtle decorative globe lines on right */}
        <div className="absolute right-4 -bottom-10 opacity-10 pointer-events-none text-gold-400">
          <Globe className="w-32 h-32" />
        </div>
      </section>
    </div>
  );
}
