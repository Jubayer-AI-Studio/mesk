"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/siteData";
import { X, GraduationCap, BookOpen, Award, HeartHandshake, Feather } from "lucide-react";

interface AuthorBioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthorBioModal({ isOpen, onClose }: AuthorBioModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-2xl bg-[#FBF8F2] rounded-3xl shadow-2xl border border-amber-900/20 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-amber-900/15 bg-[#F5ECE0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Feather className="w-5 h-5 text-amber-800" />
            <span className="font-bold text-stone-900 text-sm sm:text-base">
              লেখক ও প্রতিষ্ঠাতা পরিচিতি
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-lg border-2 border-amber-800/40 bg-stone-200 shrink-0 relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/author-library.jpg"
                alt={siteConfig.authorName}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                {siteConfig.authorName}
              </h3>
              <p className="text-sm font-semibold text-amber-900 mt-0.5">
                {siteConfig.authorTitle}
              </p>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                {siteConfig.authorDetailedBio}
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-900/10 flex items-start gap-2.5">
              <GraduationCap className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-xs text-stone-900">দেওবন্দী ঐতিহ্য</p>
                <p className="text-[11px] text-stone-600">দাওরায়ে হাদীস ও আরবি সাহিত্যে উচ্চতর ডিগ্রি।</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-900/10 flex items-start gap-2.5">
              <BookOpen className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-xs text-stone-900">শতাধিক গ্রন্থ</p>
                <p className="text-[11px] text-stone-600">১১০টিরও বেশি প্রকাশিত মৌলিক ও অনুবাদ বই।</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-900/10 flex items-start gap-2.5">
              <Award className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-xs text-stone-900">মেশক প্রকাশন</p>
                <p className="text-[11px] text-stone-600">&ldquo;বই আলো • বই সুবাস&rdquo; ধারণার বিকাশ।</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-900/10 flex items-start gap-2.5">
              <Feather className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-xs text-stone-900">সাহিত্য ও মনন</p>
                <p className="text-[11px] text-stone-600">ইসলামিক ও প্রাঞ্জল বাংলা সাহিত্যের সমৃদ্ধ বিকাশ।</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
