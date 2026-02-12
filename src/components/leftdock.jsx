import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { PROFILE } from "../data";

const items = [
  { icon: FaGithub, label: "GitHub", href: PROFILE.github, external: true },
  { icon: FaLinkedin, label: "LinkedIn", href: PROFILE.linkedin, external: true },
  { icon: FaEnvelope, label: "Email", href: `mailto:${PROFILE.email}`, external: false },
  { icon: FaFileAlt, label: "Resume", href: "/resume.pdf", external: true },
];

export default function Leftdock() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
      {items.map((it) => {
        const Icon = it.icon;
        return (
          <a
            key={it.label}
            href={it.href}
            target={it.external ? "_blank" : undefined}
            rel={it.external ? "noreferrer" : undefined}
            className="
              group flex items-center gap-3
              rounded-2xl border border-line
              bg-panel2/95 backdrop-blur
              px-3 py-3
              shadow-soft
              hover:shadow-neon hover:border-line/80
              transition
            "
            aria-label={it.label}
            title={it.label}
          >
            {/* ICON: always visible */}
            <span
              className="
                w-11 h-11 rounded-2xl
                flex items-center justify-center
                border border-line
                bg-bg/50
                text-ink
                group-hover:border-line/80
                transition
              "
            >
              <Icon size={20} />
            </span>

            {/* LABEL: hidden until hover */}
            <span
              className="
                max-w-0 overflow-hidden whitespace-nowrap
                opacity-0
                group-hover:max-w-[120px]
                group-hover:opacity-100
                transition-all duration-300
                text-sm text-ink/80
              "
            >
              {it.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
