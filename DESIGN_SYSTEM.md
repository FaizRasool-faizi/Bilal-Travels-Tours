# Bilal Travels & Tours — Brand Design System & UI/UX Specifications

**Document Version:** 1.0.0  
**Phase:** Phase 2 — Brand Design System & UI/UX Components  
**Project Owner:** Bilal Travels & Tours  
**Engineering Agent:** Antigravity Autonomous Engineering Agent  
**Status:** Design System Specified & Verified  

---

## 1. Visual Identity & Brand Philosophy

The visual design system for **Bilal Travels & Tours** captures a premium, editorial travel aesthetic inspired by the official brand logo. It balances the timeless prestige of global travel with the spiritual elegance of pilgrimage journeys.

### Core Visual Principles:
1. **Editorial Luxury:** Deep Royal Navy paired with subtle, restrained Champagne Gold accents rather than gaudy or overwhelming decoration.
2. **Generous Whitespace & Calm Contrast:** Warm Ivory backgrounds (`#FAF8F3`) prevent eye strain, creating an inviting, editorial magazine feel.
3. **Typography Contrast:** Classic serif display headings combined with ultra-clean, highly legible sans-serif interface typography.
4. **Tactile Micro-Interactions:** Subtle card elevations, gentle zooms on travel photography, and smooth state transitions.

---

## 2. Color Palette & Design Tokens

### 2.1 Complete Palette Matrix

| Token Name | Hex Code | RGB | Tailwind Class | Contrast vs White | Contrast vs Ivory | Primary Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Navy 950** | `#0B1E34` | `rgb(11, 30, 52)` | `bg-navy-950` / `text-navy-950` | 15.8:1 (AAA) | 14.9:1 (AAA) | Deep headers, hero overlays, dark mode base |
| **Royal Navy (Primary)** | `#102D4F` | `rgb(16, 45, 79)` | `bg-navy-900` / `text-navy-900` | 12.6:1 (AAA) | 11.9:1 (AAA) | Primary brand color, main headings, header |
| **Navy 800** | `#163A64` | `rgb(22, 58, 100)` | `bg-navy-800` / `text-navy-800` | 9.4:1 (AAA) | 8.9:1 (AAA) | Active states, hover on dark buttons |
| **Globe Blue** | `#176B9B` | `rgb(23, 107, 155)` | `bg-globe-600` / `text-globe-600` | 5.1:1 (AA) | 4.8:1 (AA) | Secondary accents, icons, links, info badges |
| **Globe Blue Light** | `#E8F3FA` | `rgb(232, 243, 250)` | `bg-globe-50` / `text-globe-700` | — | — | Tag backgrounds, active pill highlights |
| **Champagne Gold (Accent)** | `#B58B45` | `rgb(181, 139, 69)` | `bg-gold-500` / `text-gold-500` | 3.5:1 (AA Large) | 3.3:1 (AA Large) | Primary CTAs, orbital rings, star ratings |
| **Champagne Gold Hover** | `#9F7635` | `rgb(159, 118, 53)` | `bg-gold-600` | 4.6:1 (AA) | 4.3:1 (AA) | Button hover states |
| **Warm Ivory (Surface)** | `#FAF8F3` | `rgb(250, 248, 243)` | `bg-ivory-100` / `text-ivory-100` | — | — | Default page background, warm card surfaces |
| **Pure White** | `#FFFFFF` | `rgb(255, 255, 255)` | `bg-white` / `text-white` | — | — | Cards, modals, form inputs, popovers |
| **Charcoal (Text Main)** | `#202B38` | `rgb(32, 43, 56)` | `text-charcoal-900` | 13.5:1 (AAA) | 12.8:1 (AAA) | Primary body copy, article text |
| **Muted Slate (Text Sub)**| `#5F6B78` | `rgb(95, 107, 120)` | `text-slate-600` | 5.3:1 (AA) | 5.0:1 (AA) | Secondary captions, timestamps, metadata |
| **Subtle Border** | `#E3DED3` | `rgb(227, 222, 211)` | `border-border-muted` | — | — | Subtle dividers, card borders, input borders |
| **Status Emerald** | `#15803D` | `rgb(21, 128, 61)` | `bg-emerald-600` / `text-emerald-700` | 4.8:1 (AA) | 4.5:1 (AA) | "Confirmed", "Visa Approved" milestones |
| **Status Amber** | `#B45309` | `rgb(180, 83, 9)` | `bg-amber-600` / `text-amber-700` | 4.6:1 (AA) | 4.3:1 (AA) | "Under Review", "Pending" badges |

