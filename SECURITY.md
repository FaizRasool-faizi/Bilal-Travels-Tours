# Bilal Travels & Tours — Information Security & Data Governance Policy

**Document Version:** 1.0.0  
**Phase:** Phase 3 — Technical Architecture & Security Plan  
**Project Owner:** Bilal Travels & Tours  
**Engineering Agent:** Antigravity Autonomous Engineering Agent  
**Status:** Approved Security Architecture  

---

## 1. Security Architecture Principles

Customer trust is paramount for Bilal Travels & Tours. Our security architecture enforces a **Zero-Trust, Defense-in-Depth** model:

1. **Principle of Least Privilege:** Every API route and database query runs with the minimum permissions required.
2. **Server-Enforced Authorization:** Security decisions (who can read/write data) are verified on the server, never relying solely on frontend UI states.
3. **Strict Data Segregation:** Public views strictly exclude sensitive customer attributes (passports, internal staff notes, private phone numbers).
4. **Consent-Gated Media:** No personal photograph or story is ever published to the public internet without verified, recorded, and revocable consent.
5. **Short-Lived Ephemeral Document URLs:** Identity documents and travel vouchers are never stored in public cloud storage buckets.

---

## 2. Role-Based Access Control (RBAC) Matrix

| Resource / Action | Public Visitor | Authenticated Traveller | Content Editor | Operations Manager | Super Admin |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Browse Packages & Destinations** | ✅ Read | ✅ Read | ✅ Read | ✅ Read | ✅ Read |
| **Submit Quote / Enquiry** | ✅ Create | ✅ Create | ✅ Create | ✅ Create | ✅ Create |
| **View Own Trips & Vouchers** | ❌ Denied | ✅ Read (Own) | ❌ Denied | ✅ Read (Assigned) | ✅ Read (All) |
| **Download Travel Documents** | ❌ Denied | ✅ Signed URL (Own) | ❌ Denied | ✅ Read | ✅ Read |
| **Manage Inquiries / Leads** | ❌ Denied | ❌ Denied | ❌ Denied | ✅ Read / Update | ✅ Full CRUD |
| **Edit Tour Packages & Itineraries** | ❌ Denied | ❌ Denied | ✅ Full CRUD | ✅ Full CRUD | ✅ Full CRUD |
| **Approve Traveller Stories for Web**| ❌ Denied | ❌ Denied | ❌ Draft Only | ❌ Review Only | ✅ Approve / Publish |
| **Revoke Consent for Stories** | ❌ Denied | ✅ Revoke (Own) | ❌ Denied | ✅ Revoke | ✅ Full Control |
| **Staff & Role Management** | ❌ Denied | ❌ Denied | ❌ Denied | ❌ Denied | ✅ Full Control |
| **View System Audit Logs** | ❌ Denied | ❌ Denied | ❌ Denied | ❌ Denied | ✅ Read-Only Audit |

---

## 3. Data Protection & Document Vault Architecture

### 3.1 Private Storage Bucket Policies
- Customer identification documents (`passport_scans`, `bank_statements`, `cnic_scans`, `e_visas`) are stored in an encrypted, private storage bucket with **zero public read permissions**.
- When an authorized traveller or staff member requests to download a file:
  1. The API verifies the user's active session.
  2. The server confirms the user owns the record or holds the appropriate staff role.
  3. The server calls the storage provider to generate a cryptographically signed HMAC URL valid for **exactly 15 minutes** (`expiresIn: 900`).
  4. The URL is returned to the client and immediately expires after the time window.

### 3.2 Anti-Spam & Bot Mitigation on Public Forms
- **Honeypot Fields:** Invisible decoy fields (`website_url_check`) included in quote forms. If filled by automated bots, the request is silently dropped.
- **Server-Side Rate Limiting:** Form submission endpoints are capped at 5 submissions per IP per hour.
- **Input Sanitization:** All text inputs are trimmed, sanitized, and validated using Zod schemas to block XSS and SQL injection vectors.

---

## 4. Traveller Stories Consent & Revocation Workflow

The public publication of any customer photo or story follows an uncompromising 5-step verification process:

1. **Step 1 (Staff Draft):** Operations staff drafts a story from a completed trip and marks it as `DRAFT`.
2. **Step 2 (Digital Consent Request):** A consent record is created with explicit scope (e.g. `WEB_ONLY`, allowed display name: `Faiz M.`).
3. **Step 3 (Customer Sign-off):** Customer affirms digital consent. The status updates to `VERIFIED` with timestamp and IP/signature evidence.
4. **Step 4 (Admin Gate):** A Super Admin reviews the story to ensure compliance and sets `is_approved_by_admin = true` and `status = 'PUBLISHED'`.
5. **Step 5 (Instant Revocation Guarantee):** If a customer withdraws consent at any time:
   - The consent status is set to `REVOKED`.
   - The database trigger automatically sets `traveller_stories.status = 'WITHDRAWN'`.
   - CDN cache tags for `/travellers` and `/travellers/[slug]` are immediately invalidated.
   - The story disappears from the public website instantly.
