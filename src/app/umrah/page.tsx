"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Phone,
  Plane,
  Sparkles,
  HeartHandshake,
} from "lucide-react";
import { UMRAH_PACKAGES, UmrahPackage } from "@/lib/data";

export default function UmrahPage() {
  const [selectedPackage, setSelectedPackage] = useState<UmrahPackage>(UMRAH_PACKAGES[0]);
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "Lahore",
    travellerCount: "2",
    departureMonth: "Next Month",
    packageChoice: "VIP 5-Star Royal Clock Tower",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className="bg-ivory-100 min-h-screen py-12">
      {/* Top Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-600 mb-3">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-navy-900">Umrah &amp; Pilgrimage</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border-muted">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-bold tracking-wider uppercase">
              <span>🕌 Sacred Pilgrimage Services</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-navy-900 tracking-tight leading-tight">
              Spiritual Umrah Packages
            </h1>
            <p className="text-slate-600 text-base sm:text-lg">
              Perform your holy rites with unconditional peace of mind. Zero-meter Haram proximity,
              luxury high-speed bullet train transfers, and caring ground support throughout.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/923000000000?text=Assalam%20o%20Alaikum%2C%20I%20want%20to%20inquire%20about%20Umrah%20Packages"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-full text-sm shadow-soft transition-all"
            >
              <span>WhatsApp Umrah Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Package Tiers Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {UMRAH_PACKAGES.map((pkg) => {
            const isSelected = selectedPackage.id === pkg.id;
            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg)}
                className={`cursor-pointer rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between border ${
                  isSelected
                    ? "bg-white border-gold-500 shadow-hover ring-2 ring-gold-500/20"
                    : "bg-white/90 border-border-muted hover:border-gold-300 shadow-card"
                }`}
              >
                <div className="space-y-6">
                  {/* Top Tier Badge & Price */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-gold-600 block">
                        {pkg.tier}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-navy-900 mt-1">
                        {pkg.title}
                      </h3>
                    </div>
                  </div>

                  {/* Pricing Box */}
                  <div className="p-4 rounded-2xl bg-ivory-50 border border-border-muted flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider block">
                        Package Pricing
                      </span>
                      <span className="font-serif text-lg font-bold text-gold-700">
                        Custom Quote on Request
                      </span>
                    </div>
                    <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-semibold border border-emerald-200/60">
                      Haram Proximity
                    </span>
                  </div>

                  {/* Hotel Distances */}
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-ivory-100/70 border border-border-muted/50 space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-navy-900">
                        <MapPin className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                        <span>Makkah: {pkg.makkahHotel}</span>
                      </div>
                      <p className="text-slate-600 pl-5 text-[11px] font-medium text-gold-700">
                        📍 {pkg.makkahDistance}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-ivory-100/70 border border-border-muted/50 space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-navy-900">
                        <MapPin className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                        <span>Madinah: {pkg.madinahHotel}</span>
                      </div>
                      <p className="text-slate-600 pl-5 text-[11px] font-medium text-gold-700">
                        📍 {pkg.madinahDistance}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Package Features
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {pkg.inclusions.slice(0, 4).map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-ivory-200">
                  <Link
                    href={`/contact?intent=umrah&package=${pkg.slug}`}
                    className={`w-full py-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      isSelected
                        ? "bg-navy-900 text-white hover:bg-gold-500 hover:text-navy-950 shadow-soft"
                        : "bg-ivory-100 hover:bg-navy-900 hover:text-white text-navy-900"
                    }`}
                  >
                    <span>Reserve Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Guided Ziyarat Tours Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border-muted shadow-card space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
              Sacred Heritage Tours Included
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-navy-900">
              Guided Ziyarat in Makkah &amp; Madinah
            </h2>
            <p className="text-slate-600 text-sm">
              All our Umrah packages feature comprehensive, escorted tours to revered Islamic
              landmarks accompanied by Urdu-speaking Islamic history guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Makkah Ziyarat Box */}
            <div className="p-6 rounded-2xl bg-ivory-50 border border-border-muted space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🕋</span>
                <div>
                  <h3 className="font-serif text-xl font-bold text-navy-900">
                    Holy Sites in Makkah Mukarramah
                  </h3>
                  <p className="text-xs text-slate-500">Historical &amp; Spiritual Milestones</p>
                </div>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-gold-600">•</span>
                  <span>
                    <strong>Jabal al-Nour &amp; Cave of Hira:</strong> Where the first revelation of
                    the Holy Quran was bestowed.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-gold-600">•</span>
                  <span>
                    <strong>Cave of Thawr:</strong> The mountain shelter of the Prophet (PBUH) and
                    Hazrat Abu Bakr (RA) during Hijrah.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-gold-600">•</span>
                  <span>
                    <strong>Mina, Arafat &amp; Muzdalifah:</strong> Walk the paths of Hajj rituals
                    and the Plains of Mercy (Jabal al-Rahmah).
                  </span>
                </li>
              </ul>
            </div>

            {/* Madinah Ziyarat Box */}
            <div className="p-6 rounded-2xl bg-ivory-50 border border-border-muted space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🕌</span>
                <div>
                  <h3 className="font-serif text-xl font-bold text-navy-900">
                    Holy Sites in Madinah Munawwarah
                  </h3>
                  <p className="text-xs text-slate-500">The Blessed City of the Prophet (PBUH)</p>
                </div>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-gold-600">•</span>
                  <span>
                    <strong>Masjid Quba:</strong> The first mosque built in Islam. Performing two
                    Rakats rewards equal to an Umrah.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-gold-600">•</span>
                  <span>
                    <strong>Mount Uhud &amp; Martyrs Cemetery:</strong> Honoring Hazrat Hamza (RA)
                    and the brave companions of Uhud.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-gold-600">•</span>
                  <span>
                    <strong>Masjid al-Qiblatayn &amp; Saba Masajid:</strong> Witness where the
                    prayer orientation was turned toward the Kaaba.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Umrah Inquiry Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-10 border border-navy-800 shadow-hover space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">
              Direct Booking &amp; Custom Dates
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl">Plan Your Sacred Umrah Journey</h2>
            <p className="text-slate-400 text-sm">
              We customize flights, visas, Haram proximity hotels, and family rooms according to
              your schedule.
            </p>
          </div>

          {inquirySent ? (
            <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <h3 className="font-serif text-xl text-white">JazakAllah Khair!</h3>
              <p className="text-xs text-emerald-200">
                Your Umrah inquiry has been forwarded to our Head of Pilgrimage Services. We will
                contact you shortly with the exact quotes.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq Mehmood"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-navy-700 text-white focus:outline-none focus:border-gold-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1">WhatsApp / Contact Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+92 300 0000000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-navy-700 text-white focus:outline-none focus:border-gold-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1">Number of Pilgrims</label>
                <select
                  value={formData.travellerCount}
                  onChange={(e) => setFormData({ ...formData, travellerCount: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-navy-700 text-white focus:outline-none focus:border-gold-500"
                >
                  <option value="1">1 Pilgrim (Individual)</option>
                  <option value="2">2 Pilgrims (Couple)</option>
                  <option value="3-4">3 to 4 Pilgrims (Family)</option>
                  <option value="5+">5+ Pilgrims (Extended Group)</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 mb-1">Preferred Package Tier</label>
                <select
                  value={formData.packageChoice}
                  onChange={(e) => setFormData({ ...formData, packageChoice: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-navy-700 text-white focus:outline-none focus:border-gold-500"
                >
                  <option value="VIP 5-Star Royal Clock Tower">
                    VIP 5-Star Royal Clock Tower (0m Haram)
                  </option>
                  <option value="4-Star Executive Comfort">
                    4-Star Executive Comfort (250m)
                  </option>
                  <option value="14 Days Affordable Economy">
                    14 Days Affordable Economy (750m)
                  </option>
                </select>
              </div>

              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold py-3.5 rounded-full text-sm shadow-soft transition-all"
                >
                  Submit Umrah Booking Request
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
