/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },
      borderWidth: {
        1: "1px",
      },
      boxShadow: {
        top: "0 -4px 6px -1px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        fade: "fadeIn .7s ease-in",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0.4 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
