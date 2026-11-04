/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F7F2EA',
          deep: '#EEE5D8',
        },
        ink: {
          DEFAULT: '#1B1310',
          raised: '#2A1F19',
          soft: '#5C4D42',
          faint: '#75655A',
        },
        clay: {
          DEFAULT: '#A4502A',
          dark: '#84401F',
          light: '#D9A777',
          pale: '#E9D3BC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