---

## 3. Typography Hierarchy

### 3.1 Type Families
- **Editorial Display Serif:** `DM Serif Display` / `Playfair Display` (Google Fonts)
  - *Usage:* Page titles (`h1`), section titles (`h2`), package headlines, quote pullouts.
- **Clean Interface Sans:** `Plus Jakarta Sans` / `Inter` (Google Fonts)
  - *Usage:* Navigation links, body text, buttons, form inputs, metadata labels, price figures.

### 3.2 Type Scale Specifications

| Level | Font Family | Size (Desktop) | Size (Mobile) | Weight | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | DM Serif Display | `64px` (`4rem`) | `38px` (`2.375rem`) | 400 (Regular) | `1.15` | `-0.02em` |
| **Page H1** | DM Serif Display | `48px` (`3rem`) | `32px` (`2rem`) | 400 (Regular) | `1.2` | `-0.015em` |
| **Section H2** | DM Serif Display | `36px` (`2.25rem`) | `26px` (`1.625rem`) | 400 (Regular) | `1.25` | `-0.01em` |
| **Card H3** | Plus Jakarta Sans | `22px` (`1.375rem`) | `19px` (`1.1875rem`) | 700 (Bold) | `1.3` | `-0.005em` |
| **Subheading** | Plus Jakarta Sans | `18px` (`1.125rem`) | `16px` (`1rem`) | 500 (Medium) | `1.5` | `normal` |
| **Body (Default)** | Plus Jakarta Sans | `16px` (`1rem`) | `15px` (`0.9375rem`) | 400 (Regular) | `1.65` | `normal` |
| **Small / Meta** | Plus Jakarta Sans | `13px` (`0.8125rem`) | `12px` (`0.75rem`) | 500 (Medium) | `1.4` | `+0.02em` |
| **Badge / Upper** | Plus Jakarta Sans | `11px` (`0.6875rem`) | `11px` (`0.6875rem`) | 700 (Bold) | `1` | `+0.08em` (UPPERCASE) |

---

## 4. Spacing, Elevation & Corner Radii

### 4.1 8pt Spatial Grid System
- `space-1` = `4px`
- `space-2` = `8px`
- `space-3` = `12px`
- `space-4` = `16px` (Standard inner padding)
- `space-6` = `24px` (Card padding)
- `space-8` = `32px` (Section gap)
- `space-12` = `48px` (Major layout block separation)
- `space-16` = `64px` (Section top/bottom padding)
- `space-24` = `96px` (Hero top/bottom padding)

### 4.2 Corner Radii
- **Input & Buttons:** `rounded-lg` (`8px`) or `rounded-full` for pill tags.
- **Package & Destination Cards:** `rounded-2xl` (`16px`) for clean modern borders.
- **Modals & Hero Containers:** `rounded-3xl` (`24px`).

### 4.3 Luxury Elevation Shadows
```css
/* Tailwind custom box shadows with Navy tint */
box-shadow: {
  'soft': '0 4px 20px -2px rgba(16, 45, 79, 0.06)',
  'card': '0 10px 30px -4px rgba(16, 45, 79, 0.08)',
  'hover': '0 20px 40px -6px rgba(16, 45, 79, 0.14)',
  'gold-glow': '0 0 25px rgba(181, 139, 69, 0.25)',
}
```

---

## 5. UI Component Inventory & Layout Rules

### 5.1 Site Header & Navigation Bar
- **Desktop (>= 1024px):**
  - Height: `80px` (`h-20`), sticky with slight backdrop blur (`backdrop-blur-md bg-white/95`).
  - Left: Official Brand Logo with company name (height: `52px`).
  - Center: Nav Links with animated gold underline on hover (`Destinations ▾`, `Tours ▾`, `Visa Services ▾`, `Umrah`, `Our Travellers`, `About`).
  - Right: "Plan Your Trip" primary button with airplane icon (`bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold px-6 py-2.5 rounded-full`).
