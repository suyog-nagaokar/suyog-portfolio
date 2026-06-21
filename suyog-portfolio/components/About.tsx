import { education, certifications, awards } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-20 md:py-28 border-t border-hairline">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr] gap-10 md:gap-16">
          <div>
            <div className="font-mono text-[12px] text-cyan mb-3">about</div>
            <h2 className="font-display font-semibold text-2xl md:text-[32px] text-ink tracking-tight leading-tight">
              From migrating Oracle to Hadoop, to leading Kafka platforms a decade later.
            </h2>
          </div>

          <div className="space-y-6 text-ink-dim text-[15.5px] leading-relaxed">
            <p>
              I started as a Systems Engineer migrating TB-scale Oracle workloads to Hadoop at TCS in 2012.
              Thirteen years later, I&apos;m designing real-time Kafka platforms for fraud and reconciliation
              at a payments company processing transactions across Southeast Asia. The throughline is the same:
              data systems that are correct, fast, and boring in the way that matters &mdash; they don&apos;t wake
              anyone up at 3am.
            </p>
            <p>
              Along the way I&apos;ve led teams of up to 8 engineers through full platform re-architectures,
              cut multi-hour batch pipelines down to minutes, and built fraud systems that saved a major bank
              over half a million dollars in six months. I care as much about the people executing the roadmap
              as the roadmap itself &mdash; mentoring, code review, and clear ownership are not separate from
              the engineering, they&apos;re part of it.
            </p>
            <p>
              Today I lean on GenAI tooling &mdash; Claude, Cursor, ChatGPT &mdash; to compress design and
              delivery cycles, without skipping the governance and testing that enterprise data platforms demand.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <div className="font-mono text-[11px] text-ink-faint uppercase tracking-wide mb-2">Education</div>
                <div className="text-ink text-[14.5px]">{education.degree}</div>
                <div className="text-ink-faint text-[13px] mt-0.5">{education.school} &middot; {education.year}</div>
              </div>
              <div>
                <div className="font-mono text-[11px] text-ink-faint uppercase tracking-wide mb-2">Certifications</div>
                <ul className="space-y-1">
                  {certifications.slice(0, 3).map((c) => (
                    <li key={c} className="text-ink text-[13.5px] leading-snug">{c}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2">
              <div className="font-mono text-[11px] text-ink-faint uppercase tracking-wide mb-2">Recognition</div>
              <div className="flex flex-wrap gap-2">
                {awards.map((a) => (
                  <span
                    key={a}
                    className="font-mono text-[11.5px] text-ink-dim border border-hairline px-2.5 py-1"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
