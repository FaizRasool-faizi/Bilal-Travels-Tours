"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Plane, Menu, X, ChevronDown, Phone, Globe } from "lucide-react";

interface HeaderProps {
  onOpenMobileNav?: () => void;
}

export default function Header({ onOpenMobileNav }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top micro bar for contact info & trust indicator */}
      <div className="bg-navy-950 text-ivory-200 text-xs py-2 px-4 sm:px-8 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gold-400 font-medium">
              <Globe className="w-3.5 h-3.5" />
              Pakistan&apos;s Trusted Partner for International Travel
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-slate-300">
            <a
              href="tel:+923000000000"
              className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-500" />
              <span>Dedicated Support: +92 (300) 000-0000</span>
            </a>
            <span className="text-navy-700">|</span>
            <Link href="/my-journey" className="hover:text-gold-400 transition-colors font-medium">
              Track My Journey
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
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
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/destinations"
              className="text-charcoal-900 font-medium text-sm hover:text-gold-600 transition-colors flex items-center gap-1 py-1"
            >
              Destinations
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </Link>
            <Link
              href="/tours"
              className="text-charcoal-900 font-medium text-sm hover:text-gold-600 transition-colors flex items-center gap-1 py-1"
            >
              Tours
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </Link>
            <Link
              href="/visa"
              className="text-charcoal-900 font-medium text-sm hover:text-gold-600 transition-colors py-1"
            >
              Visa Services
            </Link>
            <Link
              href="/umrah"
              className="text-navy-900 font-semibold text-sm hover:text-gold-600 transition-colors py-1 flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
              Umrah
            </Link>
            <Link
              href="/travellers"
              className="text-charcoal-900 font-medium text-sm hover:text-gold-600 transition-colors py-1"
            >
              Our Travellers
            </Link>
            <Link
              href="/about"
              className="text-charcoal-900 font-medium text-sm hover:text-gold-600 transition-colors py-1"
            >
              About
            </Link>
          </nav>

          {/* Right Action Button & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact?intent=plan-trip"
              className="hidden md:inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-6 py-2.5 rounded-full text-sm shadow-soft hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300"
            >
              <Plane className="w-4 h-4" />
              <span>Plan Your Trip</span>
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

        {/* Mobile Slide-down Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-border-muted px-6 py-6 space-y-4 shadow-card animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3 font-medium text-charcoal-900 text-base">
              <Link
                href="/destinations"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-ivory-200 hover:text-gold-600 flex items-center justify-between"
              >
                <span>Destinations</span>
                <ChevronDown className="w-4 h-4 opacity-50" />
              </Link>
              <Link
                href="/tours"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-ivory-200 hover:text-gold-600 flex items-center justify-between"
              >
                <span>Tours &amp; Packages</span>
                <ChevronDown className="w-4 h-4 opacity-50" />
              </Link>
              <Link
                href="/visa"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-ivory-200 hover:text-gold-600"
              >
                Visa Consultancy
              </Link>
              <Link
                href="/umrah"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-ivory-200 text-gold-600 font-semibold flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                Umrah Packages
              </Link>
              <Link
                href="/travellers"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-ivory-200 hover:text-gold-600"
              >
                Our Travellers (Stories)
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-ivory-200 hover:text-gold-600"
              >
                About Us
              </Link>
              <Link
                href="/my-journey"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 text-globe-600 font-semibold"
              >
                Track My Journey (Customer Portal)
              </Link>
            </div>

            <div className="pt-2">
              <Link
                href="/contact?intent=plan-trip"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold py-3 rounded-full text-base shadow-soft transition-all"
              >
                <Plane className="w-4 h-4" />
                <span>Plan Your Trip</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
