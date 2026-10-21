"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BookItem } from "@/lib/types";
import { siteConfig } from "@/lib/siteData";
import { X, ExternalLink, MessageCircle, BookOpen } from "lucide-react";
import RokomariReaderModal from "./RokomariReaderModal";

interface BookModalProps {
  book: BookItem | null;
  onClose: () => void;
}

export default function BookModal({ book, onClose }: BookModalProps) {
  const [imgError, setImgError] = useState(false);
  const [isRokomariReaderOpen, setIsRokomariReaderOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!book) return null;

  const whatsappOrderUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    `আসসালামু আলাইকুম, আমি মেশক প্রকাশনের "${book.title}" বইটি অর্ডার / সংগ্রহ করতে আগ্রহী। অনুগ্রহ করে বিস্তারিত জানাবেন।`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-xl bg-[#FBF8F2] rounded-3xl shadow-2xl border border-amber-900/20 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header with Close Button */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-amber-900/10 bg-[#F5ECE0]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
            <span className="text-xs sm:text-sm font-bold text-amber-950 uppercase tracking-wider">
              {book.isMeshkOriginal ? "মেশক প্রকাশন মূল সংস্করণ" : "মাওলানা যাইনুল আবিদীন গ্রন্থশালা"}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
            {/* Book 3D Cover */}
            <div className="relative w-36 h-[216px] sm:w-44 sm:h-[264px] shrink-0 rounded-lg overflow-hidden shadow-xl border border-amber-900/15 bg-stone-900">
              {book.coverImage && !imgError ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-amber-900 via-stone-900 to-amber-950 p-4 flex flex-col justify-between text-center">
                  <BookOpen className="w-8 h-8 text-amber-300 mx-auto mt-2" />
                  <p className="text-xs font-bold text-amber-100">{book.title}</p>
                  <p className="text-[10px] text-amber-400">{book.publisher}</p>
                </div>
              )}
            </div>

            {/* Book Meta Details */}
            <div className="flex-1 text-center sm:text-left space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-200/90 text-amber-950 border border-amber-400/50">
                {book.category}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                {book.title}
              </h3>

              <p className="text-sm text-stone-600 font-medium">
                লেখক: <span className="text-amber-950 font-bold">{book.author}</span>
              </p>

              <p className="text-xs text-stone-500">
                প্রকাশনা: <span className="font-semibold text-stone-700">{book.publisher}</span>
                {book.pages && <> • পৃষ্ঠা: {book.pages}</>}
                {book.edition && <> • সংস্করণ: {book.edition}</>}
              </p>

              {/* Pricing */}
              {book.salePrice ? (
                <div className="pt-2 flex items-center justify-center sm:justify-start gap-3">
                  <div className="text-2xl font-extrabold text-amber-900">
                    ৳ {book.salePrice}
                  </div>
                  {book.regularPrice && (
                    <div className="text-sm text-stone-400 line-through">
                      ৳ {book.regularPrice}
                    </div>
                  )}
                  {book.regularPrice && book.salePrice && (
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                      {Math.round(((book.regularPrice - book.salePrice) / book.regularPrice) * 100)}% ছাড়
                    </span>
                  )}
                </div>
              ) : (
                <div className="pt-2 text-sm text-stone-600 font-medium">
                  মূল্য ও স্টক জানতে রকমারি দেখুন
                </div>
              )}
            </div>
          </div>

          {/* Synopsis */}
          {book.synopsis && (
            <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-900/10 space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900">
                বই পরিচিতি ও সারসংক্ষেপ
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed">
                {book.synopsis}
              </p>
            </div>
          )}

          {/* Look Inside / Sample Reader Trigger Button */}
          <button
            onClick={() => setIsRokomariReaderOpen(true)}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 hover:from-amber-200 hover:to-amber-300 text-amber-950 font-bold text-xs sm:text-sm border-2 border-amber-400 shadow-xs transition-all active:scale-98 cursor-pointer group"
          >
            <BookOpen className="w-4 h-4 text-amber-800 group-hover:scale-110 transition-transform" />
            <span>একটু পড়ে দেখুন (বই বিবরণ ও রকমারি প্রিভিউ)</span>
          </button>

          {/* Buying Channels */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 text-center sm:text-left">
              কেনার মাধ্যম নির্বাচন করুন:
            </h4>

            {/* Direct WhatsApp Instant Chat / Order */}
            <a
              href={whatsappOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all active:scale-98 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>হোয়াটসঅ্যাপে সরাসরি অর্ডার / চ্যাট করুন</span>
            </a>

            {/* Marketplace Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {book.rokomariUrl && (
                <a
                  href={book.rokomariUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 font-medium text-xs sm:text-sm text-stone-800 transition-colors shadow-2xs group"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span>রকমারিতে কিনুন</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-700" />
                </a>
              )}

              {book.wafilifeUrl && (
                <a
                  href={book.wafilifeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 font-medium text-xs sm:text-sm text-stone-800 transition-colors shadow-2xs group"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span>ওয়াফিলাইফে কিনুন</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-700" />
                </a>
              )}

              {book.kitabghorUrl && (
                <a
                  href={book.kitabghorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 font-medium text-xs sm:text-sm text-stone-800 transition-colors shadow-2xs group col-span-1 sm:col-span-2"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <span>কিতাবঘর থেকে অর্ডার করুন</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-700" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Spacious 5-Page Rokomari-Style Sample Reader Modal */}
      <RokomariReaderModal
        book={book}
        isOpen={isRokomariReaderOpen}
        onClose={() => setIsRokomariReaderOpen(false)}
      />
    </div>
  );
}
