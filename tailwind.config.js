/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#22c55e",
        dark: "#1e293b",
        accent: "#f1f5f9",
        muted: "#64748b",
      },
      borderRadius: {
        'full': '9999px',
      },
      boxShadow: {
        'btn': '0 2px 8px rgba(34,197,94,0.08)',
        'btn-hover': '0 4px 16px rgba(34,197,94,0.16)',
      },
      transitionProperty: {
        'btn': 'background, color, box-shadow, transform',
      },
      scale: {
        '105': '1.05',
      },
      spacing: {
        'section': '6rem', // for large vertical gaps
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '4rem',
          xl: '6rem',
        },
      },
      fontWeight: {
        bold: 700,
        extrabold: 800,
      },
    },
  },
  plugins: [],
}; 