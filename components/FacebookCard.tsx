"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/siteData";
import { ExternalLink, Share2, Users, CheckCircle2, Bookmark, Sparkles } from "lucide-react";

export default function FacebookCard() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "মেশক প্রকাশন (টিমা মেশক) — অফিশিয়াল ফেসবুক পেজ",
      text: "মেশক প্রকাশন ও মাওলানা মুহাম্মদ যাইনুল আবিদীনের অফিশিয়াল ফেসবুক পেজে যুক্ত হোন। বই আলো • বই সুবাস।",
      url: siteConfig.facebookPage,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or share failed
      }
    } else {
      // Fallback copy to clipboard
      await navigator.clipboard.writeText(siteConfig.facebookPage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-4 my-8 sm:my-12">
      {/* Premium Facebook Graphic Card */}
      <div className="relative rounded-3xl bg-gradient-to-br from-[#1877F2]/10 via-[#FAF6EF] to-[#1877F2]/5 border-2 border-[#1877F2]/25 p-5 sm:p-7 shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:border-[#1877F2]/40">
        {/* Subtle Decorative Facebook Watermark */}
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#1877F2]/10 rounded-full blur-2xl pointer-events-none" />
        <svg
          className="absolute -bottom-4 -right-4 w-32 h-32 fill-[#1877F2]/5 pointer-events-none transition-transform group-hover:scale-110 duration-500"
          viewBox="0 0 24 24"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>

        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
          {/* Logo / Avatar with Verified Blue Badge */}
          <div className="relative shrink-0">
            <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-white p-1.5 shadow-md border-2 border-amber-900/15 overflow-hidden transition-transform group-hover:scale-105 duration-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/icon-192x192.png"
                alt="মেশক লোগো"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Facebook Badge */}
            <div
              className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-md border-2 border-white"
              title="অফিশিয়াল পেজ"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#1877F2]/10 text-[#1877F2] font-bold text-[11px] tracking-wide border border-[#1877F2]/20">
                <Users className="w-3 h-3" />
                <span>৫,০০০+ পাঠক ও শুভানুধ্যায়ী</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-bold text-[11px] border border-emerald-300">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>অফিশিয়াল কমিউনিটি</span>
              </span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-black text-stone-900 leading-tight flex items-center justify-center sm:justify-start gap-1.5">
                <span>টিমা মেশক (মেশক প্রকাশন)</span>
              </h3>
              <p className="text-xs font-mono text-stone-500 mt-0.5">
                facebook.com/tima.mesaka
              </p>
            </div>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-lg">
              নতুন বইয়ের প্রকাশনা সংবাদ, লেখকের তাজা কথকতা ও নিয়মিত সাহিত্য আড্ডার সাথে যুক্ত থাকতে আমাদের মূল ফেসবুক পেজটি ফলো করুন।
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
              {/* Direct Open Page */}
              <a
                href={siteConfig.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>পেজে যুক্ত হোন</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              {/* Share Card Link Button */}
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-stone-100 text-stone-800 font-bold text-xs sm:text-sm border border-stone-300 shadow-2xs transition-all active:scale-95 cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-stone-600" />
                <span>{copied ? "লিংক কপি হয়েছে!" : "কার্ড শেয়ার করুন"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
