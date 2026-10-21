"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/siteData";
import { MessageCircle, ExternalLink, Heart, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-amber-900/15 bg-gradient-to-b from-[#F2E8D8]/60 to-[#EAE0CE] pt-10 pb-8 px-4 text-center text-xs text-stone-600">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Brand Monogram & Slogan */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-white/80 rounded-2xl p-1.5 shadow-xs border border-amber-900/10">
            <Image
              src="/images/mesk-logo.png"
              alt="মেশক প্রকাশন"
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
          <h4 className="font-bold text-base text-stone-900">
            {siteConfig.brandName}
          </h4>
          <p className="text-amber-900 font-semibold text-xs tracking-wide">
            {siteConfig.slogan}
          </p>
        </div>

        {/* Quick Social & Marketplace Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-medium text-stone-700">
          <a
            href={siteConfig.facebookPage}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-blue-700 transition-colors"
          >
            <svg className="w-3.5 h-3.5 fill-blue-600" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>ফেসবুক পেজ</span>
          </a>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-emerald-700 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp: {siteConfig.whatsappDisplay}</span>
          </a>

          <a
            href={siteConfig.rokomariPublisherUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-900 transition-colors"
          >
            রকমারি স্টোর ↗
          </a>

          <a
            href={siteConfig.wafilifePublisherUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-900 transition-colors"
          >
            ওয়াফিলাইফ স্টোর ↗
          </a>

          <a
            href={siteConfig.kitabghorPublisherUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-900 transition-colors"
          >
            কিতাবঘর স্টোর ↗
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-amber-900/10 space-y-2">
          <p className="text-stone-500">
            © 2026 <span className="font-semibold text-stone-800">{siteConfig.brandName}</span> ({siteConfig.englishBrandName}). সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex items-center justify-center gap-3 text-[11px] text-stone-400">
            <a href="/llms.txt" className="hover:text-stone-600 underline">
              llms.txt (AI Knowledge Base)
            </a>
            <span>•</span>
            <a href="/llms-full.txt" className="hover:text-stone-600 underline">
              llms-full.txt
            </a>
            <span>•</span>
            <a href="/sitemap.xml" className="hover:text-stone-600 underline">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
