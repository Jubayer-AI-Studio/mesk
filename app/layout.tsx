import type { Metadata, Viewport } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#3d200f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mesk-nine.vercel.app"),
  title: {
    default: "মেশক প্রকাশন | মুহাম্মদ যাইনুল আবিদীন (জাইনুল আবেদীন) — অফিশিয়াল গ্রন্থশালা",
    template: "%s | মেশক প্রকাশন (Meshk Prokashon)",
  },
  description:
    "মেশক প্রকাশন (মেসক প্রকাশন / Meshk Prokashon)-এর অফিশিয়াল ডিজিটাল প্ল্যাটফর্ম ও গ্রন্থশালা। বিশিষ্ট লেখক ও চিন্তাবিদ মাওলানা মুহাম্মদ যাইনুল আবিদীন (জাইনুল আবেদীন)-এর সাহিত্য, সীরাত, ইতিহাস ও ফিকহ গ্রন্থাবলি এবং রকমারি, ওয়াফিলাইফ ও সরাসরি ৫০% ছাড়ে হোয়াটসঅ্যাপে অর্ডারের কেন্দ্রীয় পোর্টাল।",
  keywords: [
    // Brand Variations (Bengali & English)
    "মেসক",
    "মেশক",
    "মেশক প্রকাশন",
    "মেসক প্রকাশন",
    "মেশক প্রকাশনী",
    "মেসক প্রকাশনী",
    "মেশক পাবলিকেশন",
    "মেসক পাবলিকেশন",
    "Meshk Prokashon",
    "Mesk Prokashan",
    "Meshk Publication",
    "Mesk Publication",
    "Meshk",
    "Mesk",
    // Author Variations (Bengali & English)
    "জাইনুল আবেদীন",
    "যাইনুল আবিদীন",
    "মুহাম্মদ যাইনুল আবিদীন",
    "মাওলানা মুহাম্মদ যাইনুল আবিদীন",
    "মাওলানা যাইনুল আবিদীন",
    "মুহম্মদ যাইনুল আবিদীন",
    "মাওলানা জাইনুল আবেদীন",
    "জয়নুল আবেদীন",
    "Muhammad Jainul Abidin",
    "Muhammod Jainul Abidin",
    "Maulana Muhammod Jainul Abidin",
    "Zainul Abedin",
    "Jainul Abedin",
    "Maulana Zainul Abedin",
    // Core Books
    "লেখালেখির শিকড় শিখর",
    "সাহিত্যের ক্লাস",
    "শব্দের সৌরভ শব্দের সানাই",
    "বক্তৃতার ক্লাস",
    "আমাদের নবীজি",
    "তাতারীদের ইতিহাস",
    "বড় যদি হতে চাও",
    "শহীদানের গল্প শোন সমগ্র",
    "আমাদের নবীজি সা.",
    "নবীজির উপহার",
    "নবীজির শাফায়াত",
    "নারীর শত্রু-মিত্র",
    "যাকাত কল্যাণ রাষ্ট্রের বুনিয়াদ",
    "আল্লাহ যাদেরকে ভালোবাসেন",
    // Marketplaces & Intent
    "মেশক প্রকাশন রকমারি",
    "মেশক প্রকাশন ওয়াফিলাইফ",
    "Rokomari Meshk Prokashon",
    "Wafilife Meshk Prokashon",
    "জাইনুল আবেদীনের বই",
    "মুহাম্মদ যাইনুল আবিদীনের বই",
    "মেশক প্রকাশনের বই ৫০% ছাড়",
    "Islamic Books Bangladesh",
    "Deobandi Islamic Scholars"
  ],
  authors: [
    { name: "মাওলানা মুহাম্মদ যাইনুল আবিদীন (জাইনুল আবেদীন)" },
    { name: "মেশক প্রকাশন (Meshk Prokashon)" }
  ],
  creator: "মেশক প্রকাশন",
  publisher: "মেশক প্রকাশন",
  alternates: {
    canonical: "https://mesk-nine.vercel.app",
  },
  verification: {
    google: "29O24SJ5OWwkfB7wgFKwUwOHIqAEXKwb8YuTvZxxSVI",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/icons/favicon-32x32.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "মেশক প্রকাশন",
  },
  openGraph: {
    title: "মেশক প্রকাশন | মুহাম্মদ যাইনুল আবিদীন (জাইনুল আবেদীন) — অফিশিয়াল গ্রন্থশালা",
    description:
      "মেশক প্রকাশনের অফিশিয়াল গ্রন্থশালা ও বইঘর। বই আলো • বই সুবাস। লেখক মাওলানা মুহাম্মদ যাইনুল আবিদীনের শতাধিক বই ও প্রকাশনীর সকল বইয়ে ৫০% বিশেষ ছাড়।",
    url: "https://mesk-nine.vercel.app",
    siteName: "মেশক প্রকাশন (Meshk Prokashon)",
    locale: "bn_BD",
    type: "website",
    images: [
      {
        url: "https://mesk-nine.vercel.app/images/og-meshk-banner.png",
        secureUrl: "https://mesk-nine.vercel.app/images/og-meshk-banner.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "মেশক প্রকাশন লোগো ও ব্যানার",
      },
      {
        url: "https://mesk-nine.vercel.app/icons/icon-512x512.png",
        secureUrl: "https://mesk-nine.vercel.app/icons/icon-512x512.png",
        width: 512,
        height: 512,
        type: "image/png",
        alt: "মেশক প্রকাশন লোগো",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "মেশক প্রকাশন — মুহাম্মদ যাইনুল আবিদীন (জাইনুল আবেদীন)",
    description: "মেশক প্রকাশনের অফিশিয়াল গ্রন্থশালা। বই আলো • বই সুবাস। সকল বইয়ে ৫০% ছাড়।",
    images: ["https://mesk-nine.vercel.app/images/og-meshk-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={hindSiliguri.variable}>
      <body className="min-h-screen font-sans bg-[#F6F1E7] text-stone-900 antialiased selection:bg-amber-200 selection:text-amber-950">
        {children}
      </body>
    </html>
  );
}
