/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "ui-sans-serif", "system-ui"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular"],
      },
      colors: {
        bg: "#070A12",
        panel: "#0B1020",
        panel2: "#0E1630",
        ink: "#D7E0FF",
        muted: "#9AA7C7",
        accent: "#7C5CFF",
        accent2: "#00D4FF",
        line: "#1B2756",
      },
      boxShadow: {
        neon: "0 0 0 1px rgba(124,92,255,0.35), 0 20px 80px rgba(0,0,0,0.6)",
        soft: "0 10px 50px rgba(0,0,0,0.55)",
      },
    },
  },
  plugins: [],
};
