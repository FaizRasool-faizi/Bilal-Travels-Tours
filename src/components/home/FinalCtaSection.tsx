"use client";

import React from "react";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function FinalCtaSection() {
  const WHATSAPP_NUMBER = "923065602040";
  const DISPLAY_PHONE = "0306 5602040";
  const OFFICE_ADDRESS = "Gulberg III, Lahore, Pakistan";

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Assalam-o-Alaikum Bilal Travels & Tours, I would like to schedule a consultation regarding my upcoming travel and visa requirements."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-navy-950 via-[#10243B] to-navy-900 text-white relative overflow-hidden">
      {/* Subtle luxury glow accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="bg-white/5 border border-gold-400/30 rounded-3xl p-8 sm:p-12 lg:p-16 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Start Your Journey Today</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-white tracking-tight leading-[1.15]">
                Planning Your Next Journey? <br />
                <span className="text-gold-400">Let&apos;s Discuss Your Requirements.</span>
              </h2>

              <p className="text-ivory-200/90 text-sm sm:text-base leading-relaxed max-w-xl">
                Whether you need expert international visa file preparation, a custom family holiday
                itinerary, or a sacred Umrah package, our certified counselors are ready to assist.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={handleWhatsApp}
                  className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </button>

                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-full border border-white/20 hover:border-gold-400 transition-all duration-300"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Call {DISPLAY_PHONE}</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-gold-300 hover:text-white uppercase tracking-wider transition-colors ml-1"
                >
                  <span>Book Office Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Information Card (5 cols) */}
            <div className="lg:col-span-5 bg-navy-950/80 rounded-2xl p-6 sm:p-7 border border-white/10 space-y-4">
              <h3 className="font-serif text-lg font-bold text-white border-b border-white/10 pb-3 flex items-center justify-between">
                <span>Direct Counselor Desk</span>
                <span className="inline-flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available Mon–Sat</span>
                </span>
              </h3>

              <div className="space-y-3.5 text-xs text-ivory-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium">Head Office:</strong>
                    <span>{OFFICE_ADDRESS}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium">Business Hours:</strong>
                    <span>Monday – Saturday: 10:00 AM – 7:00 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium">Verified Assistance:</strong>
                    <span>Transparent checklist, no hidden fees, confidential handling.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 flex items-center justify-between">
                <span>DTS Licensed Travel Consultancy</span>
                <span className="text-gold-400 font-mono font-semibold">Lahore, PK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
