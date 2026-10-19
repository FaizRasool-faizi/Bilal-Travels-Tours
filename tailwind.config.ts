import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0B1E34",
          900: "#102D4F", // Royal Navy (Primary)
          800: "#163A64",
          700: "#1E4C80",
        },
        globe: {
          50: "#E8F3FA",
          100: "#D1E7F5",
          600: "#176B9B", // Globe Blue
          700: "#13547A",
        },
        gold: {
          100: "#F6EEDF",
          200: "#EBDDBF",
          400: "#C8A35E",
          500: "#B58B45", // Champagne Gold (Accent)
          600: "#9F7635", // Gold Hover
          700: "#7C5A24",
        },
        ivory: {
          50: "#FDFCF9",
          100: "#FAF8F3", // Warm Ivory Background
          200: "#F2EDE1",
        },
        charcoal: {
          800: "#2B3746",
          900: "#202B38", // Main typography
        },
        slate: {
          500: "#7A8794",
          600: "#5F6B78", // Subtitles & metadata
        },
        border: {
          muted: "#E3DED3",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "DM Serif Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(16, 45, 79, 0.06)",
        card: "0 10px 30px -4px rgba(16, 45, 79, 0.08)",
        hover: "0 20px 40px -6px rgba(16, 45, 79, 0.14)",
        "gold-glow": "0 0 25px rgba(181, 139, 69, 0.25)",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
    },
  },
  plugins: [],
};

export default config;
