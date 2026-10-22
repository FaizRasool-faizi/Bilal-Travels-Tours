"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Globe,
  HeartHandshake,
  Users,
  Building,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-ivory-100 min-h-screen py-12">
      {/* Top Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-600 mb-3">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-navy-900">About Us</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-12 border-b border-border-muted">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-bold block">
              Our Heritage &amp; Promise
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy-900 tracking-tight leading-tight">
              Pakistan&apos;s Trusted Partner for International Travel
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Founded on the pillars of integrity, reliability, and heartfelt hospitality, Bilal
              Travels &amp; Tours is dedicated to redefining international holidays, visa
              consultancy, and sacred Umrah pilgrimages for discerning Pakistani travellers.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-navy-950 text-white rounded-3xl p-8 border border-navy-800 shadow-hover space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-white/10 p-2 flex items-center justify-center">
                  <img
                    src="/brand/logo.png"
                    alt="Bilal Travels Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-white">Bilal Travels</h3>
                  <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                    &amp; Tours (Pvt) Ltd.
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Licensed by the Department of Tourist Services (DTS), Government of Pakistan, and
                affiliated with premier global airlines and international hotel consortiums.
              </p>

              <div className="pt-2 border-t border-navy-800 grid grid-cols-2 gap-4 text-center">
                <div>
                  <span className="font-serif text-2xl font-bold text-gold-400">10+</span>
                  <p className="text-[11px] text-slate-400">Years of Service</p>
                </div>
                <div>
                  <span className="font-serif text-2xl font-bold text-gold-400">12k+</span>
                  <p className="text-[11px] text-slate-400">Journeys Curated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <div className="text-center space-y-2 mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-600">The Bilal Standard</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy-900">
            Why Discerning Travellers Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-border-muted shadow-card space-y-4 hover:border-gold-400 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl text-navy-900">100% Price Transparency</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              No hidden service charges, sudden hotel downgrades, or unexpected fuel surcharges. What
              is quoted in your written itinerary is exactly what you receive.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-border-muted shadow-card space-y-4 hover:border-gold-400 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-600">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl text-navy-900">Ground Teams Abroad</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We don&apos;t just book online tickets. We maintain direct, vetted ground
              representatives and bilingual Urdu/English tour guides stationed in Istanbul, Dubai,
              Makkah, and Madinah.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-border-muted shadow-card space-y-4 hover:border-gold-400 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-600">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl text-navy-900">Personalized Touch</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every family, couple, and pilgrim has unique expectations. Our consultants invest the
              time to tailor flight timings, child-friendly excursions, and wheelchair logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Office Locations & Direct Contacts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border-muted shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-gold-600 font-bold block">
                Physical Presence
              </span>
              <h2 className="font-serif text-3xl text-navy-900">
                Visit Us for an In-Person Consultation
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Prefer to sit down over tea and review your holiday itineraries or visa documents?
                Our branch offices welcome you throughout the week.
              </p>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-ivory-50 border border-border-muted">
                  <MapPin className="w-5 h-5 text-gold-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy-900">Principal Office — Lahore</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Main Boulevard, Gulberg III, Lahore, Punjab, Pakistan
                    </p>
                    <p className="text-xs text-slate-500 mt-1">Hours: Mon – Sat: 10:00 AM – 7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-ivory-50 border border-border-muted">
                  <Phone className="w-5 h-5 text-gold-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy-900">Dedicated Helplines</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Phone: +92 (300) 000-0000 | +92 (42) 3578-0000
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

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
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
                  className="w-full bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white font-bold py-3.5 rounded-full text-xs text-center transition-all flex items-center justify-center gap-2 shadow-soft"
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
