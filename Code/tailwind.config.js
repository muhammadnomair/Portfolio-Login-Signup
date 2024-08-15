/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
    extend: {
      colors: {
        "primary-red": "#D42645",
        "primary-edit": "#4A4A4A",
        "primary-fand": "#A33A8E",
        "primary-space": "#11175D",
        "primary-warning": "#EA5455",
        "primary-blu": "#4A4C01",
        "primary-account-desc-blu": "[rgba(17,23,93,0.5)]",
      },
      fontWeight: {
        light: 300,
        normal: 400,
        bold: 700,
        extrabold: 800,
      },
      fontSize: {
        "primary-account-heading": "34px",
        "primary-account-desc": "20px",
        "dashboard-main-heading": "32px",
        "dashboard-main-desc": "24px",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
  },
  plugins: [],
};
