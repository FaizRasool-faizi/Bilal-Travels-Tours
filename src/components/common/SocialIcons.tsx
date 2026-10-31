import React from "react";
import { COMPANY_CONTACT } from "@/lib/socials";

export function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
    </svg>
  );
}

interface SocialLinksProps {
  className?: string;
  variant?: "pills" | "icons" | "card";
}

export default function SocialLinks({ className = "", variant = "icons" }: SocialLinksProps) {
  const { socials } = COMPANY_CONTACT;

  if (variant === "pills") {
    return (
      <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
        {/* Instagram */}
        <a
          href={socials.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-orange-500/10 hover:from-pink-500 hover:to-orange-500 text-ivory-100 border border-pink-500/30 hover:border-transparent text-xs font-medium transition-all shadow-sm hover:shadow-pink-500/25"
          aria-label="Follow Bilal Travels on Instagram"
        >
          <InstagramIcon className="w-3.5 h-3.5 text-pink-400 group-hover:text-white transition-colors" />
          <span className="group-hover:text-white">Instagram</span>
        </a>

        {/* Facebook */}
        <a
          href={socials.facebook.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 hover:bg-blue-600 text-ivory-100 border border-blue-500/30 hover:border-transparent text-xs font-medium transition-all shadow-sm hover:shadow-blue-500/25"
          aria-label="Follow Bilal Travels on Facebook"
        >
          <FacebookIcon className="w-3.5 h-3.5 text-blue-400 group-hover:text-white transition-colors" />
          <span className="group-hover:text-white">Facebook</span>
        </a>

        {/* TikTok */}
        <a
          href={socials.tiktok.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-neutral-900 text-ivory-100 border border-neutral-700 hover:border-gold-400 text-xs font-medium transition-all shadow-sm hover:shadow-gold-500/20"
          aria-label="Follow Bilal Travels on TikTok"
        >
          <TikTokIcon className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white transition-colors" />
          <span className="group-hover:text-white">TikTok</span>
        </a>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Instagram */}
      <a
        href={socials.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-xl bg-white/5 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 text-slate-300 hover:text-white border border-white/10 hover:border-transparent flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-pink-500/25"
        title="Follow us on Instagram (@bilaltravels59)"
        aria-label="Instagram @bilaltravels59"
      >
        <InstagramIcon className="w-4 h-4" />
      </a>

      {/* Facebook */}
      <a
        href={socials.facebook.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#1877F2] text-slate-300 hover:text-white border border-white/10 hover:border-transparent flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-blue-500/25"
        title="Follow us on Facebook (Bilal Travels)"
        aria-label="Facebook Bilal Travels"
      >
        <FacebookIcon className="w-4 h-4" />
      </a>

      {/* TikTok */}
      <a
        href={socials.tiktok.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-xl bg-white/5 hover:bg-black text-slate-300 hover:text-white border border-white/10 hover:border-cyan-400/50 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-cyan-500/25 group"
        title="Follow us on TikTok (@bilaltravels36)"
        aria-label="TikTok @bilaltravels36"
      >
        <TikTokIcon className="w-4 h-4 group-hover:text-cyan-300 transition-colors" />
      </a>
    </div>
  );
}
