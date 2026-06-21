import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="px-6 md:px-10 py-20 md:py-28 border-t border-hairline">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-[0.6fr_0.4fr] gap-10 md:gap-16 items-end">
          <div>
            <div className="font-mono text-[12px] text-cyan mb-3">get in touch</div>
            <h2 className="font-display font-semibold text-2xl md:text-[34px] text-ink tracking-tight leading-tight">
              Hiring for Lead Data Engineer
              <br />
              or Data Engineering Manager?
            </h2>
            <p className="mt-4 text-ink-dim text-[15.5px] max-w-md leading-relaxed">
              Open to roles in {profile.relocating.replace("Relocating to ", "")} and remote.
              Happy to talk architecture, team-building, or where GenAI actually moves the needle
              in a data platform.
            </p>
          </div>

          <div className="space-y-3 font-mono text-[14px]">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-between border border-hairline-bright px-4 py-3 text-ink hover:border-amber hover:text-amber transition-colors group"
            >
              <span>{profile.email}</span>
              <span className="text-ink-faint group-hover:text-amber">→</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-hairline-bright px-4 py-3 text-ink hover:border-amber hover:text-amber transition-colors group"
            >
              <span>{profile.linkedinDisplay}</span>
              <span className="text-ink-faint group-hover:text-amber">→</span>
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center justify-between border border-hairline-bright px-4 py-3 text-ink hover:border-amber hover:text-amber transition-colors group"
            >
              <span>{profile.phone}</span>
              <span className="text-ink-faint group-hover:text-amber">→</span>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11.5px] text-ink-faint">
          <span>© {new Date().getFullYear()} {profile.name} — Built with Next.js &amp; the Claude API</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
