"use client";

import React, { useState, useMemo, useEffect } from "react";
import { BookItem } from "@/lib/types";
import { siteConfig } from "@/lib/siteData";
import {
  Search,
  X,
  BookOpen,
  ExternalLink,
  MessageCircle,
  Library,
  LayoutGrid,
  List,
  Sparkles,
} from "lucide-react";

interface AllBooksSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  allBooks: BookItem[];
  onSelectBook: (book: BookItem) => void;
}

export default function AllBooksSearchModal({
  isOpen,
  onClose,
  allBooks,
  onSelectBook,
}: AllBooksSearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const categories = [
    { key: "all", label: `সবগুলো (${allBooks.length})` },
    { key: "meshk", label: "🌟 মেশক মূল বই (১৭টি)" },
    { key: "pocket_risala", label: "📜 পকেট পুস্তিকা ও লিটল ম্যাগ" },
    { key: "literature", label: "✍️ ভাষা ও সাহিত্য" },
    { key: "seerat", label: "🌸 সীরাত ও সুন্নাহ" },
    { key: "spirituality", label: "📖 আত্মশুদ্ধি ও ইলম" },
    { key: "fiqh_history", label: "⚖️ ইতিহাস ও ফিকহ" },
    { key: "family_society", label: "🏡 পরিবার ও সমাজ" },
  ];

  const filteredBooks = useMemo(() => {
    return allBooks.filter((book) => {
      // Category filter
      if (selectedCategory === "meshk" && !book.isMeshkOriginal) return false;
      if (selectedCategory === "pocket_risala" && !book.isPocketEdition) return false;
      if (
        selectedCategory !== "all" &&
        selectedCategory !== "meshk" &&
        selectedCategory !== "pocket_risala" &&
        book.categoryKey !== selectedCategory
      ) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = book.title.toLowerCase().includes(q);
        const matchAuthor = (book.author || "").toLowerCase().includes(q);
        const matchCategory = (book.category || "").toLowerCase().includes(q);
        const matchPublisher = (book.publisher || "").toLowerCase().includes(q);
        return matchTitle || matchAuthor || matchCategory || matchPublisher;
      }

      return true;
    });
  }, [allBooks, selectedCategory, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-5xl bg-[#FBF8F2] rounded-3xl shadow-2xl border border-amber-900/20 flex flex-col h-[92vh] overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-amber-900/15 bg-[#F5ECE0] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-800 text-white flex items-center justify-center shadow-xs">
              <Library className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-xl font-bold text-stone-900 leading-snug">
                মাওলানা যাইনুল আবিদীনের সমগ্র গ্রন্থভাণ্ডার
              </h3>
              <p className="text-xs text-stone-600 flex items-center gap-2 mt-0.5">
                <span className="font-semibold text-amber-900">
                  মোট {allBooks.length}টি বইয়ের মূল প্রচ্ছদ ক্যাটালগ
                </span>
                <span>•</span>
                <span>লাইভ সার্চ ও ফিল্টার</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-white/80 rounded-xl p-1 border border-amber-900/15 shadow-2xs">
              <button
                onClick={() => setViewMode("list")}
                title="তালিকা ভিউ"
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === "list"
                    ? "bg-amber-800 text-white shadow-2xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                title="বুকশেলফ গ্রিড ভিউ"
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-amber-800 text-white shadow-2xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search & Category Tabs */}
        <div className="p-3.5 sm:p-4 border-b border-amber-900/10 space-y-2.5 bg-[#FAF5EC] shrink-0">
          {/* Live Search Input */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="বইয়ের নাম, বিষয় বা ক্যাটাগরি দিয়ে খুঁজুন..."
              className="w-full pl-10 pr-20 py-2.5 rounded-xl border border-amber-900/20 bg-white text-stone-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-600 shadow-inner"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-stone-400 hover:text-stone-700 bg-stone-100 px-2 py-0.5 rounded cursor-pointer"
              >
                মুছে ফেলুন
              </button>
            )}
          </div>

          {/* Category Filter Pills & Result count */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
              {categories.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setSelectedCategory(c.key)}
                  className={`px-3 py-1.5 rounded-full font-semibold shrink-0 transition-all cursor-pointer ${
                    selectedCategory === c.key
                      ? "bg-amber-900 text-white shadow-xs"
                      : "bg-white text-stone-700 border border-amber-900/15 hover:bg-stone-100"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <span className="text-[11px] font-bold text-amber-950 shrink-0 hidden sm:inline bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300">
              {filteredBooks.length} টি বই পাওয়া গেছে
            </span>
          </div>
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {filteredBooks.length === 0 ? (
            <div className="text-center py-16 text-stone-500 space-y-2">
              <BookOpen className="w-12 h-12 mx-auto text-amber-800/40" />
              <p className="font-bold text-stone-700 text-base">কোনো বই পাওয়া যায়নি</p>
              <p className="text-xs">বানান পরিবর্তন করে অথবা অন্য ক্যাটাগরিতে খুঁজে দেখুন।</p>
            </div>
          ) : viewMode === "grid" ? (
            /* =========================================
               GRID VIEW: ALL COVERS STANDING
               ========================================= */
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 justify-items-center">
              {filteredBooks.map((b) => (
                <div
                  key={b.id}
                  onClick={() => {
                    onClose();
                    onSelectBook(b);
                  }}
                  className="group relative cursor-pointer flex flex-col items-center select-none w-[130px] sm:w-[145px]"
                >
                  {/* Book 3D Cover */}
                  <div className="relative w-[130px] h-[195px] sm:w-[145px] sm:h-[218px] rounded-md overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:scale-105 border border-amber-950/20 bg-stone-900">
                    {/* Spine Shadow */}
                    <div className="absolute inset-y-0 left-0 w-3 z-10 bg-gradient-to-r from-black/45 via-black/15 to-transparent pointer-events-none" />

                    {/* Cover Image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={b.coverImage}
                      alt={b.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />

                    {/* Discount badge */}
                    {b.regularPrice && b.salePrice && b.regularPrice > b.salePrice && (
                      <div className="absolute top-1.5 right-1.5 z-20 bg-rose-600 text-white font-bold text-[9px] px-1.5 py-0.5 rounded shadow-xs">
                        {Math.round(((b.regularPrice - b.salePrice) / b.regularPrice) * 100)}% ছাড়
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 z-20 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-2">
                      <span className="px-2.5 py-1 rounded-full bg-amber-400 text-amber-950 font-bold text-[11px] shadow-md">
                        বিস্তারিত দেখুন
                      </span>
                    </div>
                  </div>

                  {/* Title & Price under book */}
                  <div className="mt-1.5 text-center w-full px-1">
                    <p className="text-[11px] font-bold text-stone-900 line-clamp-1 group-hover:text-amber-900 transition-colors">
                      {b.title}
                    </p>
                    <p className="text-[10px] text-amber-900 font-semibold">
                      {b.salePrice ? `৳ ${b.salePrice}` : "রকমারিতে লভ্য"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* =========================================
               LIST VIEW: WITH BOOK COVERS AND ACTIONS
               ========================================= */
            <div className="divide-y divide-amber-900/10">
              {filteredBooks.map((b, idx) => (
                <div
                  key={b.id || idx}
                  className="py-3 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-amber-50/70 rounded-2xl px-3 transition-colors"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Index */}
                    <span className="text-xs font-mono font-bold text-amber-900/50 shrink-0 w-6 text-center hidden sm:inline">
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    {/* Real Book Cover Thumbnail */}
                    <div
                      onClick={() => {
                        onClose();
                        onSelectBook(b);
                      }}
                      className="relative w-12 h-16 sm:w-14 sm:h-20 shrink-0 rounded-md overflow-hidden shadow-md border border-amber-950/20 bg-stone-900 cursor-pointer group/thumb hover:scale-105 transition-transform"
                    >
                      {/* Spine shadow */}
                      <div className="absolute inset-y-0 left-0 w-1.5 bg-black/40 z-10 pointer-events-none" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={b.coverImage}
                        alt={b.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Book Text Details */}
                    <div>
                      <h4
                        onClick={() => {
                          onClose();
                          onSelectBook(b);
                        }}
                        className="font-bold text-sm sm:text-base text-stone-900 hover:text-amber-900 cursor-pointer transition-colors leading-snug line-clamp-1 sm:line-clamp-none"
                      >
                        {b.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-stone-600">
                        <span className="font-semibold text-amber-900 bg-amber-200/70 px-2 py-0.5 rounded text-[11px] border border-amber-300/50">
                          {b.category}
                        </span>
                        <span className="text-[11px] text-stone-500">
                          প্রকাশনা: <span className="font-medium text-stone-700">{b.publisher}</span>
                        </span>
                        {b.salePrice && (
                          <span className="font-bold text-emerald-800 text-xs">
                            ৳ {b.salePrice}
                            {b.regularPrice && b.regularPrice > b.salePrice && (
                              <span className="text-[10px] text-stone-400 line-through ml-1 font-normal">
                                ৳{b.regularPrice}
                              </span>
                            )}
                          </span>
                        )}
                        {b.isMeshkOriginal && (
                          <span className="text-[10px] font-bold text-amber-900 bg-amber-100 px-1.5 py-0.5 rounded flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5" /> মেশক মূল প্রকাশনা
                          </span>
                        )}
                        {b.isPocketEdition && (
                          <span className="text-[10px] font-bold text-emerald-900 bg-emerald-100 px-1.5 py-0.5 rounded">
                            📜 পকেট পুস্তিকা
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectBook(b);
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold text-xs transition-colors cursor-pointer shadow-2xs"
                    >
                      বিবরণ
                    </button>

                    {b.rokomariUrl && (
                      <a
                        href={b.rokomariUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs transition-colors"
                      >
                        <span>রকমারি</span>
                        <ExternalLink className="w-3 h-3 text-stone-400" />
                      </a>
                    )}

                    <a
                      href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                        `আসসালামু আলাইকুম, আমি মাওলানা যাইনুল আবিদীনের "${b.title}" বইটি সম্পর্কে জানতে ও সংগ্রহ করতে চাই।`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-2xs"
                      title="হোয়াটসঅ্যাপে মেসেজ"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 sm:p-4 border-t border-amber-900/15 bg-[#F5ECE0] flex items-center justify-between text-xs text-stone-600 shrink-0">
          <p>
            যেকোনো বই সরাসরি অর্ডারের জন্য হোয়াটসঅ্যাপ:{" "}
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-800 hover:underline"
            >
              {siteConfig.whatsappDisplay}
            </a>
          </p>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-stone-800 text-white font-bold text-xs hover:bg-stone-900 transition-colors cursor-pointer"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
}
