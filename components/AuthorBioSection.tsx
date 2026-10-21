"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/siteData";
import { Award, BookOpen, GraduationCap, Feather, HeartHandshake } from "lucide-react";

export default function AuthorBioSection() {
  return (
    <section id="author-bio" className="max-w-5xl mx-auto px-4 my-12 sm:my-16">
      <div className="bg-[#FAF5EC] rounded-3xl p-6 sm:p-10 border border-amber-900/15 shadow-md">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
          {/* Author Library Image Showcase */}
          <div className="w-full sm:w-80 shrink-0 space-y-4">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-4 border-[#EAE0D0] ring-1 ring-amber-900/10 bg-stone-200">
              <Image
                src="/images/author-library.jpg"
                alt="মাওলানা মুহাম্মদ যাইনুল আবিদীন লাইব্রেরিতে"
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-cover object-top"
              />
            </div>
            {/* Caption */}
            <p className="text-center text-xs text-stone-500 italic">
              মাওলানা মুহাম্মদ যাইনুল আবিদীন — অধ্যয়ন ও সাহিত্যকর্মে মগ্ন
            </p>
          </div>

          {/* Author Biography Details */}
          <div className="flex-1 space-y-5 text-center lg:text-left">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 font-bold text-xs uppercase tracking-wider mb-2">
                <Feather className="w-3.5 h-3.5 text-amber-700" />
                <span>লেখক ও চিন্তাবিদ পরিচিতি</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                {siteConfig.authorName}
              </h3>
              <p className="text-amber-900 font-semibold text-sm sm:text-base mt-1">
                {siteConfig.authorTitle}
              </p>
            </div>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              {siteConfig.authorDetailedBio}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
              <div className="p-3.5 rounded-xl bg-white border border-amber-900/10 flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-stone-900">
                    দেওবন্দী ঐতিহ্য
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    দারুল উলুম দেওবন্দ থেকে দাওরায়ে হাদীস ও আরবি সাহিত্যে পাঠ সমাপন।
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-amber-900/10 flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-stone-900">
                    শতাধিক গ্রন্থ রচনা
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    ইতিহাস, সীরাত, ফিকহ, ভাষা ও অনুবাদ মিলিয়ে ১১০টির বেশি কালজয়ী বই।
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-amber-900/10 flex items-start gap-3">
                <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-stone-900">
                    মেশক প্রকাশন
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    &ldquo;বই আলো • বই সুবাস&rdquo; ধারণায় প্রতিষ্ঠিত নিজস্ব প্রকাশনা প্রতিষ্ঠান।
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-amber-900/10 flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-stone-900">
                    সাহিত্য ও মনন
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    বিশুদ্ধ ভাষা ও আদর্শিক চিন্তার একনিষ্ঠ সাধক।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
