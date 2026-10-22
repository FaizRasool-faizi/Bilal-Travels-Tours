"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  X,
  Check,
  MessageCircle,
} from "lucide-react";
import { TOURS, TourPackage } from "@/lib/data";

export default function FeaturedToursSection() {
  const [activeModalTour, setActiveModalTour] = useState<TourPackage | null>(null);

  // Take top 4 featured tours
  const featuredTours = TOURS.slice(0, 4);

  return (
    <section className="py-16 sm:py-20 bg-ivory-100 border-b border-border-muted relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-gold-400"></span>
              <span className="text-xs uppercase tracking-widest font-bold text-gold-600">
                Curated Group &amp; Family Departures
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-navy-950 tracking-tight">
              Featured International Packages
            </h2>
          </div>

          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-xs font-bold text-gold-700 hover:text-gold-800 uppercase tracking-wider"
          >
            <span>Explore All Packages (10+)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTours.map((tour) => (
            <div
              key={tour.id}
              className="group bg-white rounded-2xl overflow-hidden border border-border-muted hover:border-gold-400 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>

                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="bg-navy-950/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/10">
                    {tour.duration}
                  </span>
                  <span className="bg-gold-500 text-navy-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                    {tour.category}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 text-white flex items-center gap-1.5 text-xs font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  <span>{tour.country}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-navy-900 text-base group-hover:text-gold-600 transition-colors line-clamp-2">
                    {tour.title}
                  </h3>

                  {/* Highlights Bullet List */}
                  <div className="mt-3 space-y-1.5">
                    {tour.highlights.slice(0, 3).map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="pt-3 border-t border-ivory-200 flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalTour(tour)}
                    className="flex-1 py-2 text-center text-xs font-semibold text-navy-900 hover:text-gold-700 bg-ivory-100 hover:bg-ivory-200 rounded-xl transition-colors"
                  >
                    Itinerary
                  </button>

                  <a
                    href={`https://wa.me/923065602040?text=${encodeURIComponent(
                      `Hello Bilal Travels, I want to inquire about ${tour.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 text-center text-xs font-bold text-white bg-navy-950 hover:bg-gold-500 hover:text-navy-950 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Day-by-Day Itinerary Modal */}
      {activeModalTour && (
        <div className="fixed inset-0 z-50 bg-navy-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-hover border border-border-muted p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between pb-4 border-b border-ivory-200">
              <div className="space-y-1">
                <span className="text-xs font-bold text-gold-600 uppercase tracking-widest">
                  {activeModalTour.duration} • {activeModalTour.category}
                </span>
                <h3 className="font-serif text-2xl text-navy-900">
                  {activeModalTour.title}
                </h3>
                <p className="text-xs text-slate-500">
                  Pricing: <strong className="text-gold-700 font-semibold">Custom Quote on Request</strong> (Tailored according to travel dates &amp; hotel choice)
                </p>
              </div>

              <button
                onClick={() => setActiveModalTour(null)}
                className="p-2 rounded-full hover:bg-ivory-200 text-navy-900 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Daily Schedule */}
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-navy-900 text-base">
                Day-by-Day Journey Itinerary
              </h4>
              <div className="space-y-2.5">
                {activeModalTour.itinerary.map((item) => (
                  <div
                    key={item.day}
                    className="p-3.5 rounded-xl bg-ivory-50 border border-border-muted/70 space-y-1"
                  >
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-gold-700 block">
                      Day {item.day}: {item.title}
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions */}
            <div className="p-4 rounded-xl bg-gold-50 border border-gold-200/60 space-y-2">
              <span className="text-xs font-bold text-navy-900 block">Package Inclusions:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {activeModalTour.inclusions.map((inc, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalTour(null)}
                className="px-5 py-2.5 rounded-full border border-border-muted text-xs font-semibold text-slate-600 hover:bg-ivory-100"
              >
                Close
              </button>

              <a
                href={`https://wa.me/923065602040?text=${encodeURIComponent(
                  `Hello Bilal Travels, I want to book the package: ${activeModalTour.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs shadow-soft"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Book via WhatsApp: 0306 5602040</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
