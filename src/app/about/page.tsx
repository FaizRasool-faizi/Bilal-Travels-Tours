"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Globe,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Quote,
  Compass,
  Star,
  Building2,
  Clock,
  Briefcase,
} from "lucide-react";
import Card3D from "@/components/ui/Card3D";

export default function AboutPage() {
  return (
    <div className="bg-[#FAF8F3] min-h-screen py-10 sm:py-16 overflow-hidden">
      {/* =========================================================================
          1. TOP BREADCRUMB & HERO STATEMENT
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-16 sm:mb-20">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-600 mb-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-navy-950 font-bold">About Us</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-12 border-b border-border-muted">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gold-400/50 shadow-sm text-gold-800 text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Our Heritage &amp; Vision</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] text-navy-950 tracking-tight leading-[1.15]">
              Pakistan&apos;s Trusted Vanguard in International Travel
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Founded on the enduring values of integrity, sincere hospitality, and unyielding
              transparency, Bilal Travels &amp; Tours continues to pioneer seamless global holidays,
              verified visa consultancy, and sacred Umrah journeys for discerning Pakistani families.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <Card3D
              maxTilt={10}
              glareOpacity={0.25}
              glareColor="gold"
              className="bg-gradient-to-br from-navy-950 via-[#0F2036] to-navy-900 text-white rounded-3xl p-8 border border-gold-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.35)] space-y-6 backdrop-blur-md"
            >
              <div className="flex items-center gap-4 translate-z-20">
                <div className="w-16 h-16 rounded-2xl bg-white/10 p-2.5 border border-gold-400/30 flex items-center justify-center flex-shrink-0 shadow-md">
                  <img
                    src="/brand/logo.png"
                    alt="Bilal Travels Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                    Bilal Travels &amp; Tours
                  </h3>
                  <span className="text-[11px] uppercase tracking-widest text-gold-400 font-semibold block">
                    Licensed Travel Consultancy
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed translate-z-20">
                Officially licensed by the Department of Tourist Services (DTS), Government of Pakistan.
                Accredited partner with major global airlines and 5-star Saudi hospitality consortiums.
              </p>

              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-center translate-z-20">
                <div className="p-2 rounded-xl bg-white/5">
                  <span className="font-serif text-3xl font-bold text-gold-400">12+</span>
                  <p className="text-[11px] text-slate-300 font-medium">Years Trusted Heritage</p>
                </div>
                <div className="p-2 rounded-xl bg-white/5">
                  <span className="font-serif text-3xl font-bold text-gold-400">14k+</span>
                  <p className="text-[11px] text-slate-300 font-medium">Passports Handled</p>
                </div>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          2. EXECUTIVE LEADERSHIP SHOWCASE (CHAIRPERSON & CEO)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20 sm:mb-28">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gold-400/50 shadow-sm text-gold-800 text-xs font-bold tracking-widest uppercase">
            <Award className="w-3.5 h-3.5 text-gold-600" />
            <span>Executive Leadership</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-navy-950 tracking-tight">
            Guiding Vision &amp; Governance
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Meet the leadership steering Bilal Travels &amp; Tours with personal dedication, spiritual
            commitment, and international standard excellence.
          </p>
        </div>

        {/* 2 Executive Leadership Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 perspective-1000">
          {/* Card 1: Chair Person Malik Ahmad Ali */}
          <Card3D
            maxTilt={8}
            glareOpacity={0.25}
            glareColor="gold"
            className="bg-white rounded-3xl border border-border-muted hover:border-gold-400 shadow-card hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] transition-all duration-500 overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Top Banner & Photo Area */}
              <div className="relative bg-gradient-to-br from-navy-950 via-[#10243C] to-navy-900 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-gold-400/20">
                <div className="relative w-36 h-48 sm:w-44 sm:h-56 rounded-2xl overflow-hidden border-2 border-gold-400/60 shadow-xl flex-shrink-0 bg-navy-900 group">
                  <img
                    src="/images/chairperson-malik-ahmad-ali.jpg"
                    alt="Malik Ahmad Ali - Chair Person"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="text-center sm:text-left space-y-2 flex-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 text-[10px] font-bold tracking-widest uppercase">
                    <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                    <span>Chairperson of the Board</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight">
                    Malik Ahmad Ali
                  </h3>

                  <p className="text-xs text-gold-400/90 font-mono tracking-wide">
                    Chair Person — Bilal Travels &amp; Tours
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-[11px] text-slate-300">
                    <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10">
                      ✓ Strategic Guidance
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10">
                      ✓ Sacred Pilgrimage Care
                    </span>
                  </div>
                </div>
              </div>

              {/* Message from Chairperson */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-gold-600 text-xs font-bold uppercase tracking-wider">
                  <Quote className="w-4 h-4 fill-gold-600" />
                  <span>Chairperson&apos;s Message</span>
                </div>

                <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed italic relative pl-4 border-l-2 border-gold-400/60">
                  &ldquo;Humari bunyaad sirf ticket ya visa bechnay par nahi, balkay Allah k mehmaano ki
                  khidmat aur Pakistani khandaano k aitmaad (Trust) par qaim hay. Humara har musafir humare
                  liye ahem hay. Har document, har hotel booking, aur har safar ko hum 100% imaandari aur
                  shafafiyat k sath handle kartay hain ta k aap ka safar pur-sukoon aur ba-barkat ho.&rdquo;
                </blockquote>

                <p className="text-slate-600 text-xs leading-relaxed pt-1">
                  Under the stewardship of Malik Ahmad Ali, Bilal Travels &amp; Tours has established
                  a sterling heritage of customer-first ethics, personalized elder assistance, and reliable
                  embassy liaison across Punjab.
                </p>
              </div>
            </div>

            <div className="px-6 sm:px-8 py-4 bg-ivory-50 border-t border-border-muted flex items-center justify-between text-xs text-slate-500">
              <span className="font-medium text-navy-900">Senior Leadership Desk</span>
              <span className="text-gold-600 font-mono font-semibold">Lahore Office</span>
            </div>
          </Card3D>

          {/* Card 2: CEO Malik Bilal Abbas Saifi */}
          <Card3D
            maxTilt={8}
            glareOpacity={0.25}
            glareColor="gold"
            className="bg-white rounded-3xl border border-border-muted hover:border-gold-400 shadow-card hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] transition-all duration-500 overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Top Banner & Photo Area */}
              <div className="relative bg-gradient-to-br from-navy-950 via-[#10243C] to-navy-900 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-gold-400/20">
                <div className="relative w-36 h-48 sm:w-44 sm:h-56 rounded-2xl overflow-hidden border-2 border-gold-400/60 shadow-xl flex-shrink-0 bg-navy-900 group">
                  <img
                    src="/images/ceo-bilal-abbas-saifi.jpg"
                    alt="Malik Bilal Abbas Saifi - Chief Executive Officer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="text-center sm:text-left space-y-2 flex-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold tracking-widest uppercase">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    <span>Chief Executive Officer</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight">
                    Malik Bilal Abbas Saifi
                  </h3>

                  <p className="text-xs text-gold-400/90 font-mono tracking-wide">
                    Chief Executive Officer (CEO)
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-[11px] text-slate-300">
                    <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10">
                      ✓ Modern Travel Tech
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10">
                      ✓ Global Tourism Partnerships
                    </span>
                  </div>
                </div>
              </div>

              {/* Message from CEO */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-gold-600 text-xs font-bold uppercase tracking-wider">
                  <Quote className="w-4 h-4 fill-gold-600" />
                  <span>CEO&apos;s Vision &amp; Modern Standard</span>
                </div>

                <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed italic relative pl-4 border-l-2 border-gold-400/60">
                  &ldquo;Aap ka har safar aik nayi manzil aur nayi umeed hay. Bilal Travels ko hum nay
                  jadid tareen digital standards, fast visa tracking, aur direct international partnerships
                  k sath introduce kiya hay ta k har Pakistani musafir VIP luxury aur mukammal ahtiyat k
                  sath duniya ghumm sakay.&rdquo;
                </blockquote>

                <p className="text-slate-600 text-xs leading-relaxed pt-1">
                  Leading with youthful energy, tech-enabled visa processing, and forward-looking international
                  holiday packages, Malik Bilal Abbas Saifi represents the bright future and ambitious expansion
                  of the Bilal Travels legacy.
                </p>
              </div>
            </div>

            <div className="px-6 sm:px-8 py-4 bg-ivory-50 border-t border-border-muted flex items-center justify-between text-xs text-slate-500">
              <span className="font-medium text-navy-900">Executive Secretariat</span>
              <span className="text-gold-600 font-mono font-semibold">Lahore Hub</span>
            </div>
          </Card3D>
        </div>
      </section>

      {/* =========================================================================
          3. OUR CORE VALUES (3D TILT CARDS)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20 sm:mb-28">
        <div className="text-center space-y-2 mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-600">The Bilal Standard</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy-950">
            Why Discerning Travellers Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
          <Card3D
            maxTilt={12}
            glareOpacity={0.25}
            glareColor="gold"
            className="bg-white rounded-3xl p-8 border border-border-muted hover:border-gold-400 shadow-card space-y-4"
          >
            <div className="translate-z-30 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-600 shadow-sm">
                <ShieldCheck className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="font-serif text-2xl text-navy-950">100% Price Transparency</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                No hidden service charges, sudden hotel downgrades, or unexpected fuel surcharges. What
                is quoted in your written itinerary is exactly what you receive.
              </p>
            </div>
          </Card3D>

          <Card3D
            maxTilt={12}
            glareOpacity={0.25}
            glareColor="gold"
            className="bg-white rounded-3xl p-8 border border-border-muted hover:border-gold-400 shadow-card space-y-4"
          >
            <div className="translate-z-30 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-600 shadow-sm">
                <Globe className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="font-serif text-2xl text-navy-950">Ground Teams Abroad</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We don&apos;t just book online tickets. We maintain direct, vetted ground
                representatives and bilingual Urdu/English tour guides stationed in Istanbul, Dubai,
                Makkah, and Madinah.
              </p>
            </div>
          </Card3D>

          <Card3D
            maxTilt={12}
            glareOpacity={0.25}
            glareColor="gold"
            className="bg-white rounded-3xl p-8 border border-border-muted hover:border-gold-400 shadow-card space-y-4"
          >
            <div className="translate-z-30 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-600 shadow-sm">
                <HeartHandshake className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="font-serif text-2xl text-navy-950">Personalized Touch</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every family, couple, and pilgrim has unique expectations. Our consultants invest the
                time to tailor flight timings, child-friendly excursions, and wheelchair logistics.
              </p>
            </div>
          </Card3D>
        </div>
      </section>

      {/* =========================================================================
          4. IN-PERSON OFFICE PRESENCE & VERIFIED ACCREDITATIONS
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border-muted shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-gold-600 font-bold block">
                Physical Presence
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-navy-950">
                Visit Us for an In-Person Consultation
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Prefer to sit down over tea and review your holiday itineraries or visa documents?
                Our branch office warmly welcomes you throughout the week.
              </p>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-ivory-50 border border-border-muted">
                  <MapPin className="w-5 h-5 text-gold-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy-900">Principal Office — Lahore</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      1 Minar wali Masjid, Kacha Jail road, Chungi Amar Sidhu Lahore, Pakistan
                    </p>
                    <p className="text-xs text-slate-500 mt-1">Hours: Mon – Sat: 10:00 AM – 7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-ivory-50 border border-border-muted">
                  <Phone className="w-5 h-5 text-gold-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy-900">Dedicated Helplines</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Phone:{" "}
                      <a href="tel:+923065602040" className="hover:text-gold-600 font-medium">
                        0306 5602040
                      </a>
                      {" / "}
                      <a href="tel:+923144310865" className="hover:text-gold-600 font-medium">
                        0314 4310865
                      </a>
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Official Email: info@bilaltravels.pk
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accreditations & Licenses Card */}
            <div className="bg-ivory-50 rounded-2xl p-6 sm:p-8 border border-border-muted flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-900">
                  <Award className="w-4 h-4 text-gold-600" />
                  <span>Verified Credentials &amp; Affiliations</span>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Government of Pakistan DTS License Holder</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Member of Travel Agents Association of Pakistan (TAAP)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Authorized Umrah Ground Handling Partner in Saudi Arabia</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Certified Turkish &amp; UAE Tourism Specialist</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-border-muted">
                <Link
                  href="/contact?intent=plan-trip"
                  className="w-full bg-navy-950 hover:bg-gold-500 hover:text-navy-950 text-white font-bold py-3.5 rounded-full text-xs text-center transition-all flex items-center justify-center gap-2 shadow-card"
                >
                  <span>Connect With a Travel Advisor</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
