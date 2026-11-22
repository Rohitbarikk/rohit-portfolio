
import { useEffect, useState } from "react";
import { PROFILE } from "../data";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "creative", label: "Creative" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handler = () => {
      let current = "home";

      for (const link of links) {
        const el = document.getElementById(link.id);
        if (!el) continue;

        if (el.getBoundingClientRect().top <= 120) {
          current = link.id;
        }
      }

      setActive(current);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <nav className="window px-4 py-3 flex items-center justify-between gap-3">
          <a
            href="#home"
            className="font-mono text-ink/90 hover:text-ink transition whitespace-nowrap"
          >
            rohit://portfolio
          </a>

          <div className="hidden md:flex items-center gap-2">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-3 py-2 rounded-xl text-sm border transition ${
                  active === link.id
                    ? "border-line bg-panel2 text-ink"
                    : "border-transparent text-muted hover:text-ink hover:border-line/50"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="badge hover:border-ink/30 hidden sm:inline-flex"
            >
              GitHub
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="badge hover:border-ink/30 hidden sm:inline-flex"
            >
              LinkedIn
            </a>

            <a
              href={PROFILE.creativePortfolio}
              target="_blank"
              rel="noreferrer"
              className="badge hover:border-ink/30 hidden sm:inline-flex"
            >
              Creative ↗
            </a>

            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noreferrer"
              className="badge hover:border-ink/30"
              style={{
                borderColor: "rgba(0,212,255,0.35)",
                background:
                  "linear-gradient(135deg, rgba(0,212,255,0.10), rgba(124,92,255,0.08))",
              }}
            >
              Resume ↗
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
