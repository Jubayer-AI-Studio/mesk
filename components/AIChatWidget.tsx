"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ShoppingBag,
  ExternalLink,
  MessageCircle,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { BookItem } from "@/lib/types";
import { siteConfig } from "@/lib/siteData";

interface ChatEntry {
  id: string;
  sender: "user" | "bot";
  text: string;
  suggestedBooks?: BookItem[];
  timestamp: string;
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatEntry[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "আসসালামু আলাইকুম! 🌿 মেশক প্রকাশনের অফিশিয়াল এআই বুক গাইডে আপনাকে স্বাগতম।\n\nআমি মাওলানা মুহাম্মদ যাইনুল আবিদীনের সকল গ্রন্থ, বইয়ের মূল্য, পৃষ্ঠা সংখ্যা, বিষয়বস্তু এবং সরাসরি অর্ডার প্রক্রিয়ায় আপনাকে সাহায্য করতে পারি।",
      timestamp: "এখন",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen, messages]);

  const handleSendMessage = async (msgToSend?: string) => {
    const text = (msgToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const userEntry: ChatEntry = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString("bn-BD", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userEntry]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();

      if (data.success && data.reply) {
        const botEntry: ChatEntry = {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: data.reply,
          suggestedBooks: data.suggestedBooks || [],
          timestamp: new Date().toLocaleTimeString("bn-BD", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, botEntry]);
      } else {
        throw new Error(data.error || "Failed");
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          sender: "bot",
          text: "দুঃখিত, সংযোগে সাময়িক সমস্যা হয়েছে। আপনি সরাসরি আমাদের হোয়াটসঅ্যাপে চ্যাট করতে পারেন।",
          timestamp: "ত্রুটি",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickPrompts = [
    "লেখালেখির শিকড় শিখর বইটির দাম কত?",
    "সীরাত বিষয়ক বই কোনগুলো?",
    "সাহিত্য চর্চার বই দেখান",
    "বই অর্ডার করব কীভাবে?",
  ];

  return (
    <>
      {/* Floating Action Button (Bottom Left, distinct from WhatsApp on right) */}
      <div className="fixed bottom-5 left-4 sm:left-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="এআই অ্যাসিস্ট্যান্ট ওপেন করুন"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-amber-700 via-amber-800 to-stone-900 text-white font-bold text-xs sm:text-sm shadow-2xl border-2 border-amber-400/60 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>
          <span className="tracking-tight">এআই বুক গাইড</span>
        </button>
      </div>

      {/* Chat Window Modal / Sheet */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-20 sm:left-6 z-50 flex flex-col w-full sm:w-[420px] h-full sm:h-[560px] bg-[#FAF7F2] sm:rounded-3xl shadow-2xl border border-amber-900/20 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 text-white flex items-center justify-between shrink-0 shadow-sm border-b border-amber-800/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
                <Bot className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm text-stone-100">মেশক এআই অ্যাসিস্ট্যান্ট</h3>
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    লাইভ
                  </span>
                </div>
                <p className="text-[11px] text-amber-200/80">বই, মূল্য ও তথ্য সহায়িকা</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick chips (at top of conversation) */}
          <div className="px-4 py-2 bg-amber-100/70 border-b border-amber-900/10 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 text-xs">
            <span className="text-[11px] font-bold text-amber-950 shrink-0">দ্রুত প্রশ্ন:</span>
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                disabled={isLoading}
                className="shrink-0 px-2.5 py-1 rounded-full bg-white hover:bg-amber-50 text-stone-700 hover:text-stone-900 border border-amber-300/80 font-medium text-[11px] transition-colors shadow-2xs active:scale-95 cursor-pointer disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Messages Flow Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.sender === "bot" && (
                  <div className="w-7 h-7 rounded-xl bg-amber-900 text-amber-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                    m.sender === "user"
                      ? "bg-amber-900 text-amber-50 rounded-tr-xs shadow-xs"
                      : "bg-white text-stone-800 rounded-tl-xs border border-amber-900/10 shadow-xs"
                  }`}
                >
                  <div className="whitespace-pre-line">{m.text}</div>

                  {/* Suggested Books Render */}
                  {m.suggestedBooks && m.suggestedBooks.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-stone-100 space-y-2">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-amber-950">
                        সম্পর্কিত বইসমূহ:
                      </p>
                      <div className="grid grid-cols-1 gap-2">
                        {m.suggestedBooks.map((b) => (
                          <div
                            key={b.id}
                            className="flex items-center gap-2.5 p-2 rounded-xl bg-amber-50/60 border border-amber-200/60"
                          >
                            <div className="w-10 h-14 rounded-md overflow-hidden bg-stone-800 shrink-0">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={b.coverImage}
                                alt={b.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-bold text-xs text-stone-900 truncate">
                                {b.title}
                              </p>
                              <p className="text-[11px] text-amber-950 font-semibold">
                                ৳ {b.salePrice || b.regularPrice}
                                {b.regularPrice && b.salePrice && (
                                  <span className="text-[10px] text-stone-400 line-through ml-1.5">
                                    ৳ {b.regularPrice}
                                  </span>
                                )}
                              </p>
                            </div>
                            <a
                              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                                `আসসালামু আলাইকুম, আমি মেশক এআই চ্যাট থেকে "${b.title}" বইটি অর্ডার করতে চাই।`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] shrink-0 flex items-center gap-1 shadow-2xs"
                            >
                              <MessageCircle className="w-3 h-3 fill-white/20" />
                              <span>অর্ডার</span>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div
                    className={`mt-1.5 text-[9px] text-right ${
                      m.sender === "user" ? "text-amber-200/70" : "text-stone-400"
                    }`}
                  >
                    {m.timestamp}
                  </div>
                </div>

                {m.sender === "user" && (
                  <div className="w-7 h-7 rounded-xl bg-amber-200 text-amber-950 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 items-center text-xs text-stone-500">
                <div className="w-7 h-7 rounded-xl bg-amber-900 text-amber-200 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-white px-4 py-2.5 rounded-2xl border border-amber-900/10 shadow-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-700 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-amber-700 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-amber-700 animate-bounce [animation-delay:0.4s]" />
                  <span className="text-stone-500 text-xs ml-1 font-medium">তথ্য অনুসন্ধান হচ্ছে...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box Area */}
          <div className="p-3 bg-white border-t border-amber-900/10 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="বইয়ের নাম, মূল্য বা যেকোনো প্রশ্ন লিখুন..."
                disabled={isLoading}
                className="flex-1 px-4 py-2.5 rounded-2xl bg-stone-100/80 border border-stone-200 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 focus:bg-white transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                aria-label="বার্তা পাঠান"
                className="w-10 h-10 rounded-2xl bg-amber-900 hover:bg-amber-800 text-white flex items-center justify-center transition-all disabled:opacity-40 disabled:hover:bg-amber-900 shadow-md active:scale-95 cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
