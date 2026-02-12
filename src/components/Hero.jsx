import { motion } from "framer-motion";
import rohitImg from "../assets/rohit.jpeg";
import { PROFILE, HERO_CHIPS } from "../data";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid lg:grid-cols-2 gap-4 items-stretch">
        
        {/* LEFT SIDE */}
        <div className="window p-6">
          <div className="windowBar">
            <span className="font-mono">rohit.boot</span>
            <span className="kbd">FAU • Nürnberg</span>
          </div>

          <div className="p-2 pt-6">
            <p className="font-mono text-muted">Hi, I’m</p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">

              {PROFILE.name}
              <span style={{ color: "var(--accent)" }}>.</span>
            </h1>

            <motion.div
              className="mt-3 h-[3px] rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--accent), var(--accent2), var(--accent))",
              }}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "70%", opacity: 1 }}
              transition={{ duration: 0.8 }}
            />

<div className="mt-4 text-xl md:text-2xl">
  <div className="text-ink">
    Data Analyst • M.Sc. Data Science
  </div>
  <div className="text-muted">
    FAU Erlangen–Nürnberg
  </div>
</div>



            <p className="text-muted mt-2">
              📍 {PROFILE.location}
            </p>

            <p className="mt-5 text-muted leading-relaxed text-[15px] md:text-[16px]">
              I build forecasting, analytics, and ML solutions that turn complex
              data into practical decisions.
            </p>

            {/* BUTTONS ONLY — NO TAGS */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#portfolio" className="badge hover:border-ink/30">
                <span style={{ color: "var(--accent)" }}>▶</span> See Projects
              </a>

              <a href="#contact" className="badge hover:border-ink/30">
                Contact →
              </a>

              <a
                className="badge hover:border-ink/30"
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="window p-6">
          <div className="windowBar">
            <span className="font-mono">rohit.profile</span>
            <span className="font-mono text-muted">creative + data</span>
          </div>

          <div className="pt-8 flex flex-col items-center">
            <motion.img
              src={rohitImg}
              alt="Rohit"
className="w-72 h-72 md:w-[360px] md:h-[360px] object-cover rounded-full border border-line shadow-soft"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.8, repeat: Infinity }}
            />

            {/* ONLY UNDER PHOTO */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center max-w-xl">
              {HERO_CHIPS.map((chip, i) => (
                <motion.span
                  key={chip}
                  className="badge"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  {chip}
                </motion.span>
              ))}
            </div>

            <p className="text-center text-muted mt-6">
              “Serious about data. Not boring about it.”
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
