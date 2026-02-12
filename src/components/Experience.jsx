import { EXPERIENCE } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-14">
      <div className="window p-8">
        <div className="windowBar">
          <span className="font-mono">experience.timeline</span>
          <span className="kbd">chronological</span>
        </div>

        <div className="pt-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Experience<span style={{ color: "var(--accent)" }}>.</span>
          </h2>

          <p className="text-muted mt-3 text-base md:text-lg">
            Education + work in the order it happened.
          </p>

          <div className="relative mt-12">
            {/* vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-line" />

            <div className="space-y-12">
              {EXPERIENCE.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative md:grid md:grid-cols-2 md:gap-10`}
                  >
                    {/* Dot */}
                    <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full"
                         style={{ background: "var(--accent)" }} />

                    {/* Content */}
                    <div className={`${isLeft ? "md:pr-12" : "md:pl-12 md:col-start-2"}`}>
                      <div className="bg-panel2 border border-line rounded-2xl p-6 hover:border-line/70 transition">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <h3 className="text-lg md:text-xl font-semibold">
                            {item.company}
                          </h3>
                          <span className="kbd">{item.time}</span>
                        </div>

                        <div className="text-ink/90 mt-2 font-medium">
                          {item.title}
                        </div>

                        <div className="text-muted text-sm mt-1">
                          {item.place}
                        </div>
                        {item.time.includes("Present") && (
  <span className="ml-2 text-xs px-2 py-1 rounded-full border border-line bg-panel">
    Current
  </span>
)}


                        <ul className="mt-4 space-y-2 list-disc pl-5 text-sm md:text-base text-ink/90">
                          {item.bullets.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
