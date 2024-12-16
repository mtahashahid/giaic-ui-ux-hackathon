import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',  // Custom primary color
        secondary: '#FFC107', // Custom secondary color
        accent: '#FF5722',  // Accent color
        secondaryText: "#737373"
        // Add more custom colors as needed
      },
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'],  // Custom Google Font (Roboto)
      },
      spacing: {
        '128': '32rem',  // Custom spacing value (example)
        '144': '36rem',
      },
      fontSize: {
        'xxs': '0.65rem',  // Custom font size
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1)',  // Custom shadow
      },
      screens: {
        'xs': '475px',  // Custom screen size breakpoint
      },
    },
  },
  plugins: [],
} satisfies Config;
