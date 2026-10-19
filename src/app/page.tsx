import React from "react";
import Link from "next/link";
import {
  Globe,
  FileText,
  Moon,
  ArrowRight,
  ShieldCheck,
  Compass,
  Users,
  Headphones,
  MapPin,
  Plane,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-16 lg:space-y-24">
      {/* =========================================================================
          HERO SECTION (Matching Provided Desktop UI Mockup)
      ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-gradient-to-b from-white via-ivory-100 to-ivory-200/60 border-b border-border-muted/80">
        {/* Decorative Golden Orbital & Meridian Ring Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] lg:w-[1200px] lg:h-[1200px] rounded-full border border-gold-300/20 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[900px] lg:h-[900px] rounded-full border border-gold-400/10 pointer-events-none -rotate-12"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-8">
          {/* Top Category Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-100 border border-gold-300/60 text-gold-700 text-xs font-bold tracking-[0.2em] uppercase">
            <span>International Travel</span>
            <span className="text-gold-400">|</span>
            <span>Tours</span>
            <span className="text-gold-400">|</span>
            <span>Visa Consultancy</span>
            <span className="text-gold-400">|</span>
            <span>Umrah</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-navy-900 tracking-tight max-w-4xl mx-auto leading-[1.12]">
            Your Next Chapter,{" "}
            <span className="italic text-gold-600 font-normal">Beyond Borders</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
            Discover the world with trusted guidance, seamless services and unforgettable
            journeys — from iconic destinations to sacred journeys.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/tours"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-base px-8 py-3.5 rounded-full shadow-soft hover:shadow-hover hover:-translate-y-0.5 transition-all"
            >
              <span>Explore Journeys</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact?intent=plan-trip"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-ivory-50 text-navy-900 font-semibold text-base px-8 py-3.5 rounded-full border border-border-muted hover:border-gold-400 shadow-sm transition-all"
            >
              <span>Plan a Trip</span>
            </Link>
          </div>

          {/* 3 Core Pillar Switcher Pills (Matching Mockup) */}
          <div className="pt-8 max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-md p-2 rounded-2xl sm:rounded-full border border-border-muted shadow-card flex flex-col sm:flex-row items-center justify-between gap-2">
              <Link
                href="/tours"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 py-3 px-6 rounded-full bg-navy-900 text-white font-medium text-sm hover:bg-navy-800 transition-all shadow-sm"
              >
                <Globe className="w-4 h-4 text-gold-400" />
                <span>International Tours</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
              </Link>
              <Link
                href="/visa"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 py-3 px-6 rounded-full text-charcoal-900 font-medium text-sm hover:bg-ivory-100 transition-all"
              >
                <FileText className="w-4 h-4 text-globe-600" />
                <span>Visa Consultancy</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-60" />
              </Link>
              <Link
                href="/umrah"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 py-3 px-6 rounded-full text-navy-900 font-medium text-sm hover:bg-ivory-100 transition-all"
              >
                <Moon className="w-4 h-4 text-gold-500" />
                <span>Umrah</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-60" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          POPULAR DESTINATIONS PREVIEW (Matching Mockup)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-gold-600">
            Popular Destinations
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy-900">
            Journeys Worth Remembering
          </h2>
        </div>

        {/* 3 Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Destination 1: Istanbul */}
          <div className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300">
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>

            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 bg-navy-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
                <MapPin className="w-3 h-3 text-gold-400" />
                TÜRKİYE
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <h3 className="font-serif text-2xl text-white">Istanbul</h3>
                <p className="text-xs text-ivory-200/90 mt-1">Where history meets modern charm</p>
              </div>
              <Link
                href="/tours?dest=istanbul"
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors flex-shrink-0"
                aria-label="View Istanbul tours"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Destination 2: Dubai */}
          <div className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300">
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>

            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 bg-navy-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
                <MapPin className="w-3 h-3 text-gold-400" />
                UAE
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <h3 className="font-serif text-2xl text-white">Dubai</h3>
                <p className="text-xs text-ivory-200/90 mt-1">Dream bigger, travel further.</p>
              </div>
              <Link
                href="/tours?dest=dubai"
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors flex-shrink-0"
                aria-label="View Dubai tours"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Destination 3: Switzerland */}
          <div className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300">
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>

            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 bg-navy-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
                <MapPin className="w-3 h-3 text-gold-400" />
                SWITZERLAND
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <h3 className="font-serif text-2xl text-white">Switzerland</h3>
                <p className="text-xs text-ivory-200/90 mt-1">Alpine beauty, timeless memories.</p>
              </div>
              <Link
                href="/tours?dest=switzerland"
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors flex-shrink-0"
                aria-label="View Switzerland tours"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          VALUE PROPOSITIONS ROW (Matching Mockup Footer Strip)
      ========================================================================= */}
      <section className="bg-white border-y border-border-muted py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-navy-900 text-sm">
                  Trusted &amp; Professional Guidance
                </h4>
                <p className="text-slate-500 text-xs mt-0.5">Your journey, our commitment</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 flex-shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-navy-900 text-sm">
                  Personalised Travel Solutions
                </h4>
                <p className="text-slate-500 text-xs mt-0.5">Designed around your dreams</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 flex-shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-navy-900 text-sm">
                  Global Network &amp; Partnerships
                </h4>
                <p className="text-slate-500 text-xs mt-0.5">More destinations, better experiences</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 flex-shrink-0">
                <Headphones className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-navy-900 text-sm">Dedicated Support</h4>
                <p className="text-slate-500 text-xs mt-0.5">
                  Before, during and after your journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
