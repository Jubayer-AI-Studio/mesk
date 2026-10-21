"use client";

import React from "react";
import { siteConfig } from "@/lib/siteData";
import { MessageCircle, Quote } from "lucide-react";

export default function QuoteCard() {
  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "আসসালামু আলাইকুম, আমি মেশক প্রকাশন ও মাওলানা মুহাম্মদ যাইনুল আবিদীন সাহেবের বই সংক্রান্ত বিষয়ে কথা বলতে চাই।"
  )}`;

  return (
    <section className="max-w-4xl mx-auto px-4 my-6 sm:my-8">
      <div className="rounded-2xl bg-gradient-to-r from-[#0d281c] via-[#091f15] to-[#0d281c] text-white p-5 sm:p-6 shadow-md border border-emerald-800/40 flex flex-col md:flex-row md:items-center justify-between gap-5 relative overflow-hidden">
        {/* Subtle decorative background watermarks */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide">
              জ্ঞানের আলো ও সুবাস · লেখক বার্তা
            </span>
          </div>

          <blockquote className="text-base sm:text-lg font-medium text-stone-100 italic leading-snug mb-2 flex items-start gap-2">
            <Quote className="w-5 h-5 text-emerald-400 shrink-0 rotate-180 opacity-70" />
            <span>&ldquo;{siteConfig.authorQuote}&rdquo;</span>
          </blockquote>

          <p className="text-xs sm:text-sm text-emerald-200/80">
            মেশক প্রকাশনের বই সংগ্রহ বা যেকোনো সহায়তায় সরাসরি লেখকের প্রতিনিধির সাথে কথা বলতে পারেন।
          </p>
        </div>

        {/* Action Button: Direct WhatsApp Chat */}
        <div className="relative z-10 shrink-0">
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-sm shadow-sm transition-all duration-200 active:scale-95 cursor-pointer w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-950/20" />
            <span>হোয়াটসঅ্যাপে চ্যাট করুন</span>
          </a>
        </div>
      </div>
    </section>
  );
}
