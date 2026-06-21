import { skills } from "@/lib/data";

export default function Skills() {
  const entries = Object.entries(skills);
  return (
    <section id="skills" className="px-6 md:px-10 py-20 md:py-28 border-t border-hairline">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 md:mb-16">
          <div className="font-mono text-[12px] text-cyan mb-3">skills</div>
          <h2 className="font-display font-semibold text-2xl md:text-[32px] text-ink tracking-tight">
            The full toolkit.
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-px [&>*]:mb-px">
          {entries.map(([category, items]) => (
            <div key={category} className="bg-base border border-hairline p-6 md:p-7 break-inside-avoid">
              <h3 className="font-mono text-[12px] text-amber uppercase tracking-wide mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-[13px] text-ink-dim bg-panel border border-hairline px-2.5 py-1.5"
                  >
                    {item}
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
