"use client";

import React from "react";
import { siteConfig } from "@/lib/siteData";
import { ExternalLink, Sparkles, BookCheck } from "lucide-react";

interface HeroProps {
  onOpenAuthorBio?: () => void;
}

export default function Hero({ onOpenAuthorBio }: HeroProps) {
  return (
    <section className="pt-8 sm:pt-12 pb-6 px-4 text-center relative overflow-hidden">
      {/* Subtle Ambient Background Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Author Profile Picture (Full Dignified HD Portrait Showcase) */}
      <div className="relative inline-block mb-4">
        <div
          onClick={onOpenAuthorBio}
          className="w-44 sm:w-52 md:w-56 aspect-[1024/960] p-1.5 bg-gradient-to-b from-amber-600/50 via-amber-800/70 to-amber-950/90 rounded-2xl sm:rounded-3xl shadow-xl ring-4 ring-amber-500/20 mx-auto relative transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-pointer group"
          title="মাওলানা মুহাম্মদ যাইনুল আবিদীনের (জাইনুল আবেদীন) সংক্ষিপ্ত জীবনী দেখুন"
        >
          <div className="w-full h-full rounded-[14px] sm:rounded-[20px] overflow-hidden bg-stone-900 relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/author-portrait-hd.jpg"
              alt="মাওলানা মুহাম্মদ যাইনুল আবিদীন (জাইনুল আবেদীন) - মেশক প্রকাশনের প্রতিষ্ঠাতা ও লেখক"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Verification Emblem Badge */}
        <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-700 via-amber-800 to-amber-950 text-white px-2.5 py-1 rounded-full shadow-lg border-2 border-[#F6F1E7] flex items-center gap-1.5 text-[11px] font-bold">
          <BookCheck className="w-3.5 h-3.5 text-amber-300" />
          <span>লেখক ও প্রতিষ্ঠাতা</span>
        </div>
      </div>

      {/* Author Name & Badges */}
      <div className="flex flex-col items-center justify-center gap-1 mb-2">
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            {siteConfig.authorName}
          </h1>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-amber-200/90 text-amber-950 border border-amber-400/60 shadow-2xs">
            লেখক ও প্রতিষ্ঠাতা
          </span>
        </div>
        <p className="text-xs sm:text-sm font-semibold text-amber-950/80">
          মাওলানা মুহাম্মদ যাইনুল আবিদীন (জাইনুল আবেদীন) • মেশক প্রকাশন (মেসক)
        </p>
      </div>

      {/* Subtitle / Bio summary */}
      <p className="max-w-xl mx-auto text-stone-700 text-sm sm:text-base leading-relaxed mb-5">
        {siteConfig.brandName}-এর অফিশিয়াল গ্রন্থশালা ও প্রকাশনা সম্ভার। ভাষা, সাহিত্য,
        সীরাত, ফিকহ ও সমাজচিন্তার এক আলোকিত সম্মিলন।
      </p>

      {/* Total Views & Availability Pill Badges */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100/90 border border-stone-300/80 text-stone-800 font-semibold shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>প্রকাশিত বই: ১১০+ টি</span>
        </div>

        <span className="text-stone-500 text-xs font-semibold uppercase tracking-wider hidden sm:inline">
          অনলাইন বুকস্টোর:
        </span>

        {/* Rokomari Link */}
        <a
          href={siteConfig.rokomariPublisherUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-stone-800 border border-stone-300/90 font-medium transition-all hover:scale-105 active:scale-95 shadow-2xs"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span>রকমারি</span>
          <ExternalLink className="w-3 h-3 text-stone-400" />
        </a>

        {/* Wafilife Link */}
        <a
          href={siteConfig.wafilifePublisherUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-stone-800 border border-stone-300/90 font-medium transition-all hover:scale-105 active:scale-95 shadow-2xs"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-600" />
          <span>ওয়াফিলাইফ</span>
          <ExternalLink className="w-3 h-3 text-stone-400" />
        </a>

        {/* Kitabghor Link */}
        <a
          href={siteConfig.kitabghorPublisherUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-stone-800 border border-stone-300/90 font-medium transition-all hover:scale-105 active:scale-95 shadow-2xs"
        >
          <span className="w-2 h-2 rounded-full bg-blue-600" />
          <span>কিতাবঘর</span>
          <ExternalLink className="w-3 h-3 text-stone-400" />
        </a>
      </div>
    </section>
  );
}
