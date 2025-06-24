/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6366f1', // indigo-500
          dark: '#818cf8',  // indigo-400
        },
        background: {
          light: '#f9fafb', // gray-50
          dark: '#18181b',  // zinc-900
        },
        surface: {
          light: '#fff',
          dark: '#23272f',
        },
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
};
