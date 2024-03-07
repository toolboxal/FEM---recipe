/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['YoungSerif', 'Georgia'],
        sans: ['Outfit', 'system-ui'],
      },
      colors: {
        BrandyRed: '#854632',
        DarkRaspberry: '#7A284E',
        DarkCharcoal: '#312E2C',
        WengeBrown: '#5F564D',
        EggShell: '#F3E5D7',
        WhiteCoffee: '#E3DDD7',
        Snow: '#FFF7FB',
      },
      screens: {
        md: '736px',
      },
    },
  },
  plugins: [],
}
