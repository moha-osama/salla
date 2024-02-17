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
    },
    fontFamily: {
      dinbold: "DIN Next LT Arabic Bold",
      dinmid: "DIN Next LT Arabic Medium",
      dinreg: "DIN Next LT Arabic Regular",
      dinlight: "DIN Next LT Arabic Light",
    },
  },
  plugins: [],
};
export default config;
