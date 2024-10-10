/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue:"#2997FF",
        gray : {
          DEFAULT:"#86868b",
          100:"#94928d",
          200:"#afafaf",
          300:"#42424570",
        },
        zinc:"#101010",
      },
      borderWidth: {
        '1': '1px', 
      },
      boxShadow: {
        'top': '0 -4px 6px -1px rgba(0, 0, 0, 0.4)', 
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-down': 'slide-down 0.8s ease-out forwards'
      }
    },
  },
  plugins: [],
};

