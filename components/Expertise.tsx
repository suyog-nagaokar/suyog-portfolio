import { expertiseStacks } from "@/lib/data";

export default function Expertise() {
  return (
    <section className="px-6 md:px-10 py-20 md:py-28 border-t border-hairline">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 md:mb-16">
          <div className="font-mono text-[12px] text-cyan mb-3">expertise</div>
          <h2 className="font-display font-semibold text-2xl md:text-[32px] text-ink tracking-tight">
            Three stacks, 13+ years.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline">
          {expertiseStacks.map((stack) => (
            <div key={stack.name} className="bg-base p-6 md:p-7 flex flex-col">
              <div className="w-8 h-px bg-amber mb-4" aria-hidden="true" />
              <h3 className="font-display font-semibold text-[18px] text-ink mb-3">
                {stack.name}
              </h3>
              <p className="text-ink-dim text-[14px] leading-relaxed mb-5 flex-1">
                {stack.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {stack.tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-[11px] text-cyan-dim border border-cyan-dim/40 px-2 py-0.5"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
