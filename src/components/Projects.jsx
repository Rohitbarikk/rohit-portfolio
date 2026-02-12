import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-4 py-10">
      <div className="window p-6">
        <div className="windowBar">
          <span className="font-mono">portfolio_grid</span>
          <span className="kbd">selected work</span>
        </div>

        <div className="pt-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Portfolio<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
          <p className="text-muted mt-2">
            A few projects that represent how I think and build.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROJECTS.map((p) => (
              <div
                key={p.title}
                className="bg-panel2 border border-line rounded-2xl p-5 hover:shadow-neon transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="font-semibold text-lg leading-snug">
                    {p.title}
                  </div>

                  {p.status ? <span className="kbd">{p.status}</span> : null}
                </div>

                <p className="text-muted mt-2 text-sm leading-relaxed">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="kbd">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="badge hover:border-ink/30"
                  >
                    Code →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
