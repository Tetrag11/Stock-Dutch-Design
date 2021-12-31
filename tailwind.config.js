module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    animation:{
      'spin-slow': 'spin 10s linear infinite', 
      'spin-slower': 'spin 15s linear infinite',
      'spin-slow-reverse':' spin 10s linear infinite reverse',
      'spin-slower-reverse':' spin 15s linear infinite reverse',
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',    
    },
    fontSize: {
      'vwidth2':'2vw',
      'vwidthsmall': '4vw',
      'vwidthsmall5': '5vw',
      'vwidth': '2vw',
      'vwidth2.77': '2.77vw',
      'vwidth6': '6vw',
      'vwidth8': '8vw',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
     },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

