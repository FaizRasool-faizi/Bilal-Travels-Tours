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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Image size should be less than 2MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result as string }));
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
        setFormError(json.error || "Failed to save record.");
      }
    } catch (err) {
      setFormError("Server error. Please try again.");
    } finally {
      setFormSubmitting(false);
    }
  };

  // Filtered List
  const filteredTravellers = travellers.filter((t) => {
    const matchesSearch =
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.passportNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.departureCity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.flightDetails.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = filterCategory === "All" || t.tripCategory === filterCategory;
    const matchesStatus = filterStatus === "All" || t.status === filterStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // =========================================================================
  // VIEW A: LOGIN SCREEN
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-navy-950 via-[#0A1A2E] to-navy-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-gold-400/30 rounded-3xl p-8 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.5)] text-white space-y-7 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center space-y-2 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-white/10 p-2.5 border border-gold-400/40 flex items-center justify-center mx-auto shadow-md">
              <ShieldCheck className="w-9 h-9 text-gold-400" />
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white mt-3">
              Bilal Travels Admin Portal
            </h1>
            <p className="text-xs text-slate-300">
              Executive Traveller Management &amp; Flight Records
            </p>
          </div>

          {loginError && (
            <div className="p-3.5 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 mb-1.5 font-medium">Administrator Username</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="admin"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-navy-900/80 border border-gold-400/30 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 text-xs"
                />
                <User className="w-4 h-4 text-gold-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 mb-1.5 font-medium">Secret Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-navy-900/80 border border-gold-400/30 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 text-xs"
                />
                <Lock className="w-4 h-4 text-gold-400 absolute left-3.5 top-3.5" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-card transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer"
            >
              <span>Unlock Admin Dashboard</span>
              <ShieldCheck className="w-4 h-4" />
            </button>
          </form>

          {/* Credentials Helper Note */}
          <div className="pt-2 text-center border-t border-white/10">
            <p className="text-[11px] text-slate-400">
              Default Credentials: <strong className="text-gold-300">admin</strong> /{" "}
              <strong className="text-gold-300">bilal@travels2026</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW B: AUTHENTICATED ADMIN DASHBOARD
  // =========================================================================
  return (
    <div className="bg-[#FAF8F3] min-h-screen pb-20">
      {/* Top Admin Navigation Header */}
      <header className="bg-navy-950 text-white border-b border-gold-400/30 sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white">
                  Bilal Travels &amp; Tours
                </h1>
                <span className="px-2 py-0.5 rounded-full bg-gold-400/20 text-gold-300 font-mono text-[10px] font-bold uppercase border border-gold-400/40">
                  Admin Portal
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Registered Office: 1 Minar wali Masjid, Chungi Amar Sidhu Lahore
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/travellers"
              target="_blank"
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span>View Frontend</span>
              <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
            </Link>

            <button
              onClick={handleLogout}
              className="px-3.5 py-1.5 rounded-xl bg-red-950/60 hover:bg-red-900 border border-red-500/30 text-red-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 space-y-8">
        {/* Metric Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-border-muted shadow-sm space-y-1">
            <div className="flex items-center justify-between text-slate-500 text-xs">
              <span>Total Travellers</span>
              <Users className="w-4 h-4 text-gold-600" />
            </div>
            <span className="font-serif text-3xl font-bold text-navy-950 block">
              {travellers.length}
            </span>
            <p className="text-[11px] text-slate-400">Recorded in Database</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-border-muted shadow-sm space-y-1">
            <div className="flex items-center justify-between text-slate-500 text-xs">
              <span>Traveling Now</span>
              <Plane className="w-4 h-4 text-emerald-600" />
            </div>
            <span className="font-serif text-3xl font-bold text-emerald-600 block">
              {travellers.filter((t) => t.status === "Traveling Now").length}
            </span>
            <p className="text-[11px] text-slate-400">Active Pilgrims &amp; Tourists</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-border-muted shadow-sm space-y-1">
            <div className="flex items-center justify-between text-slate-500 text-xs">
              <span>Upcoming Departures</span>
              <Clock className="w-4 h-4 text-blue-600" />
            </div>
            <span className="font-serif text-3xl font-bold text-blue-600 block">
              {travellers.filter((t) => t.status === "Upcoming").length}
            </span>
            <p className="text-[11px] text-slate-400">Files Processed</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-border-muted shadow-sm space-y-1">
            <div className="flex items-center justify-between text-slate-500 text-xs">
              <span>Gender Split</span>
              <Sparkles className="w-4 h-4 text-purple-600" />
            </div>
            <span className="font-serif text-2xl font-bold text-navy-950 block">
              👨 {travellers.filter((t) => t.gender === "male").length} / 🧕{" "}
              {travellers.filter((t) => t.gender === "female").length}
            </span>
            <p className="text-[11px] text-slate-400">Ladies identity protected on frontend</p>
          </div>
        </div>

        {/* Action & Filter Bar */}
        <div className="bg-white p-5 rounded-3xl border border-border-muted shadow-card flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search traveller by name, passport, flight, or destination..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border-muted text-xs focus:outline-none focus:border-gold-500 bg-ivory-50"
              />
            </div>

            {/* Category Filter */}
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3.5 py-2.5 rounded-xl border border-border-muted text-xs bg-ivory-50 text-navy-900 focus:outline-none focus:border-gold-500"
            >
              <option value="All">All Categories</option>
              <option value="Umrah">Umrah Pilgrimage</option>
              <option value="International Tour">International Tour</option>
              <option value="Family Holiday">Family Holiday</option>
            </select>

            {/* Status Filter */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3.5 py-2.5 rounded-xl border border-border-muted text-xs bg-ivory-50 text-navy-900 focus:outline-none focus:border-gold-500"
            >
              <option value="All">All Statuses</option>
              <option value="Traveling Now">Traveling Now</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchTravellers}
              title="Refresh"
              className="p-2.5 rounded-xl border border-border-muted hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
            </button>

            <button
              onClick={handleOpenAdd}
              className="bg-navy-950 hover:bg-gold-500 hover:text-navy-950 text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-card transition-all cursor-pointer whitespace-nowrap"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Traveller</span>
            </button>
          </div>
        </div>

        {/* Travellers Table */}
        <div className="bg-white rounded-3xl border border-border-muted shadow-card overflow-hidden">
          <div className="p-5 border-b border-border-muted flex items-center justify-between">
            <h2 className="font-serif text-lg font-bold text-navy-950">
              Registered Travellers &amp; Flights ({filteredTravellers.length})
            </h2>
            <div className="text-[11px] text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Public rules active: Ladies photos are automatically masked on frontend</span>
            </div>
          </div>

          {filteredTravellers.length === 0 ? (
            <div className="p-12 text-center space-y-3">
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
          ADD / EDIT TRAVELLER MODAL
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
                  Fill in passport, journey, and flight details. Records appear on frontend instantly.
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
                    placeholder="e.g. Lahore, Islamabad, Karachi"
                    value={formData.departureCity}
                    onChange={(e) => setFormData({ ...formData, departureCity: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-muted bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              {/* Destination & Flight Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-navy-900 font-bold mb-1">Destination *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Makkah & Madinah (Umrah), Istanbul, Dubai"
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

              {/* Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-navy-900 font-bold mb-1">Departure Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.departureDate}
                    onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-muted bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-navy-900 font-bold mb-1">Return Date</label>
                  <input
                    type="date"
                    value={formData.returnDate}
                    onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-muted bg-ivory-50 text-navy-950 focus:outline-none focus:border-gold-500 font-mono"
                  />
                </div>
              </div>

              {/* Address in Pakistan */}
              <div>
                <label className="block text-navy-900 font-bold mb-1">Residential Address *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Model Town, Lahore, Punjab"
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
                    <option value="Visit Visa">Visit Visa</option>
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
    </div>
  );
}
