import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-10 py-20 md:py-28 border-t border-hairline">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-12 md:mb-16 flex-wrap gap-4">
          <div>
            <div className="font-mono text-[12px] text-cyan mb-3">experience</div>
            <h2 className="font-display font-semibold text-2xl md:text-[32px] text-ink tracking-tight">
              Eleven roles. One log.
            </h2>
          </div>
          <div className="font-mono text-[12px] text-ink-faint">
            2012 — present &middot; Mumbai · Warsaw · Bangkok
          </div>
        </div>

        <div className="relative">
          {/* vertical rail */}
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-hairline-bright" aria-hidden="true" />

          <div className="space-y-0">
            {experience.map((job) => (
              <article key={`${job.company}-${job.start}`} className="relative pl-8 md:pl-10 py-7 border-b border-hairline last:border-b-0">
                <div
                  className={`absolute left-0 top-9 w-[15px] h-[15px] md:w-[19px] md:h-[19px] rounded-full border-2 ${
                    job.current ? "border-amber bg-amber/20" : "border-hairline-bright bg-base"
                  }`}
                  aria-hidden="true"
                >
                  {job.current && (
                    <span className="absolute inset-0 rounded-full bg-amber/40 animate-ping" />
                  )}
                </div>

                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-display font-semibold text-[18px] md:text-[20px] text-ink">
                      {job.role}
                      <span className="text-ink-faint font-normal"> &middot; {job.company}</span>
                    </h3>
                    <div className="font-mono text-[12px] text-ink-faint mt-1">{job.location}</div>
                  </div>
                  <div className="font-mono text-[12.5px] text-ink-dim whitespace-nowrap">
                    {job.start} &mdash; {job.end}
                    {job.current && <span className="ml-2 text-amber">● current</span>}
                  </div>
                </div>

                {job.highlight && (
                  <div className="mb-3 inline-block font-mono text-[12.5px] text-amber bg-amber-dim/10 border border-amber-dim/40 px-2.5 py-1">
                    ↳ {job.highlight}
                  </div>
                )}

                <ul className="space-y-1.5 text-ink-dim text-[14.5px] leading-relaxed">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="text-ink-faint mt-[7px] w-1 h-1 rounded-full bg-ink-faint shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] text-cyan-dim border border-cyan-dim/40 px-2 py-0.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
