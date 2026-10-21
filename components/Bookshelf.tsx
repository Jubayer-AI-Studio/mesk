"use client";

import React, { useState } from "react";
import { BookItem } from "@/lib/types";
import { siteConfig } from "@/lib/siteData";
import BookCard from "./BookCard";
import { ExternalLink, ArrowRight, Library, ChevronDown, ChevronUp, Sparkles } from "lucide-react";

interface BookshelfProps {
  meshkBooks: BookItem[];
  classicBooks: BookItem[];
  onSelectBook: (book: BookItem) => void;
  onOpenAllBooks: () => void;
}

export default function Bookshelf({
  meshkBooks,
  classicBooks,
  onSelectBook,
  onOpenAllBooks,
}: BookshelfProps) {
  const [showAllClassics, setShowAllClassics] = useState(false);

  // Helper to chunk books into rows of 4 for desktop bookcase shelves
  const chunkArray = (arr: BookItem[], size: number) => {
    const chunks: BookItem[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const meshkRows = chunkArray(meshkBooks, 4);

  // By default, display 16 books (4 rows), or all if toggled
  const displayedClassics = showAllClassics ? classicBooks : classicBooks.slice(0, 16);
  const classicRows = chunkArray(displayedClassics, 4);

  return (
    <div className="max-w-5xl mx-auto px-4 space-y-12 sm:space-y-16 my-8">
      {/* =========================================
          SHELF 1: MESHK PROKASHON HARD COPY BOOKS
          ========================================= */}
      <section id="bookshelf-meshk" className="space-y-4">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-amber-900/15 pb-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <span>Hard Copy (মুদ্রিত গ্রন্থমালা)</span>
              <span className="text-xs font-semibold text-amber-950 bg-amber-200/90 px-2.5 py-0.5 rounded-full border border-amber-300">
                মেশক প্রকাশন ({meshkBooks.length} টি)
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
              মেশক প্রকাশন থেকে প্রকাশিত প্রামাণ্য মৌলিক ও গবেষণাধর্মী গ্রন্থমালা
            </p>
          </div>
        </div>

        {/* Quick Marketplace Store Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto sm:mx-0">
          <a
            href={siteConfig.rokomariPublisherUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-white/90 hover:bg-white border border-amber-900/15 shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center font-bold text-red-600 text-sm border border-red-200 shrink-0">
                র
              </div>
              <div>
                <p className="font-bold text-sm text-stone-900 group-hover:text-red-700">
                  Rokomari (রকমারি)
                </p>
                <p className="text-xs text-stone-500">rokomari.com</p>
              </div>
            </div>
            <div className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-red-50 transition-colors">
              <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-red-600" />
            </div>
          </a>

          <a
            href={siteConfig.wafilifePublisherUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-white/90 hover:bg-white border border-amber-900/15 shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center font-bold text-emerald-600 text-sm border border-emerald-200 shrink-0">
                ওয়া
              </div>
              <div>
                <p className="font-bold text-sm text-stone-900 group-hover:text-emerald-700">
                  Wafilife (ওয়াফিলাইফ)
                </p>
                <p className="text-xs text-stone-500">wafilife.com</p>
              </div>
            </div>
            <div className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
              <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-emerald-600" />
            </div>
          </a>
        </div>

        {/* Realistic Wooden Multi-Tier Bookcase */}
        <div className="wooden-shelf-frame rounded-3xl p-4 sm:p-7 shadow-2xl relative overflow-hidden space-y-8">
          {/* Top Instruction Banner */}
          <div className="text-center">
            <span className="inline-block px-5 py-1.5 rounded-full bg-[#3d200f] text-amber-300 font-bold text-xs sm:text-sm border border-amber-600/50 shadow-inner">
              বিস্তারিত জানতে ও সরাসরি অর্ডারের জন্য বইয়ের কভারে ক্লিক করুন
            </span>
          </div>

          {/* Render Each Shelf Row with its own Wooden Plank */}
          {meshkRows.map((row, rowIdx) => (
            <div key={`meshk-row-${rowIdx}`} className="relative pt-2">
              {/* Row of Books standing upright */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 justify-items-center items-end pb-1">
                {row.map((book) => (
                  <BookCard key={book.id} book={book} onSelect={onSelectBook} />
                ))}
              </div>
              {/* Wooden Shelf Plank under this row */}
              <div className="wooden-plank h-5 rounded-sm w-full mt-2" />
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          SHELF 2: AUTHOR MASTERPIECES (EMERALD)
          ========================================= */}
      <section id="bookshelf-classics" className="space-y-4">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-amber-900/15 pb-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <span>মাওলানা যাইনুল আবিদীনের মৌলিক গ্রন্থসম্ভার</span>
              <span className="text-xs font-semibold text-emerald-950 bg-emerald-200/90 px-2.5 py-0.5 rounded-full border border-emerald-300">
                নির্বাচিত {classicBooks.length}টি বই
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
              ইতিহাস, সীরাত, সাহিত্য, আত্মউন্নয়ন ও ফিকহের প্রামাণ্য রচনাবলী
            </p>
          </div>

          <button
            onClick={onOpenAllBooks}
            className="text-xs font-bold text-emerald-900 hover:text-emerald-700 inline-flex items-center gap-1 cursor-pointer"
          >
            <span>সার্চ ও ক্যাটাগরি ফিল্টার</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Realistic Emerald Green Multi-Tier Bookcase */}
        <div className="emerald-shelf-frame rounded-3xl p-4 sm:p-7 shadow-2xl relative overflow-hidden space-y-8">
          {/* Top Instruction Banner */}
          <div className="text-center">
            <span className="inline-block px-5 py-1.5 rounded-full bg-[#113123] text-emerald-300 font-bold text-xs sm:text-sm border border-emerald-600/50 shadow-inner">
              রকমারি লিঙ্ক ও বিস্তারিত দেখতে বইয়ের কভারে ক্লিক করুন
            </span>
          </div>

          {/* Render Each Shelf Row with its own Emerald Plank */}
          {classicRows.map((row, rowIdx) => (
            <div key={`classic-row-${rowIdx}`} className="relative pt-2">
              {/* Row of Books standing upright */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 justify-items-center items-end pb-1">
                {row.map((book) => (
                  <BookCard key={book.id} book={book} onSelect={onSelectBook} />
                ))}
              </div>
              {/* Emerald Shelf Plank under this row */}
              <div className="emerald-plank h-5 rounded-sm w-full mt-2" />
            </div>
          ))}

          {/* Expand / Collapse All Books Toggle */}
          {classicBooks.length > 16 && (
            <div className="text-center pt-4">
              <button
                onClick={() => setShowAllClassics(!showAllClassics)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-950/80 hover:bg-emerald-950 text-emerald-200 border border-emerald-500/50 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer"
              >
                {showAllClassics ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    <span>সংকোচন করুন (শীর্ষ ১৬টি বই)</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    <span>
                      বাকি সব বই বুকশেলফে দেখুন (আরও {classicBooks.length - 16}টি বই লোড করুন)
                    </span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================
          BIG SEARCH & VIEW ALL BOOKS TRIGGER BUTTON
          ========================================= */}
      <div className="text-center pt-2">
        <button
          onClick={onOpenAllBooks}
          className="inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 text-amber-950 border-2 border-amber-400 hover:from-amber-200 hover:to-amber-300 font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
        >
          <Library className="w-5 h-5 text-amber-800" />
          <span>সকল ১১০+ বইয়ের মূল প্রচ্ছদ ক্যাটালগ ও লাইভ সার্চ</span>
          <ArrowRight className="w-4 h-4 text-amber-800" />
        </button>
      </div>
    </div>
  );
}
