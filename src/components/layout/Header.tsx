"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Plane,
  Menu,
  X,
  ChevronDown,
  Phone,
  Globe,
  MapPin,
  Compass,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Star,
  Clock,
  Heart,
  MessageCircle,
} from "lucide-react";
import { DESTINATIONS, TOURS } from "@/lib/data";

interface HeaderProps {
  onOpenMobileNav?: () => void;
}

export default function Header({ onOpenMobileNav }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDestOpen, setMobileDestOpen] = useState(false);
  const [mobileToursOpen, setMobileToursOpen] = useState(false);

  // Desktop Dropdown State with debounce for silky smooth hover
  const [activeDropdown, setActiveDropdown] = useState<"destinations" | "tours" | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (dropdown: "destinations" | "tours") => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 220);
  };

  return (
    <>
      {/* Top micro bar for contact info & trust indicator */}
      <div className="bg-navy-950 text-ivory-200 text-xs py-2 px-4 sm:px-8 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gold-400 font-medium">
              <Globe className="w-3.5 h-3.5" />
              Pakistan&apos;s Trusted Partner for International Travel &amp; Umrah
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-slate-300">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-gold-500" />
              <span className="text-slate-400">Support:</span>
              <a
                href="tel:+923065602040"
                className="hover:text-gold-400 transition-colors font-medium text-white"
              >
                0306 5602040
              </a>
              <span className="text-navy-700">/</span>
              <a
                href="tel:+923144310865"
                className="hover:text-gold-400 transition-colors font-medium text-white"
              >
                0314 4310865
              </a>
            </div>
            <span className="text-navy-700">|</span>
            <Link
              href="/my-journey"
              className="hover:text-gold-400 transition-colors font-medium flex items-center gap-1.5"
            >
              <span>Track My Journey</span>
              <span className="bg-gold-500/20 text-gold-400 text-[10px] px-1.5 py-0.5 rounded font-mono font-bold">
                LIVE
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-card py-3"
            : "bg-white/90 backdrop-blur-sm py-4 border-b border-border-muted"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo & Monogram */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0">
              <img
                src="/brand/logo.png"
                alt="Bilal Travels & Tours Official Logo"
                className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-2xl text-navy-900 tracking-tight leading-none group-hover:text-gold-600 transition-colors">
                Bilal Travels
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-gold-600 leading-tight mt-1">
                &amp; Tours
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* =========================================================================
                1. DESTINATIONS VISUAL MEGA-MENU (LUXURY MAGAZINE STYLE)
            ========================================================================= */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("destinations")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/destinations"
                className={`font-medium text-sm transition-colors flex items-center gap-1.5 py-1 ${
                  activeDropdown === "destinations"
                    ? "text-gold-600 font-semibold"
                    : "text-charcoal-900 hover:text-gold-600"
                }`}
              >
                <span>Destinations</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "destinations" ? "rotate-180 text-gold-600" : "opacity-60"
                  }`}
                />
              </Link>

              {/* Destinations Mega Dropdown */}
              {activeDropdown === "destinations" && (
                <div
                  className="absolute top-full -left-24 w-[860px] bg-white rounded-3xl shadow-[0_25px_60px_-15px_rgba(16,45,79,0.22)] border border-border-muted overflow-hidden animate-in fade-in slide-in-from-top-3 duration-200 z-50"
                  onMouseEnter={() => handleMouseEnter("destinations")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-12 p-6 gap-6">
                    {/* Left Column: Visual Destination Spotlight Card (4 cols) */}
                    <div className="col-span-4">
                      <Link
                        href="/tours?destination=turkey"
                        onClick={() => setActiveDropdown(null)}
                        className="group/spotlight relative h-full min-h-[340px] rounded-2xl overflow-hidden flex flex-col justify-between p-5 text-white shadow-card block"
                      >
                        <div
                          className="absolute inset-0 bg-cover bg-center group-hover/spotlight:scale-110 transition-transform duration-700"
                          style={{ backgroundImage: "url('/images/dest-istanbul.jpg')" }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-navy-950/20"></div>

                        {/* Top Spotlight Tag */}
                        <div className="relative z-10 flex items-center justify-between">
                          <span className="bg-gold-500 text-navy-950 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            <span>Trending Spotlight</span>
                          </span>
                          <span className="bg-black/40 backdrop-blur-md text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-white/20">
                            🇹🇷 Türkiye
                          </span>
                        </div>

                        {/* Bottom Spotlight Info */}
                        <div className="relative z-10 space-y-2">
                          <span className="text-[11px] text-ivory-200 uppercase tracking-widest font-semibold block">
                            Istanbul &amp; Cappadocia
                          </span>
                          <h4 className="font-serif text-2xl font-bold leading-tight group-hover/spotlight:text-gold-300 transition-colors">
                            Bosphorus Sunset &amp; Hot Air Balloons
                          </h4>
                          <div className="pt-2 flex items-center justify-between border-t border-white/20 text-xs">
                            <span className="font-medium text-ivory-200">Custom Luxury Itinerary</span>
                            <span className="bg-white text-navy-950 font-bold px-3 py-1 rounded-full text-[11px] group-hover/spotlight:bg-gold-500 transition-colors flex items-center gap-1">
                              <span>Explore</span>
                              <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Right Column: Visual Destination Cards Grid (8 cols) */}
                    <div className="col-span-8 space-y-4">
                      <div className="flex items-center justify-between pb-2 border-b border-ivory-200">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                          <Compass className="w-3.5 h-3.5 text-gold-600" />
                          <span>Curated International Destinations</span>
                        </span>
                        <Link
                          href="/destinations"
                          onClick={() => setActiveDropdown(null)}
                          className="text-xs font-bold text-gold-600 hover:text-gold-700 flex items-center gap-1"
                        >
                          <span>View All (12+ Countries)</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {DESTINATIONS.map((dest) => (
                          <Link
                            key={dest.id}
                            href={`/destinations?region=${dest.slug}`}
                            onClick={() => setActiveDropdown(null)}
                            className="group/item flex items-center gap-3.5 p-3 rounded-2xl bg-ivory-50/70 hover:bg-white border border-border-muted/70 hover:border-gold-400 hover:shadow-card transition-all duration-300"
                          >
                            {/* Visual Photo Thumbnail */}
                            <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-border-muted">
                              <img
                                src={dest.image}
                                alt={dest.name}
                                className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute top-1 left-1 text-xs drop-shadow">
                                {dest.flag}
                              </div>
                            </div>

                            {/* Destination Info */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h5 className="font-serif font-bold text-navy-900 text-sm truncate group-hover/item:text-gold-600 transition-colors">
                                  {dest.country}
                                </h5>
                                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                                  {dest.visaEase.split("/")[0]}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-500 truncate mt-0.5">
                                {dest.name}
                              </p>
                              <div className="mt-1.5 flex items-center justify-between text-[11px]">
                                <span className="font-semibold text-slate-500">
                                  Custom Quote
                                </span>
                                <span className="text-gold-600 font-semibold text-[10px] group-hover/item:translate-x-1 transition-transform">
                                  {dest.toursCount} Tours →
                                </span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Dropdown Bottom Banner */}
                  <div className="bg-navy-950 text-white px-6 py-3.5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span className="text-slate-300">
                        Customized travel solutions • Official embassy visa filing assistance
                      </span>
                    </div>
                    <Link
                      href="/contact?intent=custom-itinerary"
                      onClick={() => setActiveDropdown(null)}
                      className="text-gold-400 font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Customized Group &amp; Family Tour? Talk to an Expert</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* =========================================================================
                2. TOURS VISUAL MEGA-MENU (EXPERIENCES & SHOWCASE)
            ========================================================================= */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("tours")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/tours"
                className={`font-medium text-sm transition-colors flex items-center gap-1.5 py-1 ${
                  activeDropdown === "tours"
                    ? "text-gold-600 font-semibold"
                    : "text-charcoal-900 hover:text-gold-600"
                }`}
              >
                <span>Tours</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "tours" ? "rotate-180 text-gold-600" : "opacity-60"
                  }`}
                />
              </Link>

              {/* Tours Mega Dropdown */}
              {activeDropdown === "tours" && (
                <div
                  className="absolute top-full -left-48 w-[880px] bg-white rounded-3xl shadow-[0_25px_60px_-15px_rgba(16,45,79,0.22)] border border-border-muted overflow-hidden animate-in fade-in slide-in-from-top-3 duration-200 z-50"
                  onMouseEnter={() => handleMouseEnter("tours")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-12 p-6 gap-6">
                    {/* Left: Tour Category Visual Pillars (4 cols) */}
                    <div className="col-span-4 border-r border-ivory-200 pr-5 space-y-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Browse by Travel Style
                      </span>

                      {[
                        {
                          title: "Group Holiday Tours",
                          desc: "Pre-planned guided group adventures",
                          href: "/tours?category=Group+Tour",
                          badge: "Popular",
                          icon: "🌍",
                        },
                        {
                          title: "Family Vacations",
                          desc: "Child-friendly hotels & fun theme parks",
                          href: "/tours?category=Family+Vacation",
                          icon: "👨‍👩‍👧‍👦",
                        },
                        {
                          title: "Honeymoon Luxury",
                          desc: "Private retreats & romantic alpine stays",
                          href: "/tours?category=Honeymoon+Luxury",
                          badge: "VIP",
                          icon: "💍",
                        },
                        {
                          title: "Sacred Umrah & Ziyarat",
                          desc: "0m Haram hotels & bullet train",
                          href: "/umrah",
                          badge: "Sacred",
                          icon: "🕌",
                        },
                      ].map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="group/style p-3 rounded-2xl bg-ivory-50 hover:bg-navy-900 border border-border-muted hover:border-navy-900 transition-all duration-200 block"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-base">{item.icon}</span>
                              <h5 className="font-serif font-bold text-navy-900 group-hover/style:text-white text-xs sm:text-sm transition-colors">
                                {item.title}
                              </h5>
                            </div>
                            {item.badge && (
                              <span className="text-[10px] bg-gold-100 text-gold-800 font-bold px-2 py-0.5 rounded-full group-hover/style:bg-gold-500 group-hover/style:text-navy-950 transition-colors">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 group-hover/style:text-slate-300 mt-1 pl-6">
                            {item.desc}
                          </p>
                        </Link>
                      ))}
                    </div>

                    {/* Right: Featured Tour Package Visual Cards (8 cols) */}
                    <div className="col-span-8 space-y-4">
                      <div className="flex items-center justify-between pb-2 border-b border-ivory-200">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                          <span>Handpicked Featured Packages</span>
                        </span>
                        <Link
                          href="/tours"
                          onClick={() => setActiveDropdown(null)}
                          className="text-xs font-bold text-gold-600 hover:text-gold-700 flex items-center gap-1"
                        >
                          <span>Explore All Packages</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-3.5">
                        {TOURS.slice(0, 4).map((tour) => (
                          <Link
                            key={tour.id}
                            href={`/tours?highlight=${tour.slug}`}
                            onClick={() => setActiveDropdown(null)}
                            className="group/card rounded-2xl overflow-hidden border border-border-muted hover:border-gold-400 bg-white shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
                          >
                            <div className="relative h-28 overflow-hidden">
                              <img
                                src={tour.image}
                                alt={tour.title}
                                className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                              <span className="absolute top-2 left-2 bg-navy-950/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                {tour.duration}
                              </span>
                              <span className="absolute bottom-2 left-2 text-white font-semibold text-[11px] flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-gold-400" />
                                {tour.country}
                              </span>
                            </div>

                            <div className="p-3 space-y-2">
                              <h5 className="font-serif font-bold text-navy-900 text-xs line-clamp-1 group-hover/card:text-gold-600 transition-colors">
                                {tour.title}
                              </h5>
                              <div className="flex items-center justify-between text-xs pt-1 border-t border-ivory-200">
                                <div>
                                  <span className="text-[10px] text-slate-400 block font-medium">Pricing</span>
                                  <span className="font-semibold text-gold-700 text-xs">
                                    On Request
                                  </span>
                                </div>
                                <span className="bg-gold-500 text-navy-950 font-bold px-3 py-1 rounded-full text-[10px] group-hover/card:bg-gold-600 transition-colors">
                                  View Itinerary →
                                </span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Dropdown Bottom Banner */}
                  <div className="bg-navy-950 text-white px-6 py-3.5 flex items-center justify-between text-xs">
                    <span className="text-slate-300">
                      🌟 Need flights, hotel upgrades or custom dates? All packages are 100% customizable.
                    </span>
                    <Link
                      href="/contact?intent=plan-trip"
                      onClick={() => setActiveDropdown(null)}
                      className="text-gold-400 font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Build Your Custom Itinerary</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Visa Services */}
            <Link
              href="/visa"
              className="text-charcoal-900 font-medium text-sm hover:text-gold-600 transition-colors py-1"
            >
              Visa Services
            </Link>

            {/* 4. Umrah (Sacred) */}
            <Link
              href="/umrah"
              className="text-navy-900 font-semibold text-sm hover:text-gold-600 transition-colors py-1 flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
              Umrah
            </Link>

            {/* 5. Our Travellers */}
            <Link
              href="/travellers"
              className="text-charcoal-900 font-medium text-sm hover:text-gold-600 transition-colors py-1"
            >
              Our Travellers
            </Link>

            {/* 6. About Us */}
            <Link
              href="/about"
              className="text-charcoal-900 font-medium text-sm hover:text-gold-600 transition-colors py-1"
            >
              About
            </Link>

            {/* 7. Contact Us */}
            <Link
              href="/contact"
              className="text-charcoal-900 font-medium text-sm hover:text-gold-600 transition-colors py-1"
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action Button & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact?intent=plan-trip"
              className="hidden md:inline-flex items-center gap-2.5 bg-navy-950 hover:bg-navy-900 text-white pl-2.5 pr-4 py-1.5 rounded-full border border-gold-400/40 shadow-[0_4px_20px_rgba(16,45,79,0.14)] hover:shadow-[0_8px_25px_rgba(181,139,69,0.28)] hover:border-gold-400 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gold-600 via-gold-500 to-amber-300 text-navy-950 flex items-center justify-center shadow-sm group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                <Plane className="w-4 h-4 fill-navy-950 text-navy-950" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[13px] font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors leading-tight">
                  Plan Your Trip
                </span>
                <span className="text-[9px] uppercase tracking-wider text-gold-400 font-semibold leading-tight">
                  Free Custom Quote
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-gold-400 group-hover:translate-x-0.5 transition-transform ml-0.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-navy-900 hover:bg-ivory-200 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-navy-900" />
              ) : (
                <Menu className="w-6 h-6 text-navy-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer with Accordions */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-border-muted px-6 py-6 space-y-4 shadow-card animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-1 font-medium text-charcoal-900 text-base">
              {/* Accordion 1: Destinations */}
              <div className="border-b border-ivory-200 py-1">
                <button
                  type="button"
                  onClick={() => setMobileDestOpen(!mobileDestOpen)}
                  className="w-full py-2.5 flex items-center justify-between text-left hover:text-gold-600"
                >
                  <span className="font-medium">Destinations</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileDestOpen ? "rotate-180 text-gold-600" : "opacity-50"
                    }`}
                  />
                </button>
                {mobileDestOpen && (
                  <div className="pl-4 pb-3 space-y-2 text-sm text-slate-600 animate-in fade-in">
                    <Link
                      href="/destinations"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1.5 font-bold text-gold-600"
                    >
                      → View All Destinations
                    </Link>
                    {DESTINATIONS.map((dest) => (
                      <Link
                        key={dest.id}
                        href={`/destinations?region=${dest.slug}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1.5 hover:text-navy-900"
                      >
                        {dest.flag} {dest.country} ({dest.name})
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Accordion 2: Tours & Packages */}
              <div className="border-b border-ivory-200 py-1">
                <button
                  type="button"
                  onClick={() => setMobileToursOpen(!mobileToursOpen)}
                  className="w-full py-2.5 flex items-center justify-between text-left hover:text-gold-600"
                >
                  <span className="font-medium">Tours &amp; Packages</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileToursOpen ? "rotate-180 text-gold-600" : "opacity-50"
                    }`}
                  />
                </button>
                {mobileToursOpen && (
                  <div className="pl-4 pb-3 space-y-2 text-sm text-slate-600 animate-in fade-in">
                    <Link
                      href="/tours"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1.5 font-bold text-gold-600"
                    >
                      → View All Tour Packages
                    </Link>
                    <Link
                      href="/tours?category=Group+Tour"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1.5 hover:text-navy-900"
                    >
                      International Group Tours
                    </Link>
                    <Link
                      href="/tours?category=Family+Vacation"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1.5 hover:text-navy-900"
                    >
                      Family Vacations
                    </Link>
                    <Link
                      href="/tours?category=Honeymoon+Luxury"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1.5 hover:text-navy-900"
                    >
                      Honeymoon Luxury
                    </Link>
                    <Link
                      href="/umrah"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1.5 text-gold-600 font-medium"
                    >
                      Sacred Umrah &amp; Ziyarat Packages
                    </Link>
                  </div>
                )}
              </div>

              {/* Visa Services */}
              <Link
                href="/visa"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 border-b border-ivory-200 hover:text-gold-600 block"
              >
                Visa Consultancy
              </Link>

              {/* Umrah Packages */}
              <Link
                href="/umrah"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 border-b border-ivory-200 text-gold-600 font-semibold flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                Umrah Packages &amp; Ziyarat
              </Link>

              {/* Our Travellers */}
              <Link
                href="/travellers"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 border-b border-ivory-200 hover:text-gold-600 block"
              >
                Our Travellers (Stories &amp; Reviews)
              </Link>

              {/* About Us */}
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 border-b border-ivory-200 hover:text-gold-600 block"
              >
                About Bilal Travels &amp; Tours
              </Link>

              {/* Contact Us */}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 border-b border-ivory-200 hover:text-gold-600 block"
              >
                Contact Us &amp; Head Office
              </Link>

              {/* Track My Journey */}
              <Link
                href="/my-journey"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 text-globe-600 font-semibold flex items-center justify-between"
              >
                <span>Track My Journey (Live Portal)</span>
                <span className="text-[10px] bg-globe-50 text-globe-700 px-2 py-0.5 rounded-full font-mono">
                  LIVE
                </span>
              </Link>
            </div>

            <div className="pt-2">
              <Link
                href="/contact?intent=plan-trip"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-3 bg-navy-950 text-white font-bold py-3.5 px-6 rounded-2xl text-sm border border-gold-400/40 shadow-card transition-all"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-gold-600 to-amber-300 text-navy-950 flex items-center justify-center flex-shrink-0">
                  <Plane className="w-3.5 h-3.5 fill-navy-950 text-navy-950" />
                </div>
                <span>Plan Your Trip (Free Custom Quote)</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
