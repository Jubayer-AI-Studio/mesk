"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/siteData";
import { ExternalLink, Share2, Users, CheckCircle2, MessageCircle, Sparkles, Copy, Check } from "lucide-react";

export default function FacebookCard() {
  const [copied, setCopied] = useState(false);

  const websiteUrl = "https://mesk-nine.vercel.app";
  const shareText = "মেশক প্রকাশন ও মাওলানা মুহাম্মদ যাইনুল আবিদীনের অফিশিয়াল গ্রন্থশালা। প্রকাশনীর সকল বইয়ে ৫০% বিশেষ ছাড়! বই পড়ুন ও সরাসরি অর্ডার করুন:";
  
  // Facebook Share URL (Works on both mobile app and web)
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(websiteUrl)}&quote=${encodeURIComponent(shareText)}`;
  
  // WhatsApp Share URL
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText}\n${websiteUrl}`)}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(websiteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "মেশক প্রকাশন — মুহাম্মদ যাইনুল আবিদীন",
          text: shareText,
          url: websiteUrl,
        });
      } catch {
        // User cancelled
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 my-8 sm:my-12">
      <div className="relative rounded-3xl bg-gradient-to-br from-[#1877F2]/10 via-[#FAF6EF] to-[#1877F2]/5 border-2 border-[#1877F2]/25 p-5 sm:p-8 shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:border-[#1877F2]/40">
        {/* Subtle Decorative Facebook Watermark */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#1877F2]/10 rounded-full blur-3xl pointer-events-none" />
        <svg
          className="absolute -bottom-6 -right-6 w-44 h-44 fill-[#1877F2]/5 pointer-events-none transition-transform group-hover:scale-110 duration-500"
          viewBox="0 0 24 24"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>

        <div className="relative z-10 space-y-6">
          {/* Header Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1877F2]/15 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1877F2] animate-pulse" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1877F2]">
                অফিশিয়াল সোশ্যাল ও পাঠক পরিবার
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>ভেরিফাইড কমিউনিটি</span>
              </span>
            </div>
          </div>

          {/* Main Dual Cards Grid: Group & Page */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
            {/* 1. Primary Highlight: 75,000+ Member Facebook Group (7 cols) */}
            <div className="md:col-span-7 bg-white/90 rounded-2xl p-5 sm:p-6 border border-[#1877F2]/20 shadow-sm flex flex-col justify-between relative overflow-hidden group/groupcard hover:border-[#1877F2]/40 transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1877F2]/10 text-[#1877F2] font-black text-xs">
                    <Users className="w-3.5 h-3.5" />
                    <span>৭৫,০০০+ সদস্যের পাবলিক গ্রুপ</span>
                  </span>
                  <span className="text-[11px] font-bold text-amber-800 bg-amber-100/90 px-2 py-0.5 rounded-md border border-amber-300/50">
                    মেশক প্রতিষ্ঠাতা
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-black text-stone-900 leading-tight">
                    মাওলানা মুহাম্মদ যাইনুল আবিদীন ও পাঠক পরিবার
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    মেশক প্রকাশনের প্রতিষ্ঠাতা মাওলানা মুহাম্মদ যাইনুল আবিদীনের সরাসরি তত্ত্বাবধানে পরিচালিত ৭৫ হাজারেরও অধিক সদস্যের উন্মুক্ত সাহিত্য ও জ্ঞানচর্চা পরিবার।
                  </p>
                </div>
              </div>

              {/* Group Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-2.5">
                <a
                  href={siteConfig.facebookGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <Users className="w-4 h-4" />
                  <span>গ্রুপে যুক্ত হোন</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <a
                  href={facebookShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2]/15 text-[#1877F2] font-bold text-xs sm:text-sm border border-[#1877F2]/30 transition-all active:scale-95 cursor-pointer"
                  title="এই ওয়েবসাইটটি ফেসবুকে বা আপনার গ্রুপে পোস্ট করুন"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>গ্রুপে শেয়ার করুন</span>
                </a>
              </div>
            </div>

            {/* 2. Official Facebook Page: Tima Mesk (5 cols) */}
            <div className="md:col-span-5 bg-white/70 rounded-2xl p-5 sm:p-6 border border-amber-900/10 shadow-sm flex flex-col justify-between hover:bg-white/90 transition-all">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-xl bg-white p-1 shadow-xs border border-amber-900/15 shrink-0 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/icons/icon-192x192.png"
                      alt="মেশক লোগো"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-stone-900 leading-tight">
                      টিমা মেশক (মেশক প্রকাশন)
                    </h4>
                    <p className="text-[11px] font-mono text-stone-500">
                      facebook.com/tima.mesaka
                    </p>
                  </div>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  নতুন বইয়ের প্রকাশনা সংবাদ, লেখকের আলোচনা ও অফিসিয়াল বিজ্ঞপ্তির জন্য মূল ফেসবুক পেজটি ফলো করুন।
                </p>
              </div>

              <div className="pt-4">
                <a
                  href={siteConfig.facebookPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-all active:scale-95 cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>অফিশিয়াল পেজ ফলো করুন</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Sharing Strip: WhatsApp, Copy Link & Mobile Native Share */}
          <div className="pt-2 border-t border-[#1877F2]/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="font-semibold text-stone-700 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>সহজেই বন্ধুদের সাথে এই ওয়েবসাইট শেয়ার করুন:</span>
            </span>

            <div className="flex flex-wrap items-center gap-2">
              {/* WhatsApp 1-tap share */}
              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-2xs active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              {/* Facebook Direct Share */}
              <a
                href={facebookShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold transition-all shadow-2xs active:scale-95"
              >
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </a>

              {/* Copy Link Button */}
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white hover:bg-stone-100 text-stone-800 font-bold border border-stone-300 transition-all shadow-2xs active:scale-95 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">কপি হয়েছে!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-stone-500" />
                    <span>লিংক কপি</span>
                  </>
                )}
              </button>

              {/* Native Mobile Share Button */}
              <button
                onClick={handleNativeShare}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold transition-all shadow-2xs active:scale-95 cursor-pointer"
                title="আরও শেয়ার অপশন"
              >
                <Share2 className="w-3.5 h-3.5 text-stone-600" />
                <span>অন্যান্য</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
