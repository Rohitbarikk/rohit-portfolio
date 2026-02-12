import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { PROFILE } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-10">
      <div className="window p-6">
        <div className="windowBar">
          <span className="font-mono">contact</span>
          <span className="kbd">Nürnberg</span>
        </div>

        <div className="pt-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Contact<span style={{ color: "var(--accent)" }}>.</span>
          </h2>

          <p className="text-muted mt-2">
            Available for Werkstudent roles.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <a
              className="badge hover:border-ink/30 justify-center"
              href={`mailto:${PROFILE.email}`}
            >
              <FaEnvelope /> Email
            </a>

            <a
              className="badge hover:border-ink/30 justify-center"
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              className="badge hover:border-ink/30 justify-center"
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub
            </a>

            <a
  className="badge hover:border-ink/30 justify-center"
  href={PROFILE.resume}
  target="_blank"
  rel="noreferrer"
>
  <FaFileAlt /> Resume
</a>

          </div>

          <div className="mt-6 text-sm text-muted">
            <div>📍 {PROFILE.location}</div>
            
            </div>
          </div>
        </div>
    </section>
  );
}
