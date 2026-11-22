
import { PROFILE } from "../data";

export default function CreativeLab() {
  return (
    <section id="creative" className="mx-auto max-w-7xl px-4 py-10">
      <div className="window p-6">
        <div className="windowBar">
          <span className="font-mono">creative_work</span>
          <span className="kbd">also me</span>
        </div>

        <div className="pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Beyond the data
              <span style={{ color: "var(--accent)" }}>.</span>
            </h2>

            <p className="text-muted mt-3 max-w-2xl leading-relaxed">
              I also create videos and explore visual storytelling, UX, and
              design. Take a look at my creative projects and visual work.
            </p>
          </div>

          <a
            href={PROFILE.creativePortfolio}
            target="_blank"
            rel="noreferrer"
            className="badge hover:border-ink/30 whitespace-nowrap self-start md:self-center"
            style={{
              borderColor: "rgba(0,212,255,0.35)",
              background:
                "linear-gradient(135deg, rgba(0,212,255,0.10), rgba(124,92,255,0.08))",
            }}
          >
            Explore my creative portfolio ↗
          </a>
        </div>
      </div>
    </section>
  );
}
