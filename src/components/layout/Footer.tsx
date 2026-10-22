import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Shield, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-ivory-100 pt-16 pb-24 md:pb-12 border-t border-navy-900">
      {/* Top Value Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-12 border-b border-navy-800/80">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gold-400 font-bold">
                Excellence &amp; Reliability
              </p>
              <h3 className="font-serif text-xl text-white">
                Pakistan&apos;s Trusted Partner for International Travel
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/contact?intent=quote"
              className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-sm px-6 py-2.5 rounded-full transition-all shadow-soft"
            >
              Request a Custom Quote
            </Link>
            <Link
              href="/about"
              className="border border-ivory-200/30 hover:border-gold-400 text-ivory-100 hover:text-gold-400 text-sm px-6 py-2.5 rounded-full transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 flex-shrink-0 bg-white/5 rounded-full p-1">
              <img
                src="/brand/logo.png"
                alt="Bilal Travels & Tours"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <span className="font-serif text-2xl text-white tracking-tight leading-none block">
                Bilal Travels
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-gold-400 block mt-1">
                &amp; Tours
              </span>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Curating seamless international holiday packages, reliable visa consultancy, and sacred Umrah journeys with dedication and unmatched personal care.
          </p>
          <div className="pt-2 text-xs text-gold-400/90 font-medium flex items-center gap-2">
            <Globe className="w-4 h-4 text-gold-400" />
            <span>Serving travellers nationwide across Pakistan</span>
          </div>
        </div>

        {/* Core Services */}
        <div className="space-y-4">
          <h4 className="text-sm uppercase tracking-wider font-bold text-gold-400">
            Our Services
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li>
              <Link href="/tours" className="hover:text-gold-400 transition-colors">
                International Holiday Tours
              </Link>
            </li>
            <li>
              <Link href="/visa" className="hover:text-gold-400 transition-colors">
                Visa Consultancy &amp; Assistance
              </Link>
            </li>
            <li>
              <Link href="/umrah" className="hover:text-gold-400 transition-colors">
                Umrah Packages &amp; Ziyarat
              </Link>
            </li>
            <li>
              <Link href="/tours?type=FAMILY" className="hover:text-gold-400 transition-colors">
                Customized Family Vacations
              </Link>
            </li>
            <li>
              <Link href="/travellers" className="hover:text-gold-400 transition-colors">
                Traveller Stories &amp; Reviews
              </Link>
            </li>
          </ul>
        </div>

        {/* Popular Destinations */}
        <div className="space-y-4">
          <h4 className="text-sm uppercase tracking-wider font-bold text-gold-400">
            Popular Destinations
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li>
              <Link href="/destinations/turkey" className="hover:text-gold-400 transition-colors">
                Istanbul &amp; Cappadocia, Türkiye
              </Link>
            </li>
            <li>
              <Link href="/destinations/dubai" className="hover:text-gold-400 transition-colors">
                Dubai &amp; Abu Dhabi, UAE
              </Link>
            </li>
            <li>
              <Link href="/destinations/switzerland" className="hover:text-gold-400 transition-colors">
                Lucerne &amp; Zurich, Switzerland
              </Link>
            </li>
            <li>
              <Link href="/destinations/saudi-arabia" className="hover:text-gold-400 transition-colors">
                Makkah &amp; Madinah, Saudi Arabia
              </Link>
            </li>
            <li>
              <Link href="/destinations/baku" className="hover:text-gold-400 transition-colors">
                Baku &amp; Gabala, Azerbaijan
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Support */}
        <div className="space-y-4">
          <h4 className="text-sm uppercase tracking-wider font-bold text-gold-400">
            Get in Touch
          </h4>
          <div className="space-y-3 text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-gold-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-slate-400">Inquiry &amp; Bookings Hotline</p>
                <a href="tel:+923065602040" className="hover:text-gold-400 font-medium">
                  0306 5602040 / +92 306 5602040
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-gold-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-slate-400">Official Correspondence</p>
                <a href="mailto:info@bilaltravels.pk" className="hover:text-gold-400 font-medium">
                  info@bilaltravels.pk
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-gold-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-slate-400">Operational Hours</p>
                <p className="text-xs">Monday – Saturday: 10:00 AM – 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer legal and rights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 border-t border-navy-900 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Bilal Travels &amp; Tours. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-gold-400 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gold-400 transition-colors">
            Terms &amp; Conditions
          </Link>
          <Link href="/cancellation" className="hover:text-gold-400 transition-colors">
            Cancellation &amp; Refund Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
