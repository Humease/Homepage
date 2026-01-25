import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        "primary-navy": "var(--primary-navy)",
        accent: "var(--accent)",
        "accent-mid": "var(--accent-mid)",
        "accent-soft": "var(--accent-soft)",
        "accent-light": "var(--accent-light)",
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "var(--radius-card, 1.5rem)",
        button: "var(--radius-button, 0.875rem)",
      },
      boxShadow: {
        glass: "var(--glass-shadow)",
        soft: "0 8px 32px rgba(30, 58, 95, 0.08)",
        glow: "0 0 40px -10px rgba(77, 210, 255, 0.4)",
      },
      transitionDuration: {
        motion: "var(--motion-duration, 0.4s)",
      },
      transitionTimingFunction: {
        motion: "var(--motion-ease)",
      },
    },
  },
  plugins: [],
};

export default config;
