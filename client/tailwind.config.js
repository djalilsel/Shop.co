/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkblack: "#000",
        basewhite: "#fff"
      },
      backgroundImage: {
        'hero': `url('/_next/static/media/mainbg.png')`
      }

    },
  },
  plugins: [],
}
