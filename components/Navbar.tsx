"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/siteData";
import { MessageCircle, Library, User } from "lucide-react";

interface NavbarProps {
  onOpenAllBooks: () => void;
  onOpenAuthorBio: () => void;
}

export default function Navbar({ onOpenAllBooks, onOpenAuthorBio }: NavbarProps) {
  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "আসসালামু আলাইকুম, আমি মেশক প্রকাশনের বই সম্পর্কে জানতে ও সরাসরি চ্যাট করতে চাই।"
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-[#F8F3EA]/95 via-[#EFE6D6]/95 to-[#F8F3EA]/95 backdrop-blur-md border-b border-amber-900/15 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-white/90 rounded-xl p-1 shadow-xs border border-amber-900/15 transition-transform group-hover:scale-105">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mesk-logo.png"
              alt="মেশক প্রকাশন লোগো"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg sm:text-xl text-stone-900 tracking-tight">
                {siteConfig.brandName}
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-amber-900/80 font-semibold tracking-wide">
              {siteConfig.slogan}
            </p>
          </div>
        </a>

        {/* Desktop Quick Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-stone-700">
          <a
            href="#bookshelf-meshk"
            className="hover:text-amber-900 transition-colors"
          >
            মূল প্রকাশনা
          </a>
          <a
            href="#bookshelf-classics"
            className="hover:text-amber-900 transition-colors"
          >
            মাস্টারপিস বই
          </a>
          <button
            onClick={onOpenAllBooks}
            className="flex items-center gap-1.5 hover:text-amber-900 transition-colors cursor-pointer"
          >
            <Library className="w-4 h-4 text-amber-700" />
            <span>সমগ্র রচনাবলী (১১০+)</span>
          </button>
          <button
            onClick={onOpenAuthorBio}
            className="flex items-center gap-1.5 hover:text-amber-900 transition-colors cursor-pointer"
          >
            <User className="w-4 h-4 text-amber-700" />
            <span>লেখক পরিচিতি</span>
          </button>
        </nav>

        {/* Right CTA Button: Direct WhatsApp Chat & Mobile Quick Actions */}
        <div className="flex items-center gap-2">
          {/* Mobile All Books Search Button */}
          <button
            onClick={onOpenAllBooks}
            aria-label="সকল বই অনুসন্ধান"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 transition-colors shadow-2xs cursor-pointer"
          >
            <Library className="w-4 h-4 text-amber-800" />
          </button>

          {/* Mobile Author Bio Button */}
          <button
            onClick={onOpenAuthorBio}
            aria-label="লেখক পরিচিতি"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300 transition-colors shadow-2xs cursor-pointer"
          >
            <User className="w-4 h-4 text-stone-700" />
          </button>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-white/20" />
            <span className="hidden xs:inline">সরাসরি চ্যাট</span>
            <span className="xs:hidden">চ্যাট</span>
          </a>
        </div>
      </div>
    </header>
  );
}
