"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Compass,
  Clock,
  Star,
  CheckCircle2,
  ArrowRight,
  Plane,
  X,
  Search,
  Filter,
  Check,
  Calendar,
  DollarSign,
} from "lucide-react";
import { TOURS, TourPackage } from "@/lib/data";

export default function ToursPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDestination, setSelectedDestination] = useState("All");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "duration">("featured");

  // Selected tour for full interactive Day-by-Day Itinerary modal
  const [activeModalTour, setActiveModalTour] = useState<TourPackage | null>(null);

  const categories = ["All", "Group Tour", "Family Vacation", "Honeymoon Luxury", "Spiritual"];
  const destinations = ["All", "turkey", "dubai", "switzerland", "saudi-arabia", "azerbaijan", "malaysia"];

  const filteredTours = useMemo(() => {
    return TOURS.filter((tour) => {
      const matchesSearch =
        tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.destinationName.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || tour.category === selectedCategory;

      const matchesDestination =
        selectedDestination === "All" || tour.destinationSlug === selectedDestination;

      return matchesSearch && matchesCategory && matchesDestination;
    }).sort((a, b) => {
      const priceA = parseInt(a.pricePKR.replace(/,/g, ""), 10);
      const priceB = parseInt(b.pricePKR.replace(/,/g, ""), 10);

      if (sortBy === "price-asc") return priceA - priceB;
      if (sortBy === "price-desc") return priceB - priceA;
      if (sortBy === "duration") return b.days - a.days;
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedDestination, sortBy]);

  return (
    <div className="bg-ivory-100 min-h-screen py-12">
      {/* Top Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-600 mb-3">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-navy-900">Tours &amp; Packages</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border-muted">
          <div className="space-y-3 max-w-2xl">
            <h1 className="font-serif text-4xl sm:text-5xl text-navy-900 tracking-tight leading-tight">
              International Tour Packages
            </h1>
            <p className="text-slate-600 text-base sm:text-lg">
              Seamlessly planned holiday packages with confirmed luxury stays, authentic tours,
              VIP airport transfers, and end-to-end Pakistani visa assistance.
            </p>
          </div>

          <Link
            href="/contact?intent=plan-trip"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-6 py-3 rounded-full text-sm shadow-soft hover:shadow-hover transition-all self-start md:self-auto"
          >
            <Plane className="w-4 h-4" />
            <span>Customize My Tour</span>
          </Link>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-8 bg-white p-5 rounded-2xl border border-border-muted shadow-soft space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search Input (5 cols) */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by tour name, city or country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border-muted bg-ivory-50 text-sm focus:outline-none focus:border-gold-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-navy-900 text-xs"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Destination Dropdown (4 cols) */}
            <div className="md:col-span-4 flex items-center gap-2">
              <label className="text-xs font-semibold text-slate-500 whitespace-nowrap">
                Destination:
              </label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl border border-border-muted bg-ivory-50 text-sm font-medium text-navy-900 focus:outline-none focus:border-gold-500"
              >
                <option value="All">All Destinations</option>
                <option value="turkey">Türkiye (Istanbul &amp; Cappadocia)</option>
                <option value="dubai">UAE (Dubai &amp; Abu Dhabi)</option>
                <option value="switzerland">Switzerland (Alps &amp; Lakes)</option>
                <option value="saudi-arabia">Saudi Arabia (Umrah)</option>
                <option value="azerbaijan">Azerbaijan (Baku &amp; Gabala)</option>
                <option value="malaysia">Malaysia (KL &amp; Langkawi)</option>
              </select>
            </div>

            {/* Sort Dropdown (3 cols) */}
            <div className="md:col-span-3 flex items-center gap-2">
              <label className="text-xs font-semibold text-slate-500 whitespace-nowrap">
                Sort:
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full py-2.5 px-3 rounded-xl border border-border-muted bg-ivory-50 text-sm font-medium text-navy-900 focus:outline-none focus:border-gold-500"
              >
                <option value="featured">Featured / Best Match</option>
                <option value="duration">Duration: Longest First</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-ivory-200">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-navy-900 text-white shadow-soft"
                    : "bg-ivory-100 hover:bg-ivory-200 text-charcoal-900 border border-border-muted"
                }`}
              >
                {cat === "Spiritual" ? "🕌 Sacred Umrah" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tours List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        {filteredTours.length === 0 ? (
          <div className="bg-white rounded-2xl border border-border-muted p-12 text-center space-y-4">
            <Compass className="w-12 h-12 text-gold-400 mx-auto" />
            <h3 className="font-serif text-2xl text-navy-900">No Packages Found</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              We couldn&apos;t find any tour matching your criteria. Try adjusting your search query
              or filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedDestination("All");
              }}
              className="bg-navy-900 text-white font-bold px-6 py-2.5 rounded-full text-xs hover:bg-navy-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-2xl overflow-hidden border border-border-muted shadow-card hover:shadow-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Image Banner */}
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url('${tour.image}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>

                    {/* Category & Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="bg-gold-500 text-navy-950 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {tour.category}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-navy-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                      <Clock className="w-3.5 h-3.5 text-gold-400" />
                      <span>{tour.duration}</span>
                    </div>

                    {/* Bottom Title & Country on Image */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-2 text-xs text-gold-300 font-medium mb-1">
                        <span>{tour.country}</span>
                        <span>•</span>
                        <span>{tour.destinationName}</span>
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight">
                        {tour.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    {/* Rating & Reviews */}
                    <div className="flex items-center justify-between text-xs pb-3 border-b border-ivory-200">
                      <div className="flex items-center gap-1.5 text-navy-900 font-bold">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <span>{tour.rating.toFixed(1)}</span>
                        <span className="text-slate-400 font-normal">
                          ({tour.reviewsCount} Pakistani reviews)
                        </span>
                      </div>
                      <span className="bg-emerald-50 text-emerald-700 font-semibold px-2.5 py-0.5 rounded-full text-[11px]">
                        ✓ All Transfers Included
                      </span>
                    </div>

                    {/* Highlights Bullet Points */}
                    <div className="space-y-2">
                      <p className="text-[11px] uppercase font-bold tracking-wider text-slate-400">
                        Package Highlights
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {tour.highlights.slice(0, 3).map((h, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 mt-0.5 flex-shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Quick Inclusions Badges */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {tour.inclusions.slice(0, 3).map((inc, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-ivory-100 text-navy-900 border border-border-muted px-2 py-0.5 rounded font-medium"
                        >
                          ✓ {inc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Pricing & CTA Buttons */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-ivory-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] text-slate-500 block">Pricing</span>
                      <span className="font-serif text-lg font-bold text-gold-700">
                        Quote On Request
                      </span>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button
                        onClick={() => setActiveModalTour(tour)}
                        className="flex-1 sm:flex-none border border-navy-900 hover:bg-navy-900 hover:text-white text-navy-900 font-semibold text-xs px-4 py-2.5 rounded-full transition-all"
                      >
                        Day-by-Day Itinerary
                      </button>

                      <Link
                        href={`/contact?intent=quote&tour=${tour.slug}`}
                        className="flex-1 sm:flex-none bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs px-5 py-2.5 rounded-full transition-all shadow-soft flex items-center justify-center gap-1.5"
                      >
                        <span>Inquire Package</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* =========================================================================
          INTERACTIVE DAY-BY-DAY ITINERARY MODAL
      ========================================================================= */}
      {activeModalTour && (
        <div className="fixed inset-0 z-50 bg-navy-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-hover border border-border-muted p-6 sm:p-8 space-y-6">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-ivory-200">
              <div className="space-y-1">
                <span className="text-xs font-bold text-gold-600 uppercase tracking-widest">
                  {activeModalTour.duration} • {activeModalTour.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-navy-900">
                  {activeModalTour.title}
                </h3>
                <p className="text-xs text-slate-500">
                  Pricing: <strong className="text-gold-700 font-semibold">Custom Quote on Request</strong> (Tailored to flight dates &amp; hotel choice)
                </p>
              </div>

              <button
                onClick={() => setActiveModalTour(null)}
                className="p-2 rounded-full hover:bg-ivory-200 text-navy-900 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Day-by-Day Timeline */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Detailed Daily Schedule
              </h4>
              <div className="space-y-4">
                {activeModalTour.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="flex items-start gap-4 p-4 rounded-xl bg-ivory-50 border border-border-muted"
                  >
                    <div className="w-10 h-10 rounded-full bg-navy-900 text-gold-400 font-serif font-bold flex items-center justify-center text-sm flex-shrink-0">
                      D{day.day}
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-serif font-bold text-navy-900 text-base">
                        Day {day.day}: {day.title}
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {day.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/60 space-y-2">
                <h5 className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  ✓ What&apos;s Included
                </h5>
                <ul className="space-y-1 text-xs text-emerald-950">
                  {activeModalTour.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200/60 space-y-2">
                <h5 className="text-xs font-bold text-rose-800 uppercase tracking-wider">
                  ✕ What&apos;s Excluded
                </h5>
                <ul className="space-y-1 text-xs text-rose-950">
                  {activeModalTour.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-rose-500 font-bold flex-shrink-0">•</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer CTAs */}
            <div className="pt-4 border-t border-ivory-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                🔒 Custom date adjustments &amp; flight upgrades available on request.
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setActiveModalTour(null)}
                  className="px-5 py-2.5 rounded-full border border-border-muted text-xs font-semibold hover:bg-ivory-200 text-slate-700"
                >
                  Close
                </button>
                <Link
                  href={`/contact?intent=quote&tour=${activeModalTour.slug}`}
                  className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs px-6 py-2.5 rounded-full transition-all shadow-soft flex items-center gap-1.5"
                >
                  <span>Request Booking Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
