/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0b0d10",
          800: "#11141a",
          700: "#181b22",
          600: "#1f232c",
          500: "#262a34",
        },
        paper: {
          900: "#f7f5f2",
          800: "#f1ede8",
          700: "#e8e2db",
        },
        accent: {
          DEFAULT: "#6ea8fe",
          500: "#6ea8fe",
          400: "#84b4ff",
          600: "#4f87e6",
          700: "#3a6fc0",
          soft: "rgba(110, 168, 254, 0.12)",
        },
        line: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          dark: "rgba(0, 0, 0, 0.08)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        card: "0 20px 50px -20px rgba(0, 0, 0, 0.45)",
        glow: "0 0 40px -10px rgba(110, 168, 254, 0.45)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};