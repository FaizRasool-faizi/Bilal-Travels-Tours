"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Star,
  ShieldCheck,
  Heart,
  MessageSquare,
  MapPin,
  CheckCircle2,
  Calendar,
  Send,
} from "lucide-react";
import { TRAVELLER_STORIES, TravellerReview } from "@/lib/data";

export default function TravellersPage() {
  const [filter, setFilter] = useState("All");
  const [stories, setStories] = useState<TravellerReview[]>(TRAVELLER_STORIES);
  const [submitted, setSubmitted] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    city: "Lahore",
    trip: "Istanbul & Cappadocia",
    rating: 5,
    comment: "",
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const created: TravellerReview = {
      id: `rev-${Date.now()}`,
      name: newReview.name,
      city: newReview.city + ", Pakistan",
      trip: newReview.trip,
      date: "Just now",
      rating: newReview.rating,
      avatar: "🌟",
      comment: newReview.comment,
      verified: true,
    };
    setStories([created, ...stories]);
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
          <span className="text-navy-900">Our Travellers</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border-muted">
          <div className="space-y-3 max-w-2xl">
            <h1 className="font-serif text-4xl sm:text-5xl text-navy-900 tracking-tight leading-tight">
              Stories from Our Travellers
            </h1>
            <p className="text-slate-600 text-base sm:text-lg">
              Authentic journeys and genuine reflections from families, honeymoon couples, and
              pilgrims across Pakistan who placed their trust in Bilal Travels &amp; Tours.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="flex items-center justify-end text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="font-serif font-bold text-2xl text-navy-900 block mt-1">
                4.9 / 5.0
              </span>
              <span className="text-xs text-slate-500">Based on 1,400+ reviews</span>
            </div>
          </div>
        </div>

        {/* Trust Stats Bar */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-border-muted shadow-soft text-center space-y-1">
            <span className="font-serif text-3xl font-bold text-navy-900">12,000+</span>
            <p className="text-xs text-slate-500 font-medium">Satisfied Travellers</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-border-muted shadow-soft text-center space-y-1">
            <span className="font-serif text-3xl font-bold text-gold-600">99.4%</span>
            <p className="text-xs text-slate-500 font-medium">Visa Approval Ratio</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-border-muted shadow-soft text-center space-y-1">
            <span className="font-serif text-3xl font-bold text-navy-900">10+ Years</span>
            <p className="text-xs text-slate-500 font-medium">Industry Heritage</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-border-muted shadow-soft text-center space-y-1">
            <span className="font-serif text-3xl font-bold text-emerald-600">100%</span>
            <p className="text-xs text-slate-500 font-medium">Verified Accommodations</p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-border-muted shadow-card hover:shadow-hover transition-all space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header row with avatar, name & rating */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-ivory-100 border border-border-muted flex items-center justify-center text-2xl flex-shrink-0">
                      {story.avatar}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-navy-900 text-lg">{story.name}</h4>
                      <p className="text-xs text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-gold-600" />
                        <span>{story.city}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex text-amber-400">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Trip Tag & Date */}
                <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-xl bg-ivory-50 border border-border-muted/50">
                  <span className="font-semibold text-navy-900">{story.trip}</span>
                  <span className="text-slate-400">{story.date}</span>
                </div>

                {/* Comment quote */}
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  &ldquo;{story.comment}&rdquo;
                </p>
              </div>

              {/* Verified Badge */}
              <div className="pt-4 border-t border-ivory-200 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Verified Journey with Bilal Travels
                </span>
                <span className="text-[11px] text-slate-400">Documented Experience</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Share Your Story Form Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 border border-navy-800 shadow-hover space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">
              Traveller Community
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl">Have You Travelled with Us?</h2>
            <p className="text-slate-400 text-sm">
              Your feedback inspires future Pakistani travellers. Share your memorable experience
              with the Bilal Travels family.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <h3 className="font-serif text-xl text-white">Review Published!</h3>
              <p className="text-xs text-emerald-200">
                Thank you for your warm words. Your story has been added to our live travellers
                wall above.
              </p>
            </div>
          ) : (
            <form onSubmit={handleReviewSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Asad Ali"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-navy-700 text-white focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">Your City in Pakistan *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lahore / Islamabad"
                    value={newReview.city}
                    onChange={(e) => setNewReview({ ...newReview, city: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-navy-700 text-white focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 mb-1">Which Trip Did You Take? *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 7 Days Istanbul & Cappadocia"
                    value={newReview.trip}
                    onChange={(e) => setNewReview({ ...newReview, trip: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-navy-700 text-white focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">Rating</label>
                  <select
                    value={newReview.rating}
                    onChange={(e) =>
                      setNewReview({ ...newReview, rating: parseInt(e.target.value) })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-navy-700 text-white focus:outline-none focus:border-gold-500"
                  >
                    <option value="5">⭐⭐⭐⭐⭐ 5 Stars (Exceptional)</option>
                    <option value="4">⭐⭐⭐⭐ 4 Stars (Very Good)</option>
                    <option value="3">⭐⭐⭐ 3 Stars (Satisfactory)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1">Your Review / Reflections *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell us about the hotels, transport, tour guides, and visa processing experience..."
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-navy-700 text-white focus:outline-none focus:border-gold-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold py-3.5 rounded-full text-sm shadow-soft transition-all"
              >
                Publish My Experience
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
