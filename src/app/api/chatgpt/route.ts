import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import { NextResponse } from "next/server";
import { defaultAnswer } from "@/utils/constants";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    const { text } = await generateText({
      model: openai("gpt-3.5-turbo"),
      system: defaultAnswer,
      prompt: message,
    });

    return NextResponse.json({ success: true, text });
  } catch (error) {
    console.error("Error generating text:", error);

    return NextResponse.json(
      { success: false, error: "Failed to generate text" },
      { status: 500 }
    );
  }
}
