export const PROFILE = {
  name: "Rohit Barik",
  role: "Data Analyst • M.Sc. Data Science @ FAU Erlangen–Nürnberg",
  location: "Nürnberg, Germany",
  email: "rohitbarik11@gmail.com",
  github: "https://github.com/Rohitbarikk",
  linkedin: "https://www.linkedin.com/in/rohitbarikk/",
  resume: "/resume.pdf", // put resume.pdf inside /public
  summary:
    "I’m a Data Science Master’s student at FAU (Nürnberg–Erlangen) with experience in forecasting, analytics, and planning models. I’ve built Anaplan models, automated reporting with Python/SQL, and turned business data into decisions teams can act on.",

  // LEFT side (professional only)
  vibeTags: ["Machine Learning", "Forecasting", "Analytics", "Anaplan", "Python", "SQL"],
};


// Put interests ONLY under the photo (right side)
export const HERO_CHIPS = [
  "📊 Data Analysis",
  "🎬 Video Editing",
  "⚽ Football",
  "🏸 Badminton",
];

// Languages section data
export const LANGUAGES = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Native" },
  { name: "German", level: "A2" }, // change to A1 if you prefer accuracy
];

// Keep skills as skills (cert removed)
export const SKILLS = [
  { name: "Python", level: "Strong" },
  { name: "SQL", level: "Strong" },
  { name: "Machine Learning", level: "Strong" },
  { name: "Pandas / NumPy", level: "Strong" },
  { name: "Data Visualization", level: "Strong" },
  { name: "Anaplan", level: "Strong" },
  { name: "Excel", level: "Strong" },
  { name: "Odoo", level: "Working" },
  { name: "Power BI", level: "Familiar" },
  { name: "Git/GitHub", level: "Strong" },
];

// EXPERIENCE (keep your correct order)
export const EXPERIENCE = [
  {
    company: "Vellore Institute of Technology (VIT), Vellore",
    title: "B.Tech — Computer Science Engineering (CGPA: 8.25)",
    place: "India",
    time: "2020 – 2024",
    bullets: ["Strong CS foundation: DSA, programming, and project work."],
  },
  {
    company: "Relanto Global Pvt. Ltd.",
    title: "Technical Intern (Associate Consultant – Financial Planning & SCM)",
    place: "Bengaluru, India",
    time: "Feb 2024 – Sep 2024",
    bullets: [
      "Designed Anaplan models integrating multi-source data.",
      "Built forecasting dashboards for IMAX planning and analysis.",
      "Used SQL, Excel and Java for model logic and data flows.",
    ],
  },
  {
    company: "Bryt Bazaar",
    title: "Data Analyst",
    place: "Bengaluru, India",
    time: "Sep 2024 – Mar 2025",
    bullets: [
      "Analyzed sales & product performance using Python/Jupyter and Odoo.",
      "Delivered weekly insights to stakeholders.",
      "Improved reporting workflows and reduced manual effort.",
    ],
  },
  {
    company: "FAU Erlangen–Nürnberg",
    title: "M.Sc. Data Science",
    place: "Nürnberg, Germany",
    time: "Oct 2025 – Present",
    bullets: ["Focused on applied ML, analytics, and real-world data projects."],
  },
];

// Projects stay as you already have (no tips text)
export const PROJECTS = [
  {
    title: "IMAX Financial Planning Model (Anaplan)",
    desc: "Optimized forecasting and resource planning model. Integrated multi-source data and built dashboards for analysis.",
    tags: ["Anaplan", "SQL", "Excel"],
    link: "https://github.com/Rohitbarikk",
  },
  {
    title: "Native Language Detection (Indian Currency)",
    desc: "Machine learning model to identify languages on Indian currency notes.",
    tags: ["Python", "ML", "Computer Vision"],
    link: "https://github.com/Rohitbarikk",
  },
  {
  title: "Corporate Risk Radar",
  desc: "Risk monitoring dashboard for corporate decision-making. Focused on patterns, anomalies, and indicators.",
  tags: ["Python", "Risk Analysis", "Visualization"],
  link: "https://github.com/Rohitbarikk/corporate-risk-radar",
  status: "In Progress",
},
{
  title: "IMDB Sentiment Analysis",
  desc: "Sentiment classification project analyzing movie reviews using NLP techniques.",
  tags: ["Python", "NLP", "Machine Learning"],
  link: "https://github.com/Rohitbarikk/Project1_IMDB_Sentiment",
  status: "In Progress",
},
];

export const CREATIVE_LAB = [
  {
    title: "Colors",
    year: "2024",
    thumb: "pride.jpeg",
    link: "https://vimeo.com/1164167922",
  },
  {
    title: "My Mind",
    year: "2024",
    thumb: "mymind.jpeg",
    link: "https://vimeo.com/1164170471",
  },
  {
    title: "My Day",
    year: "2024",
    thumb: "myday.jpeg",
    link: "https://vimeo.com/1164168934",
  },
];
