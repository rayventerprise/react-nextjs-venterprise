import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Kept from the original venterprise.io palette
        primary: "#d02b2b",
        secondary: "#ba2020",
        ink: "#0b0b0f",
      },
      fontFamily: {
        display: ["var(--font-righteous)", "cursive"],
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1080px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "gradient-pan": "gradient-pan 6s ease infinite",
        float: "float 6s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
