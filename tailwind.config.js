module.exports = {
theme: {
    extend: {
      screens: {
        'xs': {
          min: '360px',
          max: '768px'
        }
      },
      colors: {
        'b-body': '#2b2d3c',
        'b-blue': '#4F03FA',
        'b-yellow': '#F3BA2F',
        'b-pink': '#FC5596',
        'b-gray': '#082640',
        't-border': '#102D46'
      },
      fontSize: {
        'tiny': '.6rem',
      }
    }
  },
   purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: false, // or 'media' or 'class'

  variants: {
    extend: {},
  },
  plugins: []

};
