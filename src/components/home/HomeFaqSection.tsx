"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, Phone, ArrowRight } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  category: "visa" | "umrah" | "tours";
}

const FAQS: FaqItem[] = [
  {
    category: "visa",
    question: "Can I apply for a visit visa on a fresh (blank) passport?",
    answer:
      "Yes! Several countries such as Azerbaijan (Baku), Malaysia, Dubai (UAE), Sri Lanka, Cambodia, and Jordan do not require prior travel history and welcome fresh passport holders. Our team optimizes your dossier to maximize approval chances.",
  },
  {
    category: "visa",
    question: "What is the UAE 2-Year Freelancer Visa vs Work Visa?",
    answer:
      "The UAE 2-Year Freelancer Visa allows you to legally reside and work independently across the Emirates without requiring an employer sponsor, open a UAE bank account, and sponsor family members. The Work Visa is linked to a registered UAE company. Bilal Travels facilitates complete quotas, security approvals, and Emirates ID processing.",
  },
  {
    category: "visa",
    question: "Do you provide documentation support like bank letters and itineraries?",
    answer:
      "Absolutely. We provide end-to-end documentation assistance, including verifiable flight reservations, confirmed hotel booking vouchers, cover letters, and comprehensive review of your bank statements and tax documents to match embassy criteria.",
  },
  {
    category: "umrah",
    question: "Are your Umrah packages customized for families with elderly parents?",
    answer:
      "Yes, we specialize in 0-meter and short-walking-distance hotel options (such as Swissôtel, Fairmont Makkah Clock Royal Tower, and Pullman Zamzam) with wheelchair assistance, private VIP GMC transportation, and guided historical Ziyarat tours in Makkah and Madinah.",
  },
  {
    category: "visa",
    question: "How long does E-Visa processing usually take?",
    answer:
      "E-Visas for destinations like Azerbaijan, Malaysia, and Singapore typically process within 3 to 5 working days. Dubai visit visas take 24 to 72 hours. Processing times for each country are clearly displayed in our Visa Hub section.",
  },
  {
    category: "tours",
    question: "Can tour packages be customized according to our family dates & budget?",
    answer:
      "Yes. Every international tour package (Baku, Istanbul, Dubai, Switzerland, Malaysia) can be tailored to your preferred travel dates, preferred hotel star category (3-star, 4-star, or 5-star), and private or group sightseeing preferences.",
  },
];

export default function HomeFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"all" | "visa" | "umrah" | "tours">("all");

  const filteredFaqs = FAQS.filter(
    (faq) => activeTab === "all" || faq.category === activeTab
  );

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-border-muted relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-50 border border-gold-200 text-gold-800 text-xs font-bold tracking-widest uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-gold-600" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-navy-950 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Everything you need to know about visa eligibility, documents, processing times, and
            luxury travel packages.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === "all"
                ? "bg-navy-950 text-white shadow-sm"
                : "bg-ivory-100 text-navy-900 hover:bg-ivory-200"
            }`}
          >
            All Questions
          </button>
          <button
            onClick={() => setActiveTab("visa")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === "visa"
                ? "bg-navy-950 text-white shadow-sm"
                : "bg-ivory-100 text-navy-900 hover:bg-ivory-200"
            }`}
          >
            Visas &amp; Embassy
          </button>
          <button
            onClick={() => setActiveTab("umrah")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === "umrah"
                ? "bg-navy-950 text-white shadow-sm"
                : "bg-ivory-100 text-navy-900 hover:bg-ivory-200"
            }`}
          >
            Umrah &amp; Ziyarat
          </button>
          <button
            onClick={() => setActiveTab("tours")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === "tours"
                ? "bg-navy-950 text-white shadow-sm"
                : "bg-ivory-100 text-navy-900 hover:bg-ivory-200"
            }`}
          >
            Holiday Tours
          </button>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-gold-400 bg-ivory-50/60 shadow-sm"
                    : "border-border-muted bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif font-bold text-navy-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-gold-500 text-navy-950 rotate-180"
                        : "bg-ivory-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed border-t border-gold-200/40 pt-4 animate-fade-in-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="p-6 rounded-2xl bg-ivory-100/70 border border-border-muted flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-navy-950 text-base">
              Still have a specific question about your profile?
            </h4>
            <p className="text-xs text-slate-600">
              Speak with our senior visa consultant for personalized advice.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+923065602040"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-navy-950 font-bold text-xs border border-border-muted hover:border-gold-400 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-gold-600" />
              <span>0306 5602040</span>
            </a>
            <a
              href="https://wa.me/923065602040?text=Hello%20Bilal%20Travels,%20I%20have%20a%20question%20regarding%20visa%20processing."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
