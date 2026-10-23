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
  Users,
  Plane,
  ExternalLink,
  Navigation,
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
          3. OFFICE COORDINATION & OPERATIONS TEAM (ABBAS AHMAD SAIFI & WAQAR AHMAD)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20 sm:mb-28">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gold-400/50 shadow-sm text-gold-800 text-xs font-bold tracking-widest uppercase">
            <Users className="w-3.5 h-3.5 text-gold-600" />
            <span>Operations &amp; Client Coordination</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-navy-950 tracking-tight">
            Key Office Administration
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The dedicated professionals handling daily document processing, client communications,
            and seamless tour execution at Bilal Travels &amp; Tours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 perspective-1000">
          {/* Card 1: Abbas Ahmad Saifi */}
          <Card3D
            maxTilt={8}
            glareOpacity={0.2}
            glareColor="gold"
            className="bg-white rounded-3xl border border-border-muted hover:border-gold-400 shadow-card hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="relative bg-gradient-to-br from-navy-950 via-[#10243C] to-navy-900 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-gold-400/20">
                <div className="relative w-36 h-48 sm:w-44 sm:h-56 rounded-2xl overflow-hidden border-2 border-gold-400/60 shadow-xl flex-shrink-0 bg-navy-900 group">
                  <img
                    src="/images/coordinator-abbas-ahmad-saifi.jpg"
                    alt="Abbas Ahmad Saifi - Office Coordinator"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="text-center sm:text-left space-y-2 flex-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 text-[10px] font-bold tracking-widest uppercase">
                    <Briefcase className="w-3 h-3 text-gold-400" />
                    <span>Office Administration</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight">
                    Abbas Ahmad Saifi
                  </h3>

                  <p className="text-xs text-gold-400/90 font-mono tracking-wide">
                    Office Coordinator — Bilal Travels &amp; Tours
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-[11px] text-slate-300">
                    <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10">
                      ✓ Client Desk Liaison
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10">
                      ✓ Document Verification
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold-600" />
                  <span>Key Responsibilities &amp; Role</span>
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Oversees the daily coordination of the Lahore head office, managing walk-in client
                  consultations, document intake for visa processing, and smooth inter-departmental
                  workflow between the management and travellers.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 rounded-xl bg-ivory-50 border border-border-muted">
                    <span className="font-bold text-navy-900 block">Office Presence</span>
                    <span className="text-slate-600 text-[11px]">Mon – Sat (Lahore Hub)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-ivory-50 border border-border-muted">
                    <span className="font-bold text-navy-900 block">Direct Inquiry</span>
                    <a href="tel:+923065602040" className="text-gold-600 font-semibold text-[11px] hover:underline">
                      0306 5602040
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-8 py-3.5 bg-ivory-50 border-t border-border-muted flex items-center justify-between text-xs text-slate-500">
              <span className="font-medium text-navy-900">Coordination Desk</span>
              <span className="text-gold-600 font-mono font-semibold">Lahore Office</span>
            </div>
          </Card3D>

          {/* Card 2: Waqar Ahmad */}
          <Card3D
            maxTilt={8}
            glareOpacity={0.2}
            glareColor="gold"
            className="bg-white rounded-3xl border border-border-muted hover:border-gold-400 shadow-card hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="relative bg-gradient-to-br from-navy-950 via-[#10243C] to-navy-900 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-gold-400/20">
                <div className="relative w-36 h-48 sm:w-44 sm:h-56 rounded-2xl overflow-hidden border-2 border-gold-400/60 shadow-xl flex-shrink-0 bg-navy-900 group">
                  <img
                    src="/images/operations-waqar-ahmad.jpg"
                    alt="Waqar Ahmad - Operations & Customer Relations"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="text-center sm:text-left space-y-2 flex-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold tracking-widest uppercase">
                    <Globe className="w-3 h-3 text-emerald-400" />
                    <span>Operations &amp; Support</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight">
                    Waqar Ahmad
                  </h3>

                  <p className="text-xs text-gold-400/90 font-mono tracking-wide">
                    Operations &amp; Client Support — Bilal Travels
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-[11px] text-slate-300">
                    <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10">
                      ✓ Tour Logistics
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10">
                      ✓ Pilgrim &amp; Visa Assistance
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold-600" />
                  <span>Key Responsibilities &amp; Role</span>
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Facilitates holiday package coordination, itinerary dispatch, and dedicated client
                  support throughout the visa application lifecycle, ensuring travellers receive prompt
                  updates and hassle-free departures.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 rounded-xl bg-ivory-50 border border-border-muted">
                    <span className="font-bold text-navy-900 block">Support Desk</span>
                    <span className="text-slate-600 text-[11px]">24/7 Client Helpline</span>
                  </div>
                  <div className="p-3 rounded-xl bg-ivory-50 border border-border-muted">
                    <span className="font-bold text-navy-900 block">Direct Inquiry</span>
                    <a href="tel:+923144310865" className="text-gold-600 font-semibold text-[11px] hover:underline">
                      0314 4310865
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-8 py-3.5 bg-ivory-50 border-t border-border-muted flex items-center justify-between text-xs text-slate-500">
              <span className="font-medium text-navy-900">Operations Desk</span>
              <span className="text-gold-600 font-mono font-semibold">Client Relations</span>
            </div>
          </Card3D>
        </div>
      </section>

      {/* =========================================================================
          4. OUR CORE VALUES (3D TILT CARDS)
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
          5. ACCREDITED GLOBAL AIRLINE PARTNERS & CONSORTIUMS
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20 sm:mb-28">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gold-400/50 shadow-sm text-gold-800 text-xs font-bold tracking-widest uppercase">
            <Plane className="w-3.5 h-3.5 text-gold-600" />
            <span>Authorized Flight Partnerships</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-navy-950 tracking-tight">
            Accredited Global Airline Partners
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Direct airline seat allocations, discounted group tariffs, and certified Umrah flight
            arrangements with the world&apos;s leading international carriers.
          </p>
        </div>

        {/* Airline Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 perspective-1000 mb-10">
          {[
            {
              name: "Saudia Airlines",
              iata: "SV",
              route: "Official Umrah Carrier",
              hub: "Jeddah & Madinah Direct",
              badge: "Umrah Partner",
              color: "text-emerald-700 bg-emerald-50 border-emerald-200",
            },
            {
              name: "Emirates",
              iata: "EK",
              route: "Global Luxury Network",
              hub: "Dubai International Hub",
              badge: "5-Star Global",
              color: "text-red-700 bg-red-50 border-red-200",
            },
            {
              name: "Qatar Airways",
              iata: "QR",
              route: "Premier World Transit",
              hub: "Doha International Hub",
              badge: "World Class",
              color: "text-purple-800 bg-purple-50 border-purple-200",
            },
            {
              name: "Turkish Airlines",
              iata: "TK",
              route: "Europe & Istanbul Gateway",
              hub: "Istanbul Airport",
              badge: "Holiday Direct",
              color: "text-rose-700 bg-rose-50 border-rose-200",
            },
            {
              name: "Pakistan Int. Airlines",
              iata: "PK",
              route: "National Flag Carrier",
              hub: "Direct From Pakistan",
              badge: "National Carrier",
              color: "text-emerald-800 bg-emerald-50 border-emerald-200",
            },
            {
              name: "flydubai",
              iata: "FZ",
              route: "Middle East Express",
              hub: "Dubai Connect",
              badge: "Daily Departures",
              color: "text-blue-700 bg-blue-50 border-blue-200",
            },
            {
              name: "flynas",
              iata: "XY",
              route: "Pilgrim Budget Direct",
              hub: "Riyadh & Jeddah",
              badge: "Umrah Saver",
              color: "text-lime-800 bg-lime-50 border-lime-200",
            },
            {
              name: "Air Arabia",
              iata: "G9",
              route: "Regional Gulf Link",
              hub: "Sharjah International",
              badge: "Value Flights",
              color: "text-red-700 bg-red-50 border-red-200",
            },
          ].map((airline) => (
            <Card3D
              key={airline.name}
              maxTilt={10}
              glareOpacity={0.2}
              glareColor="gold"
              className="bg-white rounded-2xl p-5 border border-border-muted hover:border-gold-400 shadow-sm hover:shadow-card transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-navy-950 text-gold-400">
                    {airline.iata}
                  </span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${airline.color}`}>
                    {airline.badge}
                  </span>
                </div>

                <div>
                  <h4 className="font-serif font-bold text-base text-navy-950 group-hover:text-gold-700 transition-colors">
                    {airline.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">{airline.route}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>{airline.hub}</span>
                <Plane className="w-3.5 h-3.5 text-gold-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card3D>
          ))}
        </div>

        {/* Accreditations Trust Banner */}
        <div className="bg-gradient-to-r from-navy-950 via-[#0F2036] to-navy-900 rounded-2xl p-6 sm:p-8 text-white border border-gold-400/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 flex-shrink-0">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                Official Regulatory Accreditations
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Officially recognized by the Ministry of Tourism (Govt of Pakistan DTS) &amp; TAAP.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-gold-300 font-medium">
              ✓ DTS License Holder
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-gold-300 font-medium">
              ✓ TAAP Registered Member
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-gold-300 font-medium">
              ✓ Authorized Umrah Ground Network
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. IN-PERSON OFFICE PRESENCE WITH INTERACTIVE GOOGLE MAP & 1-CLICK NAVIGATION
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-border-muted shadow-card">
          <div className="space-y-3 mb-8 sm:mb-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-700 text-xs font-bold tracking-widest uppercase">
              <MapPin className="w-3.5 h-3.5 text-gold-600" />
              <span>Physical Presence &amp; Directions</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-navy-950">
              Visit Us for an In-Person Consultation
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              Prefer to sit down over tea and review your holiday itineraries or passport visa documents?
              Our Lahore branch office warmly welcomes you throughout the week.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left 5 Cols: Office Details & Navigation CTAs */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div className="space-y-4 text-sm text-slate-700">
                {/* Office Location Card */}
                <div className="p-5 rounded-2xl bg-ivory-50 border border-border-muted space-y-2">
                  <div className="flex items-center gap-2.5 text-navy-900 font-bold">
                    <Building2 className="w-5 h-5 text-gold-600" />
                    <h4 className="text-base">Principal Office — Lahore</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                    1 Minar wali Masjid, Kacha Jail road, Chungi Amar Sidhu Lahore, Pakistan
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-500 pt-1 pl-7">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>Mon – Sat: 10:00 AM – 7:00 PM (Sunday Closed)</span>
                  </div>
                </div>

                {/* Helplines Card */}
                <div className="p-5 rounded-2xl bg-ivory-50 border border-border-muted space-y-2">
                  <div className="flex items-center gap-2.5 text-navy-900 font-bold">
                    <Phone className="w-5 h-5 text-gold-600" />
                    <h4 className="text-base">Direct Contact &amp; Helplines</h4>
                  </div>
                  <div className="pl-7 space-y-1 text-xs sm:text-sm">
                    <p className="text-slate-600">
                      Helplines:{" "}
                      <a href="tel:+923065602040" className="hover:text-gold-600 font-bold text-navy-900">
                        0306 5602040
                      </a>
                      {" / "}
                      <a href="tel:+923144310865" className="hover:text-gold-600 font-bold text-navy-900">
                        0314 4310865
                      </a>
                    </p>
                    <p className="text-slate-500 text-xs">
                      Official Email:{" "}
                      <a href="mailto:info@bilaltravels.pk" className="hover:text-gold-600">
                        info@bilaltravels.pk
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* 1-Click Navigation Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1+Minar+wali+Masjid+Kacha+Jail+road+Chungi+Amar+Sidhu+Lahore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-navy-950 hover:bg-gold-500 hover:text-navy-950 text-white font-bold py-3.5 px-6 rounded-2xl text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-2.5 shadow-card group"
                >
                  <Navigation className="w-4 h-4 text-gold-400 group-hover:text-navy-950 transition-colors" />
                  <span>Open Live Route in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://wa.me/923065602040?text=Assalam-o-Alaikum%20Bilal%20Travels,%20I%20am%20visiting%20your%20office%20at%20Chungi%20Amar%20Sidhu."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl border border-emerald-600/30 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-semibold text-xs text-center flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>WhatsApp Desk</span>
                  </a>

                  <Link
                    href="/contact?intent=plan-trip"
                    className="py-3 px-4 rounded-xl border border-gold-400/50 bg-gold-50 text-gold-900 hover:bg-gold-100 font-semibold text-xs text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Book Meeting</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-700" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Interactive Embedded Google Map */}
            <div className="lg:col-span-7">
              <div className="w-full h-full min-h-[360px] sm:min-h-[420px] rounded-3xl overflow-hidden border-2 border-gold-400/40 shadow-xl relative bg-slate-100 group">
                <iframe
                  title="Bilal Travels Principal Office Location"
                  src="https://maps.google.com/maps?q=1+Minar+wali+Masjid,+Kacha+Jail+road,+Chungi+Amar+Sidhu+Lahore&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  className="w-full h-full min-h-[360px] sm:min-h-[420px] border-0 filter contrast-[1.05]"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Map Floating Badge */}
                <div className="absolute top-4 left-4 bg-navy-950/95 backdrop-blur-md text-white px-4 py-2.5 rounded-2xl border border-gold-400/40 shadow-lg pointer-events-none flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <div>
                    <span className="text-xs font-bold text-white block">Bilal Travels &amp; Tours</span>
                    <span className="text-[10px] text-gold-400 font-mono">1 Minar wali Masjid, Chungi Amar Sidhu</span>
                  </div>
                </div>

                {/* Full Map Action Floating Tab */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1+Minar+wali+Masjid+Kacha+Jail+road+Chungi+Amar+Sidhu+Lahore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-white/95 hover:bg-white text-navy-950 text-xs font-bold px-4 py-2 rounded-xl shadow-md border border-slate-200 flex items-center gap-1.5 transition-all hover:scale-105"
                >
                  <span>View Larger Map</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gold-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
