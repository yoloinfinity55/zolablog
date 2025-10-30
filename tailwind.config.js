export default {
  content: [
    "./templates/**/*.{html,js,md,toml}",
    "./content/**/*.{html,md}",
    "./themes/**/*.{html,js,md,toml}"
  ],
  darkMode: 'class', // Enables toggling dark mode via a 'dark' class on <html> or <body>
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",   // blue
        secondary: "#f59e0b", // amber
        accent: "#10b981",    // emerald
        neutral: "#f3f4f6",   // light gray
        darkBg: "#1f2937",    // dark background
        darkText: "#f9fafb"   // light text for dark mode
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['Fira Code', 'ui-monospace', 'monospace']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
};
