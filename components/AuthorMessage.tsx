"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/siteData";
import { Send, MessageCircle } from "lucide-react";

export default function AuthorMessage() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const textToSend = message.trim()
      ? message.trim()
      : "আসসালামু আলাইকুম, আমি মেশক প্রকাশনের বই সম্পর্কে জানতে ও সরাসরি কথা বলতে চাই।";
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="max-w-3xl mx-auto px-4 my-10 sm:my-14 text-center">
      <div className="space-y-4">
        <div>
          <h3 className="text-xs sm:text-sm font-bold tracking-widest text-stone-500 uppercase">
            SEND A MESSAGE TO THE AUTHOR & PUBLISHER
          </h3>
          <p className="text-base sm:text-lg font-bold text-stone-800 mt-1">
            লেখক ও প্রকাশনীকে সরাসরি বার্তা পাঠান
          </p>
        </div>

        {/* Message Input Box */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#F2E8D8]/80 to-[#EAE0CE]/90 p-1 border border-amber-900/15 shadow-inner">
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="আপনার ভাবনা, জিজ্ঞাসা বা বই সংক্রান্ত মন্তব্য এখানে লিখুন..."
            className="w-full bg-transparent p-4 text-stone-900 text-sm sm:text-base placeholder-stone-400 focus:outline-hidden resize-none rounded-xl"
          />
        </div>

        {/* Send via WhatsApp Button */}
        <div>
          <button
            onClick={handleSend}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span>Send via WhatsApp</span>
            <Send className="w-4 h-4 fill-white/20" />
          </button>
        </div>

        {/* Helper Note */}
        <p className="text-xs text-stone-500">
          WhatsApp Support:{" "}
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-800 hover:underline"
          >
            {siteConfig.whatsappDisplay}
          </a>
        </p>
      </div>
    </section>
  );
}
