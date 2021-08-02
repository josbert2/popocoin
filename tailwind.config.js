const colors = require('tailwindcss/colors')
module.exports = {
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    screens: {
      'xs': '480px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      // MAX


      'm2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'mxl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'mlg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'mmd': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'msm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'mxs': {'max': '480px'},
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      'Avenir': ['Avenir']
     },
     boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
     },
     extend: {},
     colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        'ek-green': {
          DEFAULT: '#06CCCA',
          '50': '#BBFDFC',
          '100': '#A2FCFB',
          '200': '#70FBF9',
          '300': '#3FF9F7',
          '400': '#0DF8F6',
          '500': '#06CCCA',
          '600': '#059A99',
          '700': '#036968',
          '800': '#023737',
          '900': '#000606'
        },
        'ek-blue': {
          DEFAULT: '#00B4F0',
          '50': '#D7F5FF',
          '100': '#BDEFFF',
          '200': '#8AE2FF',
          '300': '#57D5FF',
          '400': '#24C8FF',
          '500': '#00B4F0',
          '600': '#008EBD',
          '700': '#00688A',
          '800': '#004157',
          '900': '#001B24'
        },
      }
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }