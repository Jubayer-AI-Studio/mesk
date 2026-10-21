import { NextRequest, NextResponse } from "next/server";
import { processUserMessage, ChatMessage } from "@/lib/aiBrain";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const message = body.message;
    const history: ChatMessage[] = body.history || [];

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "বার্তা প্রদান করুন" },
        { status: 400 }
      );
    }

    const result = await processUserMessage(message, history);

    return NextResponse.json({
      success: true,
      reply: result.reply,
      suggestedBooks: result.suggestedBooks || [],
    });
  } catch (error) {
    console.error("AI Chat API error:", error);
    return NextResponse.json(
      { error: "সার্ভারে সাময়িক সমস্যা হয়েছে, অনুগ্রহ করে আবার চেষ্টা করুন।" },
      { status: 500 }
    );
  }
}
