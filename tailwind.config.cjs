/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Light theme semantic palette
        primary:            "#FAFBFF",      // page background
        secondary:          "#64748B",      // muted text
        tertiary:           "#FFFFFF",      // card surface
        surface:            "#FFFFFF",
        "surface-elevated": "#F8FAFC",
        "surface-subtle":   "#F1F5F9",

        // Indigo accent system (remapped from gold)
        gold:               "#6366F1",      // primary accent → indigo
        "gold-light":       "#818CF8",      // lighter accent
        "gold-dim":         "rgba(99,102,241,0.08)",

        // Violet
        "purple-accent":    "#8B5CF6",

        // Text
        "white-100":        "#0F172A",      // main text (now dark)
        "black-100":        "#F1F5F9",
        "black-200":        "#E2E8F0",
        border:             "#E2E8F0",
        "border-strong":    "#CBD5E1",
      },
      fontFamily: {
        sans:          ["'Inter'", "'Plus Jakarta Sans'", "sans-serif"],
        display:       ["'Inter'", "'Plus Jakarta Sans'", "sans-serif"],
        mono:          ["'Space Mono'", "monospace"],
        "mono-custom": ["'Space Mono'", "monospace"],
      },
      boxShadow: {
        card:          "0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.04)",
        "card-hover":  "0 4px 16px rgba(0,0,0,0.08), 0 0 0 1px rgba(99,102,241,0.15)",
        gold:          "0 0 30px rgba(99,102,241,0.2)",
        "gold-sm":     "0 0 12px rgba(99,102,241,0.12)",
        indigo:        "0 4px 14px rgba(99,102,241,0.25)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        scrollDot: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "20%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { transform: "translateY(200%)", opacity: "0" },
        },
        marqueeLTR: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "50%": { transform: "translate(-3%, 3%)" },
          "90%": { transform: "translate(-2%, 4%)" },
        },
      },
      animation: {
        shimmer:   "shimmer 2.5s linear infinite",
        floatY:    "floatY 5s ease-in-out infinite",
        scrollDot: "scrollDot 1.6s ease-in-out infinite",
        marquee:   "marqueeLTR 20s linear infinite",
        fadeUp:    "fadeUp 0.5s ease-out forwards",
        grain:     "grain 8s steps(10) infinite",
      },
    },
  },
  plugins: [],
};
