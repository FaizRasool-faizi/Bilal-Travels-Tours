"use client";

import React from "react";
import Link from "next/link";
import {
  MessageSquare,
  FileCheck,
  Send,
  PlaneTakeoff,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Free Profile Assessment",
    description:
      "Discuss your travel destination, passport history, and visa category with our seasoned counselors over WhatsApp or at our Lahore office.",
    icon: MessageSquare,
    badge: "10-Min Evaluation",
  },
  {
    step: "02",
    title: "Document Preparation",
    description:
      "Submit simple photocopies/scans. Our team prepares your complete visa dossier including cover letters, hotel bookings, flight itineraries, and forms.",
    icon: FileCheck,
    badge: "Full File Support",
  },
  {
    step: "03",
    title: "Embassy Lodgment",
    description:
      "We lodge your file directly into official government E-Visa portals or manage your sticker visa appointments with regular status updates.",
    icon: Send,
    badge: "Government Portals",
  },
  {
    step: "04",
    title: "Visa Grant & Departure",
    description:
      "Receive your approved E-Visa on PDF or collect your stamped passport. We also arrange your confirmed airline tickets and luxury stays.",
    icon: PlaneTakeoff,
    badge: "Ready to Fly",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 sm:py-20 bg-ivory-50 border-b border-border-muted relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-bold tracking-widest uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
            <span>Transparent &amp; Stress-Free</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-navy-950 tracking-tight leading-tight">
            How Your Visa Process Works
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            No complicated bureaucracy. From first consultation to stamping and departure, our 4-step
            streamlined roadmap ensures seamless approval.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative bg-white rounded-2xl p-6 border border-border-muted hover:border-gold-400 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                {/* Connecting arrow for desktop */}
                {index < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-gold-400/80">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-gold-500/80">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-navy-950/5 text-navy-900 border border-navy-950/10">
                      {item.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-gold-50 text-gold-700 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shadow-sm">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <h3 className="font-serif font-bold text-navy-900 text-lg group-hover:text-gold-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Guaranteed Guidance</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Strip */}
        <div className="bg-white rounded-2xl p-6 border border-border-muted flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-navy-900 text-base">
              Have questions about your passport or bank statement eligibility?
            </h4>
            <p className="text-xs text-slate-500">
              Our visa desk evaluates blank passports, business profiles, and family applications daily.
            </p>
          </div>

          <a
            href="https://wa.me/923065602040?text=Assalam-o-Alaikum,%20I%20want%20to%20discuss%20my%20visa%20eligibility%20and%20documents."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-navy-950 hover:bg-navy-900 text-white font-bold text-xs transition-all shadow-sm flex-shrink-0"
          >
            <span>Ask a Visa Counselor</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
