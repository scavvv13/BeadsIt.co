/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './plugins/**/*.{vue,js,ts,jsx,tsx}',
    './nuxt.config.{js,ts}'
  ],

  theme: {
    extend: {
      colors: {
        primary: '#432942',
        secondary: '#D9558D',
        accent: '#F498B5',
        neutral: '#FFDDD2'
      }
    }
  },
  plugins: []
}
