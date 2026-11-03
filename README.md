<div align="center">

  <h1>📚 Meshk Prokashon (মেস্ক প্রকাশন)</h1>
  <p><b>Contemporary Islamic Publishing House & Literature Platform with AI & Automated WhatsApp Dispatch</b></p>

  [![Next.js](https://img.shields.io/badge/Next.js-15_(App_Router)-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa)](https://web.dev/progressive-web-apps/)
  [![Google Gemini](https://img.shields.io/badge/Google-Gemini_AI-8E75C2?style=for-the-badge&logo=google)](https://ai.google.dev/)
  [![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-mesk--nine.vercel.app-0070F3?style=for-the-badge&logo=vercel&logoColor=white)](https://mesk-nine.vercel.app)

</div>

---

## 🌟 1. System Overview

**Meshk Prokashon** is an enterprise-grade digital publishing portal and literature distribution platform engineered for modern Islamic publications, research manuscripts, and classical translations. Built with Next.js 15 App Router, React 19, and Progressive Web App (PWA) standards, it features an edge-cached catalog, an in-browser sample reader, an autonomous AI book recommendation agent, and seamless 1-click WhatsApp order routing.

---

## 🏛️ 2. Architectural Execution Matrix // How It Works

Below is the structured engineering matrix detailing how each operational stage of Meshk Prokashon executes from catalog discovery to automated checkout:

| Stage | User Journey & Interaction | Frontend Component & State | Edge & Backend Pipeline (Next.js 15) | Output & Delivery |
| :---: | :--- | :--- | :--- | :--- |
| **01** | **Catalog Discovery & Search** | `components/Bookshelf.tsx`<br/>`components/AllBooksSearchModal.tsx` | Next.js 15 Incremental Static Regeneration (ISR) edge-caches 100+ book covers and metadata. | Sub-50ms TTFB page load with zero-latency real-time book query filtering. |
| **02** | **In-Browser Sample Reading** | `components/RokomariReaderModal.tsx`<br/>`components/BookModal.tsx` | Client-side memory and Service Worker cache fetch excerpt chapters and index schemas. | Distraction-free modal reader rendering sample text without page navigation. |
| **03** | **AI Book Consultation** | `components/AIChatWidget.tsx` | Next.js `/api/ai` route interfaces with Google Gemini API and `lib/aiBrain.ts` knowledgebase. | Context-aware Islamic literature suggestions based on user age, topic, and intent. |
| **04** | **Cart & Regional Shipping** | `components/BookCard.tsx`<br/>`lib/siteData.ts` Cart Controller | Reactive React state recalculates item quantities, discounts, and regional courier fees. | Optimistic UI badge counter updates and enables 1-click order checkout button. |
| **05** | **WhatsApp Order Dispatch** | 1-Click Order Confirmation (`components/Navbar.tsx`) | `/api/whatsapp` formats URI-encoded order payload containing book SKUs, pricing, and address. | Directly routes formatted order packet to the official publishing WhatsApp desk. |

---

## 🔄 3. Data Flow Architecture

```
[READER BROWSER / MOBILE PWA]
       │
       ├──► 1. [CATALOG DISCOVERY] ──► Next.js 15 Edge ISR Cache ──► Sub-50ms Global Delivery
       │
       ├──► 2. [IN-BROWSER READER] ──► RokomariReaderModal ──► Clean Sample Reading Canvas
       │
       ├──► 3. [AI CONSULTANT] ────► /api/ai ──► Gemini AI Brain ──► Intelligent Recommendations
       │
       ▼
[REACTIVE CART STATE] ──► Real-Time Quantity & Regional Shipping Fee Calculation
       │
       ▼ (1-Click Order Protocol)
[WHATSAPP AUTOMATION BOT] ──► Formatted Order Packet Dispatched to Publishing Desk
```

---

## 🛠️ 4. Technology Stack

| Domain | Specification |
| :--- | :--- |
| **Frontend Framework** | Next.js 15 (App Router), React 19, TypeScript |
| **Styling & Design System** | Tailwind CSS 3.4, Lucide Icons, Custom Typography |
| **Artificial Intelligence** | Google Gemini API, Custom AI Brain Engine (`lib/aiBrain.ts`) |
| **Offline & Mobile Engine** | Progressive Web App (PWA), Service Worker (`manifest.ts`) |
| **Cloud Hosting & CDN** | Vercel Edge Network |

---

## 🚀 5. Local Development Setup

```bash
# Clone the repository
git clone https://github.com/Jubayer-AI-Studio/mesk.git

# Navigate into project directory
cd mesk

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:3000` in your browser to inspect the application.

---

<div align="center">
  <b>Architected & Engineered by Jubayer Ahmad — Senior Full-Stack Systems Architect</b><br/>
  <a href="https://mesk-nine.vercel.app">Meshk Prokashon Live Portal</a> • <a href="https://github.com/Jubayer-AI-Studio">GitHub Profile</a>
</div>
