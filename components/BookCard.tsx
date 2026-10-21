"use client";

import React, { useState } from "react";
import { BookItem } from "@/lib/types";
import { BookOpen } from "lucide-react";

interface BookCardProps {
  book: BookItem;
  onSelect: (book: BookItem) => void;
}

export default function BookCard({ book, onSelect }: BookCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={() => onSelect(book)}
      className="group relative cursor-pointer flex flex-col items-center shrink-0 w-[115px] min-[380px]:w-[125px] sm:w-[148px] md:w-[162px] select-none"
    >
      {/* 3D Book Container with Guaranteed Fixed Dimensions */}
      <div className="relative w-[115px] h-[172px] min-[380px]:w-[125px] min-[380px]:h-[188px] sm:w-[148px] sm:h-[222px] md:w-[162px] md:h-[243px] rounded-md overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-105 border border-amber-950/20 bg-stone-900">
        {/* Book Left Spine Shadow */}
        <div className="absolute inset-y-0 left-0 w-3 z-10 bg-gradient-to-r from-black/45 via-black/15 to-transparent pointer-events-none" />

        {/* Book Right Edge Highlight */}
        <div className="absolute inset-y-0 right-0 w-1 z-10 bg-white/20 pointer-events-none" />

        {/* Book Cover Image */}
        {book.coverImage && !imgError ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Fallback Cover */
          <div className="w-full h-full bg-gradient-to-br from-amber-900 via-stone-900 to-amber-950 p-3 flex flex-col justify-between text-center border border-amber-700/50">
            <div className="w-7 h-7 mx-auto rounded-full bg-amber-500/20 flex items-center justify-center mt-1">
              <BookOpen className="w-4 h-4 text-amber-300" />
            </div>
            <div className="my-auto">
              <h4 className="text-xs font-bold text-amber-100 leading-tight line-clamp-3">
                {book.title}
              </h4>
              <p className="text-[10px] text-amber-300/80 mt-1 line-clamp-1">
                {book.author}
              </p>
            </div>
            <div className="text-[9px] uppercase tracking-wider text-amber-400 font-medium pb-1 border-t border-amber-800/60 pt-1">
              {book.publisher}
            </div>
          </div>
        )}

        {/* Pocket Edition Badge */}
        {book.isPocketEdition && (
          <div className="absolute top-1.5 left-1.5 z-20 bg-emerald-900/90 text-emerald-200 font-bold text-[9px] px-1.5 py-0.5 rounded shadow-xs border border-emerald-500/40 backdrop-blur-2xs">
            লিটল ম্যাগ
          </div>
        )}

        {/* Discount Badge */}
        {book.regularPrice && book.salePrice && book.regularPrice > book.salePrice && (
          <div className="absolute top-1.5 right-1.5 z-20 bg-rose-600 text-white font-bold text-[10px] px-1.5 py-0.5 rounded shadow-xs">
            {Math.round(((book.regularPrice - book.salePrice) / book.regularPrice) * 100)}% ছাড়
          </div>
        )}

        {/* Hover Overlay Button */}
        <div className="absolute inset-0 z-20 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-2">
          <span className="px-3 py-1 rounded-full bg-amber-400 text-amber-950 font-bold text-xs shadow-md">
            বিস্তারিত দেখুন
          </span>
        </div>
      </div>

      {/* Book Base Shadow (sits on shelf) */}
      <div className="w-4/5 h-2 bg-black/40 blur-xs rounded-full mt-1 group-hover:opacity-60 transition-opacity" />

      {/* Title & Price under book */}
      <div className="mt-1.5 text-center w-full px-1">
        <p className="text-[11px] sm:text-xs font-bold text-stone-900 line-clamp-1 group-hover:text-amber-900 transition-colors">
          {book.title}
        </p>
        {book.salePrice ? (
          <p className="text-[11px] text-amber-900 font-bold">
            ৳ {book.salePrice}
            {book.regularPrice && (
              <span className="text-[10px] text-stone-500 line-through ml-1 font-normal">
                ৳{book.regularPrice}
              </span>
            )}
          </p>
        ) : (
          <p className="text-[10px] text-stone-600 font-medium">রকমারিতে লভ্য</p>
        )}
      </div>
    </div>
  );
}
