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
        'b-text': '#494d66',
        'b-back': '#EDEEF2',
        'b-border': '#cccccc',
        'b-gray': '#808080',
        't-border': '#102D46',
        'b-delete': '#ff8080',
        'f0f0f0': '#f0f0f0',
        'f1f1f3': '#f1f1f3'
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
