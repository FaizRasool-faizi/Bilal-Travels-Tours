# Bilal Travels & Tours — System Architecture & Implementation Plan

**Document Version:** 1.0.0  
**Phase:** Phase 3 — Technical Architecture, Database & Security  
**Project Owner:** Bilal Travels & Tours  
**Engineering Agent:** Antigravity Autonomous Engineering Agent  
**Status:** Approved & Architecture Specified  

---

## 1. Technology Stack Architecture

### 1.1 Core Stack Selection & Rationale

| Layer | Chosen Technology | Alternatives Evaluated | Rationale for Selection |
| :--- | :--- | :--- | :--- |
| **Framework** | **Next.js 14+ (App Router)** | Vite + React SPA, Remix | Next.js provides hybrid Server-Side Rendering (SSR) for travel SEO / OpenGraph and fast Static Site Generation (SSG) for static guides, plus robust Server Actions for secure API boundaries. |
| **Language** | **TypeScript (Strict Mode)** | Vanilla JavaScript | Strict static typing prevents runtime null-pointer crashes on complex travel packages and customer application state machines. |
| **Styling** | **Tailwind CSS + Vanilla CSS Variables** | CSS Modules, Styled Components | High-performance atomic utility CSS aligned with design tokens (`#102D4F`, `#B58B45`), zero runtime overhead, responsive utility classes. |
| **Database** | **PostgreSQL 16 (Local / Cloud)** | MySQL, MongoDB | Relational integrity for foreign keys (`customers` → `bookings` → `itineraries`), native JSONB for flexible day-wise tour schedules, and Row-Level Security (RLS). |
| **Auth & Data Services**| **Supabase / PostgreSQL Auth** | NextAuth, Firebase | Native PostgreSQL Row-Level Security policies enforced at the database level, preventing any frontend bypass vulnerability. |
| **Object Storage**| **Private S3 / Supabase Storage** | Local Disk, Cloudinary | Private encrypted buckets with short-lived pre-signed URLs (15 min expiry) for sensitive documents (passports, e-visas). |
| **Validation** | **Zod Schema Validation** | Yup, Joi | TypeScript-first schema validation shared seamlessly between client forms and server-side actions. |

---

## 2. System Architecture & Public/Private Boundaries

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CLIENT / USER AGENT                             │
│  ┌───────────────────────┐   ┌──────────────────────────────────────┐  │
│  │   Public Web Visitor  │   │ Authenticated Customer / Staff Admin │  │
│  └───────────┬───────────┘   └──────────────────┬───────────────────┘  │
└──────────────┼──────────────────────────────────┼──────────────────────┘
               │ (Public Pages / Static CDN)       │ (JWT / Secure Session Cookie)
               ▼                                  ▼
