import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-10 py-20 md:py-28 border-t border-hairline">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-12 md:mb-16 flex-wrap gap-4">
          <div>
            <div className="font-mono text-[12px] text-cyan mb-3">experience</div>
            <h2 className="font-display font-semibold text-2xl md:text-[32px] text-ink tracking-tight">
              13+ years, one log.
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
              <article
                key={`${job.company}-${job.start}`}
                className="relative pl-8 md:pl-10 py-5 border-b border-hairline last:border-b-0"
              >
                <div
                  className={`absolute left-0 top-6 w-[15px] h-[15px] md:w-[19px] md:h-[19px] rounded-full border-2 ${
                    job.current ? "border-amber bg-amber/20" : "border-hairline-bright bg-base"
                  }`}
                  aria-hidden="true"
                >
                  {job.current && (
                    <span className="absolute inset-0 rounded-full bg-amber/40 animate-ping" />
                  )}
                </div>

                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
                  <h3 className="font-display font-semibold text-[16.5px] md:text-[17.5px] text-ink">
                    {job.role}
                    <span className="text-ink-faint font-normal"> &middot; {job.company}</span>
                  </h3>
                  <div className="font-mono text-[12px] text-ink-faint whitespace-nowrap">
                    {job.start} &mdash; {job.end}
                    {job.current && <span className="ml-2 text-amber">● current</span>}
                  </div>
                </div>

                <p className="text-ink-dim text-[14px] leading-relaxed mb-2.5 max-w-3xl">
                  {job.impact}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10.5px] text-cyan-dim border border-cyan-dim/40 px-1.5 py-0.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/Suyog_Nagaokar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[13px] text-ink-dim border border-hairline-bright px-5 py-2.5 hover:text-amber hover:border-amber transition-colors"
          >
            Full résumé for complete role details →
          </a>
        </div>
      </div>
    </section>
  );
}
