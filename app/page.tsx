"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Bookshelf from "@/components/Bookshelf";
import BookModal from "@/components/BookModal";
import AllBooksSearchModal from "@/components/AllBooksSearchModal";
import AuthorBioModal from "@/components/AuthorBioModal";
import AuthorMessage from "@/components/AuthorMessage";
import FacebookCard from "@/components/FacebookCard";
import Footer from "@/components/Footer";
import { meshkOriginalBooks, authorMasterArchive, siteConfig } from "@/lib/siteData";
import { BookItem } from "@/lib/types";

export default function Home() {
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);
  const [isAllBooksOpen, setIsAllBooksOpen] = useState(false);
  const [isAuthorBioOpen, setIsAuthorBioOpen] = useState(false);

  // Filter classic masterpieces (books not part of the initial 17 Meshk direct ones)
  const classicMasterpieces = authorMasterArchive.filter((b) => !b.isMeshkOriginal);

  // Comprehensive Schema.org JSON-LD Structured Data for Google & AI Search Engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://mesk-nine.vercel.app/#website",
        "url": "https://mesk-nine.vercel.app",
        "name": "মেশক প্রকাশন — মুহাম্মদ যাইনুল আবিদীন (জাইনুল আবেদীন)",
        "alternateName": [
          "মেসক প্রকাশন",
          "Meshk Prokashon",
          "Mesk Prokashan",
          "মেশক",
          "মেসক"
        ],
        "description": "মেশক প্রকাশন ও মাওলানা মুহাম্মদ যাইনুল আবিদীনের অফিশিয়াল গ্রন্থশালা ও প্রকাশনা প্ল্যাটফর্ম।",
        "publisher": {
          "@id": "https://mesk-nine.vercel.app/#organization"
        },
        "inLanguage": ["bn-BD", "en-US"]
      },
      {
        "@type": "Organization",
        "@id": "https://mesk-nine.vercel.app/#organization",
        "name": siteConfig.brandName,
        "alternateName": [
          "মেসক প্রকাশন",
          siteConfig.englishBrandName,
          "Mesk Prokashan",
          "Meshk Publication",
          "মেশক",
          "মেসক"
        ],
        "url": "https://mesk-nine.vercel.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mesk-nine.vercel.app/images/mesk-logo.png",
          "width": 512,
          "height": 512
        },
        "image": "https://mesk-nine.vercel.app/images/og-meshk-banner.png",
        "slogan": siteConfig.slogan,
        "founder": {
          "@id": "https://mesk-nine.vercel.app/#author"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": siteConfig.whatsappDisplay,
          "contactType": "sales and customer service",
          "contactOption": "WhatsApp",
          "areaServed": "BD",
          "availableLanguage": ["bn", "en"]
        },
        "sameAs": [
          siteConfig.facebookPage,
          siteConfig.facebookGroupUrl,
          siteConfig.rokomariPublisherUrl,
          siteConfig.wafilifePublisherUrl,
          siteConfig.kitabghorPublisherUrl,
          siteConfig.bdbooksPublisherUrl
        ]
      },
      {
        "@type": "Person",
        "@id": "https://mesk-nine.vercel.app/#author",
        "name": siteConfig.authorName,
        "alternateName": [
          "জাইনুল আবেদীন",
          "যাইনুল আবিদীন",
          "মাওলানা মুহাম্মদ যাইনুল আবিদীন",
          "মাওলানা যাইনুল আবেদীন",
          "মাওলানা জাইনুল আবেদীন",
          "মুহম্মদ যাইনুল আবিদীন",
          "জয়নুল আবেদীন",
          "Muhammod Jainul Abidin",
          "Muhammad Jainul Abidin",
          "Maulana Muhammod Jainul Abidin",
          "Zainul Abedin",
          "Jainul Abedin"
        ],
        "jobTitle": siteConfig.authorTitle,
        "image": "https://mesk-nine.vercel.app/images/author-portrait-hd.jpg",
        "description": siteConfig.authorDetailedBio,
        "worksFor": {
          "@id": "https://mesk-nine.vercel.app/#organization"
        },
        "sameAs": [
          siteConfig.rokomariAuthorUrl,
          siteConfig.facebookProfile,
          siteConfig.facebookGroupUrl
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://mesk-nine.vercel.app/#catalog",
        "name": "মেশক প্রকাশনীর মৌলিক গ্রন্থসমূহ (Meshk Prokashon Books)",
        "description": "মাওলানা মুহাম্মদ যাইনুল আবিদীনের ১৭টি মৌলিক গ্রন্থ সংকলন",
        "numberOfItems": meshkOriginalBooks.length,
        "itemListElement": meshkOriginalBooks.map((book, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "item": {
            "@type": "Book",
            "name": book.title,
            "url": "https://mesk-nine.vercel.app",
            "author": {
              "@id": "https://mesk-nine.vercel.app/#author"
            },
            "publisher": {
              "@id": "https://mesk-nine.vercel.app/#organization"
            },
            "image": `https://mesk-nine.vercel.app${book.coverImage}`,
            "inLanguage": "bn",
            "bookFormat": "https://schema.org/Paperback",
            "numberOfPages": book.pages,
            "description": book.synopsis,
            "offers": {
              "@type": "Offer",
              "price": book.salePrice,
              "priceCurrency": "BDT",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@id": "https://mesk-nine.vercel.app/#organization"
              }
            }
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F6F1E7] via-[#ECE0CC] to-[#DFCDB0] text-stone-900 flex flex-col font-sans antialiased selection:bg-amber-200 selection:text-amber-950 relative overflow-x-hidden">
      {/* Google & AI Structured Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Decorative Radial Background Lights */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_100%_45%_at_50%_0%,rgba(225,185,135,0.25),transparent_75%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_15%_40%,rgba(215,170,115,0.15),transparent_60%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_85%_65%,rgba(195,145,95,0.15),transparent_60%)] pointer-events-none" />

      {/* Sticky Header */}
      <Navbar
        onOpenAllBooks={() => setIsAllBooksOpen(true)}
        onOpenAuthorBio={() => setIsAuthorBioOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        {/* Author & Publication Hero (Prominent HD Portrait Showcase) */}
        <Hero onOpenAuthorBio={() => setIsAuthorBioOpen(true)} />

        {/* 3D Realistic Bookshelf (Wooden & Emerald Shelves) */}
        <Bookshelf
          meshkBooks={meshkOriginalBooks}
          classicBooks={classicMasterpieces}
          onSelectBook={(book) => setSelectedBook(book)}
          onOpenAllBooks={() => setIsAllBooksOpen(true)}
        />

        {/* Facebook Page Graphic Card */}
        <FacebookCard />

        {/* Direct Message to Author/Publisher via WhatsApp */}
        <AuthorMessage />
      </main>

      {/* Footer */}
      <Footer />

      {/* Single Book Details Modal */}
      <BookModal
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
      />

      {/* All 110+ Books Interactive Search Modal */}
      <AllBooksSearchModal
        isOpen={isAllBooksOpen}
        onClose={() => setIsAllBooksOpen(false)}
        allBooks={authorMasterArchive}
        onSelectBook={(book) => setSelectedBook(book)}
      />

      {/* Author Bio Modal */}
      <AuthorBioModal
        isOpen={isAuthorBioOpen}
        onClose={() => setIsAuthorBioOpen(false)}
      />
    </div>
  );
}
