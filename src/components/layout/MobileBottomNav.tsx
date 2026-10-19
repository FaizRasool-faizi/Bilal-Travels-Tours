"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, Bookmark, MoreHorizontal } from "lucide-react";

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Tours", href: "/tours", icon: Compass },
    { label: "Saved", href: "/my-journey", icon: Bookmark },
    { label: "More", href: "/about", icon: MoreHorizontal },
  ];

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-border-muted py-2 px-4 shadow-[0_-4px_20px_rgba(16,45,79,0.06)]"
      aria-label="Mobile Bottom Navigation"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-3 transition-colors ${
                isActive
                  ? "text-gold-600 font-bold"
                  : "text-slate-500 hover:text-navy-900 font-medium"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-gold-500 scale-110" : ""}`} />
              <span className="text-[11px] mt-1 tracking-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
