"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  MapPin,
  CheckCircle2,
  Train,
  Shield,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { UMRAH_PACKAGES } from "@/lib/data";

export default function UmrahShowcaseSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-border-muted relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-300 text-gold-800 text-xs font-bold tracking-widest uppercase shadow-sm">
            <span>🕌</span>
            <span>Sacred Umrah &amp; Islamic Ziyarat</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-navy-950 tracking-tight">
            Perform Your Umrah With Peace &amp; Devotion
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Zero-meter Haram proximity luxury stays, official Saudi Umrah e-Visa processing, and
            guided historical Ziyarat across Makkah &amp; Madinah.
          </p>
        </div>

        {/* 3 Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {UMRAH_PACKAGES.map((pkg, idx) => {
            const isVip = pkg.tier.includes("VIP");
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isVip
                    ? "bg-gradient-to-b from-navy-950 via-[#102D4F] to-navy-900 text-white shadow-hover border-2 border-gold-400"
                    : "bg-ivory-50 text-navy-950 border border-border-muted hover:border-gold-400 shadow-sm"
                }`}
              >
                {isVip && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-950 text-[10px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Preferred VIP Choice</span>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <span
                      className={`text-xs uppercase tracking-wider font-bold block ${
                        isVip ? "text-gold-400" : "text-gold-600"
                      }`}
                    >
                      {pkg.tier} • {pkg.duration}
                    </span>
                    <h3 className="font-serif text-2xl font-bold mt-1">
                      {pkg.title}
                    </h3>
                  </div>

                  {/* Distance Markers */}
                  <div className="space-y-2.5 text-xs">
                    <div
                      className={`p-3 rounded-xl border flex items-center gap-2.5 ${
                        isVip
                          ? "bg-white/10 border-white/15 text-white"
                          : "bg-white border-border-muted text-navy-900"
                      }`}
                    >
                      <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0" />
                      <div>
                        <span className="font-bold block">Makkah Hotel</span>
                        <span className="text-[11px] opacity-80">{pkg.makkahHotel} ({pkg.makkahDistance})</span>
                      </div>
                    </div>

                    <div
                      className={`p-3 rounded-xl border flex items-center gap-2.5 ${
                        isVip
                          ? "bg-white/10 border-white/15 text-white"
                          : "bg-white border-border-muted text-navy-900"
                      }`}
                    >
                      <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0" />
                      <div>
                        <span className="font-bold block">Madinah Hotel</span>
                        <span className="text-[11px] opacity-80">{pkg.madinahHotel} ({pkg.madinahDistance})</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 text-xs">
                    {pkg.inclusions.slice(0, 4).map((inc, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 flex-shrink-0 ${
                            isVip ? "text-gold-400" : "text-emerald-600"
                          }`}
                        />
                        <span className="opacity-90">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 mt-6 border-t border-white/10">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="opacity-70">Pricing:</span>
                    <span className="font-serif font-bold text-sm text-gold-400">
                      Quote On Request
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/923065602040?text=${encodeURIComponent(
                      `Assalam-o-Alaikum Bilal Travels, I want to inquire about ${pkg.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-full text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 ${
                      isVip
                        ? "bg-gold-500 hover:bg-gold-600 text-navy-950"
                        : "bg-navy-950 hover:bg-navy-900 text-white"
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Inquire via WhatsApp: 0306 5602040</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all Umrah Link */}
        <div className="text-center">
          <Link
            href="/umrah"
            className="inline-flex items-center gap-2 text-xs font-bold text-gold-700 hover:text-gold-800 uppercase tracking-widest"
          >
            <span>Explore All Umrah Packages &amp; Ziyarat Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
