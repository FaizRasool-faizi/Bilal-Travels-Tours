"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
  Award,
  Crown,
  Train,
  Car,
  Compass,
  Star,
  ExternalLink,
  Users,
  Check,
  Building,
  ChevronRight,
} from "lucide-react";
import Card3D from "@/components/ui/Card3D";
import { UMRAH_PACKAGES, UmrahPackage } from "@/lib/data";

export default function UmrahPage() {
  const [selectedPackage, setSelectedPackage] = useState<UmrahPackage>(UMRAH_PACKAGES[0]);
  const [inquirySent, setInquirySent] = useState(false);
  const [activeZiyaratTab, setActiveZiyaratTab] = useState<"makkah" | "madinah">("makkah");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "Lahore",
    travellerCount: "2 Pilgrims (Couple)",
    departureMonth: "Upcoming Month",
    packageChoice: "VIP 5-Star Royal Clock Tower",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
  };

  const whatsappInquiryUrl = `https://wa.me/923065602040?text=${encodeURIComponent(
    `Assalam-o-Alaikum Bilal Travels, I want to inquire about the Umrah Package: ${
      selectedPackage.title
    }. Name: ${formData.name || "Pilgrim"}, Phone: ${formData.phone || "N/A"}, City: ${
      formData.city
    }, Pilgrims: ${formData.travellerCount}, Preferred Departure: ${formData.departureMonth}.`
  )}`;

  return (
    <div className="bg-[#FAF8F3] min-h-screen py-8 sm:py-14 overflow-hidden">
      {/* =========================================================================
          1. SACRED HERO SECTION WITH SPIRITUAL 3D AMBIANCE
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-12 sm:mb-16">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-600 mb-3">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-navy-950 font-bold">Umrah &amp; Pilgrimage</span>
        </div>

        <div className="relative rounded-3xl bg-gradient-to-br from-navy-950 via-[#0A1A2E] to-navy-900 text-white p-8 sm:p-12 lg:p-14 border border-gold-400/40 shadow-[0_25px_60px_rgba(0,0,0,0.35)] overflow-hidden">
          {/* Spiritual Ambient Light Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Sacred Arabic Calligraphy Motif */}
          <div className="text-center sm:text-left mb-6">
            <span className="font-serif text-gold-300/80 text-xl sm:text-2xl tracking-widest block font-light">
              بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/15 border border-gold-400/40 text-gold-300 text-xs font-bold tracking-widest uppercase">
                <Crown className="w-4 h-4 text-gold-400" />
                <span>Zero-Meter Haram Proximity &amp; Sacred Hospitality</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
                Spiritual Umrah{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200">
                  Pilgrimage Packages
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-light">
                Perform your sacred rites with complete serenity. Direct Makkah Clock Tower courtyard
                access, luxury Haramain high-speed bullet train transfers, and 24/7 dedicated Urdu &amp;
                Punjabi speaking ground support.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="https://wa.me/923065602040?text=Assalam-o-Alaikum%20Bilal%20Travels,%20I%20want%20to%20inquire%20about%20Umrah%20Packages."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-7 py-3.5 rounded-full text-xs sm:text-sm shadow-card transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Plan Umrah With Travel Advisor</span>
                </a>

                <a
                  href="tel:+923065602040"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-3.5 rounded-full text-xs sm:text-sm transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Call Umrah Desk: 0306 5602040</span>
                </a>
              </div>
            </div>

            {/* Right: 3D Holographic Pilgrim Privilege Card */}
            <div className="lg:col-span-4">
              <Card3D
                maxTilt={12}
                glareOpacity={0.3}
                glareColor="gold"
                className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-gold-400/40 shadow-2xl text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold-400/20 text-gold-300 border border-gold-400/40 flex items-center justify-center mx-auto mb-1">
                  <Award className="w-7 h-7 text-gold-300" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Saudi Ministry Authorized
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Official ground handling tie-up with licensed Saudi Umrah consortiums &amp; Nusuk portal.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 text-center border-t border-white/10">
                  <div className="p-3 rounded-2xl bg-navy-950/70 border border-white/5">
                    <span className="font-serif text-2xl font-bold text-gold-400">8,500+</span>
                    <span className="text-[10px] text-slate-300 block">Pilgrims Served</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-navy-950/70 border border-white/5">
                    <span className="font-serif text-2xl font-bold text-gold-400">0 Meters</span>
                    <span className="text-[10px] text-slate-300 block">Haram Courtyard</span>
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. PACKAGE TIERS SHOWCASE (3D TILT CARDS)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20 sm:mb-28">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gold-400/50 shadow-sm text-gold-800 text-xs font-bold tracking-widest uppercase">
            <Star className="w-3.5 h-3.5 text-gold-600" />
            <span>Select Your Sacred Tier</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-navy-950 tracking-tight">
            Curated Umrah Packages
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            All packages are fully customized according to your family dates, flight preferences,
            and room configurations with no hidden surcharges.
          </p>
        </div>

        {/* 3 Package Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 perspective-1000 items-stretch">
          {UMRAH_PACKAGES.map((pkg, idx) => {
            const isSelected = selectedPackage.id === pkg.id;
            const isVIP = idx === 0;
            const isExecutive = idx === 1;

            return (
              <Card3D
                key={pkg.id}
                maxTilt={8}
                glareOpacity={0.25}
                glareColor="gold"
                className={`rounded-3xl p-7 transition-all duration-500 flex flex-col justify-between border relative ${
                  isSelected
                    ? "bg-white border-gold-500 shadow-[0_20px_50px_rgba(15,32,54,0.15)] ring-2 ring-gold-400/30"
                    : "bg-white/95 border-border-muted hover:border-gold-300 shadow-card"
                }`}
              >
                {/* VIP Ribbon for 5-star */}
                {isVIP && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-600 to-amber-500 text-navy-950 text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md border border-white/40 flex items-center gap-1.5">
                    <Crown className="w-3 h-3 text-navy-950" />
                    <span>Most Popular VIP Choice</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Tier Badge & Title */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                          isVIP
                            ? "bg-gold-50 text-gold-800 border-gold-300"
                            : isExecutive
                            ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                            : "bg-blue-50 text-blue-800 border-blue-300"
                        }`}
                      >
                        {pkg.tier}
                      </span>
                      <span className="text-xs text-slate-500 font-mono font-medium">
                        {pkg.duration.split(" ")[0]} Days Package
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-navy-950 mt-3 leading-snug">
                      {pkg.title}
                    </h3>
                  </div>

                  {/* Proximity & Quote Box (NO PRICE DISPLAYED) */}
                  <div className="p-4 rounded-2xl bg-ivory-50 border border-border-muted flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono block">
                        Package Pricing
                      </span>
                      <span className="font-serif text-base font-bold text-gold-700">
                        Custom Quote on Request
                      </span>
                    </div>
                    <span className="text-[11px] text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full font-semibold border border-emerald-200 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Haram Proximity</span>
                    </span>
                  </div>

                  {/* Hotel Distances Cards */}
                  <div className="space-y-3 text-xs">
                    <div className="p-3.5 rounded-2xl bg-ivory-100/70 border border-border-muted/70 space-y-1">
                      <div className="flex items-center gap-2 font-bold text-navy-950">
                        <span className="text-base">🕋</span>
                        <span>Makkah: {pkg.makkahHotel}</span>
                      </div>
                      <p className="text-slate-600 pl-6 text-[11px] font-semibold text-gold-700">
                        📍 {pkg.makkahDistance}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-ivory-100/70 border border-border-muted/70 space-y-1">
                      <div className="flex items-center gap-2 font-bold text-navy-950">
                        <span className="text-base">🕌</span>
                        <span>Madinah: {pkg.madinahHotel}</span>
                      </div>
                      <p className="text-slate-600 pl-6 text-[11px] font-semibold text-gold-700">
                        📍 {pkg.madinahDistance}
                      </p>
                    </div>
                  </div>

                  {/* Package Inclusions */}
                  <div className="space-y-2.5 pt-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono block">
                      Guaranteed Amenities
                    </span>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {pkg.inclusions.slice(0, 4).map((inc, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-6 mt-6 border-t border-border-muted space-y-2.5">
                  <a
                    href={`https://wa.me/923065602040?text=${encodeURIComponent(
                      `Assalam-o-Alaikum Bilal Travels, I want to reserve / get a custom quote for the: ${pkg.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-navy-950 hover:bg-gold-500 hover:text-navy-950 text-white font-bold py-3.5 rounded-2xl text-xs text-center transition-all flex items-center justify-center gap-2 shadow-card"
                  >
                    <span>Reserve via WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => {
                      setSelectedPackage(pkg);
                      setFormData((prev) => ({ ...prev, packageChoice: pkg.title }));
                      document.getElementById("umrah-inquiry-form")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-navy-950 hover:bg-slate-50 text-xs font-semibold text-center transition-colors block cursor-pointer"
                  >
                    Customize Dates &amp; Family Rooms
                  </button>
                </div>
              </Card3D>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          3. HARAMAIN 300 KM/H BULLET TRAIN & GROUND JOURNEY 3D TIMELINE
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20 sm:mb-28">
        <div className="rounded-3xl bg-gradient-to-br from-navy-950 via-[#0E2034] to-navy-900 text-white p-8 sm:p-12 border border-gold-400/30 shadow-2xl space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-gold-300 text-xs font-bold uppercase tracking-wider">
              <Train className="w-4 h-4 text-gold-400" />
              <span>Seamless Inter-City Transit</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              The Sacred Journey Experience
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              No exhausting 6-hour bus journeys. Travel between Makkah and Madinah in complete comfort
              aboard the 300 km/h Haramain Bullet Train.
            </p>
          </div>

          {/* 4 Journey Milestones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
            {[
              {
                step: "01",
                title: "VIP Jeddah Arrival",
                desc: "Personalized reception at King Abdulaziz Airport Jeddah. Chauffeur-driven transfer to your Makkah hotel.",
                icon: Car,
              },
              {
                step: "02",
                title: "Sacred Makkah Stay",
                desc: "Stay zero meters from the Kaaba courtyard. Resident Islamic guide accompanies your first Umrah.",
                icon: Building,
              },
              {
                step: "03",
                title: "Haramain High-Speed Train",
                desc: "Board the ultra-luxury bullet train. Scenic, peaceful 2-hour glide across the desert to Madinah.",
                icon: Train,
              },
              {
                step: "04",
                title: "Blessed Madinah Stay",
                desc: "Walk steps from Bab as-Salam gate. Salam at Roza-e-Rasool (PBUH) and guided historic Ziyarat.",
                icon: Compass,
              },
            ].map((milestone) => {
              const Icon = milestone.icon;
              return (
                <Card3D
                  key={milestone.step}
                  maxTilt={10}
                  glareOpacity={0.2}
                  glareColor="gold"
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-gold-400/50 transition-all space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-gold-400/40">
                      {milestone.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="font-serif font-bold text-lg text-white">{milestone.title}</h4>
                  <p className="text-slate-300 text-xs leading-relaxed">{milestone.desc}</p>
                </Card3D>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. GUIDED ZIYARAT IN MAKKAH & MADINAH WITH INTERACTIVE TABS
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20 sm:mb-28">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border-muted shadow-card space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 text-gold-800 text-xs font-bold uppercase tracking-widest border border-gold-400/30">
              <Compass className="w-3.5 h-3.5 text-gold-600" />
              <span>Included In Every Package</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-navy-950 font-bold">
              Guided Ziyarat in Makkah &amp; Madinah
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Every package includes comprehensive escorted tours to sacred Islamic landmarks,
              accompanied by certified Urdu-speaking Islamic history scholars.
            </p>
          </div>

          {/* Interactive City Tabs */}
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setActiveZiyaratTab("makkah")}
              className={`px-6 py-3 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeZiyaratTab === "makkah"
                  ? "bg-navy-950 text-white shadow-card scale-105"
                  : "bg-ivory-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <span>🕋 Holy Sites in Makkah Mukarramah</span>
            </button>

            <button
              onClick={() => setActiveZiyaratTab("madinah")}
              className={`px-6 py-3 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeZiyaratTab === "madinah"
                  ? "bg-navy-950 text-white shadow-card scale-105"
                  : "bg-ivory-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <span>🕌 Blessed Sites in Madinah Munawwarah</span>
            </button>
          </div>

          {/* Tab Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {activeZiyaratTab === "makkah" ? (
              <>
                <Card3D
                  maxTilt={10}
                  glareOpacity={0.2}
                  glareColor="gold"
                  className="p-6 rounded-2xl bg-ivory-50 border border-border-muted space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-xl">
                    ⛰️
                  </div>
                  <h4 className="font-serif font-bold text-navy-950 text-lg">
                    Jabal al-Nour &amp; Cave of Hira
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The holy mountain of light where Prophet Muhammad (PBUH) received the very first
                    revelation of Surah Al-Alaq through Angel Jibreel (AS).
                  </p>
                </Card3D>

                <Card3D
                  maxTilt={10}
                  glareOpacity={0.2}
                  glareColor="gold"
                  className="p-6 rounded-2xl bg-ivory-50 border border-border-muted space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-xl">
                    🏔️
                  </div>
                  <h4 className="font-serif font-bold text-navy-950 text-lg">
                    Cave of Thawr (Ghar-e-Thawr)
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The sacred mountain cave where the Holy Prophet (PBUH) and Hazrat Abu Bakr Siddiq
                    (RA) took sanctuary during the great migration (Hijrah) to Madinah.
                  </p>
                </Card3D>

                <Card3D
                  maxTilt={10}
                  glareOpacity={0.2}
                  glareColor="gold"
                  className="p-6 rounded-2xl bg-ivory-50 border border-border-muted space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-xl">
                    🏕️
                  </div>
                  <h4 className="font-serif font-bold text-navy-950 text-lg">
                    Mina, Arafat &amp; Muzdalifah
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Walk the blessed paths of Hajj rituals. Visit the Mount of Mercy (Jabal al-Rahmah)
                    and Masjid Nimra where the historic Farewell Sermon was delivered.
                  </p>
                </Card3D>
              </>
            ) : (
              <>
                <Card3D
                  maxTilt={10}
                  glareOpacity={0.2}
                  glareColor="gold"
                  className="p-6 rounded-2xl bg-ivory-50 border border-border-muted space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-xl">
                    🕌
                  </div>
                  <h4 className="font-serif font-bold text-navy-950 text-lg">
                    Masjid Quba (First Mosque)
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The first mosque built in Islam by the Prophet (PBUH). Offering two Rakats here
                    carries the divine spiritual reward equivalent to a complete Umrah.
                  </p>
                </Card3D>

                <Card3D
                  maxTilt={10}
                  glareOpacity={0.2}
                  glareColor="gold"
                  className="p-6 rounded-2xl bg-ivory-50 border border-border-muted space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-xl">
                    ⚔️
                  </div>
                  <h4 className="font-serif font-bold text-navy-950 text-lg">
                    Mount Uhud &amp; Martyrs Cemetery
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Visit the battlefield of Uhud and pay respects at the resting place of Sayyid
                    ash-Shuhada Hazrat Hamza (RA) and the revered companions of Uhud.
                  </p>
                </Card3D>

                <Card3D
                  maxTilt={10}
                  glareOpacity={0.2}
                  glareColor="gold"
                  className="p-6 rounded-2xl bg-ivory-50 border border-border-muted space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-xl">
                    🧭
                  </div>
                  <h4 className="font-serif font-bold text-navy-950 text-lg">
                    Masjid al-Qiblatayn &amp; Saba Masajid
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The historic mosque where the divine revelation instructed the prayer direction
                    to turn from Jerusalem toward the Holy Kaaba in Makkah.
                  </p>
                </Card3D>
              </>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. UMRAH INQUIRY DESK WITH INSTANT WHATSAPP DISPATCH
      ========================================================================= */}
      <section id="umrah-inquiry-form" className="max-w-4xl mx-auto px-4 sm:px-8 mb-16">
        <div className="bg-gradient-to-br from-navy-950 via-[#0F2036] to-navy-900 text-white rounded-3xl p-8 sm:p-12 border border-gold-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.35)] space-y-7">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold font-mono">
              Direct Booking &amp; Custom Dates
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Plan Your Sacred Umrah Journey
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
              We customize flights, visas, Haram proximity hotels, and family rooms according to
              your exact budget and preferred travel dates.
            </p>
          </div>

          {inquirySent ? (
            <div className="p-8 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-white font-bold">JazakAllah Khair!</h3>
              <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed max-w-md mx-auto">
                Your Umrah inquiry for <strong>{formData.packageChoice}</strong> has been received.
                Our Senior Pilgrimage Advisor will contact you shortly at {formData.phone}.
              </p>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-8 rounded-full text-xs transition-colors shadow-lg"
              >
                <span>Send via WhatsApp for Instant Response</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-300 mb-1 font-medium">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq Mehmood"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-navy-700 text-white focus:outline-none focus:border-gold-500 text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-medium">WhatsApp / Contact Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+92 300 0000000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-navy-700 text-white focus:outline-none focus:border-gold-500 text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-medium">Number of Pilgrims</label>
                <select
                  value={formData.travellerCount}
                  onChange={(e) => setFormData({ ...formData, travellerCount: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-navy-700 text-white focus:outline-none focus:border-gold-500 text-xs"
                >
                  <option value="1 Pilgrim (Individual)">1 Pilgrim (Individual)</option>
                  <option value="2 Pilgrims (Couple)">2 Pilgrims (Couple)</option>
                  <option value="3 to 4 Pilgrims (Family)">3 to 4 Pilgrims (Family)</option>
                  <option value="5+ Pilgrims (Extended Group)">5+ Pilgrims (Extended Group)</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-medium">Preferred Package Tier</label>
                <select
                  value={formData.packageChoice}
                  onChange={(e) => setFormData({ ...formData, packageChoice: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-navy-700 text-white focus:outline-none focus:border-gold-500 text-xs"
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

              <div className="sm:col-span-2 pt-2 space-y-3">
                <button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold py-3.5 rounded-2xl text-xs sm:text-sm shadow-card transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Submit Umrah Booking Request</span>
                </button>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10 text-xs flex items-center justify-center gap-2 transition-colors block text-center"
                >
                  <span>Or Send Inquiry Directly on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
                </a>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
