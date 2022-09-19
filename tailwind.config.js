module.exports = {
  theme: {
    extend: {
      screens: {
        'phone': '360px',

        'tablet': '768px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1440px',
        // => @media (min-width: 1280px) { ... }

        // 'xs': {
        //   min: '360px',
        //   max: '768px'
        // },
        // 'sm': {
        //   min: '768px',
        //   max: '1024px'
        // },
        // 'md': {
        //   min: '1024px',
        //   max: '1440px'
        // },
        // 'lg ': {
        //   min: '1440px'
        // }
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
        'f1f1f3': '#f1f1f3',
        'gradient': 'linear-gradient(to right, #F506FE , #06D6DF)',
        '152dff': '#152dff',
        'f8f8fa': '#f8f8fa',
        '2e3041': '#2E3041',
        '737373': '#737373',
        '323546': '#323546',
        '989bb4': '#989bb4',
        'f1f1f3': '#f1f1f3',
        '989bb4': '#989BB4',
        '9296ae': '#9296ae',
        'f1f1f3': '#f1f1f3',
        '37394d': '#37394d',
        '252633': '#252633',
        '2b4237': '#2b4237',
        '402936': '#402936',
        '484c66': '#484c66',
        'd9d9d9': '#d9d9d9',
        'f2f2f2': '#f2f2f2',
        '37394c': '#37394c',
        '9b9b9b': '#9b9b9b',
        'd6224d': '#d6224d',
        '5c6080': '#5c6080',
        '42455c': '#42455c',
        '9296ae': '#9296ae',
        'a0a5bf': '#A0A5BF',
        '1d1d28': '#1d1d28',
        '9b9b9b': '#9b9b9b'
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
