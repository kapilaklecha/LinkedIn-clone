/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: { max: "1279px" },

      lg: { max: "1023px" },

      md: { max: "920px" },

      mdmin: { min: "920px" },

      sm: { max: "639px" },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#0A66C2",
        secondary: "#5f6774",
        danger: "#e3342f",
        hover: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