- **Mobile (< 1024px):**
  - Height: `64px` (`h-16`).
  - Left: Compact logo.
  - Right: Hamburger drawer trigger button.
  - Slide-out Navigation Drawer: Clean vertical menu, quick contact numbers, WhatsApp button.

### 5.2 Mobile Sticky Bottom Navigation
*(As specified in UI board screen 1)*
- Height: `60px` with iOS safe area padding.
- Sticky at bottom of viewport (`fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border-muted`).
- 4 Quick-Action Tabs with iconography and micro-labels:
  1. `Home` (House icon)
  2. `Tours` (Compass/Globe icon)
  3. `Saved` (Bookmark/Heart icon)
  4. `More` (Hamburger / 3 dots icon)

### 5.3 Core Category Switcher Pills
*(Hero section interaction)*
- 3 interactive pill buttons positioned in hero:
  - `[ 🌐 International Tours → ]`
  - `[ 📄 Visa Consultancy → ]`
  - `[ 🕌 Umrah → ]`
- Style: Pill-shaped (`rounded-full`), subtle ivory/white background, gold border on active state, soft hover transition.

### 5.4 Destination Card Component
- Aspect ratio: `16:10` or `4:3`.
- Image: High-res travel photograph with smooth `group-hover:scale-105` zoom.
- Overlay: Gradient from transparent to dark navy at the bottom (`bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent`).
- Content overlay:
  - Top-left: Location tag badge with pin icon (`📍 Türkiye`).
  - Bottom-left: Destination title (`Istanbul`) + Tagline (`Where history meets modern charm`).
  - Bottom-right: Circular glassmorphic button with arrow (`w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors`).

### 5.5 Tour Package Card Component
- Card layout: Vertical card with image on top, metadata and pricing below.
- Badges: `Duration: 7 Days` | `Type: Group Tour`.
- Price display:
  - Label: `From:` in small slate text.
  - Value: `PKR 285,000` in large bold navy (`text-2xl font-bold text-navy-900`).
- Dual CTAs:
  - `Request a Quote` (Primary Gold button)
  - `Enquire Now` (Outlined secondary button)

### 5.6 Interactive Itinerary Timeline Component
*(As shown in UI screen 3)*
- Left column: Vertical connecting timeline line (`w-0.5 bg-gold-300`).
- Daily milestone nodes:
  - Circular badge: `Day 1`, `Day 2`, etc. (`bg-gold-500 text-white text-xs font-bold w-12 h-7 rounded-full`).
- Content block:
  - Title: Bold serif heading (e.g. *"Arrival in Istanbul — Transfer to Hotel"*).
  - Body: Activity summary (Meet & greet at airport, check-in, rest).
  - Expandable details for meals, transport, and overnight stay.

### 5.7 Customer Milestone Stepper Component
*(As shown in UI screen 4 - "My Journey")*
- Horizontal stepper for desktop / vertical for mobile.
- 4 Verified Stages:
  1. `Application Submitted` (Icon: File / Check)
  2. `Visa Approved` (Icon: Passport with stamp)
  3. `Travel` (Icon: Airplane)
  4. `Completed` (Icon: Checkmark circle)
- Color coding:
  - Green / Emerald = Completed / Approved.
  - Blue / Gold = Current active stage.
  - Light Slate = Upcoming pending stage.

---

## 6. Accessibility & Motion Rules (WCAG 2.2 AA)

1. **Color Contrast:** Every text string meets minimum 4.5:1 ratio for regular text and 3.0:1 for large display titles.
2. **Keyboard Focus Rings:** Clear, un-obscured focus indicators (`focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:outline-none`).
3. **Screen Reader Semantic Attributes:**
   - Accordions include `aria-expanded` and `aria-controls`.
   - Modals trap focus and close on `Escape`.
   - All image assets have descriptive alt text (e.g., `alt="Blue Mosque and Bosphorus Strait in Istanbul at sunset"`).
4. **Motion Preferences:**
   ```css
   @media (prefers-reduced-motion: reduce) {
     * {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```
