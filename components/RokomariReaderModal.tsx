"use client";

import React, { useEffect, useRef } from "react";
import { BookItem } from "@/lib/types";
import { siteConfig } from "@/lib/siteData";
import {
  X,
  ExternalLink,
  MessageCircle,
  BookOpen,
  CheckCircle2,
  Bookmark,
  Share2,
} from "lucide-react";

interface RokomariReaderModalProps {
  book: BookItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function RokomariReaderModal({
  book,
  isOpen,
  onClose,
}: RokomariReaderModalProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Keyboard escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !book) return null;

  const whatsappOrderUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    `আসসালামু আলাইকুম, আমি মেশক প্রকাশনের "${book.title}" বইটি সম্পর্কে বিস্তারিত জানতে ও সংগ্রহ করতে চাই।`
  )}`;

  const rokomariLookInsideUrl = book.rokomariId
    ? `https://www.rokomari.com/book/look-inside/${book.rokomariId}`
    : book.rokomariUrl;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Reader Container */}
      <div
        className="relative z-10 w-full max-w-2xl bg-[#FFFDF9] rounded-2xl sm:rounded-3xl shadow-2xl border border-amber-900/20 overflow-hidden flex flex-col max-h-[92vh] text-stone-800"
      >
        {/* Sticky Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-amber-900/15 bg-[#F6EFE2] shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-amber-900 text-amber-100 flex items-center justify-center shrink-0 font-bold text-xs">
              <BookOpen className="w-4 h-4 text-amber-300" />
            </div>
            <div className="truncate">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-200 text-amber-950">
                  রকমারি বুক ভিউ
                </span>
                <span className="text-xs text-stone-500 font-medium hidden sm:inline">
                  {book.publisher}
                </span>
              </div>
              <h2 className="text-sm sm:text-base font-extrabold text-stone-900 truncate">
                {book.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="বন্ধ করুন"
            className="p-1.5 rounded-full text-stone-500 hover:text-stone-900 hover:bg-amber-900/10 transition-colors cursor-pointer shrink-0 ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6"
        >
          {/* Cover & Basic Info Card */}
          <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start bg-amber-50/60 p-4 sm:p-5 rounded-2xl border border-amber-900/10">
            <div className="w-36 h-52 sm:w-40 sm:h-56 shrink-0 rounded-xl overflow-hidden shadow-xl border border-amber-950/20 bg-stone-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 text-center sm:text-left space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-200 text-amber-950">
                {book.category}
              </span>

              <h1 className="text-xl sm:text-2xl font-black text-stone-900 leading-snug">
                {book.title}
              </h1>

              <p className="text-sm font-bold text-amber-950">
                লেখক: {book.author}
              </p>

              <p className="text-xs text-stone-600">
                প্রকাশনা: <span className="font-semibold text-stone-800">{book.publisher}</span>
                {book.pages && ` • পৃষ্ঠা: ${book.pages}`}
                {book.edition && ` • ${book.edition}`}
              </p>

              {book.salePrice ? (
                <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                  <span className="text-2xl font-extrabold text-amber-900">
                    ৳ {book.salePrice}
                  </span>
                  {book.regularPrice && (
                    <span className="text-sm text-stone-400 line-through">
                      ৳ {book.regularPrice}
                    </span>
                  )}
                  {book.regularPrice && book.salePrice && (
                    <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-rose-600 text-white shadow-xs">
                      {Math.round(((book.regularPrice - book.salePrice) / book.regularPrice) * 100)}% ছাড়
                    </span>
                  )}
                  {book.isMeshkOriginal && (
                    <span className="text-[11px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                      মেশক সরাসরি প্রকাশনী মূল্য
                    </span>
                  )}
                </div>
              ) : null}
            </div>
          </div>

          {/* Rokomari Official Look Inside Notice / Link */}
          {rokomariLookInsideUrl && (
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-700 text-white shadow-lg space-y-2">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 font-bold text-sm sm:text-base">
                    <BookOpen className="w-5 h-5 text-amber-200" />
                    <span>রকমারি অফিশিয়াল “একটু পড়ে দেখুন”</span>
                  </div>
                  <p className="text-xs text-rose-100 leading-relaxed">
                    বইটির প্রথম কয়েক পৃষ্ঠা ও সূচিপত্রের স্ক্যান করা আসল পাতা রকমারিতে সরাসরি পড়তে পারবেন।
                  </p>
                </div>

                <a
                  href={rokomariLookInsideUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-red-700 hover:bg-rose-50 font-extrabold text-xs sm:text-sm shadow-md transition-all active:scale-95 shrink-0"
                >
                  <span>রকমারিতে পৃষ্ঠা পড়ুন</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

          {/* Table of Contents (If available) */}
          {book.tableOfContents && book.tableOfContents.length > 0 && (
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-2 border-b border-amber-900/10 pb-2">
                <BookOpen className="w-4 h-4 text-amber-700" />
                <span>বইয়ের সূচিপত্র ও আলোচিত বিষয়সমূহ</span>
              </h3>
              <ul className="divide-y divide-stone-100">
                {book.tableOfContents.map((chapter, idx) => (
                  <li key={idx} className="py-2.5 flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="font-medium pt-0.5 leading-snug">{chapter}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Book Summary / Flap */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-2 border-b border-amber-900/10 pb-2">
              <Bookmark className="w-4 h-4 text-amber-700" />
              <span>বই পরিচিতি ও সারসংক্ষেপ</span>
            </h3>

            {book.synopsis ? (
              <p className="text-sm text-stone-700 leading-relaxed text-justify">
                {book.synopsis}
              </p>
            ) : (
              <p className="text-sm text-stone-600 leading-relaxed text-justify">
                মাওলানা মুহাম্মদ যাইনুল আবিদীন রচিত “{book.title}” বইটি {book.publisher} থেকে প্রকাশিত একটি তথ্যবহুল ও মূল্যবান ইসলামিক ও সাহিত্য গ্রন্থ। বইটি নির্ভরযোগ্য কিতাবঘর, রকমারি ও ওয়াফিলাইফে পাঠকদের জন্য সহজলভ্য রয়েছে।
              </p>
            )}
          </div>

          {/* Official Book Specification Table (Just like Rokomari) */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-2 border-b border-amber-900/10 pb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>বইয়ের স্পেসিফিকেশন ও বিবরণ</span>
            </h3>

            <div className="divide-y divide-stone-100 text-xs sm:text-sm">
              <div className="py-2.5 flex justify-between">
                <span className="text-stone-500 font-medium">বইয়ের নাম:</span>
                <span className="font-bold text-stone-900 text-right">{book.title}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-stone-500 font-medium">লেখক:</span>
                <span className="font-bold text-amber-950 text-right">{book.author}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-stone-500 font-medium">প্রকাশক:</span>
                <span className="font-semibold text-stone-800 text-right">{book.publisher}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-stone-500 font-medium">বিষয় / ক্যাটাগরি:</span>
                <span className="font-medium text-stone-800 text-right">{book.category}</span>
              </div>
              {book.pages && (
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500 font-medium">পৃষ্ঠা সংখ্যা:</span>
                  <span className="font-medium text-stone-800 text-right">{book.pages} পৃষ্ঠা</span>
                </div>
              )}
              {book.edition && (
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500 font-medium">সংস্করণ:</span>
                  <span className="font-medium text-stone-800 text-right">{book.edition}</span>
                </div>
              )}
              <div className="py-2.5 flex justify-between">
                <span className="text-stone-500 font-medium">ভাষা:</span>
                <span className="font-medium text-stone-800 text-right">বাংলা</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-stone-500 font-medium">দেশ:</span>
                <span className="font-medium text-stone-800 text-right">বাংলাদেশ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Bottom Actions */}
        <div className="p-3.5 sm:p-4 border-t border-amber-900/15 bg-[#F6EFE2] flex flex-col sm:flex-row items-center gap-2.5 shrink-0">
          <a
            href={whatsappOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-98"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>হোয়াটসঅ্যাপে সরাসরি অর্ডার করুন</span>
          </a>

          {book.rokomariUrl && (
            <a
              href={book.rokomariUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-stone-100 text-stone-800 font-bold text-xs sm:text-sm border border-stone-300 transition-all active:scale-98"
            >
              <ExternalLink className="w-4 h-4 text-stone-500" />
              <span>রকমারি পেজ</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
