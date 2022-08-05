/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',,
  ],
  theme: {
    colors: {
      background : '#F5FAFE',
      primary: '#001233', //Text Color
      secondary: '#0078F0',
      neutral: { //INI SHADES PUTIH KE GREY 
          100: '#FFFFFF',
          200: '#F6F6F6',
          300: '#EDEDED',
          400: '#DFDFDF'
      }
      
    },
    extend: {},
  },
  plugins: [],
}
