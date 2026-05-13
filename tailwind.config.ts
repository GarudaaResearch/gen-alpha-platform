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
        "calm-teal": "#2D9CDB",
        "warm-amber": "#F2994A",
        "healing-sage": "#6FCF97",
        "soft-lavender": "#9B51E0",
        "crisis-alert": "#EB5757",
        "caution": "#F2C94C",
        "safe": "#27AE60",
        "background": "#F8F7F4",
        "surface": "#FFFFFF",
        "text-primary": "#1A1A2E",
        "text-secondary": "#64748B",
      },
      fontFamily: {
        lora: ["var(--font-lora)"],
        sans: ["var(--font-dm-sans)"],
        nunito: ["var(--font-nunito)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
