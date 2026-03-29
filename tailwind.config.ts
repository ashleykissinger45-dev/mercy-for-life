import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f7fa',
          100: '#e7edf4',
          200: '#cfdae9',
          300: '#b8c9de',
          400: '#99b0c6',
          500: '#7a99b4',
          600: '#5c82a2',
          700: '#476d8b',
          800: '#365473',
          900: '#243c5b',
        },
        cream: '#FFFBF5',
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
    },
  },
  plugins: [],
};
export default config;
