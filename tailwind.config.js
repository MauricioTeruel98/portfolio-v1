/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#627cef",
          "secondary": "#976ccc",
          "accent": "#a0bce5",
          "neutral": "#161e29",
          "base-100": "#10151D",
          "info": "#1cc7f2",
          "success": "#84cc16",
          "warning": "#f5b905",
          "error": "#dc2626",
        },
      }
    ]
  },
  plugins: [require("daisyui")],
}

