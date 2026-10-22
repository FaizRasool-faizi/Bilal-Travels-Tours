"use client";

import React from "react";
import Link from "next/link";
import { Star, ShieldCheck, ArrowRight, Quote } from "lucide-react";
import { TRAVELLER_STORIES } from "@/lib/data";

export default function HomeReviewsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-border-muted relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-300 text-gold-800 text-xs font-bold tracking-widest uppercase shadow-sm">
            <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
            <span>Verified Traveller Reviews</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-navy-950 tracking-tight">
            Loved By Families &amp; Solo Travellers
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Read real stories from our valued clients who trusted Bilal Travels &amp; Tours for their
            sacred Umrah, luxury honeymoons, and international vacations.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAVELLER_STORIES.slice(0, 4).map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-3xl bg-ivory-50 border border-border-muted/80 hover:border-gold-400 hover:shadow-card transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-gold-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic line-clamp-4">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-ivory-200 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-navy-900 text-sm">
                    {rev.name}
                  </h4>
                  <p className="text-[11px] text-slate-500">{rev.city}</p>
                  <span className="text-[10px] font-semibold text-gold-700 block mt-0.5">
                    {rev.trip}
                  </span>
                </div>

                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0" title="Verified Traveller">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Reviews Link */}
        <div className="text-center">
          <Link
            href="/travellers"
            className="inline-flex items-center gap-2 text-xs font-bold text-gold-700 hover:text-gold-800 uppercase tracking-widest"
          >
            <span>Read All Verified Customer Reviews &amp; Stories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
