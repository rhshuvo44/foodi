/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#39db4a",
        red: "#ff6868",
        secondary: "#555",
        primary: "#fcfcfc",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fcfcfc",
          secondary: "#555",
          accent: "#39db4a",
          neutral: "#ff6868",
          "base-100": "#ffffff",
          info: "#ffffff",
          success: "#00ffff",
          warning: "#ffffff",
          error: "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
