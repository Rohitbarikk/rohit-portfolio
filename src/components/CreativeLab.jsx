import { CREATIVE_LAB } from "../data";

function thumbUrl(file) {
  return new URL(`../assets/creative/${file}`, import.meta.url).toString();
}

export default function CreativeLab() {
  return (
    <section id="creative" className="mx-auto max-w-7xl px-4 py-10">
      <div className="window p-6">
        <div className="windowBar">
          <span className="font-mono">creative_work</span>
          <span className="kbd">selected</span>
        </div>

        <div className="pt-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Creative Work<span style={{ color: "var(--accent)" }}>.</span>
          </h2>

          <p className="text-muted mt-2">
            Short-form edits showcasing pacing, rhythm, and visual storytelling.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CREATIVE_LAB.map((video) => (
              <a
                key={video.title}
                href={video.link}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-2xl border border-line bg-panel2 hover:shadow-neon transition"
              >
                <img
                  src={thumbUrl(video.thumb)}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-[1.03] transition"
                />

                <div className="p-4 flex items-center justify-between">
                  <div className="font-semibold">{video.title}</div>
                  <span className="badge">Watch ↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
