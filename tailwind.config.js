/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fcfcfc",
          secondary: "#555",
          accent: "#39db4a",
          neutral: "#ff6868",
          "base-100": "#fff",
          info: "#fafafa",
          success: "#00ffff",
          warning: "#fff",
          error: "#ff6868",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
