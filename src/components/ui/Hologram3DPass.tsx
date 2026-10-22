"use client";

import React, { useState } from "react";
import { Plane, Sparkles, ShieldCheck, QrCode, Compass, Globe } from "lucide-react";

interface Hologram3DPassProps {
  currentSlideCountry?: string;
  destinationCode?: string;
}

export default function Hologram3DPass({
  currentSlideCountry = "Saudi Arabia",
  destinationCode = "JED",
}: Hologram3DPassProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({
      x: -y * 22,
      y: x * 22,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      className="perspective-1000 select-none py-2"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative w-full max-w-[340px] sm:max-w-[360px] rounded-3xl p-5 bg-gradient-to-br from-navy-950 via-[#0e2136] to-navy-900 border border-gold-400/40 text-white shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(200,163,94,0.2)] preserve-3d transition-transform duration-150 ease-out backdrop-blur-xl overflow-hidden"
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(10px)`,
        }}
      >
        {/* Holographic metallic iridescent light sweep */}
        <div
          className={`absolute -inset-[150%] pointer-events-none bg-gradient-to-r from-transparent via-gold-400/20 to-transparent rotate-45 transform transition-transform duration-1000 ${
            isHovered ? "translate-x-full" : "-translate-x-full"
          }`}
          style={{ transitionDuration: "1200ms" }}
        />

        {/* Subtle 3D background watermark globe */}
        <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none text-gold-400">
          <Globe className="w-40 h-40" />
        </div>

        {/* Top Header of the 3D Pass */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 translate-z-20">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-gold-600 to-amber-300 text-navy-950 flex items-center justify-center font-bold text-xs shadow-md">
              <Compass className="w-4 h-4 text-navy-950" />
            </div>
            <div>
              <p className="text-[10px] text-gold-400 uppercase tracking-widest font-bold">
                Bilal Travels &amp; Tours
              </p>
              <p className="text-[9px] text-slate-400">VIP Priority Travel Pass</p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1 text-[9px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Verified
          </span>
        </div>

        {/* Route Visualization */}
        <div className="py-4 flex items-center justify-between translate-z-30">
          <div className="text-left">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">
              Origin
            </span>
            <span className="font-serif text-2xl font-bold text-white tracking-wide">
              LHE
            </span>
            <span className="text-[10px] text-slate-300 block font-mono">Lahore, PK</span>
          </div>

          {/* Flight Path Arc */}
          <div className="flex-1 px-4 flex flex-col items-center">
            <div className="relative w-full flex items-center justify-center">
              <div className="w-full h-px border-t border-dashed border-gold-400/60"></div>
              <div className="absolute w-7 h-7 rounded-full bg-navy-900 border border-gold-400/60 flex items-center justify-center text-gold-400 shadow-md animate-pulse">
                <Plane className="w-3.5 h-3.5 text-gold-400 transform rotate-45" />
              </div>
            </div>
            <span className="text-[9px] text-gold-300 font-mono mt-2 tracking-wide font-bold">
              Direct &amp; Connecting
            </span>
          </div>

          <div className="text-right">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">
              Dest
            </span>
            <span className="font-serif text-2xl font-bold text-gold-400 tracking-wide">
              {destinationCode}
            </span>
            <span className="text-[10px] text-slate-300 block font-mono truncate max-w-[90px]">
              {currentSlideCountry}
            </span>
          </div>
        </div>

        {/* Bottom Details & Hologram QR */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3 translate-z-20">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5 text-[10px] text-slate-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full File Audit &amp; Hotel Voucher</span>
            </div>
            <div className="flex items-center gap-1 text-[9px] text-gold-300">
              <Sparkles className="w-3 h-3 text-gold-400" />
              <span>100% Verified Counselors (Lahore Office)</span>
            </div>
          </div>

          <div className="w-10 h-10 rounded-xl bg-white/10 border border-gold-400/40 p-1 flex items-center justify-center flex-shrink-0 text-gold-400">
            <QrCode className="w-7 h-7 stroke-[1.5]" />
          </div>
        </div>

        {/* 3D Interactive Helper Text */}
        <div className="mt-2 text-center text-[9px] text-slate-400 font-mono tracking-wider opacity-75">
          ✦ Move cursor for 3D holographic tilt ✦
        </div>
      </div>
    </div>
  );
}
