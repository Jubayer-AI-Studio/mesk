import type { Metadata, Viewport } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

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
  title: "মেশক প্রকাশন | বই আলো • বই সুবাস — মুহাম্মদ যাইনুল আবিদীন",
  description:
    "মেশক প্রকাশন (Meshk Prokashon)-এর অফিশিয়াল ওয়েবসাইট ও গ্রন্থশালা। লেখক মাওলানা মুহাম্মদ যাইনুল আবিদীনের সাহিত্য, সীরাত, ইতিহাস, ফিকহ ও আত্মশুদ্ধির বইসমূহ এবং রকমারি, ওয়াফিলাইফ ও সরাসরি অর্ডারের সমন্বিত প্ল্যাটফর্ম।",
  keywords: [
    "মেশক প্রকাশন",
    "মেস্ক প্রকাশন",
    "Meshk Prokashon",
    "Mesk Prokashan",
    "মুহাম্মদ যাইনুল আবিদীন",
    "Muhammad Jainul Abidin",
    "লেখালেখির শিকড় শিখর",
    "সাহিত্যের ক্লাস",
    "শব্দের সৌরভ শব্দের সানাই",
    "বক্তৃতার ক্লাস",
    "আমাদের নবীজি",
    "তাতারীদের ইতিহাস",
    "বড় যদি হতে চাও",
    "Rokomari Meshk Prokashon",
    "Wafilife Meshk Prokashon"
  ],
  authors: [{ name: "মুহাম্মদ যাইনুল আবিদীন" }],
  creator: "মেশক প্রকাশন",
  publisher: "মেশক প্রকাশন",
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
    title: "মেশক প্রকাশন | বই আলো • বই সুবাস — মুহাম্মদ যাইনুল আবিদীন",
    description:
      "মেশক প্রকাশনের অফিশিয়াল গ্রন্থশালা। বই আলো • বই সুবাস।",
    url: "https://mesk-nine.vercel.app",
    siteName: "মেশক প্রকাশন",
    locale: "bn_BD",
    type: "website",
    images: [
      {
        url: "/images/og-meshk-banner.png",
        width: 1200,
        height: 630,
        alt: "মেশক প্রকাশন লোগো",
      },
      {
        url: "/icons/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "মেশক প্রকাশন লোগো",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "মেশক প্রকাশন — মুহাম্মদ যাইনুল আবিদীন",
    description: "মেশক প্রকাশনের অফিশিয়াল গ্রন্থশালা। বই আলো • বই সুবাস।",
    images: ["/images/og-meshk-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={hindSiliguri.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if ('serviceWorker' in navigator) {
                  navigator.serviceWorker.getRegistrations().then(function(regs) {
                    for (var i = 0; i < regs.length; i++) { regs[i].unregister(); }
                  });
                }
                if ('caches' in window) {
                  caches.keys().then(function(keys) {
                    for (var i = 0; i < keys.length; i++) { caches.delete(keys[i]); }
                  });
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen font-sans bg-[#F6F1E7] text-stone-900 antialiased selection:bg-amber-200 selection:text-amber-950">
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
