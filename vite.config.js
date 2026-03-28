/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mauve:  '#460B5E',
        mauveL: '#5E1280',
        cream:  '#F9F7F2',
        orange: '#FF6400',
        orangeH:'#E55900',
        charcoal:'#1A1A1A',
      },
      fontFamily: {
        display: ['Clash Display', 'Montserrat', 'sans-serif'],
        body:    ['DM Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
