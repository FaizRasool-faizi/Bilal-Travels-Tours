"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  ShieldCheck,
  ArrowRight,
  Plane,
  Compass,
  Filter,
} from "lucide-react";
import { DESTINATIONS } from "@/lib/data";

export default function DestinationsPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>("All");

  const regions = ["All", "Europe", "Middle East", "Asia", "Spiritual"];

  const filteredDestinations =
    selectedRegion === "All"
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.region === selectedRegion);

  return (
    <div className="bg-ivory-100 min-h-screen py-12">
      {/* Top Breadcrumb & Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-600 mb-3">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-navy-900">Destinations</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border-muted">
          <div className="space-y-3 max-w-2xl">
            <h1 className="font-serif text-4xl sm:text-5xl text-navy-900 tracking-tight leading-tight">
              Curated World Destinations
            </h1>
            <p className="text-slate-600 text-base sm:text-lg">
              Explore handpicked international destinations tailored for Pakistani travellers.
              From historic Ottoman minarets to futuristic skyline marvels and sacred pilgrimages.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact?intent=plan-trip"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-6 py-3 rounded-full text-sm shadow-soft hover:shadow-hover transition-all"
            >
              <Plane className="w-4 h-4" />
              <span>Request Custom Destination</span>
            </Link>
          </div>
        </div>

        {/* Region Filter Tabs */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter Region:</span>
          </div>
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                selectedRegion === region
                  ? "bg-navy-900 text-white shadow-soft"
                  : "bg-white text-charcoal-900 hover:bg-ivory-200 border border-border-muted"
              }`}
            >
              {region === "Spiritual" ? "🕌 Spiritual / Umrah" : region}
            </button>
          ))}
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="group bg-white rounded-2xl overflow-hidden border border-border-muted shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative h-60 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url('${dest.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>

                  {/* Flag & Country Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-navy-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
                      <span>{dest.flag}</span>
                      <span>{dest.country}</span>
                    </span>
                  </div>

                  {/* Tours Count Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-gold-500 text-navy-950 text-xs font-extrabold px-3 py-1.5 rounded-full shadow-sm">
                      {dest.toursCount} Available Tours
                    </span>
                  </div>

                  {/* Title & Tagline overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif text-2xl font-bold tracking-tight">{dest.name}</h3>
                    <p className="text-xs text-ivory-200 line-clamp-1 mt-0.5">{dest.tagline}</p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {dest.description}
                  </p>

                  {/* Key Travel Facts */}
                  <div className="space-y-2 pt-2 border-t border-ivory-200 text-xs text-slate-600">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-gold-600" />
                        Best Time:
                      </span>
                      <span className="font-semibold text-navy-900">{dest.bestTimeToVisit}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        Visa Ease:
                      </span>
                      <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        {dest.visaEase}
                      </span>
                    </div>
                  </div>

                  {/* Highlights Spots Tags */}
                  <div className="pt-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Must-Visit Landmarks
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {dest.popularSpots.map((spot) => (
                        <span
                          key={spot}
                          className="bg-ivory-100 border border-border-muted text-charcoal-900 text-[11px] px-2.5 py-1 rounded-md"
                        >
                          {spot}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-ivory-200 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-500 block">Pricing</span>
                    <span className="font-serif text-base font-bold text-gold-700">
                      Quote On Request
                    </span>
                  </div>

                  <Link
                    href={`/tours?destination=${dest.slug}`}
                    className="inline-flex items-center gap-1.5 bg-navy-900 hover:bg-gold-500 text-white hover:text-navy-950 font-bold text-xs px-5 py-2.5 rounded-full transition-all duration-300"
                  >
                    <span>View Tours</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Personalized Planning Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 border border-navy-800 shadow-hover flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">
              Bespoke Travel Planning
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl">Have Another Destination in Mind?</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We arrange custom worldwide visas, flight tickets, private chauffeured cars, and
              hand-selected 4-star &amp; 5-star hotels for any global country.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <Link
              href="/contact?intent=plan-trip"
              className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-8 py-3.5 rounded-full text-sm shadow-soft hover:-translate-y-0.5 transition-all text-center w-full sm:w-auto"
            >
              Plan Custom Itinerary
            </Link>
            <a
              href="https://wa.me/923065602040"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 hover:border-gold-400 text-white hover:text-gold-400 px-6 py-3.5 rounded-full text-sm transition-all text-center w-full sm:w-auto"
            >
              WhatsApp Consultant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