┌────────────────────────────────────────────────────────────────────────┐
│                   NEXT.JS APPLICATION LAYER (SERVER)                   │
│                                                                        │
│  ┌───────────────────────────┐    ┌─────────────────────────────────┐  │
│  │ Public Routes & Server-   │    │ Protected API Routes & Server   │  │
│  │ Rendered Components       │    │ Actions (Auth Required)         │  │
│  │ - / (Home)                │    │ - /api/admin/* (RBAC Check)     │  │
│  │ - /tours & /tours/[slug]  │    │ - /api/portal/* (Owner Check)   │  │
│  │ - /visa & /umrah          │    │ - /api/enquiries (Rate Limited) │  │
│  └─────────────┬─────────────┘    └────────────────┬────────────────┘  │
│                │                                   │                   │
│                │ Explicit Projection               │ Server Validation │
│                │ (NO Private Fields)               │ & Authorization   │
└────────────────┼───────────────────────────────────┼───────────────────┘
                 │                                   │
                 ▼                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                     DATABASE LAYER (POSTGRESQL 16)                     │
│                                                                        │
│  ┌───────────────────────────┐    ┌─────────────────────────────────┐  │
│  │ Public Read-Only Views    │    │ Row-Level Security (RLS) Tables │  │
│  │ - public_packages         │    │ - enquiries & customer_profiles │  │
│  │ - public_destinations     │    │ - visa_applications             │  │
│  │ - consent_verified_stories│    │ - traveller_documents (Private)│  │
│  │                           │    │ - audit_logs (Immutable)        │  │
│  └───────────────────────────┘    └─────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Public vs. Private Boundary Rules
1. **Zero Exposure of Identity Data:** Customer passport scans, CNICs, telephone numbers, and staff internal notes are never returned by public endpoints (`/api/packages`, `/api/destinations`, `/api/stories`).
2. **Strict Column Projection:** Database queries for public pages use explicit `SELECT` statements (e.g. `SELECT id, title, slug, price_pkr, gallery_urls FROM packages WHERE status = 'PUBLISHED'`), never `SELECT *`.
3. **Signed Download Tokens:** Customer vouchers and visa copies are never stored with public URLs. Instead, a server route generates a cryptographically signed URL valid for only 15 minutes after validating customer ownership.

---

## 3. Directory & Component Structure

```
d:\Faiz\WebProjects\Bilal Travels & Tours\
├── docs\                            # Project documentation & visual assets
│   ├── assets\                      # Official logo & UI boards
│   │   ├── logo-bilal-travels.png
│   │   ├── ui-desktop-homepage.jpg
│   │   └── ui-wireframes-and-screens.jpg
│   ├── ARCHITECTURE.md
│   ├── DATABASE_SCHEMA.md
│   ├── DESIGN_SYSTEM.md
│   ├── REQUIREMENTS.md
│   └── SECURITY.md
│
├── public\                          # Public static assets
│   ├── images\                      # Optimized web banners & destination photos
│   ├── brand\                       # Favicons, web manifest, official logo
│   └── fonts\                       # Self-hosted DM Serif Display & Plus Jakarta Sans
│
├── src\
│   ├── app\                         # Next.js App Router
│   │   ├── (public)\                # Public website route group
│   │   │   ├── page.tsx             # Homepage
│   │   │   ├── about\page.tsx       # About Us
│   │   │   ├── tours\               # Tours listing & dynamic [slug] detail
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]\page.tsx
│   │   │   ├── destinations\        # Destinations catalog & [slug] detail
│   │   │   ├── visa\page.tsx        # Visa Consultancy Hub
│   │   │   ├── umrah\page.tsx       # Umrah & Pilgrimage Packages
│   │   │   ├── travellers\page.tsx  # Consent-verified Traveller Stories
│   │   │   ├── contact\page.tsx     # Contact & Location
│   │   │   └── legal\               # Privacy, Terms, Cancellation policies
│   │   │
│   │   ├── (portal)\                # Customer Journey Portal ("My Journey")
│   │   │   └── my-journey\
│   │   │       ├── page.tsx         # Active Trips, Stepper & History
│   │   │       ├── documents\page.tsx
│   │   │       └── profile\page.tsx
│   │   │
│   │   ├── (admin)\                 # Protected Admin Management Platform
│   │   │   └── admin\
│   │   │       ├── dashboard\page.tsx
│   │   │       ├── leads\page.tsx   # Enquiries Kanban
│   │   │       ├── packages\page.tsx# Tour Package CMS
│   │   │       ├── visas\page.tsx   # Visa Applications Pipeline
│   │   │       ├── stories\page.tsx # Consent & Stories Publishing Gate
│   │   │       └── audit-logs\page.tsx
│   │   │
│   │   ├── api\                     # Serverless API routes
│   │   │   ├── enquiries\route.ts   # Quote & Lead submission (Rate-limited)
│   │   │   ├── admin\**\route.ts    # Admin CRUD with RBAC verification
│   │   │   └── portal\**\route.ts   # Customer authenticated endpoints
│   │   │
│   │   ├── layout.tsx               # Root layout (Fonts, Meta, Theme)
│   │   └── globals.css              # Tailwind directives & CSS tokens
│   │
│   ├── components\                  # Reusable UI component library
│   │   ├── common\                  # Buttons, Badges, Modals, Inputs, Steppers
│   │   ├── layout\                  # Header, Footer, MobileNav, BottomNav
│   │   ├── public\                  # Hero, DestinationCard, PackageCard, ItineraryTimeline
│   │   ├── portal\                  # JourneyStepper, DocumentCard, MilestoneBadge
│   │   └── admin\                   # DataTable, LeadKanban, StatusDropdown, ConsentViewer
│   │
│   ├── lib\                         # Core utilities & shared logic
│   │   ├── db.ts                    # PostgreSQL client connection pool
│   │   ├── auth.ts                  # Session & token verification
│   │   ├── rbac.ts                  # Role-based permission checks
│   │   ├── storage.ts               # Private signed URL generator
│   │   └── validators\              # Zod schemas (enquiry, package, visa)
│   │
│   └── types\                       # Global TypeScript interfaces & database models
│       ├── database.ts
│       ├── tours.ts
│       └── enquiries.ts
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

---

## 4. API Specification & Security Boundaries

### 4.1 Public Endpoints
- `GET /api/destinations` — Returns active destinations (`id, name, slug, country, image_url, tags`).
- `GET /api/packages` — Returns published packages with multi-facet filtering (query params: `destination, tour_type, min_price, max_price, duration`).
- `GET /api/packages/[slug]` — Returns complete tour details, day-by-day itinerary, inclusions/exclusions.
- `POST /api/enquiries` — Accepts quote requests. Validated via Zod, rate-limited (max 5 requests per IP per hour), anti-bot honeypot check.
- `GET /api/stories` — Returns ONLY stories where `status = 'PUBLISHED'` AND `consent_status = 'VERIFIED'` AND `is_approved_by_admin = true`.

### 4.2 Customer Portal Endpoints (Authenticated)
- `GET /api/portal/my-trips` — Returns authenticated customer's upcoming & past trips.
- `GET /api/portal/documents/[doc_id]/download` — Validates customer ownership and returns a 15-minute signed download URL.
- `POST /api/portal/consent/withdraw` — Allows customer to instantly revoke consent for any published story or photo.

### 4.3 Admin Back-Office Endpoints (RBAC Restricted)
- `GET/POST /api/admin/leads` — Requires `role IN ('SUPER_ADMIN', 'OPERATIONS_MANAGER')`.
- `PUT /api/admin/leads/[id]/status` — Updates lead state machine with automated audit logging.
- `POST /api/admin/packages` — Requires `role IN ('SUPER_ADMIN', 'CONTENT_EDITOR')`.
- `POST /api/admin/stories/[id]/publish` — Strict approval gate: requires Super Admin sign-off and valid digital consent record verification.
