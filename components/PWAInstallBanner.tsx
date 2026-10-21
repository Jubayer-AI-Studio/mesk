"use client";

import React, { useState, useEffect } from "react";
import { Download, X, Share, PlusSquare, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function PWAInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isInAppBrowser, setIsInAppBrowser] = useState(false);
  const [showIOSModal, setShowIOSModal] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // 1. Check if already installed / running in standalone mode
    const standaloneCheck =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true ||
      document.referrer.includes("android-app://");

    setIsStandalone(standaloneCheck);

    // 2. Check if iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIOSDevice);

    // 3. Check if In-App Browser (WhatsApp, Facebook, Messenger, etc.)
    const inApp =
      /fbav|fban|instagram|messenger|whatsapp|wv|line|micromessenger/.test(userAgent);
    setIsInAppBrowser(inApp);

    // 4. Capture native PWA install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // 5. Check if user already installed via appinstalled event
    const handleAppInstalled = () => {
      setIsStandalone(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  // If already installed or dismissed, do not render
  if (isStandalone || isDismissed) return null;

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // Trigger native browser install prompt
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setIsStandalone(true);
      }
      setDeferredPrompt(null);
    } else if (isIOS) {
      // Show iOS step-by-step guidance
      setShowIOSModal(true);
    } else if (isInAppBrowser) {
      // Alert to open in standard Chrome
      alert("ইনস্টল করার জন্য ব্রাউজারের উপরে ৩-ডট মেনুতে ট্যাপ করে 'Open in Chrome' বা 'Open in Browser' বেছে নিন।");
    } else {
      // Generic Android guidance if prompt already fired or dismissed
      alert("আপনার ব্রাউজারের ৩-ডট (মেনু) অপশনে ট্যাপ করে 'Install App' বা 'Add to Home Screen' বেছে নিন।");
    }
  };

  return (
    <>
      {/* Floating or Top Install Pill Banner */}
      <div className="fixed bottom-3 inset-x-3 sm:inset-x-auto sm:right-6 sm:bottom-6 z-40 animate-in slide-in-from-bottom-4 duration-300">
        <div className="bg-stone-900/95 backdrop-blur-md text-white px-4 py-3 rounded-2xl shadow-2xl border border-amber-500/40 flex items-center justify-between gap-3 max-w-md mx-auto">
          {/* App Icon preview */}
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-white shrink-0 border border-amber-300/40 p-0.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/icon-192x192.png"
              alt="মেশক লোগো"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="text-xs sm:text-sm font-bold text-amber-300 truncate">
              মেশক প্রকাশন অ্যাপ
            </h4>
            <p className="text-[11px] text-stone-300 truncate">
              {isInAppBrowser
                ? "ক্রোমে খুলে সরাসরি ফোনে ইনস্টল করুন"
                : isIOS
                ? "হোম স্ক্রিনে সরাসরি অ্যাপ হিসেবে রাখুন"
                : "সহজে পড়তে ১-ক্লিকে ইনস্টল করুন"}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handleInstallClick}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-extrabold text-xs shadow-md transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>ইনস্টল</span>
            </button>

            <button
              onClick={() => setIsDismissed(true)}
              aria-label="বন্ধ করুন"
              className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* iOS Step-by-Step Installation Modal */}
      {showIOSModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm bg-[#FAF8F5] rounded-3xl p-5 shadow-2xl border border-amber-900/20 text-stone-900 space-y-4">
            <div className="flex items-center justify-between border-b border-amber-900/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white border border-amber-400 p-0.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/icon-192x192.png" alt="মেশক" className="w-full h-full object-contain" />
                </div>
                <h3 className="font-extrabold text-sm text-stone-900">
                  আইফোনে অ্যাপ ইনস্টল নির্দেশিকা
                </h3>
              </div>
              <button
                onClick={() => setShowIOSModal(false)}
                className="p-1 rounded-full text-stone-400 hover:text-stone-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs leading-relaxed text-stone-700">
              <p className="font-medium">
                আইফোনে (Safari ব্রাউজারে) নিচের ২টি সহজ ধাপে অ্যাপটি আপনার হোম স্ক্রিনে যুক্ত করুন:
              </p>

              <div className="flex items-start gap-3 p-2.5 rounded-xl bg-amber-50 border border-amber-200">
                <div className="w-6 h-6 rounded-lg bg-amber-800 text-white flex items-center justify-center font-bold text-xs shrink-0">
                  ১
                </div>
                <div>
                  <p className="font-bold text-stone-900 flex items-center gap-1.5">
                    <span>শেয়ার আইকনে ট্যাপ করুন</span>
                    <Share className="w-3.5 h-3.5 text-blue-600" />
                  </p>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    সাফারি ব্রাউজারের নিচের বারে থাকা শেয়ার বাটনটি চাপুন।
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-xl bg-amber-50 border border-amber-200">
                <div className="w-6 h-6 rounded-lg bg-amber-800 text-white flex items-center justify-center font-bold text-xs shrink-0">
                  ২
                </div>
                <div>
                  <p className="font-bold text-stone-900 flex items-center gap-1.5">
                    <span>Add to Home Screen বেছে নিন</span>
                    <PlusSquare className="w-3.5 h-3.5 text-stone-800" />
                  </p>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    একটু নিচে স্ক্রোল করে “Add to Home Screen” এ চাপ দিয়ে &apos;Add&apos; দিন।
                  </p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-[11px]">ব্যস! আপনার ফোনের হোম স্ক্রিনে মেশক অ্যাপ চলে আসবে।</span>
              </div>
            </div>

            <button
              onClick={() => setShowIOSModal(false)}
              className="w-full py-2.5 rounded-xl bg-amber-900 text-white font-bold text-xs shadow-md transition-all active:scale-95"
            >
              বুঝেছি
            </button>
          </div>
        </div>
      )}
    </>
  );
}
