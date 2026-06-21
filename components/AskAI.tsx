"use client";

import { useState, useRef, useEffect } from "react";
import { aiPrompts, profile } from "@/lib/data";

type Msg = { role: "user" | "assistant"; content: string };

export default function AskAI() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send(text: string) {
    if (!text.trim() || loading) return;
    setError(null);
    const newMessages: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: messages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="ask" className="px-6 md:px-10 py-20 md:py-28 border-t border-hairline">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 md:mb-12">
          <div className="font-mono text-[12px] text-cyan mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            ask the ai
          </div>
          <h2 className="font-display font-semibold text-2xl md:text-[32px] text-ink tracking-tight">
            Ask anything about my work.
          </h2>
          <p className="mt-3 text-ink-dim text-[15px] max-w-xl">
            This runs on the Claude API, grounded in {profile.name.split(" ")[0]}&apos;s real experience —
            not a generic chatbot. Try a prompt below or type your own question.
          </p>
        </div>

        <div className="border border-hairline-bright bg-panel">
          {/* Quick prompts */}
          <div className="flex flex-wrap gap-2 p-4 md:p-5 border-b border-hairline">
            {aiPrompts.map((p) => (
              <button
                key={p.label}
                onClick={() => send(p.prompt)}
                disabled={loading}
                className="font-mono text-[12px] text-ink-dim border border-hairline px-3 py-1.5 hover:border-amber hover:text-amber transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Message area */}
          <div ref={scrollRef} className="h-[340px] md:h-[380px] overflow-y-auto p-5 md:p-6 space-y-5">
            {messages.length === 0 && !loading && (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="font-mono text-ink-faint text-[13px]">
                  <span className="text-amber">$</span> waiting for input
                  <span className="caret text-amber">_</span>
                </div>
              </div>
            )}

            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] md:max-w-[75%] px-4 py-3 text-[14.5px] leading-relaxed ${
                    m.role === "user"
                      ? "bg-amber/10 border border-amber-dim/50 text-ink"
                      : "bg-panel-raised border border-hairline text-ink-dim"
                  }`}
                >
                  {m.role === "assistant" && (
                    <div className="font-mono text-[10.5px] text-cyan mb-1.5 uppercase tracking-wide">
                      AI · grounded in resume
                    </div>
                  )}
                  <p className="whitespace-pre-wrap">{m.content}</p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-panel-raised border border-hairline px-4 py-3 text-[14px] text-ink-faint font-mono">
                  thinking<span className="caret">...</span>
                </div>
              </div>
            )}

            {error && (
              <div className="text-amber font-mono text-[13px] border border-amber-dim/50 bg-amber-dim/10 px-4 py-3">
                {error}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 p-4 md:p-5 border-t border-hairline"
          >
            <span className="font-mono text-amber text-[14px] shrink-0">›</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g. What's his deepest expertise — Kafka or Snowflake?"
              className="flex-1 bg-transparent text-ink text-[14.5px] placeholder:text-ink-faint outline-none font-body"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="font-mono text-[12.5px] text-base bg-amber px-4 py-2 hover:bg-amber/90 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
