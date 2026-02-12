const skills = [
  { title: "Python", note: "analysis • automation • notebooks", icon: "⌘" },
  { title: "SQL", note: "joins • modeling • reporting", icon: "⛁" },
  { title: "Machine Learning", note: "model building • evaluation • iteration", icon: "⚙" },
  { title: "Statistics", note: "regression • probability • intuition", icon: "∿" },
  { title: "Data Visualization", note: "clear charts • storytelling", icon: "▦" },
  { title: "Forecasting", note: "trends • seasonality • planning", icon: "⟲" },
  { title: "Anaplan", note: "planning models • dashboards", icon: "◎" },
  { title: "Excel", note: "analysis • financial models", icon: "▤" },
  { title: "Power BI", note: "dashboard basics • reporting", icon: "◧" },
  { title: "Odoo", note: "sales & product workflows", icon: "◉" },
  { title: "Git/GitHub", note: "version control • collaboration", icon: "⎇" },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-10">
      <div className="window p-6">
        <div className="windowBar">
          <span className="font-mono">skills</span>
          <span className="kbd">core stack</span>
        </div>

        <div className="pt-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Skills<span style={{ color: "var(--accent)" }}>.</span>
          </h2>

          <p className="text-muted mt-2">
            Tools and areas I actively use in data projects.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((s) => (
              <div
                key={s.title}
                className="bg-panel2 border border-line rounded-2xl p-5 hover:shadow-neon transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold">{s.title}</div>
                    <div className="text-muted text-sm mt-1">{s.note}</div>
                  </div>

                  <div
                    className="w-11 h-11 rounded-2xl border border-line flex items-center justify-center text-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(124,92,255,0.18), rgba(0,212,255,0.10))",
                    }}
                  >
                    {s.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
