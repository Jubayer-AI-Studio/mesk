<div align="center">

  <h1>📚 মেস্ক প্রকাশন (Meshk Prokashon)</h1>
  <p><b>Islamic Publishing House & Modern Literary Distribution Platform with AI & WhatsApp Automation</b></p>

  [![Next.js](https://img.shields.io/badge/Next.js-15_(App_Router)-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa)](https://web.dev/progressive-web-apps/)
  [![Google Gemini](https://img.shields.io/badge/Google-Gemini_AI-8E75C2?style=for-the-badge&logo=google)](https://ai.google.dev/)
  [![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-mesk--nine.vercel.app-0070F3?style=for-the-badge&logo=vercel&logoColor=white)](https://mesk-nine.vercel.app)

</div>

---

## 🌟 ১. পরিচিতি ও উদ্দেশ্য (Overview)

**মেস্ক প্রকাশন (Meshk Prokashon)** হলো সমকালীন ইসলামী সাহিত্য, চিন্তাশীল রচনা এবং গবেষণাধর্মী গ্রন্থ প্রকাশের একটি সর্বাধুনিক ওয়েব প্ল্যাটফর্ম। এটি প্রচলিত বই বিক্রয় সাইটগুলোর চেয়ে আলাদা—এখানে অত্যন্ত দ্রুতগতির সার্ভার-রেন্ডারড ক্যাটালগ, অফলাইন পিডব্লিউএ রিডার, কৃত্রিম বুদ্ধিমত্তা চালিত বই বাছাইয়ের সহকারী এবং নিরবচ্ছিন্ন হোয়াটসঅ্যাপ চেকআউট ইন্টিগ্রেশন রয়েছে।

---

## 🏛️ ২. সিস্টেম আর্কিটেকচার ও কাজের ধাপ (HOW IT WORKS — কার্যপদ্ধতির ছক)

নিচের ছকে মেস্ক প্রকাশন প্ল্যাটফর্মের প্রতিটি ফিচার কীভাবে কাজ করে এবং ইউজার অ্যাকশন থেকে অর্ডার ডেলিভারি পর্যন্ত সম্পূর্ণ ইঞ্জিনিয়ারিং ফ্লো তুলে ধরা হলো:

| ধাপ | ব্যবহারকারীর পদক্ষেপ (User Journey) | ফ্রন্টএন্ড কম্পোনেন্ট ও স্টেট | ব্যাকএন্ড ও এজ পাইপলাইন (Next.js 15) | ফলাফল ও চূড়ান্ত আউটপুট |
| :---: | :--- | :--- | :--- | :--- |
| **০১** | **বই অনুসন্ধান ও ব্রাউজিং** | `components/Bookshelf.tsx`<br/>`components/AllBooksSearchModal.tsx` | Next.js 15 SSG / ISR দিয়ে এজ ক্যাশ থেকে ১০০+ প্রাক-রেন্ডারড বই কভার ও মেটাডাটা স্ট্রিম হয়। | চোখের পলকে (Sub-50ms) পেজ লোড ও টাইপিংয়ের সাথে সাথে রিয়েল-টাইম সার্চ রেজাল্ট। |
| **০২** | **সূচিপত্র ও বই প্রিভিউ পাঠ** | `components/RokomariReaderModal.tsx`<br/>`components/BookModal.tsx` | ক্লায়েন্ট-সাইড মেমরি ও সার্ভিস ওয়ার্কার ক্যাশ থেকে চ্যাপ্টার মেটাডাটা ও প্রিভিউ পেইজ ফেচ করে। | কোনো পেজ রিলোড ছাড়াই ডিস্ট্র্যাকশন-ফ্রি রিডার মোডে বইয়ের সূচিপত্র ও নমুনা পাঠ। |
| **০৩** | **এআই বই সহকারী পরামর্শ** | `components/AIChatWidget.tsx` | `/api/ai` রুট দিয়ে Google Gemini AI এপিআই এবং `lib/aiBrain.ts` কাস্টম নলেজবেস প্রসেস হয়। | পাঠকের বয়স ও আগ্রহ অনুযায়ী তাৎক্ষণিক বইয়ের নির্ভুল ইসলামিক পরামর্শ প্রদান। |
| **০৪** | **কার্টে সংযোজন ও ডেলিভারি হিসাব** | `components/BookCard.tsx`<br/>`lib/siteData.ts` কার্ট কন্ট্রোলার | রিয়েল-টাইম রিঅ্যাক্ট স্টেটে বইয়ের সংখ্যা, ডিসকাউন্ট এবং এলাকাভিত্তিক কুরিয়ার চার্জ গণনা হয়। | ফ্লুইড অপটিমিস্টিক কার্ট কাউন্টার আপডেট ও চেকআউট বাটন সক্রিয়করণ। |
| **০৫** | **হোয়াটসঅ্যাপ অর্ডার ডিসপ্যাচ** | ১-ক্লিক অর্ডার সাবমিট (`components/Navbar.tsx`) | `/api/whatsapp` দিয়ে এনকোডেড অর্ডার স্ট্রাকচার, বইয়ের এসকেইউ ও ঠিকানা পে-লোড তৈরি করে। | প্রকাশনীর অফিশিয়াল হোয়াটসঅ্যাপে স্বয়ংক্রিয় সুনির্দিষ্ট অর্ডার মেসেজ প্রেরণ। |

---

## 🔄 ৩. ডেটা ফ্লো ও আর্কিটেকচার ডায়াগ্রাম (Architecture Diagram)

```
[VISITOR / PWA APP]
       │
       ├──► 1. [BROWSE / SEARCH] ──► Next.js 15 ISR Cache ──► Sub-second Edge Delivery
       │
       ├──► 2. [BOOK PREVIEW] ──► RokomariReaderModal ──► Clean Reading Canvas
       │
       ├──► 3. [AI ASSISTANT] ──► /api/ai ──► Gemini AI Brain ──► Intelligent Recommendation
       │
       ▼
[REACTIVE CART STATE] ──► Dynamic Shipping & Quantity Calculation
       │
       ▼ (1-Click Order Protocol)
[WHATSAPP AUTOMATION BOT] ──► Sends Formatted Order Payload to Publishing Desk
```

---

## 🛠️ ৪. টেক স্ট্যাক (Tech Stack)

| ডোমেন | প্রযুক্তি |
| :--- | :--- |
| **ফ্রন্টএন্ড ফ্রেমওয়ার্ক** | Next.js 15 (App Router), React 19, TypeScript |
| **স্টাইলিং ও টাইপোগ্রাফি** | Tailwind CSS, Lucide Icons, Custom Bengali Typography |
| **কৃত্রিম বুদ্ধিমত্তা** | Google Gemini API, Custom AI Brain Engine (`lib/aiBrain.ts`) |
| **অফলাইন ও মোবাইল** | Progressive Web App (PWA), Service Worker Cache |
| **হোস্টিং ও সিডিএন** | Vercel Edge Network |

---

## 💻 ৫. লোকাল রান করার নিয়ম (Local Setup)

```bash
# ক্লোন করুন
git clone https://github.com/Jubayer-AI-Studio/mesk.git

# ডিরেক্টরিতে যান
cd mesk

# ডিপেন্ডেন্সি ইনস্টল করুন
npm install

# লোকাল ডেভ সার্ভার রান করুন
npm run dev
```

ব্রাউজারে `http://localhost:3000` ওপেন করুন।

---

<div align="center">
  <b>Architected & Developed by Jubayer Ahmad — Senior Full-Stack Systems Architect</b><br/>
  <a href="https://mesk-nine.vercel.app">মেস্ক প্রকাশন লাইভ সাইট</a> • <a href="https://github.com/Jubayer-AI-Studio">GitHub প্রোফাইল</a>
</div>
