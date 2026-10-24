"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  User,
  Plus,
  Search,
  Trash2,
  Edit2,
  Plane,
  Calendar,
  MapPin,
  FileText,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  LogOut,
  ExternalLink,
  Users,
  Camera,
  Upload,
  Clock,
  Building,
  RefreshCw,
  X,
  Sparkles,
} from "lucide-react";

export interface TravellerRecord {
  id: string;
  name: string;
  gender: "male" | "female";
  image?: string;
  passportNumber: string;
  departureCity: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  flightDetails: string;
  address: string;
  tripCategory: string;
  status: "Completed" | "Traveling Now" | "Upcoming";
  notes?: string;
  visaImage?: string;
  visaType?: string;
  visaNumber?: string;
  visaExpiryDate?: string;
  createdAt?: string;
}

const DEFAULT_ADMIN_USER = "admin";
const DEFAULT_ADMIN_PASS = "bilal@travels2026";

export default function AdminPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Dashboard Data State
  const [travellers, setTravellers] = useState<TravellerRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  // Visa Document Preview Lightbox State
  const [selectedVisaPreview, setSelectedVisaPreview] = useState<{
    name: string;
    visaImage: string;
    visaType?: string;
    visaNumber?: string;
  } | null>(null);

  const initialFormState: Omit<TravellerRecord, "id"> = {
    name: "",
    gender: "male",
    image: "",
    passportNumber: "",
    departureCity: "Lahore",
    destination: "Makkah & Madinah (Umrah)",
    departureDate: new Date().toISOString().split("T")[0],
    returnDate: "",
    flightDetails: "Saudia SV-735 (LHE → JED)",
    address: "Lahore, Pakistan",
    tripCategory: "Umrah",
    status: "Traveling Now",
    notes: "",
    visaImage: "",
    visaType: "Umrah Visa",
    visaNumber: "",
    visaExpiryDate: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  // Check auth session
  useEffect(() => {
    const session = localStorage.getItem("bilal_admin_session");
    if (session === "active") {
      setIsAuthenticated(true);
      fetchTravellers();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    if (
      (loginUsername.trim().toLowerCase() === DEFAULT_ADMIN_USER ||
        loginUsername.trim().toLowerCase() === "bilaltravels") &&
      loginPassword === DEFAULT_ADMIN_PASS
    ) {
      setIsAuthenticated(true);
      localStorage.setItem("bilal_admin_session", "active");
      fetchTravellers();
    } else {
      setLoginError("Invalid Administrator credentials. Please verify and try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("bilal_admin_session");
    setIsAuthenticated(false);
  };

  const fetchTravellers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/travellers");
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        setTravellers(json.data);
      }
    } catch (err) {
      console.error("Failed to load travellers:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Photo Upload Handler (Up to 3MB)
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        alert("Image size should be less than 3MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Visa Document Upload Handler (Supports images & PDFs up to 5MB)
  const handleVisaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Visa document size should be less than 5MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, visaImage: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData(initialFormState);
    setFormError("");
    setIsModalOpen(true);
  };

  const handleOpenEdit = (traveller: TravellerRecord) => {
    setEditingId(traveller.id);
    setFormData({
      name: traveller.name,
      gender: traveller.gender,
      image: traveller.image || "",
      passportNumber: traveller.passportNumber,
      departureCity: traveller.departureCity,
      destination: traveller.destination,
      departureDate: traveller.departureDate,
      returnDate: traveller.returnDate,
      flightDetails: traveller.flightDetails,
      address: traveller.address,
      tripCategory: traveller.tripCategory,
      status: traveller.status,
      notes: traveller.notes || "",
      visaImage: traveller.visaImage || "",
      visaType: traveller.visaType || "Umrah Visa",
      visaNumber: traveller.visaNumber || "",
      visaExpiryDate: traveller.visaExpiryDate || "",
    });
    setFormError("");
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to remove ${name} from traveller records?`)) {
      return;
    }
    try {
      const res = await fetch(`/api/travellers?id=${id}`, { method: "DELETE" });
      const json = await res.json();
      if (json.success) {
        setTravellers((prev) => prev.filter((t) => t.id !== id));
      } else {
        alert("Failed to delete record.");
      }
    } catch (err) {
      alert("Error deleting record.");
    }
  };

  const handleSaveTraveller = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setFormError("");

    try {
      const method = editingId ? "PUT" : "POST";
      const payload = editingId ? { id: editingId, ...formData } : formData;

      const res = await fetch("/api/travellers", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (json.success) {
        setIsModalOpen(false);
        fetchTravellers();
      } else {
        setFormError(json.error || json.message || "Failed to save record.");
      }
    } catch (err) {
      setFormError("Server error. Please ensure MongoDB is reachable.");
    } finally {
      setFormSubmitting(false);
    }
  };

  // Filtered List
  const filteredTravellers = travellers.filter((t) => {
    const matchesSearch =
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.passportNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.departureCity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.flightDetails.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (t.visaNumber && t.visaNumber.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = filterCategory === "All" || t.tripCategory === filterCategory;
    const matchesStatus = filterStatus === "All" || t.status === filterStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Calculate stats
  const totalCount = travellers.length;
  const travelingNowCount = travellers.filter((t) => t.status === "Traveling Now").length;
  const upcomingCount = travellers.filter((t) => t.status === "Upcoming").length;
  const femaleCount = travellers.filter((t) => t.gender === "female").length;
  const withVisaCount = travellers.filter((t) => t.visaImage).length;

  /* =========================================================================
     LOGIN SCREEN (GATE)
  ========================================================================= */
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#091524] via-navy-950 to-[#0A1728] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-navy-900/90 backdrop-blur-xl border border-gold-400/30 rounded-3xl p-8 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.5)] space-y-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="text-center space-y-2 relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold-400/20 border border-gold-400/40 text-gold-400 mb-2 shadow-inner">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Bilal Travels Portal
            </h1>
            <p className="text-xs text-slate-300">
              Staff &amp; Administrator Access Control System
            </p>
          </div>

          {loginError && (
            <div className="p-3.5 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 relative z-10 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Admin Username
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  required
                  placeholder="admin"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-navy-950/70 border border-gold-500/30 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-navy-950/70 border border-gold-500/30 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 text-xs"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3 text-slate-400 hover:text-white cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-500 to-amber-400 hover:from-gold-400 hover:to-amber-300 text-navy-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-gold-500/20 cursor-pointer"
              >
                Log In to Admin Portal
              </button>
            </div>
          </form>

          <div className="pt-2 text-center text-[11px] text-slate-400 border-t border-white/10">
            <p>1 Minar wali Masjid, Kacha Jail road, Lahore</p>
            <p className="text-gold-400 font-mono mt-0.5">Helplines: 0306 5602040 | 0314 4310865</p>
          </div>
        </div>
      </div>
    );
  }

  /* =========================================================================
     ADMIN DASHBOARD
  ========================================================================= */
  return (
    <div className="bg-[#FAF8F3] min-h-screen text-navy-950">
      {/* Top Admin Header Bar */}
      <header className="bg-navy-950 text-white border-b border-gold-500/30 sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gold-400/20 border border-gold-400/40 flex items-center justify-center text-gold-400 font-bold">
              BT
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-white">
                  Bilal Travels &amp; Tours
                </span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-gold-400/20 text-gold-300 border border-gold-400/30 font-bold">
                  Admin Portal
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Logged in as <span className="text-gold-300 font-mono font-bold">Administrator</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/travellers"
              target="_blank"
              className="text-xs text-gold-300 hover:text-gold-200 flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gold-400/30 bg-navy-900/60 transition-colors"
            >
              <span>View Public Frontend</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={handleLogout}
              className="text-xs text-rose-300 hover:text-rose-200 flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-rose-500/30 bg-rose-950/40 hover:bg-rose-900/60 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-border-muted shadow-card">
            <span className="text-[11px] uppercase font-mono text-slate-500 block">Total Travellers</span>
            <span className="font-serif text-3xl font-bold text-navy-950 block mt-1">{totalCount}</span>
            <span className="text-[10px] text-emerald-600 block mt-0.5">● Synced with Cloud DB</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-border-muted shadow-card">
            <span className="text-[11px] uppercase font-mono text-slate-500 block">Traveling Now</span>
            <span className="font-serif text-3xl font-bold text-emerald-600 block mt-1">{travelingNowCount}</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Active in Makkah / Foreign</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-border-muted shadow-card">
            <span className="text-[11px] uppercase font-mono text-slate-500 block">Upcoming Trips</span>
            <span className="font-serif text-3xl font-bold text-blue-600 block mt-1">{upcomingCount}</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Departures scheduled</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-border-muted shadow-card">
            <span className="text-[11px] uppercase font-mono text-slate-500 block">Visas Attached</span>
            <span className="font-serif text-3xl font-bold text-emerald-700 block mt-1">{withVisaCount}</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Official Visas Verified</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-border-muted shadow-card col-span-2 sm:col-span-1">
            <span className="text-[11px] uppercase font-mono text-slate-500 block">Female Privacy</span>
            <span className="font-serif text-3xl font-bold text-purple-700 block mt-1">{femaleCount}</span>
            <span className="text-[10px] text-purple-600 font-medium block mt-0.5">🧕 Modesty Rule Protected</span>
          </div>
        </div>

        {/* Action & Filter Bar */}
        <div className="bg-white p-5 rounded-3xl border border-border-muted shadow-card flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search traveller, passport, visa number, city, or flight..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border-muted text-xs focus:outline-none focus:border-gold-500 bg-ivory-50 text-navy-950"
              />
            </div>

            {/* Category Filter */}
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3.5 py-2.5 rounded-xl border border-border-muted text-xs bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500"
            >
              <option value="All">All Categories</option>
              <option value="Umrah">Umrah Pilgrimage</option>
              <option value="International Tour">International Tour</option>
              <option value="Family Holiday">Family Holiday</option>
              <option value="Work Visa & Employment">Work Visa &amp; Employment</option>
            </select>

            {/* Status Filter */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3.5 py-2.5 rounded-xl border border-border-muted text-xs bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500"
            >
              <option value="All">All Statuses</option>
              <option value="Traveling Now">Traveling Now</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchTravellers}
              title="Refresh Data"
              className="p-2.5 rounded-xl border border-border-muted hover:bg-ivory-50 text-slate-600 transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
            </button>

            <button
              onClick={handleOpenAdd}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-400 hover:from-gold-400 hover:to-amber-300 text-navy-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md hover:shadow-gold-500/20 transition-all cursor-pointer whitespace-nowrap"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Traveller</span>
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-3xl border border-border-muted shadow-card overflow-hidden">
          <div className="p-5 border-b border-border-muted flex items-center justify-between">
            <div>
              <h2 className="font-serif text-xl font-bold text-navy-950">
                Registered Travellers &amp; Pilgrims
              </h2>
              <p className="text-xs text-slate-500">
                Showing {filteredTravellers.length} of {travellers.length} client files
              </p>
            </div>
            <span className="text-[11px] text-slate-500 font-mono">
              Database: MongoDB Cloud (M0)
            </span>
          </div>

          {isLoading ? (
            <div className="p-16 text-center space-y-3">
              <RefreshCw className="w-8 h-8 animate-spin text-gold-500 mx-auto" />
              <p className="text-xs text-slate-500">Loading travellers records from database...</p>
            </div>
          ) : filteredTravellers.length === 0 ? (
            <div className="p-16 text-center space-y-3">
              <Users className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="font-serif text-lg text-slate-600">No travellers found</h3>
              <p className="text-xs text-slate-400">
                {searchTerm
                  ? "Try adjusting your search or filters."
                  : "Click '+ Add New Traveller' to record your first client."}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-ivory-50 text-slate-500 font-mono text-[10px] uppercase border-b border-border-muted">
                  <tr>
                    <th className="py-3 px-4">Traveller / Photo</th>
                    <th className="py-3 px-4">Passport</th>
                    <th className="py-3 px-4">Visa Document</th>
                    <th className="py-3 px-4">Origin &amp; Dates</th>
                    <th className="py-3 px-4">Destination &amp; Flight</th>
                    <th className="py-3 px-4">Address</th>
                    <th className="py-3 px-4">Category &amp; Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredTravellers.map((traveller) => (
                    <tr key={traveller.id} className="hover:bg-ivory-50/70 transition-colors">
                      {/* Photo & Name */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl overflow-hidden bg-navy-900 border border-gold-400/40 flex-shrink-0 relative">
                            {traveller.image ? (
                              <img
                                src={traveller.image}
                                alt={traveller.name}
                                className="w-full h-full object-cover object-top"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gold-400 font-bold">
                                {traveller.gender === "female" ? "🧕" : "👨"}
                              </div>
                            )}
                          </div>
                          <div>
                            <span className="font-bold text-navy-950 block text-sm">
                              {traveller.name}
                            </span>
                            <span
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full inline-block mt-0.5 ${
                                traveller.gender === "female"
                                  ? "bg-purple-100 text-purple-800"
                                  : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {traveller.gender === "female"
                                ? "Female (Protected on Frontend)"
                                : "Male (Public Photo Active)"}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Passport */}
                      <td className="py-3.5 px-4 font-mono font-bold text-navy-900">
                        {traveller.passportNumber}
                      </td>

                      {/* Visa Copy */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        {traveller.visaImage ? (
                          <div className="space-y-1">
                            <button
                              type="button"
                              onClick={() =>
                                setSelectedVisaPreview({
                                  name: traveller.name,
                                  visaImage: traveller.visaImage!,
                                  visaType: traveller.visaType,
                                  visaNumber: traveller.visaNumber,
                                })
                              }
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-semibold transition-colors cursor-pointer shadow-xs"
                            >
                              <FileText className="w-3.5 h-3.5 text-emerald-600" />
                              <span>View Visa</span>
                            </button>
                            <span className="block text-[10px] text-slate-500 font-mono">
                              {traveller.visaType || "Visa Document"}
                            </span>
                          </div>
                        ) : (
                          <span className="text-[11px] text-slate-400 italic">No Visa Uploaded</span>
                        )}
                      </td>

                      {/* Origin & Dates */}
                      <td className="py-3.5 px-4">
                        <span className="font-bold text-navy-950 block">
                          📍 {traveller.departureCity}
                        </span>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                          <span>Dep: {traveller.departureDate}</span>
                          {traveller.returnDate && (
                            <span className="block text-slate-400">Ret: {traveller.returnDate}</span>
                          )}
                        </div>
                      </td>

                      {/* Destination & Flight */}
                      <td className="py-3.5 px-4">
                        <span className="font-bold text-navy-950 block">
                          {traveller.destination}
                        </span>
                        <span className="text-[11px] text-gold-700 font-mono block mt-0.5">
                          ✈️ {traveller.flightDetails}
                        </span>
                      </td>

                      {/* Address */}
                      <td className="py-3.5 px-4 text-slate-600 max-w-xs truncate">
                        {traveller.address || "N/A"}
                      </td>

                      {/* Category & Status */}
                      <td className="py-3.5 px-4">
                        <span className="text-[11px] font-semibold text-navy-900 block">
                          {traveller.tripCategory}
                        </span>
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full inline-block mt-1 ${
                            traveller.status === "Traveling Now"
                              ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                              : traveller.status === "Upcoming"
                              ? "bg-blue-100 text-blue-800 border border-blue-300"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {traveller.status}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <button
                          onClick={() => handleOpenEdit(traveller)}
                          title="Edit Traveller"
                          className="p-1.5 rounded-lg hover:bg-gold-50 text-gold-700 hover:text-gold-900 mr-1.5 transition-colors cursor-pointer"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(traveller.id, traveller.name)}
                          title="Delete Traveller"
                          className="p-1.5 rounded-lg hover:bg-red-50 text-red-600 hover:text-red-800 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* =========================================================================
          ADD / EDIT TRAVELLER MODAL (WITH VISA DOCUMENT UPLOAD)
      ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-navy-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gold-400/40 space-y-6 relative max-h-[90vh] overflow-y-auto my-8">
            <div className="flex items-center justify-between pb-4 border-b border-border-muted">
              <div>
                <h3 className="font-serif text-2xl font-bold text-navy-950">
                  {editingId ? "Edit Traveller Record" : "Add New Traveller"}
                </h3>
                <p className="text-xs text-slate-500">
                  Fill in passport, visa copy, journey, and flight details. Records appear on frontend instantly.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-navy-950 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formError && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-300 text-red-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleSaveTraveller} className="space-y-4 text-xs">
              {/* Name & Gender */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-navy-900 font-bold mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Haji Muhammad Farooq"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-muted bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-navy-900 font-bold mb-1">Gender *</label>
                  <select
                    value={formData.gender}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value as "male" | "female" })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-muted bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500"
                  >
                    <option value="male">Male (Gentleman - Photo shown on frontend)</option>
                    <option value="female">
                      Female (Lady - Protected placeholder on frontend)
                    </option>
                  </select>
                  {formData.gender === "female" && (
                    <p className="text-[11px] text-purple-700 mt-1 font-semibold">
                      🔒 Islamic modesty rule: A respectful placeholder avatar will be shown on the
                      public frontend instead of her real photo.
                    </p>
                  )}
                </div>
              </div>

              {/* Photo Upload & URL */}
              <div className="p-4 rounded-2xl bg-ivory-50 border border-border-muted space-y-3">
                <label className="block text-navy-900 font-bold">
                  Traveller Photo (File Upload or Image URL)
                </label>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  {/* Photo Preview */}
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-navy-900 border-2 border-gold-400/50 flex-shrink-0 flex items-center justify-center">
                    {formData.image ? (
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Camera className="w-6 h-6 text-gold-400" />
                    )}
                  </div>

                  <div className="flex-1 w-full space-y-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="text-xs file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:bg-navy-950 file:text-white file:text-xs file:cursor-pointer hover:file:bg-gold-500 hover:file:text-navy-950"
                    />
                    <input
                      type="text"
                      placeholder="Or paste direct image URL (https://...)"
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-border-muted text-xs bg-white text-navy-950 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>
              </div>

              {/* =========================================================================
                  NEW: VISA DOCUMENT UPLOAD & DETAILS
              ========================================================================= */}
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-300/80 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-emerald-950 font-bold flex items-center gap-1.5 text-xs">
                    <FileText className="w-4 h-4 text-emerald-600" />
                    <span>Visa Document / E-Visa Copy (File Upload or URL)</span>
                  </label>
                  {formData.visaImage && (
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                      ✓ Document Attached
                    </span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  {/* Visa Preview Thumbnail */}
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-navy-900 border-2 border-emerald-400/60 flex-shrink-0 flex items-center justify-center relative group shadow-sm">
                    {formData.visaImage ? (
                      <img
                        src={formData.visaImage}
                        alt="Visa Document Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center p-1">
                        <FileText className="w-6 h-6 text-emerald-400 mx-auto" />
                        <span className="text-[8px] text-slate-300 block mt-0.5">No Visa</span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 w-full space-y-2">
                    <input
                      type="file"
                      accept="image/*,application/pdf"
                      onChange={handleVisaUpload}
                      className="text-xs file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:bg-emerald-900 file:text-white file:text-xs file:cursor-pointer hover:file:bg-emerald-700"
                    />
                    <input
                      type="text"
                      placeholder="Or paste direct Visa Image / Document URL (https://...)"
                      value={formData.visaImage}
                      onChange={(e) => setFormData({ ...formData, visaImage: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-border-muted text-xs bg-white text-navy-950 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-navy-900 font-bold mb-1 text-[11px]">
                      Visa Type / Category
                    </label>
                    <select
                      value={formData.visaType}
                      onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-border-muted bg-white text-navy-950 focus:outline-none focus:border-emerald-500 text-xs"
                    >
                      <option value="Umrah Visa">Umrah Visa (Saudi Arabia)</option>
                      <option value="Work Visa (Çalışma İzni)">Work Visa / Employment Permit</option>
                      <option value="Tourist e-Visa">Tourist e-Visa</option>
                      <option value="Visit Visa">Family / Visit Visa</option>
                      <option value="Business Visa">Business Commercial Visa</option>
                      <option value="Transit Visa">Transit Visa</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-navy-900 font-bold mb-1 text-[11px]">
                      Visa Number (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 62 090582 or eVisa Ref"
                      value={formData.visaNumber}
                      onChange={(e) => setFormData({ ...formData, visaNumber: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-border-muted bg-white text-navy-950 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Passport & Departure City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-navy-900 font-bold mb-1">Passport Number *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. PK-8291044"
                    value={formData.passportNumber}
                    onChange={(e) => setFormData({ ...formData, passportNumber: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-muted bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500 font-mono"
                  />
                  <span className="text-[10px] text-slate-400">
                    Middle digits will be masked (e.g. PK-82***44) on frontend.
                  </span>
                </div>

                <div>
                  <label className="block text-navy-900 font-bold mb-1">Departure City *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lahore, Karachi, Islamabad"
                    value={formData.departureCity}
                    onChange={(e) => setFormData({ ...formData, departureCity: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-muted bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              {/* Destination & Flight */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-navy-900 font-bold mb-1">Destination *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Makkah & Madinah (Umrah)"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-muted bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-navy-900 font-bold mb-1">Flight Details *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Saudia SV-735 (LHE → JED)"
                    value={formData.flightDetails}
                    onChange={(e) => setFormData({ ...formData, flightDetails: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-muted bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              {/* Departure Date & Return Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-navy-900 font-bold mb-1">Departure Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.departureDate}
                    onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-muted bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-navy-900 font-bold mb-1">Return Date</label>
                  <input
                    type="date"
                    value={formData.returnDate}
                    onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-muted bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              {/* Residential Address */}
              <div>
                <label className="block text-navy-900 font-bold mb-1">Residential Address *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Gulberg III, Lahore, Punjab, Pakistan"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border-muted bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500"
                />
              </div>

              {/* Category & Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-navy-900 font-bold mb-1">Trip Category</label>
                  <select
                    value={formData.tripCategory}
                    onChange={(e) => setFormData({ ...formData, tripCategory: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-muted bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500"
                  >
                    <option value="Umrah">Umrah Pilgrimage</option>
                    <option value="International Tour">International Tour</option>
                    <option value="Family Holiday">Family Holiday</option>
                    <option value="Work Visa & Employment">Work Visa &amp; Employment</option>
                    <option value="Business Travel">Business Travel</option>
                  </select>
                </div>

                <div>
                  <label className="block text-navy-900 font-bold mb-1">Journey Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        status: e.target.value as "Completed" | "Traveling Now" | "Upcoming",
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-muted bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500"
                  >
                    <option value="Traveling Now">Traveling Now (Active Trip)</option>
                    <option value="Upcoming">Upcoming (Departure Scheduled)</option>
                    <option value="Completed">Completed (Returned to Pakistan)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-navy-900 font-bold mb-1">Internal Notes</label>
                <textarea
                  rows={2}
                  placeholder="Special requests, hotel package name, wheelchair assistance, etc."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-border-muted bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500 text-xs"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-border-muted">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="px-6 py-2.5 rounded-xl bg-navy-950 hover:bg-gold-500 hover:text-navy-950 text-white font-bold transition-all shadow-card cursor-pointer flex items-center gap-2"
                >
                  {formSubmitting ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4" />
                  )}
                  <span>{editingId ? "Update Traveller" : "Save & Publish"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================================
          VISA PREVIEW LIGHTBOX MODAL
      ========================================================================= */}
      {selectedVisaPreview && (
        <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-2xl bg-white rounded-3xl p-6 shadow-2xl border border-emerald-400/40 space-y-4 relative">
            <div className="flex items-center justify-between pb-3 border-b border-border-muted">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block mb-1 border border-emerald-300">
                  {selectedVisaPreview.visaType || "Official Visa Copy"}
                </span>
                <h3 className="font-serif text-xl font-bold text-navy-950">
                  {selectedVisaPreview.name}&apos;s Visa Document
                </h3>
                {selectedVisaPreview.visaNumber && (
                  <p className="text-xs font-mono text-slate-500">
                    Visa Ref: {selectedVisaPreview.visaNumber}
                  </p>
                )}
              </div>
              <button
                onClick={() => setSelectedVisaPreview(null)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-navy-950 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-auto rounded-2xl border border-border-muted bg-slate-900 flex items-center justify-center p-2">
              <img
                src={selectedVisaPreview.visaImage}
                alt="Visa Document"
                className="max-w-full max-h-[65vh] object-contain rounded-xl"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <a
                href={selectedVisaPreview.visaImage}
                download={`${selectedVisaPreview.name}-Visa.jpg`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors text-xs font-bold inline-flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Full Resolution / Download</span>
              </a>
              <button
                onClick={() => setSelectedVisaPreview(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors text-xs font-semibold cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
