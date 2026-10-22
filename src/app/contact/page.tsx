"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Plane,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  CheckCircle2,
  DollarSign,
  Send,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Lahore",
    destination: "turkey",
    travelDates: "",
    adults: "2",
    children: "0",
    hotelCategory: "4-Star Deluxe",
    budgetRange: "Comfort Deluxe",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-ivory-100 min-h-screen py-12">
      {/* Top Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-600 mb-3">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-navy-900">Plan Your Trip &amp; Contact</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border-muted">
          <div className="space-y-3 max-w-2xl">
            <h1 className="font-serif text-4xl sm:text-5xl text-navy-900 tracking-tight leading-tight">
              Let&apos;s Plan Your Next Journey
            </h1>
            <p className="text-slate-600 text-base sm:text-lg">
              Tell us where your heart desires to go. Our destination specialists will craft a
              customized day-by-day itinerary with verified hotels, transfers, and transparent
              pricing.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/923065602040?text=Hello%20Bilal%20Travels%2C%20I%20would%20like%20to%20plan%20a%20trip"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-full text-sm shadow-soft transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Grid: Form (8 cols) & Contact Info Sidebar (4 cols) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Interactive Trip Planning Form */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-border-muted shadow-card space-y-8">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-gold-600 font-bold block">
                  Custom Travel Builder
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-navy-900">
                  Trip Planning Inquiry Form
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm">
                  Complete this quick form to receive an official PDF proposal within 2 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-300 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl text-navy-900">
                    Trip Inquiry Successfully Sent!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Our destination manager for{" "}
                    <strong>{formData.destination.toUpperCase()}</strong> has received your
                    requirements and is compiling your custom package. We will reach you at{" "}
                    <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-block bg-navy-900 text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-navy-800 transition-colors"
                  >
                    Plan Another Trip
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-xs sm:text-sm">
                  {/* Step 1: Destination & Travel Details */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-ivory-200 pb-2">
                      1. Where &amp; When Would You Like to Go?
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-navy-900 font-semibold mb-1.5">
                          Target Destination *
                        </label>
                        <select
                          value={formData.destination}
                          onChange={(e) =>
                            setFormData({ ...formData, destination: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-border-muted bg-ivory-50 text-navy-900 font-medium focus:outline-none focus:border-gold-500"
                        >
                          <option value="turkey">Türkiye (Istanbul, Cappadocia &amp; Antalya)</option>
                          <option value="dubai">United Arab Emirates (Dubai &amp; Abu Dhabi)</option>
                          <option value="switzerland">Switzerland &amp; Central Europe</option>
                          <option value="saudi-arabia">Saudi Arabia (Sacred Umrah Journey)</option>
                          <option value="azerbaijan">Azerbaijan (Baku &amp; Gabala)</option>
                          <option value="malaysia">Malaysia (Kuala Lumpur &amp; Langkawi)</option>
                          <option value="uk">United Kingdom (London &amp; Scotland)</option>
                          <option value="other">Other Global Country (Bespoke)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-navy-900 font-semibold mb-1.5">
                          Tentative Travel Dates / Month *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Mid November 2026 or Next Month"
                          value={formData.travelDates}
                          onChange={(e) =>
                            setFormData({ ...formData, travelDates: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-border-muted bg-ivory-50 text-navy-900 focus:outline-none focus:border-gold-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-navy-900 font-semibold mb-1.5">
                          Adults (12+ yrs)
                        </label>
                        <select
                          value={formData.adults}
                          onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border-muted bg-ivory-50 text-navy-900 font-medium focus:outline-none focus:border-gold-500"
                        >
                          <option value="1">1 Adult (Solo)</option>
                          <option value="2">2 Adults (Couple)</option>
                          <option value="3">3 Adults</option>
                          <option value="4">4 Adults</option>
                          <option value="5+">5+ Adults (Group)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-navy-900 font-semibold mb-1.5">
                          Children (0 - 11 yrs)
                        </label>
                        <select
                          value={formData.children}
                          onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border-muted bg-ivory-50 text-navy-900 font-medium focus:outline-none focus:border-gold-500"
                        >
                          <option value="0">0 Children</option>
                          <option value="1">1 Child</option>
                          <option value="2">2 Children</option>
                          <option value="3+">3+ Children</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-navy-900 font-semibold mb-1.5">
                          Hotel Preference
                        </label>
                        <select
                          value={formData.hotelCategory}
                          onChange={(e) =>
                            setFormData({ ...formData, hotelCategory: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-border-muted bg-ivory-50 text-navy-900 font-medium focus:outline-none focus:border-gold-500"
                        >
                          <option value="4-Star Deluxe">4-Star Deluxe</option>
                          <option value="5-Star Luxury">5-Star Luxury</option>
                          <option value="Boutique / Heritage">Boutique / Cave / Heritage</option>
                          <option value="3-Star Economy">3-Star Value Economy</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Contact Information */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-ivory-200 pb-2">
                      2. Your Contact Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-navy-900 font-semibold mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Usman Malik"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border-muted bg-ivory-50 text-navy-900 focus:outline-none focus:border-gold-500"
                        />
                      </div>

                      <div>
                        <label className="block text-navy-900 font-semibold mb-1.5">
                          WhatsApp / Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+92 300 0000000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border-muted bg-ivory-50 text-navy-900 focus:outline-none focus:border-gold-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-navy-900 font-semibold mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="name@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border-muted bg-ivory-50 text-navy-900 focus:outline-none focus:border-gold-500"
                        />
                      </div>

                      <div>
                        <label className="block text-navy-900 font-semibold mb-1.5">
                          Your City in Pakistan
                        </label>
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border-muted bg-ivory-50 text-navy-900 font-medium focus:outline-none focus:border-gold-500"
                        >
                          <option value="Lahore">Lahore</option>
                          <option value="Islamabad / Rawalpindi">Islamabad / Rawalpindi</option>
                          <option value="Karachi">Karachi</option>
                          <option value="Faisalabad">Faisalabad</option>
                          <option value="Sialkot / Gujranwala">Sialkot / Gujranwala</option>
                          <option value="Peshawar">Peshawar</option>
                          <option value="Multan">Multan</option>
                          <option value="Other">Other City</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-navy-900 font-semibold mb-1.5">
                        Special Requests or Preferences (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Private airport transfer requested, honeymoon room decoration, wheelchair assistance..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border-muted bg-ivory-50 text-navy-900 focus:outline-none focus:border-gold-500"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold py-4 rounded-full text-sm sm:text-base shadow-soft hover:shadow-hover hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                  >
                    <Plane className="w-4 h-4" />
                    <span>Submit Trip Inquiry &amp; Request Custom Quote</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Contact & Office Details */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-navy-950 text-white rounded-3xl p-6 sm:p-8 border border-navy-800 shadow-hover space-y-6">
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-gold-400 font-bold block">
                  Direct Assistance
                </span>
                <h3 className="font-serif text-2xl text-white">Speak to a Consultant</h3>
                <p className="text-slate-400 text-xs">
                  We are available on phone, WhatsApp, and email 6 days a week.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-900 border border-navy-700/60">
                  <Phone className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      Direct Helplines
                    </span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-0.5">
                      <a href="tel:+923065602040" className="font-bold text-white text-sm hover:text-gold-400 transition-colors">
                        0306 5602040
                      </a>
                      <span className="text-slate-600 hidden sm:inline">|</span>
                      <a href="tel:+923144310865" className="font-bold text-white text-sm hover:text-gold-400 transition-colors">
                        0314 4310865
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-600/40">
                  <MessageCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-emerald-300 uppercase tracking-wider block">
                      WhatsApp Support
                    </span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-0.5">
                      <a
                        href="https://wa.me/923065602040"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-white text-sm hover:text-emerald-300 transition-colors"
                      >
                        0306 5602040
                      </a>
                      <span className="text-emerald-700 hidden sm:inline">|</span>
                      <a
                        href="https://wa.me/923144310865"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-white text-sm hover:text-emerald-300 transition-colors"
                      >
                        0314 4310865
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href="mailto:info@bilaltravels.pk"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 border border-navy-700/60 transition-colors"
                >
                  <Mail className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      Email Inquiries
                    </span>
                    <span className="font-bold text-white text-sm">info@bilaltravels.pk</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-900 border border-navy-700/60">
                  <Clock className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      Office Timings
                    </span>
                    <span className="text-white text-xs">
                      Monday to Saturday: 10:00 AM – 7:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Location Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border-muted shadow-card space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-900">
                <MapPin className="w-4 h-4 text-gold-600" />
                <span>Head Office</span>
              </div>
              <h4 className="font-serif text-lg font-bold text-navy-900">
                Bilal Travels &amp; Tours
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                1 Minar wali Masjid, Kacha Jail road, Chungi Amar Sidhu Lahore, Pakistan.
              </p>
              <div className="pt-2 text-xs text-gold-600 font-semibold">
                ✓ Free parking &amp; in-person consultations available
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
