"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  Globe,
  Briefcase,
  ArrowRight,
  Compass,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface ServiceCard {
  id: string;
  icon: React.ElementType;
  title: string;
  badge: string;
  description: string;
  features: string[];
  primaryCtaText: string;
  primaryCtaHref: string;
  image: string;
}

const CORE_SERVICES: ServiceCard[] = [
  {
    id: "visa-consultancy",
    icon: FileText,
    badge: "14+ Countries",
    title: "International Visa Consultancy",
    description:
      "Comprehensive visa dossier preparation, embassy appointment scheduling, and thorough documentation audits for tourist, visit, and business visas worldwide.",
    features: [
      "Bank statement & tax document assessment",
      "Confirmed flight & hotel itinerary vouchers",
      "Cover letters tailored to embassy requirements",
    ],
    primaryCtaText: "Explore Visa Hub",
    primaryCtaHref: "#visa-hub",
    image: "/images/hero-london.jpg",
  },
  {
    id: "international-tours",
    icon: Globe,
    badge: "Custom & Group",
    title: "Curated International Tours",
    description:
      "Handcrafted holiday packages, family vacations, and guided group departures across Europe, Central Asia, and the Middle East with 100% customizable itineraries.",
    features: [
      "4-star & 5-star handpicked hotel stays",
      "Private airport transfers & guided excursions",
      "Flexible payment plans & family arrangements",
    ],
    primaryCtaText: "Browse Tour Packages",
    primaryCtaHref: "/tours",
    image: "/images/dest-switzerland.jpg",
  },
  {
    id: "umrah-ziyarat",
    icon: Sparkles,
    badge: "Sacred Journey",
    title: "Dedicated Umrah & Ziyarat",
    description:
      "Heartfelt pilgrimage solutions featuring zero-meter Haram luxury hotels, Saudi e-Visa processing, private GMC transfers, and escorted historical Islamic Ziyarat.",
    features: [
      "Clock Tower & direct Kaaba view options",
      "Makkah-Madinah Haramain high-speed train",
      "Complete VIP, Executive & Economy packages",
    ],
    primaryCtaText: "View Umrah Packages",
    primaryCtaHref: "/umrah",
    image: "/images/Mecca.jpeg",
  },
  {
    id: "work-freelance",
    icon: Briefcase,
    badge: "Residency & Nomads",
    title: "Work & Freelancer Assistance",
    description:
      "Expert guidance for UAE 2-Year Freelancer Visas, digital nomad permits, and legitimate employment file preparation with transparent processing steps.",
    features: [
      "Direct UAE Freelancer visa quota guidance",
      "Security approvals & Emirates ID filing support",
      "Corporate bank account opening assistance",
    ],
    primaryCtaText: "Consult on Work Visas",
    primaryCtaHref: "/contact?intent=work-visa",
    image: "/images/dest-dubai.jpg",
  },
];

export default function ServicesOverviewSection() {
  return (
    <section className="py-16 sm:py-20 bg-ivory-50 border-b border-border-muted relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gold-400/50 text-gold-800 text-xs font-bold tracking-widest uppercase shadow-sm">
            <Compass className="w-3.5 h-3.5 text-gold-600" />
            <span>End-to-End Travel Solutions</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-navy-950 tracking-tight leading-tight">
            Comprehensive Travel &amp; Visa Services
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From verified visa file preparation to bespoke global holidays and sacred pilgrimages,
            Bilal Travels &amp; Tours provides dedicated counselor support at every stage.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_SERVICES.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="group bg-white rounded-2xl overflow-hidden border border-border-muted hover:border-gold-400 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Image Header */}
                <div className="relative h-44 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${srv.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-navy-950/85 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/10 uppercase tracking-wider">
                      {srv.badge}
                    </span>
                  </div>

                  {/* Icon badge floating at bottom right of image */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-gold-500 text-navy-950 flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <h3 className="font-serif font-bold text-navy-900 text-lg group-hover:text-gold-600 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {srv.description}
                    </p>

                    {/* Features checklist */}
                    <div className="pt-2 space-y-1.5 border-t border-ivory-200">
                      {srv.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-[11px] text-slate-700 font-medium"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-3 border-t border-ivory-200">
                    <Link
                      href={srv.primaryCtaHref}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-ivory-100 hover:bg-navy-950 text-navy-950 hover:text-white font-semibold text-xs transition-all duration-300 group/btn"
                    >
                      <span>{srv.primaryCtaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gold-600 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
