"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  FileCheck,
  Send,
  PlaneTakeoff,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Clock,
  FileText,
  BadgeCheck,
  Phone,
} from "lucide-react";
import Card3D from "@/components/ui/Card3D";

interface StepDetail {
  step: string;
  number: string;
  title: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  icon: React.ElementType;
  highlights: string[];
  deliverable: string;
  duration: string;
}

const STEPS: StepDetail[] = [
  {
    step: "Step 01",
    number: "01",
    title: "Free Profile Assessment",
    tagline: "Personalized evaluation of travel history, passport validity, and financial profile.",
    badge: "15-Min Free Review",
    badgeColor: "bg-amber-500/10 text-amber-700 border-amber-500/30",
    icon: MessageSquare,
    highlights: [
      "Passport expiry & blank pages verification",
      "Bank statement & tax returns pre-audit",
      "Optimal country & visa type recommendation",
    ],
    deliverable: "Tailored Visa Road-map",
    duration: "Same Day Response",
  },
  {
    step: "Step 02",
    number: "02",
    title: "Dossier & Document Audit",
    tagline: "Full preparation of embassy-compliant paperwork, vouchers, and cover letters.",
    badge: "Zero Rejection Target",
    badgeColor: "bg-blue-500/10 text-blue-700 border-blue-500/30",
    icon: FileCheck,
    highlights: [
      "Confirmed airline reservation & hotel vouchers",
      "Embassy-compliant custom cover letter",
      "Financial documentation structuring",
    ],
    deliverable: "Complete Application Dossier",
    duration: "24–48 Hours",
  },
  {
    step: "Step 03",
    number: "03",
    title: "Official Lodgment & Biometrics",
    tagline: "Direct filing into official government portals or VFS / Gerry's appointments.",
    badge: "Government Portals",
    badgeColor: "bg-purple-500/10 text-purple-700 border-purple-500/30",
    icon: Send,
    highlights: [
      "Priority appointment scheduling (LHE/ISB/KHI)",
      "Direct biometric guidance & preparation",
      "Real-time application status tracking",
    ],
    deliverable: "Official Embassy Submission",
    duration: "Priority Slots",
  },
  {
    step: "Step 04",
    number: "04",
    title: "Visa Approval & Departure",
    tagline: "Receive stamped passport or official E-Visa PDF, plus full travel coordination.",
    badge: "Ready For Takeoff",
    badgeColor: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30",
    icon: PlaneTakeoff,
    highlights: [
      "Verified E-Visa PDF or passport collection",
      "Confirmed air tickets & hotel vouchers handover",
      "24/7 dedicated support during travel",
    ],
    deliverable: "Approved Visa & Departure Pack",
    duration: "Immediate Handover",
  },
];

export default function HowItWorksSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F3] border-b border-border-muted relative overflow-hidden">
      {/* Luxury Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-gold-500/5 via-amber-400/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gold-400/50 shadow-sm text-gold-800 text-xs font-bold tracking-widest uppercase"
          >
            <ShieldCheck className="w-4 h-4 text-gold-600" />
            <span>4-Step Streamlined Protocol</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-navy-950 tracking-tight leading-tight"
          >
            How Your Visa Application Progresses
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base leading-relaxed"
          >
            From your first free consultation at our <strong>Lahore Office</strong> to official embassy lodgment
            and your final stamped visa, our certified counselors manage every detail with complete transparency.
          </motion.p>
        </div>

        {/* 4 Interactive Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStepIndex === idx;

            return (
              <Card3D
                key={step.number}
                maxTilt={10}
                glareOpacity={0.25}
                glareColor="gold"
                onClick={() => setActiveStepIndex(idx)}
                className={`cursor-pointer rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between relative group ${
                  isActive
                    ? "bg-white border-gold-500 shadow-[0_20px_45px_rgba(200,163,94,0.22)] ring-2 ring-gold-400/40"
                    : "bg-white/90 hover:bg-white border-border-muted hover:border-gold-300 shadow-sm hover:shadow-card"
                }`}
              >
                {/* Step Connecting Arrow for Desktop */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 text-gold-400/80">
                    <ArrowRight className="w-5 h-5 drop-shadow-sm" />
                  </div>
                )}

                <div className="space-y-4 translate-z-20">
                  {/* Top Header Badge & Number */}
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-gold-600">
                      {step.number}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${step.badgeColor}`}>
                      {step.badge}
                    </span>
                  </div>

                  {/* Icon Box */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm ${
                    isActive
                      ? "bg-gradient-to-tr from-gold-600 to-amber-300 text-navy-950 scale-105"
                      : "bg-gold-50 text-gold-700 group-hover:bg-gold-500 group-hover:text-navy-950"
                  }`}>
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-serif font-bold text-navy-950 text-lg group-hover:text-gold-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1 font-normal">
                      {step.tagline}
                    </p>
                  </div>

                  {/* Highlights Checklist */}
                  <div className="pt-3 border-t border-slate-100 space-y-1.5">
                    {step.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Deliverable Pill */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] translate-z-20">
                  <div className="flex items-center gap-1.5 font-bold text-navy-900">
                    <BadgeCheck className="w-4 h-4 text-gold-600" />
                    <span>{step.deliverable}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {step.duration}
                  </span>
                </div>
              </Card3D>
            );
          })}
        </div>

        {/* Bottom Consultation Action Strip with Direct Numbers */}
        <div className="bg-gradient-to-r from-navy-950 via-[#10243B] to-navy-900 rounded-3xl p-6 sm:p-8 border border-gold-400/30 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl backdrop-blur-md">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold uppercase tracking-wider text-gold-400">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Free File Evaluation by Certified Visa Counselors</span>
            </div>
            <h4 className="font-serif font-bold text-xl sm:text-2xl text-white">
              Unsure about your travel history or bank statement?
            </h4>
            <p className="text-xs text-ivory-200/90 max-w-xl leading-relaxed">
              Our seasoned counselors review fresh passports, refusal histories, and business portfolios daily
              with 100% confidential assessment.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
            <a
              href="https://wa.me/923065602040?text=Assalam-o-Alaikum,%20I%20would%20like%20to%20discuss%20my%20visa%20eligibility."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3.5 px-6 rounded-full shadow-lg transition-all hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Visa Desk</span>
            </a>

            <a
              href="tel:+923065602040"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs py-3.5 px-5 rounded-full border border-white/20 hover:border-gold-400 transition-all"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Call 0306 5602040</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
