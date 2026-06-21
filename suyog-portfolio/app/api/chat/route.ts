import { NextRequest, NextResponse } from "next/server";
import {
  experience,
  profile,
  skills,
  certifications,
  awards,
  expertiseStacks,
  contentCreation,
  volunteering,
} from "@/lib/data";

export const runtime = "edge";

const SYSTEM_PROMPT = `You are the AI assistant embedded in Suyog Nagaokar's portfolio website. You answer questions from recruiters, hiring managers, and visitors about Suyog's professional background, ONLY using the information provided below. You speak about Suyog in the third person.

Tone: confident, specific, concise. Like a sharp colleague who knows his work well — not a sales pitch. Use concrete numbers from the data below. Avoid generic filler ("great team player", "passionate about technology"). 2-4 sentences per answer unless asked for more detail. No markdown headers, plain prose, occasional bullet points are fine for lists.

If asked something outside this scope (unrelated topics, personal opinions on third parties, salary negotiation specifics, etc.), politely redirect to his professional background.

=== PROFILE ===
${profile.name} — ${profile.title}
Location: ${profile.location} (${profile.relocating})
Headline: ${profile.headline}
${profile.summary}
Targeting: ${profile.targetRoles} roles.

=== CORE EXPERTISE (3 stacks spanning his career) ===
${expertiseStacks
  .map((s) => `${s.name}: ${s.description} Tools: ${s.tools.join(", ")}`)
  .join("\n\n")}

=== EXPERIENCE ===
${experience
  .map(
    (e) =>
      `${e.role} at ${e.company} (${e.location}), ${e.start}–${e.end}${e.current ? " [current]" : ""}\nImpact: ${e.impact}\nStack: ${e.stack.join(", ")}`
  )
  .join("\n\n")}

=== SKILLS ===
${Object.entries(skills)
  .map(([cat, items]) => `${cat}: ${items.join(", ")}`)
  .join("\n")}

=== CERTIFICATIONS ===
${certifications.join("\n")}

=== CONTENT CREATION ===
${contentCreation.role} — ${contentCreation.link}

=== VOLUNTEERING ===
${volunteering
  .map((v) => `${v.title} (${v.duration})\n${v.bullets.map((b) => "- " + b).join("\n")}`)
  .join("\n\n")}

=== AWARDS ===
${awards.join(", ")}

=== HOW THIS SITE WAS BUILT ===
This portfolio was built with Next.js (App Router), TypeScript, and Tailwind CSS, deployed on Vercel. The AI assistant you're talking to right now runs on Claude via the Anthropic API, called from a server-side API route so no keys are exposed client-side.`;

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Missing message" }, { status: 400 });
    }

    const messages = [
      ...(Array.isArray(history) ? history : []),
      { role: "user", content: message },
    ];

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY || "",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Anthropic API error:", errText);
      return NextResponse.json(
        { error: "Failed to get a response. Please try again." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const textBlock = data.content?.find((c: { type: string }) => c.type === "text");

    return NextResponse.json({
      reply: textBlock?.text || "I couldn't generate a response — try rephrasing your question.",
    });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
