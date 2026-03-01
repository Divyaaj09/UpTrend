/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#6366F1",
        darkBg: "#0B1220",
        cardBg: "#111827",
        sidebarBg: "#0F172A",
        success: "#22C55E",
        danger: "#EF4444",
      },
    },
  },
  plugins: [],
};