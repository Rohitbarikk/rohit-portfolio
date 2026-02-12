import { PROFILE, LANGUAGES } from "../data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-10">
      <div className="window p-6">
        <div className="windowBar">
          <span className="font-mono">about_me.txt</span>
          <span className="kbd">FAU • Data Science</span>
        </div>

        <div className="pt-6 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold">
              About<span style={{ color: "var(--accent)" }}>.</span>
            </h2>
            <p className="text-muted mt-3 leading-relaxed">
              {PROFILE.summary}
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="bg-panel2 border border-line rounded-2xl p-5">
                <div className="font-semibold">Video Editing</div>
                <div className="text-muted mt-2">
                  CapCut + Premiere Pro — rhythm cuts, clean transitions, cinematic pacing.
                </div>
              </div>

              <div className="bg-panel2 border border-line rounded-2xl p-5">
                <div className="font-semibold">Sports</div>
                <div className="text-muted mt-2">
                  Football + badminton — discipline, consistency, team energy.
                </div>
              </div>

              <div className="bg-panel2 border border-line rounded-2xl p-5 sm:col-span-2">
                <div className="font-semibold">What I enjoy building</div>
                <div className="text-muted mt-2">
                  Systems that make data usable: dashboards, planning models, and ML pipelines.
                </div>
              </div>
            </div>
          </div>

          {/* Languages card */}
          <div className="bg-panel2 border border-line rounded-2xl p-5">
            <div className="font-semibold">Languages</div>
            <div className="mt-3 space-y-2">
              {LANGUAGES.map((l) => (
                <div key={l.name} className="flex items-center justify-between">
                  <span>{l.name}</span>
                  <span className="kbd">{l.level}</span>
                </div>
              ))}
            </div>

            <div className="text-sm text-muted mt-4">
              Currently based in Nürnberg.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
