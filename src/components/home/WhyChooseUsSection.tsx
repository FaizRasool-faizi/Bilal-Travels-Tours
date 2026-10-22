"use client";

import React from "react";
import {
  ShieldCheck,
  Award,
  Users,
  Clock,
  Compass,
  CheckCircle2,
  Globe,
  PhoneCall,
} from "lucide-react";
import Card3D from "@/components/ui/Card3D";

export default function WhyChooseUsSection() {
  const stats = [
    { value: "14+", label: "Direct Visa Countries", detail: "E-Visa & Sticker Processing" },
    { value: "10,000+", label: "Happy Travellers", detail: "Families, Couples & Pilgrims" },
    { value: "100%", label: "File Audit & Checklist", detail: "Prior to Embassy Lodgment" },
    { value: "12+", label: "Years Trusted Heritage", detail: "Licensed in Lahore, Pakistan" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-ivory-50 border-b border-border-muted relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gold-400/50 text-gold-800 text-xs font-bold tracking-widest uppercase shadow-sm">
            <Award className="w-3.5 h-3.5 text-gold-600" />
            <span>Why Travel With Bilal Travels &amp; Tours</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-navy-950 tracking-tight">
            Pakistan&apos;s Trusted Travel Partner
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Delivering excellence in international tourism, visa consultancy, and sacred Umrah
            journeys with 100% transparency.
          </p>
        </div>

        {/* 4 Stats Grid with 3D Tilt */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 perspective-1000">
          {stats.map((stat, idx) => (
            <Card3D
              key={idx}
              maxTilt={15}
              glareOpacity={0.25}
              glareColor="gold"
              className="p-6 sm:p-8 rounded-3xl bg-white border border-border-muted hover:border-gold-400 shadow-sm hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)] transition-all text-center space-y-2 group"
            >
              <div className="translate-z-30">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors block">
                  {stat.value}
                </span>
                <h4 className="font-serif font-bold text-navy-950 text-sm sm:text-base mt-1">
                  {stat.label}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">{stat.detail}</p>
              </div>
            </Card3D>
          ))}
        </div>

        {/* 3 Pillars Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 perspective-1000">
          <Card3D
            maxTilt={12}
            glareOpacity={0.2}
            glareColor="gold"
            className="p-7 rounded-3xl bg-white border border-border-muted hover:border-gold-400 shadow-sm hover:shadow-card space-y-3"
          >
            <div className="translate-z-30 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-gold-500 to-amber-300 text-navy-950 flex items-center justify-center shadow-md">
                <ShieldCheck className="w-6 h-6 stroke-[2]" />
              </div>
              <h4 className="font-serif font-bold text-navy-900 text-lg">
                Official Licensing &amp; Credentials
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Registered and recognized with the Department of Tourist Services (DTS), ensuring every
                hotel booking, visa filing, and air ticket is legally secure.
              </p>
            </div>
          </Card3D>

          <Card3D
            maxTilt={12}
            glareOpacity={0.2}
            glareColor="gold"
            className="p-7 rounded-3xl bg-white border border-border-muted hover:border-gold-400 shadow-sm hover:shadow-card space-y-3"
          >
            <div className="translate-z-30 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-gold-500 to-amber-300 text-navy-950 flex items-center justify-center shadow-md">
                <Compass className="w-6 h-6 stroke-[2]" />
              </div>
              <h4 className="font-serif font-bold text-navy-900 text-lg">
                Tailor-Made Custom Packages
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                No rigid packages. We customize flights, hotel star ratings, private transport, and
                dates to match your personal budget and schedule.
              </p>
            </div>
          </Card3D>

          <Card3D
            maxTilt={12}
            glareOpacity={0.2}
            glareColor="gold"
            className="p-7 rounded-3xl bg-white border border-border-muted hover:border-gold-400 shadow-sm hover:shadow-card space-y-3"
          >
            <div className="translate-z-30 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-gold-500 to-amber-300 text-navy-950 flex items-center justify-center shadow-md">
                <PhoneCall className="w-6 h-6 stroke-[2]" />
              </div>
              <h4 className="font-serif font-bold text-navy-900 text-lg">
                Direct Counselor Assistance
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Direct access to our dedicated counselors via phone or WhatsApp at <strong>0306 5602040</strong> / <strong>0314 4310865</strong> from initial inquiry until you return safely home.
              </p>
            </div>
          </Card3D>
        </div>
      </div>
    </section>
  );
}
