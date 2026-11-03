<div align="center">

  <h1>📚 মেস্ক প্রকাশন (Meshk Prokashon)</h1>
  <p><b>Islamic Publishing House & Modern Literary Distribution Platform with WhatsApp Automation</b></p>

  [![Next.js](https://img.shields.io/badge/Next.js-15_(App_Router)-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa)](https://web.dev/progressive-web-apps/)
  [![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-mesk--nine.vercel.app-0070F3?style=for-the-badge&logo=vercel&logoColor=white)](https://mesk-nine.vercel.app)

</div>

---

## 🌟 ১. পরিচিতি ও উদ্দেশ্য (Overview)

**মেস্ক প্রকাশন (Meshk Prokashon)** হলো সমকালীন ইসলামী সাহিত্য, চিন্তাশীল রচনা এবং গবেষণাধর্মী বই প্রকাশের একটি সর্বাধুনিক ওয়েব প্ল্যাটফর্ম। এটি প্রচলিত বই বিক্রয় সাইটগুলোর চেয়ে আলাদা—এখানে অত্যন্ত দ্রুতগতির সার্ভার-রেন্ডারড ক্যাটালগ, অফলাইন পিডব্লিউএ সাপোর্ট এবং নিরবচ্ছিন্ন হোয়াটসঅ্যাপ চেকআউট ইন্টিগ্রেশন রয়েছে।

---

## 🚀 ২. মূল বৈশিষ্ট্যসমূহ (Key Capabilities)

* **📖 হাইব্রিড বুক ক্যাটালগ:** বইয়ের সারসংক্ষেপ, লেখক পরিচিতি, ইনডেক্স এবং সূচিপত্রের তাৎক্ষণিক প্রিভিউ।
* **⚡ সাব-সেকেন্ড পেজ লোড:** Next.js 15 App Router এবং এজ ক্যাশিংয়ের মাধ্যমে যেকোনো ডিভাইসে পলকের মধ্যে পেইজ ওপেন হয়।
* **📲 ১-ক্লিক হোয়াটসঅ্যাপ অর্ডার ডিসপ্যাচ:** কার্টে বই যুক্ত করার পর স্বয়ংক্রিয়ভাবে ডেলিভারি চার্জ ও ঠিকানা হিসাব করে মেস্ক প্রকাশনীর হোয়াটসঅ্যাপ নম্বরে সুনির্দিষ্ট অর্ডার রিকোয়েস্ট তৈরি করে।
* **📱 PWA অফলাইন সাপোর্ট:** ইনস্টলযোগ্য Progressive Web App হওয়ায় নেটওয়ার্ক ড্রপ করলেও পাঠক পূর্বে ব্রাউজ করা বইসমূহ দেখতে পারেন।
* **🎨 রুচিশীল ইসলামিক টাইপোগ্রাফি:** বাংলা ফন্ট ও মার্জিন রেন্ডারিংয়ে আন্তর্জাতিক প্রকাশনার মান বজায় রাখা হয়েছে।

---

## 🛠️ ৩. সিস্টেম আর্কিটেকচার (Architecture Flow)

```
[READER BROWSER / PWA]
          │
          ▼ (HTTP/2 Edge Stream)
[NEXT.JS 15 APP ROUTER] ──► Edge Static Regeneration (SSG + ISR)
          │
          ├──► Interactive Cart State Management
          │
          ▼ (Payload Formatter)
[AUTOMATED WHATSAPP DISPATCH] ──► Direct Order Packet with SKU & Courier Address
```

---

## 💻 ৪. লোকাল ডেভেলপমেন্ট (Local Setup)

```bash
# রিপোজিটরি ক্লোন করুন
git clone https://github.com/Jubayer-AI-Studio/mesk.git

# ফোল্ডারে প্রবেশ করুন
cd mesk

# ডিপেন্ডেন্সি ইনস্টল করুন
npm install

# লোকাল ডেভ সার্ভার রান করুন
npm run dev
```

ব্রাউজারে `http://localhost:3000` ওপেন করে লাইভ প্রিভিউ দেখুন।

---

<div align="center">
  <b>Developed by Jubayer Ahmad — Senior Full-Stack Systems Architect</b><br/>
  <a href="https://mesk-nine.vercel.app">মেস্ক প্রকাশন লাইভ সাইট</a> • <a href="https://github.com/Jubayer-AI-Studio">GitHub প্রোফাইল</a>
</div>
