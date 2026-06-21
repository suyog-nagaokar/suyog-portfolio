import Image from "next/image";
import { profile, heroStats } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-8 items-start">
          {/* Left: text */}
          <div className="fade-up">
            <div className="font-mono text-[13px] text-cyan flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan inline-block" />
              available for lead / manager roles
            </div>

            <h1 className="font-display font-semibold text-[2.5rem] leading-[1.05] md:text-[3.4rem] md:leading-[1.04] tracking-tight text-ink">
              Thirteen years making
              <br />
              sure the data is right
              <br />
              <span className="text-amber">before the money moves.</span>
            </h1>

            <p className="mt-6 text-ink-dim text-[16px] md:text-[17px] leading-relaxed max-w-xl">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#ask"
                className="inline-flex items-center gap-2 bg-amber text-base font-medium px-5 py-3 text-[14px] hover:bg-amber/90 transition-colors"
              >
                Ask the AI about my work →
              </a>
              <a
                href="/Suyog_Nagaokar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-hairline-bright px-5 py-3 text-[14px] text-ink-dim hover:text-ink hover:border-ink-dim transition-colors"
              >
                Download résumé
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[13px] text-ink-faint">
              <span>{profile.location}</span>
              <span className="text-hairline-bright">/</span>
              <span className="text-amber-dim">{profile.relocating}</span>
            </div>
          </div>

          {/* Right: photo */}
          <div className="flex justify-center md:justify-end fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative">
              <div className="absolute -inset-3 border border-hairline pointer-events-none" />
              <div className="relative w-[240px] h-[240px] md:w-[280px] md:h-[280px] overflow-hidden">
                <Image
                  src="/headshot.png"
                  alt="Suyog Nagaokar"
                  fill
                  className="object-cover grayscale-[15%]"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-panel-raised border border-hairline-bright px-3 py-2 font-mono text-[11px] text-ink-dim">
                <span className="text-amber">13yr</span> · data eng
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline border border-hairline">
          {heroStats.map((s) => (
            <div key={s.label} className="bg-base px-5 py-6">
              <div className="font-display font-semibold text-2xl md:text-[28px] text-ink tracking-tight">
                {s.value}
              </div>
              <div className="mt-1.5 font-mono text-[11.5px] text-ink-faint leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
