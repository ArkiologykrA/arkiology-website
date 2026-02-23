import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ark: {
          black: '#0A0A0A',
          dark: '#111111',
          darker: '#0D0D0D',
          gray: '#1A1A1A',
          border: '#222222',
          muted: '#555555',
          light: '#999999',
          white: '#FAFAFA',
          accent: '#3B82F6',
          'accent-dark': '#2563EB',
          green: '#22C55E',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
