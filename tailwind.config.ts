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
        background: "#000000",
        foreground: "#E5E4E2",
        gold: {
          50: '#fcfaf5',
          100: '#f8f4e9',
          200: '#efe6ce',
          300: '#e4d2a9',
          400: '#dbbf82',
          500: '#d4af37',
          600: '#c5a059',
          700: '#a37c22',
          800: '#856420',
          900: '#725421',
          950: '#412d0d',
        },
        zinc: {
          50: '#fcfcfc',
          100: '#f5f5f5',
          200: '#e5e4e2',
          300: '#d4d4d4',
          400: '#c0c0c0',
          500: '#a3a3a3',
          600: '#525252',
          700: '#262626',
          800: '#111111',
          900: '#050505',
          950: '#000000',
        },
        cred: {
          black: "#000000",
          dark: "#050505",
          card: "#111111",
          silver: "#c0c0c0",
          gold: "#d4af37",
          accent: "#c5a059",
          muted: "#e5e4e2",
          border: "#262626",
          highlight: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "card-rotate": "cardRotate 8s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(255,255,255,0.1)" },
          "100%": { boxShadow: "0 0 40px rgba(255,255,255,0.2)" },
        },
        cardRotate: {
          "0%, 100%": { transform: "rotateY(0deg) rotateX(0deg)" },
          "25%": { transform: "rotateY(5deg) rotateX(2deg)" },
          "50%": { transform: "rotateY(0deg) rotateX(0deg)" },
          "75%": { transform: "rotateY(-5deg) rotateX(-2deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
