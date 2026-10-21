import { meshkOriginalBooks, authorMasterArchive, siteConfig } from "./siteData";
import { BookItem } from "./types";

const allBooks: BookItem[] = [...meshkOriginalBooks, ...authorMasterArchive];

// Helper to normalize Bengali string for search
function normalizeBangla(str: string): string {
  return str
    .toLowerCase()
    .replace(/[,\.?!;:'"“”‘’]/g, "")
    .trim();
}

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function processUserMessage(
  userMessage: string,
  history: ChatMessage[] = []
): Promise<{ reply: string; suggestedBooks?: BookItem[] }> {
  const query = normalizeBangla(userMessage);

  // 1. If Gemini API Key is available, use Google Gemini
  const geminiApiKey = process.env.GEMINI_API_KEY;
  if (geminiApiKey) {
    try {
      const geminiReply = await callGeminiAPI(userMessage, history, geminiApiKey);
      if (geminiReply) {
        return { reply: geminiReply };
      }
    } catch (err) {
      console.error("Gemini API error, falling back to local brain:", err);
    }
  }

  // 2. Intelligent Local Brain (Instant, Reliable, 100% Offline Capable)
  return generateLocalSmartReply(query, userMessage);
}

// ============================================================================
// LOCAL INTELLECTUAL BRAIN (Trained on 68 books & Islamic literature)
// ============================================================================
function generateLocalSmartReply(
  query: string,
  rawMessage: string
): { reply: string; suggestedBooks?: BookItem[] } {
  // Check Greetings
  if (
    query.includes("সালাম") ||
    query.includes("assalamu") ||
    query.includes("salam") ||
    query.includes("হ্যালো") ||
    query.includes("hello")
  ) {
    return {
      reply: `ওয়ালাইকুমুস সালাম ওয়া রাহমাতুল্লাহ! 🌿\n\nমেশক প্রকাশন ও মাওলানা মুহাম্মদ যাইনুল আবিদীনের গ্রন্থশালায় আপনাকে স্বাগতম। আমি আপনার ডিজিটাল বুক অ্যাসিস্ট্যান্ট।\n\nআপনি কী ধরনের বই খুঁজছেন? যেমন:\n• কোনো নির্দিষ্ট বইয়ের মূল্য বা স্টক জানতে চান?\n• সীরাত, ভাষা-সাহিত্য বা ইসলামী জীবনবোধের বইয়ের তালিকা চান?\n• অথবা সরাসরি অর্ডার করার নিয়ম জানতে চান?\n\nআপনার যেকোনো প্রশ্নের উত্তর দিতে আমি প্রস্তুত আছি!`,
    };
  }

  // Check Author inquiry
  if (
    query.includes("লেখক কে") ||
    query.includes("যাইনুল আবিদীন কে") ||
    query.includes("লেখকের পরিচয়") ||
    query.includes("মাওলানা মুহাম্মদ যাইনুল আবিদীন")
  ) {
    return {
      reply: `মাওলানা মুহাম্মদ যাইনুল আবিদীন বাংলাদেশের একজন খ্যাতনামা ইসলামী চিন্তাবিদ, গবেষক, সাহিত্যিক ও সম্পাদক। তিনি 'মেশক প্রকাশন'-এর প্রতিষ্ঠাতা এবং চার দশকেরও বেশি সময় ধরে আধুনিক ও প্রাঞ্জল বাংলা ভাষায় উচ্চমানের ইসলামী ও নৈতিক সাহিত্যের রচনা ও বিকাশে অগ্রণী ভূমিকা রেখে চলেছেন।\n\nতাঁর রচিত ও অনূদিত ১১০টিরও বেশি গ্রন্থ রয়েছে। যার মধ্যে উল্লেখযোগ্য: 'লেখালেখির শিকড় শিখর', 'সাহিত্যের ক্লাস', 'তাতারীদের ইতিহাস', 'আমাদের নবীজি সা.', 'বড় যদি হতে চাও' ইত্যাদি।`,
    };
  }

  // Check How to Order / Buying questions
  if (
    query.includes("অর্ডার") ||
    query.includes("কিনব") ||
    query.includes("নিতে চাই") ||
    query.includes("কীভাবে পাব") ||
    query.includes("কেনার নিয়ম") ||
    query.includes("হোম ডেলিভারি")
  ) {
    return {
      reply: `মেশক প্রকাশনের বই সংগ্রহ করার অত্যন্ত সহজ ৩টি মাধ্যম রয়েছে:\n\n১. 📲 **হোয়াটসঅ্যাপে সরাসরি অর্ডার**: আমাদের অফিসিয়াল হোয়াটসঅ্যাপ নম্বর (${siteConfig.whatsappDisplay})-এ আপনার কাঙ্ক্ষিত বইয়ের নাম ও ঠিকানা মেসেজ করলেই সারাদেশে হোম ডেলিভারিতে পাঠানো হয়।\n\n২. 🛒 **রকমারি ডট কম**: রকমারি থেকে ক্যাশ অন ডেলিভারিতে অর্ডার করতে পারবেন।\n\n৩. 📦 **ওয়াফিলাইফ ও কিতাবঘর**: এছাড়াও দেশের সকল অভিজাত লাইব্রেরিতে বইগুলো পাওয়া যায়।\n\nআপনি কোন বইটি সংগ্রহ করতে চান? নাম জানালে আমি সাথে সাথে মূল্য ও লিংক জানিয়ে দিচ্ছি!`,
    };
  }

  // Check Category Inquiries
  if (query.includes("সীরাত") || query.includes("নবীজি") || query.includes("রাসূল")) {
    const seeratBooks = allBooks.filter(
      (b) =>
        b.category.includes("সীরাত") ||
        b.title.includes("নবী") ||
        b.title.includes("সীরাত") ||
        b.title.includes("শহীদান")
    );
    const names = seeratBooks.slice(0, 6).map((b) => `• *${b.title}* — ৳${b.salePrice || b.regularPrice}`);
    return {
      reply: `মাওলানা মুহাম্মদ যাইনুল আবিদীনের উল্লেখযোগ্য সীরাত ও ইতিহাস গ্রন্থসমূহ:\n\n${names.join("\n")}\n\nযেকোনো বইটি সংগ্রহ করতে আমাদের হোয়াটসঅ্যাপে মেসেজ করুন!`,
      suggestedBooks: seeratBooks.slice(0, 4),
    };
  }

  if (query.includes("সাহিত্য") || query.includes("লেখালেখি") || query.includes("ভাষা")) {
    const litBooks = allBooks.filter(
      (b) =>
        b.category.includes("সাহিত্য") ||
        b.category.includes("ভাষা") ||
        b.title.includes("লেখালেখি") ||
        b.title.includes("সাহিত্য")
    );
    const names = litBooks.slice(0, 5).map((b) => `• *${b.title}* — ৳${b.salePrice || b.regularPrice} (${b.pages ? b.pages + ' পৃষ্ঠা' : ''})`);
    return {
      reply: `ভাষা ও সাহিত্য বিষয়ক অত্যন্ত জনপ্রিয় মাস্টারপিস বইসমূহ:\n\n${names.join("\n")}\n\nবিশেষ করে 'লেখালেখির শিকড় শিখর' ও 'সাহিত্যের ক্লাস' নবীন ও অভিজ্ঞ লেখকদের জন্য এক অনন্য পাথেয়!`,
      suggestedBooks: litBooks.slice(0, 4),
    };
  }

  if (query.includes("ছোট বই") || query.includes("পকেট") || query.includes("পুস্তিকা") || query.includes("লিটল")) {
    const pocketBooks = allBooks.filter((b) => b.isPocketEdition);
    const names = pocketBooks.slice(0, 6).map((b) => `• *${b.title}* — ৳${b.salePrice || b.regularPrice}`);
    return {
      reply: `লেখকের সহজে পঠনীয় জনপ্রিয় পকেট পুস্তিকা ও লিটল ম্যাগসমূহ:\n\n${names.join("\n")}\n\nএগুলো আকারে ছোট হলেও জীবনঘনিষ্ঠ অত্যন্ত গভীর শিক্ষণীয় বিষয়ে রচিত!`,
      suggestedBooks: pocketBooks.slice(0, 4),
    };
  }

  // Specific Book Price / Info Match
  const matchedBook = allBooks.find((book) => {
    const bTitle = normalizeBangla(book.title);
    return query.includes(bTitle) || bTitle.includes(query);
  });

  if (matchedBook) {
    const priceText = matchedBook.salePrice
      ? `মূল্য: ৳${matchedBook.salePrice} (মূল মূল্য: ৳${matchedBook.regularPrice})`
      : `মূল্য: ৳${matchedBook.regularPrice || "রকমারি দেখুন"}`;
    const pageText = matchedBook.pages ? `\n• পৃষ্ঠা সংখ্যা: ${matchedBook.pages}` : "";
    const editionText = matchedBook.edition ? `\n• সংস্করণ: ${matchedBook.edition}` : "";

    return {
      reply: `📖 **${matchedBook.title}**\n\n• লেখক: ${matchedBook.author}\n• প্রকাশনা: ${matchedBook.publisher}\n• বিষয়: ${matchedBook.category}\n• ${priceText}${pageText}${editionText}\n\n${matchedBook.synopsis || "মাওলানা মুহাম্মদ যাইনুল আবিদীনের এক অনন্য প্রামাণ্য রচনা।"}\n\nবইটি অর্ডার করতে চান? নিচের বাটনে ক্লিক করে সরাসরি হোয়াটসঅ্যাপে মেসেজ দিন!`,
      suggestedBooks: [matchedBook],
    };
  }

  // General Islamic Knowledge / Advice
  if (query.includes("বই পড়া") || query.includes("পড়াশোনা") || query.includes("উপদেশ")) {
    return {
      reply: `“বই মানুষের আত্মাকে আলো দেয়, চিন্তা ও মননকে শাণিত করে।”\n\nমাওলানা মুহাম্মদ যাইনুল আবিদীনের বক্তব্য অনুযায়ী—বই পড়ার ক্ষেত্রে কেবল শব্দের উপরিভাগ দেখলে চলে না, লেখকের গভীর চেতনা ও নৈতিক বার্তার সাথে নিজের জীবনকে মেলাতে হয়।\n\nআপনার আগ্রহের বিষয় জানালে আমি সেরা বইটি বেছে দিতে সাহায্য করব।`,
    };
  }

  // Fallback Helpful Response
  return {
    reply: `আপনার অনুসন্ধানের জন্য ধন্যবাদ! 😊\n\nমেশক প্রকাশনের ক্যাটালগে মাওলানা মুহাম্মদ যাইনুল আবিদীনের ভাষা-সাহিত্য, সীরাত, ইতিহাস, ফিকহ ও উপদেশমূলক ৬৮টিরও বেশি গ্রন্থ রয়েছে।\n\nআপনি কি কোনো নির্দিষ্ট বইয়ের মূল্য জানতে চান? অথবা আপনার পছন্দমতো বই অর্ডার করতে আমাদের হোয়াটসঅ্যাপে (${siteConfig.whatsappDisplay}) সরাসরি চ্যাট করতে পারেন।`,
  };
}

// ============================================================================
// GEMINI API INTEGRATION (For advanced natural conversations)
// ============================================================================
async function callGeminiAPI(
  userMessage: string,
  history: ChatMessage[],
  apiKey: string
): Promise<string | null> {
  const booksSummary = allBooks
    .map(
      (b) =>
        `- ${b.title} | লেখক: ${b.author} | ক্যাটাগরি: ${b.category} | মূল্য: ৳${b.salePrice || b.regularPrice} | প্রকাশক: ${b.publisher}`
    )
    .join("\n");

  const systemInstruction = `
তুমি "মেশক প্রকাশন" (Meshk Prokashon)-এর অফিশিয়াল স্মার্ট এআই অ্যাসিস্ট্যান্ট ও বুক গাইড।
মেশক প্রকাশন হলো প্রখ্যাত লেখক ও গবেষক মাওলানা মুহাম্মদ যাইনুল আবিদীন (Muhammod Jainul Abidin)-এর নিজস্ব প্রকাশনা প্রতিষ্ঠান।
হোয়াটসঅ্যাপ নম্বর: ${siteConfig.whatsappDisplay} (+${siteConfig.whatsappNumber}).

তোমার আচরণ ও দায়িত্ব:
১. সর্বদা অত্যন্ত বিনয়ী, মার্জিত, শ্রদ্ধাশীল এবং প্রাঞ্জল প্রমিত বাংলা ভাষায় উত্তর দাও।
২. বইয়ের মূল্য, পৃষ্ঠা, ক্যাটাগরি এবং প্রকাশনা সম্পর্কে জিজ্ঞেস করলে নিচে দেওয়া নির্ভুল ক্যাটালগ অনুযায়ী তথ্য দাও।
৩. কোনো ভুল বা বানানো বইয়ের নাম বলবে না। বাইরের কোনো লেখকের বই মেশকের বলে দাবি করবে না।
৪. পাঠক বই কিনতে চাইলে বলবে—"আপনি আমাদের হোয়াটসঅ্যাপে (${siteConfig.whatsappDisplay}) সরাসরি ঠিকানা পাঠিয়ে অর্ডার করতে পারেন অথবা রকমারি থেকে সংগ্রহ করতে পারেন।"
৫. সাধারণ ইসলামিক জ্ঞান, সীরাত বা সাহিত্য সম্পর্কিত প্রশ্নের সংক্ষিপ্ত ও মার্জিত উত্তর দাও।

প্রকাশিত বইয়ের ক্যাটালগ (মোট ৬৮টি প্রামাণ্য বই):
${booksSummary}
  `.trim();

  const contents = [
    {
      role: "user",
      parts: [{ text: systemInstruction + "\n\nইউজারের প্রশ্ন: " + userMessage }],
    },
  ];

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents }),
    }
  );

  if (!res.ok) {
    const errText = await res.text();
    console.error("Gemini API non-ok status:", res.status, errText);
    return null;
  }

  const json = await res.json();
  const text = json?.candidates?.[0]?.content?.parts?.[0]?.text;
  return text || null;
}
