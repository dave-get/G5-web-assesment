import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "myblue": "#264FAD",
        "txtdark1": "#434343",
        "txtdark2": "#3C3C3C",
        "txtgray1": "#565656",
        "txtgray2": "#9C9C9C",
        "txtgray3": "#737373",
      },
      fontFamily:{
        epilogue: ['Epilogue', 'sans-serif']
      },
    },
  },
  plugins: [],
};
export default config;
