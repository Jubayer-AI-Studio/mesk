"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Bookshelf from "@/components/Bookshelf";
import BookModal from "@/components/BookModal";
import AllBooksSearchModal from "@/components/AllBooksSearchModal";
import AuthorBioModal from "@/components/AuthorBioModal";
import AuthorMessage from "@/components/AuthorMessage";
import Footer from "@/components/Footer";
import { meshkOriginalBooks, authorMasterArchive, siteConfig } from "@/lib/siteData";
import { BookItem } from "@/lib/types";

export default function Home() {
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);
  const [isAllBooksOpen, setIsAllBooksOpen] = useState(false);
  const [isAuthorBioOpen, setIsAuthorBioOpen] = useState(false);

  // Filter classic masterpieces (books not part of the initial 17 Meshk direct ones)
  const classicMasterpieces = authorMasterArchive.filter((b) => !b.isMeshkOriginal);

  // Structured Data Schema for Google SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://meshkprokashon.com/#organization",
        "name": siteConfig.brandName,
        "alternateName": siteConfig.englishBrandName,
        "url": "https://meshkprokashon.com",
        "logo": "https://meshkprokashon.com/images/mesk-logo.png",
        "slogan": siteConfig.slogan,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": siteConfig.whatsappDisplay,
          "contactType": "customer service",
          "availableLanguage": ["bn", "en"]
        }
      },
      {
        "@type": "Person",
        "@id": "https://meshkprokashon.com/#author",
        "name": siteConfig.authorName,
        "jobTitle": siteConfig.authorTitle,
        "image": "https://meshkprokashon.com/images/author-library.jpg",
        "description": siteConfig.authorBio,
        "sameAs": [
          siteConfig.rokomariAuthorUrl,
          siteConfig.facebookProfile
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://meshkprokashon.com/#website",
        "url": "https://meshkprokashon.com",
        "name": `${siteConfig.brandName} - ${siteConfig.slogan}`,
        "publisher": {
          "@id": "https://meshkprokashon.com/#organization"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F6F1E7] via-[#ECE0CC] to-[#DFCDB0] text-stone-900 flex flex-col font-sans antialiased selection:bg-amber-200 selection:text-amber-950 relative overflow-x-hidden">
      {/* Google Structured Data Injection */}
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
        {/* Author & Publication Hero (Small 96px circular avatar) */}
        <Hero />

        {/* 3D Realistic Bookshelf (Wooden & Emerald Shelves) */}
        <Bookshelf
          meshkBooks={meshkOriginalBooks}
          classicBooks={classicMasterpieces}
          onSelectBook={(book) => setSelectedBook(book)}
          onOpenAllBooks={() => setIsAllBooksOpen(true)}
        />

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
